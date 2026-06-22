import { PortableText, type PortableTextComponents } from '@portabletext/react';
import type { PortableTextBlock } from '@portabletext/types';
import Image from 'next/image';
import { urlForImage } from '../sanity/lib/image';

const components: PortableTextComponents = {
  types: {
    image: ({ value }) => {
      const url = urlForImage(value)?.width(1400).url();
      if (!url) return null;
      return (
        <span className="block my-10 overflow-hidden rounded-xl border border-border">
          <Image
            src={url}
            alt={value?.alt || ''}
            width={1400}
            height={900}
            className="w-full h-auto"
          />
        </span>
      );
    },
  },
  marks: {
    link: ({ value, children }) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
  },
};

export default function PortableTextBody({
  value,
}: {
  value: PortableTextBlock[];
}) {
  return (
    <div className="prose-editorial">
      <PortableText value={value} components={components} />
    </div>
  );
}
