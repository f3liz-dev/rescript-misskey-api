// SPDX-License-Identifier: MIT

type rec t = {
  id: string,
  user: UserView.t,
  text: option<string>,
  cw: option<string>,
  createdAt: string,
  files: array<FileView.t>,
  reactions: Dict.t<int>,
  reactionEmojis: Dict.t<string>,
  myReaction: option<string>,
  reactionAcceptance: option<ReactionAcceptance.t>,
  renote: option<t>,
  replyId: option<string>,
  reply: option<t>,
  uri: option<string>,
}

// Computed Properties

let isPureRenote = (note: t): bool => {
  note.text->Option.isNone && note.files->Array.length == 0 && note.renote->Option.isSome
}

let hasContentWarning = (note: t): bool => {
  note.cw->Option.isSome
}

let hasMedia = (note: t): bool => {
  note.files->Array.length > 0
}

let imageFiles = (note: t): array<FileView.t> => {
  note.files->Array.filter(FileView.isImage)
}

let reactionCount = (note: t): int => {
  note.reactions
  ->Dict.valuesToArray
  ->Array.reduce(0, (acc, count) => acc + count)
}

let hasUserReacted = (note: t): bool => {
  note.myReaction->Option.isSome
}
