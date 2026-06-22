import Reveal from './Reveal';
import { profile } from '../lib/data';

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-border py-32 md:py-44"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-25 blur-[140px]"
        style={{ background: 'radial-gradient(circle, var(--brand) 0%, transparent 70%)' }}
      />

      <div className="mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <span className="eyebrow">04 — Contact</span>
          <h2 className="text-gradient mx-auto mt-6 max-w-3xl font-serif text-5xl leading-[1.02] tracking-tight md:text-7xl">
            Have something worth building?
          </h2>
          <p className="mx-auto mt-7 max-w-lg text-lg leading-relaxed text-muted">
            I&apos;m open to select freelance and full-time work. Tell me about
            the problem — the inbox is always on.
          </p>
        </Reveal>

        <Reveal y={20} className="mt-12 flex flex-col items-center gap-8">
          <a
            href={`mailto:${profile.email}`}
            className="group inline-flex items-center gap-3 rounded-full bg-brand px-8 py-4 text-base font-medium text-white transition-transform hover:-translate-y-0.5"
          >
            {profile.email}
            <svg className="transition-transform group-hover:translate-x-1" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </a>

          <div className="flex items-center gap-6">
            {profile.socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted transition-colors hover:text-brand"
              >
                {social.name}
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
