import type { Metadata } from "next";
import Link from "next/link";
import { MUTATIONS } from "@/data/mutations";

const elephantBaseValue = 2500;
const elephantRarity = "Epic";
const elephantAbility = "Trunk Splash (Wet Mutation)";
const elephantEmoji = "🐘";
const elephantCategory = "Savanna";

const pageTitle = "Elephant Value in Grow A Garden | GAG Elephant Calculator 2026";
const pageDesc =
  "How much is the Elephant worth in Grow A Garden? Use our Elephant calculator to find exact value by weight, age, and mutations. Elephant base value is 2,500 coins. Epic Savanna pet guide, trading tips, and max value breakdown.";
const pageUrl = "https://growagardencalcs.com/elephant-calculator";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDesc,
  keywords: [
    "elephant grow a garden",
    "grow a garden elephant calculator",
    "elephant calculator grow a garden",
    "elephant value gag",
    "how much is elephant worth grow a garden",
    "gag elephant value",
    "elephant pet grow a garden",
    "elephant stats grow a garden",
  ],
  alternates: { canonical: "/elephant-calculator" },
  openGraph: {
    title: pageTitle,
    description: pageDesc,
    url: pageUrl,
    siteName: "Grow A Garden Calculator",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Elephant Value — Grow A Garden Calculator" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDesc,
    images: ["/og-image.png"],
  },
};

// Weight value examples for the table
const weightExamples = [1, 5, 10, 25, 50, 100];

function calcValue(base: number, weight: number, mutMult: number) {
  return Math.round(base * Math.pow(weight, 2) * mutMult);
}

// Top mutations for elephant
const topMutations = [...MUTATIONS]
  .sort((a, b) => b.multiplier - a.multiplier)
  .slice(0, 8);

const faqs = [
  {
    q: "How much is the Elephant worth in Grow A Garden?",
    a: `The Elephant is an Epic Savanna pet in Grow A Garden with a base value of ${elephantBaseValue.toLocaleString()} coins. Its final market value depends on weight (kg), age, and passive ability multiplier (×5.5). At high weight with max age, the Elephant can be worth several million coins in player trades.`,
  },
  {
    q: "What does the Elephant do in Grow A Garden?",
    a: "The Elephant's passive ability is called Trunk Splash — it applies the Wet mutation to nearby crops when activated. The Wet mutation (×2) stacks with other mutations and can chain into Frozen (×10) when combined with Chilled. This makes the Elephant a useful farming companion for stacking temperature mutations.",
  },
  {
    q: "How do you get the Elephant in Grow A Garden?",
    a: "The Elephant is an Epic rarity pet obtained by hatching Savanna eggs from the pet shop. It has a low hatch probability due to its Epic tier. You can also obtain it by trading with other players using high-value crops or pets as collateral. Check our Trade Calculator to verify fair exchange values before trading.",
  },
  {
    q: "Is the Elephant a good pet in GAG?",
    a: "Yes — the Elephant is a solid mid-tier Epic pet. Its Trunk Splash ability is particularly useful for players farming temperature combo mutations like Frozen or Corrosive. Its base value of 2,500 coins makes it easier to obtain than higher-tier Epic pets like Gorilla (2,600) or Polar Bear (3,000), while still providing a meaningful ability multiplier of ×5.5.",
  },
  {
    q: "What is the Elephant's ability multiplier in GAG?",
    a: "The Elephant's ability multiplier is ×5.5, applied through its Trunk Splash passive. This multiplier scales with the pet's age and rarity level — older Elephants with higher age stats apply stronger Wet mutations more frequently. Use our Pet Calculator to compute the exact value at any weight and age combination.",
  },
  {
    q: "Can you trade the Elephant in Grow A Garden?",
    a: "Yes, the Elephant is a tradeable Epic pet. When trading, always compare the total value of both sides using our GAG Trade Calculator. A common fair trade is an Elephant (2,500 base) for a similar Epic like Tiger (2,200) or Lion (2,000) plus a high-value crop. Never trade without checking the math first.",
  },
  {
    q: "What mutations can the Elephant apply to crops?",
    a: "The Elephant applies the Wet mutation (×2) via its Trunk Splash passive. Wet is a Temperature category mutation. When Wet combines with Chilled (snow weather or spray), it automatically upgrades into Frozen (×10). Frozen is 5x more valuable than Wet alone, making the Elephant a strategic farming asset during snow weather events.",
  },
  {
    q: "How does the Elephant compare to other Savanna pets?",
    a: "In the Savanna category, the Elephant (2,500 base, ×5.5 multiplier) sits between Lion (2,000, ×5.0) and Rhino (2,400, ×5.4). All three are Epic rarity. The Elephant's Trunk Splash is more utility-focused than Lion's King's Roar, making it better for mutation stacking but slightly weaker in raw crop value boosting.",
  },
];

