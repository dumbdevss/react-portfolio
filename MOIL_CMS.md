# Moil CMS integration

This site pulls a "Notes" blog from **Moil CMS** (headless) via the `@moil/cms-client` SDK, alongside the existing Sanity blog.

## What was added
- `lib/moil.ts` — Moil client + `getMoilPosts()` / `getMoilPost(slug)`.
- `app/moil-blog/page.tsx` — post list (reuses `Navigation`/`Footer`/`Reveal`).
- `app/moil-blog/[slug]/page.tsx` — post page; renders the CMS `rich_text` (sanitized HTML).
- `@moil/cms-client` dependency + env vars below.

## Configure (`.env.local`)
```bash
MOIL_CMS_URL=http://127.0.0.1:3017          # your deployed CMS in prod
MOIL_STUDIO=acme-blog                        # your studio slug
MOIL_API_KEY=cms_live_...                     # a content:read key (server-side only)
```

Visit `/moil-blog`. Author/publish posts in the Moil dashboard (content type `post` with `title`, `body` rich text, `excerpt`, `cover` image).

## Notes
- The SDK version 0.1.0 is vendored in `vendor/moil-cms-client` and installed through `file:vendor/moil-cms-client`. This preserves the existing SDK without relying on a temporary `/tmp` tarball. Keep that directory in version control. Run `yarn install` from the repository root.
- To update the SDK, replace the vendored package with a reviewed release and regenerate `yarn.lock`, or switch to a published registry version once available.
- `export const revalidate = 60` controls how often the pages refetch from the CMS.
