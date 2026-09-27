import type { Metadata } from 'next';
import Link from 'next/link';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import Reveal from '../../components/Reveal';
import { formatDate } from '../../lib/format';
import { getMoilPosts, moilConfigured } from '../../lib/moil';

export const metadata: Metadata = {
  title: 'Notes (Moil CMS) — Taiwo',
  description: 'Posts served from Moil CMS via @moil/cms-client.',
};

export const revalidate = 60;

export default async function MoilBlogPage() {
  const posts = await getMoilPosts();

  return (
    <>
      <Navigation />
      <main className="mx-auto max-w-6xl px-6 pb-28 pt-36 md:pt-44">
        <Reveal>
          <span className="eyebrow">Powered by Moil CMS</span>
          <h1 className="mt-5 max-w-2xl font-serif text-5xl leading-[1.02] tracking-tight text-foreground md:text-7xl">
            Notes, headless.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            These posts are authored in Moil CMS and pulled into this site at
            request time through <code>@moil/cms-client</code>.
          </p>
        </Reveal>

        {!moilConfigured ? (
          <p className="mt-20 text-muted">
            Set <code>MOIL_API_KEY</code>, <code>MOIL_STUDIO</code> and{' '}
            <code>MOIL_CMS_URL</code> in <code>.env.local</code> to load content.
          </p>
        ) : posts.length === 0 ? (
          <p className="mt-20 text-muted">No published posts yet.</p>
        ) : (
          <Reveal stagger={0.08} className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Link
                key={post.id}
                href={`/moil-blog/${post.slug}`}
                className="group flex flex-col rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-1 hover:border-brand"
              >
                <div className="relative mb-6 overflow-hidden rounded-xl border border-border">
                  <div className="aspect-[16/9] w-full">
                    {post.coverUrl ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={post.coverUrl}
                        alt={`${post.title} cover`}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                      />
                    ) : (
                      <div className="gradient-tile flex h-full w-full items-end p-5">
                        <span className="font-serif text-2xl leading-tight text-white">
                          {post.title}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-3 text-xs text-faint">
                  <span className="font-mono">{formatDate(post.publishedAt)}</span>
                </div>
                <h3 className="mt-3 font-serif text-2xl leading-snug tracking-tight text-foreground transition-colors group-hover:text-brand">
                  {post.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{post.excerpt}</p>
              </Link>
            ))}
          </Reveal>
        )}
      </main>
      <Footer />
    </>
  );
}
