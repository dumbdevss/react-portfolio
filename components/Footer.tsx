import Link from "next/link";
import Logo from "./Logo";
import { profile } from "../lib/data";

export default function Footer() {
  return (
    <footer className="site-footer section-shell" aria-label="Site footer">
      <div className="footer-top">
        <div className="footer-intro">
          <Link
            href="/#main"
            className="wordmark"
            aria-label="Taiwo Triumphant — home"
          >
            <Logo />
            <span>
              taiwo<span className="wordmark-dot">.</span>
            </span>
          </Link>
          <p>
            Thoughtful code.
            <br />
            <em>Lasting impressions.</em>
          </p>
          <span className="footer-location">
            INDEPENDENT ENGINEER · WORLDWIDE
          </span>
        </div>
        <nav className="footer-links" aria-label="Footer navigation">
          <span className="footer-label">TAKE ANOTHER LOOK</span>
          <Link href="/#work">
            Selected work <span aria-hidden>↗</span>
          </Link>
          <Link href="/#about">
            About me <span aria-hidden>↗</span>
          </Link>
          <Link href="/blog">
            The journal <span aria-hidden>↗</span>
          </Link>
          <Link href="/#contact">
            Start a conversation <span aria-hidden>↗</span>
          </Link>
        </nav>
        <div className="footer-socials">
          <span className="footer-label">ELSEWHERE ON THE INTERNET</span>
          {profile.socials.map((social) => (
            <a
              href={social.href}
              key={social.name}
              target="_blank"
              rel="noopener noreferrer"
            >
              {social.name} <span aria-hidden>↗</span>
            </a>
          ))}
        </div>
      </div>
      <div className="footer-signature" aria-hidden="true">
        <div className="footer-name">
          {"TAIWO".split("").map((letter, index) => (
            <span data-footer-letter key={index}>
              {letter}
            </span>
          ))}
        </div>
        <div className="footer-seal" data-footer-seal>
          <span>CRAFTED WITH INTENT</span>
          <Logo />
          <span>TAIWO TRIUMPHANT</span>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} TAIWO TRIUMPHANT</span>
        <span>A LITTLE CURIOSITY GOES A LONG WAY.</span>
        <a href="#main" className="back-top">
          Back to the beginning <span aria-hidden>↑</span>
        </a>
      </div>
    </footer>
  );
}
