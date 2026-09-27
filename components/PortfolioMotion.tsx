"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

/** Scoped, reversible motion; server-rendered content stays readable. */
export default function PortfolioMotion({
  children,
}: {
  children: React.ReactNode;
}) {
  const root = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const intro = gsap.timeline({ defaults: { ease: "power3.out" } });
        intro
          .from("[data-hero-line]", {
            yPercent: 110,
            rotate: 3,
            duration: 1.1,
            stagger: 0.12,
          })
          .from(
            "[data-hero-portrait]",
            { opacity: 0, y: 65, scale: 1.07, duration: 1.25 },
            0.2,
          )
          .from(
            "[data-hero-detail]",
            { opacity: 0, y: 14, duration: 0.7, stagger: 0.08 },
            0.65,
          );
        gsap.utils
          .toArray<HTMLElement>("[data-reveal]", root.current)
          .forEach((el) => {
            gsap.from(el, {
              y: 38,
              opacity: 0,
              duration: 0.85,
              ease: "power3.out",
              scrollTrigger: { trigger: el, start: "top 94%", once: true },
            });
          });
        gsap.utils
          .toArray<HTMLElement>("[data-capability]", root.current)
          .forEach((el, i) => {
            gsap.from(el, {
              y: 65,
              rotation: i % 2 ? 2 : -2,
              opacity: 0,
              duration: 1,
              delay: i * 0.07,
              ease: "power3.out",
              scrollTrigger: { trigger: el, start: "top 94%", once: true },
            });
          });
        gsap.utils
          .toArray<HTMLElement>("[data-statement]", root.current)
          .forEach((el) => {
            gsap.from(el, {
              yPercent: 105,
              duration: 1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: el.parentElement,
                start: "top 92%",
                once: true,
              },
            });
          });
      });
      mm.add(
        "(min-width: 1024px) and (min-height: 700px) and (prefers-reduced-motion: no-preference)",
        () => {
          const stage = root.current?.querySelector<HTMLElement>(
            "[data-gallery-stage]",
          );
          const track = root.current?.querySelector<HTMLElement>(
            "[data-gallery-track]",
          );
          if (!stage || !track) return;
          stage.dataset.galleryEnhanced = "true";
          const distance = () =>
            Math.max(0, track.scrollWidth - track.clientWidth);
          const gallery = gsap.to(track, {
            x: () => -distance(),
            ease: "none",
            scrollTrigger: {
              trigger: stage,
              start: "top 88px",
              end: () => "+=" + distance(),
              pin: true,
              scrub: 0.65,
              invalidateOnRefresh: true,
            },
          });
          gsap.fromTo(
            "[data-gallery-progress]",
            { scaleX: 0 },
            {
              scaleX: 1,
              ease: "none",
              scrollTrigger: {
                trigger: stage,
                start: "top 88px",
                end: () => "+=" + distance(),
                scrub: true,
                invalidateOnRefresh: true,
              },
            },
          );
          gsap.to("[data-hero-portrait]", {
            y: 90,
            ease: "none",
            scrollTrigger: {
              trigger: ".hero",
              start: "top top",
              end: "bottom top",
              scrub: true,
            },
          });
          gsap.to(".hero-title", {
            y: -60,
            ease: "none",
            scrollTrigger: {
              trigger: ".hero",
              start: "top top",
              end: "bottom top",
              scrub: true,
            },
          });
          // Advance the pinned track so keyboard-focused links remain visible.
          const onFocus = (event: FocusEvent) => {
            const target = event.target;
            if (
              !(target instanceof HTMLElement) ||
              !target.matches("[data-featured]")
            )
              return;
            const trigger = gallery.scrollTrigger;
            if (trigger) {
              window.scrollTo({
                top: trigger.start + Math.min(target.offsetLeft, distance()),
                behavior: "instant",
              });
              ScrollTrigger.update();
              trigger.getTween()?.progress(1);
            }
          };
          track.addEventListener("focusin", onFocus);
          return () => {
            delete stage.dataset.galleryEnhanced;
            track.removeEventListener("focusin", onFocus);
          };
        },
      );
      let active = true;
      const refresh = () => {
        if (active) ScrollTrigger.refresh();
      };
      document.fonts.ready.then(refresh);
      const images = Array.from(root.current?.querySelectorAll("img") ?? []);
      images.forEach((img) => img.addEventListener("load", refresh));
      return () => {
        active = false;
        images.forEach((img) => img.removeEventListener("load", refresh));
        mm.revert();
      };
    },
    { scope: root },
  );
  return (
    <div ref={root} className="portfolio">
      {children}
    </div>
  );
}
