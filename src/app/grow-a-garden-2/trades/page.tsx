import type { Metadata } from "next";
import Link from "next/link";
import { getCanonical } from "@/lib/canonical";

const pageTitle = "Grow a Garden 2 Trading Guide – How Trades Work";
const pageDesc = "How trading works in Grow a Garden 2: trading tickets, the trade window, what's tradable, anti-scam rules, and getting fair values.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDesc,
  keywords: ["trade grow a garden 2", "gag2 trading", "grow a garden 2 trades", "trading ticket gag2", "gag2 trade values", "how to trade grow a garden 2"],
  alternates: { canonical: getCanonical("/grow-a-garden-2/trades") },
  openGraph: {
    title: pageTitle,
    description: pageDesc,
    url: "https://growagardencalcs.com/grow-a-garden-2/trades",
    siteName: "Grow A Garden Calculator",
    type: "website",
  },
};

const faqs = [
  {
    q: "How do you trade in Grow a Garden 2?",
    a: "Buy a Trading Ticket from the Gear Stall in the main hub (100,000 sheckles), equip it from your hotbar, walk up to another player and interact to open the secure trade window. Only the player sending the request needs a ticket.",
  },
  {
    q: "What can you trade in GAG2?",
    a: "Pets, fruits, and sheckles. Seeds are NOT tradable. Favorited items can't be traded either, and new accounts must wait 7 days before trading.",
  },
  {
    q: "How do you avoid trade scams?",
    a: "The trade window has built-in protection: both players press Accept then Confirm, and any change to the offer triggers a 5-second cooldown before confirming. Never drop items on the ground for a 'trade' — always use the ticket window.",
  },
  {
    q: "Do declined trades use up the ticket?",
    a: "Typically no — a declined request generally doesn't consume your Trading Ticket. (Sources disagree on the edge cases, so treat the ticket as precious anyway.)",
  },
  {
    q: "How do I know if a trade is fair?",
    a: "Trading values are player-driven — there is no official in-game value list. Check our live value list for current pet and crop prices, and run both sides through the trade calculator before you confirm.",
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

export default function GAG2Trades() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="text-center mb-10">
        <h1 className="text-4xl sm:text-5xl font-black mb-4" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
          GAG2 <span style={{ background: "var(--gradient-1)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Trading Guide</span>
        </h1>
        <p className="text-sm max-w-3xl mx-auto leading-relaxed" style={{ color: "var(--muted)" }}>
          Everything about <strong>trading in Grow a Garden 2</strong>: tickets, the trade window, what's tradable, and how
          to never get scammed. Part of the <Link href="/grow-a-garden-2/wiki" className="text-[var(--primary)] hover:underline font-semibold">GAG2 wiki</Link>.
        </p>
      </div>

      <div className="space-y-10 text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
        <section>
          <h2 className="text-2xl font-bold mb-4 text-left" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
            🎟️ How to Start a Trade
          </h2>
          <ol className="list-decimal list-inside space-y-2 mb-4">
            <li>Buy a <strong>Trading Ticket</strong> from the <strong>Gear Stall in the main hub</strong> — 100,000 sheckles, Uncommon item that restocks frequently.</li>
            <li><strong>Equip the ticket</strong> from your hotbar.</li>
            <li><strong>Walk up to another player</strong> and interact to open the secure trade window.</li>
            <li>Both players add pets, fruits, or sheckles, then press <strong>Accept → Confirm</strong>.</li>
          </ol>
          <p className="mb-4">
            Only the <strong>requester needs a ticket</strong> — the other player trades free. Declined requests typically don't
            consume the ticket, but treat it as precious anyway.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-left" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
            📦 What's Tradable (and What Isn't)
          </h2>
          <p className="mb-4">
            <strong>Tradable:</strong> pets, fruits, and sheckles. <strong>Not tradable:</strong> seeds of any kind, and any
            item you've favorited. <strong>New accounts must wait 7 days</strong> before they can trade at all — a blanket
            anti-scam rule.
          </p>
          <p className="mb-4">
            The trade window shows each item's <strong>weight, age, mutations, and value</strong>, so you can verify exactly
            what you're getting. A heavy, mutated fruit is worth far more than its base price suggests — check both sides on
            our <Link href="/trade-calculator" className="text-[var(--primary)] hover:underline font-semibold">trade calculator</Link> before
            you hit Confirm.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-left" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
            🛡️ Anti-Scam Rules
          </h2>
          <p className="mb-4">
            The trade window protects you by design: after both players press Accept, <strong>any change to either offer triggers
            a 5-second cooldown</strong> before Confirm becomes available — so nobody can swap a valuable pet for a worthless one
            at the last second. The golden rule stands: <strong>never drop items on the ground</strong> for a "trade." If it's not
            in the ticket window, it's not a trade.
          </p>
          <p className="mb-4">
            <strong>Fair values</strong> are player-driven — there is no official in-game value list. Our <Link href="/value-list" className="text-[var(--primary)] hover:underline font-semibold">value list</Link> tracks
            live community prices for pets and crops so you always know what your side is worth.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6 text-left" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
            ❓ Trading FAQ
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
