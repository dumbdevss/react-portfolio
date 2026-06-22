import { client } from '../sanity/lib/client';
import { sanityConfigured } from '../sanity/env';
import {
  postsQuery,
  postBySlugQuery,
  postSlugsQuery,
} from '../sanity/lib/queries';
import { urlForImage } from '../sanity/lib/image';
import { samplePosts, type Post, type PostSummary } from './sample-posts';
import { originalPosts } from './original-posts';

/**
 * Local blog content: original on-site essays first, then the published
 * Hashnode articles. Sanity content is merged on top of this (see below).
 */
const localPosts: Post[] = [...originalPosts, ...samplePosts];

/**
 * Whether the blog is being served from local content (no Sanity project set).
 */
export const usingSampleContent = !sanityConfigured;

const byNewest = (a: { publishedAt: string }, b: { publishedAt: string }) =>
  +new Date(b.publishedAt) - +new Date(a.publishedAt);

/** Resolve a Sanity post's mainImage into a plain cover URL for PostCard. */
function withCover<T extends PostSummary>(post: T): T {
  if (post.coverImage) return post;
  const url = urlForImage(post.mainImage)?.width(1200).height(675).url();
  return url ? { ...post, coverImage: url } : post;
}

/**
 * Merge Sanity posts with the local list, deduped by slug (Sanity wins on a
 * collision so migrated pieces replace their local copy), newest first.
 */
function merge(sanityPosts: PostSummary[], local: PostSummary[]): PostSummary[] {
  const bySlug = new Map<string, PostSummary>();
  for (const p of local) bySlug.set(p.slug, p);
  for (const p of sanityPosts) bySlug.set(p.slug, withCover(p));
  return [...bySlug.values()].sort(byNewest);
}

export async function getPosts(): Promise<PostSummary[]> {
  const local = localPosts.map(stripBody);
  if (!client) return [...local].sort(byNewest);
  try {
    const sanity = (await client.fetch<PostSummary[]>(postsQuery)) ?? [];
    return merge(sanity, local);
  } catch {
    return [...local].sort(byNewest);
  }
}

export async function getPostSlugs(): Promise<string[]> {
  // External (Hashnode) articles link out, so they need no internal page.
  const localSlugs = localPosts
    .filter((p) => !p.externalUrl)
    .map((p) => p.slug);
  if (!client) return localSlugs;
  try {
    const sanitySlugs = (await client.fetch<string[]>(postSlugsQuery)) ?? [];
    return [...new Set([...sanitySlugs, ...localSlugs])];
  } catch {
    return localSlugs;
  }
}

export async function getPost(slug: string): Promise<Post | null> {
  const local = localPosts.find((p) => p.slug === slug) ?? null;
  if (!client) return local;
  try {
    const post = await client.fetch<Post | null>(postBySlugQuery, { slug });
    return post ? withCover(post) : local;
  } catch {
    return local;
  }
}

function stripBody(post: Post): PostSummary {
  const clone: Partial<Post> = { ...post };
  delete clone.body;
  return clone as PostSummary;
}
