import { createImageUrlBuilder } from '@sanity/image-url';
import { dataset, projectId, sanityConfigured } from '../env';

const builder = sanityConfigured
  ? createImageUrlBuilder({ projectId, dataset })
  : null;

export function urlForImage(source: unknown) {
  if (!builder || !source) return null;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return builder.image(source as any).auto('format').fit('max');
}
