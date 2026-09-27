import Link from "next/link";
import { getPosts } from "../lib/posts";

function CoverArt({ index }: { index: number }) {
  return (
    <svg
      viewBox="0 0 300 210"
      className="journal-art"
      fill="none"
      aria-hidden="true"
    >
      {index === 0 ? (
        <g stroke="currentColor" strokeWidth="2">
          {[0, 1, 2, 3, 4].map((i) => (
            <path
              key={i}
              d={"M" + (45 + i * 20) + " 180V" + (35 + i * 20) + "H255"}
            />
          ))}
          <path
            d="m186 62 68-28-27 68-9-31-32-9Z"
            fill="currentColor"
            stroke="none"
          />
        </g>
      ) : index === 1 ? (
        <g stroke="currentColor" strokeWidth="1.5">
          <path d="M150 48v45" />
          <path d="M65 143V93h170v50M150 93v50" />
          <rect
            x="115"
            y="16"
            width="70"
            height="43"
            rx="4"
            fill="currentColor"
          />
          <rect x="29" y="143" width="70" height="43" rx="4" />
          <rect x="115" y="143" width="70" height="43" rx="4" />
          <rect x="200" y="143" width="70" height="43" rx="4" />
          <circle cx="150" cy="93" r="5" fill="currentColor" />
        </g>
      ) : (
        <g stroke="currentColor" strokeWidth="1.5">
          <circle cx="119" cy="96" r="69" />
          <circle cx="184" cy="115" r="69" />
          <path d="M82 102h67m-53-20h39m16 44h67m-53 20h40" />
          <circle cx="119" cy="96" r="52" strokeDasharray="2 7" />
        </g>
      )}
    </svg>
  );
}

export default async function Writing() {
  const posts = (await getPosts()).slice(0, 3);
  if (!posts.length) return null;
  return (
    <section
      id="writing"
      className="section-shell writing-section"
      aria-labelledby="writing-title"
    >
      <div className="writing-heading">
        <div>
          <span className="micro-label">(04 — THE OPEN NOTEBOOK)</span>
          <h2 id="writing-title" className="display-heading" data-reveal>
            Some things
            <br />
            worth <em>thinking about.</em>
          </h2>
        </div>
        <div className="writing-intro">
          <p>
            Notes on making things.
            <br />
            And making sense of things.
          </p>
          <Link href="/blog" className="text-link">
            Open the notebook <span aria-hidden>↗</span>
          </Link>
        </div>
      </div>
      <div className="journal-grid">
        {posts.map((post, i) => (
          <a
            className={"journal-card journal-card-" + i}
            data-journal
            key={post._id}
            href={post.externalUrl ?? "/blog/" + post.slug}
            target={post.externalUrl ? "_blank" : undefined}
            rel={post.externalUrl ? "noopener noreferrer" : undefined}
          >
            <div className="journal-cover" data-tilt>
              <div className="journal-meta">
                <span>FIELD NOTES / 0{i + 1}</span>
                <span>{post.readingTime} MIN</span>
              </div>
              <CoverArt index={i} />
              <div className="journal-cover-body">
                <span className="journal-topic">
                  {post.tags[0] ?? "ENGINEERING"}
                </span>
                <h3>{post.title}</h3>
              </div>
              <div className="journal-foot">
                <span>BY TAIWO TRIUMPHANT</span>
                <span className="journal-arrow" aria-hidden>
                  ↗
                </span>
              </div>
            </div>
            <p className="journal-excerpt">{post.excerpt}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
