// SPDX-License-Identifier: MIT

type t = [
  | #likeOnly
  | #likeOnlyForRemote
  | #nonSensitiveOnly
  | #nonSensitiveOnlyForLocalLikeOnlyForRemote
]

let fromString = (str: string): option<t> => {
  switch str {
  | "likeOnly" => Some(#likeOnly)
  | "likeOnlyForRemote" => Some(#likeOnlyForRemote)
  | "nonSensitiveOnly" => Some(#nonSensitiveOnly)
  | "nonSensitiveOnlyForLocalLikeOnlyForRemote" =>
    Some(#nonSensitiveOnlyForLocalLikeOnlyForRemote)
  | _ => None
  }
}

let toString = (acceptance: t): string => {
  switch acceptance {
  | #likeOnly => "likeOnly"
  | #likeOnlyForRemote => "likeOnlyForRemote"
  | #nonSensitiveOnly => "nonSensitiveOnly"
  | #nonSensitiveOnlyForLocalLikeOnlyForRemote => "nonSensitiveOnlyForLocalLikeOnlyForRemote"
  }
}
