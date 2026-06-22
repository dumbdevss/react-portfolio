'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Recomputes ScrollTrigger start/end positions after the page has settled.
 * Async/streamed content and late-loading images shift layout after triggers
 * are created at mount, leaving their cached offsets stale (sections stay
 * hidden even once scrolled into view). Refreshing fixes the positions.
 */
export default function ScrollRefresh() {
  useEffect(() => {
    const refresh = () => ScrollTrigger.refresh();

    const timers = [
      setTimeout(refresh, 200),
      setTimeout(refresh, 800),
      setTimeout(refresh, 1800),
    ];

    window.addEventListener('load', refresh);

    // Refresh once web fonts are ready (they change text block heights).
    if (document.fonts?.ready) {
      document.fonts.ready.then(refresh).catch(() => {});
    }

    return () => {
      timers.forEach(clearTimeout);
      window.removeEventListener('load', refresh);
    };
  }, []);

  return null;
}
