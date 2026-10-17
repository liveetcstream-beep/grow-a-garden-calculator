import type { Metadata } from "next";
import Link from "next/link";
import { getCanonical } from "@/lib/canonical";

const pageTitle = "Golden Dragonfly Grow a Garden 2 – Value & Price Guide";
const pageDesc = "Golden Dragonfly in Grow a Garden 2: 9M sheckle Mythic pet, 2x Gold mutation chance, trade value vs GAG1's Dragonfly — and how to get it.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDesc,
  keywords: ["dragonfly grow a garden value", "golden dragonfly grow a garden 2", "golden dragonfly gag2", "dragonfly pet value gag2", "mythic pets grow a garden 2", "gold mutation pet gag2"],
  alternates: { canonical: getCanonical("/grow-a-garden-2/wiki/pets/dragonfly") },
  openGraph: {
    title: pageTitle,
    description: pageDesc,
    url: "https://growagardencalcs.com/grow-a-garden-2/wiki/pets/dragonfly",
    siteName: "Grow A Garden Calculator",
    type: "website",
  },
};

const faqs = [
  {
    q: "What is the Golden Dragonfly's value in Grow a Garden 2?",
    a: "The shop price is 9,000,000 sheckles, and its trade value is HIGH: Mythic rarity, a large price tag, and strong demand from mutation farmers all push demand up. That said, pet prices move with patches — always check our live value list before trading, and never trust a screenshot from a random Discord server.",
  },
  {
    q: "How do you get the Golden Dragonfly in GAG2?",
    a: "Two ways: buy it directly from the map spawn for 9,000,000 sheckles (roughly a 0.6% spawn chance), or hatch one from a Common Egg at roughly a 0.3% hatch rate. In GAG2, eggs come from Guild Rewards — there is no pet shop like the original game had, so keep contributing to your guild to keep eggs coming.",
  },
  {
    q: "What does the Golden Dragonfly do?",
    a: "It passively DOUBLES (2x) the chance for your fruits and plants to naturally gain the Gold mutation. Gold is worth 15x base value, so doubling its roll chance across your whole garden is one of the strongest passive income boosts in GAG2. No activation needed — it just works while equipped.",
  },
  {
    q: "Is the Golden Dragonfly the same as the GAG1 Dragonfly?",
    a: "No — and this is the #1 source of confusion for this keyword. GAG1's Dragonfly is a Divine pet from the Bug Egg that turns a random fruit Gold roughly every 5 minutes. GAG2's Golden Dragonfly is a Mythic pet with a passive 2x gold-roll chance. Different pets, different mechanics, different prices — GAG1 guides and GAG1 value lists do not apply here.",
  },
  {
    q: "Should you buy a Golden Dragonfly for 9 million sheckles?",
    a: "Not as your first big purchase. 9M is a huge spend that only pays off once you have a large garden producing enough fruit for the doubled Gold rolls to matter. Build income first with multi-harvest Epic and Legendary crops, and only buy the Dragonfly once the passive bonus will actually move your numbers — run it through our pet calculator.",
  },
  {
    q: "How do pet size and Rainbow affect the Golden Dragonfly?",
    a: "Pet mutations scale the bonus separately: a Big Golden Dragonfly rolls Gold at 3x, a Mega at 4x, and Rainbow adds about 1.25x on top (roughly x2.25 / x3.5 / x4.75 total depending on size). These are tested player-reported figures, and sources disagree on exact decimals — treat the ratios as approximate, not exact math.",
  },
  {
    q: "How do you avoid getting scammed when trading a Golden Dragonfly?",
    a: "Three rules: verify the price on a live value list before every trade, ignore anyone quoting a price way above or below the 9M anchor, and never trade outside the official in-game trade window. Fake value lists and off-window 'middleman' scams are the two ways Dragonfly owners lose their pets — scammers know this pet is worth targeting.",
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

export default function DragonflyGuide() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="text-center mb-10">
        <h1 className="text-4xl sm:text-5xl font-black mb-4" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
          Golden Dragonfly <span style={{ background: "var(--gradient-1)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Value Guide</span>
        </h1>
        <p className="text-sm max-w-3xl mx-auto leading-relaxed" style={{ color: "var(--muted)" }}>
          <strong>Read this first:</strong> in Grow a Garden 2 the pet is the <strong>Golden Dragonfly</strong> — a <strong>Mythic</strong> pet that is NOT the same as the original game's Dragonfly.
          Part of the <Link href="/grow-a-garden-2/wiki" className="text-[var(--primary)] hover:underline font-semibold">GAG2 wiki</Link>.
        </p>
        <p className="text-sm max-w-3xl mx-auto leading-relaxed mt-4" style={{ color: "var(--muted)" }}>
          The Golden Dragonfly is a <strong>Mythic pet</strong> in Grow a Garden 2 costing <strong>9,000,000 sheckles</strong>. It passively
          doubles (2x) the chance for your fruits and plants to naturally gain the <strong>Gold mutation</strong>, which is worth 15x base
          value. It is NOT the same as GAG1's Dragonfly from the Bug Egg — a different pet with a different ability.
        </p>
      </div>

      <div className="space-y-10 text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
        <section>
          <h2 className="text-2xl font-bold mb-4 text-left" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
            ⚠️ Is This the Same Dragonfly as in Grow a Garden 1?
          </h2>
          <p className="mb-4">
            No — and getting this wrong is the <strong>single most common mistake</strong> players make with this keyword. The original
            game's Dragonfly is a <strong>Divine</strong> pet hatched from the <strong>Bug Egg</strong>, and its ability turns a random
            fruit Gold roughly every 5 minutes. Grow a Garden 2's <strong>Golden Dragonfly</strong> is a <strong>Mythic</strong> pet with
            a completely different mechanic: a <strong>passive 2x chance</strong> for fruits and plants to naturally roll the Gold mutation,
            with no activation and no timer.
          </p>
          <p className="mb-4">
            <strong>Why it matters:</strong> GAG1 value lists, GAG1 Discord prices, and GAG1 YouTube guides do not apply to this pet.
            Players who price the Golden Dragonfly using old-game numbers either overpay or get scammed. When you see "Dragonfly value"
            anywhere, check which game it refers to first — if it mentions the Bug Egg, it's the wrong pet.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-left" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
            🥚 How Do You Get the Golden Dragonfly?
          </h2>
          <p className="mb-4">
            There are two routes. The direct route is the <strong>map spawn</strong>: the Golden Dragonfly can appear as a spawnable pet
            for <strong>9,000,000 sheckles</strong>, at roughly a <strong>0.6% spawn chance</strong> — rare enough that you should not
            stand around waiting for it. The second route is hatching: a <strong>Common Egg</strong> can hatch one at roughly a
            <strong> 0.3% hatch rate</strong>.
          </p>
          <p className="mb-4">
            Note the GAG2 system difference: in the sequel, eggs come from <strong>Guild Rewards</strong>, not a pet shop. Joining an
            active guild and contributing regularly is the sustainable way to keep hatching eggs — a solo player with no guild will
            barely see Common Eggs at all. Treat egg hatching as a long-shot lottery and the 9M purchase as the guaranteed path.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-left" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
            ✨ What Does the Golden Dragonfly Actually Do?
          </h2>
          <p className="mb-4">
            The ability is simple and strong: it <strong>doubles (2x) the chance</strong> for your fruits and plants to naturally gain
            the <strong>Gold mutation</strong>. Gold multiplies a fruit's value by <strong>15x</strong>, so doubling its roll chance
            across your entire garden is one of the best passive income boosts in the game. It requires <strong>no activation</strong> —
            equip the pet and the bonus applies continuously.
          </p>
          <p className="mb-4">
            <strong>Methodology note:</strong> pet-mutation scaling is player-tested, not officially published, and sources disagree on
            exact decimals — treat these as approximate. A <strong>Big</strong> Golden Dragonfly scales the bonus to about <strong>3x</strong>,
            a <strong>Mega</strong> to about <strong>4x</strong>, and <strong>Rainbow</strong> adds roughly 1.25x on top
            (~x2.25 / ~x3.5 / ~x4.75 depending on size). Size and Rainbow roll separately from the base pet, so check any traded
            Dragonfly's traits before agreeing on a price. To model what the bonus does for your garden, use our
            <Link href="/pet-calculator" className="text-[var(--primary)] hover:underline font-semibold"> pet calculator</Link>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-left" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
            💰 What Is the Golden Dragonfly Worth?
          </h2>
          <p className="mb-4">
            The <strong>shop anchor is 9,000,000 sheckles</strong>, and trade value is <strong>high</strong>: Mythic rarity, a huge
            price tag, and real demand from mutation farmers all keep demand strong. Like the
            <Link href="/grow-a-garden-2/wiki/pets/raccoon" className="text-[var(--primary)] hover:underline font-semibold"> Raccoon</Link>,
            it's one of the few pets that holds serious trade value rather than depreciating like common hatch fodder.
          </p>
          <p className="mb-4">
            But never treat 9M as a fixed trade price. Pet values shift with patches, egg availability, and demand waves — verify
            against a <strong>live value list</strong> before every single trade, and be suspicious of anyone quoting a number far
            above or below the anchor. Fake value lists that inflate pet prices are a documented scam vector; check our
            <Link href="/value-list" className="text-[var(--primary)] hover:underline font-semibold"> value list</Link> and run the deal
            through our <Link href="/trade-calculator" className="text-[var(--primary)] hover:underline font-semibold"> trade calculator</Link>
            before you commit.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-left" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
            🛡️ Should You Buy It — And How Do You Not Get Scammed?
          </h2>
          <p className="mb-4">
            <strong>The honest answer: not first.</strong> 9 million sheckles is a huge spend, and the doubled Gold rolls only pay
            off when you have a large garden producing enough fruit for the bonus to compound. If you're still building, that 9M goes
            much further in multi-harvest Epic and Legendary crops. Buy the Dragonfly once your garden's output justifies it — it's a
            multiplier on an existing operation, not a starter pet.
          </p>
          <p className="mb-4">
            <strong>Scam protection:</strong> this pet is worth enough to be a scam target. Never trade outside the official in-game
            trade window — "middleman" offers and off-window deals are how Dragonfly owners lose their pets. Ignore "free dragonfly"
            links and giveaways (they're credential phishing), and if a trade offer feels too good, it is. The 9M anchor is public
            knowledge; anyone drastically undercutting it is baiting you.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6 text-left" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
            ❓ Golden Dragonfly FAQ
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
