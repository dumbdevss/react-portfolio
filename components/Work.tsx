import Image from "next/image";
import { projects } from "../lib/data";

const featured = ["Moil CRM", "Vault App", "Movement Network Docs"].map(
  (title) => projects.find((project) => project.title === title)!,
);

export default function Work() {
  return (
    <section id="work" className="work-section" aria-labelledby="work-title">
      <div className="work-stage" data-gallery-stage>
        <div className="section-shell work-heading">
          <div>
            <span className="micro-label">(02 — SELECTED WORK)</span>
            <h2 id="work-title" className="display-heading" data-reveal>
              Built with <em>intent.</em>
            </h2>
          </div>
          <span className="gallery-hint">
            A FEW THINGS I’VE PUT INTO THE WORLD <span aria-hidden>↘</span>
          </span>
        </div>
        <div className="gallery-window">
          <div className="gallery-track" data-gallery-track>
            {featured.map((project, i) => (
              <a
                key={project.title}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={"featured-project project-" + i}
                data-featured
              >
                <div className="project-visual">
                  <span
                    className="project-backdrop"
                    aria-hidden="true"
                    data-project-backdrop
                  >
                    {["CONNECT", "PROTECT", "EXPLAIN"][i]}
                  </span>
                  <div className="project-visual-top">
                    <span>
                      0{i + 1} / {project.category}
                    </span>
                    <span className="project-open" aria-hidden>
                      ↗
                    </span>
                  </div>
                  {i < 2 ? (
                    <div className="project-browser" data-project-depth>
                      <div className="browser-chrome" aria-hidden>
                        <i />
                        <i />
                        <i />
                        <span>{new URL(project.link!).hostname}</span>
                      </div>
                      <div className="project-screenshot">
                        <Image
                          src={project.image!}
                          alt={project.title + " application interface"}
                          fill
                          sizes="(max-width: 767px) 90vw, 900px"
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="movement-cover" data-project-depth>
                      <span className="movement-symbol" aria-hidden>
                        Ｍ
                      </span>
                      <span>
                        MOVEMENT<span>Ideas. On chain.</span>
                      </span>
                      <span className="movement-code">&lt; Move /&gt;</span>
                    </div>
                  )}
                  <span className="project-visual-caption">
                    {i === 0
                      ? "LESS FRICTION. MORE MOMENTUM."
                      : i === 1
                        ? "YOUR SECRETS. YOUR CONTROL."
                        : "MAKING THE COMPLEX, APPROACHABLE."}
                  </span>
                </div>
                <div className="project-caption">
                  <div>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                  </div>
                  <span className="micro-label">
                    {project.year} <span aria-hidden>↗</span>
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
        <div className="gallery-progress section-shell" aria-hidden>
          <span>01</span>
          <div>
            <i data-gallery-progress />
          </div>
          <span>03</span>
        </div>
      </div>
      <div className="section-shell project-index">
        <div className="section-kicker">
          <span>THE COMPLETE PROJECT INDEX</span>
          <span>
            {String(projects.length).padStart(2, "0")} PROJECTS / ALWAYS
            BUILDING
          </span>
        </div>
        {projects.map((project, i) => (
          <a
            className="project-row"
            key={project.title}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="project-number">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3>{project.title}</h3>
            <span className="project-category">{project.category}</span>
            <span className="project-year">{project.year}</span>
            <span className="project-row-arrow" aria-hidden>
              ↗
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
