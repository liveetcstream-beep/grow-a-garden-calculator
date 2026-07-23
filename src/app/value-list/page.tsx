import type { Metadata } from "next";
import Link from "next/link";
import { CROPS } from "@/data/crops";
import { PETS } from "@/data/pets";
import { getCanonical } from "@/lib/canonical";
import ValueListTabs from "./ValueListTabs";

const valListTitle = "GAG Values — Complete Grow A Garden Value List 2026";
const valListDesc = "Complete GAG value list with all crop prices, seed shop values, event crops, and gag values in Grow A Garden 2026.";
const valListUrl = "https://growagardencalcs.com/value-list";

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: valListTitle,
    description: valListDesc,
    keywords: ["gag values", "grow a garden value", "value list grow a garden", "gag pet values", "grow a garden pet value list", "grow a garden values", "kalkulator grow a garden pet"],
    alternates: {
      canonical: getCanonical("/value-list"),
    },
    openGraph: {
      title: valListTitle,
      description: valListDesc,
      url: valListUrl,
      siteName: "Grow A Garden Calculator",
      images: [
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
          alt: valListTitle,
        }
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: valListTitle,
      description: valListDesc,
      images: ['/og-image.png'],
    },
  };
};

export default function ValueListPage() {
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Complete Grow A Garden Values List",
    "description": "Live market value database of all crops, seeds, and pets in Grow A Garden.",
    "numberOfItems": CROPS.length,
    "itemListElement": CROPS.slice(0, 30).map((crop, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": `${crop.name} Value`,
      "url": `https://growagardencalcs.com/crop/${crop.id}-value`
    }))
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-black mb-4" style={{ fontFamily: 'var(--font-display)', color: 'var(--foreground)' }}>
          Complete Grow A Garden <span style={{ background: 'var(--gradient-1)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Values List</span>
        </h1>
        <p className="text-sm max-w-3xl mx-auto leading-relaxed mb-4" style={{ color: 'var(--muted)' }}>
          Welcome to the official <strong>GAG values</strong> and <strong>grow a garden value</strong> list database for 2026. 
          Below is the complete, live-updated value directory for all crops, seeds, event fruits, and mythical pets. 
          Whether you are comparing trading multipliers, checking <strong>gag pet values</strong>, or searching for <strong>gag values</strong> rates, this directory provides instant access to base prices and multiplier tables.
        </p>
        <p className="text-sm max-w-3xl mx-auto leading-relaxed mb-4" style={{ color: 'var(--muted)' }}>
          Use this value list to verify crop base values before applying weight scaling (Weight²) or stacking mutation multipliers. Click any item card to open its dedicated live calculator.
        </p>
      </div>

      <ValueListTabs crops={CROPS} pets={PETS} />

      {/* Task 5.4: 🇵🇭 Popular Trading Crops in Philippines & Global Marketplace */}
      <div className="mt-16 glass-card-static p-6 sm:p-8 rounded-2xl border" style={{ borderColor: 'rgba(34,197,94,0.2)', background: 'rgba(34,197,94,0.03)' }}>
        <div className="flex items-center gap-3 mb-4">
          <span className="text-3xl">🇵🇭</span>
          <div>
            <h2 className="text-xl font-bold text-left" style={{ fontFamily: 'var(--font-display)', color: 'var(--foreground)' }}>
              Top Trading Crops — Philippines & Global Market
            </h2>
            <p className="text-xs text-left" style={{ color: 'var(--muted)' }}>
              Highest frequency searched crop value pages by Filipino and international GAG traders.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
          {[
            { id: "starfruit", name: "Starfruit Value", emoji: "⭐", base: 400, val: "40,000", tag: "Pos 6.1 — High Search" },
            { id: "dragon-fruit", name: "Dragon Fruit Value", emoji: "🐉", base: 500, val: "50,000", tag: "Pos 5.8 — Top Rated" },
            { id: "bamboo", name: "Bamboo Value", emoji: "🎍", base: 80, val: "8,000", tag: "Pos 5.6 — Fast Trade" },
            { id: "carrot", name: "Carrot Value", emoji: "🥕", base: 10, val: "1,000", tag: "Pos 6.2 — Starter" },
            { id: "mango", name: "Mango Value", emoji: "🥭", base: 350, val: "35,000", tag: "Pos 6.6 — Summer" },
            { id: "royal-jelly-plant", name: "Royal Jelly Plant Value", emoji: "👑", base: 300, val: "30,000", tag: "Pos 6.8 — Bee Event" },
          ].map((c) => (
            <Link
              key={c.id}
              href={`/crop/${c.id}-value`}
              className="p-3 rounded-xl transition-all hover:scale-105 flex flex-col justify-between"
              style={{ background: 'var(--surface-1)', border: '1px solid var(--glass-border)' }}
            >
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-2xl">{c.emoji}</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded-full font-semibold" style={{ background: 'rgba(34,197,94,0.15)', color: '#22c55e' }}>{c.tag}</span>
                </div>
                <p className="text-xs font-bold text-left" style={{ color: 'var(--foreground)' }}>{c.name}</p>
                <p className="text-[10px] text-left" style={{ color: 'var(--muted)' }}>Base: {c.base} coins</p>
              </div>
              <div className="mt-2 text-left pt-2 border-t" style={{ borderColor: 'var(--glass-border)' }}>
                <span className="text-[10px] font-medium block" style={{ color: 'var(--muted)' }}>@ 10kg value:</span>
                <span className="text-xs font-black font-mono" style={{ color: 'var(--primary)' }}>{c.val} coins</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
