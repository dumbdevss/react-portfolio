import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Navigation from '../../../components/Navigation';
import Footer from '../../../components/Footer';
import { formatDate } from '../../../lib/format';
import { getMoilPost } from '../../../lib/moil';

export const revalidate = 60;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getMoilPost(slug);
  return {
    title: post ? `${post.title} — Taiwo` : 'Not found',
    description: post?.excerpt,
  };
}

export default async function MoilPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getMoilPost(slug);
  if (!post) notFound();

  return (
    <>
      <Navigation />
      <main className="mx-auto max-w-3xl px-6 pb-28 pt-36 md:pt-44">
        <Link href="/moil-blog" className="font-mono text-xs text-faint hover:text-foreground">
          ← Notes
        </Link>
        <span className="eyebrow mt-8 block">Powered by Moil CMS</span>
        <h1 className="mt-4 font-serif text-4xl leading-[1.05] tracking-tight text-foreground md:text-6xl">
          {post.title}
        </h1>
        <div className="mt-5 font-mono text-xs text-faint">{formatDate(post.publishedAt)}</div>

        {post.coverUrl && (
          <div className="mt-10 overflow-hidden rounded-2xl border border-border">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={post.coverUrl} alt={`${post.title} cover`} className="w-full" />
          </div>
        )}

        {/* rich_text is server-sanitized HTML from Moil CMS */}
        <article
          className="prose-moil mt-10 max-w-none text-lg leading-relaxed text-muted"
          dangerouslySetInnerHTML={{ __html: post.body }}
        />
      </main>
      <Footer />
    </>
  );
}
