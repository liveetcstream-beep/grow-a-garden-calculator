import type { Metadata } from "next";
import Link from "next/link";

const pageTitle = "Grow A Garden Ghoul Garden Halloween Event Guide";
const pageDesc =
  "Ghoul Garden Halloween event guide (Oct 11–25): Candy Corn farming, Witch's Cauldron, event pets, seeds, shops, and rewards in Grow A Garden.";
const pageUrl = "https://growagardencalcs.com/ghoul-garden-halloween-event";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDesc,
  keywords: [
    "grow a garden ghoul garden",
    "grow a garden halloween event",
    "ghoul garden event guide",
    "candy corn grow a garden",
    "witch's cauldron grow a garden",
    "headless horseman grow a garden",
    "great pumpkin grow a garden",
    "ghoul root grow a garden",
    "spooky egg grow a garden",
  ],
  alternates: { canonical: "/ghoul-garden-halloween-event" },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDesc,
    url: pageUrl,
    siteName: "Grow A Garden Calculator",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "GAG Ghoul Garden Halloween Guide" }],
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
    q: "When is the Grow A Garden Ghoul Garden Halloween event?",
    a: "The Ghoul Garden Halloween event runs from October 11 to October 25, 2026, as a single phase. Note: \u201cGhoul Garden 2\u201d was the 2025 second-week expansion (October 18\u201325, 2025) \u2014 no second phase has been announced for the 2026 event.",
  },
  {
    q: "How do you get Candy Corn in Grow A Garden?",
    a: "Candy Corn is the Ghoul Garden event currency. Earn it by contributing fruits to the Witch's Cauldron (10–100+ per fill, top contributors earn bonuses) and by submitting Halloween plants to the Jack-O-Lantern NPC, which spawns every 2 hours.",
  },
  {
    q: "What is the Witch's Cauldron in Grow A Garden?",
    a: "The Witch's Cauldron is the Ghoul Garden's community mechanic: fill it with plants to earn Candy Corn and rewards. Saving rare, high-value plants for cauldron fills earns significantly more Candy Corn than using common plants. There is a short cooldown after each fill.",
  },
  {
    q: "What pets are in the Ghoul Garden Halloween event?",
    a: "Key event pets include Headless Horseman, Spider, Reaper, and Bone Dog. More are available from the Creepy Critters pet shop (Spooky Egg hatches, Pumpkin Rat) and from grave digging. The 2025 phase-2 pets (Goat, Goblin, Dark Spriggan, Hex Serpent) are not confirmed for the 2026 event.",
  },
  {
    q: "What seeds are in the Ghoul Garden Halloween event?",
    a: "Premium event seeds include Jack-O-Lantern, Great Pumpkin, and Ghoul Root. The Spooky Seeds shop also stocks Bloodred Mushroom, Chicken Feed, Seer Vine, and Poison Apple \u2014 all bought with Candy Corn. The Great Pumpkin can grant the Ghostly mutation.",
  },
  {
    q: "What is the Halloween Market in Grow A Garden?",
    a: "The Halloween Market appears hourly for 15 minutes during the Ghoul Garden event and hosts four shops: Spooky Seeds, Creepy Critters (pets), Devilish Decor, and Ghostly Gadgets. Spend Candy Corn here on limited-time seeds, pets, and cosmetics before the event ends on October 25.",
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
      name: "Ghoul Garden Halloween Event Guide",
      item: "https://growagardencalcs.com/ghoul-garden-halloween-event",
    },
  ],
};

const SEED_ROWS = [
  { name: "Bloodred Mushroom", rarity: "Uncommon", cost: "15", color: "#9CA3AF" },
  { name: "Pumpkin", rarity: "Common", cost: "8", color: "#9CA3AF" },
  { name: "Jack-O-Lantern", rarity: "Rare", cost: "24", color: "#3b82f6" },
  { name: "Candy Cornflower", rarity: "Rare", cost: "30", color: "#3b82f6" },
  { name: "Ghoul Root", rarity: "Legendary", cost: "40", color: "#a855f7" },
  { name: "Chicken Feed", rarity: "Mythical", cost: "65", color: "#f59e0b" },
  { name: "Seer Vine", rarity: "Divine", cost: "90", color: "#f472b6" },
  { name: "Poison Apple", rarity: "Prismatic", cost: "140", color: "#DA70D6" },
  { name: "Great Pumpkin", rarity: "Transcendent", cost: "Seed Stall", color: "#DA70D6" },
];

