import type { Metadata } from "next";
import Link from "next/link";
import { getCanonical } from "@/lib/canonical";

const pageTitle = "Grow a Garden 2 Guide 2026 | GAG2 Wiki & Tools";
const pageDesc = "Complete Grow a Garden 2 guide for 2026: night-stealing PVP, new crops, defenses, guilds and codes. Plus GAG2 value tools and calculators.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDesc,
  keywords: ["grow a garden 2", "gag 2", "grow a garden 2 guide", "grow a garden 2 wiki", "gag2 calculator", "grow a garden 2 codes"],
  alternates: { canonical: getCanonical("/grow-a-garden-2") },
  openGraph: {
    title: pageTitle,
    description: pageDesc,
    url: "https://growagardencalcs.com/grow-a-garden-2",
    siteName: "Grow A Garden Calculator",
    type: "website",
  },
};

const faqs = [
  {
    q: "When did Grow a Garden 2 release?",
    a: "Grow a Garden 2 released on June 12, 2026 at 10 AM PST as a free-to-play Roblox experience by Strawberreh Squad. It launched with 400,000+ concurrent players in the first 20 minutes and passed 1.67 billion visits by late September 2026.",
  },
  {
    q: "Is Grow a Garden 2 free to play?",
    a: "Yes. Like the original, Grow a Garden 2 is completely free to play on Roblox, with optional game passes. Everyone starts fresh — currency, passes and items from the original game do not carry over.",
  },
  {
    q: "Can other players steal my crops in Grow a Garden 2?",
    a: "Yes — stealing is a core mechanic. At night, players can enter other gardens and attempt to take valuable crops. Daytime is for safe farming and harvesting. You can defend your plot with defensive plants, traps, walls and gear, and some crops double as defensive tools.",
  },
  {
    q: "Do crops keep growing while I'm offline in GAG2?",
    a: "Yes. Offline progression returns in the sequel — your crops continue to grow while you are away from the game, so you come back to a ready harvest.",
  },
  {
    q: "What are guilds in Grow a Garden 2?",
    a: "Guilds are player groups that earn weekly rewards together. Joining an active guild gives you extra income and a crew to coordinate night raids or garden defense with.",
  },
  {
    q: "Are there redeem codes for Grow a Garden 2?",
    a: "Yes. The developers release monthly redeem codes that grant free seeds, watering cans and crates. Codes are time-limited, so redeem them as soon as they drop.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function GrowAGarden2Hub() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="text-center mb-10">
        <h1 className="text-4xl sm:text-5xl font-black mb-4" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
          Grow a Garden 2 <span style={{ background: "var(--gradient-1)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Guide 2026</span>
        </h1>
        <p className="text-sm max-w-3xl mx-auto leading-relaxed" style={{ color: "var(--muted)" }}>
          The official sequel to Roblox's biggest farming hit is here — and it changes the rules. <strong>Grow a Garden 2</strong> keeps
          the plant-grow-sell loop you know, then bolts on <strong>nighttime PVP stealing</strong>, a central-hub map, defensive
          plants, guilds and a full day-and-night cycle. This hub covers everything: mechanics, strategy, codes and values.
        </p>
      </div>

      <div className="space-y-10 text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
        <section>
          <h2 className="text-2xl font-bold mb-4 text-left" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
            🌱 What Is Grow a Garden 2?
          </h2>
          <p className="mb-4">
            Grow a Garden 2 launched on <strong>June 12, 2026</strong>, developed by <strong>Strawberreh Squad</strong> as the official
            sequel to the original Grow a Garden — the game that shattered Roblox records with 22.3 million concurrent players in
            August 2025 and 35.9 billion total visits. The sequel is a standalone experience: shekels, passes and items reset,
            so every player starts from zero on day one.
          </p>
          <p className="mb-4">
            The core loop is familiar: buy seeds, plant them, harvest crops and sell for currency, then reinvest in premium seeds,
            better gear and a bigger plot. What is new is <strong>risk</strong>. The original was a peaceful farming simulator.
            The sequel adds a competitive layer that forces you to think about defense as seriously as farming.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-left" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
            🌙 The Day-Night Cycle Changes Everything
          </h2>
          <p className="mb-4">
            Grow a Garden 2 runs on a full <strong>day-and-night cycle</strong>. Daytime is for traditional farming: planting,
            watering, harvesting and expanding your plot in peace. When night falls, the game flips — players can leave their
            own gardens, sneak into others, and <strong>attempt to steal valuable crops</strong>, alone or with a guild.
          </p>
          <p className="mb-4">
            This risk-reward rhythm is the heart of the sequel's strategy. The smartest players harvest high-value crops before
            nightfall, invest in <strong>defensive plants, traps, walls and gear</strong>, and only leave their most replaceable
            crops exposed overnight. Our <Link href="/grow-a-garden-2/wiki" className="text-[var(--primary)] hover:underline font-semibold">GAG2 wiki</Link> breaks
            down every defensive option and raiding tactic in detail.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-left" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
            🗺️ New Map, New Crops, New Systems
          </h2>
          <p className="mb-4">
            Instead of the original's rows-based layout, gardens in the sequel <strong>surround a central hub</strong> packed with
            shops and services. The sequel ships a new selection of seeds and crops — and some crops double as <strong>defensive
            tools</strong>, with dangerous plants that actively protect your property. <strong>Weather effects and plant
            mutations</strong> return, so the multiplier-stacking strategies from the original still apply, now with theft risk
            factored in.
          </p>
          <p className="mb-4">
            Other returning and new systems: <strong>offline progression</strong> (crops grow while you are away),
            <strong> guilds with weekly rewards</strong>, and weekly <strong>admin abuse events</strong> where staff drop
            free items — a tradition carried over from the original game's community.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-left" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
            🧮 GAG2 Tools & Values
          </h2>
          <p className="mb-4">
            Values in the sequel work like the original — base prices scaled by weight and mutations — but the night market
            adds real price pressure on high-value crops. Use our <Link href="/" className="text-[var(--primary)] hover:underline font-semibold">Grow A Garden calculator</Link> to
            price any harvest, the <Link href="/value-list" className="text-[var(--primary)] hover:underline font-semibold">value list</Link> to
            check live pet and crop prices, and the <Link href="/trade-calculator" className="text-[var(--primary)] hover:underline font-semibold">trade calculator</Link> before
            accepting any deal. Watching the <Link href="/grow-a-garden-2/stock-predictor" className="text-[var(--primary)] hover:underline font-semibold">seed stock predictor</Link> helps
            you buy rare seeds the moment they restock.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6 text-left" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
            ❓ Grow a Garden 2 FAQ
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
      </div>
    </div>
  );
}
