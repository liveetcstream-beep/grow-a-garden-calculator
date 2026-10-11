import type { Metadata } from "next";
import Link from "next/link";
import { CROPS } from "@/data/crops";
import { PETS } from "@/data/pets";
import { getCanonical } from "@/lib/canonical";
import ValueListTabs from "./ValueListTabs";

const valListTitle = "Grow a Garden Pet & Crop Values List - GAG";
const valListDesc = "Live Grow a Garden pet values and crop value list for 2026. Check GAG values, trade fairness (Win/Fair/Lose) and mutation multipliers. Updated daily.";
const valListUrl = "https://growagardencalcs.com/value-list";

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: valListTitle,
    description: valListDesc,
    keywords: ["gag values", "grow a garden value", "value list grow a garden", "gag pet values", "grow a garden pet value list", "grow a garden values", "gag value calculator", "gag trade values"],
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

const faqs = [
  {
    q: "What are Grow a Garden pet values?",
    a: "Grow a Garden pet values are the base trading prices of every pet in the game, measured in coins. A pet's final worth depends on its base value, its weight or age, and any applied mutations. The most valuable pets right now are Divine-rarity pets like the Angelic Guardian (300,000 base), Sun God Bird (250,000) and Moon Rabbit (220,000). Use our pet calculator to get the exact value of your specific pet.",
  },
  {
    q: "How do I know if a trade is fair in Grow a Garden?",
    a: "A trade is fair when both sides offer roughly equal total coin value. Add up the base values of every item on each side (including pet values and mutated crop values), then compare. Our trade calculator does this automatically and rates every deal as Win, Fair or Lose, so you never accept a bad trade again.",
  },
  {
    q: "What is the most valuable crop in Grow a Garden?",
    a: "By base price, the most valuable crops are Diamond Fruit (10,000 coins), Obsidian Onion (9,000) and Ruby Rose (8,000). But final crop value is driven by weight and mutations — a heavy, multi-mutated common crop can easily out-value a plain rare one. Check any crop's live value on its dedicated calculator page.",
  },
  {
    q: "How do mutations change GAG values?",
    a: "Mutations multiply a crop's base value. They stack multiplicatively — for example, a crop with Golden (×20) and Rainbow (×50) is worth 1,000x its base value. Rare mutations like Goldsparkle (×500) can turn an ordinary harvest into millions of coins. Our mutation calculator shows every mutation multiplier and lets you stack them.",
  },
  {
    q: "What does Win / Fair / Lose mean on the trade calculator?",
    a: "Win means your side of the trade is worth more than what you give — you profit. Fair means both sides are within a small margin of each other. Lose means you are overpaying. The rating is computed from live pet and crop values in this value list, so it stays accurate as the game updates.",
  },
  {
    q: "How often is this GAG value list updated?",
    a: "This value list is updated daily to track game patches, new pets, new crops and balance changes. Every value on this page feeds directly into our calculators, so the numbers you see here are the same numbers behind every calculation on the site.",
  },
];

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

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-black mb-4" style={{ fontFamily: 'var(--font-display)', color: 'var(--foreground)' }}>
          Grow a Garden <span style={{ background: 'var(--gradient-1)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Pet & Crop Values</span>
        </h1>
        <p className="text-sm max-w-3xl mx-auto leading-relaxed mb-4" style={{ color: 'var(--muted)' }}>
          Welcome to the complete <strong>grow a garden pet values</strong> and <strong>gag values</strong> database for 2026.
          Below is the live-updated value directory for all crops, seeds, event fruits, and mythical pets.
          Whether you are comparing trading multipliers, checking <strong>gag pet values</strong>, or searching for fair <strong>gag trade values</strong>, this directory provides instant access to base prices and multiplier tables.
        </p>
        <p className="text-sm max-w-3xl mx-auto leading-relaxed mb-4" style={{ color: 'var(--muted)' }}>
          Use this value list to verify crop base values, or open our master <Link href="/" className="text-[var(--primary)] hover:underline font-semibold">Grow A Garden Calculator</Link> to calculate weight and mutation values instantly. Click any item card to open its dedicated live calculator.
        </p>
      </div>

      <ValueListTabs crops={CROPS} pets={PETS} />

      {/* How GAG values work */}
      <div className="mt-16 glass-card-static p-6 sm:p-8 rounded-2xl border" style={{ borderColor: 'var(--glass-border)' }}>
        <h2 className="text-2xl font-bold mb-4 text-left" style={{ fontFamily: 'var(--font-display)', color: 'var(--foreground)' }}>
          💰 How Grow a Garden Values Work
        </h2>
        <div className="space-y-4 text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
          <p>
            Every item in Grow a Garden has a <strong>base value</strong> in coins — that is the number listed in the tables above.
            Your final sale or trade price is the base value scaled by <strong>weight</strong> (heavier harvests pay more),
            <strong> pet age and stats</strong> for pets, and <strong>mutations</strong>, which multiply the value.
            Mutations stack multiplicatively, so combining several high-multiplier mutations is how top players reach millions of coins per harvest.
          </p>
          <p>
            Before any big trade, run both sides through our <Link href="/trade-calculator" className="text-[var(--primary)] hover:underline font-semibold">trade calculator</Link> for
            an instant Win / Fair / Lose verdict. To see exactly what a single harvest is worth with its weight and mutations,
            use the <Link href="/" className="text-[var(--primary)] hover:underline font-semibold">crop calculator</Link>;
            for pets, the <Link href="/pet-calculator" className="text-[var(--primary)] hover:underline font-semibold">pet calculator</Link> factors
            in base value, rarity and ability multipliers. New to mutations? The <Link href="/mutation-guide" className="text-[var(--primary)] hover:underline font-semibold">mutation guide</Link> lists
            every mutation multiplier and how to obtain it.
          </p>
        </div>
      </div>

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
            { id: "starfruit", name: "Starfruit Value", emoji: "⭐", base: 400, val: "40,000", tag: "Popular" },
            { id: "dragon-fruit", name: "Dragon Fruit Value", emoji: "🐉", base: 500, val: "50,000", tag: "High Value" },
            { id: "bamboo", name: "Bamboo Value", emoji: "🎍", base: 80, val: "8,000", tag: "Fast Trade" },
            { id: "carrot", name: "Carrot Value", emoji: "🥕", base: 10, val: "1,000", tag: "Beginner Crop" },
            { id: "mango", name: "Mango Value", emoji: "🥭", base: 350, val: "35,000", tag: "Summer Event" },
            { id: "royal-jelly-plant", name: "Royal Jelly Plant Value", emoji: "👑", base: 300, val: "30,000", tag: "Bee Event" },
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

      {/* FAQ */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
          ❓ Frequently Asked Questions — GAG Values
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="glass-card-static p-5">
              <h3 className="text-base font-bold mb-2" style={{ color: "var(--foreground)" }}>
                {faq.q}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
