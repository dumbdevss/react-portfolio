import { createClient } from 'next-sanity';
import { apiVersion, dataset, projectId, sanityConfigured } from '../env';

/**
 * Sanity client. Only instantiated when a projectId is configured —
 * otherwise the blog falls back to local sample content.
 */
export const client = sanityConfigured
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: true,
    })
  : null;
