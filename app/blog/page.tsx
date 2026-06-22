import type { Metadata } from 'next';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import PostCard from '../../components/PostCard';
import Reveal from '../../components/Reveal';
import { getPosts } from '../../lib/posts';

export const metadata: Metadata = {
  title: 'Writing — Taiwo',
  description: 'Essays and notes on software engineering, frontend craft, and Web3.',
};

export const revalidate = 60;

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <>
      <Navigation />
      <main className="mx-auto max-w-6xl px-6 pb-28 pt-36 md:pt-44">
        <Reveal>
          <span className="eyebrow">Writing</span>
          <h1 className="mt-5 max-w-2xl font-serif text-5xl leading-[1.02] tracking-tight text-foreground md:text-7xl">
            Essays, notes &amp; things I&apos;m figuring out.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            Writing about software engineering, frontend craft, product, and the
            occasional detour into Web3.
          </p>
        </Reveal>

        {posts.length === 0 ? (
          <p className="mt-20 text-muted">No posts yet. Check back soon.</p>
        ) : (
          <Reveal stagger={0.08} className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <PostCard key={post._id} post={post} />
            ))}
          </Reveal>
        )}
      </main>
      <Footer />
    </>
  );
}
