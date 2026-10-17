import type { Metadata } from "next";
import Link from "next/link";
import { getCanonical } from "@/lib/canonical";

const pageTitle = "Sunflower Grow a Garden 2 – Legendary Crop Guide";
const pageDesc = "Sunflower in Grow a Garden 2: 5M seed price, Legendary rarity, harvest-type dispute, profit math vs Cherry, and trading risks.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDesc,
  keywords: ["sunflower grow a garden 2", "sunflower grow a garden", "sunflower gag2", "sunflower value grow a garden 2", "legendary crops gag2", "5m seed grow a garden 2"],
  alternates: { canonical: getCanonical("/grow-a-garden-2/wiki/plants/sunflower") },
  openGraph: {
    title: pageTitle,
    description: pageDesc,
    url: "https://growagardencalcs.com/grow-a-garden-2/wiki/plants/sunflower",
    siteName: "Grow A Garden Calculator",
    type: "website",
  },
};

const faqs = [
  {
    q: "How much does a Sunflower seed cost in Grow a Garden 2?",
    a: "The majority of current GAG2 sources list it at 5,000,000 sheckles from Sam's Seed Shop — but one source lists 500K, so the price is disputed. Confirm the live in-game price before committing capital, especially if you are buying from another player.",
  },
  {
    q: "Is Sunflower single-harvest or multi-harvest in GAG2?",
    a: "This is openly disputed: roughly half of published GAG2 sources say single-harvest, half say multi-harvest. Do NOT treat either as settled. Verify in-game on your own plants before committing 5 million sheckles, because the answer decides whether Sunflower is a one-time payout or long-term income.",
  },
  {
    q: "How much is Sunflower worth in GAG2?",
    a: "Published base values range from roughly 1,579 to 1,750 sheckles at ~5.75 kg base weight — with one source claiming 3,160. Fruit value scales with weight and mutations like Golden and Rainbow, and weather events during growth are the main driver of above-baseline results.",
  },
  {
    q: "How rare is Sunflower in the Seed Shop?",
    a: "Legendary rarity with roughly a 1.6% chance per restock. Expect to camp the 5-minute restock timer for a long time or coordinate with other players watching the shop — this is not a seed you stumble into.",
  },
  {
    q: "Is Sunflower better than Cherry in Grow a Garden 2?",
    a: "Cherry (1.2M seed, multi-harvest) is arguably the safer buy: a lower commitment with compounding returns. Sunflower is the higher-risk, higher-ceiling play — but with the harvest type disputed and the 5M price tag, many players build capital with Cherry first and only take the Sunflower gamble later.",
  },
  {
    q: "Should you use Robux seed rolls to get Sunflower?",
    a: "At 69 Robux per roll against a ~1.6% restock chance, the expected Robux cost is steep either way. Rolling is only defensible for genuinely hard-to-find seeds — and only after you've camped several restocks. Run the expected-value math before spending.",
  },
  {
    q: "Is the GAG1 Sunflower the same as the GAG2 Sunflower?",
    a: "No — GAG1's Sunflower is a Divine crop with completely different stats and economics. GAG1 guides do NOT apply here. This guide covers only the Grow a Garden 2 Legendary Sunflower; if a guide mentions Divine rarity, it is a GAG1 guide.",
  },
  {
    q: "Can you trade Sunflower in GAG2?",
    a: "Yes, and mutated or heavy-weight Sunflowers carry real trade value thanks to Tier A 'early profit spike' status on tested lists. But the disputed harvest type and seed price make mispriced trades common — always check live prices on our value list and verify your numbers first.",
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

export default function SunflowerGuide() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="text-center mb-10">
        <h1 className="text-4xl sm:text-5xl font-black mb-4" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
          Sunflower <span style={{ background: "var(--gradient-1)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Profit Guide</span>
        </h1>
        <p className="text-sm max-w-3xl mx-auto leading-relaxed" style={{ color: "var(--muted)" }}>
          <strong>Sunflower</strong> is Grow a Garden 2's most debated Legendary crop — a massive seed price, a disputed
          harvest type, and Tier A profit potential if the numbers land your way.
          Part of the <Link href="/grow-a-garden-2/wiki" className="text-[var(--primary)] hover:underline font-semibold">GAG2 wiki</Link>.
        </p>
        <p className="text-sm max-w-3xl mx-auto leading-relaxed mt-4" style={{ color: "var(--muted)" }}>
          Sunflower is a <strong>Legendary crop</strong> in Grow a Garden 2. The majority of sources list its seed at
          <strong> 5,000,000 sheckles</strong> at <strong>Sam's Seed Shop</strong> with base crop value around
          <strong> 1,579–1,750 sheckles</strong> at ~5.75 kg. But two core facts are <strong>openly disputed across sources</strong> —
          the seed price and whether it is single- or multi-harvest — so verify in-game before committing millions.
        </p>
      </div>

      <div className="space-y-10 text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
        <section>
          <h2 className="text-2xl font-bold mb-4 text-left" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
            🌻 How Do You Get Sunflower in Grow a Garden 2?
          </h2>
          <p className="mb-4">
            Sunflower seeds come from <strong>Sam's Seed Shop</strong> at <strong>Legendary</strong> rarity, with roughly a
            <strong> 1.6% chance per 5-minute restock</strong>. This is a genuine timer-camping seed — expect long waits, coordinate
            with other players watching the shop, and never assume you'll see it in any given session. The Robux seed-roll option
            costs <strong>69 Robux per roll</strong>, but at this rarity the expected Robux cost is brutal; camp the restocks first
            and treat rolling as a last resort.
          </p>
          <p className="mb-4">
            <strong>Price dispute:</strong> most current GAG2 sources agree on <strong>5,000,000 sheckles</strong>, but one source
            lists <strong>500,000</strong>. That is a 10× gap, and this guide does not resolve it — it flags it. If you are buying a
            seed from another player, confirm the live in-game price yourself before negotiating, because a mispriced trade at this
            tier can wipe out weeks of progress.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-left" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
            ❓ Is Sunflower Single-Harvest or Multi-Harvest?
          </h2>
          <p className="mb-4">
            <strong>Sources genuinely disagree</strong> — roughly half of published GAG2 sources describe Sunflower as
            single-harvest, the other half as multi-harvest. This is not a settled stat, and no guide — including this one —
            should present either answer as fact. The harvest type is the single most important property of a 5M-sheckle seed:
            single-harvest means one payout and a rebuy, multi-harvest means compounding income from one plant.
          </p>
          <p className="mb-4">
            <strong>Methodology note:</strong> this is exactly the kind of figure that shifts with update patches — a crop's harvest
            type can be retuned silently between patches, which is why half the sources now contradict the other half. Until you
            have tested it on your own live plant, <strong>do not commit 5 million sheckles</strong>. The five minutes it takes to
            verify in-game is worth more than any published number.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-left" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
            💰 How Much Is Sunflower Worth?
          </h2>
          <p className="mb-4">
            Published base values range from <strong>~1,579 to ~1,750 sheckles</strong> at ~5.75 kg base weight, with
            <strong> one source claiming 3,160</strong>. As always in GAG2, treat these as ranges: fruit value scales with
            <strong>weight</strong>, and <strong>mutations</strong> like Golden and Rainbow from weather-system events are the
            main way individual Sunflowers beat their baseline. A heavy or mutated Sunflower is a different economic animal from a
            base one — tested-value lists grade Sunflower <strong>Tier A with the note "early profit spike"</strong>, and some
            rank it among the highest-value single-harvest Legendaries.
          </p>
          <p className="mb-4">
            <strong>Disclaimer:</strong> with the seed price disputed (5M vs 500K) and the harvest type disputed (single vs multi),
            any "profit" figure you see quoted for Sunflower rests on uncertain inputs. Always rerun the math with your own
            verified numbers on our
            <Link href="/crop-calculator" className="text-[var(--primary)] hover:underline font-semibold"> crop calculator</Link> —
            it is the only profit number you should trust.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-left" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
            🧮 Sunflower vs Cherry: Which Legendary Should You Buy First?
          </h2>
          <p className="mb-4">
            This is the real question, because <strong>Cherry</strong> sits at the same tier with a <strong>1.2M-sheckle seed and
            multi-harvest</strong> growth. Cherry is the safer buy by a wide margin: lower commitment, compounding returns from a
            plant that survives harvesting, and a settled stat sheet. Sunflower is the higher-ceiling gamble — bigger per-harvest
            value, Tier A grading — but with a disputed seed price, a disputed harvest type, and a 5M entry ticket.
          </p>
          <p className="mb-4">
            The specialist play: <strong>build capital with Cherry first</strong>, then take the Sunflower gamble only after you
            have verified both the price and the harvest type in-game and can absorb a 5M loss without wrecking your garden economy.
            Never let FOMO drive a Legendary-tier purchase — the seed shop is not going anywhere. For trading context at this tier,
            compare live prices on our
            <Link href="/value-list" className="text-[var(--primary)] hover:underline font-semibold"> value list</Link>, and see how
            other high-tier plants behave in our
            <Link href="/grow-a-garden-2/wiki/plants/moonbloom" className="text-[var(--primary)] hover:underline font-semibold"> Moonbloom guide</Link>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-left" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
            🚫 Don't Apply GAG1 Sunflower Guides Here
          </h2>
          <p className="mb-4">
            Grow a Garden 1 has its own Sunflower — a <strong>Divine crop</strong> with completely different stats, price, and
            economics. GAG1 guides <strong>do not apply</strong> to the GAG2 Legendary Sunflower covered here. If a guide mentions
            Divine rarity, a different seed shop structure, or GAG1 mechanics like codes and gear that don't exist in the sequel,
            it is a GAG1 guide — close that tab. This is one of the most common sources of confusion in GAG2 trading, because
            players quote GAG1 numbers at GAG2 prices.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6 text-left" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
            ❓ Sunflower FAQ
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
