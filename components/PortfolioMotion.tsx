"use client";

import { useRef, useState, useSyncExternalStore } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { createPortfolioMotion } from "../lib/portfolio-motion";

gsap.registerPlugin(useGSAP);
const preference = "(prefers-reduced-motion: reduce)";
function subscribe(callback: () => void) {
  const media = window.matchMedia(preference);
  media.addEventListener("change", callback);
  return () => media.removeEventListener("change", callback);
}

export default function PortfolioMotion({
  children,
}: {
  children: React.ReactNode;
}) {
  const root = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const systemReduced = useSyncExternalStore(
    subscribe,
    () => window.matchMedia(preference).matches,
    () => false,
  );
  const reduced = paused || systemReduced;

  useGSAP(
    () => {
      if (!root.current || reduced) return;
      return createPortfolioMotion(root.current);
    },
    { scope: root, dependencies: [reduced], revertOnUpdate: true },
  );

  return (
    <div ref={root} className="portfolio" data-motion={reduced ? "off" : "on"}>
      {children}
      <button
        type="button"
        className="motion-control"
        aria-label={
          systemReduced
            ? "Reduced motion follows your device setting"
            : paused
              ? "Enable animations"
              : "Reduce animations"
        }
        aria-pressed={reduced}
        disabled={systemReduced}
        onClick={() => setPaused((value) => !value)}
      >
        <span aria-hidden>{reduced ? "▷" : "Ⅱ"}</span>
        {reduced ? "Motion reduced" : "Motion on"}
      </button>
    </div>
  );
}
