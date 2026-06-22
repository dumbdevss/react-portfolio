'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PostCard from './PostCard';
import type { PostSummary } from '../lib/sample-posts';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function EssayEnvelope({ posts }: { posts: PostSummary[] }) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const stage = ref.current;
      if (!stage) return;

      const letters = gsap.utils.toArray<HTMLElement>('[data-letter]', stage);
      const flap = stage.querySelector<HTMLElement>('[data-flap]');
      const mouth = stage.querySelector<HTMLElement>('[data-mouth]');
      const envelope = stage.querySelector<HTMLElement>('[data-envelope]');

      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (reduce || !mouth) {
        gsap.set(letters, { opacity: 1 });
        return;
      }

      // Tuck every card into the envelope mouth (converge to one point, fanned).
      const mr = mouth.getBoundingClientRect();
      const mcx = mr.left + mr.width / 2;
      const mcy = mr.top + mr.height / 2;

      letters.forEach((el, i) => {
        const r = el.getBoundingClientRect();
        const cx = r.left + r.width / 2;
        const cy = r.top + r.height / 2;
        gsap.set(el, {
          x: mcx - cx,
          y: mcy - cy,
          scale: 0.42,
          rotate: (i - (letters.length - 1) / 2) * 9,
          opacity: 0,
          transformOrigin: '50% 50%',
        });
      });

      const tl = gsap.timeline({
        scrollTrigger: { trigger: stage, start: 'top 68%' },
      });

      tl.set(letters, { opacity: 1 })
        .from(
          envelope,
          { y: 40, autoAlpha: 0, duration: 0.5, ease: 'power2.out' },
          0,
        )
        .to(
          flap,
          { rotateX: -178, duration: 0.55, ease: 'power2.inOut' },
          0.15,
        )
        .to(
          letters,
          {
            x: 0,
            y: 0,
            scale: 1,
            rotate: 0,
            duration: 0.95,
            stagger: 0.13,
            ease: 'back.out(1.5)',
          },
          '-=0.1',
        );
    },
    { scope: ref },
  );

  return (
    <div ref={ref} className="relative pb-56" style={{ perspective: '1200px' }}>
      {/* The three "letters" */}
      <div className="relative z-30 grid gap-6 md:grid-cols-3">
        {posts.map((post) => (
          <div key={post._id} data-letter className="opacity-0">
            <PostCard post={post} />
          </div>
        ))}
      </div>

      {/* Decorative envelope they pop out of */}
      <div
        data-envelope
        aria-hidden
        className="pointer-events-none absolute bottom-1 left-1/2 z-40 aspect-[36/25] w-[280px] -translate-x-1/2 drop-shadow-2xl sm:w-[320px]"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Envelope body + front pocket */}
        <svg
          viewBox="0 0 360 250"
          className="absolute inset-0 h-full w-full overflow-visible"
        >
          <defs>
            <linearGradient id="envBody" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" style={{ stopColor: 'var(--brand)' }} />
              <stop offset="100%" style={{ stopColor: 'var(--brand-strong)' }} />
            </linearGradient>
          </defs>

          {/* body */}
          <rect
            x="4"
            y="42"
            width="352"
            height="200"
            rx="16"
            style={{ fill: 'url(#envBody)' }}
            stroke="rgba(255,255,255,0.16)"
            strokeWidth="1"
          />

          {/* interior shadow seen through the opening */}
          <path d="M4 42 H356 L180 150 Z" fill="rgba(0,0,0,0.22)" />

          {/* front pocket (bottom flap, point up) */}
          <path
            d="M4 150 L180 118 L356 150 L356 234 Q356 242 348 242 L12 242 Q4 242 4 234 Z"
            style={{ fill: 'var(--brand-strong)' }}
          />
          <path
            d="M4 150 L180 118 L356 150 L356 234 Q356 242 348 242 L12 242 Q4 242 4 234 Z"
            fill="rgba(0,0,0,0.16)"
          />

          {/* pocket seams */}
          <path
            d="M4 150 L180 118 L356 150"
            fill="none"
            stroke="rgba(255,255,255,0.24)"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path
            d="M6 232 L180 120 L354 232"
            fill="none"
            stroke="rgba(0,0,0,0.16)"
            strokeWidth="1"
            strokeLinejoin="round"
          />
        </svg>

        {/* mouth reference point (where letters converge from) */}
        <div
          data-mouth
          className="absolute left-1/2 top-[36%] h-1 w-1 -translate-x-1/2"
        />

        {/* opening flap (hinged at the top edge) */}
        <svg
          data-flap
          viewBox="0 0 360 250"
          className="absolute inset-0 h-full w-full overflow-visible"
          style={{ transformOrigin: '50% 16.8%' }}
        >
          <defs>
            <linearGradient id="envFlap" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" style={{ stopColor: 'var(--brand-strong)' }} />
              <stop offset="100%" style={{ stopColor: 'var(--brand)' }} />
            </linearGradient>
          </defs>
          <path
            d="M4 42 L356 42 L180 154 Z"
            style={{ fill: 'url(#envFlap)' }}
            stroke="rgba(255,255,255,0.22)"
            strokeWidth="1.2"
            strokeLinejoin="round"
          />
          {/* soft top highlight + center crease */}
          <path d="M4 42 L356 42 L180 154 Z" fill="rgba(255,255,255,0.06)" />
          <path d="M180 46 L180 150" stroke="rgba(0,0,0,0.10)" strokeWidth="1" />
        </svg>
      </div>
    </div>
  );
}