// Schema definitions
const itemPageSchema = {
  "@context": "https://schema.org",
  "@type": "ItemPage",
  name: "Elephant Value — Grow A Garden",
  description: `The Elephant is an Epic Savanna pet in Grow A Garden with a base value of ${elephantBaseValue.toLocaleString()} coins and Trunk Splash ability (×5.5).`,
  mainEntity: {
    "@type": "Product",
    name: "Elephant",
    description: `Epic Savanna pet in Grow A Garden. Base value: ${elephantBaseValue.toLocaleString()} coins. Ability: Trunk Splash (Wet mutation, ×5.5 multiplier).`,
    category: "Grow A Garden Pet",
  },
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

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://growagardencalcs.com" },
    { "@type": "ListItem", position: 2, name: "Pet Calculator", item: "https://growagardencalcs.com/pet-calculator" },
    { "@type": "ListItem", position: 3, name: "Elephant Calculator", item: pageUrl },
  ],
};

export default function ElephantCalculatorPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      {/* Schemas */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs mb-6" style={{ color: "var(--muted)" }}>
        <Link href="/" className="hover:text-[var(--primary)] transition-colors">Home</Link>
        <span>/</span>
        <Link href="/pet-calculator" className="hover:text-[var(--primary)] transition-colors">Pet Calculator</Link>
        <span>/</span>
        <span style={{ color: "var(--foreground)" }}>Elephant Value</span>
      </nav>

      {/* Hero */}
      <div className="glass-card-static p-8 mb-8">
        <div className="flex items-center gap-5 mb-5">
          <div className="w-20 h-20 rounded-2xl flex items-center justify-center text-5xl shrink-0"
            style={{ background: "rgba(168,85,247,0.12)", border: "2px solid rgba(168,85,247,0.25)" }}>
            {elephantEmoji}
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs px-2 py-0.5 rounded-full font-bold" style={{ background: "rgba(168,85,247,0.15)", color: "#a855f7" }}>
                {elephantRarity}
              </span>
              <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: "var(--surface-1)", color: "var(--muted)" }}>
                {elephantCategory}
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
              Elephant Value Calculator
            </h1>
            <p className="text-sm mt-1 font-medium" style={{ color: "var(--muted)" }}>
              Grow A Garden — Epic Pet | Base Value:{" "}
              <strong style={{ color: "var(--primary)" }}>{elephantBaseValue.toLocaleString()} coins</strong>
            </p>
          </div>
        </div>

        <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--muted)" }}>
          The <strong>Elephant</strong> is one of the most recognizable Epic-tier pets in <em>Grow A Garden</em>. If you've been
          searching <strong>grow a garden elephant calculator</strong> or wondering <em>how much is the Elephant worth in GAG</em>, you're
          in the right place. This page gives you exact values at every weight and age, trading comparisons, and a full ability breakdown
          — no guesswork, no outdated spreadsheets.
        </p>

        {/* Quick stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { label: "Base Value", value: `${elephantBaseValue.toLocaleString()}`, unit: "coins" },
            { label: "Rarity", value: "Epic", unit: "tier" },
            { label: "Ability Multiplier", value: "×5.5", unit: "Trunk Splash" },
            { label: "Category", value: "Savanna", unit: "biome" },
          ].map((s) => (
            <div key={s.label} className="p-3 rounded-xl text-center" style={{ background: "var(--surface-1)", border: "1px solid var(--glass-border)" }}>
              <div className="text-xs mb-1" style={{ color: "var(--muted)" }}>{s.label}</div>
              <div className="text-lg font-black" style={{ color: "var(--foreground)", fontFamily: "var(--font-display)" }}>{s.value}</div>
              <div className="text-[10px]" style={{ color: "var(--muted)" }}>{s.unit}</div>
            </div>
          ))}
        </div>
      </div>

      {/* What is the Elephant */}
      <section className="mb-8">
        <div className="glass-card-static p-6 sm:p-8">
          <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
            🐘 What is the Elephant in Grow A Garden?
          </h2>
          <div className="space-y-4 text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
            <p>
              The <strong style={{ color: "var(--foreground)" }}>Elephant</strong> is an <strong>Epic rarity Savanna pet</strong> in Roblox{" "}
              <em>Grow A Garden</em>. It sits in the middle of the Epic tier bracket with a base value of{" "}
              <strong>{elephantBaseValue.toLocaleString()} coins</strong> — higher than Lion (2,000) and Tiger (2,200), and just below
              Gorilla (2,600) and Penguin (2,800).
            </p>
            <p>
              What makes the Elephant genuinely useful beyond its trading value is its passive ability:{" "}
              <strong style={{ color: "var(--foreground)" }}>Trunk Splash</strong>. When activated, the Elephant sprays water on
              nearby crops, applying the <strong>Wet mutation (×2)</strong>. This sounds modest at first — but Wet is a key trigger in
              temperature mutation combos. If your garden also has a snow weather event or a Chilled spray active, Wet + Chilled
              automatically upgrades to <strong>Frozen (×10)</strong>. That's a 5x value jump from a single pet passive.
            </p>
            <p>
              For players building mutation chains, the Elephant is a legitimate farming tool, not just a collectible. It's one of the
              few Epic pets that has both solid base trade value <em>and</em> real in-game utility.
            </p>

            {/* Ability detail box */}
            <div className="p-4 rounded-2xl border mt-2" style={{ background: "rgba(168,85,247,0.06)", borderColor: "rgba(168,85,247,0.2)" }}>
              <h3 className="text-sm font-bold mb-2" style={{ color: "var(--foreground)" }}>
                ⚡ Trunk Splash — Ability Breakdown
              </h3>
              <div className="grid sm:grid-cols-2 gap-3 text-xs" style={{ color: "var(--muted)" }}>
                <div>
                  <div className="font-semibold mb-1" style={{ color: "var(--foreground)" }}>What it does:</div>
                  <ul className="space-y-1">
                    <li>• Applies <strong>Wet mutation (×2)</strong> to nearby crops</li>
                    <li>• Triggers on a cooldown cycle</li>
                    <li>• Works passively — no manual activation needed</li>
                  </ul>
                </div>
                <div>
                  <div className="font-semibold mb-1" style={{ color: "var(--foreground)" }}>Combo potential:</div>
                  <ul className="space-y-1">
                    <li>• Wet + Chilled = <strong style={{ color: "#ADD8E6" }}>Frozen ×10</strong></li>
                    <li>• Wet + Sandy = <strong style={{ color: "#CD853F" }}>Clay ×5</strong></li>
                    <li>• Wet alone stacks with most other mutations</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Elephant Base Price & Value Formula */}
      <section className="mb-8">
        <div className="glass-card-static p-6">
          <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
            💰 Elephant Base Value & Value Formula
          </h2>
          <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--muted)" }}>
            Pet values in <em>Grow A Garden</em> are calculated using the formula:{" "}
            <strong style={{ color: "var(--primary)" }}>Pet Value = Base Value × Weight² × Age Modifier × Ability Multiplier</strong>.
            The Elephant's base value is <strong>{elephantBaseValue.toLocaleString()} coins</strong> with an ability multiplier of{" "}
            <strong>×5.5</strong>. Weight scales quadratically — a 10 kg Elephant is worth 100x more than a 1 kg Elephant before
            any modifiers. For exact coin output at your pet's stats, use our{" "}
            <Link href="/pet-calculator" className="text-[var(--primary)] hover:underline font-bold">
              Pet Calculator
            </Link>
            .
          </p>

          {/* Formula display */}
          <div className="p-4 rounded-xl border mb-5 text-center font-mono text-xs sm:text-sm font-bold"
            style={{ background: "var(--surface-1)", borderColor: "var(--primary)", color: "var(--primary)" }}>
            Elephant Value = {elephantBaseValue.toLocaleString()} × Weight² × Age Modifier × 5.5
          </div>

          {/* Value at Different Weights Table */}
          <h3 className="text-lg font-bold mb-3" style={{ color: "var(--foreground)", fontFamily: "var(--font-display)" }}>
            📊 Elephant Value at Different Weights
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ borderBottom: "1px solid var(--glass-border)" }}>
                  <th className="text-left py-3 px-3 font-semibold" style={{ color: "var(--muted)" }}>Weight</th>
                  <th className="text-right py-3 px-3 font-semibold" style={{ color: "var(--muted)" }}>Base (×1)</th>
                  <th className="text-right py-3 px-3 font-semibold" style={{ color: "#22c55e" }}>w/ Ability (×5.5)</th>
                  <th className="text-right py-3 px-3 font-semibold" style={{ color: "#FFD700" }}>w/ Golden (×20)</th>
                  <th className="text-right py-3 px-3 font-semibold" style={{ color: "#FF6B9D" }}>w/ Rainbow (×50)</th>
                </tr>
              </thead>
              <tbody>
                {weightExamples.map((w) => {
                  const base = calcValue(elephantBaseValue, w, 1);
                  const ability = calcValue(elephantBaseValue, w, 5.5);
                  const golden = calcValue(elephantBaseValue, w, 20);
                  const rainbow = calcValue(elephantBaseValue, w, 50);
                  return (
                    <tr key={w} style={{ borderBottom: "1px solid var(--glass-border)" }}>
                      <td className="py-3 px-3 font-bold" style={{ color: "var(--foreground)" }}>{w} kg</td>
                      <td className="py-3 px-3 text-right text-xs" style={{ color: "var(--muted)" }}>{base.toLocaleString()}</td>
                      <td className="py-3 px-3 text-right font-semibold text-xs" style={{ color: "#22c55e" }}>{ability.toLocaleString()}</td>
                      <td className="py-3 px-3 text-right font-bold text-xs" style={{ color: "#FFD700" }}>{golden.toLocaleString()}</td>
                      <td className="py-3 px-3 text-right font-black text-xs" style={{ color: "#FF6B9D" }}>{rainbow.toLocaleString()}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <p className="text-xs mt-3" style={{ color: "var(--muted)" }}>
            *Values assume age modifier = 1. Real trade values may vary. Use the{" "}
            <Link href="/pet/elephant-stats" className="text-[var(--primary)] hover:underline">full Elephant stats page</Link> for
            age-adjusted calculations.
          </p>
        </div>
      </section>

      {/* Best Mutations */}
      <section className="mb-8">
        <div className="glass-card-static p-6">
          <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
            🧬 Best Mutations to Stack with Elephant (Trunk Splash)
          </h2>
          <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--muted)" }}>
            The Elephant's Trunk Splash applies Wet to crops. Wet pairs best with cold-weather mutations.
            Here are the top mutations to stack for maximum value when farming with an Elephant:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
            {topMutations.map((mut) => (
              <Link
                key={mut.id}
                href={`/mutation/${mut.id}`}
                className="p-3 rounded-xl text-center transition-all hover:scale-105"
                style={{ background: `${mut.color}10`, border: `1px solid ${mut.color}25` }}
              >
                <div className="w-3 h-3 rounded-full mx-auto mb-2" style={{ background: mut.color }} />
                <p className="text-xs font-bold" style={{ color: mut.color }}>{mut.name}</p>
                <p className="text-lg font-extrabold" style={{ color: "var(--foreground)", fontFamily: "var(--font-display)" }}>
                  ×{mut.multiplier}
                </p>
              </Link>
            ))}
          </div>

          {/* Trunk Splash specific combos */}
          <div className="p-4 rounded-2xl border" style={{ background: "rgba(34,197,94,0.05)", borderColor: "rgba(34,197,94,0.15)" }}>
            <h3 className="text-sm font-bold mb-3" style={{ color: "var(--foreground)" }}>
              🌊 Trunk Splash (Wet) Combo Chains
            </h3>
            <div className="grid sm:grid-cols-2 gap-3 text-xs" style={{ color: "var(--muted)" }}>
              {[
                { combo: "Wet (Elephant) + Chilled (Snow)", result: "Frozen ×10", color: "#ADD8E6" },
                { combo: "Wet (Elephant) + Sandy (Sandstorm)", result: "Clay ×5", color: "#CD853F" },
                { combo: "Frozen + any Golden mutation", result: "Frozen + Golden ×200 total", color: "#FFD700" },
                { combo: "Wet + Chilled + Golden", result: "Frozen + Golden = ×200 stack", color: "#87CEEB" },
              ].map((c) => (
                <div key={c.result} className="p-3 rounded-xl" style={{ background: "var(--surface-1)" }}>
                  <div className="text-[10px] mb-1" style={{ color: "var(--muted)" }}>{c.combo}</div>
                  <div className="font-bold" style={{ color: c.color }}>→ {c.result}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How to Get the Elephant */}
      <section className="mb-8">
        <div className="glass-card-static p-6 sm:p-8">
          <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
            🥚 How to Get the Elephant in Grow A Garden
          </h2>
          <div className="space-y-4 text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
            <p>
              The Elephant is obtained by hatching <strong>Savanna eggs</strong> from the pet shop. As an Epic rarity pet, it has a
              significantly lower hatch rate than Common or Uncommon pets — you may need to open many eggs before one drops. Here are
              the three realistic methods to add an Elephant to your collection:
            </p>
            <ol className="space-y-4">
              {[
                {
                  step: "1",
                  title: "Hatch Savanna Eggs",
                  desc: "Purchase Savanna eggs from the GAG pet shop and hatch them. Savanna eggs can drop Lion, Tiger, Elephant, or Rhino — all Epic tier. The exact Elephant hatch rate is low (roughly 1-3% per Savanna egg), so have some patience and coins saved.",
                },
                {
                  step: "2",
                  title: "Trade for an Elephant",
                  desc: `If hatching feels too RNG-heavy, trading is your fastest route. An Elephant (base 2,500 coins) is commonly traded for other mid-Epic pets or a combination of Rare pets + high-value crops. Use our GAG Trade Calculator to make sure you're getting a fair deal before committing.`,
                },
                {
                  step: "3",
                  title: "Watch for Event Drops",
                  desc: "Occasionally, GAG admin events or game updates offer limited-time opportunities to obtain Epic pets at better rates. Join the official GAG Discord server to stay updated on event drops and admin announcements.",
                },
              ].map((s) => (
                <li key={s.step} className="flex items-start gap-3">
                  <span className="w-7 h-7 rounded-full flex items-center justify-center text-sm font-black shrink-0 mt-0.5"
                    style={{ background: "rgba(168,85,247,0.2)", color: "#a855f7" }}>
                    {s.step}
                  </span>
                  <div>
                    <strong style={{ color: "var(--foreground)" }}>{s.title}:</strong>{" "}
                    <span>{s.desc}</span>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Elephant Trading Tips */}
      <section className="mb-8">
        <div className="glass-card-static p-6">
          <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
            🤝 Elephant Trading Tips — Win/Fair/Lose Guide
          </h2>
          <div className="space-y-4 text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
            <p>
              Trading an Elephant in GAG requires knowing exactly what it's worth relative to what you're being offered. Most scam
              attempts in trading servers happen because one player doesn't know the base value math. Here's how to avoid getting burned:
            </p>

            <div className="grid sm:grid-cols-3 gap-4">
              {[
                {
                  verdict: "✅ WIN",
                  color: "#22c55e",
                  bg: "rgba(34,197,94,0.06)",
                  border: "rgba(34,197,94,0.2)",
                  examples: [
                    "Elephant (2,500) for Lion (2,000) + 500+ coin crop stack",
                    "Elephant for Gorilla (2,600) — slight win for other side",
                    "Elephant + small crop for Chicken Zombie (5,000) — huge win",
                  ],
                },
                {
                  verdict: "⚖️ FAIR",
                  color: "#f59e0b",
                  bg: "rgba(245,158,11,0.06)",
                  border: "rgba(245,158,11,0.2)",
                  examples: [
                    "Elephant (2,500) for Tiger (2,200) + minor item",
                    "Elephant for Rhino (2,400) — nearly equal value",
                    "Elephant for 2× high-weight Epic crops (approx. 2,500 total)",
                  ],
                },
                {
                  verdict: "❌ LOSE",
                  color: "#ef4444",
                  bg: "rgba(239,68,68,0.06)",
                  border: "rgba(239,68,68,0.2)",
                  examples: [
                    "Elephant for a Rare pet like Horse (500) — massive loss",
                    "Elephant for 2× Common pets — never worth it",
                    "Elephant for 'future crops' or unverified promises",
                  ],
                },
              ].map((t) => (
                <div key={t.verdict} className="p-4 rounded-2xl" style={{ background: t.bg, border: `1px solid ${t.border}` }}>
                  <div className="font-black text-base mb-3" style={{ color: t.color }}>{t.verdict}</div>
                  <ul className="space-y-2 text-xs" style={{ color: "var(--muted)" }}>
                    {t.examples.map((e, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span style={{ color: t.color }}>•</span> {e}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-4">
              <Link href="/trade-calculator" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all hover:scale-105"
                style={{ background: "var(--primary)", color: "#0a0e17" }}>
                🤝 Open Trade Calculator — Check Any Trade Instantly
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Elephant vs Other Epic Pets Comparison */}
      <section className="mb-8">
        <div className="glass-card-static p-6">
          <h2 className="text-xl font-bold mb-4" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
            ⚔️ Elephant vs Other Epic Savanna Pets
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ borderBottom: "1px solid var(--glass-border)" }}>
                  <th className="text-left py-2 px-3 font-semibold" style={{ color: "var(--muted)" }}>Pet</th>
                  <th className="text-right py-2 px-3 font-semibold" style={{ color: "var(--muted)" }}>Base Value</th>
                  <th className="text-right py-2 px-3 font-semibold" style={{ color: "var(--muted)" }}>Ability ×</th>
                  <th className="text-left py-2 px-3 font-semibold hidden sm:table-cell" style={{ color: "var(--muted)" }}>Ability</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { pet: "🦁 Lion", base: 2000, mult: 5.0, ability: "King's Roar", highlight: false },
                  { pet: "🐯 Tiger", base: 2200, mult: 5.2, ability: "Jungle Stealth", highlight: false },
                  { pet: "🦏 Rhino", base: 2400, mult: 5.4, ability: "Charge (Mirage)", highlight: false },
                  { pet: "🐘 Elephant", base: 2500, mult: 5.5, ability: "Trunk Splash (Wet)", highlight: true },
                  { pet: "🦍 Gorilla", base: 2600, mult: 5.6, ability: "Chest Beat", highlight: false },
                  { pet: "🐧 Penguin", base: 2800, mult: 6.0, ability: "Ice Slide (Arctic)", highlight: false },
                  { pet: "🐻‍❄️ Polar Bear", base: 3000, mult: 6.5, ability: "Frostbite", highlight: false },
                ].map((row) => (
                  <tr key={row.pet} style={{
                    borderBottom: "1px solid var(--glass-border)",
                    background: row.highlight ? "rgba(168,85,247,0.06)" : "transparent"
                  }}>
                    <td className="py-2.5 px-3 font-bold" style={{ color: row.highlight ? "#a855f7" : "var(--foreground)" }}>
                      {row.pet} {row.highlight && <span className="text-[10px] ml-1 px-1.5 py-0.5 rounded-full font-normal" style={{ background: "rgba(168,85,247,0.2)", color: "#a855f7" }}>This pet</span>}
                    </td>
                    <td className="py-2.5 px-3 text-right text-xs font-semibold" style={{ color: "var(--accent)" }}>{row.base.toLocaleString()}</td>
                    <td className="py-2.5 px-3 text-right font-black" style={{ color: row.highlight ? "#a855f7" : "var(--muted)", fontFamily: "var(--font-display)" }}>×{row.mult}</td>
                    <td className="py-2.5 px-3 text-xs hidden sm:table-cell" style={{ color: "var(--muted)" }}>{row.ability}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
          ❓ Elephant Grow A Garden — Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="glass-card-static p-5">
              <h3 className="text-base font-bold mb-2" style={{ color: "var(--foreground)" }}>{faq.q}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Related Tools */}
      <section>
        <div className="glass-card-static p-6">
          <h2 className="text-xl font-bold mb-4" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
            🔗 More GAG Tools & Related Pages
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { href: "/pet/elephant-stats", label: "🐘 Elephant Full Stats", desc: "Detailed age & weight stats" },
              { href: "/pet-calculator", label: "🐾 Pet Calculator", desc: "All pets value calculator" },
              { href: "/trade-calculator", label: "🤝 Trade Calculator", desc: "Win/Fair/Lose checker" },
              { href: "/", label: "🌱 GAG Calculator", desc: "Crop value calculator" },
              { href: "/value-list", label: "💰 GAG Values List", desc: "All crop & pet prices" },
              { href: "/mutation-calculator", label: "🧬 Mutation Calculator", desc: "Stack mutation multipliers" },
            ].map((link) => (
              <Link key={link.href} href={link.href}
                className="p-3 rounded-xl transition-all hover:scale-105 flex flex-col gap-1"
                style={{ background: "var(--surface-1)", border: "1px solid var(--glass-border)" }}>
                <span className="text-sm font-bold" style={{ color: "var(--foreground)" }}>{link.label}</span>
                <span className="text-xs" style={{ color: "var(--muted)" }}>{link.desc}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
