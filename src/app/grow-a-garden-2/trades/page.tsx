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
  {
    q: "Can new accounts trade in GAG2?",
    a: "Not right away. Brand-new accounts must wait 7 days before the trading system unlocks for them. This is a blanket anti-scam measure aimed at throwaway scam accounts — there is no way to skip the waiting period.",
  },
  {
    q: "Why do trade values vary so much between players?",
    a: "Because values are 100% community-driven: two players can quote different prices for the same item, and a fruit's weight and mutations (like Golden or Rainbow) swing its worth far above the base price. Be skeptical of any 'official' value list — cross-check live prices on our value list and price both sides on the trade calculator.",
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
        <p className="text-sm max-w-3xl mx-auto leading-relaxed mt-4" style={{ color: "var(--muted)" }}>
          Trading in Grow a Garden 2 works through a secure two-step trade window: buy a Trading Ticket (100,000 sheckles)
          from the Gear Stall in the main hub, equip it, then interact with another player to open the window. Both sides add
          pets, fruits, or sheckles, then Accept and Confirm — a 5-second cooldown guards against last-second offer swaps.
        </p>
      </div>

      <div className="space-y-10 text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
        <section>
          <h2 className="text-2xl font-bold mb-4 text-left" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
            🎟️ How Do You Start a Trade in Grow a Garden 2?
          </h2>
          <ol className="list-decimal list-inside space-y-2 mb-4">
            <li>Buy a <strong>Trading Ticket</strong> from the <strong>Gear Stall in the main hub</strong> — 100,000 sheckles, Uncommon item that restocks frequently.</li>
            <li><strong>Equip the ticket</strong> from your hotbar.</li>
            <li><strong>Walk up to another player</strong> and interact to open the secure trade window.</li>
            <li>Both players add pets, fruits, or sheckles, then press <strong>Accept → Confirm</strong>.</li>
          </ol>
          <p className="mb-4">
            Only the <strong>requester needs a ticket</strong> — the other player trades free. Declined requests typically don't
            consume the ticket, but treat it as precious anyway. At 100,000 sheckles a pop, the ticket is a real cost barrier
            that keeps the trading plaza from being flooded with spam requests — one reason GAG2's trading economy is calmer
            than the anything-goes free trading of the original Grow a Garden.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-left" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
            📦 What Can You Trade in GAG2 (and What Can't You)?
          </h2>
          <p className="mb-4">
            <strong>Tradable:</strong> pets, fruits, and sheckles. <strong>Not tradable:</strong> seeds of any kind — seed trading
            simply doesn't exist in GAG2 — and any item you've favorited. <strong>New accounts must wait 7 days</strong> before
            they can trade at all — a blanket anti-scam rule aimed at throwaway scam accounts.
          </p>
          <p className="mb-4">
            The trade window shows each item's <strong>weight, age, mutations, and value</strong>, so you can verify exactly
            what you're getting. This matters: a heavy, mutated fruit is worth far more than its base price suggests, and a pet's
            age tier changes its demand. Check both sides on our <Link href="/trade-calculator" className="text-[var(--primary)] hover:underline font-semibold">trade calculator</Link> before
            you hit Confirm — overpaying on a "cheap" trade because you ignored a Rainbow mutation is one of the most common
            ways new traders lose value.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-left" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
            💹 How Do You Know If a Trade Is Fair?
          </h2>
          <p className="mb-4">
            <strong>Fair values</strong> are player-driven — there is no official in-game value list, and the developers have
            never published one. That means values float with supply, demand, and rarity tiers, and they can shift after a
            balance patch. Our <Link href="/value-list" className="text-[var(--primary)] hover:underline font-semibold">value list</Link> tracks
            live community prices for pets and crops so you always have a current reference point.
          </p>
          <p className="mb-4">
            Be skeptical of <strong>"official" value lists on social media</strong> — a pain point veteran traders know well.
            Fake or outdated value lists are a classic scam setup: a scammer links you a doctored list that wildly overvalues
            their item so their lowball offer looks generous. Always cross-check with a live, community-updated source, and
            don't carry over values from the original Grow a Garden (GAG1) — GAG2's economy, rarities, and mutation multipliers
            are different, so GAG1 prices are meaningless here. When in doubt, run both sides of any trade through the{" "}
            <Link href="/trade-calculator" className="text-[var(--primary)] hover:underline font-semibold">trade calculator</Link>{" "}
            and only confirm when the numbers make sense.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-left" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
            🛡️ How Do You Avoid Trade Scams in GAG2?
          </h2>
          <p className="mb-4">
            The trade window protects you by design: after both players press Accept, <strong>any change to either offer triggers
            a 5-second cooldown</strong> before Confirm becomes available — so nobody can swap a valuable pet for a worthless one
            at the last second. Always re-read the offer after the cooldown resets; the window re-locks for a reason.
          </p>
          <p className="mb-4">
            Beyond the built-in protection, the golden rules still apply. <strong>Never drop items on the ground</strong> for a
            "trade" — if it's not in the ticket window, it's not a trade, and anything on the ground can be picked up by
            anyone. Never trade with a player pressuring you to hurry through the Accept → Confirm steps — rushing you is how
            scammers hope you'll skip the cooldown check. And if a deal looks too good to be true (a rare pet for a common fruit),
            it usually is: it's either a scam or the item is worth far less than you think.
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
