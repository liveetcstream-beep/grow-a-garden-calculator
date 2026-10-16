import type { Metadata } from "next";
import Link from "next/link";

const pageTitle = "Scarecrow Stats & Value | Pet Calculator Grow A Garden";
const pageDesc =
  "Scarecrow is a Divine pet added Oct 3, 2026 in Fall Finale. Farewell Crows ability, Shady Scarecrow NPC obtain method, and chances.";
const pageUrl = "https://growagardencalcs.com/pet/scarecrow-stats";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDesc,
  keywords: [
    "scarecrow grow a garden",
    "scarecrow pet grow a garden",
    "farewell crows ability",
    "shady scarecrow npc",
    "grow a garden fall finale",
    "scarecrow value grow a garden",
    "how to get scarecrow grow a garden",
  ],
  alternates: { canonical: "/pet/scarecrow-stats" },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDesc,
    url: pageUrl,
    siteName: "Grow A Garden Calculator",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Scarecrow Pet Stats & Value" }],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDesc,
    images: ["/og-image.png"],
  },
};

// FAQ data — every answer reflects 2026-dated sources only
const faqs = [
  {
    q: "How do you get the Scarecrow pet in Grow A Garden?",
    a: "Submit almost any seed to the Shady Scarecrow NPC (added in the Fall Finale update, October 3, 2026). He consumes the seed and spits out one random reward. Your seed's rarity sets a Seed Score (1–8), and rarer seeds give better odds — the Scarecrow's listed chance ranges from 0.3% at Seed Score 1 up to 9.54% at Seed Score 10. It is an RNG roll per submission, not a guaranteed threshold.",
  },
  {
    q: "What does the Scarecrow's Farewell Crows ability do?",
    a: "Every 18 minutes and 31 seconds, the Scarecrow permanently removes one Crow pet from your garden (the Crow does not return) and ages a random other pet by 1 level in exchange. It is a pet-aging utility ability, not a crop-value multiplier, so it has no \u00d7N.N figure.",
  },
  {
    q: "What is the Scarecrow worth in Grow A Garden?",
    a: "No 2026-dated source has published a coin value or trade value range for the Scarecrow yet — the pet is only days old and community value lists have not caught up. Its practical worth comes from Farewell Crows: converting spare Crow pets into +1 level on high-value pets roughly every 18.5 minutes.",
  },
  {
    q: "When was the Scarecrow added to Grow A Garden?",
    a: "October 3, 2026, as part of the Fall Finale update — the third part of the Fall Market Event 2026. The same update added the Scarf Crow pet, the Maple Melt and Rosy Root plants, the Fall Market Collection, and the Shady Scarecrow NPC.",
  },
  {
    q: "What is the Shady Scarecrow Seed Score?",
    a: "The Seed Score is set by the rarity of the seed you submit to the Shady Scarecrow: Common 1, Uncommon 2, Rare 3, Legendary 4, Mythical 5, Divine 6, Prismatic 7, Transcendent 8. Higher scores improve your odds at the rarest rewards (Scarecrow pet and Maple Melt seed), and seed variants can push effective scores to 9–10.",
  },
  {
    q: "Does the Scarecrow need Crow pets to work?",
    a: "Yes. Farewell Crows consumes one Crow pet from your garden each cycle. Without a Crow present, the aging effect cannot trigger — so the pet pairs best with a farmable Crow supply. Crow is a Halloween-event pet available during the Ghoul Garden event.",
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

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://growagardencalcs.com" },
    { "@type": "ListItem", position: 2, name: "Pets", item: "https://growagardencalcs.com/pet-calculator" },
    { "@type": "ListItem", position: 3, name: "Scarecrow", item: pageUrl },
  ],
};

