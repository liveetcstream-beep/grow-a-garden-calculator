import type { Metadata } from "next";
import Link from "next/link";
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

const seedProfitFaqs = [
  {
    q: "What is the most profitable seed in Grow A Garden?",
    a: "Diamond Fruit has the highest base value in our database at 10,000 coins, followed by Obsidian Onion (9,000) and Ruby Rose (8,000). But raw value is not the same as profit — growth time, seed cost and mutations all change the ranking. Check the Top 10 Crops by ROI table above for the real answer under your settings.",
  },
  {
    q: "How is seed ROI calculated?",
    a: "ROI (return on investment) is (harvest revenue − seed cost) ÷ seed cost × 100. Harvest revenue is the crop's base value scaled by weight and multiplied by any active mutation multipliers. A positive ROI means the seed earns more than it costs.",
  },
  {
    q: "Do mutations affect seed profit?",
    a: "Yes — heavily. Mutations multiply your harvest value (for example, Golden applies a ×20 multiplier), and that multiplied revenue flows straight into your ROI. A mutated cheap crop can out-earn an unmutated expensive one. Learn the full list in our mutation guide.",
  },
  {
    q: "What is profit per minute and why does it matter?",
    a: "Profit per minute is your total profit divided by the crop's growth time. It matters because a slow, high-value crop can earn less per hour than a fast, mid-value one. If you play in short sessions, sorting by profit per minute usually beats sorting by raw profit.",
  },
];

const seedProfitFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: seedProfitFaqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function SeedProfitPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(seedProfitFaqSchema) }}
      />
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-3" style={{ fontFamily: 'var(--font-display)', color: 'var(--foreground)' }}>
          🌱 Seed Profit Calculator
        </h1>
        <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
          Calculate the profitability of each seed type. See revenue, cost, profit per seed, per minute earnings, and ROI percentage for every crop.
        </p>
      </div>
      <SeedProfitCalculator />

      {/* How seed profit works */}
      <div className="glass-card-static p-6 sm:p-8 mt-12 mb-8" style={{ border: '1px solid var(--glass-border)' }}>
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)', color: 'var(--foreground)' }}>
          📊 How Seed Profit Works
        </h2>
        <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--muted)' }}>
          Every seed in Grow A Garden is an investment: you pay a seed cost up front, wait through the growth time, then harvest crops you can sell. Profit is simply <strong style={{ color: 'var(--foreground)' }}>harvest revenue minus seed cost</strong> — and ROI expresses that profit as a percentage of what you spent. The calculator above runs this math for all 99 crops at once, ranking them in the Top 10 Crops by ROI table so you can see the best seeds for your settings instantly.
        </p>
        <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
          Harvest revenue itself is not a fixed number. A crop's base value is scaled by its harvest weight and multiplied by every active <Link href="/mutation-guide" className="text-[var(--primary)] hover:underline font-bold">mutation multiplier</Link> — which is why the calculator lets you set expected weight, growth time and mutations before comparing. Change any input and the rankings update live.
        </p>
      </div>

      {/* What affects earnings */}
      <div className="grid sm:grid-cols-2 gap-6 mb-8">
        <div className="glass-card-static p-6">
          <h2 className="text-xl font-bold mb-3" style={{ color: 'var(--foreground)' }}>🌾 Crop Choice</h2>
          <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
            Base values span from 10 coins (Carrot) to 10,000 coins (Diamond Fruit). High-tier crops like Obsidian Onion and Ruby Rose dominate raw profit, but their seeds cost far more — which is exactly what the ROI ranking corrects for. Compare exact numbers on the <Link href="/value-list" className="text-[var(--primary)] hover:underline font-bold">value list</Link>.
          </p>
        </div>
        <div className="glass-card-static p-6">
          <h2 className="text-xl font-bold mb-3" style={{ color: 'var(--foreground)' }}>⏱️ Growth Time vs Profit Per Minute</h2>
          <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
            A crop that earns 5,000 coins in 10 minutes beats one that earns 8,000 in an hour if you harvest actively. Enter your real growth time above and sort mentally by the profit-per-minute column — it is the fairest way to compare slow giants against fast earners.
          </p>
        </div>
        <div className="glass-card-static p-6">
          <h2 className="text-xl font-bold mb-3" style={{ color: 'var(--foreground)' }}>🧬 Mutations</h2>
          <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
            Mutations are the biggest profit lever in the game. Even a single strong mutation can multiply a harvest's value many times over, flipping a mediocre ROI into the best on the board. Test stacks in the <Link href="/mutation-calculator" className="text-[var(--primary)] hover:underline font-bold">mutation calculator</Link>, then bring the multipliers back here.
          </p>
        </div>
        <div className="glass-card-static p-6">
          <h2 className="text-xl font-bold mb-3" style={{ color: 'var(--foreground)' }}>⚖️ Harvest Weight</h2>
          <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
            Heavier harvests sell for more, so the expected weight you set changes every revenue figure. If you consistently grow above-average weights, raise the input — your true ROI is higher than the default estimate.
          </p>
        </div>
      </div>

      {/* FAQ */}
      <div className="glass-card-static p-6 sm:p-8">
        <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: 'var(--font-display)', color: 'var(--foreground)' }}>
          ❓ Seed Profit — Frequently Asked Questions
        </h2>
        <div className="space-y-4 text-left">
          {seedProfitFaqs.map((f) => (
            <div key={f.q} className="p-4 rounded-xl border" style={{ background: 'var(--surface-1)', borderColor: 'var(--glass-border)' }}>
              <h3 className="text-sm font-bold mb-1" style={{ color: 'var(--foreground)' }}>
                {f.q}
              </h3>
              <p className="text-xs leading-relaxed" style={{ color: 'var(--muted)' }}>
                {f.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
