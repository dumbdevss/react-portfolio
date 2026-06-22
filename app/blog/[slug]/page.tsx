import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Navigation from '../../../components/Navigation';
import Footer from '../../../components/Footer';
import PortableTextBody from '../../../components/PortableTextBody';
import { getPost, getPostSlugs } from '../../../lib/posts';
import { urlForImage } from '../../../sanity/lib/image';
import { formatDate } from '../../../lib/format';

export const revalidate = 60;

export async function generateStaticParams() {
  const slugs = await getPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return { title: 'Post not found' };
  return {
    title: `${post.title} — Taiwo`,
    description: post.excerpt,
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) notFound();

  const cover =
    post.coverImage ?? urlForImage(post.mainImage)?.width(1600).height(900).url() ?? null;

  return (
    <>
      <Navigation />
      <main className="mx-auto max-w-3xl px-6 pb-28 pt-36 md:pt-44">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-brand"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          All writing
        </Link>

        <article className="mt-10">
          <div className="flex flex-wrap items-center gap-3 text-xs text-faint">
            <span className="font-mono">{formatDate(post.publishedAt)}</span>
            <span className="h-1 w-1 rounded-full bg-faint" />
            <span className="font-mono">{post.readingTime} min read</span>
            {post.author && (
              <>
                <span className="h-1 w-1 rounded-full bg-faint" />
                <span className="font-mono">{post.author}</span>
              </>
            )}
          </div>

          <h1 className="mt-5 font-serif text-4xl leading-[1.05] tracking-tight text-foreground md:text-6xl">
            {post.title}
          </h1>

          {post.excerpt && (
            <p className="mt-6 text-xl leading-relaxed text-muted">
              {post.excerpt}
            </p>
          )}

          <div className="mt-6 flex flex-wrap gap-2">
            {post.tags?.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border px-3 py-1 font-mono text-[11px] text-faint"
              >
                {tag}
              </span>
            ))}
          </div>

          {cover && (
            <div className="mt-12 overflow-hidden rounded-2xl border border-border">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={cover} alt={post.title} className="h-auto w-full" />
            </div>
          )}

          <div className="mt-12">
            <PortableTextBody value={post.body} />
          </div>
        </article>

        <div className="mt-20 border-t border-border pt-10">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-brand"
          >
            ← Back to all writing
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
