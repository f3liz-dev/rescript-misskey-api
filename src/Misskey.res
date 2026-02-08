// SPDX-License-Identifier: MPL-2.0
// Misskey.res - Clean, intuitive API for Misskey
//
// This is the main entry point providing a simple, discoverable API.
//
// Quick Start:
//   let client = Misskey.connect("https://misskey.io", ~token="your-token")
//
//   // Fetch timeline
//   let notes = await client->Misskey.Notes.fetch(#home, ~limit=20, ())
//
//   // Stream timeline
//   let sub = client->Misskey.Stream.timeline(#home, note => {
//     Console.log2("New note!", note)
//   })
//
// The default fetch implementation uses the browser's Fetch API.
// You can override it by passing ~fetch to connect() for custom behavior
// (e.g., adding performance metrics, retries, logging, etc.).

// ============================================================================
// Fetch Bindings
// ============================================================================

module FetchBindings = {
  type response

  type requestInit = {
    method: string,
    headers: dict<string>,
    body: option<string>,
  }

  @val external fetch: (string, requestInit) => promise<response> = "fetch"

  @send external json: response => promise<JSON.t> = "json"
  @get external ok: response => bool = "ok"
  @get external status: response => int = "status"
  @get external statusText: response => string = "statusText"
}

// ============================================================================
// Client & Configuration
// ============================================================================

// The fetch function signature used by the generated wrapper
type fetchFn = (~url: string, ~method_: string, ~body: option<JSON.t>) => Promise.t<JSON.t>

type t = {
  origin: string,
  token: option<string>,
  fetchFn: fetchFn,
  mutable streamClient: option<StreamClient.t>,
}

// Default fetch implementation using the browser's Fetch API.
// Constructs full URL from origin + endpoint path, sets JSON headers,
// and injects the auth token into the request body (Misskey API convention).
let defaultFetch = (~origin: string, ~token: option<string>) => {
  (~url: string, ~method_: string, ~body: option<JSON.t>): Promise.t<JSON.t> => {
    let fullUrl = `${origin}/api/${url}`

    // Misskey injects the token into the request body
    let bodyWithToken = switch (body, token) {
    | (Some(jsonBody), Some(t)) =>
      switch jsonBody->JSON.Decode.object {
      | Some(obj) =>
        obj->Dict.set("i", t->JSON.Encode.string)
        Some(obj->JSON.Encode.object)
      | None => body
      }
    | (None, Some(t)) =>
      let obj = Dict.make()
      obj->Dict.set("i", t->JSON.Encode.string)
      Some(obj->JSON.Encode.object)
    | _ => body
    }

    let bodyStr = bodyWithToken->Option.map(json => JSON.stringify(json))

    let headers = Dict.make()
    headers->Dict.set("Content-Type", "application/json")

    FetchBindings.fetch(
      fullUrl,
      {
        method: method_,
        headers,
        body: bodyStr,
      },
    )->Promise.then(response => {
      if FetchBindings.ok(response) {
        response->FetchBindings.json
      } else {
        let msg = `API error: ${FetchBindings.status(response)->Int.toString} ${FetchBindings.statusText(response)}`
        Promise.reject(JsExn(JsError.make(msg)->Obj.magic))
      }
    })
  }
}

/// Connect to a Misskey instance.
///
/// The default fetch uses the browser's Fetch API, injects the token into
/// the request body, and constructs URLs from the origin. Override ~fetch
/// to add custom behavior (logging, retries, metrics, etc.).
///
/// Example:
///   let client = Misskey.connect("https://misskey.io", ~token="abc123")
///
///   // With custom fetch:
///   let client = Misskey.connect("https://misskey.io", ~token="abc123", ~fetch=myCustomFetch)
let connect = (origin: string, ~token: option<string>=?, ~fetch: option<fetchFn>=?): t => {
  let fetchFn = switch fetch {
  | Some(f) => f
  | None => defaultFetch(~origin, ~token)
  }

  {
    origin,
    token,
    fetchFn,
    streamClient: None,
  }
}

// ============================================================================
// Generic Request
// ============================================================================

/// Make a generic API request to any endpoint.
///
/// Example:
///   let user = await client->Misskey.request("i", ())
let request = (
  client: t,
  endpoint: string,
  ~params: JSON.t=JSON.Encode.object(Dict.make()),
  (),
): promise<result<JSON.t, string>> => {
  client.fetchFn(~url=endpoint, ~method_="POST", ~body=Some(params))
  ->Promise.then(json => Ok(json)->Promise.resolve)
  ->Promise.catch(err => {
    let msg = switch err->JsExn.fromException {
    | Some(jsExn) => JsExn.message(jsExn)->Option.getOr("Unknown error")
    | None => "Unknown error"
    }
    Error(msg)->Promise.resolve
  })
}

