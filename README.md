# @f3liz/rescript-misskey-api

**Pure ReScript** Misskey API client with a **clean, intuitive API**.

> **Status**: ✅ Complete native ReScript implementation • Zero dependencies • Type-safe • **Supports Misskey & Cherrypick**

## Why @f3liz/rescript-misskey-api?

✨ **Discoverable**: Just type and let autocompletion guide you  
🎯 **Simple**: Common operations are 1-2 lines  
🔒 **Type-safe**: Full ReScript type checking  
⚡ **Fast**: Native WebSocket implementation  
🧩 **Complete**: Access 100% of the API via generated bindings  

## Quick Start

```rescript
// Connect to Misskey
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

## Architecture

This library provides a **Dual-Layer Architecture**:

1.  **High-Level Convenience API** (`Misskey`, `Cherrypick`):
    *   Hand-crafted, simplified wrappers for common tasks (Notes, Streaming, Auth).
    *   Recommended for most use cases.
    *   Hides complexity (e.g., token injection, JSON handling).

2.  **Full Generated API** (`MisskeyIoWrapper`, `KokonectLinkWrapper`):
    *   Auto-generated from OpenAPI specs.
    *   Provides **100% coverage** of every endpoint.
    *   Strictly typed request/response objects.

### File Structure

```
src/
├── Misskey.res              # High-level Misskey wrapper
├── Cherrypick.res           # High-level Cherrypick wrapper (fork support)
└── generated/
    ├── misskey-io/          # Full generated bindings for Misskey.io
    └── kokonect-link/       # Full generated bindings for Cherrypick (Kokonect)
```

## TypeScript Support

This library includes a **high-level TypeScript wrapper** and full generated definitions.

### 1. High-Level API (Recommended)

The `Misskey` class provides a simple, "down-to-earth" API similar to the ReScript version.

```typescript
import Misskey from '@f3liz/rescript-misskey-api';

// 1. Initialize
const misskey = new Misskey('https://misskey.io', 'your-token');
// Or using static connect:
// const misskey = Misskey.connect('https://misskey.io', 'your-token');

// 2. Simple operations
async function main() {
  // Create a note
  await misskey.notes.create("Hello from TypeScript!");
  
  // Create with options
  await misskey.notes.create("Private post", { 
    visibility: 'followers' 
  });
  
  // Read timeline
  const result = await misskey.notes.timeline('home', { limit: 10 });
  console.log(result);
}
```

### 2. Full Generated API (Advanced)

For access to all 400+ endpoints, use the generated client directly.

```typescript
import { MisskeyClient, Notes } from '@f3liz/rescript-misskey-api';

// Initialize generated client
const client = new MisskeyClient('https://misskey.io', 'your-token');

// Use raw endpoint
await Notes.postNotesCreate(client, {
  text: 'Raw API call',
  visibility: 'public'
});
```

### For Cherrypick (Kokonect)

```typescript
import { MisskeyClient, Chat } from '@f3liz/rescript-misskey-api/src/generated/kokonect-link/wrapper';

const client = new MisskeyClient('https://kokonect.link', 'your-token');
// ... use Chat or other Kokonect-specific APIs
```

## Examples

### 1. Standard Usage (High-Level)

Use the `Misskey` module for standard interactions:

```rescript
// Post with options
await client->Misskey.Notes.create(
  "Private post",
  ~visibility=#followers,
  ~cw="Content warning",
  ()
)

// Read timeline
let result = await client->Misskey.Notes.timeline(#local, ~limit=20, ())

// Stream notifications
client->Misskey.Stream.notifications(notif => {
  Console.log2("Notification!", notif)
})
```

### 2. Cherrypick / Fork Usage

Use the `Cherrypick` module for [Cherrypick](https://github.com/kokonect-link/cherrypick) instances. It shares the same high-level API as `Misskey`.

```rescript
let client = Cherrypick.connect("https://kokonect.link", ~token="...")

await client->Cherrypick.Notes.create("Hello Cherrypick!", ())
```

### 3. Advanced / Full API Access

If you need an endpoint not covered by the high-level wrapper, drop down to the generated wrapper.

**For Misskey:**

```rescript
// Bridge to the generated client
let wrapperClient = Misskey.connect("...")->Misskey.wrapperConnect

// Use ANY endpoint (fully typed)
open MisskeyIoWrapper
let _ = await Admin.postAdminShowUser(
  {userId: "..."} /* Typed request object */, 
  ~client=wrapperClient
)
```

**For Cherrypick (Fork-specific features):**

```rescript
// Bridge to the generated client
let wrapperClient = Cherrypick.connect("...")->Cherrypick.wrapperConnect

// Use a Cherrypick-specific endpoint
open KokonectLinkWrapper
let _ = await Chat.postChatRoomCreate(..., ~client=wrapperClient)
```

## Developing & Regenerating

To regenerate the bindings from the latest OpenAPI specs:

```bash
npm run generate
```

This script fetches specs from `misskey.io` and `kokonect.link` and updates the `src/generated/` directories.

## License

MIT