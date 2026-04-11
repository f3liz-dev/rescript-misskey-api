// SPDX-License-Identifier: MIT

type t = {
  id: string,
  name: string,
  username: string,
  avatarUrl: string,
  host: option<string>,
}

// Computed Properties

let fullUsername = (user: t): string => {
  switch user.host {
  | Some(h) => "@" ++ user.username ++ "@" ++ h
  | None => "@" ++ user.username
  }
}

let displayName = (user: t): string => {
  if user.name == "" {
    user.username
  } else {
    user.name
  }
}

let isLocal = (user: t): bool => {
  user.host->Option.isNone
}

// Sury Schema

type raw = {
  id: string,
  username: string,
  name: Nullable.t<string>,
  avatarUrl: string,
  host: Nullable.t<string>,
}

let schema = S.object(s => {
  id: s.field("id", S.string),
  username: s.field("username", S.string),
  name: s.field("name", S.nullable(S.string)),
  avatarUrl: s.fieldOr("avatarUrl", S.string, ""),
  host: s.field("host", S.nullable(S.string)),
})

let fromRaw = (raw: raw): t => {
  let name = raw.name->Nullable.toOption->Option.getOr(raw.username)

  {
    id: raw.id,
    name,
    username: raw.username,
    avatarUrl: raw.avatarUrl,
    host: raw.host->Nullable.toOption,
  }
}

let parse = (json: JSON.t): result<t, S.error> => {
  try {
    let raw = json->S.parseOrThrow(schema)
    Ok(fromRaw(raw))
  } catch {
  | S.Error(e) => Error(e)
  }
}

let decode = (json: JSON.t): option<t> => {
  switch parse(json) {
  | Ok(user) => Some(user)
  | Error(_) => None
  }
}
