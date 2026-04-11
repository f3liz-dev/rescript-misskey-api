// SPDX-License-Identifier: MIT

// JSON helper utilities
let getString = (obj: Dict.t<JSON.t>, key: string): option<string> => {
  obj->Dict.get(key)->Option.flatMap(v => {
    switch v {
    | JSON.Null => None
    | _ => JSON.Decode.string(v)
    }
  })
}

let getStringOr = (obj: Dict.t<JSON.t>, key: string, default: string): string => {
  getString(obj, key)->Option.getOr(default)
}

// Decode reactions dict (emoji name -> count)
let decodeReactions = (reactionsOpt: option<JSON.t>): Dict.t<int> => {
  reactionsOpt
  ->Option.flatMap(JSON.Decode.object)
  ->Option.map(obj => {
    let result = Dict.make()
    obj->Dict.toArray->Array.forEach(((reaction, countJson)) => {
      countJson->JSON.Decode.float->Option.forEach(countFloat => {
        let count = Float.toInt(countFloat)
        if count > 0 {
          result->Dict.set(reaction, count)
        }
      })
    })
    result
  })
  ->Option.getOr(Dict.make())
}

// Decode reaction emojis dict (emoji name -> URL)
let decodeReactionEmojis = (emojisOpt: option<JSON.t>): Dict.t<string> => {
  emojisOpt
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

// Decode files array
let decodeFiles = (filesOpt: option<JSON.t>): array<FileView.t> => {
  filesOpt
  ->Option.flatMap(JSON.Decode.array)
  ->Option.map(arr => arr->Array.filterMap(FileView.decode))
  ->Option.getOr([])
}

// Decode user
let decodeUser = (userOpt: option<JSON.t>): UserView.t => {
  userOpt
  ->Option.flatMap(UserView.decode)
  ->Option.getOr({
    id: "",
    name: "Unknown",
    username: "unknown",
    avatarUrl: "",
    host: None,
  })
}

// Decode a single note (recursive for renotes)
let rec decode = (json: JSON.t, ~onEmojis: option<Dict.t<string> => unit>=?, ()): option<NoteView.t> => {
  json
  ->JSON.Decode.object
  ->Option.map(obj => {
    // Extract and notify about emojis if callback provided
    let notifyEmojis = (o: Dict.t<JSON.t>) => {
      ["reactionEmojis", "emojis"]->Array.forEach(field => {
        let dict = decodeReactionEmojis(o->Dict.get(field))
        if dict->Dict.keysToArray->Array.length > 0 {
          onEmojis->Option.forEach(fn => fn(dict))
        }
      })
    }

    notifyEmojis(obj)

    let renote = obj->Dict.get("renote")->Option.flatMap(j => decode(j, ~onEmojis?, ()))
    let reply = obj->Dict.get("reply")->Option.flatMap(j => decode(j, ~onEmojis?, ()))

    // Notify emojis from renote/reply objects too
    [obj->Dict.get("renote"), obj->Dict.get("reply")]
    ->Array.forEach(opt =>
      opt->Option.flatMap(JSON.Decode.object)->Option.forEach(notifyEmojis)
    )

    let note: NoteView.t = {
      id: obj->getStringOr("id", ""),
      user: decodeUser(obj->Dict.get("user")),
      text: obj->getString("text"),
      cw: obj->getString("cw"),
      createdAt: obj->getStringOr("createdAt", ""),
      files: decodeFiles(obj->Dict.get("files")),
      reactions: decodeReactions(obj->Dict.get("reactions")),
      reactionEmojis: decodeReactionEmojis(obj->Dict.get("reactionEmojis")),
      myReaction: obj->getString("myReaction"),
      reactionAcceptance: obj
        ->Dict.get("reactionAcceptance")
        ->Option.flatMap(JSON.Decode.string)
        ->Option.flatMap(ReactionAcceptance.fromString),
      renote,
      replyId: obj->getString("replyId"),
      reply,
      uri: obj->getString("uri"),
    }
    note
  })
}

let decodeMany = (jsonArray: array<JSON.t>, ~onEmojis: option<Dict.t<string> => unit>=?, ()): array<NoteView.t> => {
  jsonArray->Array.filterMap(j => decode(j, ~onEmojis?, ()))
}

let decodeManyFromJson = (json: JSON.t, ~onEmojis: option<Dict.t<string> => unit>=?, ()): array<NoteView.t> => {
  json->JSON.Decode.array->Option.map(arr => decodeMany(arr, ~onEmojis?, ()))->Option.getOr([])
}
