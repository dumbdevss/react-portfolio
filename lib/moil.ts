import { createMoilClient, type Entry } from '@moil/cms-client';

/**
 * Moil CMS client. Content is authored in the Moil dashboard and pulled in here
 * at request time. Set MOIL_CMS_URL / MOIL_STUDIO / MOIL_API_KEY in .env.local.
 */
const client = createMoilClient({
  baseUrl: process.env.MOIL_CMS_URL ?? 'http://127.0.0.1:3017',
  studio: process.env.MOIL_STUDIO ?? 'acme-blog',
  apiKey: process.env.MOIL_API_KEY ?? '',
});

export const moilConfigured = Boolean(process.env.MOIL_API_KEY);

export type MoilPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  /** Sanitized HTML from the CMS rich-text field. */
  body: string;
  publishedAt: string;
  coverUrl: string | null;
};

type PostFields = { title?: string; body?: string; excerpt?: string; cover?: string };

async function toPost(e: Entry<PostFields>): Promise<MoilPost> {
  return {
    id: e.id,
    slug: e.slug,
    title: e.data.title ?? e.slug,
    excerpt: e.data.excerpt ?? '',
    body: e.data.body ?? '',
    publishedAt: e.published_at ?? e.updated_at,
    coverUrl: await client.imageUrl(e.data.cover),
  };
}

export async function getMoilPosts(): Promise<MoilPost[]> {
  if (!moilConfigured) return [];
  try {
    const { data } = await client.entries<PostFields>('post');
    return Promise.all(data.map(toPost));
  } catch {
    return [];
  }
}

export async function getMoilPost(slug: string): Promise<MoilPost | null> {
  if (!moilConfigured) return null;
  try {
    const entry = await client.entry<PostFields>('post', slug);
    return entry ? toPost(entry) : null;
  } catch {
    return null;
  }
}
