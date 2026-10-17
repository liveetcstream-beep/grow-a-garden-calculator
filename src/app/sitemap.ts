import { MetadataRoute } from 'next'
import { CROPS } from '@/data/crops'
import { PETS } from '@/data/pets'
import { MUTATIONS } from '@/data/mutations'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://growagardencalcs.com'
  const staticLastMod = new Date('2026-07-27')
  const recentlyUpdated = new Date('2026-09-13')

  const staticEntries: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: staticLastMod,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/seed-combiner`,
      lastModified: staticLastMod,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/value-list`,
      lastModified: staticLastMod,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/mutation-guide`,
      lastModified: recentlyUpdated,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/aurora-mutation`,
      lastModified: recentlyUpdated,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/grow-a-garden-2`,
      lastModified: recentlyUpdated,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/grow-a-garden-2/wiki`,
      lastModified: recentlyUpdated,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/grow-a-garden-2/wiki/codes`,
      lastModified: new Date('2026-10-12'),
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/grow-a-garden-2/weather-tracker`,
      lastModified: new Date('2026-10-12'),
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/grow-a-garden-2/trades`,
      lastModified: new Date('2026-10-12'),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/grow-a-garden-2/wiki/plants/moonbloom`,
      lastModified: new Date('2026-10-12'),
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/grow-a-garden-2/wiki/plants/sunbloom`,
      lastModified: new Date('2026-10-12'),
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/grow-a-garden-2/wiki/plants/mushroom`,
      lastModified: new Date('2026-10-12'),
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/grow-a-garden-2/wiki/plants/corn`,
      lastModified: new Date('2026-10-12'),
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/grow-a-garden-2/wiki/pets/raccoon`,
      lastModified: new Date('2026-10-12'),
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/grow-a-garden-2/wiki/pets/bunny`,
      lastModified: new Date('2026-10-12'),
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/grow-a-garden-2/wiki/pets/rainbowturtle`,
      lastModified: new Date('2026-10-17'),
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/grow-a-garden-2/wiki/pets/dragonfly`,
      lastModified: new Date('2026-10-17'),
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/grow-a-garden-2/wiki/plants/bamboo`,
      lastModified: new Date('2026-10-17'),
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/grow-a-garden-2/wiki/plants/sunflower`,
      lastModified: new Date('2026-10-17'),
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/grow-a-garden-2/wiki/plants/ghostpepper`,
      lastModified: new Date('2026-10-17'),
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/grow-a-garden-2/wiki/plants/dragonsbreath`,
      lastModified: new Date('2026-10-17'),
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/grow-a-garden-2/stock-predictor`,
      lastModified: recentlyUpdated,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/elephant-calculator`,
      lastModified: staticLastMod,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/crop-calculator`,
      lastModified: staticLastMod,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/pet-calculator`,
      lastModified: staticLastMod,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/trade-calculator`,
      lastModified: staticLastMod,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/mutation-calculator`,
      lastModified: staticLastMod,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/reverse-calculator`,
      lastModified: staticLastMod,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/seed-profit`,
      lastModified: staticLastMod,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/xp-calculator`,
      lastModified: staticLastMod,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: staticLastMod,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/changelog`,
      lastModified: staticLastMod,
      changeFrequency: 'weekly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/fairy-update`,
      lastModified: new Date('2026-10-16'),
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/ghoul-garden-halloween-event`,
      lastModified: new Date('2026-10-16'),
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/pet/scarecrow-stats`,
      lastModified: new Date('2026-10-16'),
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: staticLastMod,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: staticLastMod,
      changeFrequency: 'monthly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: staticLastMod,
      changeFrequency: 'monthly',
      priority: 0.3,
    },
  ]

  const dynamicCrops: MetadataRoute.Sitemap = CROPS.map((crop) => ({
    url: `${baseUrl}/crop/${crop.id}-value`,
    lastModified: staticLastMod,
    changeFrequency: 'weekly',
    priority: 0.7,
  }))

  const dynamicPets: MetadataRoute.Sitemap = PETS.map((pet) => ({
    url: `${baseUrl}/pet/${pet.id}-stats`,
    lastModified: staticLastMod,
    changeFrequency: 'weekly',
    priority: 0.7,
  }))

  const dynamicMutations: MetadataRoute.Sitemap = MUTATIONS
    .filter((mutation) => mutation.id !== 'aurora')
    .map((mutation) => ({
      url: `${baseUrl}/mutation/${mutation.id}`,
      lastModified: staticLastMod,
      changeFrequency: 'weekly',
      priority: 0.6,
    }))

  return [...staticEntries, ...dynamicCrops, ...dynamicPets, ...dynamicMutations]
}
