import type { Metadata } from "next";
import Link from "next/link";
import { getCanonical } from "@/lib/canonical";

const pageTitle = "GAG2 Stock Predictor | Seed Shop Tracker 2026";
const pageDesc = "Predict Grow a Garden 2 seed shop restocks: how the rotation works, what to buy first, and how to never miss rare seeds. Updated for 2026.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDesc,
  keywords: ["grow a garden 2 stock predictor", "gag2 stock", "grow a garden 2 seed shop", "gag2 seeds", "grow a garden 2 restock", "gag2 seed predictor"],
  alternates: { canonical: getCanonical("/grow-a-garden-2/stock-predictor") },
  openGraph: {
    title: pageTitle,
    description: pageDesc,
    url: "https://growagardencalcs.com/grow-a-garden-2/stock-predictor",
    siteName: "Grow A Garden Calculator",
    type: "website",
  },
};

const faqs = [
  {
    q: "How does the GAG2 seed shop stock work?",
    a: "The seed shop runs on a rotating stock: a limited selection of seeds is available at any time, and the lineup refreshes on a timer. Common seeds are almost always available; rare and event seeds appear in narrow windows and sell out quickly.",
  },
  {
    q: "How can I predict the next restock?",
    a: "Track the restock timer in the shop UI and learn the rotation pattern — shops cycle through seed tiers on a predictable schedule. The strategy below shows exactly what to prioritize each restock so your coins are ready before rare seeds appear.",
  },
  {
    q: "What seeds should I buy first in Grow a Garden 2?",
    a: "Early on, buy the highest-yield seeds you can afford to compound your income fast. Once established, prioritize rare seeds the moment they appear in stock — they have the best coin-per-plot returns and the strongest trade value.",
  },
  {
    q: "Do seeds sell out in the GAG2 shop?",
    a: "Yes. High-demand seeds sell out fast after a restock, especially rare and event seeds. If you arrive late to a restock, the best items are usually gone — which is why predicting restocks matters.",
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

const tiers = [
  {
    tier: "S — Buy instantly",
    desc: "Rare and event seeds. Highest coin-per-plot and trade value. They sell out within minutes of a restock — have coins ready before the timer hits zero.",
    color: "#EF4444",
  },
  {
    tier: "A — Strong buys",
    desc: "High-yield standard seeds with good mutation potential. The backbone of a profitable farm once your basics are covered.",
    color: "#F59E0B",
  },
  {
    tier: "B — Early game",
    desc: "Cheap, fast-growing seeds. Buy these in your first hours to compound income quickly, then stop once S/A seeds are affordable.",
    color: "#3B82F6",
  },
  {
    tier: "C — Skip unless needed",
    desc: "Low-yield filler seeds. Only buy to complete collections or if every better option is sold out.",
    color: "#9CA3AF",
  },
];

export default function GAG2StockPredictor() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="text-center mb-10">
        <h1 className="text-4xl sm:text-5xl font-black mb-4" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
          GAG2 <span style={{ background: "var(--gradient-1)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Stock Predictor</span>
        </h1>
        <p className="text-sm max-w-3xl mx-auto leading-relaxed" style={{ color: "var(--muted)" }}>
          Rare seeds in <strong>Grow a Garden 2</strong> sell out minutes after a restock. This guide explains how the seed
          shop rotation works, how to read restock timers, and exactly what to buy — so you never miss the seeds that matter.
          Part of our <Link href="/grow-a-garden-2" className="text-[var(--primary)] hover:underline font-semibold">Grow a Garden 2 guide hub</Link>.
        </p>
      </div>

      <div className="space-y-10 text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
        <section>
          <h2 className="text-2xl font-bold mb-4 text-left" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
            🔄 How the Seed Shop Rotation Works
          </h2>
          <p className="mb-4">
            The GAG2 seed shop in the central hub does not sell everything at once. It runs a <strong>rotating stock</strong>:
            a limited lineup of seeds is offered, and the selection refreshes on a <strong>restock timer</strong> shown in the
            shop UI. Common seeds cycle constantly; rare and event seeds appear in narrow windows.
          </p>
          <p className="mb-4">
            The key skill is <strong>prediction</strong>: learn the rotation rhythm, keep coins liquid before a restock, and
            be standing in the shop when the timer hits zero. Players who check the shop casually get leftovers; players who
            track restocks get the rare seeds that drive the game's economy.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-left" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
            🎯 What to Buy at Every Restock
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {tiers.map((t) => (
              <div key={t.tier} className="glass-card-static p-5" style={{ borderLeft: `3px solid ${t.color}` }}>
                <h3 className="text-base font-bold mb-2" style={{ color: "var(--foreground)" }}>{t.tier}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>{t.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-left" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
            📋 The 5-Minute Restock Routine
          </h2>
          <ol className="list-decimal list-inside space-y-2 mb-4">
            <li><strong>Check the timer</strong> — open the seed shop and note exactly when the next restock lands.</li>
            <li><strong>Liquidate before it hits</strong> — sell ready harvests so your coin balance is maxed when the shop refreshes.</li>
            <li><strong>Buy S-tier first</strong> — rare and event seeds sell out in minutes; grab them before anything else.</li>
            <li><strong>Fill with A-tier</strong> — spend the remainder on the best yield-per-plot seeds available.</li>
            <li><strong>Plant immediately</strong> — seeds earn nothing in your inventory; get them in the ground (and growing offline) right away.</li>
          </ol>
          <p className="mb-4">
            Wondering what a seed is actually worth before you buy? Run the numbers in our <Link href="/" className="text-[var(--primary)] hover:underline font-semibold">crop calculator</Link> and
            cross-check live prices on the <Link href="/value-list" className="text-[var(--primary)] hover:underline font-semibold">value list</Link> — never
            buy blind at a restock again.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6 text-left" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
            ❓ Stock Predictor FAQ
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
