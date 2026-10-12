import type { Metadata } from "next";
import Link from "next/link";
import { getCanonical } from "@/lib/canonical";

const pageTitle = "Mushroom Grow a Garden 2 – Price & Value Guide";
const pageDesc = "Mushroom in Grow a Garden 2: 15,000 seed price, Epic rarity, ~13,000 sell value. Why it's an S-tier money crop.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDesc,
  keywords: ["mushroom grow a garden 2", "mushroom gag2", "mushroom value", "grow a garden 2 epic crops", "best money crop gag2", "maple mushroom grow a garden 2"],
  alternates: { canonical: getCanonical("/grow-a-garden-2/wiki/plants/mushroom") },
  openGraph: {
    title: pageTitle,
    description: pageDesc,
    url: "https://growagardencalcs.com/grow-a-garden-2/wiki/plants/mushroom",
    siteName: "Grow A Garden Calculator",
    type: "website",
  },
};

const faqs = [
  {
    q: "How do you get the Mushroom in Grow a Garden 2?",
    a: "Buy the seed from the Seed Shop for 15,000 sheckles. It is Epic rarity with roughly a 9% chance per 5-minute restock — uncommon enough to watch for, common enough to catch regularly.",
  },
  {
    q: "How much is the Mushroom worth?",
    a: "Around 13,000 sheckles average per fruit (11.7K at 1kg, ~12,300 in tested values). That is nearly the seed price back in a single fruit — one of the best value-per-seed ratios in GAG2.",
  },
  {
    q: "Is the Mushroom a good money crop?",
    a: "Yes — S tier on tested-value tier lists, rated the best high-value money crop. It is the sweet spot between cheap multi-harvest crops like Corn and ultra-expensive Supers like Moon Bloom.",
  },
  {
    q: "Is the Mushroom multi-harvest?",
    a: "No — single-harvest. Each plant gives one payout, so replant after every harvest. Its value comes from the near-1:1 seed-to-fruit return, not from repeated harvests.",
  },
  {
    q: "What is the Maple Mushroom?",
    a: "A reported event variant of the Mushroom — Epic rarity, bought with 15,000 Leaves (event currency) during event rotations. It appears in only one source so far, so treat details as provisional.",
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

export default function MushroomGuide() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="text-center mb-10">
        <h1 className="text-4xl sm:text-5xl font-black mb-4" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
          Mushroom <span style={{ background: "var(--gradient-1)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Value Guide</span>
        </h1>
        <p className="text-sm max-w-3xl mx-auto leading-relaxed" style={{ color: "var(--muted)" }}>
          The <strong>Mushroom</strong> is Grow a Garden 2's best value-per-seed crop — Epic rarity, ~13K per fruit, S-tier money maker.
          Part of the <Link href="/grow-a-garden-2/wiki" className="text-[var(--primary)] hover:underline font-semibold">GAG2 wiki</Link>.
        </p>
      </div>

      <div className="space-y-10 text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
        <section>
          <h2 className="text-2xl font-bold mb-4 text-left" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
            🍄 How to Get the Mushroom
          </h2>
          <p className="mb-4">
            Mushroom seeds cost <strong>15,000 sheckles</strong> from the <strong>Seed Shop</strong>. At <strong>Epic</strong> rarity
            with roughly a <strong>9% chance per 5-minute restock</strong>, it sits in the sweet spot: uncommon enough that you
            should buy on sight, common enough that you will catch it regularly without camping. Track restocks with our <Link href="/grow-a-garden-2/stock-predictor" className="text-[var(--primary)] hover:underline font-semibold">seed stock predictor</Link>.
          </p>
          <p className="mb-4">
            <strong>Note:</strong> this is the GAG2 Mushroom (Epic, 15K). The original game's Mushroom is a completely different
            crop (Divine, 150K) — search results mix them up constantly, so make sure any guide you read is about the sequel.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-left" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
            💰 Why It's S-Tier
          </h2>
          <p className="mb-4">
            The math is the selling point: <strong>~13,000 sheckles average per fruit</strong> against a 15,000 seed price means
            you nearly earn the seed back in a single harvest — 11.7K at 1kg, ~12,300 in tested values. No other Epic crop returns
            its cost this fast. Tested-value tier lists rank it <strong>S tier: best high-value money crop</strong>.
          </p>
          <p className="mb-4">
            The tradeoff: <strong>single-harvest</strong>. Each plant pays once, so replant constantly. Pair it with a background <Link href="/grow-a-garden-2/wiki/plants/corn" className="text-[var(--primary)] hover:underline font-semibold">Corn</Link> patch
            for steady multi-harvest income between Mushroom rotations, and price every harvest on our <Link href="/" className="text-[var(--primary)] hover:underline font-semibold">crop calculator</Link>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-left" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
            🍁 Maple Mushroom (Event Variant)
          </h2>
          <p className="mb-4">
            A <strong>Maple Mushroom</strong> variant has been reported — Epic rarity, purchased with <strong>15,000 Leaves</strong> (event
            currency) during event rotations, at ~11.7K per kg. It currently appears in only one source, so treat it as provisional
            until more guides confirm it.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6 text-left" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
            ❓ Mushroom FAQ
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
