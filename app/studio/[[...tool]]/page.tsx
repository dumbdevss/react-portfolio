/**
 * Embedded Sanity Studio, served at /studio.
 * Requires NEXT_PUBLIC_SANITY_PROJECT_ID to be set in your environment.
 */
'use client';

import { NextStudio } from 'next-sanity/studio';
import config from '../../../sanity.config';

export const dynamic = 'force-static';

export default function StudioPage() {
  return <NextStudio config={config} />;
}
