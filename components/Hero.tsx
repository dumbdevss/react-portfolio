'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { profile } from '../lib/data';

gsap.registerPlugin(useGSAP);

const headline = ['Engineering', 'ideas', 'into', 'products', 'people', 'use.'];

export default function Hero() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: { ease: 'power3.out' },
      });

      tl.set(root.current, { autoAlpha: 1 })
        .from('[data-hero="eyebrow"]', { autoAlpha: 0, y: 16, duration: 0.6 })
        .from(
          '[data-hero="word"]',
          { autoAlpha: 0, yPercent: 110, duration: 0.9, stagger: 0.08 },
          '-=0.2',
        )
        .from(
          '[data-hero="intro"]',
          { autoAlpha: 0, y: 20, duration: 0.8 },
          '-=0.5',
        )
        .from(
          '[data-hero="roles"] > *',
          { autoAlpha: 0, y: 14, duration: 0.6, stagger: 0.1 },
          '-=0.5',
        )
        .from(
          '[data-hero="cta"]',
          { autoAlpha: 0, y: 14, duration: 0.6 },
          '-=0.4',
        )
        .from(
          '[data-hero="aside"]',
          { autoAlpha: 0, duration: 0.8 },
          '-=0.8',
        );
    },
    { scope: root },
  );

  return (
    <section
      ref={root}
      className="reveal-hidden relative flex min-h-screen items-center overflow-hidden pt-28"
    >
      {/* layered gradient field */}
      <div aria-hidden className="gradient-mesh pointer-events-none absolute inset-0 -z-10" />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-[-10%] h-[480px] w-[480px] rounded-full opacity-40 blur-[120px]"
        style={{ background: 'radial-gradient(circle, var(--brand) 0%, transparent 70%)' }}
      />
      <div className="absolute inset-0 -z-10 bg-dots opacity-60 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_30%,#000_50%,transparent_100%)]" />

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-[1.5fr_1fr]">
        <div>
          <div data-hero="eyebrow" className="eyebrow mb-8 flex items-center gap-3">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand" />
            {profile.location}
          </div>

          <h1 className="font-serif text-5xl leading-[0.95] tracking-tight text-foreground sm:text-7xl md:text-[5.5rem]">
            {headline.map((word, i) => (
              <span key={i} className="mr-[0.25em] inline-block overflow-hidden align-bottom">
                <span data-hero="word" className="inline-block">
                  {word}
                </span>
              </span>
            ))}
          </h1>

          <p
            data-hero="intro"
            className="mt-8 max-w-xl text-lg leading-relaxed text-muted"
          >
            {profile.intro}
          </p>

          <div data-hero="roles" className="mt-8 flex flex-wrap gap-2">
            {profile.roles.map((role) => (
              <span
                key={role}
                className="rounded-full border border-border px-4 py-1.5 text-sm text-muted"
              >
                {role}
              </span>
            ))}
          </div>

          <div data-hero="cta" className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/#work"
              className="group inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-medium text-white transition-transform hover:-translate-y-0.5"
            >
              View work
              <svg className="transition-transform group-hover:translate-x-1" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-brand hover:text-brand"
            >
              Read writing
            </Link>
          </div>
        </div>

        {/* Portrait */}
        <div data-hero="aside" className="relative hidden justify-self-end lg:block">
          <div className="relative aspect-[4/5] w-72 overflow-hidden rounded-2xl border border-border">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/potrait.jpg"
              alt="Portrait of Taiwo"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
          </div>
          <div className="absolute -bottom-3 -left-3 -z-10 h-24 w-24 rounded-2xl border border-brand/40" />
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-faint md:flex">
        <span className="eyebrow">Scroll</span>
        <span className="h-10 w-px bg-gradient-to-b from-brand to-transparent" />
      </div>
    </section>
  );
}
