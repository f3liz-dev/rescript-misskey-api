# @f3liz/rescript-misskey-api

Type-safe Misskey API bindings for ReScript, generated from OpenAPI specs.

Supports Misskey instances. All endpoints are fully typed.

## Usage

### ReScript

```rescript
let client = Misskey.connect("https://misskey.io", ~token="your-token")

// Post a note
await client->Misskey.Notes.create("Hello, Misskey!", ())

// Read timeline
let notes = await client->Misskey.Notes.timeline(#home, ~limit=20, ())
```

## Installation

```bash
npm install @f3liz/rescript-misskey-api
```

If you are using ReScript, add to your `rescript.json`:

```json
{
  "dependencies": ["@f3liz/rescript-misskey-api"]
}
```

## Architecture

Two layers:

1. **High-level API** (`Misskey`, `Cherrypick`): Simplified wrappers for common operations (notes, timeline, streaming).

2. **Generated API** (`MisskeyIoWrapper`, `KokonectLinkWrapper`): Complete bindings for all 400+ endpoints, auto-generated from OpenAPI specs.

## Advanced Usage

### Full Generated API (ReScript)

Access any endpoint not covered by the high-level wrapper:

```rescript
let wrapperClient = Misskey.connect("...")->Misskey.wrapperConnect

open MisskeyIoWrapper
let result = await Admin.postAdminShowUser({userId: "..."}, ~client=wrapperClient)
```

### Cherrypick

```rescript
let client = Cherrypick.connect("https://kokonect.link", ~token="...")
await client->Cherrypick.Notes.create("Hello Cherrypick!", ())
```

## Regenerating Bindings

To update bindings from the latest OpenAPI specs:

```bash
npm run generate
```

Fetches specs from `misskey.io` and `kokonect.link` and regenerates `src/generated/`.

## License

MIT