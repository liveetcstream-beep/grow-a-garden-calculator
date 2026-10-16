import type { Metadata } from "next";
import Link from "next/link";
import { getCanonical } from "@/lib/canonical";

const pageTitle = "Moon Bloom Grow a Garden 2 – How to Get & Value";
const pageDesc = "How to get the Moon Bloom in Grow a Garden 2: seed shop price, stock chance, sell value, and how it merges into the Eclipse Bloom.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDesc,
  keywords: ["moon bloom grow a garden 2", "moonbloom", "moon bloom gag2", "moon bloom value", "eclipse bloom grow a garden 2", "grow a garden 2 super crops"],
  alternates: { canonical: getCanonical("/grow-a-garden-2/wiki/plants/moonbloom") },
  openGraph: {
    title: pageTitle,
    description: pageDesc,
    url: "https://growagardencalcs.com/grow-a-garden-2/wiki/plants/moonbloom",
    siteName: "Grow A Garden Calculator",
    type: "website",
  },
};

const faqs = [
  {
    q: "How do you get the Moon Bloom in Grow a Garden 2?",
    a: "Buy its seed from the Seed Shop. It is a Super-rarity crop with roughly a 0.35% chance to appear per 5-minute shop restock, so it can take many restocks to show up. Watch restocks with our seed stock predictor and buy instantly.",
  },
  {
    q: "How much does the Moon Bloom seed cost?",
    a: "Around 65–85 million sheckles. Early guides listed 65M, but current sources list 85M — Super seed prices were rebalanced upward after launch, so expect the higher figure.",
  },
  {
    q: "How much is the Moon Bloom worth?",
    a: "Each fruit sells for roughly 9,000 sheckles on average, and the plant is multi-harvest, so it keeps producing after each harvest. Its real value is as a merge parent for the Eclipse Bloom.",
  },
  {
    q: "What is the Moon Bloom used for?",
    a: "Grow a Moon Bloom and a Sun Bloom to full maturity side by side to trigger a merge prompt. Merging creates the Eclipse Bloom (Secret rarity) — but both parent plants are permanently consumed.",
  },
  {
    q: "Is the Moon Bloom multi-harvest?",
    a: "Yes. Unlike single-harvest crops, the Moon Bloom plant persists after harvesting, so one plant produces many rounds of ~9,000-sheckle fruit.",
  },
  {
    q: "Can you trade Moon Bloom fruit in GAG2?",
    a: "Yes — fruits are tradable (seeds are not). Extra harvests can be traded to other players, but always use the secure ticket trade window and check live values first. See our trading guide for the full rules.",
  },
  {
    q: "How many restocks does it take to find a Moon Bloom seed?",
    a: "With roughly a 0.35% chance per restock, expect to watch hundreds of 5-minute restocks on average before one appears — it is one of the hardest Seed Shop seeds to catch. The seed stock predictor tells you the instant a restock is worth checking.",
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

export default function MoonbloomGuide() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="text-center mb-10">
        <h1 className="text-4xl sm:text-5xl font-black mb-4" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
          Moon <span style={{ background: "var(--gradient-1)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Bloom</span>
        </h1>
        <p className="text-sm max-w-3xl mx-auto leading-relaxed" style={{ color: "var(--muted)" }}>
          The <strong>Moon Bloom</strong> is one of Grow a Garden 2's Super-rarity crops — a multi-harvest money-maker and
          half of the Eclipse Bloom merge. Part of the <Link href="/grow-a-garden-2/wiki" className="text-[var(--primary)] hover:underline font-semibold">GAG2 wiki</Link>.
        </p>
        <p className="text-sm max-w-3xl mx-auto leading-relaxed mt-4" style={{ color: "var(--muted)" }}>
          The Moon Bloom is a Super-rarity, multi-harvest crop in Grow a Garden 2 worth roughly 9,000 sheckles per fruit. Its
          seed costs 65–85 million sheckles and appears in the Seed Shop with about a 0.35% chance per 5-minute restock. Its
          real value is as a merge parent: grown beside a mature Sun Bloom, it merges into the Secret-rarity Eclipse Bloom.
        </p>
      </div>

      <div className="space-y-10 text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
        <section>
          <h2 className="text-2xl font-bold mb-4 text-left" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
            🌙 How Do You Get the Moon Bloom in Grow a Garden 2?
          </h2>
          <p className="mb-4">
            Moon Bloom seeds come from the <strong>Seed Shop</strong>, which restocks every 5 minutes. The catch is rarity:
            the seed has only about a <strong>0.35% chance</strong> to appear in any given restock, making it one of the
            hardest shop seeds to catch. When it does appear, it sells out fast — this is exactly the situation our <Link href="/grow-a-garden-2/stock-predictor" className="text-[var(--primary)] hover:underline font-semibold">seed stock predictor</Link> is
            built for. Check restocks consistently and be ready to buy the instant it shows up; hesitating means losing it to
            another player.
          </p>
          <p className="mb-4">
            <strong>Price:</strong> expect to pay around <strong>65–85 million sheckles</strong>. Launch-era guides listed
            65M, but current sources list 85M — the developers rebalanced several Super seed prices upward after release,
            so budget for the higher number. That's a massive outlay for most players, so farm up your sheckle reserves
            before you start camping the shop.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-left" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
            💰 How Much Is the Moon Bloom Worth?
          </h2>
          <p className="mb-4">
            Each Moon Bloom fruit sells for roughly <strong>9,000 sheckles</strong> on average, and the plant is <strong>multi-harvest</strong> —
            it survives harvesting and keeps producing. That makes it a strong passive income crop once established: one plant
            yields many rounds of ~9,000-sheckle fruit without replanting, a very different economy from single-harvest crops.
          </p>
          <p className="mb-4">
            <strong>Methodology note:</strong> the 9,000-sheckle figure is a community-tested average for a standard-weight,
            unmutated fruit. Your actual sale price swings with <strong>weight and mutations</strong> — a Golden or Rainbow
            Moon Bloom sells far above the base average, while a light fruit sells below it. Price any harvest precisely with
            our <Link href="/" className="text-[var(--primary)] hover:underline font-semibold">crop calculator</Link> rather
            than assuming the flat 9,000. If you're collecting mutated Super crops, the{" "}
            <Link href="/mutation-calculator" className="text-[var(--primary)] hover:underline font-semibold">mutation calculator</Link>{" "}
            shows exactly what each mutation adds.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-left" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
            🌒 How Does the Moon Bloom Merge Into the Eclipse Bloom?
          </h2>
          <p className="mb-4">
            The Moon Bloom's true purpose is the merge: grow a <strong>fully-mature Moon Bloom</strong> and a <strong>fully-mature
            Sun Bloom</strong> next to each other and a merge prompt appears. Accept it to create the <strong>Eclipse Bloom</strong> —
            Secret rarity, averaging ~12,000 sheckles per fruit. The Sun Bloom is the Moon Bloom's other half, so plan for both:
            read our <Link href="/grow-a-garden-2/wiki/plants/sunbloom" className="text-[var(--primary)] hover:underline font-semibold">Sun Bloom guide</Link> to
            understand what getting it takes.
          </p>
          <p className="mb-4">
            Harvesting the Eclipse Bloom triggers the <strong>Eclipse weather event</strong>, raining ×80 Eclipsed mutations
            over your garden — check our <Link href="/grow-a-garden-2/weather-tracker" className="text-[var(--primary)] hover:underline font-semibold">weather tracker guide</Link> first
            so the Eclipse event pays off instead of being wasted.
          </p>
          <p className="mb-4">
            <strong>Warning:</strong> both parent plants are <strong>permanently consumed</strong> by the merge — a pain point
            that catches players off guard. Only merge once you can afford to lose two Super crops, because there is no way to
            get the parents back afterward. This is a deliberate, permanent trade: two multi-harvest income plants exchanged
            for one Secret-rarity merge crop.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-left" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
            🤔 Should You Merge Your Moon Bloom or Keep Farming It?
          </h2>
          <p className="mb-4">
            It depends on your sheckle situation. Keeping the Moon Bloom means steady, repeatable income from its multi-harvest
            fruit (~9,000 sheckles a round) — plus its harvests are tradable fruit, so surplus can move through the{" "}
            <Link href="/grow-a-garden-2/trades" className="text-[var(--primary)] hover:underline font-semibold">trading system</Link>.
            Merging means giving up two permanent income plants for the Eclipse Bloom's higher per-fruit average and the Eclipse
            weather event's ×80 Eclipsed mutations.
          </p>
          <p className="mb-4">
            The safe play: only merge once you've already rebuilt your farming base and can absorb losing both Super crops.
            If the 65–85M seed cost nearly wiped your reserves, keep farming the Moon Bloom first and merge later.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6 text-left" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
            ❓ Moon Bloom FAQ
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
