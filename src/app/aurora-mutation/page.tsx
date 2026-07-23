import type { Metadata } from "next";
import Link from "next/link";
import { MUTATIONS } from "@/data/mutations";
import { CROPS } from "@/data/crops";

// Mutation data
const auroraMut = MUTATIONS.find((m) => m.id === "aurora")!;
const celestialMut = MUTATIONS.find((m) => m.id === "celestial")!;
const galacticMut = MUTATIONS.find((m) => m.id === "galactic")!;
const cosmicMut = MUTATIONS.find((m) => m.id === "cosmic")!;
const astralMut = MUTATIONS.find((m) => m.id === "astral")!;
const goldenMut = MUTATIONS.find((m) => m.id === "golden")!;
const rainbowMut = MUTATIONS.find((m) => m.id === "rainbow")!;
const moonlitMut = MUTATIONS.find((m) => m.id === "moonlit")!;
const bloodlitMut = MUTATIONS.find((m) => m.id === "bloodlit")!;

// Other event mutations for comparison
const eventMutations = [auroraMut, celestialMut, moonlitMut, bloodlitMut].filter(Boolean);

// High-value crops to pair with Aurora
const featuredCrops = ["dragon-fruit", "mango", "starfruit", "watermelon", "blueberry", "pumpkin"]
  .map((id) => CROPS.find((c) => c.id === id))
  .filter(Boolean) as typeof CROPS;

const pageTitle = "Aurora Mutation Grow A Garden — ×90 Multiplier Guide 2026";
const pageDesc =
  "Complete Aurora mutation guide for Grow A Garden — how to get Aurora (×90), trigger conditions, Aurora Borealis weather event timing, best crops, Cosmic combo chain (Aurora + Celestial = ×240), and value examples. GAG aurora mutation calculator.";
const pageUrl = "https://growagardencalcs.com/aurora-mutation";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDesc,
  keywords: [
    "aurora mutation grow a garden",
    "how to get aurora mutation gag",
    "aurora mutation multiplier",
    "grow a garden aurora",
    "aurora mutation grow a garden guide",
    "gag aurora mutation",
    "aurora borealis grow a garden",
    "grow a garden aurora borealis mutation",
    "aurora mutation cosmic chain gag",
  ],
  alternates: { canonical: "/aurora-mutation" },
  openGraph: {
    title: pageTitle,
    description: pageDesc,
    url: pageUrl,
    siteName: "Grow A Garden Calculator",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Aurora Mutation Grow A Garden Guide" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDesc,
    images: ["/og-image.png"],
  },
};

