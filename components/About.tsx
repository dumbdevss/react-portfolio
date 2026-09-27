import { capabilities, profile, projects } from "../lib/data";

function CapabilityArt({ index }: { index: number }) {
  return (
    <svg
      viewBox="0 0 240 200"
      fill="none"
      aria-hidden="true"
      className="capability-art"
    >
      {index === 0 ? (
        <g stroke="currentColor" strokeWidth="1.2">
          <path d="M35 60 120 16l85 44-85 45-85-45Z M35 100l85 45 85-45 M35 140l85 45 85-45" />
          <path d="M35 60v80m85-35v80m85-125v80" strokeDasharray="3 5" />
          <path data-art-line d="m35 100 85-44 85 44-85 45-85-45Z" />
          <circle cx="120" cy="105" r="6" fill="currentColor" />
        </g>
      ) : index === 1 ? (
        <g stroke="currentColor" strokeWidth="1.5">
          <rect x="23" y="28" width="193" height="139" rx="7" />
          <path d="M23 52h193M40 40h3m9 0h3m9 0h3M42 73h73m-73 9h48M42 125h85m-85 9h55" />
          <rect
            x="143"
            y="71"
            width="53"
            height="73"
            rx="3"
            fill="currentColor"
            opacity=".13"
          />
          <g data-art-cursor>
            <path
              d="m110 94 1 56 14-16 17 24 10-7-17-24 24-4-49-29Z"
              fill="var(--panel-paper)"
            />
            <path d="m121 113 1 19 7-8 8 0-16-11Z" fill="currentColor" />
          </g>
        </g>
      ) : (
        <g stroke="currentColor" strokeWidth="1.2">
          <ellipse
            cx="120"
            cy="100"
            rx="87"
            ry="38"
            transform="rotate(-30 120 100)"
          />
          <ellipse
            cx="120"
            cy="100"
            rx="87"
            ry="38"
            transform="rotate(30 120 100)"
          />
          <g data-art-diamond>
            <path
              d="m120 23 40 77-40 26-40-26 40-77Z M80 111l40 63 40-63-40 26-40-26Z"
              fill="var(--panel-paper)"
            />
            <path d="m120 23 0 103m-40-26 40-13 40 13m-40 37v37" />
          </g>
          <circle cx="199" cy="64" r="4" fill="currentColor" />
        </g>
      )}
    </svg>
  );
}

export default function About() {
  return (
    <section
      id="about"
      className="section-shell about-section"
      aria-labelledby="about-title"
    >
      <div className="section-kicker">
        <span>(01 — MORE THAN A JOB TITLE)</span>
        <span>LOGIC, WITH A HUMAN SIDE.</span>
      </div>
      <div className="about-intro">
        <h2 id="about-title" className="about-headline">
          <span className="line-mask">
            <span data-about-title>ENGINEER.</span>
          </span>
          <span className="line-mask">
            <span data-about-title>
              WITH <em>FEELING.</em>
            </span>
          </span>
        </h2>
        <div className="about-copy">
          <span className="micro-label">HEY, I’M TAIWO.</span>
          <p>{profile.bio[0]}</p>
          <a href="#approach" className="text-link">
            Meet my process <span aria-hidden>↘</span>
          </a>
        </div>
      </div>
      <div className="capability-grid">
        {capabilities.map((capability, i) => (
          <article
            className={"capability-panel capability-panel-" + i}
            data-capability
            key={capability.title}
          >
            <div className="capability-surface" data-tilt>
              <div className="panel-top">
                <span>
                  0{i + 1} /{" "}
                  {["THE FOUNDATION", "THE EXPERIENCE", "THE NEXT FRONTIER"][i]}
                </span>
                <span aria-hidden>↗</span>
              </div>
              <CapabilityArt index={i} />
              <div className="panel-body">
                <h3>{capability.title}</h3>
                <p>{capability.description}</p>
                <ul className="tech-tags">
                  {capability.stack.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        ))}
        <article
          className="capability-panel capability-panel-human"
          data-capability
        >
          <div className="capability-surface" data-tilt>
            <div className="panel-top">
              <span>04 / THE PERSON</span>
              <span aria-hidden>☺</span>
            </div>
            <svg
              className="human-art"
              viewBox="0 0 180 180"
              fill="none"
              aria-hidden="true"
            >
              <g stroke="currentColor" strokeWidth="2">
                <circle cx="90" cy="90" r="72" />
                <path d="M57 101c7 37 59 37 66 0" />
                <path
                  d="M60 65v16m60-16v16"
                  strokeWidth="7"
                  strokeLinecap="round"
                />
              </g>
            </svg>
            <div className="panel-body">
              <h3>Human, after all.</h3>
              <p>
                Curious about the problem.
                <br />
                Obsessive about the details.
                <br />
                Easy to have a conversation with.
              </p>
              <a className="panel-contact" href="#contact">
                Say hello <span aria-hidden>↗</span>
              </a>
            </div>
          </div>
        </article>
      </div>
      <div className="about-strip">
        <span>
          <strong>{String(projects.length).padStart(2, "0")}</strong> selected
          projects
        </span>
        <span>FULL-STACK THINKING. FRONTEND FEELING.</span>
        <span>From data model to pixel. ↗</span>
      </div>
    </section>
  );
}
