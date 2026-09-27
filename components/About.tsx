import { capabilities, profile, projects } from "../lib/data";

export default function About() {
  return (
    <section
      id="about"
      className="section-shell about-section"
      aria-labelledby="about-title"
    >
      <div className="section-kicker">
        <span>(01 — THE PERSON BEHIND THE PIXELS)</span>
        <span>IDEA → INTERFACE → IMPACT</span>
      </div>
      <div className="about-intro">
        <h2 id="about-title" className="display-heading" data-reveal>
          A generalist.
          <br />A <em>detail person.</em>
        </h2>
        <div className="about-copy" data-reveal>
          <span className="micro-label">HEY, I’M TAIWO.</span>
          <p>{profile.bio[0]}</p>
          <a href="#approach" className="text-link">
            How I work <span aria-hidden>↘</span>
          </a>
        </div>
      </div>
      <div className="capability-grid">
        {capabilities.map((capability, i) => (
          <article
            className="capability-card"
            data-capability
            key={capability.title}
          >
            <div className="card-top">
              <span className="micro-label">0{i + 1} / WHAT I DO</span>
              <span className="capability-symbol" aria-hidden>
                {["⌘", "↗", "◇"][i]}
              </span>
            </div>
            <h3>{capability.title}</h3>
            <p>{capability.description}</p>
            <ul className="tech-tags">
              {capability.stack.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      <div className="about-strip" data-reveal>
        <span>
          <strong>{String(projects.length).padStart(2, "0")}</strong> selected
          projects
        </span>
        <span>From data model to pixel.</span>
        <span>
          Human first. Engineer always. <span aria-hidden>↗</span>
        </span>
      </div>
    </section>
  );
}
