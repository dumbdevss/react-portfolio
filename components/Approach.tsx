const steps = [
  [
    "Understand",
    "Before the first line of code, we find the real problem. Goals, constraints, and what success looks like.",
  ],
  [
    "Make it tangible",
    "Turn the idea into a working direction. Shape the interface, the architecture, and the details together.",
  ],
  [
    "Build with care",
    "Thoughtful interfaces. Resilient systems. Short feedback loops, so you always know where things stand.",
  ],
  [
    "Ship. Then refine.",
    "Test on real screens, sweat the last details, and hand over something you can keep building on.",
  ],
];

export default function Approach() {
  return (
    <section
      id="approach"
      className="section-shell approach-section"
      aria-labelledby="approach-title"
    >
      <div className="section-kicker">
        <span>(03 — HOW I THINK & BUILD)</span>
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
            Zero loose ends<span className="text-brand">.</span>
          </span>
        </span>
      </h2>
      <div className="process-grid">
        {steps.map(([title, description], i) => (
          <article key={title} data-reveal>
            <span className="process-number">
              0{i + 1}
              <span aria-hidden>↗</span>
            </span>
            <h3>{title}</h3>
            <p>{description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
