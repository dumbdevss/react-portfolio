import Logo from "./Logo";

const steps = [
  {
    title: "Find the real problem.",
    description:
      "We start with a conversation, not a template. What are you trying to change? Who is it for? What would make it work?",
    output: "A shared direction",
    label: "DISCOVER",
  },
  {
    title: "Give the idea a shape.",
    description:
      "Map the flows. Explore the interface. Make the important decisions tangible while they’re still easy to change.",
    output: "A working direction",
    label: "DESIGN",
  },
  {
    title: "Make every layer count.",
    description:
      "Build the system behind the screen and the details in front of it. Clear code, thoughtful motion, and short feedback loops.",
    output: "A product you can use",
    label: "DEVELOP",
  },
  {
    title: "Put it into the world.",
    description:
      "Test on real screens. Refine the rough edges. Ship with a foundation you can understand, maintain, and keep building on.",
    output: "A confident handover",
    label: "DELIVER",
  },
];

export default function Approach() {
  return (
    <section
      id="approach"
      className="approach-section"
      aria-labelledby="approach-title"
    >
      <div className="section-shell">
        <div className="section-kicker">
          <span>(03 — THE WAY THROUGH)</span>
          <span>GOOD WORK IS A CONVERSATION</span>
        </div>
        <h2 id="approach-title" className="statement-heading">
          <span className="line-mask">
            <span data-statement>Thoughtful systems.</span>
          </span>
          <span className="line-mask statement-indent">
            <span data-statement>
              Expressive <em>interfaces.</em>
            </span>
          </span>
          <span className="line-mask">
            <span data-statement>
              One connected <em>process.</em>
            </span>
          </span>
        </h2>
        <div className="process-story">
          <div className="process-sticky" aria-hidden="true">
            <span className="micro-label">
              FROM “WHAT IF” TO “WHAT’S NEXT”.
            </span>
            <div className="process-dial">
              <svg viewBox="0 0 320 320" fill="none" className="dial-rings">
                <circle
                  cx="160"
                  cy="160"
                  r="146"
                  stroke="currentColor"
                  strokeOpacity=".15"
                />
                <circle
                  cx="160"
                  cy="160"
                  r="146"
                  stroke="var(--brand)"
                  strokeWidth="2"
                  className="dial-progress"
                  data-dial-progress
                />
                <circle
                  cx="160"
                  cy="160"
                  r="118"
                  stroke="currentColor"
                  strokeOpacity=".15"
                  strokeDasharray="1 8"
                />
                <g data-dial-orbit>
                  <circle cx="160" cy="14" r="6" fill="var(--brand)" />
                </g>
              </svg>
              <div className="dial-center">
                <Logo />
                <div className="dial-numbers">
                  {steps.map((step, i) => (
                    <span data-dial-number key={step.label}>
                      0{i + 1}
                    </span>
                  ))}
                </div>
                <span className="micro-label">IDEA → REALITY</span>
              </div>
            </div>
            <span className="process-caption">
              A little structure.
              <br />
              <em>A lot of intention.</em>
            </span>
          </div>
          <div className="process-steps">
            {steps.map((step, i) => (
              <article
                className="process-step"
                data-process-step
                key={step.title}
              >
                <div className="process-step-top">
                  <span>
                    0{i + 1} / {step.label}
                  </span>
                  <span aria-hidden>↘</span>
                </div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
                <div className="process-deliverable">
                  <span>WHAT YOU WALK AWAY WITH</span>
                  <strong>
                    {step.output} <span aria-hidden>↗</span>
                  </strong>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
