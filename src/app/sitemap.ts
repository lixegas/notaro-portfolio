
export const dynamic = 'force-static';

import { SITE_URL } from '@/constants/common';
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${SITE_URL}/`,
      lastModified: new Date(),
    },
  ];
}
