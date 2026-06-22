'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Reveal from './Reveal';
import { projects, type Project } from '../lib/data';

function ProjectMedia({ project, index }: { project: Project; index: number }) {
  return (
    <div
      data-proj-media
      className="relative overflow-hidden rounded-2xl border border-border bg-card"
    >
      <div className="aspect-[16/10] w-full overflow-hidden">
        {project.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={project.image}
            alt={`${project.title} screenshot`}
            loading="lazy"
            className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />
        ) : (
          <div className="gradient-tile relative flex h-full w-full flex-col justify-end p-7">
            <span className="font-mono text-xs uppercase tracking-widest text-white/70">
              {project.category}
            </span>
            <span className="mt-1 font-serif text-3xl leading-tight text-white">
              {project.title}
            </span>
          </div>
        )}
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <span className="absolute left-4 top-4 rounded-full bg-background/80 px-2.5 py-1 font-mono text-xs text-faint backdrop-blur-sm">
        {(index + 1).toString().padStart(2, '0')}
      </span>
      {project.link && (
        <span className="absolute right-4 top-4 grid h-10 w-10 translate-y-1 place-items-center rounded-full bg-brand text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 17L17 7M7 7h10v10" />
          </svg>
        </span>
      )}
    </div>
  );
}

function ProjectBody({ project }: { project: Project }) {
  return (
    <>
      <div className="mt-5 flex items-center justify-between">
        <span className="eyebrow">{project.category}</span>
        <span className="font-mono text-xs text-faint">{project.year}</span>
      </div>
      <h3 className="mt-2 text-2xl font-medium text-foreground transition-colors group-hover:text-brand">
        {project.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{project.description}</p>
      <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-1">
        {project.technologies.map((tech) => (
          <li key={tech} className="font-mono text-xs text-faint">
            {tech}
          </li>
        ))}
      </ul>
    </>
  );
}

export default function Work() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const stage = root.current;
    if (!stage) return;

    const cards = Array.from(
      stage.querySelectorAll<HTMLElement>('[data-proj]'),
    );
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduce) {
      gsap.set(cards, { autoAlpha: 1 });
      return;
    }

    // Hidden start state for every card.
    cards.forEach((card) => {
      const media = card.querySelector<HTMLElement>('[data-proj-media]');
      const img = card.querySelector<HTMLElement>('img');
      gsap.set(card, {
        autoAlpha: 0,
        y: 72,
        rotateX: 12,
        transformPerspective: 1000,
        transformOrigin: '50% 100%',
      });
      if (media) gsap.set(media, { clipPath: 'inset(0% 0% 100% 0%)' });
      if (img) gsap.set(img, { scale: 1.3 });
    });

    const played = new WeakSet<HTMLElement>();
    const reveal = (card: HTMLElement) => {
      if (played.has(card)) return;
      played.add(card);
      const media = card.querySelector<HTMLElement>('[data-proj-media]');
      const img = card.querySelector<HTMLElement>('img');

      const tl = gsap.timeline();
      tl.to(card, {
        autoAlpha: 1,
        y: 0,
        rotateX: 0,
        duration: 0.9,
        ease: 'power3.out',
      });
      if (media) {
        tl.to(
          media,
          { clipPath: 'inset(0% 0% 0% 0%)', duration: 0.9, ease: 'power3.inOut' },
          '<',
        );
      }
      if (img) {
        tl.to(img, { scale: 1, duration: 1.1, ease: 'power3.out' }, '<');
      }
    };

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            reveal(entry.target as HTMLElement);
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.18, rootMargin: '0px 0px -6% 0px' },
    );

    cards.forEach((card) => io.observe(card));

    // Safety net in case the observer never fires.
    const fallback = window.setTimeout(() => cards.forEach(reveal), 3000);

    return () => {
      io.disconnect();
      window.clearTimeout(fallback);
    };
  }, []);

  return (
    <section
      ref={root}
      id="work"
      className="relative overflow-hidden border-t border-border py-28 md:py-36"
    >
      {/* subtle gradient field */}
      <div aria-hidden className="gradient-mesh pointer-events-none absolute inset-0 -z-10 opacity-60" />

      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mb-14 flex items-end justify-between gap-6">
          <div>
            <span className="eyebrow">02 — Selected work</span>
            <h2 className="mt-5 font-serif text-4xl leading-tight tracking-tight text-foreground md:text-5xl">
              Things I&apos;ve built.
            </h2>
          </div>
          <span className="hidden font-mono text-sm text-faint sm:block">
            {projects.length.toString().padStart(2, '0')} projects
          </span>
        </Reveal>

        <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2">
          {projects.map((project, i) =>
            project.link ? (
              <a
                key={project.title}
                data-proj
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block opacity-0"
              >
                <ProjectMedia project={project} index={i} />
                <ProjectBody project={project} />
              </a>
            ) : (
              <div key={project.title} data-proj className="group block opacity-0">
                <ProjectMedia project={project} index={i} />
                <ProjectBody project={project} />
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
