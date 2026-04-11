// SPDX-License-Identifier: MIT

type t = {
  id: string,
  name: string,
  url: string,
  thumbnailUrl: option<string>,
  @as("type") type_: string,
  isSensitive: bool,
  width: option<int>,
  height: option<int>,
}

// Computed Properties

let isImage = (file: t): bool => {
  file.type_->String.startsWith("image/")
}

let isVideo = (file: t): bool => {
  file.type_->String.startsWith("video/")
}

let aspectRatio = (file: t): option<float> => {
  switch (file.width, file.height) {
  | (Some(w), Some(h)) if h > 0 => Some(Float.fromInt(w) /. Float.fromInt(h))
  | _ => None
  }
}

let displayUrl = (file: t): string => {
  file.thumbnailUrl->Option.getOr(file.url)
}

// Sury Schema

type properties = {
  width: Nullable.t<float>,
  height: Nullable.t<float>,
}

type raw = {
  id: string,
  name: string,
  url: string,
  thumbnailUrl: Nullable.t<string>,
  @as("type") type_: string,
  isSensitive: bool,
  properties: Nullable.t<properties>,
}

let propertiesSchema = S.object(s => {
  width: s.field("width", S.nullable(S.float)),
  height: s.field("height", S.nullable(S.float)),
})

let schema = S.object(s => {
  id: s.field("id", S.string),
  name: s.field("name", S.string),
  url: s.field("url", S.string),
  thumbnailUrl: s.field("thumbnailUrl", S.nullable(S.string)),
  type_: s.field("type", S.string),
  isSensitive: s.fieldOr("isSensitive", S.bool, false),
  properties: s.field("properties", S.nullable(propertiesSchema)),
})

let fromRaw = (raw: raw): t => {
  let width =
    raw.properties
    ->Nullable.toOption
    ->Option.flatMap(p => p.width->Nullable.toOption->Option.map(Float.toInt))

  let height =
    raw.properties
    ->Nullable.toOption
    ->Option.flatMap(p => p.height->Nullable.toOption->Option.map(Float.toInt))

  {
    id: raw.id,
    name: raw.name,
    url: raw.url,
    thumbnailUrl: raw.thumbnailUrl->Nullable.toOption,
    type_: raw.type_,
    isSensitive: raw.isSensitive,
    width,
    height,
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
  | Ok(file) => Some(file)
  | Error(_) => None
  }
}
