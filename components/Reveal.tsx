'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  /** vertical offset to animate from */
  y?: number;
  delay?: number;
  /** when set, animates direct children with a stagger instead of the wrapper */
  stagger?: number;
  /** render as a different element */
  as?: React.ElementType;
};

/**
 * Scroll-reveal driven by IntersectionObserver (not ScrollTrigger), so it fires
 * reliably even when async content shifts the layout after mount — and always
 * ends fully visible.
 */
export default function Reveal({
  children,
  className,
  y = 28,
  delay = 0,
  stagger,
  as: Tag = 'div',
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const targets = stagger ? Array.from(el.children) : [el];
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Wrapper is always visible; children/element carry the animation.
    gsap.set(el, { autoAlpha: 1 });

    if (reduce) {
      gsap.set(targets, { autoAlpha: 1, y: 0 });
      return;
    }

    gsap.set(targets, { autoAlpha: 0, y });

    let played = false;
    const reveal = () => {
      if (played) return;
      played = true;
      gsap.to(targets, {
        autoAlpha: 1,
        y: 0,
        duration: 0.9,
        delay,
        ease: 'power3.out',
        stagger: stagger ?? 0,
        overwrite: 'auto',
      });
    };

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            reveal();
            io.disconnect();
            break;
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    );

    io.observe(el);

    // Safety net: if the observer never fires (edge cases), reveal shortly after.
    const fallback = window.setTimeout(reveal, 2500);

    return () => {
      io.disconnect();
      window.clearTimeout(fallback);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Tag ref={ref} className={`reveal-hidden ${className ?? ''}`}>
      {children}
    </Tag>
  );
}
