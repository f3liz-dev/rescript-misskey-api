# @f3liz/rescript-misskey-api

**Pure ReScript** Misskey API client with a **clean, intuitive API** - discoverable through autocompletion!

> **Status**: ✅ Complete native ReScript implementation • Zero dependencies • Ultra-simple API • **🌳 Multi-fork support (Misskey + Cherrypick)**

## Why @f3liz/rescript-misskey-api?

✨ **Discoverable**: Just type and let autocompletion guide you  
🎯 **Simple**: Common operations are 1-2 lines  
🔒 **Type-safe**: Full ReScript type checking  
📦 **Zero dependencies**: No misskey-js required  
⚡ **Fast**: Native WebSocket implementation  
🧩 **Flexible**: Optional parameters for advanced use  
🌳 **Multi-fork support**: Works with both Misskey and Cherrypick with shared code + fork-specific extensions

## Quick Start

```rescript
// Connect
let client = Misskey.connect("https://misskey.io", ~token="your-token")

// Post a note
await client->Misskey.Notes.create("Hello, Misskey!", ())

// Stream timeline
let sub = client->Misskey.Stream.timeline(#home, note => {
  Console.log2("New note!", note)
})

// Cleanup
sub.dispose()
```

**That's it!** Everything else you discover through autocompletion.

> 💡 **Tip**: Use qualified names (`Misskey.connect`, `Misskey.Notes`) instead of `open Misskey` to avoid naming conflicts.

## Installation

```bash
npm install @f3liz/rescript-misskey-api
```

Add to your `rescript.json`:

```json
{
  "bs-dependencies": ["@f3liz/rescript-misskey-api"]
}
```

## Examples

### Post Notes

```rescript
// Simple post
await client->Misskey.Notes.create("Hello!", ())

// With options
await client->Misskey.Notes.create(
  "Private post",
  ~visibility=#followers,
  ~cw="Content warning",
  ()
)

// Reply to a note
await client->Misskey.Notes.create(
  "Great post!",
  ~replyId="note-id",
  ()
)

// React to a note
await client->Misskey.Notes.react("note-id", "👍")
```

### Read Timelines

```rescript
// Get home timeline
let result = await client->Misskey.Notes.timeline(#home, ~limit=20, ())

switch result {
| Ok(notes) => Console.log(notes)
| Error(msg) => Console.error(msg)
}

// Other timelines: #local, #global, #hybrid
await client->Misskey.Notes.timeline(#local, ())
```

### Real-time Streaming

```rescript
// Stream timeline
let homeSub = client->Misskey.Stream.timeline(#home, note => {
  Console.log2("New note!", note)
})

// Stream notifications
let notifSub = client->Misskey.Stream.notifications(notif => {
  Console.log2("Notification!", notif)
})

// Connection events
client->Misskey.Stream.onConnected(() => Console.log("Connected!"))
client->Misskey.Stream.onDisconnected(() => Console.log("Disconnected!"))

// Cleanup
homeSub.dispose()
notifSub.dispose()
```

## API Overview

### Connection

```rescript
// Public instance
let client = Misskey.connect("https://misskey.io")

// Authenticated
let myClient = Misskey.connect("https://misskey.io", ~token="abc123")
```

### Notes API

```rescript
client->Misskey.Notes.create(text, ~visibility?, ~cw?, ~localOnly?, ~replyId?, ~renoteId?, ())
client->Misskey.Notes.delete(noteId)
client->Misskey.Notes.timeline(#home | #local | #global | #hybrid, ~limit?, ~sinceId?, ~untilId?, ())
client->Misskey.Notes.react(noteId, reaction)
```

### Stream API

```rescript
client->Misskey.Stream.timeline(type_, onNote) // Returns {dispose: unit => unit}
client->Misskey.Stream.notifications(onNotification)
client->Misskey.Stream.onConnected(callback)
client->Misskey.Stream.onDisconnected(callback)
Misskey.Stream.close(client)
```

## Discover Through Autocompletion

The API is designed to be self-documenting. Just start typing:

1. Type: `client->Misskey.Notes.`
2. See: `create`, `delete`, `timeline`, `react`
3. Pick one and see clear parameters with documentation
4. Done!

