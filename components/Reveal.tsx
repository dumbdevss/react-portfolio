'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger, useGSAP);

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

export default function Reveal({
  children,
  className,
  y = 28,
  delay = 0,
  stagger,
  as: Tag = 'div',
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;

      const targets = stagger ? Array.from(el.children) : el;

      gsap.set(el, { autoAlpha: 1 });
      gsap.from(targets, {
        autoAlpha: 0,
        y,
        duration: 1,
        delay,
        ease: 'power3.out',
        stagger: stagger ?? 0,
        scrollTrigger: {
          trigger: el,
          start: 'top 88%',
        },
      });
    },
    { scope: ref },
  );

  return (
    <Tag ref={ref} className={`reveal-hidden ${className ?? ''}`}>
      {children}
    </Tag>
  );
}
