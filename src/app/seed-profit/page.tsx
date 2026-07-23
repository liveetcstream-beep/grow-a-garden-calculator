import type { Metadata } from "next";
import SeedProfitCalculator from "@/components/SeedProfitCalculator";

const seedProfitTitle = "Seed Profit Calculator - Best Crops ROI | Grow A Garden";
const seedProfitDesc = "Find the most profitable seeds in Grow A Garden. Calculate ROI, profit per minute, and compare all crops to maximize your earnings.";
const seedProfitUrl = "https://growagardencalcs.com/seed-profit";

export const metadata: Metadata = {
  title: seedProfitTitle,
  description: seedProfitDesc,
  keywords: ["GAG seed profit", "Grow A Garden best seeds", "seed ROI calculator", "best crops GAG"],
  alternates: { canonical: '/seed-profit' },
  openGraph: {
    title: seedProfitTitle,
    description: seedProfitDesc,
    url: seedProfitUrl,
    siteName: "Grow A Garden Calculator",
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: seedProfitTitle,
      }
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: seedProfitTitle,
    description: seedProfitDesc,
    images: ['/og-image.png'],
  },
};

export default function SeedProfitPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-3" style={{ fontFamily: 'var(--font-display)', color: 'var(--foreground)' }}>
          🌱 Seed Profit Calculator
        </h1>
        <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
          Calculate the profitability of each seed type. See revenue, cost, profit per seed, per minute earnings, and ROI percentage for every crop.
        </p>
      </div>
      <SeedProfitCalculator />
    </div>
  );
}
