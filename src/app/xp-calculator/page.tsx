import type { Metadata } from "next";
import Link from "next/link";
import { getCanonical } from "@/lib/canonical";

const xpFaqs = [
  {
    q: "How do you earn XP in Grow A Garden?",
    a: "You earn XP mainly by harvesting crops, with larger and higher-tier harvests granting more. Planting seeds and completing in-game activity also contributes. The fastest levelers focus on fast-growing crops they can harvest repeatedly.",
  },
  {
    q: "What is the fastest way to level up?",
    a: "Harvest in volume: plant cheap, fast-growing crops across your whole plot and replant immediately after each harvest. Higher-tier crops give more XP per harvest, but if they grow slowly, quick cycles of cheap crops often win on XP per hour.",
  },
  {
    q: "Is there a max level in Grow A Garden?",
    a: "The level cap has changed across updates, and the exact XP curve is rebalanced periodically — which is why our calculator is being rebuilt against the latest game data. Check back soon for exact numbers.",
  },
  {
    q: "When will the XP calculator be ready?",
    a: "We are gathering the exact level-scaling data from the latest game update so the calculator is 100% accurate at launch. The tool above shows the planned interface; the working version arrives as soon as verification is complete.",
  },
];

const xpFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: xpFaqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const xpTitle = "XP Calculator | Grow A Garden Player Level Guide";
const xpDesc = "Calculate how much XP you need to level up in Grow A Garden. Plan farming sessions, track progress and reach max level fast. Free XP calculator.";
const xpUrl = "https://growagardencalcs.com/xp-calculator";

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: xpTitle,
    description: xpDesc,
    keywords: ["grow a garden xp calculator", "GAG xp guide", "how to level up fast in grow a garden", "roblox grow a garden levels"],
    alternates: {
      canonical: getCanonical("/xp-calculator"),
    },
    openGraph: {
      title: xpTitle,
      description: xpDesc,
      url: xpUrl,
      siteName: "Grow A Garden Calculator",
      images: [
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
          alt: xpTitle,
        }
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: xpTitle,
      description: xpDesc,
      images: ['/og-image.png'],
    },
  };
};

export default function XpCalculatorPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 text-center">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(xpFaqSchema) }}
      />
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold mb-6 border"
        style={{ background: "var(--surface-1)", borderColor: "var(--glass-border)", color: "var(--muted)" }}>
        ⭐ Coming Soon
      </div>
      <h1 className="text-4xl sm:text-5xl font-black mb-6" style={{ fontFamily: 'var(--font-display)', color: 'var(--foreground)' }}>
        XP Calculator
      </h1>
      <p className="text-base leading-relaxed mb-8" style={{ color: 'var(--muted)' }}>
        We are currently gathering the exact level-scaling data from the latest game update to ensure our <strong>XP Calculator</strong> is 100% accurate. 
        Soon, you'll be able to calculate exactly how many crops you need to harvest to reach your next level goal.
      </p>

      <div className="p-8 rounded-3xl border opacity-50 pointer-events-none" style={{ background: 'var(--surface-1)', borderColor: 'var(--glass-border)' }}>
        <div className="grid sm:grid-cols-2 gap-6 mb-6">
          <div className="text-left">
            <label className="block text-xs font-bold mb-2" style={{ color: 'var(--muted)' }}>Current Level</label>
            <input type="number" disabled value="50" className="w-full px-4 py-3 rounded-xl border bg-black/20" style={{ borderColor: 'var(--glass-border)' }} />
          </div>
          <div className="text-left">
            <label className="block text-xs font-bold mb-2" style={{ color: 'var(--muted)' }}>Target Level</label>
            <input type="number" disabled value="100" className="w-full px-4 py-3 rounded-xl border bg-black/20" style={{ borderColor: 'var(--glass-border)' }} />
          </div>
        </div>
        <button disabled className="w-full py-4 rounded-xl font-bold bg-gray-700 text-gray-400">
          Calculate XP Required
        </button>
      </div>

      {/* How XP works */}
      <div className="glass-card-static p-6 sm:p-8 mt-12 mb-8 text-left" style={{ border: '1px solid var(--glass-border)' }}>
        <h2 className="text-2xl font-bold mb-4 text-center" style={{ fontFamily: 'var(--font-display)', color: 'var(--foreground)' }}>
          ⭐ How XP & Leveling Work in Grow A Garden
        </h2>
        <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--muted)' }}>
          Player levels in Grow A Garden measure your overall farming activity. The core loop is simple: <strong style={{ color: 'var(--foreground)' }}>plant seeds, harvest crops, earn XP, level up</strong>. Each harvest grants experience scaled to what you grew — bigger, rarer harvests are worth more XP than a patch of carrots, which is why your crop strategy doubles as your leveling strategy.
        </p>
        <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--muted)' }}>
          The classic debate is <strong style={{ color: 'var(--foreground)' }}>XP per harvest vs XP per hour</strong>. A Diamond Fruit harvest grants a large chunk of XP at once, but if it takes far longer to grow than a field of fast crops, the fast field can pull ahead over a play session. The players who level fastest treat it like the <Link href="/seed-profit" className="text-[var(--primary)] hover:underline font-bold">profit-per-minute</Link> problem: maximize completions per hour, not the single biggest number.
        </p>
        <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
          Mutations add another layer — mutated harvests are worth more coins, and high-value harvests tend to grant more XP. Stacking mutations with the <Link href="/mutation-calculator" className="text-[var(--primary)] hover:underline font-bold">mutation calculator</Link> while farming XP-heavy crops is the closest thing to double-dipping the game offers.
        </p>
      </div>

      {/* FAQ */}
      <div className="glass-card-static p-6 sm:p-8 text-left">
        <h2 className="text-2xl font-bold mb-6 text-center" style={{ fontFamily: 'var(--font-display)', color: 'var(--foreground)' }}>
          ❓ XP & Leveling — Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {xpFaqs.map((f) => (
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
