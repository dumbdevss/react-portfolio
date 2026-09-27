import Link from "next/link";
import Logo from "./Logo";
import { profile } from "../lib/data";

export default function Footer() {
  return (
    <footer className="site-footer section-shell">
      <div className="footer-top">
        <Link
          href="/"
          className="wordmark"
          aria-label="Taiwo Triumphant — home"
        >
          <Logo />
          <span>
            taiwo<span className="wordmark-dot">.</span>
          </span>
        </Link>
        <div className="footer-socials">
          {profile.socials.map((social) => (
            <a
              href={social.href}
              key={social.name}
              target="_blank"
              rel="noopener noreferrer"
            >
              {social.name} ↗
            </a>
          ))}
        </div>
        <a href="#main" className="back-top">
          Back to top ↑
        </a>
      </div>
      <div className="footer-name" aria-hidden>
        TAIWO<span>✳</span>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} TAIWO TRIUMPHANT</span>
        <span>BUILT WITH INTENT. ALWAYS.</span>
        <span>THANKS FOR SCROLLING ↗</span>
      </div>
    </footer>
  );
}