/// Get current user info.
let currentUser = (client: t): promise<result<JSON.t, string>> => {
  request(client, "i", ())
}

/// Get client origin (instance URL).
let origin = (client: t): string => client.origin

/// Close client and cleanup (close streaming connections).
let close = (client: t): unit => {
  client.streamClient->Option.forEach(s => s->StreamClient.close)
  client.streamClient = None
}

// ============================================================================
// Notes API
// ============================================================================

module Notes = {
  type visibility = [#public | #home | #followers | #specified]

  type timelineType = [
    | #home
    | #local
    | #global
    | #hybrid
    | #antenna(string)
    | #list(string)
    | #channel(string)
  ]

  /// Create a note.
  let create = (
    client: t,
    text: string,
    ~visibility: visibility=#public,
    ~cw: option<string>=?,
    ~localOnly: bool=false,
    ~replyId: option<string>=?,
    ~renoteId: option<string>=?,
    (),
  ): promise<result<JSON.t, string>> => {
    let params = Dict.make()
    params->Dict.set("text", text->JSON.Encode.string)

    let vis = switch visibility {
    | #public => "public"
    | #home => "home"
    | #followers => "followers"
    | #specified => "specified"
    }
    params->Dict.set("visibility", vis->JSON.Encode.string)
    params->Dict.set("localOnly", localOnly->JSON.Encode.bool)

    cw->Option.forEach(v => params->Dict.set("cw", v->JSON.Encode.string))
    replyId->Option.forEach(v => params->Dict.set("replyId", v->JSON.Encode.string))
    renoteId->Option.forEach(v => params->Dict.set("renoteId", v->JSON.Encode.string))

    request(client, "notes/create", ~params=params->JSON.Encode.object, ())
  }

  /// Delete a note.
  let delete = (client: t, noteId: string): promise<result<JSON.t, string>> => {
    let params = Dict.make()
    params->Dict.set("noteId", noteId->JSON.Encode.string)
    request(client, "notes/delete", ~params=params->JSON.Encode.object, ())
  }

  /// Fetch timeline notes (one-time fetch, not streaming).
  let fetch = (
    client: t,
    type_: timelineType,
    ~limit: int=10,
    ~sinceId: option<string>=?,
    ~untilId: option<string>=?,
    (),
  ): promise<result<JSON.t, string>> => {
    let (endpoint, extraParams) = switch type_ {
    | #home => ("notes/timeline", None)
    | #local => ("notes/local-timeline", None)
    | #global => ("notes/global-timeline", None)
    | #hybrid => ("notes/hybrid-timeline", None)
    | #antenna(id) => {
        let p = Dict.make()
        p->Dict.set("antennaId", id->JSON.Encode.string)
        ("antennas/notes", Some(p))
      }
    | #list(id) => {
        let p = Dict.make()
        p->Dict.set("listId", id->JSON.Encode.string)
        ("notes/user-list-timeline", Some(p))
      }
    | #channel(id) => {
        let p = Dict.make()
        p->Dict.set("channelId", id->JSON.Encode.string)
        ("channels/timeline", Some(p))
      }
    }

    let params = Dict.make()
    params->Dict.set("limit", limit->JSON.Encode.int)
    sinceId->Option.forEach(v => params->Dict.set("sinceId", v->JSON.Encode.string))
    untilId->Option.forEach(v => params->Dict.set("untilId", v->JSON.Encode.string))

    extraParams->Option.forEach(extra => {
      extra->Dict.toArray->Array.forEach(((key, value)) => {
        params->Dict.set(key, value)
      })
    })

    request(client, endpoint, ~params=params->JSON.Encode.object, ())
  }

  /// Alias for fetch.
  let timeline = fetch

  /// React to a note.
  let react = (client: t, noteId: string, reaction: string): promise<result<JSON.t, string>> => {
    let params = Dict.make()
    params->Dict.set("noteId", noteId->JSON.Encode.string)
    params->Dict.set("reaction", reaction->JSON.Encode.string)
    request(client, "notes/reactions/create", ~params=params->JSON.Encode.object, ())
  }

  /// Remove reaction from a note.
  let unreact = (client: t, noteId: string): promise<result<JSON.t, string>> => {
    let params = Dict.make()
    params->Dict.set("noteId", noteId->JSON.Encode.string)
    request(client, "notes/reactions/delete", ~params=params->JSON.Encode.object, ())
  }
}

