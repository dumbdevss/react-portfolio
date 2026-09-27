import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/** Build independent scenes inside the caller's GSAP context. */
export function createPortfolioMotion(root: HTMLElement) {
  const all = (selector: string) =>
    gsap.utils.toArray<HTMLElement>(selector, root);
  const mm = gsap.matchMedia();
  const cleanups: (() => void)[] = [];

  mm.add("(prefers-reduced-motion: no-preference)", () => {
    gsap
      .timeline({ defaults: { ease: "power4.out" } })
      .from(all("[data-hero-line]"), {
        yPercent: 115,
        rotation: 5,
        duration: 1.25,
        stagger: 0.12,
      })
      .from(
        all("[data-hero-portrait]"),
        { opacity: 0, y: 80, scale: 1.12, duration: 1.45 },
        0.2,
      )
      .from(
        all("[data-hero-orbit]"),
        { scale: 0.65, rotation: -45, opacity: 0, duration: 1.4 },
        0.35,
      )
      .from(
        all("[data-hero-detail]"),
        { opacity: 0, y: 18, duration: 0.8, stagger: 0.07 },
        0.6,
      );

    all("[data-reveal]").forEach((el) => {
      gsap.from(el, {
        y: 32,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 94%", once: true },
      });
    });

    gsap.from(all("[data-about-title]"), {
      yPercent: 105,
      stagger: 0.12,
      duration: 1.1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: root.querySelector(".about-headline"),
        start: "top 92%",
        once: true,
      },
    });

    all("[data-capability]").forEach((panel, i) => {
      gsap.from(panel, {
        y: 90,
        rotation: i % 2 ? 5 : -5,
        rotationX: 12,
        transformPerspective: 1200,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: { trigger: panel, start: "top 94%", once: true },
      });
      const art = panel.querySelector("svg");
      if (art)
        gsap.fromTo(
          art,
          { y: 25, rotation: -8 },
          {
            y: -18,
            rotation: 8,
            ease: "none",
            scrollTrigger: {
              trigger: panel,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.8,
            },
          },
        );
    });

    all("[data-statement]").forEach((el, i) => {
      gsap.from(el, {
        xPercent: i % 2 ? 18 : -18,
        yPercent: 110,
        duration: 1.15,
        ease: "power4.out",
        scrollTrigger: {
          trigger: el.parentElement,
          start: "top 91%",
          once: true,
        },
      });
    });

    const story = root.querySelector<HTMLElement>(".process-story");
    const numbers = all("[data-dial-number]");
    const steps = all("[data-process-step]");
    if (story) {
      gsap.fromTo(
        root.querySelector("[data-dial-progress]"),
        { strokeDashoffset: 917.345 },
        {
          strokeDashoffset: 0,
          ease: "none",
          scrollTrigger: {
            trigger: story,
            start: "top 45%",
            end: "bottom 75%",
            scrub: 0.45,
          },
        },
      );
      gsap.to(root.querySelector("[data-dial-orbit]"), {
        rotation: 360,
        svgOrigin: "160 160",
        ease: "none",
        scrollTrigger: {
          trigger: story,
          start: "top 45%",
          end: "bottom 75%",
          scrub: 0.45,
        },
      });
      steps.forEach((step, i) => {
        const number = numbers[i];
        // Each number owns its own scrubbed transition, which also reverses.
        if (i > 0)
          gsap.fromTo(
            number,
            { yPercent: 100, autoAlpha: 0 },
            {
              yPercent: 0,
              autoAlpha: 1,
              ease: "none",
              scrollTrigger: {
                trigger: step,
                start: "top 65%",
                end: "top 40%",
                scrub: true,
              },
            },
          );
        if (i < steps.length - 1)
          gsap.to(number, {
            yPercent: -100,
            autoAlpha: 0,
            ease: "none",
            scrollTrigger: {
              trigger: steps[i + 1],
              start: "top 65%",
              end: "top 40%",
              scrub: true,
            },
          });
        gsap.from(step.querySelectorAll("h3, p, .process-deliverable"), {
          y: 36,
          opacity: 0,
          stagger: 0.1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: step, start: "top 85%", once: true },
        });
      });
    }

    all("[data-journal]").forEach((card, i) => {
      gsap.from(card, {
        y: 85 + i * 18,
        rotation: [-4, 3, -2][i],
        opacity: 0,
        duration: 1.1,
        ease: "power3.out",
        scrollTrigger: { trigger: card, start: "top 93%", once: true },
      });
    });
    gsap.from(all("[data-contact-line]"), {
      yPercent: 120,
      rotation: 3,
      stagger: 0.13,
      duration: 1.2,
      ease: "power4.out",
      scrollTrigger: {
        trigger: root.querySelector(".contact-heading"),
        start: "top 88%",
        once: true,
      },
    });
    gsap.from(root.querySelector(".contact-orbit"), {
      rotation: -90,
      scale: 0.5,
      opacity: 0,
      duration: 1.2,
      ease: "back.out(1.4)",
      scrollTrigger: {
        trigger: root.querySelector(".contact-heading"),
        start: "top 88%",
        once: true,
      },
    });
    gsap.from(all("[data-footer-letter]"), {
      yPercent: 110,
      rotation: 8,
      stagger: 0.08,
      ease: "power2.out",
      scrollTrigger: {
        trigger: root.querySelector(".site-footer"),
        start: "top bottom",
        end: "bottom bottom",
        scrub: 0.6,
      },
    });
    gsap.from(root.querySelector("[data-footer-seal]"), {
      rotation: -55,
      scale: 0.8,
      ease: "none",
      scrollTrigger: {
        trigger: root.querySelector(".site-footer"),
        start: "top bottom",
        end: "bottom bottom",
        scrub: 0.6,
      },
    });
  });

  mm.add(
    "(min-width: 1024px) and (min-height: 700px) and (prefers-reduced-motion: no-preference)",
    () => {
      const stage = root.querySelector<HTMLElement>("[data-gallery-stage]");
      const track = root.querySelector<HTMLElement>("[data-gallery-track]");
      if (!stage || !track) return;
      stage.dataset.galleryEnhanced = "true";
      const distance = () => Math.max(0, track.scrollWidth - track.clientWidth);
      const gallery = gsap.to(track, {
        x: () => -distance(),
        ease: "none",
        scrollTrigger: {
          trigger: stage,
          start: "top 88px",
          end: () => "+=" + distance(),
          pin: true,
          refreshPriority: 1,
          scrub: 0.7,
          invalidateOnRefresh: true,
        },
      });
      gsap.fromTo(
        root.querySelector("[data-gallery-progress]"),
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

      all("[data-featured]").forEach((card, i) => {
        const depth = card.querySelector("[data-project-depth]");
        if (depth)
          gsap.fromTo(
            depth,
            { rotation: i % 2 ? 5 : -5, scale: 0.92, x: 45 },
            {
              rotation: i % 2 ? -2 : 2,
              scale: 1.03,
              x: -35,
              ease: "none",
              scrollTrigger: {
                trigger: card,
                containerAnimation: gallery,
                start: "left right",
                end: "right left",
                scrub: true,
              },
            },
          );
        gsap.fromTo(
          card.querySelector("[data-project-backdrop]"),
          { xPercent: 12 },
          {
            xPercent: -12,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              containerAnimation: gallery,
              start: "left right",
              end: "right left",
              scrub: true,
            },
          },
        );
      });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: root.querySelector(".hero"),
            start: "top top",
            end: "bottom top",
            scrub: 0.65,
          },
        })
        .to(
          all("[data-hero-line]")[0],
          { xPercent: -12, y: -40, ease: "none" },
          0,
        )
        .to(
          all("[data-hero-line]")[1],
          { xPercent: 12, y: -40, ease: "none" },
          0,
        )
        .to(all("[data-hero-depth]"), { y: 110, scale: 0.9, ease: "none" }, 0)
        .to(all("[data-hero-orbit]"), { rotation: 65, y: 70, ease: "none" }, 0)
        .to(all("[data-hero-detail]"), { opacity: 0, y: -20, ease: "none" }, 0);

      const focus = (event: FocusEvent) => {
        const target = event.target;
        if (
          !(target instanceof HTMLElement) ||
          !target.matches("[data-featured]")
        )
          return;
        const trigger = gallery.scrollTrigger;
        if (!trigger) return;
        const offset = Math.min(target.offsetLeft, distance());
        window.scrollTo({ top: trigger.start + offset, behavior: "instant" });
        ScrollTrigger.update();
        trigger.getTween()?.progress(1);
        gallery.progress(distance() ? offset / distance() : 0);
      };
      track.addEventListener("focusin", focus);
      return () => {
        delete stage.dataset.galleryEnhanced;
        track.removeEventListener("focusin", focus);
      };
    },
  );

  mm.add(
    "(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)",
    () => {
      const dispose: (() => void)[] = [];
      all("[data-tilt]").forEach((surface) => {
        const target = surface.parentElement!;
        const xTo = gsap.quickTo(surface, "rotationY", {
          duration: 0.6,
          ease: "power3.out",
        });
        const yTo = gsap.quickTo(surface, "rotationX", {
          duration: 0.6,
          ease: "power3.out",
        });
        gsap.set(surface, { transformPerspective: 1000 });
        const move = (event: PointerEvent) => {
          const box = target.getBoundingClientRect();
          xTo(((event.clientX - box.left) / box.width - 0.5) * 7);
          yTo(-((event.clientY - box.top) / box.height - 0.5) * 7);
        };
        const leave = () => {
          xTo(0);
          yTo(0);
        };
        target.addEventListener("pointermove", move);
        target.addEventListener("pointerleave", leave);
        dispose.push(() => {
          target.removeEventListener("pointermove", move);
          target.removeEventListener("pointerleave", leave);
        });
      });
      all("[data-magnetic]").forEach((el) => {
        const xTo = gsap.quickTo(el, "x", {
          duration: 0.5,
          ease: "power3.out",
        });
        const yTo = gsap.quickTo(el, "y", {
          duration: 0.5,
          ease: "power3.out",
        });
        const move = (event: PointerEvent) => {
          const box = el.getBoundingClientRect();
          xTo((event.clientX - box.left - box.width / 2) * 0.22);
          yTo((event.clientY - box.top - box.height / 2) * 0.22);
        };
        const leave = () => {
          xTo(0);
          yTo(0);
        };
        el.addEventListener("pointermove", move);
        el.addEventListener("pointerleave", leave);
        dispose.push(() => {
          el.removeEventListener("pointermove", move);
          el.removeEventListener("pointerleave", leave);
        });
      });
      return () => dispose.forEach((fn) => fn());
    },
  );

  let active = true;
  const refresh = () => {
    if (active) {
      ScrollTrigger.sort();
      ScrollTrigger.refresh();
    }
  };
  document.fonts.ready.then(refresh);
  all("img").forEach((img) => {
    img.addEventListener("load", refresh);
    cleanups.push(() => img.removeEventListener("load", refresh));
  });
  return () => {
    active = false;
    cleanups.forEach((fn) => fn());
    mm.revert();
  };
}
