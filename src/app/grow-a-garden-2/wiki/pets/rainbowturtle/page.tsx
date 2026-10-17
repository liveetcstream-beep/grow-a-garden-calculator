import type { Metadata } from "next";
import Link from "next/link";
import { getCanonical } from "@/lib/canonical";

const pageTitle = "Rainbow Turtle Grow a Garden 2 – Pet Guide & Slots";
const pageDesc = "Rainbow Turtle in Grow a Garden 2: +30 backpack slots, Rainbow mutation premium, Turtle spawn guide, stacking tips, and trading value.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDesc,
  keywords: ["rainbow turtle grow a garden 2", "rainbow turtles gag2", "turtle pet grow a garden 2", "backpack slots gag2", "rainbow pet mutation grow a garden 2", "gag2 pets wiki"],
  alternates: { canonical: getCanonical("/grow-a-garden-2/wiki/pets/rainbowturtle") },
  openGraph: {
    title: pageTitle,
    description: pageDesc,
    url: "https://growagardencalcs.com/grow-a-garden-2/wiki/pets/rainbowturtle",
    siteName: "Grow A Garden Calculator",
    type: "website",
  },
};

const faqs = [
  {
    q: "How do you get a Rainbow Turtle in Grow a Garden 2?",
    a: "First catch the base Turtle, then roll the Rainbow pet mutation on it. Turtles spawn on the map near the center market for 70,000 sheckles — first-come-first-served. The Rainbow mutation is a separate roll, and in GAG2 it rolls independently from size variants like Big and Mega.",
  },
  {
    q: "How many backpack slots does a Rainbow Turtle give?",
    a: "The Rainbow Turtle gives +30 backpack slots total: +10 from the base Turtle ability plus +20 from the Rainbow mutation. That is why it is one of the most sought-after pet mutations for farmers — 30 slots is a full stack of three normal Turtles in one pet slot.",
  },
  {
    q: "Do Rainbow Turtle slots stack with other pets?",
    a: "Yes. You can equip up to 6 pets at once, and backpack-slot bonuses stack across Turtles. A Rainbow Turtle (+30) plus normal Turtles (+10 each) compounds quickly — but remember each Turtle also brings its −2 walk speed penalty, so stack wisely.",
  },
  {
    q: "How do you deal with the Turtle's speed penalty?",
    a: "Pair it with a Bunny (+5 walk speed, stackable) or use Speed Mushrooms and teleport gear. The −2 speed per Turtle is genuinely dangerous at night when raiders can steal from slow players, so never stack six Turtles without a counter-speed plan.",
  },
  {
    q: "Is the Rainbow Turtle better than 3 normal Turtles?",
    a: "On slots, they tie: 3 normal Turtles give +30 slots for 210,000 sheckles total. But they also use 3 pet slots and stack −6 walk speed, while one Rainbow Turtle gives the same slots in a single slot with only −2 speed. The Rainbow also carries a collector trade premium.",
  },
  {
    q: "How much is a Rainbow Turtle worth for trading?",
    a: "Rainbow is cosmetic and color-shifting, so it commands a trade premium among collectors and slot-farmers on top of the utility value. Before any pet trade, check live prices on our value list — mutation premiums shift fast after each update and patch.",
  },
  {
    q: "Can a Rainbow Turtle also be a Big Turtle?",
    a: "Yes — in Grow a Garden 2, Rainbow is a separate roll from size. Big Turtle gives +50 slots, Mega +100, Rainbow Big +70, and Rainbow Mega +120. A Rainbow Turtle on its own means the standard Rainbow roll without a size variant.",
  },
  {
    q: "Is this the same Turtle as in Grow a Garden 1?",
    a: "No. GAG1's Turtle is a Legendary egg pet with different mechanics. This guide covers only the Grow a Garden 2 Turtle — shadow-dropped June 24, 2026, map spawn near the center market — so don't mix GAG1 guides with GAG2 stats.",
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

export default function RainbowTurtleGuide() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="text-center mb-10">
        <h1 className="text-4xl sm:text-5xl font-black mb-4" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
          Rainbow Turtle <span style={{ background: "var(--gradient-1)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Pet Guide</span>
        </h1>
        <p className="text-sm max-w-3xl mx-auto leading-relaxed" style={{ color: "var(--muted)" }}>
          <strong>Rainbow Turtle</strong> is the Rainbow pet-mutation variant of the Turtle in Grow a Garden 2 — +30 backpack
          slots in a single pet slot, with a collector trade premium.
          Part of the <Link href="/grow-a-garden-2/wiki" className="text-[var(--primary)] hover:underline font-semibold">GAG2 wiki</Link>.
        </p>
        <p className="text-sm max-w-3xl mx-auto leading-relaxed mt-4" style={{ color: "var(--muted)" }}>
          The <strong>Rainbow Turtle</strong> is the <strong>Rainbow mutation variant of the Turtle pet</strong> in Grow a Garden 2.
          The base Turtle is a <strong>Rare pet</strong> that spawns near the center market for <strong>70,000 sheckles</strong>,
          giving <strong>+10 backpack slots</strong> with a <strong>−2 walk speed</strong> penalty. The Rainbow mutation adds
          <strong> +20 slots on top</strong>, for <strong>+30 total</strong> — the best slots-per-pet-slot ratio among standard
          Turtle rolls.
        </p>
      </div>

      <div className="space-y-10 text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
        <section>
          <h2 className="text-2xl font-bold mb-4 text-left" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
            🐢 How Do You Get a Rainbow Turtle in GAG2?
          </h2>
          <p className="mb-4">
            Two steps: catch the base Turtle, then roll the Rainbow mutation. The Turtle <strong>shadow-dropped on June 24, 2026</strong> as
            a <strong>Rare</strong> pet that <strong>spawns on the map near the center market</strong> with roughly a
            <strong> 3.75% spawn chance</strong>. It costs <strong>70,000 sheckles</strong> — and it is
            <strong> first-come-first-served</strong>: another player can grab it before you do, so check the market area often
            and be ready to buy on sight.
          </p>
          <p className="mb-4">
            The <strong>Rainbow mutation is a separate roll</strong> in GAG2 — it rolls independently from size variants. That means a
            Rainbow Turtle is the color-shifting Rainbow version of the standard Turtle, distinct from Big Turtle (+50 slots),
            Mega Turtle (+100), Rainbow Big (+70), and Rainbow Mega (+120). Rainbow is also <strong>cosmetic</strong>, which is why
            it carries a trade premium among collectors beyond its pure utility.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-left" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
            🎒 How Many Backpack Slots Does a Rainbow Turtle Give?
          </h2>
          <p className="mb-4">
            <strong>+30 backpack slots total</strong>: +10 from the base Turtle ability plus +20 from the Rainbow mutation.
            Backpack capacity is one of the most valuable stats in GAG2 — more slots means longer harvest runs before you have to
            stop and sell, which directly converts to sheckles per hour on big crop fields. That is why slot-farmers chase this
            mutation specifically: 30 slots from one pet slot is the strongest standard-Turtle roll in the game.
          </p>
          <p className="mb-4">
            <strong>Methodology note:</strong> the +10/+20 split is verified from current live-server pet data, but GAG2's frequent
            update patches can retune pet abilities. If a patch lands and your in-game numbers differ, the patch notes are the
            authority — treat published guides as a baseline, not a contract.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-left" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
            ⚠️ What About the Walk Speed Penalty?
          </h2>
          <p className="mb-4">
            Every Turtle — Rainbow included — applies <strong>−2 walk speed while equipped</strong>. That penalty is not cosmetic:
            at <strong>night</strong>, when raiders roam the map and stealing is live, a slow player is a vulnerable player. Six
            stacked Turtles means −12 speed, which is effectively a raid target painted on your back. Never chase max slots without
            a counter-speed plan.
          </p>
          <p className="mb-4">
            The fix is simple: pair your Turtles with a
            <Link href="/grow-a-garden-2/wiki/pets/bunny" className="text-[var(--primary)] hover:underline font-semibold"> Bunny </Link>
            (<strong>+5 walk speed</strong>, stackable) or use Speed Mushrooms and teleport gear. A common balanced loadout is a
            Rainbow Turtle plus two Bunnies: +30 slots with +8 net speed — fast enough to escape, roomy enough to farm. Check
            current pet values on our
            <Link href="/pet-calculator" className="text-[var(--primary)] hover:underline font-semibold"> pet calculator</Link> when
            planning your six-slot loadout.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-left" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
            🧮 Rainbow Turtle vs 3 Normal Turtles: Which Is Better?
          </h2>
          <p className="mb-4">
            Do the math before you overpay. <strong>Three normal Turtles cost 210,000 sheckles total</strong> (70K each) and give the
            same <strong>+30 slots</strong> as one Rainbow Turtle. But they eat <strong>three of your six pet slots</strong> and
            stack <strong>−6 walk speed</strong>, while the Rainbow Turtle does the job in <strong>one slot with only −2 speed</strong>.
            For slot-farmers who want slots <em>and</em> speed in the same loadout, the Rainbow Turtle is clearly the better buy —
            the question is whether the mutation's trade premium costs more than the freedom it buys.
          </p>
          <p className="mb-4">
            Then there is the collector angle: the Rainbow mutation is <strong>color-shifting and cosmetic</strong>, so it commands
            a premium among traders that has nothing to do with slots. That premium swings with patch cycles and collector demand —
            check live prices on our
            <Link href="/value-list" className="text-[var(--primary)] hover:underline font-semibold"> value list</Link> before you
            buy or sell a Rainbow Turtle, so you don't pay collector prices for a farmer's purchase.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-left" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
            🚫 Don't Confuse It With the GAG1 Turtle
          </h2>
          <p className="mb-4">
            Grow a Garden 1 has its own Turtle — a <strong>Legendary egg pet</strong> with completely different mechanics and stats.
            GAG1 guides <strong>do not apply</strong> to this pet. The Rainbow Turtle in this guide is the GAG2 map-spawn Rare from
            the June 24, 2026 shadow-drop: center market, 70,000 sheckles, +10/+20 slots, −2 speed. If a guide talks about hatching a
            Turtle from an egg, it is a GAG1 guide — close that tab.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6 text-left" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
            ❓ Rainbow Turtle FAQ
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
