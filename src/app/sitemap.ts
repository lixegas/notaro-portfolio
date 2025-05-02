
export const dynamic = 'force-static';

import { BASE_URL } from '@/constants/common';
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${BASE_URL}/`,
      lastModified: new Date(),
    },
  ];
}
