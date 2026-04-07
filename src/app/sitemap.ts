import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://growagardencalcs.com'

  // Add all static routes
  const routes = [
    '',
    '/value-list',
    '/crop-calculator',
    '/pet-calculator',
    '/mutation-calculator',
    '/trade-calculator',
    '/reverse-calculator',
    '/seed-profit',
    '/xp-calculator',
    '/about',
    '/contact',
    '/privacy',
    '/terms'
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  return [...routes]
}
