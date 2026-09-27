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
        <div className="contact-heading">
          <h2 id="contact-title">
            <span className="line-mask">
              <span data-contact-line>Have a good</span>
            </span>
            <span className="line-mask">
              <em data-contact-line>feeling about this?</em>
            </span>
          </h2>
          <a
            href={"mailto:" + profile.email}
            className="contact-orbit"
            data-magnetic
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
