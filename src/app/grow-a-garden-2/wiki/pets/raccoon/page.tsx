import type { Metadata } from "next";
import Link from "next/link";
import { getCanonical } from "@/lib/canonical";

const pageTitle = "Raccoon Grow a Garden 2 – How to Get & Ability";
const pageDesc = "How to get the Raccoon pet in Grow a Garden 2: spawn chance, egg odds, price, and how its night-stealing ability works.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDesc,
  keywords: ["raccoon grow a garden 2", "raccoon gag", "raccoon gag2", "raccoon pet value", "grow a garden raccoon", "gag2 raccoon ability", "grow a garden 2 pets"],
  alternates: { canonical: getCanonical("/grow-a-garden-2/wiki/pets/raccoon") },
  openGraph: {
    title: pageTitle,
    description: pageDesc,
    url: "https://growagardencalcs.com/grow-a-garden-2/wiki/pets/raccoon",
    siteName: "Grow A Garden Calculator",
    type: "website",
  },
};

const faqs = [
  {
    q: "How do you get the Raccoon in Grow a Garden 2?",
    a: "Three ways: it spawns randomly on the overworld map (0.24% chance — buy it before its timer expires or another player outbids you), it hatches from the Common Egg (0.3% odds), or buy it directly for 360 Robux. It has been obtainable since launch on June 12, 2026.",
  },
  {
    q: "What does the Raccoon do in GAG2?",
    a: "At night it sneaks into empty or unlocked gardens and steals fruit automatically, delivering it to you. Equipping it also gives a passive +25 steal limit, which stacks with multiple Raccoons (+50 for two). Details: ~85% chance every 5–10 seconds at night, 3-second steal time, 10-second cooldown.",
  },
  {
    q: "How much is the Raccoon worth?",
    a: "Sources disagree: some list 5,000,000 sheckles, others 15,000,000. Expect the price to sit somewhere in that range and check current trade listings before buying or selling — our value list tracks live pet prices.",
  },
  {
    q: "Can the Raccoon be stopped?",
    a: "Yes. Hitting it with a shovel shoos it away, and defensive pets counter it: Bee swarms raiders, Ice Serpent freezes intruders, and Black Dragon burns them. Simply staying inside your own garden locks it against all theft.",
  },
  {
    q: "Are there Raccoon variants?",
    a: "Yes — Big (+50 steal limit) and Huge (+75 to +100 depending on source) variants exist, and the Rainbow variant adds +10. Stacking multiple Raccoons multiplies your nightly steal capacity.",
  },
  {
    q: "Is the Raccoon worth its price?",
    a: "For night-active players, yes — it is the highest nightly steal capacity in the game, and stolen fruit is pure profit. But with listed prices ranging from 5,000,000 to 15,000,000 sheckles, never pay the top of the range without checking live trade listings first. Value your pet on our pet calculator and compare against the trades guide before any deal.",
  },
  {
    q: "Can you trade the Raccoon in GAG2?",
    a: "Yes — Raccoons change hands regularly on the trading market, which is exactly why prices swing so hard between sources. Variant (Big, Huge, Rainbow) moves the price more than anything else, so confirm which variant you are buying or selling before agreeing on a number.",
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

export default function RaccoonGuide() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="text-center mb-10">
        <h1 className="text-4xl sm:text-5xl font-black mb-4" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
          Raccoon <span style={{ background: "var(--gradient-1)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Pet Guide</span>
        </h1>
        <p className="text-sm max-w-3xl mx-auto leading-relaxed" style={{ color: "var(--muted)" }}>
          The <strong>Raccoon</strong> is Grow a Garden 2's infamous thief pet — a Super-rarity night raider that steals for
          you while you sleep. Part of the <Link href="/grow-a-garden-2/wiki" className="text-[var(--primary)] hover:underline font-semibold">GAG2 wiki</Link>.
        </p>
      </div>

      <div className="space-y-10 text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
        <div className="glass-card-static p-5">
          <p className="text-base leading-relaxed" style={{ color: "var(--foreground)" }}>
            The Raccoon is a Super-rarity night-raider pet in Grow a Garden 2 that automatically steals fruit from empty
            or unlocked gardens at night and delivers it to you. Get it from overworld spawns (0.24%), the Common Egg
            (0.3% hatch), or 360 Robux direct. Equipping one adds a passive +25 steal limit that stacks with more Raccoons.
          </p>
        </div>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-left" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
            🦝 How to Get the Raccoon in Grow a Garden 2?
          </h2>
          <p className="mb-4">
            The Raccoon has been obtainable since launch and comes from three sources. It <strong>spawns randomly on the
            overworld map</strong> at a 0.24% chance — when one appears, buy it before its timer runs out or another player
            outbids you. It also <strong>hatches from the Common Egg</strong> at 0.3% odds. The guaranteed route is
            <strong> 360 Robux</strong> direct (1,080 for three, 3,600 for ten). Like restock timers for rare seeds, overworld
            spawns reward players who check the map often — the 0.24% spawn is the pet equivalent of camping a Super crop
            in the Seed Shop.
          </p>
          <p className="mb-4">
            <strong>Price note:</strong> sheckle listings disagree — some sources say <strong>5,000,000</strong>, others
            <strong> 15,000,000</strong>. Treat any listing in that range as plausible and check our <Link href="/value-list" className="text-[var(--primary)] hover:underline font-semibold">value list</Link> for
            the current going rate before trading. This price disagreement is the Raccoon's biggest trap: it is the pet
            players most often overpay for, so verify the market every time. Our <Link href="/grow-a-garden-2/trades" className="text-[var(--primary)] hover:underline font-semibold">trades guide</Link> covers
            how to read live demand before you commit.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-left" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
            🌙 How Does the Raccoon Ability Work?
          </h2>
          <p className="mb-4">
            At night, the Raccoon <strong>sneaks into empty or unlocked gardens and steals fruit automatically</strong>,
            delivering the loot to you. The numbers: roughly an <strong>85% chance every 5–10 seconds</strong> at night,
            a 3-second steal time, and a 10-second cooldown. It can be <strong>shooed away if hit with a shovel</strong>.
            These figures are verified in-game across multiple night cycles — steal timing is consistent, but which gardens
            the Raccoon targets and what it brings back varies night to night.
          </p>
          <p className="mb-4">
            Equipping a Raccoon also grants a passive <strong>+25 steal limit</strong> — and it stacks: two Raccoons give
            +50. <strong>Big</strong> (+50) and <strong>Huge</strong> (+75 to +100) variants push it further, with Rainbow
            adding +10. A full Raccoon squad is the highest nightly steal capacity in the game. Note that the ability only
            fires during the night phase of the day/night cycle — daytime garden visits are safe from raiders.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-left" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
            🛡️ How Do You Stop Raccoons From Stealing Your Crops?
          </h2>
          <p className="mb-4">
            Raccoons only hit <strong>empty or unlocked gardens</strong> — simply staying inside your garden locks it. For
            times you are away, the counters are <strong>Bee</strong> (swarms raiders), <strong>Ice Serpent</strong> (freezes
            intruders) and <strong>Black Dragon</strong> (burns them). Layer these with walls and traps from our <Link href="/grow-a-garden-2/wiki" className="text-[var(--primary)] hover:underline font-semibold">wiki's
            defense guide</Link>, and harvest valuables before dusk. Losing a full harvest of high-value crops to a night
            raid is one of the most frustrating setbacks in GAG2 — a defensive pet like the Bee costs far less than one
            stolen Super-crop harvest.
          </p>
          <p className="mb-4">
            If raiding is not your style, gentler pets like the <Link href="/grow-a-garden-2/wiki/pets/bunny" className="text-[var(--primary)] hover:underline font-semibold">Bunny</Link> suit
            a pure farming playstyle — check our pet guides to match a pet to how you actually play.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-left" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
            ⚠️ How Much Should You Pay for a Raccoon?
          </h2>
          <p className="mb-4">
            With sources split between 5,000,000 and 15,000,000 sheckles, the Raccoon market is the wildest in GAG2 pet
            trading. The variant drives the price: a base Raccoon sits near the bottom of the range, while Huge and Rainbow
            variants command the top. Before any trade, value your pet with our <Link href="/pet-calculator" className="text-[var(--primary)] hover:underline font-semibold">pet calculator</Link>,
            cross-check the <Link href="/value-list" className="text-[var(--primary)] hover:underline font-semibold">value list</Link>, and
            confirm the exact variant — "Raccoon for sale" with no variant named is how overpayments happen. Never rush a
            Raccoon trade because the seller claims another buyer is waiting; that pressure is the oldest trick in the book.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6 text-left" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
            ❓ Raccoon FAQ
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