// Verified obtain chances per Seed Score (Sportskeeda, in-game listed chances)
const chanceTable = [
  { score: 1, chance: "0.3%" },
  { score: 2, chance: "0.36%" },
  { score: 3, chance: "0.60%" },
  { score: 4, chance: "1.20%" },
  { score: 5, chance: "2.29%" },
  { score: 6, chance: "3.82%" },
  { score: 7, chance: "5.53%" },
  { score: 8, chance: "7.15%" },
  { score: 9, chance: "8.50%" },
  { score: 10, chance: "9.54%" },
];

const seedScores = [
  { rarity: "Common", score: 1 },
  { rarity: "Uncommon", score: 2 },
  { rarity: "Rare", score: 3 },
  { rarity: "Legendary", score: 4 },
  { rarity: "Mythical", score: 5 },
  { rarity: "Divine", score: 6 },
  { rarity: "Prismatic", score: 7 },
  { rarity: "Transcendent", score: 8 },
];

const overviewStats = [
  { label: "Rarity", value: "Divine" },
  { label: "Added", value: "Oct 3, 2026 (Fall Finale)" },
  { label: "Obtained from", value: "Shady Scarecrow NPC" },
  { label: "Ability", value: "Farewell Crows" },
  { label: "Ability cycle", value: "18m 31s" },
  { label: "Trade value", value: "Not yet documented" },
];

