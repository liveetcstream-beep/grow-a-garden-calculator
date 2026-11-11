import { MetadataRoute } from 'next'
import { CROPS } from '@/data/crops'
import { PETS } from '@/data/pets'
import { MUTATIONS } from '@/data/mutations'
import { getSourceModifiedDates } from '@/lib/contentDates'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://growagardencalcs.com'

  const staticEntries: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/seed-combiner`,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/value-list`,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/mutation-guide`,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/aurora-mutation`,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/grow-a-garden-2`,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/grow-a-garden-2/wiki`,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/grow-a-garden-2/wiki/codes`,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/grow-a-garden-2/weather-tracker`,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/grow-a-garden-2/trades`,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/grow-a-garden-2/wiki/plants/moonbloom`,
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/grow-a-garden-2/wiki/plants/sunbloom`,
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/grow-a-garden-2/wiki/plants/mushroom`,
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/grow-a-garden-2/wiki/plants/corn`,
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/grow-a-garden-2/wiki/pets/raccoon`,
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/grow-a-garden-2/wiki/pets/bunny`,
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/grow-a-garden-2/wiki/pets/rainbowturtle`,
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/grow-a-garden-2/wiki/pets/dragonfly`,
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/grow-a-garden-2/wiki/plants/bamboo`,
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/grow-a-garden-2/wiki/plants/sunflower`,
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/grow-a-garden-2/wiki/plants/ghostpepper`,
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/grow-a-garden-2/wiki/plants/dragonsbreath`,
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/grow-a-garden-2/stock-predictor`,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/elephant-calculator`,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/crop-calculator`,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/pet-calculator`,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/trade-calculator`,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/mutation-calculator`,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/mutation-stacking-guide`,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/reverse-calculator`,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/seed-profit`,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/changelog`,
      changeFrequency: 'weekly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/fairy-update`,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/ghoul-garden-halloween-event`,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/pet/scarecrow-stats`,
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/contact`,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/privacy`,
      changeFrequency: 'monthly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      changeFrequency: 'monthly',
      priority: 0.3,
    },
  ]

  const dynamicCrops: MetadataRoute.Sitemap = CROPS.map((crop) => ({
    url: `${baseUrl}/crop/${crop.id}-value`,
    changeFrequency: 'weekly',
    priority: 0.7,
  }))

  const dynamicPets: MetadataRoute.Sitemap = PETS.map((pet) => ({
    url: `${baseUrl}/pet/${pet.id}-stats`,
    changeFrequency: 'weekly',
    priority: 0.7,
  }))

  const dynamicMutations: MetadataRoute.Sitemap = MUTATIONS
    .filter((mutation) => mutation.id !== 'aurora')
    .map((mutation) => ({
      url: `${baseUrl}/mutation/${mutation.id}`,
      changeFrequency: 'weekly',
      priority: 0.6,
    }))

  const allEntries = [...staticEntries, ...dynamicCrops, ...dynamicPets, ...dynamicMutations]
  const sourcePathsByUrl = new Map<string, string[]>()

  for (const entry of allEntries) {
    const route = new URL(entry.url).pathname
    let sources: string[]

    if (route === '/') {
      sources = ['src/app/page.tsx', 'src/data/crops.ts', 'src/data/mutations.ts', 'src/data/pets.ts']
    } else if (route.startsWith('/crop/')) {
      sources = ['src/app/crop/[slug]/page.tsx', 'src/data/crops.ts']
    } else if (route.startsWith('/mutation/')) {
      sources = ['src/app/mutation/[slug]/page.tsx', 'src/data/mutations.ts']
    } else if (route.startsWith('/pet/')) {
      sources = ['src/app/pet/[slug]/page.tsx', 'src/data/pets.ts']
    } else {
      sources = [`src/app${route}/page.tsx`]
    }

    sourcePathsByUrl.set(entry.url, sources)
  }

  const allSourcePaths = [...new Set([...sourcePathsByUrl.values()].flat())]
  const modifiedDates = getSourceModifiedDates(allSourcePaths)
  const entriesWithSourceDates = allEntries.map((entry) => {
    const dates = (sourcePathsByUrl.get(entry.url) ?? [])
      .map((source) => modifiedDates.get(source))
      .filter((date): date is Date => date instanceof Date && !Number.isNaN(date.getTime()))
    const latestDate = dates.length > 0
      ? new Date(Math.max(...dates.map((date) => date.getTime())))
      : undefined

    if (!latestDate) return entry
    return { ...entry, lastModified: latestDate }
  })

  return entriesWithSourceDates
}
