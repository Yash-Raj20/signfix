import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://signfix.me';

  return [
    {
      url: baseUrl,
      lastModified: new Date('2026-03-01'),
      changeFrequency: 'weekly',
      priority: 1,
    },
  ];
}