// ============================================================================
// Stream API - Real-time updates via WebSocket
// ============================================================================

module Stream = {
  type subscription = {dispose: unit => unit}

  let ensureStream = (client: t): StreamClient.t => {
    switch client.streamClient {
    | Some(s) => s
    | None =>
      let s = StreamClient.make(~origin=client.origin, ~credential=?client.token, ())
      client.streamClient = Some(s)
      s
    }
  }

  type timelineType = [
    | #home
    | #local
    | #global
    | #hybrid
    | #antenna(string)
    | #list(string)
    | #channel(string)
  ]

  /// Subscribe to timeline for real-time notes.
  let timeline = (client: t, type_: timelineType, onNote: JSON.t => unit): subscription => {
    let stream = ensureStream(client)

    let (channel, params) = switch type_ {
    | #home => ("homeTimeline", None)
    | #local => ("localTimeline", None)
    | #global => ("globalTimeline", None)
    | #hybrid => ("hybridTimeline", None)
    | #antenna(id) =>
      let p = Dict.make()
      p->Dict.set("antennaId", id->JSON.Encode.string)
      ("antenna", Some(p->JSON.Encode.object))
    | #list(id) =>
      let p = Dict.make()
      p->Dict.set("listId", id->JSON.Encode.string)
      ("userList", Some(p->JSON.Encode.object))
    | #channel(id) =>
      let p = Dict.make()
      p->Dict.set("channelId", id->JSON.Encode.string)
      ("channel", Some(p->JSON.Encode.object))
    }

    let conn = switch params {
    | Some(p) => stream->StreamClient.useChannel(~channel, ~params=p, ())
    | None => stream->StreamClient.useSharedChannel(~channel, ())
    }

    conn->StreamConnection.on("note", onNote)

    {dispose: () => StreamConnection.dispose(conn)}
  }

  /// Subscribe to notifications.
  let notifications = (client: t, onNotification: JSON.t => unit): subscription => {
    let stream = ensureStream(client)
    let conn = stream->StreamClient.useSharedChannel(~channel="main", ())
    conn->StreamConnection.on("notification", onNotification)
    {dispose: () => StreamConnection.dispose(conn)}
  }

  /// Listen for connection events.
  let onConnected = (client: t, callback: unit => unit): unit => {
    let stream = ensureStream(client)
    stream->StreamClient.onConnected(callback)
  }

  let onDisconnected = (client: t, callback: unit => unit): unit => {
    let stream = ensureStream(client)
    stream->StreamClient.onDisconnected(callback)
  }

  /// Close all streaming connections.
  let close = (client: t): unit => {
    client.streamClient->Option.forEach(s => s->StreamClient.close)
    client.streamClient = None
  }
}

// ============================================================================
// Emojis API
// ============================================================================

module Emojis = {
  type customEmoji = {
    name: string,
    url: string,
    category: option<string>,
    aliases: array<string>,
  }

  let decodeCustomEmoji = (json: JSON.t): option<customEmoji> => {
    switch json->JSON.Decode.object {
    | Some(obj) =>
      switch (
        obj->Dict.get("name")->Option.flatMap(JSON.Decode.string),
        obj->Dict.get("url")->Option.flatMap(JSON.Decode.string),
      ) {
      | (Some(name), Some(url)) =>
        let category = obj->Dict.get("category")->Option.flatMap(JSON.Decode.string)
        let aliases = switch obj->Dict.get("aliases")->Option.flatMap(JSON.Decode.array) {
        | Some(arr) => arr->Array.filterMap(JSON.Decode.string)->Array.filter(s => s != "")
        | None => []
        }
        Some({name, url, category, aliases})
      | _ => None
      }
    | None => None
    }
  }

  /// Get list of custom emojis from instance.
  let list = (client: t): promise<result<array<customEmoji>, string>> => {
    request(client, "emojis", ())
    ->Promise.then(result => {
      switch result {
      | Ok(json) =>
        switch json->JSON.Decode.object {
        | Some(obj) =>
          switch obj->Dict.get("emojis")->Option.flatMap(JSON.Decode.array) {
          | Some(emojisArray) => Ok(emojisArray->Array.filterMap(decodeCustomEmoji))
          | None => Ok([])
          }
        | None => Ok([])
        }
      | Error(e) => Error(e)
      }->Promise.resolve
    })
  }
}

// ============================================================================
// Custom Timelines API (Antennas, Lists, Channels)
// ============================================================================

