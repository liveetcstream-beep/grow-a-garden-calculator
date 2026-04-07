import { MetadataRoute } from 'next'
import { CROPS } from '@/data/crops'
import { PETS } from '@/data/pets'
import { MUTATIONS } from '@/data/mutations'

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

  const dynamicCrops = CROPS.map((crop) => ({
    url: `${baseUrl}/crop/${crop.id}-value`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  const dynamicPets = PETS.map((pet) => ({
    url: `${baseUrl}/pet/${pet.id}-stats`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  const dynamicMutations = MUTATIONS.map((mutation) => ({
    url: `${baseUrl}/mutation/${mutation.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }))

  return [...routes, ...dynamicCrops, ...dynamicPets, ...dynamicMutations]
}
