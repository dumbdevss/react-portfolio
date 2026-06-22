import type { PortableTextBlock } from '@portabletext/types';

export type PostSummary = {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  publishedAt: string;
  readingTime: number;
  tags: string[];
  author: string;
  mainImage?: unknown;
  /** Cover image URL (used for external / Hashnode articles). */
  coverImage?: string;
  /** When set, the post links out to this URL instead of an internal route. */
  externalUrl?: string;
};

export type Post = PostSummary & {
  body: PortableTextBlock[];
};

/** Minimal helper to author sample portable-text blocks. */
function block(text: string, style: string = 'normal'): PortableTextBlock {
  return {
    _type: 'block',
    _key: Math.abs(hash(text)).toString(36),
    style,
    markDefs: [],
    children: [{ _type: 'span', _key: 's', text, marks: [] }],
  } as PortableTextBlock;
}

function hash(s: string) {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h << 5) - h + s.charCodeAt(i);
  return h;
}

/**
 * Taiwo's published articles (Hashnode). These render as cards that link out to
 * the full post. Once Sanity is connected, native posts take over automatically.
 */
export const samplePosts: Post[] = [
  {
    _id: 'article-did-crypto',
    title:
      'How to secure decentralized identifiers using public-private key cryptography',
    slug: 'how-to-secure-decentralized-identifiers-using-public-private-key-cryptography',
    excerpt:
      'Using public-private key cryptography to secure decentralized identifiers (DIDs) — so individuals keep control of their digital identity without a central authority.',
    publishedAt: '2023-11-28',
    readingTime: 6,
    tags: ['Web5', 'Cryptography', 'Identity'],
    author: 'Taiwo',
    coverImage:
      'https://cdn.hashnode.com/res/hashnode/image/upload/v1701206880512/467383e8-5249-49dd-9aee-1d1af063f9cc.webp',
    externalUrl:
      'https://free-for-dev.hashnode.dev/how-to-secure-decentralized-identifiers-using-public-private-key-cryptography',
    body: [
      block(
        'Using public-private key cryptography to secure decentralized identifiers (DIDs), enabling individuals to maintain control over their digital identities without relying on central authorities.',
      ),
    ],
  },
  {
    _id: 'article-twilio-voice',
    title: 'Build a voice product review system using Twilio Voice and Ngrok',
    slug: 'build-a-voice-product-review-system-using-twilio-voice-and-ngrok',
    excerpt:
      'Create a voice-enabled product rating system for e-commerce using Twilio Voice and Ngrok to handle incoming calls and process customer feedback.',
    publishedAt: '2023-08-21',
    readingTime: 11,
    tags: ['Twilio', 'Voice', 'E-commerce'],
    author: 'Taiwo',
    coverImage:
      'https://cdn.hashnode.com/res/hashnode/image/upload/v1692610297093/f7e95b60-2fd6-4c75-9bef-2004bc1a8b22.jpeg',
    externalUrl:
      'https://free-for-dev.hashnode.dev/build-a-voice-product-review-system-using-twilio-voice-and-ngrok',
    body: [
      block(
        'Learn how to create a voice-enabled product rating system for e-commerce using Twilio Voice and Ngrok to handle incoming calls and process customer feedback.',
      ),
    ],
  },
  {
    _id: 'article-jwt-session',
    title:
      'Creating a robust authentication system: harnessing the power of JWT and session authentication',
    slug: 'creating-a-robust-authentication-system-harnessing-the-power-of-jwt-and-session-authentication',
    excerpt:
      'Combining JWT and session authentication into one adaptable framework — leveraging the strengths of both to secure modern applications.',
    publishedAt: '2023-05-27',
    readingTime: 4,
    tags: ['Authentication', 'JWT', 'Security'],
    author: 'Taiwo',
    coverImage:
      'https://cdn.hashnode.com/res/hashnode/image/upload/v1685191223302/e54c1075-49f9-44a7-ab9c-205ee91cffe7.jpeg',
    externalUrl:
      'https://free-for-dev.hashnode.dev/creating-a-robust-authentication-system-harnessing-the-power-of-jwt-and-session-authentication',
    body: [
      block(
        'Combining JWT and session authentication creates a powerful, adaptable framework for securing applications while leveraging the strengths of both methods.',
      ),
    ],
  },
  {
    _id: 'article-multer-cloudinary',
    title:
      'Uploading and managing images with Node.js, Multer, and Cloudinary',
    slug: 'uploading-and-managing-images-with-nodejs-multer-and-cloudinary-a-comprehensive-guide',
    excerpt:
      'A comprehensive guide to simplifying image uploading and management in Node.js applications with Multer and Cloudinary.',
    publishedAt: '2023-04-10',
    readingTime: 4,
    tags: ['Node.js', 'Multer', 'Cloudinary'],
    author: 'Taiwo',
    coverImage:
      'https://cdn.hashnode.com/res/hashnode/image/upload/v1681155232165/d06e5817-dc79-4f5a-a4a3-480b97c239d9.jpeg',
    externalUrl:
      'https://free-for-dev.hashnode.dev/uploading-and-managing-images-with-nodejs-multer-and-cloudinary-a-comprehensive-guide',
    body: [
      block(
        'Learn how to simplify image uploading and management in Node.js applications using Multer and Cloudinary to handle large volumes of images.',
      ),
    ],
  },
  {
    _id: 'article-apis-guide',
    title: "The beginner's guide to APIs",
    slug: 'the-beginners-guide-to-apis-simplifying-the-complex-world-of-api-technology',
    excerpt:
      'An introduction to APIs — what they are, how they connect frontend and backend systems, and why they are central to modern software.',
    publishedAt: '2023-04-10',
    readingTime: 4,
    tags: ['APIs', 'Beginners', 'Backend'],
    author: 'Taiwo',
    coverImage:
      'https://cdn.hashnode.com/res/hashnode/image/upload/v1681155655961/ab463ba2-f785-423b-afee-328436c40969.webp',
    externalUrl:
      'https://free-for-dev.hashnode.dev/the-beginners-guide-to-apis-simplifying-the-complex-world-of-api-technology',
    body: [
      block(
        'An introduction to Application Programming Interfaces, explaining what APIs are, how they function as communicators between frontend and backend systems, and their critical role in modern software development.',
      ),
    ],
  },
];
