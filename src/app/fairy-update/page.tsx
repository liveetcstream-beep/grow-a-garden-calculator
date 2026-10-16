import type { Metadata } from "next";
import Link from "next/link";

const pageTitle = "Grow A Garden Fairy Update: Pets, Chests & Rewards";
const pageDesc =
  "Fairy Update guide for Grow A Garden: Manticore, Red Cap & Wolpertinger pets, Fairy Chest odds, Wishing Well tiers, and how to get every reward.";
const pageUrl = "https://growagardencalcs.com/fairy-update";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDesc,
  keywords: [
    "grow a garden fairy update",
    "grow a garden fairy event",
    "fairy update pets grow a garden",
    "manticore grow a garden",
    "red cap grow a garden",
    "wolpertinger grow a garden",
    "fairy chest grow a garden",
    "wishing well grow a garden",
    "how to get manticore gag",
  ],
  alternates: { canonical: "/fairy-update" },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDesc,
    url: pageUrl,
    siteName: "Grow A Garden Calculator",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "GAG Fairy Update Guide" }],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDesc,
    images: ["/og-image.png"],
  },
};

// FAQ data
const faqs = [
  {
    q: "What pets were added in the Grow A Garden Fairy Update?",
    a: "The Fairy Update (launched October 10, 2026) added three new pets: Manticore (Divine), Red Cap (Legendary), and Wolpertinger. All three are obtained from Fairy Chests earned through Fairy Favor quests at the Wishing Well.",
  },
  {
    q: "How do you get a Fairy Chest in Grow A Garden?",
    a: "Complete Fairy Favor quests at the Wishing Well during the Fairy Event. Each favor asks you to submit crops carrying the Glimmering mutation. There are five reward tiers — higher tiers give better rewards and a better chance at a Fairy Chest. You can repeat the questline for 7,500 Fairy Points.",
  },
  {
    q: "What is the Manticore drop chance in Grow A Garden?",
    a: "Manticore has a reported 0.5% drop chance from Fairy Chests, making it the rarest of the three Fairy Update pets. Its Beast of Omen passive consumes a fruit with 8+ mutations roughly every 30 minutes and chains 20% rolls that can apply the Toxic mutation, grant 12,000 XP, or refresh a pet ability.",
  },
  {
    q: "What does Red Cap do in Grow A Garden?",
    a: "Red Cap's passive activates approximately every 19 minutes: it either reduces one of your pet's levels by 1 to cut a random egg's hatch time by about 21 minutes, or does the reverse. It also gains 12% of its current level's XP per activation. Testing reportedly showed that Mimic copying Red Cap's ability can help age pets, though players note this interaction may be unintended.",
  },
  {
    q: "What does Wolpertinger do in Grow A Garden?",
    a: "Wolpertinger is a plant-growth pet. Its passive activates approximately every 9.5 minutes and advances a random plant's growth by roughly 20 seconds for each magical plant in your garden. It suits garden-production builds more than pet leveling or mutation farming. (Timings are approximate, based on player testing.)",
  },
  {
    q: "How do you get the Glimmering mutation in Grow A Garden?",
    a: "Fairies arrive roughly every hour to bless your garden with the Glimmering mutation. Collect Glimmering fruits and submit them to the Wishing Well to complete Fairy Favor quests and earn Fairy Chest rolls.",
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
    {
      "@type": "ListItem",
      position: 2,
      name: "Fairy Update Guide",
      item: "https://growagardencalcs.com/fairy-update",
    },
  ],
};

