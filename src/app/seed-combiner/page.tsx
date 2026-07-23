import type { Metadata } from "next";
import Link from "next/link";
import { CROPS } from "@/data/crops";
import SeedCombinerTool from "./SeedCombinerTool";

const seedCombinerTitle = "Seed Combiner Grow A Garden - Calculator & Fruit Mechanics";
const seedCombinerDesc = "The ultimate seed combiner grow a garden website tool. Calculate earnings for 18 watermelons, predict mutation algorithms, and master fruit mechanics.";
const seedCombinerUrl = "https://growagardencalcs.com/seed-combiner";

export const metadata: Metadata = {
  title: seedCombinerTitle,
  description: seedCombinerDesc,
  keywords: ["seed combiner grow a garden website", "calculate earnings 18 watermelons", "grow a garden seed mechanics", "fruit mechanic calculator", "watermelon calculator"],
  alternates: { canonical: '/seed-combiner' },
  openGraph: {
    title: seedCombinerTitle,
    description: seedCombinerDesc,
    url: seedCombinerUrl,
    siteName: "Grow A Garden Calculator",
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: seedCombinerTitle,
      }
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: seedCombinerTitle,
    description: seedCombinerDesc,
    images: ['/og-image.png'],
  },
};

export default function SeedCombinerPage() {
  const highTierCrops = CROPS.filter(c => c.basePrice > 200).slice(0, 8);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      <div className="text-center mb-8">
        <h1 className="text-4xl sm:text-5xl font-black mb-4" style={{ fontFamily: 'var(--font-display)', color: 'var(--foreground)' }}>
          🌱 Seed Combiner & <span style={{ background: 'var(--gradient-1)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Fruit Mechanics</span>
        </h1>
        <p className="text-sm max-w-3xl mx-auto leading-relaxed mb-4" style={{ color: 'var(--muted)' }}>
          Welcome to the premier <strong>seed combiner grow a garden website</strong> hub. If you are looking to maximize your harvest yields, predict mutation algorithms, or specifically <strong>calculate earnings 18 watermelons</strong>, this is the interactive fruit mechanics engine you need. For general calculations, check out our main <Link href="/" className="text-[var(--primary)] hover:underline font-bold">Grow A Garden Calculator</Link>.
        </p>
        <p className="text-sm max-w-3xl mx-auto leading-relaxed" style={{ color: 'var(--muted)' }}>
          By merging base-level seed data with high-tier market economics, we can calculate exact profit margins. Use our interactive simulators below to test seed fusion probabilities, calculate watermelon stack profit, and forecast mutation rates.
        </p>
      </div>

      {/* Interactive Tools Component */}
      <SeedCombinerTool />

      {/* Step-by-Step Guide: How does the seed combiner work? */}
      <div className="glass-card-static p-6 sm:p-8 mb-12 border" style={{ borderColor: 'var(--glass-border)' }}>
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2" style={{ fontFamily: 'var(--font-display)', color: 'var(--foreground)' }}>
          <span>📖</span> How Does the Seed Combiner Work? (Step-by-Step)
        </h2>
        <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--muted)' }}>
          The seed combiner machine in Roblox <i>Grow A Garden</i> allows players to fuse lower-tier seeds into rare, epic, and mythical seed strains. Here is how the combination mechanics work in practice:
        </p>
        <ol className="space-y-4 text-sm mb-6" style={{ color: 'var(--muted)' }}>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0" style={{ background: 'var(--primary)', color: 'black' }}>1</span>
            <div>
              <strong style={{ color: 'var(--foreground)' }}>Select Two Input Seeds:</strong> Place two seeds into the combiner slots. Fusing two seeds of the same tier yields a higher baseline probability for an upgraded tier.
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0" style={{ background: 'var(--primary)', color: 'black' }}>2</span>
            <div>
              <strong style={{ color: 'var(--foreground)' }}>Apply Fusion Catalysts:</strong> Using catalysts (Silver, Golden, or Rainbow Catalyst) shifts outcome probabilities upward by 10% to 35%, significantly reducing Common tier fail rates.
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0" style={{ background: 'var(--primary)', color: 'black' }}>3</span>
            <div>
              <strong style={{ color: 'var(--foreground)' }}>Harvest & Mutate:</strong> Once fused, plant your newly generated seed during favorable weather events (like Night Event or Solar Eclipse) with mutation sprays to maximize sell values.
            </div>
          </li>
        </ol>
      </div>

      <div className="grid sm:grid-cols-2 gap-8 mb-12">
        <div className="glass-card-static p-6">
          <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--foreground)' }}>Seed Combinations</h3>
          <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--muted)' }}>
            The <strong>seed combiner mechanics</strong> in Grow A Garden rely on precise combinatorial rarity algorithms. Fusing two baseline seeds does not guarantee a linear progression; instead, the game computes the <strong>rarity tier differential</strong> to output the final crop seed.
          </p>
          <ul className="text-sm space-y-2" style={{ color: 'var(--muted)' }}>
            <li>• Common + Common = 80% Common, 20% Uncommon</li>
            <li>• Rare + Rare = 60% Rare, 35% Epic, 5% Legendary</li>
            <li>• Legendary + Epic = Requires high-tier catalyst</li>
          </ul>
        </div>
        <div className="glass-card-static p-6">
          <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--foreground)' }}>Fruit Mechanics</h3>
          <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--muted)' }}>
            To calculate maximum <strong>fruit mechanics</strong> profit, players must factor in harvest time-decay and peak market prices. A high-yield fruit like Papaya or Dragon Fruit utilizes entirely different growth algorithms compared to early-game crops.
          </p>
          <Link href="/value-list" className="text-sm font-bold transition-colors hover:underline flex items-center gap-1" style={{ color: 'var(--primary)' }}>
            Check the Complete Value List <span>→</span>
          </Link>
        </div>
      </div>

      <div className="glass-card-static p-6">
        <h2 className="text-xl font-bold mb-6 text-center" style={{ fontFamily: 'var(--font-display)', color: 'var(--foreground)' }}>
          Premium Fruits for Combination
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {highTierCrops.map(crop => (
            <Link 
              key={crop.id} 
              href={`/crop/${crop.id}-value`}
              className="p-4 rounded-xl text-center transition-all hover:scale-105"
              style={{ background: 'var(--surface-1)', border: '1px solid var(--glass-border)' }}
            >
              <div className="text-3xl mb-2">{crop.emoji}</div>
              <p className="text-xs font-bold truncate" style={{ color: 'var(--foreground)' }}>{crop.name}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
