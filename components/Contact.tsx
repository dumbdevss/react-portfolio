import { profile } from "../lib/data";
import ProjectBrief from "./ProjectBrief";

export default function Contact() {
  return (
    <section
      id="contact"
      className="contact-section"
      aria-labelledby="contact-title"
    >
      <div className="section-shell">
        <div className="section-kicker">
          <span>(05 — SOMETHING GOOD STARTS HERE)</span>
          <span>
            <i className="status-dot" />
            OPEN TO CONVERSATIONS
          </span>
        </div>
        <div className="contact-heading" data-reveal>
          <h2 id="contact-title">
            Have a good
            <br />
            <em>feeling about this?</em>
          </h2>
          <a
            href={"mailto:" + profile.email}
            className="contact-orbit"
            aria-label="Email Taiwo"
          >
            <span aria-hidden>↗</span>
          </a>
        </div>
        <ProjectBrief />
        <div className="contact-bottom">
          <a href={"mailto:" + profile.email}>{profile.email} ↗</a>
          <span>Freelance & full-time opportunities</span>
        </div>
      </div>
    </section>
  );
}
