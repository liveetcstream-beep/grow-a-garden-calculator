import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Grow A Garden Calculator 2026',
    short_name: 'GAG Calculator',
    description: '#1 Grow A Garden Calculator for Roblox players. Calculate crop values, pet weight stats, and trade values.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0a0e17',
    theme_color: '#22c55e',
    icons: [
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  }
}
