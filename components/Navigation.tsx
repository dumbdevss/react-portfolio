"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import Logo from "./Logo";

const links = [
  { label: "About", href: "/#about" },
  { label: "Work", href: "/#work" },
  { label: "Approach", href: "/#approach" },
  { label: "Writing", href: "/blog" },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButton.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="site-header">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <nav className="site-nav" aria-label="Main navigation">
        <Link
          href="/"
          className="wordmark"
          aria-label="Taiwo Triumphant — home"
          onClick={() => setOpen(false)}
        >
          <Logo />
          <span>
            taiwo<span className="wordmark-dot">.</span>
            <small>TRIUMPHANT</small>
          </span>
        </Link>
        <div className="desktop-links">
          {links.map((link, i) => (
            <Link key={link.href} href={link.href} className="nav-link">
              <sup>0{i + 1}</sup>
              {link.label}
            </Link>
          ))}
        </div>
        <div className="nav-actions">
          <ThemeToggle />
          <Link href="/#contact" className="nav-contact">
            Let&apos;s talk <span aria-hidden>↗</span>
          </Link>
          <button
            ref={menuButton}
            type="button"
            className="menu-toggle"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen(!open)}
          >
            <span aria-hidden>{open ? "−" : "+"}</span>
          </button>
        </div>
      </nav>
      <div id="mobile-navigation" className="mobile-navigation" hidden={!open}>
        {[...links, { label: "Let’s talk", href: "/#contact" }].map(
          (link, i) => (
            <Link
              href={link.href}
              key={link.href}
              onClick={() => setOpen(false)}
            >
              <span>0{i + 1}</span>
              {link.label}
              <span aria-hidden>↗</span>
            </Link>
          ),
        )}
      </div>
    </header>
  );
}
