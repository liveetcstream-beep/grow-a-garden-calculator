import type { Metadata } from "next";
import Link from "next/link";
import { getCanonical } from "@/lib/canonical";

const pageTitle = "How Much Is the Bunny Worth in Grow a Garden 2?";
const pageDesc = "Bunny value in Grow a Garden 2: 20,000 sheckles from map spawns, +5 walk speed ability, and why its trade value is low.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDesc,
  keywords: ["how much is bunny worth", "bunny grow a garden 2", "bunny pet gag2", "bunny value", "grow a garden 2 pets", "bunny pet ability"],
  alternates: { canonical: getCanonical("/grow-a-garden-2/wiki/pets/bunny") },
  openGraph: {
    title: pageTitle,
    description: pageDesc,
    url: "https://growagardencalcs.com/grow-a-garden-2/wiki/pets/bunny",
    siteName: "Grow A Garden Calculator",
    type: "website",
  },
};

const faqs = [
  {
    q: "How much is the Bunny worth in Grow a Garden 2?",
    a: "20,000 sheckles — its fixed purchase price from map spawns. Its trading worth is rated Low: it is a Common early-game utility pet, not a trade asset, so don't expect premium offers for it.",
  },
  {
    q: "How do you get the Bunny in GAG2?",
    a: "It spawns randomly on the overworld map (~11.9% spawn chance). Walk up and buy it for 20,000 sheckles before its despawn timer runs out — another player can outbid you for the same spawn, so be quick.",
  },
  {
    q: "What does the Bunny do?",
    a: "+5 walk speed while equipped. It stacks with multiple Bunnies equipped. That is the entire ability — pure traversal utility, no income and no defense.",
  },
  {
    q: "Does the Bunny's walk speed stack?",
    a: "Yes. Equipping multiple Bunnies stacks the +5 walk speed bonus per pet, which is why some players run several at once for maximum map traversal and escape speed.",
  },
  {
    q: "Is the Bunny worth buying?",
    a: "Yes, early. +5 walk speed (stackable) makes map traversal, raiding, and escaping noticeably faster for 20K. It just isn't an investment — its trade value stays low forever.",
  },
  {
    q: "Can you trade the Bunny for profit?",
    a: "No. The Bunny's trade value is rated Low because supply is uncapped — anyone can grab one from a map spawn for 20,000 sheckles. Buy it to use it, not to flip it. Check live pet prices on our value list before any pet trade.",
  },
  {
    q: "Is this the same Bunny as the original Grow a Garden?",
    a: "No. The original game's Bunny hatches from the Common Egg and eats carrots for bonus crop value. GAG2's Bunny is a completely different pet: a Common map-spawn that grants walk speed. Don't mix up guides for the two games.",
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

export default function BunnyGuide() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="text-center mb-10">
        <h1 className="text-4xl sm:text-5xl font-black mb-4" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
          Bunny <span style={{ background: "var(--gradient-1)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Pet Guide</span>
        </h1>
        <p className="text-sm max-w-3xl mx-auto leading-relaxed" style={{ color: "var(--muted)" }}>
          <strong>How much is the Bunny worth?</strong> 20,000 sheckles — and that price tells you everything about this
          Common speed pet. Part of the <Link href="/grow-a-garden-2/wiki" className="text-[var(--primary)] hover:underline font-semibold">GAG2 wiki</Link>.
        </p>
        <p className="text-sm max-w-3xl mx-auto leading-relaxed mt-4" style={{ color: "var(--muted)" }}>
          The Bunny is a <strong>Common pet</strong> in Grow a Garden 2 that spawns on the overworld map and costs
          <strong> 20,000 sheckles</strong> to buy. Its ability grants <strong>+5 walk speed</strong> while equipped and stacks
          with multiple Bunnies. It has almost no trade value — it is an early-game mobility pet, not an investment.
        </p>
      </div>

      <div className="space-y-10 text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
        <section>
          <h2 className="text-2xl font-bold mb-4 text-left" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
            🐰 How Do You Get the Bunny in Grow a Garden 2?
          </h2>
          <p className="mb-4">
            The Bunny <strong>spawns randomly on the overworld map</strong> at roughly an <strong>11.9% spawn chance</strong> —
            very common as pets go, so you will encounter spawns regularly while playing. Walk up to a spawn and buy it for
            <strong> 20,000 sheckles</strong> before its <strong>despawn timer</strong> expires. Move fast: <strong>another player
            can outbid you</strong> for the same spawn, and hesitating is the most common way players lose one.
          </p>
          <p className="mb-4">
            It has been obtainable since launch (<strong>June 12, 2026</strong>) and is still available now — there is no event
            window to miss and no reason to panic-buy one from another player at a markup.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-left" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
            💰 How Much Is the Bunny Worth?
          </h2>
          <p className="mb-4">
            The Bunny's worth is simple: <strong>20,000 sheckles</strong>, its fixed map-spawn price. On trading value lists it
            rates <strong>Low</strong> — it is a Common early-game utility pet with uncapped supply, not a trade asset. Because
            anyone can walk up to a spawn and buy one at face value, there is no scarcity premium and none will develop: its
            trade value stays low permanently.
          </p>
          <p className="mb-4">
            That makes two trade rules easy. If someone offers you a premium pet for your Bunny, take the deal. If someone asks
            premium prices for theirs, walk away — you can get the exact same pet from the map for 20K. Check live pet prices on
            our <Link href="/value-list" className="text-[var(--primary)] hover:underline font-semibold">value list</Link> and
            exact pet stats on our <Link href="/pet-calculator" className="text-[var(--primary)] hover:underline font-semibold">pet calculator</Link> before
            any trade, since pet demand can shift after patches.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-left" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
            ⚡ What Does the Bunny Do?
          </h2>
          <p className="mb-4">
            The Bunny's entire ability is <strong>+5 walk speed while equipped</strong> — and it <strong>stacks</strong> with
            multiple Bunnies equipped, so running several at once multiplies the effect. No income, no defense, no tricks. But in
            a game with <strong>nighttime PVP stealing</strong>, walk speed is genuinely useful: faster raids on other gardens,
            faster escapes when you are the target, and faster traversal across the map between shop restocks.
          </p>
          <p className="mb-4">
            For 20K, it is the <strong>cheapest mobility in the game</strong> — a pure utility purchase, verified in-game since
            launch. Compare it against higher-tier pets like the
            <Link href="/grow-a-garden-2/wiki/pets/raccoon" className="text-[var(--primary)] hover:underline font-semibold"> Raccoon </Link>
            when you start building a serious pet lineup: the Bunny wins on price, but dedicated pets win on power.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-left" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
            🎯 Is the Bunny Worth Buying?
          </h2>
          <p className="mb-4">
            <strong>Yes — early.</strong> Twenty thousand sheckles is pocket change once your garden is running, and stackable
            +5 walk speed pays for itself in saved minutes from day one. The mistake is treating it as an investment: it will
            never appreciate, never become rare, and never carry a trade. Buy it to <strong>use</strong> it — as your first
            mobility pet, not as your first flip.
          </p>
          <p className="mb-4">
            <strong>Don't confuse it</strong> with the original game's Bunny (hatches from the Common Egg, eats carrots for 1.5×
            crop value). GAG2's Bunny is a completely different pet — a Common map-spawn that grants walk speed. This is the
            single biggest source of confusion for players coming from the original game, so make sure any guide you follow is
            about the sequel before spending sheckles on the wrong strategy.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6 text-left" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
            ❓ Bunny FAQ
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
