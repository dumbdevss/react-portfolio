import Link from 'next/link';
import type { PostSummary } from '../lib/sample-posts';
import { formatDate } from '../lib/format';

export default function PostCard({ post }: { post: PostSummary }) {
  const isExternal = Boolean(post.externalUrl);
  const href = post.externalUrl ?? `/blog/${post.slug}`;

  const inner = (
    <>
      {/* Cover */}
      <div className="relative mb-6 overflow-hidden rounded-xl border border-border">
        <div className="aspect-[16/9] w-full">
          {post.coverImage ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={post.coverImage}
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
        {isExternal && (
          <span className="absolute right-3 top-3 rounded-full bg-background/85 px-2.5 py-1 font-mono text-[10px] text-faint backdrop-blur-sm">
            Hashnode ↗
          </span>
        )}
      </div>

      <div className="flex items-center gap-3 text-xs text-faint">
        <span className="font-mono">{formatDate(post.publishedAt)}</span>
        <span className="h-1 w-1 rounded-full bg-faint" />
        <span className="font-mono">{post.readingTime} min read</span>
      </div>
      <h3 className="mt-3 font-serif text-2xl leading-snug tracking-tight text-foreground transition-colors group-hover:text-brand">
        {post.title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-muted">{post.excerpt}</p>

      <div className="mt-5 flex flex-wrap items-center gap-2">
        {post.tags?.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-border px-3 py-1 font-mono text-[11px] text-faint"
          >
            {tag}
          </span>
        ))}
      </div>
    </>
  );

  const className =
    'group flex flex-col rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-1 hover:border-brand';

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {inner}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {inner}
    </Link>
  );
}
