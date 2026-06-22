export const profile = {
  name: 'Taiwo',
  roles: ['Full-stack Engineer', 'Frontend / Product', 'Web3 Developer'],
  location: 'Available worldwide · Remote',
  email: 'taiwotriumphant@gmail.com',
  intro:
    'I design and build software end to end — from resilient backends and clean APIs to the refined, performant interfaces people actually touch. Lately that means full-stack product work, frontend craft, and the occasional smart contract.',
  bio: [
    'I’m a software engineer who cares about the whole stack. I like the part where a vague idea becomes a real, fast, well-built product — and I’m comfortable owning that path from data model to pixel.',
    'My work spans full-stack product engineering, frontend systems with an obsession over detail and motion, and Web3 — writing and shipping on-chain logic with a security-first mindset.',
  ],
  socials: [
    { name: 'GitHub', href: 'https://github.com/dumbdevss' },
    { name: 'Twitter', href: 'https://x.com/dumbdevs' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/taiwo-triumphant-codex/' },
  ],
};

export const capabilities = [
  {
    title: 'Full-stack',
    description:
      'APIs, data modeling, and services that hold up in production. Next.js, Node, Postgres.',
    stack: ['Next.js', 'Node.js', 'PostgreSQL', 'REST / tRPC'],
  },
  {
    title: 'Frontend / Product',
    description:
      'Interfaces with intent — accessible, fast, and animated with restraint. Design systems that scale.',
    stack: ['React', 'TypeScript', 'Tailwind', 'GSAP'],
  },
  {
    title: 'Web3',
    description:
      'Gas-aware Solidity and the front-ends that make on-chain logic feel approachable.',
    stack: ['Solidity', 'Foundry', 'Wagmi / Viem', 'The Graph'],
  },
];

export type Project = {
  title: string;
  category: string;
  description: string;
  link?: string;
  year: string;
  technologies: string[];
  image?: string;
};

/**
 * Builds a live screenshot of a project URL via WordPress mShots (free, no auth).
 * The first request may briefly return a placeholder while the shot is generated,
 * then it is cached. For full control, replace any `image` with a local file in
 * /public/projects, e.g. image: '/projects/moil.png'.
 */
function shot(url: string): string {
  return `https://s0.wp.com/mshots/v1/${encodeURIComponent(url)}?w=1200&h=750`;
}

export const projects: Project[] = [
  {
    title: 'Moil App',
    category: 'Job & Resume Platform',
    description:
      'A job-posting and resume-builder platform for Moil, Texas — connecting workers with opportunities.',
    link: 'https://moilapp.com',
    year: '2024',
    technologies: ['React', 'Node.js', 'PostgreSQL'],
    image: shot('https://moilapp.com'),
  },
  {
    title: 'Movement Network Docs',
    category: 'Technical Writing',
    description:
      'Authored the Move Book and token-standard documentation for the Movement Network — developer guides for the Move language and building on-chain.',
    link: 'https://docs.movementnetwork.xyz/general',
    year: '2024',
    technologies: ['Move', 'Documentation', 'Developer Education'],
    image: shot('https://docs.movementnetwork.xyz/general'),
  },
  {
    title: 'Empowered Wellness with Inna',
    category: 'Wellness Coaching',
    description:
      'A functional-nutrition practice site offering root-cause testing and personalized protocols for women’s health.',
    link: 'https://www.empoweredwithinna.com/',
    year: '2024',
    technologies: ['Next.js', 'Tailwind', 'CMS'],
    image: shot('https://www.empoweredwithinna.com/'),
  },
  {
    title: 'Meridian Buda',
    category: 'Venue & Events',
    description:
      'A Texas venue site for a coffee, live-music, and community gathering space in Buda.',
    link: 'https://www.meridianbuda.com/',
    year: '2024',
    technologies: ['Next.js', 'Tailwind', 'Events'],
    image: shot('https://www.meridianbuda.com/'),
  },
  {
    title: 'Jungle Flavorz',
    category: 'Catering Brand',
    description:
      'An Austin catering company specializing in authentic Burundian and East African cuisine for events and celebrations.',
    link: 'https://jungleflavorz.com/',
    year: '2024',
    technologies: ['Next.js', 'Tailwind', 'E-commerce'],
    image: shot('https://jungleflavorz.com/'),
  },
  {
    title: 'Moil CRM',
    category: 'CRM Suite',
    description:
      'A family of CRM applications — including the Moil CRM — for managing leads, pipelines, and customer relationships.',
    link: 'https://moil-crm.vercel.app/',
    year: '2024',
    technologies: ['React', 'Node.js', 'PostgreSQL'],
    image: '/moil_crm.png',
  },
  {
    title: 'Vault App',
    category: 'Security & Secrets',
    description:
      'A secure vault for storing and managing sensitive credentials and secrets behind strict access controls.',
    link: 'https://vault-app-lac.vercel.app/',
    year: '2025',
    technologies: ['Next.js', 'Encryption', 'Auth'],
    image: '/vault_app.png',
  },
];