export default function ScarecrowPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs mb-6" style={{ color: "var(--muted)" }}>
        <Link href="/" className="hover:text-[var(--primary)] transition-colors">Home</Link>
        <span>/</span>
        <Link href="/pet-calculator" className="hover:text-[var(--primary)] transition-colors">Pets</Link>
        <span>/</span>
        <span style={{ color: "#FBBF24" }}>Scarecrow</span>
      </nav>

      {/* Hero */}
      <div className="glass-card-static p-8 mb-8" style={{ borderColor: "#FBBF2430" }}>
        <div className="flex items-center gap-5 mb-6">
          <div
            className="w-20 h-20 rounded-2xl flex items-center justify-center text-5xl"
            style={{ background: "#FBBF2415", border: "2px solid #FBBF2430" }}
          >
            🎃
          </div>
          <div>
            <h1
              className="text-3xl sm:text-4xl font-extrabold"
              style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}
            >
              Scarecrow
            </h1>
            <div className="flex items-center gap-3 mt-2 flex-wrap">
              <span
                className="text-xs px-3 py-1 rounded-full font-bold"
                style={{ background: "#FBBF2420", color: "#FBBF24", border: "1px solid #FBBF2440" }}
              >
                Divine
              </span>
              <span
                className="text-xs px-2 py-0.5 rounded-full"
                style={{ background: "var(--surface-2)", color: "var(--muted)" }}
              >
                Event
              </span>
              <span
                className="text-xs px-2 py-0.5 rounded-full"
                style={{ background: "var(--surface-2)", color: "var(--muted)" }}
              >
                Fall Finale · Oct 2026
              </span>
            </div>
          </div>
        </div>
        <p className="text-base leading-relaxed" style={{ color: "var(--muted)" }}>
          The Scarecrow is a <strong style={{ color: "var(--foreground)" }}>Divine-rarity pet</strong> added to
          Grow A Garden on <strong style={{ color: "var(--foreground)" }}>October 3, 2026</strong> with the{" "}
          <strong style={{ color: "var(--foreground)" }}>Fall Finale</strong> update (the third part of the Fall
          Market Event 2026). Unlike most Divine pets it is not hatched from an egg — it is won as a rare
          RNG reward from the <strong style={{ color: "var(--foreground)" }}>Shady Scarecrow NPC</strong>. Its
          passive, <strong style={{ color: "var(--foreground)" }}>Farewell Crows</strong>, permanently sacrifices
          a Crow pet every 18 minutes 31 seconds to age a random pet by one level, making it a pet-leveling
          engine rather than a crop multiplier.
        </p>

        {/* Overview stats */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-6">
          {overviewStats.map((s) => (
            <div key={s.label} className="p-4 rounded-xl" style={{ background: "var(--surface-1)", border: "1px solid var(--glass-border)" }}>
              <div className="text-xs font-bold mb-1" style={{ color: "var(--muted)" }}>{s.label}</div>
              <div className="text-sm font-bold" style={{ color: "var(--foreground)" }}>{s.value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* What is it */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
          What is the Scarecrow pet in Grow A Garden?
        </h2>
        <div className="space-y-4 text-base leading-relaxed" style={{ color: "var(--muted)" }}>
          <p>
            The Scarecrow arrived with the <strong style={{ color: "var(--foreground)" }}>Fall Finale</strong>{" "}
            update on October 3, 2026 — described in the official patch notes as another major expansion to the
            Fall Market. It launched alongside the <strong style={{ color: "var(--foreground)" }}>Scarf Crow</strong>{" "}
            pet, the <strong style={{ color: "var(--foreground)" }}>Maple Melt</strong> and{" "}
            <strong style={{ color: "var(--foreground)" }}>Rosy Root</strong> plants, a Fall Market Collection
            tracker, and the travelling Harvest Moon merchant.
          </p>
          <p>
            What makes the Scarecrow unusual for a Divine pet is its role: it does not boost crop values at all.
            Farewell Crows is a pure <strong style={{ color: "var(--foreground)" }}>pet-aging utility</strong> —
            it converts a renewable resource (Crow pets, farmable during the Halloween Ghoul Garden event) into
            steady levels on your most valuable pets. There is no ×N.N multiplier to list, because none exists
            by design.
          </p>
        </div>
      </section>

      {/* How to get */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
          How do you get the Scarecrow?
        </h2>
        <div className="space-y-4 text-base leading-relaxed" style={{ color: "var(--muted)" }}>
          <p>
            Find the <strong style={{ color: "var(--foreground)" }}>Shady Scarecrow NPC</strong> and submit almost
            any seed from your inventory. He consumes the seed, plants it in the patch beside him, and spits out{" "}
            <strong style={{ color: "var(--foreground)" }}>one random reward</strong>. Your seed&apos;s rarity sets a{" "}
            <strong style={{ color: "var(--foreground)" }}>Seed Score</strong> — rarer seeds mean better odds — and
            seed variants can push the effective score above the base table maximum.
          </p>
          <p>
            The painful truth: the Scarecrow is one of the two rarest rewards in his pool (the other is the{" "}
            <strong style={{ color: "var(--foreground)" }}>Maple Melt</strong> seed). There is no pity threshold —
            every submission is an independent RNG roll. Budget your seeds accordingly, and submit your rarest
            seeds for the best chances:
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 mt-6">
          <div>
            <h3 className="text-lg font-bold mb-3" style={{ color: "var(--foreground)" }}>Seed Score by rarity</h3>
            <div className="rounded-xl overflow-hidden" style={{ border: "1px solid var(--glass-border)" }}>
              {seedScores.map((row, i) => (
                <div
                  key={row.rarity}
                  className="flex justify-between px-4 py-2 text-sm"
                  style={{ background: i % 2 ? "var(--surface-1)" : "transparent" }}
                >
                  <span style={{ color: "var(--muted)" }}>{row.rarity}</span>
                  <span className="font-bold" style={{ color: "var(--foreground)" }}>{row.score}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-3" style={{ color: "var(--foreground)" }}>Scarecrow chance by score</h3>
            <div className="rounded-xl overflow-hidden" style={{ border: "1px solid var(--glass-border)" }}>
              {chanceTable.map((row, i) => (
                <div
                  key={row.score}
                  className="flex justify-between px-4 py-2 text-sm"
                  style={{ background: i % 2 ? "var(--surface-1)" : "transparent" }}
                >
                  <span style={{ color: "var(--muted)" }}>Score {row.score}</span>
                  <span className="font-bold" style={{ color: "#FBBF24" }}>{row.chance}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <p className="text-sm mt-4" style={{ color: "var(--muted)" }}>
          Chances are the in-game listed rates per submission. Scores 9–10 exceed the base rarity table and are
          reachable through seed variants.
        </p>
      </section>

      {/* Ability */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
          What does Farewell Crows do?
        </h2>
        <div className="space-y-4 text-base leading-relaxed" style={{ color: "var(--muted)" }}>
          <p>
            Every <strong style={{ color: "var(--foreground)" }}>18 minutes and 31 seconds</strong>, the Scarecrow{" "}
            <strong style={{ color: "var(--foreground)" }}>permanently removes one Crow pet</strong> from your garden —
            the Crow is scared away and does not return — and in exchange{" "}
            <strong style={{ color: "var(--foreground)" }}>ages a random pet by 1 level</strong>.
          </p>
          <p>
            The strategic read: this is a <strong style={{ color: "var(--foreground)" }}>Crow-to-levels converter</strong>.
            If you farm Crows cheaply during the Ghoul Garden Halloween event, the Scarecrow turns that surplus into
            roughly three bonus pet levels per hour on pets that are expensive to age any other way. The cost is real,
            though — each cycle eats a Crow forever, so running it around the clock demands a steady Crow pipeline.
            Without a Crow in your garden, the cycle simply has nothing to sacrifice and the aging effect cannot trigger.
          </p>
        </div>
      </section>

      {/* Worth it */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
          Is the Scarecrow worth grinding for?
        </h2>
        <div className="space-y-4 text-base leading-relaxed" style={{ color: "var(--muted)" }}>
          <p>
            It depends on your pet roster. If you own high-value pets whose levels drive your farm&apos;s output —
            and you can keep Crows coming — the Scarecrow is one of the only repeatable pet-aging engines in the
            game, and Divine pets with unique utilities tend to hold trade interest. If your roster is thin or you
            cannot farm Crows, the sub-10% RNG grind at the Shady Scarecrow is a steep price for a pet you cannot
            fully use.
          </p>
          <p>
            A note on value: as of mid-October 2026, <strong style={{ color: "var(--foreground)" }}>no 2026-dated
            source has published a coin or trade value</strong> for the Scarecrow — the pet is less than two weeks
            old and community value lists have not caught up. We will update this page when verified figures appear
            rather than guessing.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
          Scarecrow FAQ
        </h2>
        <div className="space-y-4">
          {faqs.map((f) => (
            <div key={f.q} className="glass-card-static p-5">
              <h3 className="text-base font-bold mb-2" style={{ color: "var(--foreground)" }}>{f.q}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Related */}
      <section className="mb-6">
        <h2 className="text-xl font-bold mb-5" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
          Related guides
        </h2>
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { href: "/pet-calculator", title: "Pet Calculator", desc: "Value any pet by age and weight" },
            { href: "/ghoul-garden-halloween-event", title: "Ghoul Garden Halloween Event", desc: "Farm Crow pets for Farewell Crows" },
            { href: "/fairy-update", title: "Fairy Update", desc: "Latest event pets and rewards" },
          ].map((c) => (
            <Link key={c.href} href={c.href} className="glass-card-static p-5 hover:border-[var(--primary)] transition-colors">
              <div className="font-bold mb-1" style={{ color: "var(--foreground)" }}>{c.title}</div>
              <div className="text-sm" style={{ color: "var(--muted)" }}>{c.desc}</div>
            </Link>
          ))}
        </div>
      </section>

      <p className="text-xs mt-8" style={{ color: "var(--muted)" }}>
        Stats verified against 2026-dated sources (official Fall Finale patch notes via Discord, October 4 2026;
        Sportskeeda and Deltia&apos;s Gaming guides, October 2026). Coin and trade values are not yet documented
        for this pet and are intentionally left blank rather than estimated.
      </p>
    </div>
  );
}
