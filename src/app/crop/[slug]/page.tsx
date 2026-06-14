import { Metadata } from "next";
import { CROPS } from "@/data/crops";
import { MUTATIONS } from "@/data/mutations";
import Link from "next/link";
import CropMiniCalculator from "./CropMiniCalculator";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return CROPS.map(crop => ({
    slug: crop.id + "-value",
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const cropId = slug.replace("-value", "");
  const crop = CROPS.find(c => c.id === cropId);

  if (!crop) {
    return { title: "Crop Not Found" };
  }

  return {
    title: `${crop.name} Value & Calculator | Grow A Garden GAG Calculator`,
    description: `How much is ${crop.name} worth in Grow A Garden? Base price is ${crop.basePrice} coins. Use our gag calculator to find exact ${crop.name} value with weight & mutations.`,
    keywords: [`${crop.name} grow a garden value`, `${crop.name} gag calculator`, `grow a garden calculator ${crop.name}`, `${crop.name} price grow a garden`, `calculator grow a garden`],
    alternates: { canonical: `/crop/${crop.id}-value` },
  };
}

function getHowToGetText(crop: any) {
  switch (crop.category) {
    case "Seed Shop":
      return `The ${crop.name} seed can be purchased directly from the main Seed Shop in the game lobby using Sheckles. It is a baseline beginner crop, making it extremely reliable for early-game coin farming before transitioning to exotic crops.`;
    case "Exotic Seed Pack":
      return `To get ${crop.name} seeds, you need to purchase and open Exotic Seed Packs from the game shop. Because of its exotic rarity tier, it yields a significantly higher return on investment (ROI) compared to basic seeds.`;
    case "Normal Seed Pack":
      return `The ${crop.name} seed is obtained by purchasing and opening standard Normal Seed Packs. It represents an intermediate tier of crop farming, bridging the gap between starter crops and high-end exotics.`;
    case "Night Event":
      return `The ${crop.name} is a special night-active crop that can only be obtained and grown during the GAG Night Event. Keep an eye on the sky and wait for the map lighting to shift to night to activate growth speeds for this category.`;
    case "Easter Event":
      return `The ${crop.name} is a seasonal crop introduced during the Easter Event. You can obtain its seeds by participating in the egg hunt mini-games or exchanging event tokens at the event merchant.`;
    case "Summer Event":
      return `The ${crop.name} is a summer-themed crop obtained through limited-time Summer Event chests. Stack these seeds during the event period to maximize your hot-weather yield multipliers.`;
    case "Prehistoric":
      return `To get the prehistoric ${crop.name}, you need to gather fossils or participate in the Prehistoric Update tasks. Growth in this prehistoric category is heavily influenced by lava and deep-soil multipliers.`;
    case "Zen Update":
      return `The Zen ${crop.name} is obtained through Zen Update mechanics. You can nurture these plants in specialized tranquil garden plots to guarantee smooth, consistent growth with minimal decay.`;
    case "Cooking Update":
      return `The ${crop.name} was introduced in the Cooking Update. These crops are primary ingredients in kitchen recipes, making them highly valuable for player-to-player trade lists since chefs need them in large quantities.`;
    case "Beanstalk Event":
      return `The ${crop.name} is an epic high-altitude crop obtained from the Beanstalk Event. Climbers can find these seeds near the top of the giant beanstalk or trade them with sky-dwellers.`;
    case "Fairy Event":
      return `To get ${crop.name} seeds, you must participate in the Fairy Event. These mystical seeds carry a high chance of turning into valuable mutations like Golden or Rainbow when watered with fairy dust.`;
    case "Bee Event":
      return `The ${crop.name} is unlocked during the Bee Event. You must cultivate these plants alongside beehives to optimize pollination cycles and accelerate harvest weight.`;
    case "Limited Reward":
      return `The ${crop.name} is an elite, highly restricted limited-reward item. It cannot be purchased in the standard shops and is typically obtained through special global tournament achievements, promo codes, or high-value player trades.`;
    default:
      return `The ${crop.name} is a valuable crop in Grow A Garden. You can obtain its seeds from normal gameplay, event bundles, or by trading with other players in the lobby.`;
  }
}

export default async function CropValuePage({ params }: PageProps) {
  const { slug } = await params;
  const cropId = slug.replace("-value", "");
  const crop = CROPS.find(c => c.id === cropId);

  if (!crop) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4" style={{ color: 'var(--foreground)', fontFamily: 'var(--font-display)' }}>Crop Not Found</h1>
        <p style={{ color: 'var(--muted)' }}>This crop doesn&apos;t exist in our database.</p>
        <Link href="/crop-calculator" className="btn-primary mt-6 inline-block">Go to Crop Calculator</Link>
      </div>
    );
  }

  // Get related mutations (top 8 by multiplier)
  const topMutations = [...MUTATIONS].sort((a, b) => b.multiplier - a.multiplier).slice(0, 8);

  // Calculate example values at different weights
  const exampleWeights = [1, 2, 5, 10, 25, 50];
  const exampleValues = exampleWeights.map(w => ({
    weight: w,
    baseValue: crop.basePrice * Math.pow(w, 2),
  }));

  // Related crops from same category
  const relatedCrops = CROPS.filter(c => c.category === crop.category && c.id !== crop.id).slice(0, 6);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs mb-6" style={{ color: 'var(--muted)' }}>
        <Link href="/" className="hover:text-[var(--primary)] transition-colors">Home</Link>
        <span>/</span>
        <Link href="/crop-calculator" className="hover:text-[var(--primary)] transition-colors">Crops</Link>
        <span>/</span>
        <span style={{ color: 'var(--foreground)' }}>{crop.name}</span>
      </nav>

      {/* Hero */}
      <div className="glass-card-static p-8 mb-8">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-4xl" style={{ background: 'var(--surface-2)' }}>
            {crop.emoji}
          </div>
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold" style={{ fontFamily: 'var(--font-display)', color: 'var(--foreground)' }}>
              {crop.name} Value Calculator
            </h1>
            <div className="flex items-center gap-3 mt-1">
              <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: 'rgba(34,197,94,0.15)', color: 'var(--primary)' }}>
                {crop.category}
              </span>
              <span className="text-sm font-semibold" style={{ color: 'var(--accent)' }}>
                Base Price: {crop.basePrice}
              </span>
            </div>
          </div>
        </div>

        <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
          The {crop.name} is a {crop.category} crop in Grow A Garden with a base price of {crop.basePrice} coins.
          Use the calculator below to find the exact sell value based on weight, mutations, and friend boost.
          The formula is: <strong style={{ color: 'var(--primary)' }}>Value = {crop.basePrice} × Weight² × Mutation Multipliers × Friend Boost</strong>.
        </p>
      </div>

      {/* Mini Calculator */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)', color: 'var(--foreground)' }}>
          Quick {crop.name} Calculator
        </h2>
        <CropMiniCalculator crop={crop} />
      </div>

      {/* Value Table */}
      <div className="glass-card-static p-6 mb-8">
        <h2 className="text-lg font-bold mb-4" style={{ fontFamily: 'var(--font-display)', color: 'var(--foreground)' }}>
          📊 {crop.name} Values by Weight
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr style={{ borderBottom: '1px solid var(--glass-border)' }}>
                <th className="text-left py-3 px-4 font-semibold" style={{ color: 'var(--muted)' }}>Weight (kg)</th>
                <th className="text-right py-3 px-4 font-semibold" style={{ color: 'var(--muted)' }}>Base Value</th>
                <th className="text-right py-3 px-4 font-semibold" style={{ color: '#FFD700' }}>w/ Golden (×20)</th>
                <th className="text-right py-3 px-4 font-semibold" style={{ color: '#FF6B9D' }}>w/ Rainbow (×50)</th>
              </tr>
            </thead>
            <tbody>
              {exampleValues.map(ev => (
                <tr key={ev.weight} style={{ borderBottom: '1px solid var(--glass-border)' }}>
                  <td className="py-3 px-4 font-medium" style={{ color: 'var(--foreground)' }}>{ev.weight} kg</td>
                  <td className="py-3 px-4 text-right" style={{ color: 'var(--accent)' }}>{ev.baseValue.toLocaleString()}</td>
                  <td className="py-3 px-4 text-right" style={{ color: '#FFD700' }}>{(ev.baseValue * 20).toLocaleString()}</td>
                  <td className="py-3 px-4 text-right" style={{ color: '#FF6B9D' }}>{(ev.baseValue * 50).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Best Mutations */}
      <div className="glass-card-static p-6 mb-8">
        <h2 className="text-lg font-bold mb-4" style={{ fontFamily: 'var(--font-display)', color: 'var(--foreground)' }}>
          🧬 Best Mutations for {crop.name}
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {topMutations.map(mut => (
            <Link
              key={mut.id}
              href={`/mutation/${mut.id}`}
              className="p-3 rounded-xl text-center transition-all hover:scale-105"
              style={{ background: `${mut.color}10`, border: `1px solid ${mut.color}25` }}
            >
              <div className="w-3 h-3 rounded-full mx-auto mb-2" style={{ background: mut.color }} />
              <p className="text-xs font-bold" style={{ color: mut.color }}>{mut.name}</p>
              <p className="text-lg font-extrabold" style={{ color: 'var(--foreground)', fontFamily: 'var(--font-display)' }}>×{mut.multiplier}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* Related Crops */}
      {relatedCrops.length > 0 && (
        <div className="glass-card-static p-6">
          <h2 className="text-lg font-bold mb-4" style={{ fontFamily: 'var(--font-display)', color: 'var(--foreground)' }}>
            🌿 More {crop.category} Crops
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {relatedCrops.map(c => (
              <Link
                key={c.id}
                href={`/crop/${c.id}-value`}
                className="p-4 rounded-xl transition-all hover:scale-105 flex items-center gap-3"
                style={{ background: 'var(--surface-1)', border: '1px solid var(--glass-border)' }}
              >
                <span className="text-2xl">{c.emoji}</span>
                <div>
                  <p className="text-sm font-semibold" style={{ color: 'var(--foreground)' }}>{c.name}</p>
                  <p className="text-xs" style={{ color: 'var(--muted)' }}>Base: {c.basePrice}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Detailed SEO Guide Section */}
      <section className="mt-8 border-t pt-8" style={{ borderColor: 'var(--glass-border)' }}>
        <div className="glass-card-static p-6 sm:p-8">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2" style={{ fontFamily: 'var(--font-display)', color: 'var(--foreground)' }}>
            🔍 How to Get {crop.name} & GAG Value Guide
          </h2>
          
          <div className="space-y-4 text-sm leading-relaxed text-left" style={{ color: 'var(--muted)' }}>
            <p>
              Looking to find out how to get <strong>{crop.name} grow a garden</strong> seeds? {getHowToGetText(crop)}
            </p>
            <p>
              When it comes to value estimation, the baseline <strong>{crop.name} price grow a garden</strong> metrics start at <strong>{crop.basePrice} coins</strong>. 
              However, the final yield is exponentially higher depending on weight scaling. Under the standard formula, a 10kg {crop.name} scales at 10² (100x multiplier), 
              resulting in a base value of <strong>{(crop.basePrice * 100).toLocaleString()} coins</strong> before any mutations are applied!
            </p>
            <p>
              To check advanced combination multipliers, you can combine this with mutations like Golden (x20) or Rainbow (x50). Stacking these will turn a standard 
              {crop.name} harvest into a multi-million coin payout. Use our interactive calculator above to simulate different weights, friend boosts, and active GAG mutations live.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
