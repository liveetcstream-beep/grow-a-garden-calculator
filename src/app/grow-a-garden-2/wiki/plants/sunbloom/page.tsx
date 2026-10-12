import type { Metadata } from "next";
import Link from "next/link";
import { getCanonical } from "@/lib/canonical";

const pageTitle = "Sun Bloom Grow a Garden 2 – Eclipse Bloom Guide";
const pageDesc = "How to get the Sun Bloom in Grow a Garden 2: seed price, stock odds, value, and how to merge it with Moon Bloom into the Eclipse Bloom.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDesc,
  keywords: ["sun bloom grow a garden 2", "sunbloom gag2", "sun bloom value", "eclipse bloom grow a garden 2", "sun bloom moon bloom merge", "grow a garden 2 super crops"],
  alternates: { canonical: getCanonical("/grow-a-garden-2/wiki/plants/sunbloom") },
  openGraph: {
    title: pageTitle,
    description: pageDesc,
    url: "https://growagardencalcs.com/grow-a-garden-2/wiki/plants/sunbloom",
    siteName: "Grow A Garden Calculator",
    type: "website",
  },
};

const faqs = [
  {
    q: "How do you get the Sun Bloom in Grow a Garden 2?",
    a: "Buy its seed from the Seed Shop for 110 million sheckles (or 1,549 Robux). It is Super rarity with roughly a 0.125% chance per 5-minute restock — even rarer in the shop than the Moon Bloom.",
  },
  {
    q: "How much is the Sun Bloom worth?",
    a: "Sun Bloom fruit averages about 9 kg and ~9,000 sheckles per fruit, and the plant is multi-harvest. Like the Moon Bloom, its biggest value is as a merge parent for the Eclipse Bloom.",
  },
  {
    q: "How do you make the Eclipse Bloom?",
    a: "Grow a fully-mature Sun Bloom and a fully-mature Moon Bloom adjacent to each other to trigger a merge prompt. Merging creates the Eclipse Bloom (Secret rarity, ~12,000 sheckles per fruit) — both parents are permanently consumed. Harvesting the Eclipse Bloom triggers the Eclipse weather event (×80 Eclipsed mutations).",
  },
  {
    q: "Is the Sun Bloom better than the Moon Bloom?",
    a: "They are twins: both Super rarity, both multi-harvest, both averaging ~9,000 sheckles per fruit. The Sun Bloom costs more (110M vs 65–85M) and is rarer in the shop (0.125% vs 0.35% stock chance). You need one of each for the Eclipse merge, so neither is skippable.",
  },
  {
    q: "Can you buy the Sun Bloom with Robux?",
    a: "Yes — 1,549 Robux per current sources. Most players buy it with sheckles from the Seed Shop, but the Robux option skips the brutal 0.125% stock lottery.",
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

export default function SunbloomGuide() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="text-center mb-10">
        <h1 className="text-4xl sm:text-5xl font-black mb-4" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
          Sun <span style={{ background: "var(--gradient-1)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Bloom</span>
        </h1>
        <p className="text-sm max-w-3xl mx-auto leading-relaxed" style={{ color: "var(--muted)" }}>
          The <strong>Sun Bloom</strong> is Grow a Garden 2's priciest Super crop — and the second half of the Eclipse Bloom
          merge. Part of the <Link href="/grow-a-garden-2/wiki" className="text-[var(--primary)] hover:underline font-semibold">GAG2 wiki</Link>.
        </p>
      </div>

      <div className="space-y-10 text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
        <section>
          <h2 className="text-2xl font-bold mb-4 text-left" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
            ☀️ How to Get the Sun Bloom
          </h2>
          <p className="mb-4">
            Sun Bloom seeds come from the <strong>Seed Shop</strong> for <strong>110 million sheckles</strong> — or
            <strong> 1,549 Robux</strong> if you want to skip the grind. The shop route is brutal: roughly a <strong>0.125%
            chance per 5-minute restock</strong>, making it one of the rarest shop appearances in the game. Camp restocks with
            our <Link href="/grow-a-garden-2/stock-predictor" className="text-[var(--primary)] hover:underline font-semibold">seed stock predictor</Link> and
            keep 110M liquid so you can buy the instant it appears.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-left" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
            💰 Sun Bloom Value
          </h2>
          <p className="mb-4">
            Fruit averages ~9 kg and <strong>~9,000 sheckles</strong>, and the plant is <strong>multi-harvest</strong> — solid
            passive income for a Super crop. But like its twin the <Link href="/grow-a-garden-2/wiki/plants/moonbloom" className="text-[var(--primary)] hover:underline font-semibold">Moon Bloom</Link>,
            the Sun Bloom's destiny is the merge table, not the sell bin.
          </p>
          <p className="mb-4">
            Check exact harvest values with our <Link href="/" className="text-[var(--primary)] hover:underline font-semibold">crop calculator</Link> — heavy,
            mutated fruit sells far above the average.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-left" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
            🌒 Merging Into the Eclipse Bloom
          </h2>
          <p className="mb-4">
            Place a <strong>fully-grown Sun Bloom</strong> next to a <strong>fully-grown Moon Bloom</strong> and accept the merge
            prompt. The result is the <strong>Eclipse Bloom</strong> — Secret rarity, ~12,000 sheckles per fruit — and harvesting
            it fires the <strong>Eclipse weather event</strong>, the strongest in the game at ×80 Eclipsed mutations.
          </p>
          <p className="mb-4">
            The merge <strong>consumes both parents permanently</strong>. That is 175M+ sheckles of Super crops gone in one click —
            only merge when you have a plan for the Eclipse event. Our <Link href="/grow-a-garden-2/weather-tracker" className="text-[var(--primary)] hover:underline font-semibold">weather tracker guide</Link> covers
            how to maximize it.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6 text-left" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
            ❓ Sun Bloom FAQ
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