// Schemas
const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Get Aurora Mutation in Grow A Garden",
  description: "Step-by-step guide to triggering the Aurora mutation (×90) on your crops during the Aurora Borealis weather event in Grow A Garden.",
  totalTime: "PT5M",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Wait for Aurora Borealis Weather Event",
      text: "The Aurora mutation only triggers during the Aurora Borealis weather event. Watch the sky — when northern lights appear, the event is active. You cannot force this event; it occurs randomly on the server.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Have Crops Actively Growing",
      text: "Plant your highest-value crops before or at the start of the Aurora event. Crops that are already fully grown cannot receive the mutation — they must be in an active growing state when the event fires.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Let the Event Apply the Mutation Naturally",
      text: "During the Aurora Borealis event, all growing crops in your garden have a chance to receive the Aurora mutation automatically. No spray or pet is required — the weather applies it passively. Keep crops growing and check after the event ends.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Harvest Crops with Aurora Glow Effect",
      text: "Crops that received the Aurora mutation display a glowing green-teal aura effect. Harvest these crops — their value is now multiplied by ×90. If you also have Celestial mutation active, the two combine into Cosmic (×240).",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Aurora Mutation Grow A Garden — Complete Guide 2026",
  description: pageDesc,
  url: pageUrl,
  author: { "@type": "Organization", name: "Grow A Garden Calculator" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the Aurora mutation in Grow A Garden?",
      acceptedAnswer: { "@type": "Answer", text: `The Aurora mutation is an Environmental category mutation in Grow A Garden with a multiplier of ×${auroraMut?.multiplier ?? 90}. It is triggered during the Aurora Borealis weather event — when northern lights appear in the sky, growing crops have a chance to receive this mutation automatically. It cannot be applied via spray; it's weather-exclusive.` },
    },
    {
      "@type": "Question",
      name: "How do I get the Aurora mutation in GAG?",
      acceptedAnswer: { "@type": "Answer", text: "The Aurora mutation is obtained exclusively during the Aurora Borealis weather event in Grow A Garden. When northern lights appear, have crops actively growing in your garden. The mutation applies passively — no spray, pet, or manual action required. Plants that are already fully grown before the event will not receive it." },
    },
    {
      "@type": "Question",
      name: "What is Aurora mutation multiplier in Grow A Garden?",
      acceptedAnswer: { "@type": "Answer", text: `The Aurora mutation multiplier is ×${auroraMut?.multiplier ?? 90} in Grow A Garden. This means any crop with the Aurora mutation sells for ${auroraMut?.multiplier ?? 90}x its base coin value (before weight and other multipliers). For example, a 10 kg Dragon Fruit worth 50,000 base coins would become 4,500,000 coins with Aurora alone.` },
    },
    {
      "@type": "Question",
      name: "Can Aurora combine with other mutations?",
      acceptedAnswer: { "@type": "Answer", text: `Yes — Aurora's most important combo is with Celestial (×${celestialMut?.multiplier ?? 120}). When a crop has both Aurora and Celestial simultaneously, they combine into Cosmic (×${cosmicMut?.multiplier ?? 240}). Cosmic then combines with Galactic (×${galacticMut?.multiplier ?? 120}) to form Astral (×${astralMut?.multiplier ?? 365}) — the most powerful combo chain in GAG. Aurora also stacks with Golden, Rainbow, and any other non-combo mutations.` },
    },
    {
      "@type": "Question",
      name: "How rare is the Aurora mutation?",
      acceptedAnswer: { "@type": "Answer", text: "The Aurora mutation is rare because it requires a specific weather event (Aurora Borealis) to trigger. Since Aurora Borealis events are server-dependent and happen randomly, you cannot farm Aurora on demand. When the event does occur, the probability of a growing crop receiving Aurora is moderate — having many crops planted at once improves your chances." },
    },
    {
      "@type": "Question",
      name: "What crops are best for the Aurora mutation?",
      acceptedAnswer: { "@type": "Answer", text: "The best crops to pair with Aurora mutation are high base-value crops: Dragon Fruit, Starfruit, Mango, and Moon Melon. Since Aurora multiplies the base price by ×90, a higher base price means an exponentially larger coin output. For max earnings, plant as many high-value crops as possible before an Aurora Borealis event." },
    },
    {
      "@type": "Question",
      name: "What is the Aurora Borealis event in Grow A Garden?",
      acceptedAnswer: { "@type": "Answer", text: "The Aurora Borealis is a weather event in Grow A Garden where northern lights fill the sky. During this event, all growing crops have a chance to receive the Aurora mutation (×90). The event lasts for a limited duration — typically a few minutes — so having crops already in a growing state before the event starts maximizes your mutation chances." },
    },
    {
      "@type": "Question",
      name: "Can I use a spray to get Aurora mutation?",
      acceptedAnswer: { "@type": "Answer", text: "No. The Aurora mutation cannot be applied using any spray. It is exclusively weather-dependent and only triggers during the Aurora Borealis event. This is what makes it valuable — unlike Golden or Silver mutations that can be sprayed on demand, Aurora requires you to be in the right place at the right time." },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://growagardencalcs.com" },
    { "@type": "ListItem", position: 2, name: "Mutations", item: "https://growagardencalcs.com/mutation-calculator" },
    { "@type": "ListItem", position: 3, name: "Mutation Guide", item: "https://growagardencalcs.com/mutation-guide" },
    { "@type": "ListItem", position: 4, name: "Aurora Mutation", item: pageUrl },
  ],
};