module CustomTimelines = {
  /// Fetch user's antennas.
  let antennas = (client: t): promise<result<array<JSON.t>, string>> => {
    request(client, "antennas/list", ())
    ->Promise.then(result => {
      switch result {
      | Ok(json) =>
        switch json->JSON.Decode.array {
        | Some(arr) => Ok(arr)
        | None => Ok([])
        }
      | Error(e) => Error(e)
      }->Promise.resolve
    })
  }

  /// Fetch user's lists.
  let lists = (client: t): promise<result<array<JSON.t>, string>> => {
    request(client, "users/lists/list", ())
    ->Promise.then(result => {
      switch result {
      | Ok(json) =>
        switch json->JSON.Decode.array {
        | Some(arr) => Ok(arr)
        | None => Ok([])
        }
      | Error(e) => Error(e)
      }->Promise.resolve
    })
  }

  /// Fetch user's followed channels.
  let channels = (client: t): promise<result<array<JSON.t>, string>> => {
    request(client, "channels/followed", ())
    ->Promise.then(result => {
      switch result {
      | Ok(json) =>
        switch json->JSON.Decode.array {
        | Some(arr) => Ok(arr)
        | None => Ok([])
        }
      | Error(e) => Error(e)
      }->Promise.resolve
    })
  }

  /// Extract ID and name from a timeline item JSON.
  let extractIdAndName = (item: JSON.t): option<(string, string)> => {
    item
    ->JSON.Decode.object
    ->Option.flatMap(obj => {
      let id = obj->Dict.get("id")->Option.flatMap(JSON.Decode.string)
      let name = obj->Dict.get("name")->Option.flatMap(JSON.Decode.string)
      switch (id, name) {
      | (Some(id), Some(name)) => Some((id, name))
      | _ => None
      }
    })
  }
}

// ============================================================================
// MiAuth - OAuth-like authentication
// ============================================================================

module MiAuth = {
  type permission = [
    | #read_account
    | #write_account
    | #read_blocks
    | #write_blocks
    | #read_drive
    | #write_drive
    | #read_favorites
    | #write_favorites
    | #read_following
    | #write_following
    | #read_messaging
    | #write_messaging
    | #read_mutes
    | #write_mutes
    | #write_notes
    | #read_notifications
    | #write_notifications
    | #read_reactions
    | #write_reactions
    | #write_votes
    | #read_pages
    | #write_pages
    | #write_page_likes
    | #read_page_likes
    | #read_user_groups
    | #write_user_groups
    | #read_channels
    | #write_channels
    | #read_gallery
    | #write_gallery
    | #read_gallery_likes
    | #write_gallery_likes
    | #read_flash
    | #write_flash
    | #read_flash_likes
    | #write_flash_likes
  ]

  let permissionToString = (perm: permission): string => {
    switch perm {
    | #read_account => "read:account"
    | #write_account => "write:account"
    | #read_blocks => "read:blocks"
    | #write_blocks => "write:blocks"
    | #read_drive => "read:drive"
    | #write_drive => "write:drive"
    | #read_favorites => "read:favorites"
    | #write_favorites => "write:favorites"
    | #read_following => "read:following"
    | #write_following => "write:following"
    | #read_messaging => "read:messaging"
    | #write_messaging => "write:messaging"
    | #read_mutes => "read:mutes"
    | #write_mutes => "write:mutes"
    | #write_notes => "write:notes"
    | #read_notifications => "read:notifications"
    | #write_notifications => "write:notifications"
    | #read_reactions => "read:reactions"
    | #write_reactions => "write:reactions"
    | #write_votes => "write:votes"
    | #read_pages => "read:pages"
    | #write_pages => "write:pages"
    | #write_page_likes => "write:page-likes"
    | #read_page_likes => "read:page-likes"
    | #read_user_groups => "read:user-groups"
    | #write_user_groups => "write:user-groups"
    | #read_channels => "read:channels"
    | #write_channels => "write:channels"
    | #read_gallery => "read:gallery"
    | #write_gallery => "write:gallery"
    | #read_gallery_likes => "read:gallery-likes"
    | #write_gallery_likes => "write:gallery-likes"
    | #read_flash => "read:flash"
    | #write_flash => "write:flash"
    | #read_flash_likes => "read:flash-likes"
    | #write_flash_likes => "write:flash-likes"
    }
  }

  type authSession = {
    sessionId: string,
    authUrl: string,
  }

  type checkResult = {
    token: option<string>,
    user: option<JSON.t>,
  }

