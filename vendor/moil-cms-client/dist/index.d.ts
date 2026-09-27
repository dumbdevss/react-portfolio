/**
 * @moil/cms-client — typed client for the Moil CMS content API.
 *
 * Zero dependencies; uses the global `fetch` (Node 18+, browsers, edge runtimes).
 *
 *   import { createMoilClient } from "@moil/cms-client";
 *   const cms = createMoilClient({
 *     baseUrl: "https://cms.yoursite.com", // or http://localhost:3000 in dev
 *     studio: "acme-blog",
 *     apiKey: process.env.MOIL_API_KEY!,
 *   });
 *   const { data: posts } = await cms.entries<{ title: string; body: string }>("post");
 */
export interface MoilClientOptions {
    /** Origin of the CMS / content API, e.g. "https://cms.example.com" or "http://localhost:3000". */
    baseUrl: string;
    /** Studio slug the API key belongs to. */
    studio: string;
    /** A `cms_live_…` API key with the `content:read` scope. */
    apiKey: string;
    /**
     * Path prefix for the API. Defaults to "/api/v1" (the Next.js route in the
     * CMS app). Set to "/v1" if you point baseUrl at the Cloudflare Worker.
     */
    basePath?: string;
    /** Override the fetch implementation (e.g. for tests or custom caching). */
    fetch?: typeof fetch;
}
export interface Entry<T = Record<string, unknown>> {
    id: string;
    slug: string;
    data: T;
    published_at: string | null;
    updated_at: string;
}
export interface ListResult<T = Record<string, unknown>> {
    data: Entry<T>[];
    limit: number;
    offset: number;
    total: number;
}
export interface MediaAsset {
    id: string;
    url: string;
    mime_type: string;
    size_bytes: number;
}
export interface ListParams {
    limit?: number;
    offset?: number;
}
export declare class MoilCmsError extends Error {
    status: number;
    code?: string;
    constructor(message: string, status: number, code?: string);
}
export interface MoilClient {
    /** List published entries of a content type (newest first). */
    entries<T = Record<string, unknown>>(type: string, params?: ListParams): Promise<ListResult<T>>;
    /** Get one published entry by slug, or `null` if it doesn't exist. */
    entry<T = Record<string, unknown>>(type: string, slug: string): Promise<Entry<T> | null>;
    /** Resolve a media id (as stored in an entry's image field) to its asset, or `null`. */
    media(id: string): Promise<MediaAsset | null>;
    /** Convenience: resolve a media id straight to a URL string, or `null`. */
    imageUrl(id: string | null | undefined): Promise<string | null>;
}
export declare function createMoilClient(opts: MoilClientOptions): MoilClient;
