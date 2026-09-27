import type { Metadata } from "next";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import PostCard from "../../components/PostCard";
import Reveal from "../../components/Reveal";
import { getPosts } from "../../lib/posts";

export const metadata: Metadata = {
  title: "Writing — Taiwo",
  description:
    "Essays and notes on software engineering, frontend craft, and Web3.",
};
export const revalidate = 60;

export default async function BlogPage() {
  const posts = await getPosts();
  return (
    <>
      <Navigation />
      <main id="main" className="section-shell notebook-page">
        <Reveal className="notebook-heading">
          <div className="section-kicker">
            <span>THE OPEN NOTEBOOK</span>
            <span>ESSAYS / NOTES / IDEAS</span>
          </div>
          <h1>
            Thinking
            <br />
            <em>out loud.</em>
            <span className="notebook-asterisk" aria-hidden>
              ✳
            </span>
          </h1>
          <div className="notebook-intro">
            <span className="micro-label">ON BUILDING THINGS THAT MATTER</span>
            <p>
              Essays, notes &amp; things I’m figuring out. Software engineering,
              frontend craft, product, and the occasional detour into Web3.
            </p>
          </div>
        </Reveal>
        {posts.length === 0 ? (
          <p className="notebook-empty">No posts yet. Check back soon.</p>
        ) : (
          <>
            <div className="notebook-index section-kicker">
              <span>THE READING LIST</span>
              <span>
                {String(posts.length).padStart(2, "0")} ENTRIES / NEWEST FIRST
              </span>
            </div>
            <div className="notebook-grid">
              {posts.map((post, i) => (
                <Reveal
                  className={i === 0 ? "notebook-featured" : ""}
                  key={post._id}
                >
                  <PostCard post={post} featured={i === 0} index={i} />
                </Reveal>
              ))}
            </div>
          </>
        )}
      </main>
      <Footer />
    </>
  );
}