export default function AuroraMutationPage() {
  const auroraColor = auroraMut?.color ?? "#00FF7F";

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      {/* Schemas */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs mb-6" style={{ color: "var(--muted)" }}>
        <Link href="/" className="hover:text-[var(--primary)] transition-colors">Home</Link>
        <span>/</span>
        <Link href="/mutation-calculator" className="hover:text-[var(--primary)] transition-colors">Mutations</Link>
        <span>/</span>
        <Link href="/mutation-guide" className="hover:text-[var(--primary)] transition-colors">Guide</Link>
        <span>/</span>
        <span style={{ color: auroraColor }}>Aurora</span>
      </nav>

      {/* Hero */}
      <div className="glass-card-static p-8 mb-8" style={{ border: `1px solid ${auroraColor}25` }}>
        <div className="flex items-center gap-5 mb-6">
          <div className="w-20 h-20 rounded-2xl flex items-center justify-center shrink-0"
            style={{ background: `${auroraColor}15`, border: `2px solid ${auroraColor}40` }}>
            <div className="w-10 h-10 rounded-full" style={{ background: auroraColor, boxShadow: `0 0 30px ${auroraColor}80` }} />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs px-2 py-0.5 rounded-full font-bold" style={{ background: `${auroraColor}15`, color: auroraColor }}>Environmental</span>
              <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: "var(--surface-1)", color: "var(--muted)" }}>Weather-Exclusive</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
              Aurora Mutation{" "}
              <span style={{ color: auroraColor }}>×{auroraMut?.multiplier ?? 90}</span>
            </h1>
            <p className="text-sm mt-1" style={{ color: "var(--muted)" }}>
              Grow A Garden | Environmental Category | Aurora Borealis Event
            </p>
          </div>
        </div>

        <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--muted)" }}>
          The <strong>Aurora mutation</strong> is one of the most wanted Environmental mutations in{" "}
          <em>Grow A Garden</em>. If you've been hunting this mutation or you're searching{" "}
          <em>how to get aurora mutation grow a garden</em>, this guide covers everything — exact trigger conditions,
          the Cosmic combo chain, best crop pairings, and real value examples. No filler, just the facts.
        </p>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { label: "Multiplier", value: `×${auroraMut?.multiplier ?? 90}`, sub: "crop value × this" },
            { label: "Category", value: "Environmental", sub: "weather-based" },
            { label: "Trigger", value: "Aurora Borealis", sub: "weather event" },
            { label: "Spray Available?", value: "❌ No", sub: "weather only" },
          ].map((s) => (
            <div key={s.label} className="p-3 rounded-xl text-center" style={{ background: "var(--surface-1)", border: "1px solid var(--glass-border)" }}>
              <div className="text-xs mb-1" style={{ color: "var(--muted)" }}>{s.label}</div>
              <div className="text-sm font-black" style={{ color: "var(--foreground)", fontFamily: "var(--font-display)" }}>{s.value}</div>
              <div className="text-[10px] mt-0.5" style={{ color: "var(--muted)" }}>{s.sub}</div>
            </div>
          ))}
        </div>
      </div>

      {/* What is the Aurora Mutation */}
      <section className="mb-8">
        <div className="glass-card-static p-6 sm:p-8">
          <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
            🌌 What is the Aurora Mutation in Grow A Garden?
          </h2>
          <div className="space-y-4 text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
            <p>
              The <strong style={{ color: auroraColor }}>Aurora</strong> is an <strong>Environmental category mutation</strong> with a
              multiplier of <strong>×{auroraMut?.multiplier ?? 90}</strong>. That means any crop carrying this mutation sells for 90x
              its base coin value — before weight scaling and before any other mutations in the stack. At 10 kg, that number explodes fast.
            </p>
            <p>
              Visually, Aurora-mutated crops display a soft green-teal glowing aura effect around them — similar to the way the
              northern lights shimmer. You'll know immediately when a crop gets it because the glow stands out clearly against the
              garden background, especially at night.
            </p>
            <p>
              What makes Aurora genuinely special beyond its ×90 multiplier is its role in the{" "}
              <strong>Cosmic chain</strong> — the highest-tier combo sequence in Grow A Garden. Aurora + Celestial = Cosmic (×240),
              and Cosmic + Galactic = Astral (×365). No other single Environmental mutation sits at the beginning of such a powerful
              chain. If you're serious about max-value harvests, Aurora is the mutation to farm.
            </p>

            {/* Rarity context box */}
            <div className="p-4 rounded-2xl border" style={{ background: `${auroraColor}08`, borderColor: `${auroraColor}25` }}>
              <h3 className="text-sm font-bold mb-2" style={{ color: "var(--foreground)" }}>🎯 Aurora's Place in the Tier System</h3>
              <div className="grid grid-cols-3 gap-2 text-xs text-center">
                {[
                  { tier: "Legendary", range: "×50–×99", examples: "Aurora (×90), Rainbow (×50)", current: true },
                  { tier: "Mythic", range: "×100–×199", examples: "Celestial (×120), Shocked (×100)", current: false },
                  { tier: "Cosmic", range: "×200+", examples: "Astral (×365), Cosmic (×240)", current: false },
                ].map((t) => (
                  <div key={t.tier} className="p-2 rounded-xl" style={{
                    background: t.current ? `${auroraColor}15` : "var(--surface-1)",
                    border: t.current ? `1px solid ${auroraColor}40` : "1px solid var(--glass-border)"
                  }}>
                    <div className="font-bold" style={{ color: t.current ? auroraColor : "var(--foreground)" }}>{t.tier}</div>
                    <div style={{ color: "var(--muted)" }}>{t.range}</div>
                    <div className="mt-1 text-[10px]" style={{ color: "var(--muted)" }}>{t.examples}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Get Aurora — HowTo steps */}
      <section className="mb-8">
        <div className="glass-card-static p-6 sm:p-8">
          <h2 className="text-2xl font-bold mb-2" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
            ⚡ How to Get the Aurora Mutation — Step by Step
          </h2>
          <p className="text-sm mb-6" style={{ color: "var(--muted)" }}>
            This is the part most players get wrong. Aurora <em>cannot</em> be forced — it's a weather event mutation.
            Here's exactly what you need to do:
          </p>

          <ol className="space-y-5">
            {[
              {
                n: "1",
                title: "Wait for the Aurora Borealis Weather Event",
                content: `The Aurora Borealis is a randomly occurring server-side weather event. You'll know it's active because the sky turns into a green-blue northern lights display. There is no timer or warning — it just happens. Join an active server and keep an eye on the sky. The event is not a daily event; it occurs less frequently than Rain or Snow, so when it fires, act immediately.`,
                tip: null,
              },
              {
                n: "2",
                title: "Have Your Best Crops Actively Growing",
                content: "Only crops in an actively growing state can receive the Aurora mutation. If you plant seeds right as the event starts, they'll qualify. If you have crops that are already harvested or fully grown and sitting at max size — they won't get it. Replant right before events whenever possible, especially if you have high-value crops like Dragon Fruit or Starfruit seeds ready.",
                tip: "Plant as many seeds as possible right before any weather event — you never know when Aurora will fire next.",
              },
              {
                n: "3",
                title: "The Mutation Applies Passively — No Action Required",
                content: "You don't need a spray, a pet, or any manual input. The Aurora Borealis event applies the mutation to eligible crops automatically. Your job is simply to have crops growing and wait. The probability isn't 100% per crop — so having more crops planted increases your odds of at least some getting the mutation.",
                tip: null,
              },
              {
                n: "4",
                title: "Harvest the Aurora-Glowing Crops",
                content: `Crops that received Aurora will display a distinct teal-green glow. Harvest them normally. Check the mutation indicator on the crop before selling — if the mutation is shown as Aurora (×${auroraMut?.multiplier ?? 90}), your crop value is already ×90 the base. If you also have Celestial active from a Meteor Shower event, don't harvest yet — wait to see if the Cosmic combo triggers first.`,
                tip: "Never sell Aurora crops at base price. Always check the value with our calculator before trading.",
              },
            ].map((step) => (
              <li key={step.n} className="flex gap-4">
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-black shrink-0 mt-1"
                  style={{ background: `${auroraColor}20`, color: auroraColor, border: `1.5px solid ${auroraColor}40` }}>
                  {step.n}
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-bold mb-2" style={{ color: "var(--foreground)" }}>{step.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>{step.content}</p>
                  {step.tip && (
                    <div className="mt-2 px-3 py-2 rounded-lg text-xs font-medium" style={{ background: `${auroraColor}10`, color: auroraColor, borderLeft: `3px solid ${auroraColor}` }}>
                      💡 {step.tip}
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Aurora Mutation Value Calculator */}
      <section className="mb-8">
        <div className="glass-card-static p-6">
          <h2 className="text-2xl font-bold mb-3" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
            🧮 Aurora Mutation Value Calculator
          </h2>
          <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--muted)" }}>
            Aurora multiplies your crop value by <strong>×{auroraMut?.multiplier ?? 90}</strong>. Stack it with other mutations
            for massive multi-billion payouts. Use the formula:{" "}
            <strong style={{ color: auroraColor }}>Final Value = Base × Weight² × Aurora (×90) × [other mutations]</strong>.
            Below are quick examples at 10 kg weight, or use the full calculator:
          </p>

          {/* Best Crops Value Table */}
          <h3 className="text-base font-bold mb-3" style={{ color: "var(--foreground)" }}>
            📊 Best Crops + Aurora at 10 kg Weight
          </h3>
          <div className="overflow-x-auto mb-5">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ borderBottom: "1px solid var(--glass-border)" }}>
                  <th className="text-left py-3 px-3 font-semibold" style={{ color: "var(--muted)" }}>Crop</th>
                  <th className="text-right py-3 px-3 font-semibold" style={{ color: "var(--muted)" }}>Base (10kg)</th>
                  <th className="text-right py-3 px-3 font-semibold" style={{ color: auroraColor }}>+ Aurora ×90</th>
                  <th className="text-right py-3 px-3 font-semibold hidden sm:table-cell" style={{ color: "#DA70D6" }}>+ Cosmic ×240</th>
                </tr>
              </thead>
              <tbody>
                {featuredCrops.map((crop) => {
                  if (!crop) return null;
                  const base10 = Math.round(crop.basePrice * 100);
                  const aurora10 = Math.round(crop.basePrice * 100 * (auroraMut?.multiplier ?? 90));
                  const cosmic10 = Math.round(crop.basePrice * 100 * (cosmicMut?.multiplier ?? 240));
                  return (
                    <tr key={crop.id} style={{ borderBottom: "1px solid var(--glass-border)" }}>
                      <td className="py-3 px-3">
                        <Link href={`/crop/${crop.id}-value`} className="flex items-center gap-2 hover:opacity-80">
                          <span>{crop.emoji}</span>
                          <span className="font-bold text-xs" style={{ color: "var(--foreground)" }}>{crop.name}</span>
                        </Link>
                      </td>
                      <td className="py-3 px-3 text-right text-xs" style={{ color: "var(--muted)" }}>{base10.toLocaleString()}</td>
                      <td className="py-3 px-3 text-right font-bold text-xs" style={{ color: auroraColor }}>{aurora10.toLocaleString()}</td>
                      <td className="py-3 px-3 text-right font-black text-xs hidden sm:table-cell" style={{ color: "#DA70D6" }}>{cosmic10.toLocaleString()}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <Link href="/" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all hover:scale-105"
            style={{ background: auroraColor, color: "#0a0e17" }}>
            🌱 Open Full GAG Calculator — Calculate Any Crop With Aurora
          </Link>
        </div>
      </section>

      {/* Aurora Mutation Combinations — The Cosmic Chain */}
      <section className="mb-8">
        <div className="glass-card-static p-6 sm:p-8">
          <h2 className="text-2xl font-bold mb-2" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
            🔗 Aurora Mutation Combinations — The Cosmic Chain
          </h2>
          <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--muted)" }}>
            Aurora's most powerful feature is not just its ×90 multiplier — it's what it <em>becomes</em> when combined with the
            right mutations. Here's the full Cosmic chain that Aurora unlocks:
          </p>

          {/* Chain visualization */}
          <div className="flex flex-col sm:flex-row items-center gap-2 mb-8 overflow-x-auto">
            {[
              { name: "Aurora", mult: auroraMut?.multiplier ?? 90, color: auroraColor, id: "aurora" },
              { name: "+", mult: null, color: "var(--muted)", id: "plus1" },
              { name: "Celestial", mult: celestialMut?.multiplier ?? 120, color: celestialMut?.color ?? "#9B59B6", id: "celestial" },
              { name: "=", mult: null, color: "var(--muted)", id: "eq1" },
              { name: "Cosmic", mult: cosmicMut?.multiplier ?? 240, color: cosmicMut?.color ?? "#DA70D6", id: "cosmic" },
              { name: "+", mult: null, color: "var(--muted)", id: "plus2" },
              { name: "Galactic", mult: galacticMut?.multiplier ?? 120, color: galacticMut?.color ?? "#6A0DAD", id: "galactic" },
              { name: "=", mult: null, color: "var(--muted)", id: "eq2" },
              { name: "Astral", mult: astralMut?.multiplier ?? 365, color: astralMut?.color ?? "#9400D3", id: "astral" },
            ].map((item) => (
              <div key={item.id} className="flex items-center shrink-0">
                {item.mult !== null ? (
                  <Link href={`/mutation/${item.id}`}
                    className="p-3 rounded-2xl text-center min-w-[70px] transition-all hover:scale-105"
                    style={{ background: `${item.color}15`, border: `1.5px solid ${item.color}40` }}>
                    <div className="w-3 h-3 rounded-full mx-auto mb-1" style={{ background: item.color }} />
                    <div className="text-xs font-bold" style={{ color: item.color }}>{item.name}</div>
                    <div className="text-lg font-black" style={{ color: "var(--foreground)", fontFamily: "var(--font-display)" }}>×{item.mult}</div>
                  </Link>
                ) : (
                  <span className="text-xl font-black px-2" style={{ color: "var(--muted)" }}>{item.name}</span>
                )}
              </div>
            ))}
          </div>

          {/* Mutation stack table */}
          <h3 className="text-base font-bold mb-3" style={{ color: "var(--foreground)" }}>
            All Aurora Stack Combinations
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ borderBottom: "1px solid var(--glass-border)" }}>
                  <th className="text-left py-2.5 px-3 font-semibold" style={{ color: "var(--muted)" }}>Combo</th>
                  <th className="text-right py-2.5 px-3 font-semibold" style={{ color: "var(--muted)" }}>Combined ×</th>
                  <th className="text-left py-2.5 px-3 font-semibold hidden sm:table-cell" style={{ color: "var(--muted)" }}>How to Get Both</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { combo: "Aurora alone", mult: auroraMut?.multiplier ?? 90, color: auroraColor, how: "Aurora Borealis weather event" },
                  { combo: "Aurora + Golden", mult: (auroraMut?.multiplier ?? 90) * (goldenMut?.multiplier ?? 20), color: "#FFD700", how: "Aurora event + Golden spray or growth" },
                  { combo: "Aurora + Rainbow", mult: (auroraMut?.multiplier ?? 90) * (rainbowMut?.multiplier ?? 50), color: "#FF6B9D", how: "Aurora event + Rainbow spray or butterfly" },
                  { combo: "Aurora + Celestial → Cosmic", mult: cosmicMut?.multiplier ?? 240, color: cosmicMut?.color ?? "#DA70D6", how: "Aurora + Meteor Shower simultaneously — auto-combines" },
                  { combo: "Aurora + Golden + Rainbow", mult: (auroraMut?.multiplier ?? 90) * (goldenMut?.multiplier ?? 20) * (rainbowMut?.multiplier ?? 50), color: "#FF6B9D", how: "Aurora event + both sprays" },
                  { combo: "Cosmic → + Galactic → Astral", mult: astralMut?.multiplier ?? 365, color: astralMut?.color ?? "#9400D3", how: "Cosmic + Galactic admin event — rarest chain" },
                ].map((row) => (
                  <tr key={row.combo} style={{ borderBottom: "1px solid var(--glass-border)" }}>
                    <td className="py-2.5 px-3 font-semibold text-xs" style={{ color: "var(--foreground)" }}>{row.combo}</td>
                    <td className="py-2.5 px-3 text-right font-black text-base" style={{ color: row.color, fontFamily: "var(--font-display)" }}>×{row.mult.toLocaleString()}</td>
                    <td className="py-2.5 px-3 text-xs hidden sm:table-cell" style={{ color: "var(--muted)" }}>{row.how}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Best Crops for Aurora */}
      <section className="mb-8">
        <div className="glass-card-static p-6">
          <h2 className="text-xl font-bold mb-4" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
            🌱 Best Crops to Farm During Aurora Borealis Event
          </h2>
          <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--muted)" }}>
            Plant these crops before the Aurora event fires. Higher base value = bigger Aurora payout. Grow as many as possible —
            not every crop is guaranteed to get the mutation, so quantity matters.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {featuredCrops.map((crop) => {
              if (!crop) return null;
              const auroraVal = Math.round(crop.baseValue * 100 * (auroraMut?.multiplier ?? 90));
              return (
                <Link key={crop.id} href={`/crop/${crop.id}-value`}
                  className="p-4 rounded-xl transition-all hover:scale-105"
                  style={{ background: `${auroraColor}08`, border: `1px solid ${auroraColor}20` }}>
                  <div className="text-2xl mb-2">{crop.emoji}</div>
                  <div className="text-sm font-bold mb-1" style={{ color: "var(--foreground)" }}>{crop.name}</div>
                  <div className="text-xs mb-1" style={{ color: "var(--muted)" }}>Base: {crop.basePrice.toLocaleString()}/kg</div>
                  <div className="text-xs font-black" style={{ color: auroraColor }}>@10kg w/ Aurora: {Math.round(crop.basePrice * 100 * (auroraMut?.multiplier ?? 90)).toLocaleString()}</div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Aurora vs Other Event Mutations */}
      <section className="mb-8">
        <div className="glass-card-static p-6">
          <h2 className="text-xl font-bold mb-4" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
            ⚔️ Aurora vs Other Event Mutations — Comparison
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ borderBottom: "1px solid var(--glass-border)" }}>
                  <th className="text-left py-3 px-3 font-semibold" style={{ color: "var(--muted)" }}>Mutation</th>
                  <th className="text-right py-3 px-3 font-semibold" style={{ color: "var(--muted)" }}>Multiplier</th>
                  <th className="text-left py-3 px-3 font-semibold hidden sm:table-cell" style={{ color: "var(--muted)" }}>Trigger</th>
                  <th className="text-left py-3 px-3 font-semibold hidden md:table-cell" style={{ color: "var(--muted)" }}>Combo Potential</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { mut: auroraMut, trigger: "Aurora Borealis weather", combo: "→ Cosmic (×240) with Celestial", highlight: true },
                  { mut: celestialMut, trigger: "Meteor Shower event", combo: "→ Cosmic (×240) with Aurora", highlight: false },
                  { mut: moonlitMut, trigger: "Night Event", combo: "→ Grim chain via Shadowbound", highlight: false },
                  { mut: bloodlitMut, trigger: "Blood Moon event", combo: "Stacks with most mutations", highlight: false },
                  { mut: MUTATIONS.find((m) => m.id === "shocked"), trigger: "Thunder weather / Jandel event", combo: "→ Stormcharged (×180) chain", highlight: false },
                  { mut: MUTATIONS.find((m) => m.id === "sundried"), trigger: "Heat Wave weather", combo: "→ Paradisal (×100) with Verdant", highlight: false },
                ].filter((r) => r.mut).map((row) => (
                  <tr key={row.mut!.id} style={{
                    borderBottom: "1px solid var(--glass-border)",
                    background: row.highlight ? `${auroraColor}06` : "transparent"
                  }}>
                    <td className="py-3 px-3">
                      <Link href={`/mutation/${row.mut!.id}`} className="flex items-center gap-2 hover:opacity-80">
                        <div className="w-3 h-3 rounded-full shrink-0" style={{ background: row.mut!.color }} />
                        <span className="font-bold text-xs" style={{ color: row.mut!.color }}>
                          {row.mut!.name} {row.highlight && "← this page"}
                        </span>
                      </Link>
                    </td>
                    <td className="py-3 px-3 text-right font-black" style={{ color: row.mut!.color, fontFamily: "var(--font-display)" }}>
                      ×{row.mut!.multiplier}
                    </td>
                    <td className="py-3 px-3 text-xs hidden sm:table-cell" style={{ color: "var(--muted)" }}>{row.trigger}</td>
                    <td className="py-3 px-3 text-xs hidden md:table-cell" style={{ color: "var(--muted)" }}>{row.combo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs mt-3" style={{ color: "var(--muted)" }}>
            Aurora wins for combo chain potential — it's the only ×90 mutation that leads directly into ×240 Cosmic.{" "}
            <Link href="/mutation-guide" className="text-[var(--primary)] hover:underline">View all mutations in the full Guide →</Link>
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
          ❓ Aurora Mutation — Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {[
            { q: "What is the Aurora mutation in Grow A Garden?", a: `The Aurora mutation is an Environmental category mutation in Grow A Garden with a multiplier of ×${auroraMut?.multiplier ?? 90}. It is triggered during the Aurora Borealis weather event — when northern lights appear in the sky, growing crops have a chance to receive this mutation automatically. It cannot be applied via spray; it's weather-exclusive.` },
            { q: "How do I get the Aurora mutation in GAG?", a: "The Aurora mutation is obtained exclusively during the Aurora Borealis weather event. Have crops actively growing in your garden when northern lights appear. The mutation applies passively — no spray, pet, or manual action required. Plants that are fully grown before the event won't get it." },
            { q: "What is Aurora mutation multiplier in Grow A Garden?", a: `The Aurora mutation multiplier is ×${auroraMut?.multiplier ?? 90}. Any crop with Aurora sells for ${auroraMut?.multiplier ?? 90}× its base coin value. For example, a 10 kg Dragon Fruit with a 500 base price becomes 500 × 100 × 90 = 4,500,000 coins with Aurora alone.` },
            { q: "Can Aurora combine with other mutations?", a: `Yes — Aurora + Celestial (×${celestialMut?.multiplier ?? 120}) = Cosmic (×${cosmicMut?.multiplier ?? 240}). Cosmic + Galactic = Astral (×${astralMut?.multiplier ?? 365}). Aurora also stacks multiplicatively with Golden, Rainbow, and all other non-combo mutations.` },
            { q: "How rare is the Aurora mutation?", a: "Aurora is rare because it requires the Aurora Borealis weather event — a random, server-side occurrence. You can't farm it on demand. When it does fire, having many crops planted improves your chances since not every crop is guaranteed to receive it." },
            { q: "What crops are best for the Aurora mutation?", a: "Best crops: Dragon Fruit, Starfruit, Mango, Moon Melon. Higher base value = bigger Aurora payout since the ×90 multiplier scales up with base price. Plant as many high-value crops as possible before Aurora events." },
            { q: "Can I use a spray to get Aurora mutation?", a: "No. The Aurora mutation cannot be applied using any spray. It is exclusively weather-dependent and only triggers during the Aurora Borealis event. This rarity is exactly why Aurora is worth so much in trades." },
            { q: "Is Aurora mutation worth more than Golden?", a: `Yes — Aurora (×${auroraMut?.multiplier ?? 90}) is significantly more valuable than Golden (×${goldenMut?.multiplier ?? 20}). A crop with Aurora is worth ${Math.round((auroraMut?.multiplier ?? 90) / (goldenMut?.multiplier ?? 20))}× more than the same crop with Golden. The only tradeoff is that Aurora cannot be sprayed on demand — it's weather-only.` },
          ].map((faq, i) => (
            <div key={i} className="glass-card-static p-5">
              <h3 className="text-base font-bold mb-2" style={{ color: "var(--foreground)" }}>{faq.q}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Related Pages */}
      <section>
        <div className="glass-card-static p-6">
          <h2 className="text-xl font-bold mb-4" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
            🔗 Related Mutation Pages
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { href: "/mutation/aurora", label: "🌌 Aurora Mutation", desc: "Individual mutation stats" },
              { href: "/mutation/celestial", label: "☄️ Celestial Mutation", desc: "Aurora's combo partner" },
              { href: "/mutation/cosmic", label: "🌠 Cosmic Mutation", desc: "Aurora + Celestial result" },
              { href: "/mutation/astral", label: "✨ Astral Mutation", desc: "Highest Cosmic chain tier" },
              { href: "/mutation-guide", label: "📖 Full Mutation Guide", desc: "All 170+ mutations" },
              { href: "/mutation-calculator", label: "🧬 Mutation Calculator", desc: "Stack any mutations" },
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
