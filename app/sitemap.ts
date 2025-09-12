import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://zyorix.com';
  const routes = [
    '',
    '/services',
    '/services/health-check',
    '/services/optimization',
    '/services/allocation-governance',
    '/services/managed',
    '/pricing',
    '/case-studies',
    '/about',
    '/contact',
    '/blog',
    '/privacy',
  ];
  const now = new Date().toISOString();

  return routes.map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: path === '' ? 1 : 0.7,
  }));
}
