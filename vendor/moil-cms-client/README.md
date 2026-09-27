# @moil/cms-client

Typed client for the **Moil CMS** content API. Zero dependencies, works in Node 18+, browsers, and edge runtimes.

## Install

```bash
npm install @moil/cms-client
```

## Get an API key

In the Moil CMS dashboard: open your studio → **Settings → API keys → New key** (needs the `content:read` scope). Copy the `cms_live_…` key — it's shown once. Publish your content by setting an entry's status to **Published**.

## Quick start

```ts
import { createMoilClient } from "@moil/cms-client";

const cms = createMoilClient({
  baseUrl: "https://cms.yoursite.com", // or "http://localhost:3000" in dev
  studio: "acme-blog",                 // your studio slug
  apiKey: process.env.MOIL_API_KEY!,   // keep this server-side
});

// List published posts (newest first)
type Post = { title: string; body: string; cover?: string };
const { data: posts } = await cms.entries<Post>("post");

// One post by slug
const post = await cms.entry<Post>("post", "hello-world");

// Resolve an image field (stored as a media id) to a URL
const coverUrl = await cms.imageUrl(post?.data.cover);
```

## API

| Method | Returns |
| --- | --- |
| `entries<T>(type, { limit?, offset? })` | `{ data: Entry<T>[], limit, offset, total }` |
| `entry<T>(type, slug)` | `Entry<T> \| null` (null on 404) |
| `media(id)` | `{ id, url, mime_type, size_bytes } \| null` |
| `imageUrl(id)` | `string \| null` |

`Entry<T>` is `{ id, slug, data: T, published_at, updated_at }`. `data` is the entry's fields, keyed by field name. Non-2xx responses (other than 404) throw a `MoilCmsError` with `.status` and `.code`.

### Rendering rich text

`rich_text` fields come back as **sanitized HTML strings** (safe to render):

```tsx
<article dangerouslySetInnerHTML={{ __html: post.data.body as string }} />
```

## Pointing at the Cloudflare Worker

By default the client calls the CMS app's route (`/api/v1`). To use the edge Worker instead, point `baseUrl` at the worker origin and set `basePath: "/v1"`:

```ts
createMoilClient({ baseUrl: "https://content.yoursite.com", basePath: "/v1", studio, apiKey });
```

## Raw REST (no SDK)

Any language / framework can call the API directly:

```bash
curl https://cms.yoursite.com/api/v1/studios/acme-blog/entries/post \
  -H "x-api-key: cms_live_..."
```

- `GET /api/v1/studios/:studio/entries/:type` — list published entries (`?limit=&offset=`)
- `GET /api/v1/studios/:studio/entries/:type/:slug` — one published entry
- `GET /api/v1/studios/:studio/media/:id` — resolve a media id to `{ url, mime_type, size_bytes }`

Auth header: `x-api-key: <key>` or `Authorization: Bearer <key>`.