  @val external encodeURIComponent: string => string = "encodeURIComponent"

  let generateSessionId = (): string => {
    %raw(`
      function() {
        var a = new Uint8Array(16);
        crypto.getRandomValues(a);
        return Array.from(a, function(b) { return b.toString(16).padStart(2, '0'); }).join('');
      }()
    `)
  }

  /// Generate MiAuth URL for user authorization.
  let generateUrl = (
    ~origin: string,
    ~name: string,
    ~permissions: array<permission>,
    ~callback: option<string>=?,
    ~icon: option<string>=?,
    (),
  ): authSession => {
    let sessionId = generateSessionId()
    let permissionStrings = permissions->Array.map(permissionToString)
    let permissionParam = permissionStrings->Array.join(",")
    let encodedName = encodeURIComponent(name)
    let encodedPermission = encodeURIComponent(permissionParam)

    let baseUrl = `${origin}/miauth/${sessionId}?name=${encodedName}&permission=${encodedPermission}`

    let withCallback = switch callback {
    | Some(cb) => `${baseUrl}&callback=${encodeURIComponent(cb)}`
    | None => baseUrl
    }

    let authUrl = switch icon {
    | Some(ic) => `${withCallback}&icon=${encodeURIComponent(ic)}`
    | None => withCallback
    }

    {sessionId, authUrl}
  }

  /// Check if user has authorized the session.
  ///
  /// Returns Ok with token/user on success.
  /// The Misskey MiAuth check endpoint returns `{ok: true, token, user}` when
  /// authorization is complete, and `{ok: false}` when still pending.
  let check = async (~origin: string, ~sessionId: string): result<checkResult, string> => {
    try {
      let url = `${origin}/api/miauth/${sessionId}/check`

      let headers = Dict.make()
      headers->Dict.set("Content-Type", "application/json")

      let response = await FetchBindings.fetch(
        url,
        {method: "POST", headers, body: Some("{}")},
      )

      if !FetchBindings.ok(response) {
        Error(`HTTP error: ${FetchBindings.status(response)->Int.toString} ${FetchBindings.statusText(response)}`)
      } else {
        let json = await response->FetchBindings.json
        switch json->JSON.Decode.object {
        | Some(obj) =>
          // Check the "ok" field in the response body
          let isOk = obj->Dict.get("ok")->Option.flatMap(JSON.Decode.bool)->Option.getOr(false)
          if isOk {
            let token = obj->Dict.get("token")->Option.flatMap(JSON.Decode.string)
            let user = obj->Dict.get("user")
            Ok({token, user})
          } else {
            // Server explicitly says not authorized yet
            Ok({token: None, user: None})
          }
        | None => Error("Unexpected response format")
        }
      }
    } catch {
    | err =>
      let msg = switch err->JsExn.fromException {
      | Some(jsExn) => JsExn.message(jsExn)->Option.getOr("Unknown error")
      | None => "Unknown error"
      }
      Error(msg)
    }
  }

  @val @scope(("window", "location"))
  external windowLocationAssign: string => unit = "assign"

  /// Open auth URL in the current window.
  let openUrl = (authUrl: string): unit => {
    windowLocationAssign(authUrl)
  }

  @val @scope("window")
  external windowOpen: (string, string, string) => Nullable.t<{..}> = "open"

  /// Open auth URL in a new window.
  let openUrlInNewWindow = (authUrl: string): unit => {
    let _ = windowOpen(authUrl, "_blank", "width=600,height=800")
  }
}

// ============================================================================
// Error Utilities
// ============================================================================

type apiError = {
  code: string,
  message: string,
  id: string,
}

/// Check if error is permission denied.
let isPermissionDenied = (error: JSON.t): bool => {
  switch error->JSON.Decode.object {
  | Some(obj) =>
    switch obj->Dict.get("code")->Option.flatMap(JSON.Decode.string) {
    | Some("PERMISSION_DENIED") => true
    | _ => false
    }
  | None => false
  }
}

/// Check if error is an API error and extract error info.
let isAPIError = (error: JSON.t): option<apiError> => {
  switch error->JSON.Decode.object {
  | Some(obj) =>
    switch (
      obj->Dict.get("code")->Option.flatMap(JSON.Decode.string),
      obj->Dict.get("message")->Option.flatMap(JSON.Decode.string),
      obj->Dict.get("id")->Option.flatMap(JSON.Decode.string),
    ) {
    | (Some(code), Some(message), Some(id)) => Some({code, message, id})
    | _ => None
    }
  | None => None
  }
}
