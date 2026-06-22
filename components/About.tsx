import Reveal from './Reveal';
import { profile, capabilities } from '../lib/data';

export default function About() {
  return (
    <section id="about" className="border-t border-border py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <span className="eyebrow">01 — About</span>
            <h2 className="mt-5 font-serif text-4xl leading-tight tracking-tight text-foreground md:text-5xl">
              A generalist who sweats the details.
            </h2>
          </Reveal>

          <Reveal y={32} className="space-y-6 text-lg leading-relaxed text-muted">
            {profile.bio.map((para) => (
              <p key={para}>{para}</p>
            ))}
          </Reveal>
        </div>

        <Reveal
          stagger={0.12}
          className="mt-20 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3"
        >
          {capabilities.map((cap) => (
            <div
              key={cap.title}
              className="group bg-background p-8 transition-colors hover:bg-card"
            >
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-brand" />
                <h3 className="text-lg font-medium text-foreground">{cap.title}</h3>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                {cap.description}
              </p>
              <ul className="mt-6 flex flex-wrap gap-x-3 gap-y-1">
                {cap.stack.map((tech) => (
                  <li key={tech} className="font-mono text-xs text-faint">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