const PET_CARDS = [
  {
    href: "/pet/manticore-stats",
    emoji: "🦁",
    name: "Manticore",
    rarity: "Divine",
    color: "#f472b6",
    blurb:
      "The chase pet of the update — reported 0.5% Fairy Chest drop. Beast of Omen chains 20% rolls for Toxic mutations, XP, and ability refreshes.",
  },
  {
    href: "/pet/red-cap-stats",
    emoji: "🍄",
    name: "Red Cap",
    rarity: "Legendary",
    color: "#f59e0b",
    blurb:
      "The most interesting pet of the three: trades pet levels for faster egg hatches (~19 min cycle), with a reported Mimic-copy aging interaction.",
  },
  {
    href: "/pet/wolpertinger-stats",
    emoji: "🐾",
    name: "Wolpertinger",
    rarity: "Event",
    color: "#34d399",
    blurb:
      "Plant-growth specialist — advances random plant growth roughly every 9.5 minutes, scaling with magical plants in your garden.",
  },
];

export default function FairyUpdatePage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
      {/* Schemas */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs mb-6" style={{ color: "var(--muted)" }}>
        <Link href="/" className="hover:text-[var(--primary)] transition-colors">Home</Link>
        <span>/</span>
        <span style={{ color: "var(--foreground)" }}>Fairy Update</span>
      </nav>

      {/* Hero Header */}
      <div className="glass-card-static p-8 mb-10 text-center">
        <div className="text-5xl mb-4">🧚</div>
        <h1 className="text-3xl sm:text-5xl font-black mb-4" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
          Grow A Garden{" "}
          <span style={{ background: "var(--gradient-1)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            Fairy Update Guide
          </span>
        </h1>
        <p className="text-sm sm:text-base max-w-3xl mx-auto leading-relaxed mb-6" style={{ color: "var(--muted)" }}>
          Everything in the <strong>Fairy Update</strong> (launched October 10, 2026): the three new pets —
          <strong> Manticore</strong>, <strong>Red Cap</strong>, and <strong>Wolpertinger</strong> — how Fairy Chests
          work, Wishing Well reward tiers, and the fastest way to earn every reward.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link href="#pets" className="px-5 py-2.5 rounded-xl text-sm font-bold transition-all hover:scale-105" style={{ background: "var(--primary)", color: "#0a0e17" }}>
            🐾 The 3 New Pets
          </Link>
          <Link href="#chests" className="px-5 py-2.5 rounded-xl text-sm font-bold transition-all hover:scale-105" style={{ background: "var(--surface-1)", border: "1px solid var(--glass-border)", color: "var(--foreground)" }}>
            🎁 Fairy Chests
          </Link>
          <Link href="/pet-calculator" className="px-5 py-2.5 rounded-xl text-sm font-bold transition-all hover:scale-105" style={{ background: "var(--surface-1)", border: "1px solid var(--glass-border)", color: "var(--foreground)" }}>
            🧮 Pet Calculator
          </Link>
        </div>
      </div>

      {/* Pets */}
      <section id="pets" className="mb-12">
        <div className="glass-card-static p-6 sm:p-8">
          <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
            🐾 All 3 Fairy Update Pets
          </h2>
          <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--muted)" }}>
            Each pet fills a different role: Manticore is the mutation/XP chaser, Red Cap is the egg-hatching
            and pet-progression pick (especially with Mimic), and Wolpertinger boosts raw garden production.
            Tap any card for its full stats page and value calculator.
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            {PET_CARDS.map((pet) => (
              <Link key={pet.href} href={pet.href}
                className="p-5 rounded-2xl transition-all hover:scale-[1.03] flex flex-col gap-2"
                style={{ background: "var(--surface-1)", border: "1px solid var(--glass-border)" }}>
                <div className="flex items-center gap-3">
                  <span className="text-4xl">{pet.emoji}</span>
                  <div>
                    <div className="text-lg font-black" style={{ color: "var(--foreground)" }}>{pet.name}</div>
                    <div className="text-xs font-bold" style={{ color: pet.color }}>{pet.rarity}</div>
                  </div>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>{pet.blurb}</p>
                <span className="text-xs font-bold mt-1" style={{ color: "var(--primary)" }}>View stats & value →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Fairy Chests */}
      <section id="chests" className="mb-12">
        <div className="glass-card-static p-6 sm:p-8">
          <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
            🎁 How to Get Fairy Chests
          </h2>
          <div className="text-sm leading-relaxed space-y-3" style={{ color: "var(--muted)" }}>
            <p>
              Fairy Chests are earned through <strong>Fairy Favor quests at the Wishing Well</strong>. Each favor
              asks you to submit crops carrying the <strong>Glimmering mutation</strong> — fairies arrive roughly
              every hour to bless your garden with it, so keep Glimmering fruits banked.
            </p>
            <p>
              There are <strong>five reward tiers</strong>. Completing a favor lets you pick one of three rewards
              from the current tier's pool. Higher tiers offer better rewards and a better shot at a Fairy Chest —
              reported chest appearance rates run from roughly 7.7% at Tier 2 up to about 27% at Tier 5
              (player-reported figures, treat as approximate).
            </p>
            <p>
              Each Fairy Chest contains 3 possible seeds and 3 possible pets. Finished the questline? You can run
              it again for <strong>7,500 Fairy Points</strong>. Pets also show up in the Trade World, but launch-week
              prices are usually inflated — farm your own chests first.
            </p>
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="mb-12">
        <div className="glass-card-static p-6 sm:p-8">
          <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
            💡 Fairy Update Tips
          </h2>
          <ul className="text-sm leading-relaxed space-y-2 list-disc pl-5" style={{ color: "var(--muted)" }}>
            <li>Bank high-rarity Glimmering crops (Beanstalk, Ember Lily, Sugar Apple) to clear Tier 5 favors fast.</li>
            <li>Chasing Manticore? Budget for a long grind — a reported 0.5% drop rate means hundreds of chests on average.</li>
            <li>Got Mimic? Test Red Cap + Mimic yourself before investing — the aging interaction is player-reported and may be unintended.</li>
            <li>Don't feed Manticore a fruit you'd miss: Beast of Omen consumes a fruit with 8+ mutations every activation.</li>
            <li>Wolpertinger scales with magical plants — the more you have, the more each ~9.5-minute activation is worth.</li>
          </ul>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
          ❓ Frequently Asked Questions — Fairy Update
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="glass-card-static p-5">
              <h3 className="text-base font-bold mb-2" style={{ color: "var(--foreground)" }}>
                {faq.q}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Internal Links Footer Hub */}
      <section className="mb-8">
        <div className="glass-card-static p-6">
          <h2 className="text-xl font-bold mb-5" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
            🔧 More GAG Tools
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {[
              { href: "/", label: "🌱 GAG Calculator", desc: "Crop value calculator" },
              { href: "/pet-calculator", label: "🐾 Pet Calculator", desc: "Pet value & weight" },
              { href: "/pet/manticore-stats", label: "🦁 Manticore Stats", desc: "Divine Fairy pet" },
              { href: "/pet/red-cap-stats", label: "🍄 Red Cap Stats", desc: "Legendary Fairy pet" },
              { href: "/pet/wolpertinger-stats", label: "🐾 Wolpertinger Stats", desc: "Growth Fairy pet" },
              { href: "/ghoul-garden-halloween-event", label: "🎃 Ghoul Garden", desc: "Halloween event guide" },
              { href: "/mutation-guide", label: "🧬 Mutation Guide", desc: "All mutations & multipliers" },
              { href: "/value-list", label: "💰 GAG Values List", desc: "All crop base prices" },
            ].map((link) => (
              <Link key={link.href} href={link.href}
                className="p-3 rounded-xl transition-all hover:scale-105 flex flex-col gap-1"
                style={{ background: "var(--surface-1)", border: "1px solid var(--glass-border)" }}>
                <span className="text-sm font-bold" style={{ color: "var(--foreground)" }}>{link.label}</span>
                <span className="text-xs" style={{ color: "var(--muted)" }}>{link.desc}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
