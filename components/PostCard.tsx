import Link from "next/link";
import type { PostSummary } from "../lib/sample-posts";
import { formatDate } from "../lib/format";

export default function PostCard({
  post,
  featured = false,
  index = 0,
}: {
  post: PostSummary;
  featured?: boolean;
  index?: number;
}) {
  const href = post.externalUrl ?? `/blog/${post.slug}`;
  const content = (
    <>
      <div className="post-cover">
        {post.coverImage ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={post.coverImage}
            alt=""
            loading={featured ? "eager" : "lazy"}
          />
        ) : (
          <div className="post-cover-placeholder" aria-hidden="true">
            Aa<span>FIELD NOTES</span>
          </div>
        )}
        <span className="post-edition">
          {featured
            ? "LATEST ESSAY"
            : "FIELD NOTES / " + String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <div className="post-copy">
        <div className="post-meta">
          <span>{formatDate(post.publishedAt)}</span>
          <span>{post.readingTime} MIN READ</span>
        </div>
        <h2>{post.title}</h2>
        <p>{post.excerpt}</p>
        <div className="post-tags">
          {post.tags?.slice(0, 3).map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <span className="post-read">
          {post.externalUrl ? "Read on Hashnode" : "Read the essay"}
          <span aria-hidden>↗</span>
        </span>
      </div>
    </>
  );
  const className = "post-card" + (featured ? " post-card-featured" : "");
  return post.externalUrl ? (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {content}
    </a>
  ) : (
    <Link href={href} className={className}>
      {content}
    </Link>
  );
}
