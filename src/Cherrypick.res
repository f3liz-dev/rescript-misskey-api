// SPDX-License-Identifier: MPL-2.0
// Cherrypick.res - Convenience API for Cherrypick (Kokonect.link fork)
//
// This provides the same high-level API as Misskey.res but for the
// Cherrypick/Kokonect.link fork. It uses the same Misskey API conventions
// (POST-only, token-in-body) since Cherrypick is a Misskey fork.
//
// Quick Start:
//   let client = Cherrypick.connect("https://kokonect.link", ~token="your-token")
//
// The generated wrapper is available at:
//   KokonectLinkWrapper — typed pipe-first API for all Cherrypick endpoints

// Re-export the Misskey client type and all convenience modules.
// Cherrypick shares the same API conventions as Misskey, so all
// the high-level APIs (Notes, Stream, Emojis, etc.) work identically.

// Use the same types
type t = Misskey.t
type fetchFn = Misskey.fetchFn

/// Connect to a Cherrypick instance (e.g., kokonect.link).
///
/// Example:
///   let client = Cherrypick.connect("https://kokonect.link", ~token="abc123")
let connect = Misskey.connect

// All high-level convenience APIs work the same way as Misskey
module Notes = Misskey.Notes
module Stream = Misskey.Stream
module Emojis = Misskey.Emojis
module CustomTimelines = Misskey.CustomTimelines
module MiAuth = Misskey.MiAuth

// Re-export utilities
let request = Misskey.request
let currentUser = Misskey.currentUser
let origin = Misskey.origin
let close = Misskey.close

// Re-export error utilities
type apiError = Misskey.apiError
let isPermissionDenied = Misskey.isPermissionDenied
let isAPIError = Misskey.isAPIError

// Access to the generated typed wrapper for Cherrypick-specific endpoints
// (e.g., Chat API that doesn't exist in vanilla Misskey)
//
// Usage:
//   let wrapperClient = Cherrypick.wrapperConnect(client)
//   let result = await KokonectLinkWrapper.Chat.postChatRoomCreate(request, ~client=wrapperClient)

/// Create a wrapper client for use with the generated KokonectLinkWrapper.
/// This bridges the high-level Cherrypick.t client to the generated wrapper's client type.
let wrapperConnect = (client: t): KokonectLinkWrapper.client => {
  KokonectLinkWrapper.connect(~baseUrl=client.origin, ~token=?client.token, ~fetch=client.fetchFn, ())
}

let default = connect
