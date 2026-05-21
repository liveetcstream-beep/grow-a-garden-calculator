import type { Metadata } from "next";
import Link from "next/link";
import { CROPS } from "@/data/crops";

export const metadata: Metadata = {
  title: "Seed Combiner Grow A Garden - Calculator & Fruit Mechanics",
  description: "The ultimate seed combiner grow a garden website tool. Calculate earnings for 18 watermelons, predict mutation algorithms, and master fruit mechanics.",
  keywords: ["seed combiner grow a garden website", "calculate earnings 18 watermelons", "grow a garden seed mechanics", "fruit mechanic calculator", "watermelon calculator"],
  alternates: { canonical: '/seed-combiner' },
};

export default function SeedCombinerPage() {
  const highTierCrops = CROPS.filter(c => c.basePrice > 200).slice(0, 8);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-black mb-4" style={{ fontFamily: 'var(--font-display)', color: 'var(--foreground)' }}>
          🌱 Seed Combiner & <span style={{ background: 'var(--gradient-1)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Fruit Mechanics</span>
        </h1>
        <p className="text-sm max-w-3xl mx-auto leading-relaxed mb-4" style={{ color: 'var(--muted)' }}>
          Welcome to the premier <strong>seed combiner grow a garden website</strong> hub. If you are looking to maximize your harvest yields, predict mutation algorithms, or specifically <strong>calculate earnings 18 watermelons</strong>, this is the exact fruit mechanics engine you need.
        </p>
        <p className="text-sm max-w-3xl mx-auto leading-relaxed" style={{ color: 'var(--muted)' }}>
          By merging base-level seed data with high-tier market economics, we can calculate exact profit margins. Whether you're running a <strong>watermelon calculator</strong> projection or analyzing top-tier <strong>fruit value permutations</strong>, our combinatorial algorithms break down the exact mathematical yield of your garden plots.
        </p>
      </div>

      <div className="glass-card-static p-8 mb-12 border-2" style={{ borderColor: 'var(--primary)' }}>
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2" style={{ fontFamily: 'var(--font-display)', color: 'var(--foreground)' }}>
          <span className="text-3xl">🍉</span> 18 Watermelons Earning Calculator Example
        </h2>
        <p className="text-sm mb-6" style={{ color: 'var(--muted)' }}>
          A highly requested calculation: "How much do 18 watermelons earn?" Using the standard logarithmic weight scaling and baseline market metrics:
        </p>
        <div className="grid sm:grid-cols-3 gap-4 text-center">
          <div className="p-4 rounded-xl" style={{ background: 'var(--surface-1)' }}>
            <p className="text-xs font-bold text-[var(--muted)] mb-1">Base Price per Watermelon</p>
            <p className="text-xl font-mono text-[var(--primary)] font-bold">120 Coins</p>
          </div>
          <div className="p-4 rounded-xl" style={{ background: 'var(--surface-1)' }}>
            <p className="text-xs font-bold text-[var(--muted)] mb-1">Quantity Stack</p>
            <p className="text-xl font-mono text-[var(--foreground)] font-bold">x 18</p>
          </div>
          <div className="p-4 rounded-xl" style={{ border: '1px solid var(--success)', background: 'rgba(16, 185, 129, 0.05)' }}>
            <p className="text-xs font-bold text-[var(--success)] mb-1">Total Baseline Earnings</p>
            <p className="text-2xl font-mono text-[var(--success)] font-black">2,160 Coins</p>
          </div>
        </div>
        <p className="text-xs mt-4 text-center" style={{ color: 'var(--muted)' }}>
          *This assumes perfectly standard 1kg weight and 0 mutations. Use the <Link href="/crop-calculator" className="text-[var(--primary)] hover:underline">Crop Calculator</Link> to add specific Weight scaling multipliers to your watermelons.
        </p>
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