const PET_ROWS = [
  { name: "Headless Horseman", note: "Headline event pet" },
  { name: "Spider", note: "Event pet" },
  { name: "Reaper", note: "Divine — 140 Candy Corn at Creepy Critters" },
  { name: "Bone Dog", note: "Event pet" },
  { name: "Spooky Egg", note: "Legendary egg — 30 Candy Corn" },
  { name: "Ghost Bear", note: "Rare — helps get the Spooky mutation" },
  { name: "Dark Spriggan", note: "Mythical — 120 Candy Corn" },
  { name: "Pumpkin Rat / Goat / Wolf", note: "Common–Legendary shop pets" },
];

export default function GhoulGardenPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
      {/* Schemas */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs mb-6" style={{ color: "var(--muted)" }}>
        <Link href="/" className="hover:text-[var(--primary)] transition-colors">Home</Link>
        <span>/</span>
        <span style={{ color: "var(--foreground)" }}>Ghoul Garden Halloween Event</span>
      </nav>

      {/* Hero Header */}
      <div className="glass-card-static p-8 mb-10 text-center">
        <div className="text-5xl mb-4">🎃</div>
        <h1 className="text-3xl sm:text-5xl font-black mb-4" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
          Grow A Garden{" "}
          <span style={{ background: "var(--gradient-1)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            Ghoul Garden Halloween Event
          </span>
        </h1>
        <p className="text-sm sm:text-base max-w-3xl mx-auto leading-relaxed mb-6" style={{ color: "var(--muted)" }}>
          The complete <strong>Ghoul Garden Halloween event</strong> guide (<strong>October 11–25, 2026</strong>):
          Candy Corn farming, the Witch's Cauldron, event pets and seeds, Halloween Market shops, and every
          limited-time reward — before it all disappears.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link href="#candy-corn" className="px-5 py-2.5 rounded-xl text-sm font-bold transition-all hover:scale-105" style={{ background: "var(--primary)", color: "#0a0e17" }}>
            🍬 Candy Corn Guide
          </Link>
          <Link href="#pets" className="px-5 py-2.5 rounded-xl text-sm font-bold transition-all hover:scale-105" style={{ background: "var(--surface-1)", border: "1px solid var(--glass-border)", color: "var(--foreground)" }}>
            👻 Event Pets
          </Link>
          <Link href="#seeds" className="px-5 py-2.5 rounded-xl text-sm font-bold transition-all hover:scale-105" style={{ background: "var(--surface-1)", border: "1px solid var(--glass-border)", color: "var(--foreground)" }}>
            🌱 Event Seeds
          </Link>
        </div>
      </div>

      {/* Event overview */}
      <section className="mb-12">
        <div className="glass-card-static p-6 sm:p-8">
          <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
            🗓️ Event Overview
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3 text-sm">
            {[
              { label: "Dates", value: "Oct 11 – Oct 25, 2026" },
              { label: "Currency", value: "🍬 Candy Corn" },
              { label: "Location", value: "Ghoul Garden (map center)" },
              { label: "Phases", value: "Single phase (Oct 11–25)" },
            ].map((s) => (
              <div key={s.label} className="p-4 rounded-xl" style={{ background: "var(--surface-1)", border: "1px solid var(--glass-border)" }}>
                <div className="text-xs font-bold mb-1" style={{ color: "var(--muted)" }}>{s.label}</div>
                <div className="font-black" style={{ color: "var(--foreground)" }}>{s.value}</div>
              </div>
            ))}
          </div>
          <p className="text-sm leading-relaxed mt-4" style={{ color: "var(--muted)" }}>
            The Halloween Market appears <strong>hourly for 15 minutes</strong> with four shops: Spooky Seeds,
            Creepy Critters, Devilish Decor, and Ghostly Gadgets. The Jack-O-Lantern NPC spawns every 2 hours
            and accepts Halloween plants for Candy Corn. Grave digging (up to 10 digs, every 2 hours) and
            Dead Tree quests (every 8 hours) round out the activities.
          </p>
        </div>
      </section>

      {/* Candy Corn */}
      <section id="candy-corn" className="mb-12">
        <div className="glass-card-static p-6 sm:p-8">
          <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
            🍬 How to Farm Candy Corn
          </h2>
          <div className="text-sm leading-relaxed space-y-3" style={{ color: "var(--muted)" }}>
            <p>
              <strong>Witch's Cauldron</strong> is your main income: fill it with plants to earn Candy Corn and
              rewards, with a short cooldown after each fill. <strong>Save your rarest plants for the cauldron</strong> —
              rare plants earn significantly more Candy Corn than commons, and top contributors get bonus rewards.
            </p>
            <p>
              The <strong>Jack-O-Lantern NPC</strong> spawns every 2 hours for a few minutes and pays Candy Corn
              for Halloween plants. The <strong>Ghost Bear</strong> pet helps you get the Spooky mutation on crops,
              which the Jack-O-Lantern accepts for extra rewards.
            </p>
          </div>
        </div>
      </section>

      {/* Pets */}
      <section id="pets" className="mb-12">
        <div className="glass-card-static p-6 sm:p-8">
          <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
            👻 Event Pets
          </h2>
          <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--muted)" }}>
            Nine Halloween-themed pets are available during the event, led by <strong>Headless Horseman</strong>,
            <strong> Spider</strong>, <strong>Reaper</strong>, and <strong>Bone Dog</strong>. Most come from the
            Creepy Critters shop or Spooky Eggs bought with Candy Corn.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {PET_ROWS.map((p) => (
              <div key={p.name} className="p-4 rounded-xl" style={{ background: "var(--surface-1)", border: "1px solid var(--glass-border)" }}>
                <div className="text-sm font-black mb-1" style={{ color: "var(--foreground)" }}>{p.name}</div>
                <div className="text-xs" style={{ color: "var(--muted)" }}>{p.note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seeds */}
      <section id="seeds" className="mb-12">
        <div className="glass-card-static p-6 sm:p-8">
          <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
            🌱 Event Seeds
          </h2>
          <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--muted)" }}>
            The <strong>Spooky Seeds shop</strong> (Halloween Market, hourly) sells Halloween seeds for Candy Corn.
            Premium picks: <strong>Jack-O-Lantern</strong>, <strong>Great Pumpkin</strong> (grants the Ghostly
            mutation), and <strong>Ghoul Root</strong>.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-xs" style={{ color: "var(--muted)" }}>
                  <th className="pb-2 pr-4">Seed</th>
                  <th className="pb-2 pr-4">Rarity</th>
                  <th className="pb-2">Candy Corn</th>
                </tr>
              </thead>
              <tbody>
                {SEED_ROWS.map((s) => (
                  <tr key={s.name} className="border-t" style={{ borderColor: "var(--glass-border)" }}>
                    <td className="py-2 pr-4 font-bold" style={{ color: "var(--foreground)" }}>{s.name}</td>
                    <td className="py-2 pr-4 font-bold" style={{ color: s.color }}>{s.rarity}</td>
                    <td className="py-2" style={{ color: "var(--muted)" }}>{s.cost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs mt-3" style={{ color: "var(--muted)" }}>
            Prices and rarities as reported by event guides; shop stock rotates hourly.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
          ❓ Frequently Asked Questions — Ghoul Garden
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
              { href: "/fairy-update", label: "🧚 Fairy Update", desc: "New pets & chests" },
              { href: "/pet-calculator", label: "🐾 Pet Calculator", desc: "Pet value & weight" },
              { href: "/value-list", label: "💰 GAG Values List", desc: "All crop base prices" },
              { href: "/mutation-guide", label: "🧬 Mutation Guide", desc: "All mutations & multipliers" },
              { href: "/seed-profit", label: "📈 Seed ROI", desc: "Seed profit calculator" },
              { href: "/trade-calculator", label: "🤝 Trade Calculator", desc: "Win/Fair/Lose checker" },
              { href: "/xp-calculator", label: "⭐ XP Calculator", desc: "Experience tracker" },
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
