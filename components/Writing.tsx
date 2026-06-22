import Link from 'next/link';
import Reveal from './Reveal';
import EssayEnvelope from './EssayEnvelope';
import { getPosts } from '../lib/posts';

export default async function Writing() {
  const allPosts = await getPosts();
  const posts = allPosts.slice(0, 3);
  const hasMore = allPosts.length > posts.length;

  if (posts.length === 0) return null;

  return (
    <section id="writing" className="relative overflow-hidden border-t border-border py-28 md:py-36">
      <div aria-hidden className="gradient-mesh pointer-events-none absolute inset-0 -z-10 opacity-70" />
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mb-16 flex items-end justify-between gap-6">
          <div>
            <span className="eyebrow">03 — Writing</span>
            <h2 className="mt-5 font-serif text-4xl leading-tight tracking-tight text-foreground md:text-5xl">
              Straight from the envelope.
            </h2>
          </div>
          <span className="hidden font-mono text-sm text-faint sm:block">
            {allPosts.length.toString().padStart(2, '0')} pieces
          </span>
        </Reveal>

        <EssayEnvelope posts={posts} />

        {hasMore && (
          <div className="mt-4 flex justify-center">
            <Link
              href="/blog"
              className="group inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-brand hover:text-brand"
            >
              View all writing
              <svg className="transition-transform group-hover:translate-x-1" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
