import Link from "next/link";
import { getPosts } from "../lib/posts";

export default async function Writing() {
  const posts = (await getPosts()).slice(0, 3);
  if (!posts.length) return null;
  return (
    <section
      id="writing"
      className="section-shell writing-section"
      aria-labelledby="writing-title"
    >
      <div className="writing-heading" data-reveal>
        <div>
          <span className="micro-label">(04 — NOTES FROM THE WORKBENCH)</span>
          <h2 id="writing-title" className="display-heading">
            Thinking <em>out loud.</em>
          </h2>
        </div>
        <Link href="/blog" className="text-link">
          All writing <span aria-hidden>↗</span>
        </Link>
      </div>
      <div className="writing-list">
        {posts.map((post, i) => (
          <a
            className="writing-row"
            key={post._id}
            href={post.externalUrl ?? "/blog/" + post.slug}
            target={post.externalUrl ? "_blank" : undefined}
            rel={post.externalUrl ? "noopener noreferrer" : undefined}
            data-reveal
          >
            <span className="micro-label">
              0{i + 1} / {post.tags[0] ?? "ENGINEERING"}
            </span>
            <h3>{post.title}</h3>
            <span className="reading-time">
              {post.readingTime} MIN READ <span aria-hidden>↗</span>
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
