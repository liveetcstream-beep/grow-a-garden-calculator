import type { Metadata } from "next";
import Link from "next/link";

const stackTitle = "Grow A Garden Mutation Multiplier: Stacking Guide";
const stackDesc =
  "Learn how mutation stacking works in Grow A Garden: multipliers multiply, they don't add. Golden ×20 + Rainbow ×50 = ×1,000, plus best combos.";
const stackUrl = "https://growagardencalcs.com/mutation-stacking-guide";

const stackFaqs = [
  {
    q: "Do mutations stack in Grow A Garden?",
    a: "Yes. Mutations on the same crop stack multiplicatively, not additively. Every active mutation multiplies the running total, so two or three strong mutations together are worth far more than the same mutations on separate crops.",
  },
  {
    q: "Do mutation multipliers add or multiply?",
    a: "They multiply. Golden (×20) plus Rainbow (×50) is not ×70 — it is 20 × 50 = ×1,000. This single misunderstanding is why many players undervalue their stacked crops in trades.",
  },
  {
    q: "What is the best mutation stacking combo?",
    a: "The most accessible top combo is Golden (×20) + Rainbow (×50) = ×1,000. Add Fractured (×92) and the same crop reaches ×92,000. The strongest single mutation is Goldsparkle (×500).",
  },
  {
    q: "How much is a Golden + Rainbow crop worth?",
    a: "Take a Mango with a base value of 350. With Golden + Rainbow stacked (×1,000) it is worth 350,000. Five stacked Mangoes are worth 1,750,000 — same crop, same garden, just the right mutations.",
  },
  {
    q: "Does Fractured stack with other mutations?",
    a: "Yes. Fractured (×92), made by combining Glitched + Plasma, multiplies with every other active mutation. Golden + Rainbow + Fractured on one crop gives 20 × 50 × 92 = ×92,000.",
  },
  {
    q: "How do I calculate my stacked crop value?",
    a: "Use our mutation calculator to stack any combination and see the true multiplier, or the crop value calculator for a single harvest with weight, mutations, quantity and friend boost applied.",
  },
];

const stackFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: stackFaqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export const metadata: Metadata = {
  title: stackTitle,
  description: stackDesc,
  keywords: [
    "grow a garden mutation multiplier",
    "mutation multiplier grow a garden",
    "grow a garden mutation stacking",
    "mutation stacking guide",
    "how to stack mutations grow a garden",
    "GAG mutation calculator",
  ],
  alternates: { canonical: "/mutation-stacking-guide" },
  openGraph: {
    title: stackTitle,
    description: stackDesc,
    url: stackUrl,
    siteName: "Grow A Garden Calculator",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: stackTitle,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: stackTitle,
    description: stackDesc,
    images: ["/og-image.png"],
  },
};

export default function MutationStackingGuidePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(stackFaqSchema) }}
      />
      <div className="text-center mb-10">
        <h1
          className="text-3xl sm:text-4xl font-extrabold mb-3"
          style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}
        >
          🧬 Grow A Garden Mutation Stacking Guide
        </h1>
        <p className="text-sm max-w-3xl mx-auto leading-relaxed" style={{ color: "var(--muted)" }}>
          Mutation stacking is the single biggest lever on crop value in Grow A Garden — and most
          players do the math completely wrong. Mutations do not add. They multiply. This guide
          shows the exact formula, the best combos, and worked examples with real numbers.
        </p>
      </div>

      <div className="glass-card-static p-6 sm:p-8 rounded-2xl border mb-8" style={{ borderColor: "var(--glass-border)" }}>
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
          The Stacking Formula
        </h2>
        <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--muted)" }}>
          Final Value = Base Value × Weight² × Mutation Multiplier × (1 + Friend Boost) × Quantity.
          The mutation multiplier itself is the product of every active mutation: multiply each
          mutation&apos;s multiplier together, never add them.
        </p>
        <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
          That is why stacking beats spreading: the same three mutations on one crop multiply into
          each other, while the same three mutations on three separate crops never meet.
        </p>
      </div>

      <div className="glass-card-static p-6 sm:p-8 rounded-2xl border mb-8" style={{ borderColor: "var(--glass-border)" }}>
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
          Worked Example: Mango
        </h2>
        <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--muted)" }}>
          A Mango has a base value of 350. Stack Golden (×20) and Rainbow (×50) on it and the
          combined multiplier is 20 × 50 = <strong>×1,000</strong>. One stacked Mango is worth{" "}
          <strong>350 × 1,000 = 350,000</strong>. Five stacked Mangoes are worth{" "}
          <strong>1,750,000</strong>.
        </p>
        <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
          Add Fractured (×92) to the same Mango and the multiplier becomes 20 × 50 × 92 ={" "}
          <strong>×92,000</strong> — a single Mango worth <strong>350 × 92,000 = 32,200,000</strong>.
          Stack two or three top-tier mutations and the combined multiplier reaches the hundreds
          of thousands, exactly as our{" "}
          <Link href="/mutation-calculator" className="text-[var(--primary)] hover:underline font-semibold">
            mutation calculator
          </Link>{" "}
          shows.
        </p>
      </div>

      <div className="glass-card-static p-6 sm:p-8 rounded-2xl border mb-8" style={{ borderColor: "var(--glass-border)" }}>
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
          Best Stacking Combos
        </h2>
        <ul className="text-sm leading-relaxed space-y-2 list-disc pl-5" style={{ color: "var(--muted)" }}>
          <li>
            <strong>Golden (×20) + Rainbow (×50) = ×1,000</strong> — the classic accessible top combo.
          </li>
          <li>
            <strong>Golden + Rainbow + Fractured (×92) = ×92,000</strong> — Fractured comes from
            combining Glitched + Plasma.
          </li>
          <li>
            <strong>Goldsparkle (×500)</strong> — the strongest single mutation, from the Goldfinch
            mutation.
          </li>
          <li>
            <strong>High-tier singles:</strong> Extraterrestrial (×130), Celestial (×120),
            Shocked (×100), Aurora (×90, Aurora Borealis weather).
          </li>
        </ul>
      </div>

      <div className="glass-card-static p-6 sm:p-8 rounded-2xl border mb-8" style={{ borderColor: "var(--glass-border)" }}>
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
          How To Get Stackable Mutations
        </h2>
        <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--muted)" }}>
          Mutations arrive through weather events (Aurora, Meteor Shower, thunder), pet passive
          abilities, mutation sprays (Golden Spray, Rainbow Spray and more), and combination chains
          where two lower mutations merge into a higher-tier one.
        </p>
        <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
          Before you trade a stacked crop, run both sides through our{" "}
          <Link href="/trade-calculator" className="text-[var(--primary)] hover:underline font-semibold">
            trade calculator
          </Link>{" "}
          for an instant Win / Fair / Lose verdict — a stacked crop is worth far more than a plain
          one, and most bad trades happen because the stack was never counted. See every multiplier
          in the{" "}
          <Link href="/mutation-guide" className="text-[var(--primary)] hover:underline font-semibold">
            mutation guide
          </Link>
          , or price a single harvest with the{" "}
          <Link href="/crop-calculator" className="text-[var(--primary)] hover:underline font-semibold">
            crop value calculator
          </Link>
          .
        </p>
      </div>

      <div className="glass-card-static p-6 sm:p-8 rounded-2xl border" style={{ borderColor: "var(--glass-border)" }}>
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {stackFaqs.map((f) => (
            <div key={f.q}>
              <h3 className="font-bold text-sm mb-1" style={{ color: "var(--foreground)" }}>
                {f.q}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                {f.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
