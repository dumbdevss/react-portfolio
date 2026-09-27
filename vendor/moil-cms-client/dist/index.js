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
export class MoilCmsError extends Error {
    constructor(message, status, code) {
        super(message);
        this.name = "MoilCmsError";
        this.status = status;
        this.code = code;
    }
}
export function createMoilClient(opts) {
    const baseUrl = opts.baseUrl.replace(/\/+$/, "");
    const basePath = (opts.basePath ?? "/api/v1").replace(/\/+$/, "");
    const studio = encodeURIComponent(opts.studio);
    const doFetch = opts.fetch ?? globalThis.fetch;
    if (typeof doFetch !== "function") {
        throw new MoilCmsError("No fetch implementation available; pass one via options.fetch", 0);
    }
    async function request(path, query) {
        const url = new URL(`${baseUrl}${basePath}/studios/${studio}${path}`);
        for (const [k, v] of Object.entries(query ?? {})) {
            if (v !== undefined)
                url.searchParams.set(k, String(v));
        }
        const res = await doFetch(url.toString(), {
            headers: { "x-api-key": opts.apiKey, accept: "application/json" },
        });
        if (res.status === 404)
            return { status: 404, body: null };
        let body = null;
        try {
            body = await res.json();
        }
        catch {
            /* non-JSON error body */
        }
        if (!res.ok) {
            const code = body?.error;
            throw new MoilCmsError(`Moil CMS request failed (${res.status})${code ? `: ${code}` : ""}`, res.status, code);
        }
        return { status: res.status, body: body };
    }
    return {
        async entries(type, params) {
            const { body } = await request(`/entries/${encodeURIComponent(type)}`, {
                limit: params?.limit,
                offset: params?.offset,
            });
            return body ?? { data: [], limit: params?.limit ?? 50, offset: params?.offset ?? 0, total: 0 };
        },
        async entry(type, slug) {
            const { body } = await request(`/entries/${encodeURIComponent(type)}/${encodeURIComponent(slug)}`);
            return body?.data ?? null;
        },
        async media(id) {
            const { body } = await request(`/media/${encodeURIComponent(id)}`);
            return body?.data ?? null;
        },
        async imageUrl(id) {
            if (!id)
                return null;
            const asset = await this.media(id);
            return asset?.url ?? null;
        },
    };
}
