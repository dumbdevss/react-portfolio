import Image from "next/image";
import { profile } from "../lib/data";

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-topline" data-hero-detail>
        <span>
          <i className="status-dot" />
          Available for select projects
        </span>
        <span>Independent engineer · Working worldwide</span>
        <span>Portfolio / {new Date().getFullYear()}</span>
      </div>
      <h1 id="hero-title" className="hero-title" aria-label="Software engineer">
        <span className="line-mask">
          <span data-hero-line>SOFTWARE</span>
        </span>
        <span className="line-mask">
          <span data-hero-line>
            ENGINEER<span className="hero-period">.</span>
          </span>
        </span>
      </h1>
      <div className="hero-portrait" data-hero-portrait>
        <Image
          src="/potrait.jpg"
          alt="Taiwo Triumphant, software engineer"
          fill
          priority
          sizes="(max-width: 600px) 90vw, 540px"
          className="portrait-image"
        />
      </div>
      <div className="hero-side hero-side-left" data-hero-detail>
        <span className="micro-label">A little craft. A lot of intent.</span>
        <p>
          I turn complex ideas into
          <br />
          products that <em>feel right.</em>
        </p>
        <a href="#work" className="text-link">
          Explore my work <span aria-hidden>↗</span>
        </a>
      </div>
      <div className="hero-side hero-side-right" data-hero-detail>
        <span className="crosshair" aria-hidden>
          ✳
        </span>
        <p>
          From the first pixel
          <br />
          to the last API call.
        </p>
        <span className="micro-label">Full-stack / Frontend / Web3</span>
      </div>
      <div className="hero-bottom" data-hero-detail>
        <span>
          TAIWO TRIUMPHANT
          <br />
          <span className="hero-bottom-muted">
            Engineer by trade. Builder by nature.
          </span>
        </span>
        <a href="#about" className="scroll-cue" aria-label="Scroll to about">
          <span aria-hidden>↓</span>SCROLL TO EXPLORE
        </a>
        <a href={"mailto:" + profile.email} className="hero-email">
          Have an idea? Let&apos;s build it ↗
        </a>
      </div>
    </section>
  );
}
