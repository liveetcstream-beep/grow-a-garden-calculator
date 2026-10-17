import type { Metadata } from "next";
import Link from "next/link";
import { getCanonical } from "@/lib/canonical";

const pageTitle = "Ghost Pepper Grow a Garden 2 – Pack, Odds & Plant Size";
const pageDesc = "Ghost Pepper in Grow a Garden 2: Mythic Ghost Pepper Pack odds, 1% drop rate, Robux costs, plant size, and multi-harvest profit.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDesc,
  keywords: ["ghost pepper plant size", "ghost pepper grow a garden 2", "ghost pepper gag2", "ghost pepper pack odds", "mythic crops grow a garden 2", "ghost pepper pack robux"],
  alternates: { canonical: getCanonical("/grow-a-garden-2/wiki/plants/ghostpepper") },
  openGraph: {
    title: pageTitle,
    description: pageDesc,
    url: "https://growagardencalcs.com/grow-a-garden-2/wiki/plants/ghostpepper",
    siteName: "Grow A Garden Calculator",
    type: "website",
  },
};

const faqs = [
  {
    q: "How big does the Ghost Pepper plant get in Grow a Garden 2?",
    a: "It's a TALL plant — one of the taller crops in the game. Give it generous garden space and don't plant it where it will block or crowd smaller crops. If space is tight, plan your plot layout around it before you pull the pack.",
  },
  {
    q: "Can you get Ghost Pepper from Sam's Seed Shop?",
    a: "No. Ghost Pepper is obtainable ONLY from the Ghost Pepper Pack, a Robux gacha. It never appears in Sam's Seed Shop, so don't camp restocks for it — the pack is the only route.",
  },
  {
    q: "How much does the Ghost Pepper Pack cost?",
    a: "Player-reported prices are 99 Robux for 1 roll, 249 for 3, 799 for 10, and around 4,449 for 50. Treat the 50-roll figure as approximate — pack pricing can vary by patch and region, so confirm the in-game price before buying.",
  },
  {
    q: "What are the Ghost Pepper Pack drop rates?",
    a: "The pack drops Baby Cactus at 50%, Horned Melon at 30%, Glow Mushroom at 15%, Poison Ivy at 4%, and Ghost Pepper at just 1%. At 1%, you're looking at roughly 100 rolls on average to see one Ghost Pepper — set a hard Robux budget before you start pulling.",
  },
  {
    q: "Is Ghost Pepper multi-harvest in GAG2?",
    a: "Yes. The Ghost Pepper plant survives harvesting and keeps producing, which is a big part of why it lands in Tier S on tested-value lists — 'repeat harvesting' compounds the value of every successful pull.",
  },
  {
    q: "How much is a Ghost Pepper crop worth?",
    a: "Tested figures put the base crop value around 2,256–2,500 sheckles at roughly 7.19 kg base weight. As always, fruit weight and mutations like Golden and Rainbow move individual results — use our crop calculator with your own numbers rather than treating the range as exact.",
  },
  {
    q: "Are 'free Ghost Pepper' offers real?",
    a: "No — they are scams, full stop. There is no legitimate way to get a Ghost Pepper without the pack, so anyone offering one free, cheap, or through a link is after your account or your Robux. Buy only through the in-game pack.",
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

export default function GhostPepperGuide() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="text-center mb-10">
        <h1 className="text-4xl sm:text-5xl font-black mb-4" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
          Ghost Pepper <span style={{ background: "var(--gradient-1)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Plant Size Guide</span>
        </h1>
        <p className="text-sm max-w-3xl mx-auto leading-relaxed" style={{ color: "var(--muted)" }}>
          <strong>Ghost Pepper</strong> is GAG2's tall <strong>Mythic</strong> crop — obtainable only from its own limited-time <strong>Robux pack</strong>, never from Sam's Seed Shop.
          Part of the <Link href="/grow-a-garden-2/wiki" className="text-[var(--primary)] hover:underline font-semibold">GAG2 wiki</Link>.
        </p>
        <p className="text-sm max-w-3xl mx-auto leading-relaxed mt-4" style={{ color: "var(--muted)" }}>
          The Ghost Pepper is a <strong>tall, Mythic multi-harvest crop</strong> in Grow a Garden 2, obtainable only from the
          limited-time <strong>Ghost Pepper Pack</strong> (Robux gacha) — never Sam's Seed Shop. It needs generous garden space:
          it's a tall plant. With a <strong>1% drop rate</strong>, expect roughly 100 rolls to pull one, so set a Robux budget first.
        </p>
      </div>

      <div className="space-y-10 text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
        <section>
          <h2 className="text-2xl font-bold mb-4 text-left" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
            📏 How Big Does the Ghost Pepper Plant Get?
          </h2>
          <p className="mb-4">
            The direct answer to the keyword: <strong>it's a tall plant</strong> — one of the taller crops in GAG2. If you're planning
            a plot around it, give it real room. Tall crops can visually block or crowd smaller plants around them, and a Ghost Pepper
            you fought a 1% gacha to win deserves a proper spot, not a squeezed corner where you can't harvest comfortably.
          </p>
          <p className="mb-4">
            <strong>Garden-layout tip:</strong> place tall plants like Ghost Pepper along the back or edges of your plot so they don't
            shadow shorter multi-harvest crops. If you're short on space, don't pull the pack yet — a tall crop with nowhere to live
            is a wasted pull. Plan the plot first, gamble second.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-left" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
            🎰 How Do You Get Ghost Pepper in Grow a Garden 2?
          </h2>
          <p className="mb-4">
            Ghost Pepper comes from <strong>exactly one place</strong>: the <strong>Ghost Pepper Pack</strong>, a limited-time Robux
            gacha. It is <strong>never sold in Sam's Seed Shop</strong> — not in the rotation, not in restocks, not ever. If a guide
            tells you to camp the Seed Shop for Ghost Pepper, stop reading that guide.
          </p>
          <p className="mb-4">
            Reported pack prices are <strong>99 Robux for 1 roll, 249 for 3, 799 for 10, and ~4,449 for 50</strong>, with drop rates of
            <strong> Baby Cactus 50%, Horned Melon 30%, Glow Mushroom 15%, Poison Ivy 4%, and Ghost Pepper 1%</strong>.
            <strong> Disclaimer:</strong> these are player-reported figures and sources disagree on exact Robux pricing (regional
            pricing and patches shift it), so confirm the in-game price before buying. The 1% drop rate is the number that matters:
            on average, that's roughly <strong>100 rolls per Ghost Pepper</strong> — do the Robux math on that before your first pull.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-left" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
            💰 How Much Is Ghost Pepper Worth?
          </h2>
          <p className="mb-4">
            Tested in-game harvests put the Ghost Pepper's base crop value around <strong>2,256–2,500 sheckles</strong> at roughly
            <strong> 7.19 kg base weight</strong>. That's strong for a Mythic — and it's <strong>multi-harvest</strong>, so the plant
            keeps producing instead of vanishing after one collection. That combination is exactly why tested-value lists grade it
            <strong> Tier S</strong>, with the note "repeat harvesting."
          </p>
          <p className="mb-4">
            <strong>Methodology note:</strong> base value is an average, not a fixed price. Fruit weight varies per harvest, and
            <strong>mutations</strong> (Golden at 15x, Rainbow, and weather-event rolls) can push individual fruit far above or below
            the range — run your own harvests through our
            <Link href="/crop-calculator" className="text-[var(--primary)] hover:underline font-semibold"> crop calculator</Link> to
            see real per-hour numbers. It's also valued as a <strong>defensive plant</strong> for gardens, which adds utility beyond
            raw sheckles.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-left" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
            ⚠️ Should You Roll the Ghost Pepper Pack?
          </h2>
          <p className="mb-4">
            <strong>Set a budget first — then respect it.</strong> A 1% drop rate means the expected cost of one Ghost Pepper is
            steep, and gacha variance means you can easily spend past the average with nothing to show. Decide your maximum Robux
            spend <em>before</em> the first roll, not after the tenth. The pack is also <strong>limited-time</strong>: don't plan
            your garden's future around a pack that may rotate out — and never pay a premium to someone "selling" a limited pack's
            contents outside the game.
          </p>
          <p className="mb-4">
            <strong>Scam warning:</strong> "free Ghost Pepper" offers are always scams — account theft or Robux theft, sometimes both.
            There is no legitimate free route; the pack is the only source. If you're free-to-play, skip the pack entirely and chase
            free seeds through our <Link href="/grow-a-garden-2/wiki/codes" className="text-[var(--primary)] hover:underline font-semibold">GAG2 codes page</Link> instead.
            And if you do trade Ghost Pepper fruit, compare prices on our
            <Link href="/grow-a-garden-2/trades" className="text-[var(--primary)] hover:underline font-semibold"> trades page</Link> first.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6 text-left" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
            ❓ Ghost Pepper FAQ
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
