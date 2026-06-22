import Link from 'next/link';
import { profile } from '../lib/data';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 sm:flex-row">
        <Link href="/" className="font-serif text-xl tracking-tight text-foreground">
          Taiwo<span className="text-brand">.</span>
        </Link>

        <div className="flex items-center gap-6">
          {profile.socials.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted transition-colors hover:text-brand"
            >
              {social.name}
            </a>
          ))}
        </div>

        <p className="font-mono text-xs text-faint">
          © {year} Taiwo · Built with Next.js & GSAP
        </p>
      </div>
    </footer>
  );
}
