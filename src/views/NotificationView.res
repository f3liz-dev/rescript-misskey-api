// SPDX-License-Identifier: MIT

type notificationType =
  | Follow
  | Mention
  | Reply
  | Renote
  | Quote
  | Reaction
  | PollEnded
  | ReceiveFollowRequest
  | FollowRequestAccepted
  | AchievementEarned
  | CreateToken
  | App
  | Unknown(string)

type t = {
  id: string,
  type_: notificationType,
  createdAt: string,
  userId: option<string>,
  userName: option<string>,
  userUsername: option<string>,
  userHost: option<string>,
  userAvatarUrl: option<string>,
  noteId: option<string>,
  noteText: option<string>,
  reaction: option<string>,
  reactionEmojis: Dict.t<string>,
  body: option<string>,
}

let parseType = (typeStr: string): notificationType => {
  switch typeStr {
  | "follow" => Follow
  | "mention" => Mention
  | "reply" => Reply
  | "renote" => Renote
  | "quote" => Quote
  | "reaction" => Reaction
  | "pollEnded" => PollEnded
  | "receiveFollowRequest" => ReceiveFollowRequest
  | "followRequestAccepted" => FollowRequestAccepted
  | "achievementEarned" => AchievementEarned
  | "createToken" => CreateToken
  | "app" => App
  | other => Unknown(other)
  }
}

let fullHandle = (notif: t): string => {
  switch (notif.userUsername, notif.userHost) {
  | (Some(u), Some(h)) => "@" ++ u ++ "@" ++ h
  | (Some(u), None) => "@" ++ u
  | _ => ""
  }
}

// Helper to safely get string from JSON object
let getStr = (obj: Dict.t<JSON.t>, key: string): option<string> => {
  obj->Dict.get(key)->Option.flatMap(v => {
    switch v {
    | JSON.Null => None
    | _ => JSON.Decode.string(v)
    }
  })
}

// Decode reaction emojis dict from note
let decodeReactionEmojis = (noteObj: option<Dict.t<JSON.t>>): Dict.t<string> => {
  noteObj
  ->Option.flatMap(n => n->Dict.get("reactionEmojis"))
  ->Option.flatMap(JSON.Decode.object)
  ->Option.map(obj =>
    obj
    ->Dict.toArray
    ->Array.filterMap(((name, urlJson)) =>
      urlJson->JSON.Decode.string->Option.map(url => (name, url))
    )
    ->Dict.fromArray
  )
  ->Option.getOr(Dict.make())
}

// Decode notification from JSON
let decode = (json: JSON.t): option<t> => {
  switch json->JSON.Decode.object {
  | Some(obj) => {
      let id = getStr(obj, "id")->Option.getOr("")
      let typeStr = getStr(obj, "type")->Option.getOr("")

      if id == "" || typeStr == "" {
        None
      } else {
        let userObj = obj->Dict.get("user")->Option.flatMap(JSON.Decode.object)
        let userName = userObj->Option.flatMap(u => {
          switch getStr(u, "name") {
          | Some(n) if n != "" => Some(n)
          | _ => getStr(u, "username")
          }
        })
        let userId = userObj->Option.flatMap(u => getStr(u, "id"))
        let userUsername = userObj->Option.flatMap(u => getStr(u, "username"))
        let userHost = userObj->Option.flatMap(u => getStr(u, "host"))
        let userAvatarUrl = userObj->Option.flatMap(u => getStr(u, "avatarUrl"))

        let noteObj = obj->Dict.get("note")->Option.flatMap(JSON.Decode.object)
        let noteId = noteObj->Option.flatMap(n => getStr(n, "id"))
        let noteText = noteObj->Option.flatMap(n => getStr(n, "text"))

        let reaction = getStr(obj, "reaction")
        let reactionEmojis = decodeReactionEmojis(noteObj)

        let body = switch typeStr {
        | "achievementEarned" => getStr(obj, "achievement")
        | _ => getStr(obj, "body")
        }

        Some({
          id,
          type_: parseType(typeStr),
          createdAt: getStr(obj, "createdAt")->Option.getOr(""),
          userId,
          userName,
          userUsername,
          userHost,
          userAvatarUrl,
          noteId,
          noteText,
          reaction,
          reactionEmojis,
          body,
        })
      }
    }
  | None => None
  }
}