Every function has:
- Clear, descriptive names
- Inline documentation
- Sensible defaults
- Type-safe parameters

## Architecture

This is a **pure ReScript implementation**:

- 🎯 Native WebSocket bindings - No JavaScript dependencies
- 📦 OpenAPI-generated types - Auto-generated from official Misskey spec
- 🔒 Full type safety - ReScript all the way down
- ⚡ Better tree-shaking - Smaller bundle sizes
- 🌳 Multi-fork support - Modular structure for Misskey and Cherrypick

### Multi-Fork Support

@f3liz/rescript-misskey-api uses the unique multi-fork feature from `rescript-codegen-openapi` to support both Misskey and Cherrypick with a **modular, composable structure**:

#### How It Works

The code generator intelligently separates:
1. **Shared Base**: Endpoints that are identical in both APIs
2. **Fork Extensions**: Endpoints that are new or modified in the fork

This means **zero duplication** - shared endpoints are generated once, and Cherrypick only contains the differences!

#### Output Structure

```
src/generated/
├── Account.res            # 32 shared endpoints  
├── Notes.res              # Shared notes endpoints
├── Users.res              # Shared user endpoints
├── ...                    # Other shared modules
├── ComponentSchemas.res   # Shared type definitions
├── Cherrypick/            # Cherrypick extensions (NO duplication!)
│   ├── Account.res        # 67 extension endpoints (0 overlap with base!)
│   ├── Notes.res          # Modified notes endpoints
│   ├── Chat.res           # Cherrypick-only feature
│   ├── Groups.res         # Cherrypick-only feature
│   └── ...                # Other extension modules
├── cherrypick-diff.md     # Detailed API differences
└── cherrypick-merge.md    # Merge statistics
```

#### Key Stats

- **Shared Base**: 252 endpoints common to both
- **Cherrypick Extensions**: 239 endpoints (80 new + 159 modified)
- **Zero Duplication**: Extensions only contain diffs
- **Composable**: Mix and match with `open`

#### Usage

```rescript
// 1. Use shared endpoints only (work on both Misskey and Cherrypick)
open Account
let _result = await postClipsAddNote(~body={...}, ~fetch)

// 2. Use Cherrypick-only features
module CherrypickChat = Cherrypick.Chat
let _messages = await CherrypickChat.postChatMessagesUserTimeline(~body={...}, ~fetch)

// 3. Compose base + extensions (language-level composition!)
open Account                    // 32 shared endpoints
open Cherrypick.Account         // 67 extension endpoints
// Now you have all 99 endpoints with no duplication!

let _shared = await postClipsAddNote(~body={...}, ~fetch)      // From base
let _extension = await postBlockingCreate(~body={...}, ~fetch) // From Cherrypick
```

#### Benefits

- ✨ **Zero Duplication**: Shared code generated once, extensions are pure diffs
- 🔧 **Language-Level Composition**: Use ReScript's `open` to compose base + extensions
- 🚀 **Type-Safe**: Full types for both shared and fork-specific APIs
- 📦 **Tree-Shakeable**: One file per tag - bundle only what you use
- 🎯 **Smart Merging**: Automatically detects identical vs modified endpoints

### Regenerating Bindings

To regenerate the API bindings with the latest specs:

```bash
npm run generate
```

This will:
1. Fetch the latest OpenAPI specs from Misskey.io and Kokonect.link (Cherrypick)
2. Analyze and separate shared vs fork-specific endpoints
3. Generate modular files (one per API tag) with zero duplication
4. Output shared code in the root directory
5. Output Cherrypick extensions (diffs only) in the `Cherrypick/` subdirectory
6. Generate detailed diff and merge reports

## Examples

Check out the [examples/](examples/) directory:

- **[QuickStart.res](examples/QuickStart.res)** - Get started in 60 seconds
- **[NewAPIExample.res](examples/NewAPIExample.res)** - Complete API tour
- **[WebSocketTestExample.res](examples/WebSocketTestExample.res)** - Test WebSocket connections

## License

MIT

## Credits

Pure ReScript implementation of the Misskey API client. Built from the ground up for simplicity and type safety.

Misskey is a decentralized social platform - part of the Fediverse. Learn more at [misskey-hub.net](https://misskey-hub.net/).
