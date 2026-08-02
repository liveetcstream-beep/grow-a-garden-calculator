import type { Metadata } from "next";
import Link from "next/link";
import { MUTATIONS } from "@/data/mutations";

const pageTitle = "Complete GAG Mutation Guide 2026 | How to Get Every Grow A Garden Mutation";
const pageDesc = "Complete Grow A Garden mutations guide — all 170+ mutations listed with multipliers, how to get each one, Fractured mutation guide, Aurora mutation triggers, and tier-sorted GAG mutation list.";
const pageUrl = "https://growagardencalcs.com/mutation-guide";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDesc,
  keywords: [
    "grow a garden mutations",
    "gag mutation guide",
    "fractured mutation grow a garden",
    "aurora mutation grow a garden",
    "how to get golden mutation grow a garden",
    "sheep mutation grow a garden",
    "mutation calculator grow a garden",
    "gag mutations list",
    "how to get mutations gag",
    "grow a garden mutation multipliers",
  ],
  alternates: { canonical: "/mutation-guide" },
  openGraph: {
    title: pageTitle,
    description: pageDesc,
    url: pageUrl,
    siteName: "Grow A Garden Calculator",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "GAG Mutation Guide" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDesc,
    images: ["/og-image.png"],
  },
};

// Sort mutations into tiers by multiplier
const TIERS = {
  "Common (×1–×5)": MUTATIONS.filter((m) => m.multiplier >= 1 && m.multiplier <= 5),
  "Uncommon (×6–×19)": MUTATIONS.filter((m) => m.multiplier >= 6 && m.multiplier <= 19),
  "Rare (×20–×49)": MUTATIONS.filter((m) => m.multiplier >= 20 && m.multiplier <= 49),
  "Legendary (×50–×99)": MUTATIONS.filter((m) => m.multiplier >= 50 && m.multiplier <= 99),
  "Mythic (×100–×199)": MUTATIONS.filter((m) => m.multiplier >= 100 && m.multiplier <= 199),
  "Astral / Cosmic (×200+)": MUTATIONS.filter((m) => m.multiplier >= 200),
};

const TIER_COLORS: Record<string, string> = {
  "Common (×1–×5)": "#9CA3AF",
  "Uncommon (×6–×19)": "#22c55e",
  "Rare (×20–×49)": "#3b82f6",
  "Legendary (×50–×99)": "#a855f7",
  "Mythic (×100–×199)": "#f59e0b",
  "Astral / Cosmic (×200+)": "#DA70D6",
};

const TIER_GLOW: Record<string, string> = {
  "Common (×1–×5)": "rgba(156,163,175,0.08)",
  "Uncommon (×6–×19)": "rgba(34,197,94,0.08)",
  "Rare (×20–×49)": "rgba(59,130,246,0.08)",
  "Legendary (×50–×99)": "rgba(168,85,247,0.1)",
  "Mythic (×100–×199)": "rgba(245,158,11,0.1)",
  "Astral / Cosmic (×200+)": "rgba(218,112,214,0.12)",
};

// Specific mutations for deep guide sections
const fracturedMutation = MUTATIONS.find((m) => m.id === "fractured");
const auroraMutation = MUTATIONS.find((m) => m.id === "aurora");
const astralMutation = MUTATIONS.find((m) => m.id === "astral");
const goldSparkleMutation = MUTATIONS.find((m) => m.id === "goldsparkle");

// FAQ data
const faqs = [
  {
    q: "Can mutations stack in Grow A Garden?",
    a: "Yes! Mutations in Grow A Garden stack multiplicatively, not additively. For example, if you have a Golden (×20) and Rainbow (×50) mutation on the same crop, the total multiplier is 20 × 50 = 1,000x your base value. Stack as many as possible for maximum coin earnings.",
  },
  {
    q: "What is the highest multiplier mutation in GAG?",
    a: "As of 2026, Goldsparkle (×500) is the single highest multiplier mutation available in Grow A Garden. It is extremely rare and obtained through the Goldfinch pet mutation. The Astral mutation (×365) is the highest achievable through the Cosmic + Galactic combo chain.",
  },
  {
    q: "How do I get the Rainbow mutation in Grow A Garden?",
    a: "The Rainbow mutation (×50) is obtained when a fruit naturally grows, through a butterfly event, or by applying Rainbow Fertilizer spray to your crops. It is one of the most common high-tier mutations and a reliable way to multiply crop values.",
  },
  {
    q: "How do I get the Fractured mutation in Grow A Garden?",
    a: "The Fractured mutation (×92) is obtained by combining the Glitched mutation and the Plasma mutation on the same crop. First, get Glitched during the Jhai admin event, then apply Plasma from the Admin Laser event. When both are present, the game combines them into Fractured.",
  },
  {
    q: "What is the Aurora mutation and how do I trigger it?",
    a: "Aurora (×90) is a high-tier Environmental mutation triggered during the Aurora Borealis weather event in Grow A Garden. When the northern lights appear in the sky, any crops growing at that time have a chance to receive the Aurora mutation. It cannot be applied with a spray — you must grow crops naturally during the event.",
  },
  {
    q: "What is the difference between Combo and Single mutations?",
    a: "Single mutations are applied directly by one source (weather, pet, spray). Combo mutations are created by combining two specific single mutations — for example, Wet + Chilled = Frozen (×10), or Flaming + Molten = Blazing (×52). Combo mutations always have higher multipliers.",
  },
  {
    q: "What is the Sheep mutation in Grow A Garden?",
    a: "The Sheep mutation is applied by the Sheep pet passive ability in Grow A Garden. It is a pet-specific mutation that grants a bonus multiplier to crops that the Sheep interacts with. Its exact multiplier depends on the Sheep pet's rarity and age level.",
  },
  {
    q: "How does the Astral mutation work?",
    a: `Astral (×${astralMutation?.multiplier ?? 365}) is the top of the Cosmic chain: Celestial + Aurora = Cosmic (×240), then Cosmic + Galactic = Astral (×365). Each step requires the previous mutations to be present simultaneously during specific admin or rare weather events.`,
  },
];

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Get Mutations in Grow A Garden",
  description:
    "Step-by-step guide to triggering mutations on your crops in Grow A Garden (GAG) for maximum coin multipliers.",
  totalTime: "PT10M",
  step: [
    {
      "@type": "HowToStep",
      name: "Choose Your Target Mutation",
      text: "Identify which mutation you want. Check the trigger condition — weather event, pet ability, spray, or combo. Plan your crops accordingly.",
    },
    {
      "@type": "HowToStep",
      name: "Plant During the Correct Weather Event",
      text: "Most high-tier mutations require a specific weather event to be active. For example, Aurora requires Aurora Borealis weather, Celestial requires Meteor Shower, and Moonlit requires Night Event.",
    },
    {
      "@type": "HowToStep",
      name: "Apply Mutation Spray (if applicable)",
      text: "Some mutations can be applied using sprays from the shop. Golden spray gives Golden mutation, Rainbow spray gives Rainbow, etc. Apply the spray to your growing crop before harvest.",
    },
    {
      "@type": "HowToStep",
      name: "Use the Correct Pet (if applicable)",
      text: "Many mutations are only available through specific pet passive abilities. For example, Arctic requires the Penguin pet, Glacial requires the Frost Dragon, and Graceful requires the Swan pet.",
    },
    {
      "@type": "HowToStep",
      name: "Harvest at the Right Time",
      text: "Some combo mutations require multiple conditions simultaneously before harvesting. Make sure all required mutations are applied before you harvest your crop to get the combined mutation.",
    },
  ],
};

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
      name: "Mutation Guide",
      item: "https://growagardencalcs.com/mutation-guide",
    },
  ],
};

export default function MutationGuidePage() {
  const sortedAll = [...MUTATIONS].sort((a, b) => b.multiplier - a.multiplier);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
      {/* Schemas */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs mb-6" style={{ color: "var(--muted)" }}>
        <Link href="/" className="hover:text-[var(--primary)] transition-colors">Home</Link>
        <span>/</span>
        <Link href="/mutation-calculator" className="hover:text-[var(--primary)] transition-colors">Mutations</Link>
        <span>/</span>
        <span style={{ color: "var(--foreground)" }}>Mutation Guide</span>
      </nav>

      {/* Hero Header */}
      <div className="glass-card-static p-8 mb-10 text-center">
        <div className="text-5xl mb-4">🧬</div>
        <h1 className="text-3xl sm:text-5xl font-black mb-4" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
          Grow A Garden{" "}
          <span style={{ background: "var(--gradient-1)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            Mutations Guide
          </span>
        </h1>
        <p className="text-sm sm:text-base max-w-3xl mx-auto leading-relaxed mb-6" style={{ color: "var(--muted)" }}>
          The complete <strong>Grow A Garden mutations guide</strong> — all{" "}
          <strong>{MUTATIONS.length}+ mutations</strong> with exact multipliers, how to get each one, and combo
          chains. Use our{" "}
          <Link href="/mutation-calculator" className="text-[var(--primary)] hover:underline font-bold">
            GAG Mutation Calculator
          </Link>{" "}
          to calculate exact crop values with any mutation stack.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link href="#tier-list" className="px-5 py-2.5 rounded-xl text-sm font-bold transition-all hover:scale-105" style={{ background: "var(--primary)", color: "#0a0e17" }}>
            📊 View Tier List
          </Link>
          <Link href="#fractured" className="px-5 py-2.5 rounded-xl text-sm font-bold transition-all hover:scale-105" style={{ background: "var(--surface-1)", border: "1px solid var(--glass-border)", color: "var(--foreground)" }}>
            💜 Fractured Guide
          </Link>
          <Link href="#aurora" className="px-5 py-2.5 rounded-xl text-sm font-bold transition-all hover:scale-105" style={{ background: "var(--surface-1)", border: "1px solid var(--glass-border)", color: "var(--foreground)" }}>
            🌌 Aurora Guide
          </Link>
          <Link href="/mutation-calculator" className="px-5 py-2.5 rounded-xl text-sm font-bold transition-all hover:scale-105" style={{ background: "var(--surface-1)", border: "1px solid var(--glass-border)", color: "var(--foreground)" }}>
            🧮 Calculator
          </Link>
        </div>
      </div>

      {/* What Are Mutations */}
      <section className="mb-12">
        <div className="glass-card-static p-6 sm:p-8">
          <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
            🌱 What Are Mutations in Grow A Garden?
          </h2>
          <div className="space-y-4 text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
            <p>
              <strong style={{ color: "var(--foreground)" }}>Mutations</strong> in <em>Grow A Garden</em> are special modifiers that
              attach to your crops during growth and dramatically increase their sell value. Each mutation has a{" "}
              <strong style={{ color: "var(--primary)" }}>multiplier</strong> — a number that directly multiplies your crop&apos;s base coin
              value. For example, a Golden mutation (×20) on a 10 kg Dragon Fruit (base 500 coins) turns it into{" "}
              <strong>500 × 100 × 20 = 1,000,000 coins</strong> in a single harvest.
            </p>
            <p>
              Mutations stack <strong>multiplicatively</strong>, not additively. This means having Golden (×20) and Rainbow (×50)
              simultaneously gives you a <strong>×1,000 combined multiplier</strong> — far more powerful than either alone. Advanced
              players chain together 3, 4, or even 5+ mutations to create multi-billion coin harvests from a single crop.
            </p>
            <p>
              Mutations are triggered by <strong>four main sources:</strong> weather events (Aurora, Night, Meteor Shower), pet passive
              abilities (Penguin gives Arctic, Swan gives Graceful), mutation sprays (Golden Spray, Rainbow Spray, etc.), and combination
              chains where two lower mutations merge into a higher-tier one (Wet + Chilled = Frozen). Use our{" "}
              <Link href="/mutation-calculator" className="text-[var(--primary)] hover:underline font-bold">
                mutation calculator
              </Link>{" "}
              to compute any stack instantly.
            </p>
          </div>

          {/* How to Get Mutations — HowTo section */}
          <div className="mt-6 p-4 rounded-2xl border" style={{ background: "rgba(34,197,94,0.05)", borderColor: "rgba(34,197,94,0.2)" }}>
            <h3 className="text-lg font-bold mb-3" style={{ color: "var(--foreground)", fontFamily: "var(--font-display)" }}>
              ⚡ How to Get Mutations — 5 Methods
            </h3>
            <ol className="space-y-3 text-sm" style={{ color: "var(--muted)" }}>
              {[
                { icon: "🌩️", title: "Weather Events", desc: "Grow crops during active weather events. Aurora Borealis → Aurora (×90), Meteor Shower → Celestial (×120), Night Event → Moonlit (×40), Blood Moon → Bloodlit (×25)." },
                { icon: "🐾", title: "Pet Passive Abilities", desc: "Certain pets automatically apply mutations to nearby crops. Penguin → Arctic (×12), Swan → Graceful (×77), Phoenix → Flaming (×25), Frost Dragon → Glacial (×25)." },
                { icon: "🧪", title: "Mutation Sprays", desc: "Purchase sprays from the shop and apply directly to growing crops. Golden Spray (×20), Rainbow Spray (×50), Silver Spray (×5), Wet Spray, Chilled Spray, and more." },
                { icon: "🔗", title: "Combo Chains", desc: "When a crop has two specific mutations simultaneously, they automatically combine into a higher-tier mutation. Wet + Chilled = Frozen (×10), Flaming + Molten = Blazing (×52), Glitched + Plasma = Fractured (×92)." },
                { icon: "👑", title: "Admin / Event Mutations", desc: "Some mutations only appear during special admin-triggered events — Subzero (Yeti event), Meteoric (Meteor Strike), Disco (Disco admin event). Watch for server announcements!" },
              ].map((m) => (
                <li key={m.title} className="flex items-start gap-3">
                  <span className="text-xl shrink-0 mt-0.5">{m.icon}</span>
                  <div>
                    <strong style={{ color: "var(--foreground)" }}>{m.title}:</strong> {m.desc}
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Tier List Table */}
      <section id="tier-list" className="mb-12 scroll-mt-24">
        <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
          📊 All GAG Mutations — Complete Tier List by Multiplier
        </h2>

        {/* Top 10 Highest Multipliers */}
        <div className="glass-card-static p-6 mb-6">
          <h3 className="text-lg font-bold mb-4" style={{ color: "var(--foreground)", fontFamily: "var(--font-display)" }}>
            🏆 Top 10 Highest Multiplier Mutations
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ borderBottom: "1px solid var(--glass-border)" }}>
                  <th className="text-left py-3 px-3 font-semibold" style={{ color: "var(--muted)" }}>#</th>
                  <th className="text-left py-3 px-3 font-semibold" style={{ color: "var(--muted)" }}>Mutation</th>
                  <th className="text-left py-3 px-3 font-semibold" style={{ color: "var(--muted)" }}>Category</th>
                  <th className="text-right py-3 px-3 font-semibold" style={{ color: "var(--muted)" }}>Multiplier</th>
                  <th className="text-left py-3 px-3 font-semibold hidden sm:table-cell" style={{ color: "var(--muted)" }}>How to Get</th>
                </tr>
              </thead>
              <tbody>
                {sortedAll.slice(0, 10).map((mut, idx) => (
                  <tr key={mut.id} style={{ borderBottom: "1px solid var(--glass-border)" }}>
                    <td className="py-3 px-3 font-bold" style={{ color: "var(--muted)" }}>{idx + 1}</td>
                    <td className="py-3 px-3">
                      <Link href={`/mutation/${mut.id}`} className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                        <div className="w-3 h-3 rounded-full shrink-0" style={{ background: mut.color }} />
                        <span className="font-bold" style={{ color: mut.color }}>{mut.name}</span>
                      </Link>
                    </td>
                    <td className="py-3 px-3 text-xs" style={{ color: "var(--muted)" }}>{mut.category}</td>
                    <td className="py-3 px-3 text-right font-black text-lg" style={{ color: mut.color, fontFamily: "var(--font-display)" }}>
                      ×{mut.multiplier}
                    </td>
                    <td className="py-3 px-3 text-xs hidden sm:table-cell max-w-[200px]" style={{ color: "var(--muted)" }}>
                      {mut.howToGet}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Tier Grids */}
        {Object.entries(TIERS).map(([tierName, muts]) => {
          if (muts.length === 0) return null;
          const tierColor = TIER_COLORS[tierName];
          const tierGlow = TIER_GLOW[tierName];
          return (
            <div key={tierName} className="mb-8">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-display)", color: tierColor }}>
                <div className="w-3 h-3 rounded-full" style={{ background: tierColor }} />
                {tierName}
                <span className="text-xs font-normal ml-1" style={{ color: "var(--muted)" }}>({muts.length} mutations)</span>
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                {muts.sort((a, b) => b.multiplier - a.multiplier).map((mut) => (
                  <Link
                    key={mut.id}
                    href={`/mutation/${mut.id}`}
                    className="p-3 rounded-xl transition-all hover:scale-105 flex flex-col items-start gap-1"
                    style={{ background: tierGlow, border: `1px solid ${mut.color}25` }}
                  >
                    <div className="flex items-center gap-2 w-full">
                      <div className="w-2.5 h-2.5 rounded-full shrink-0" style={{ background: mut.color }} />
                      <span className="text-xs font-bold truncate" style={{ color: mut.color }}>{mut.name}</span>
                    </div>
                    <span className="text-xl font-black" style={{ color: "var(--foreground)", fontFamily: "var(--font-display)" }}>
                      ×{mut.multiplier}
                    </span>
                    <span className="text-[10px] leading-tight line-clamp-2" style={{ color: "var(--muted)" }}>
                      {mut.howToGet}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </section>

      {/* Fractured Mutation Deep Dive */}
      <section id="fractured" className="mb-12 scroll-mt-24">
        <div className="glass-card-static p-6 sm:p-8" style={{ border: `1px solid ${fracturedMutation?.color ?? "#DA70D6"}30` }}>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl font-black shrink-0"
              style={{ background: `${fracturedMutation?.color ?? "#DA70D6"}15`, border: `1.5px solid ${fracturedMutation?.color ?? "#DA70D6"}40`, color: fracturedMutation?.color }}>
              ×{fracturedMutation?.multiplier ?? 92}
            </div>
            <div>
              <h2 className="text-2xl font-bold" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
                💜 How to Trigger the Fractured Mutation
              </h2>
              <p className="text-xs mt-1" style={{ color: "var(--muted)" }}>
                Target keyword: <strong style={{ color: "var(--primary)" }}>fractured mutation grow a garden</strong>
              </p>
            </div>
          </div>

          <div className="space-y-5 text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
            <div>
              <h3 className="text-base font-bold mb-2" style={{ color: "var(--foreground)" }}>What is the Fractured Mutation?</h3>
              <p>
                The <strong style={{ color: fracturedMutation?.color ?? "#DA70D6" }}>Fractured</strong> mutation is a{" "}
                <strong>Special category combo mutation</strong> in Grow A Garden with a multiplier of{" "}
                <strong>×{fracturedMutation?.multiplier ?? 92}</strong>. It is formed by combining the{" "}
                <strong>Glitched</strong> mutation and the <strong>Plasma</strong> mutation on the same crop simultaneously.
                The Fractured mutation creates a reality-distortion visual effect on your crop — a shimmering, glitched
                appearance — and is one of the most visually striking mutations in the game.
              </p>
            </div>

            <div>
              <h3 className="text-base font-bold mb-2" style={{ color: "var(--foreground)" }}>Step-by-Step: How to Get Fractured</h3>
              <ol className="space-y-3">
                {[
                  { step: "1", title: "Get Glitched (×85)", desc: "The Glitched mutation is obtained during the Jhai admin event. When Jhai triggers, crops in your garden automatically receive the Glitched mutation. You can also obtain it through the Glitch Rain admin event. Monitor server announcements." },
                  { step: "2", title: "Get Plasma (×5)", desc: "The Plasma mutation is applied during the Admin Laser event. When the laser fires, it applies the Plasma mutation (×5) to your growing crops. It can also be obtained via the Plasma spray if available in the shop." },
                  { step: "3", title: "Combo Triggers Automatically", desc: "Once your crop has both Glitched and Plasma simultaneously, the game engine automatically combines them into the Fractured mutation (×92). You do NOT need to do anything extra — the combo triggers on its own." },
                  { step: "4", title: "Harvest Your Fractured Crop", desc: "Harvest the crop once Fractured is confirmed (look for the reality-distortion glow effect). Use our GAG calculator to compute the exact sell value with your crop's weight and any additional mutations." },
                ].map((s) => (
                  <li key={s.step} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5"
                      style={{ background: fracturedMutation?.color ?? "#DA70D6", color: "black" }}>
                      {s.step}
                    </span>
                    <div>
                      <strong style={{ color: "var(--foreground)" }}>{s.title}:</strong> {s.desc}
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div className="p-4 rounded-2xl border" style={{ background: "rgba(218,112,214,0.06)", borderColor: "rgba(218,112,214,0.2)" }}>
              <h3 className="text-base font-bold mb-3" style={{ color: "var(--foreground)" }}>Best Crops to Pair with Fractured (×92)</h3>
              <p className="text-xs mb-3" style={{ color: "var(--muted)" }}>Highest base price crops benefit most from ×92 multiplier:</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
                {[
                  { crop: "🐉 Dragon Fruit", base: 500, val: (500 * 100 * 92).toLocaleString() },
                  { crop: "🥭 Mango", base: 350, val: (350 * 100 * 92).toLocaleString() },
                  { crop: "⭐ Starfruit", base: 400, val: (400 * 100 * 92).toLocaleString() },
                  { crop: "🌙 Moon Melon", base: 280, val: (280 * 100 * 92).toLocaleString() },
                  { crop: "🔮 Nightshade", base: 240, val: (240 * 100 * 92).toLocaleString() },
                  { crop: "🌌 Aurora Vine", base: 320, val: (320 * 100 * 92).toLocaleString() },
                ].map((c) => (
                  <div key={c.crop} className="p-2 rounded-xl text-center" style={{ background: "var(--surface-1)" }}>
                    <div className="text-base mb-1">{c.crop.split(" ")[0]}</div>
                    <div className="font-bold text-[10px]" style={{ color: "var(--foreground)" }}>{c.crop.split(" ").slice(1).join(" ")}</div>
                    <div className="text-[10px]" style={{ color: "var(--muted)" }}>Base: {c.base}</div>
                    <div className="font-black text-xs" style={{ color: fracturedMutation?.color ?? "#DA70D6" }}>@10kg: {c.val}</div>
                  </div>
                ))}
              </div>
              <p className="text-xs mt-3" style={{ color: "var(--muted)" }}>
                *Values at 10 kg weight with Fractured (×92) only. Stack with Golden or Rainbow for multi-billion payouts.{" "}
                <Link href="/" className="text-[var(--primary)] hover:underline">Use Calculator →</Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Aurora Mutation Deep Dive */}
      <section id="aurora" className="mb-12 scroll-mt-24">
        <div className="glass-card-static p-6 sm:p-8" style={{ border: `1px solid ${auroraMutation?.color ?? "#00FF7F"}30` }}>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl font-black shrink-0"
              style={{ background: `${auroraMutation?.color ?? "#00FF7F"}15`, border: `1.5px solid ${auroraMutation?.color ?? "#00FF7F"}40`, color: auroraMutation?.color }}>
              ×{auroraMutation?.multiplier ?? 90}
            </div>
            <div>
              <h2 className="text-2xl font-bold" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
                🌌 Aurora Mutation — Complete Guide
              </h2>
              <p className="text-xs mt-1" style={{ color: "var(--muted)" }}>
                Target keyword: <strong style={{ color: "var(--primary)" }}>aurora mutation grow a garden</strong>
              </p>
            </div>
          </div>

          <div className="space-y-5 text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
            <p>
              The <strong style={{ color: auroraMutation?.color ?? "#00FF7F" }}>Aurora</strong> mutation (×90) is a high-tier{" "}
              <strong>Environmental</strong> mutation in Grow A Garden triggered exclusively during the{" "}
              <strong>Aurora Borealis weather event</strong>. When the northern lights fill the sky, any crops growing in
              your garden during that event have a chance to receive the Aurora mutation automatically — no spray required.
              Aurora is also a key ingredient in the powerful <strong>Cosmic combo chain</strong> (Celestial + Aurora = Cosmic ×240).
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl border" style={{ background: "rgba(0,255,127,0.05)", borderColor: "rgba(0,255,127,0.2)" }}>
                <h3 className="text-base font-bold mb-3" style={{ color: "var(--foreground)" }}>⚡ How to Trigger Aurora</h3>
                <ol className="space-y-2 text-sm" style={{ color: "var(--muted)" }}>
                  {[
                    "Wait for the Aurora Borealis weather event to activate in your server",
                    "Have crops actively growing in your garden when the event starts",
                    "The Aurora mutation applies automatically during the event window",
                    "You cannot use a spray to force Aurora — it must be triggered by the weather",
                  ].map((s, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="font-bold shrink-0" style={{ color: auroraMutation?.color ?? "#00FF7F" }}>{i + 1}.</span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ol>
              </div>
              <div className="p-4 rounded-2xl border" style={{ background: "rgba(0,255,127,0.05)", borderColor: "rgba(0,255,127,0.2)" }}>
                <h3 className="text-base font-bold mb-3" style={{ color: "var(--foreground)" }}>🔗 Aurora Combo Chains</h3>
                <div className="space-y-3 text-sm" style={{ color: "var(--muted)" }}>
                  <div className="p-3 rounded-xl" style={{ background: "var(--surface-1)" }}>
                    <div className="flex items-center gap-2 font-bold text-xs mb-1" style={{ color: "var(--foreground)" }}>
                      Aurora (×90) + Celestial (×120) =
                    </div>
                    <div className="font-black text-lg" style={{ color: "#DA70D6", fontFamily: "var(--font-display)" }}>
                      🌌 Cosmic ×240
                    </div>
                  </div>
                  <div className="p-3 rounded-xl" style={{ background: "var(--surface-1)" }}>
                    <div className="flex items-center gap-2 font-bold text-xs mb-1" style={{ color: "var(--foreground)" }}>
                      Cosmic (×240) + Galactic (×120) =
                    </div>
                    <div className="font-black text-lg" style={{ color: "#9400D3", fontFamily: "var(--font-display)" }}>
                      ✨ Astral ×{astralMutation?.multiplier ?? 365}
                    </div>
                  </div>
                  <p className="text-xs" style={{ color: "var(--muted)" }}>
                    Aurora → Cosmic → Astral is the most powerful combo chain in GAG!
                  </p>
                </div>
              </div>
            </div>

            <Link href="/mutation/aurora" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all hover:scale-105"
              style={{ background: `${auroraMutation?.color ?? "#00FF7F"}15`, border: `1px solid ${auroraMutation?.color ?? "#00FF7F"}30`, color: auroraMutation?.color ?? "#00FF7F" }}>
              View Full Aurora Mutation Page →
            </Link>
          </div>
        </div>
      </section>

      {/* Combo Mutation Reference Table */}
      <section className="mb-12">
        <div className="glass-card-static p-6">
          <h2 className="text-xl font-bold mb-5" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
            🔗 Key Combo Mutation Chains
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ borderBottom: "1px solid var(--glass-border)" }}>
                  <th className="text-left py-2 px-3 font-semibold" style={{ color: "var(--muted)" }}>Combo</th>
                  <th className="text-left py-2 px-3 font-semibold" style={{ color: "var(--muted)" }}>Result</th>
                  <th className="text-right py-2 px-3 font-semibold" style={{ color: "var(--muted)" }}>Multiplier</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { combo: "Wet + Chilled", result: "Frozen", id: "frozen" },
                  { combo: "Windstruck + Twisted", result: "Tempestous", id: "tempestous" },
                  { combo: "Flaming + Molten", result: "Blazing", id: "blazing" },
                  { combo: "Glitched + Plasma", result: "Fractured", id: "fractured" },
                  { combo: "Toxic + Acidic", result: "Corrosive", id: "corrosive" },
                  { combo: "Celestial + Aurora", result: "Cosmic", id: "cosmic" },
                  { combo: "Cosmic + Galactic", result: "Astral", id: "astral" },
                  { combo: "Shadowbound + Blackout", result: "Grim", id: "grim" },
                  { combo: "Plagued + Radioactive", result: "Biohazard", id: "biohazard" },
                  { combo: "Biohazard + Corrosive", result: "Contagion", id: "contagion" },
                  { combo: "Bloom + Rot", result: "Gloom", id: "gloom" },
                  { combo: "Sundried + Verdant", result: "Paradisal", id: "paradisal" },
                  { combo: "Riptide + Stormcharged", result: "Stormbound", id: "stormbound" },
                  { combo: "Brainrot + Warped", result: "Mindbender", id: "warped_special" },
                ].map((row) => {
                  const mut = MUTATIONS.find((m) => m.id === row.id);
                  return (
                    <tr key={row.id} style={{ borderBottom: "1px solid var(--glass-border)" }}>
                      <td className="py-2.5 px-3 text-xs" style={{ color: "var(--muted)" }}>{row.combo}</td>
                      <td className="py-2.5 px-3">
                        <Link href={`/mutation/${row.id}`} className="flex items-center gap-2 hover:opacity-80">
                          <div className="w-2.5 h-2.5 rounded-full shrink-0" style={{ background: mut?.color ?? "#fff" }} />
                          <span className="font-bold text-xs" style={{ color: mut?.color ?? "var(--foreground)" }}>{row.result}</span>
                        </Link>
                      </td>
                      <td className="py-2.5 px-3 text-right font-black" style={{ color: mut?.color ?? "var(--primary)", fontFamily: "var(--font-display)" }}>
                        ×{mut?.multiplier ?? "—"}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs" style={{ color: "var(--muted)" }}>
            <Link href="/mutation-calculator" className="text-[var(--primary)] hover:underline">Use the Mutation Calculator</Link> to compute exact crop values with any combination.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
          ❓ Frequently Asked Questions — GAG Mutations
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
              { href: "/mutation-calculator", label: "🧬 Mutation Calculator", desc: "Calculate mutation stacks" },
              { href: "/aurora-mutation", label: "🌌 Aurora Guide", desc: "x90 mutation trigger" },
              { href: "/elephant-calculator", label: "🐘 Elephant Calc", desc: "Elephant pet stats" },
              { href: "/value-list", label: "💰 GAG Values List", desc: "All crop base prices" },
              { href: "/pet-calculator", label: "🐾 Pet Calculator", desc: "Pet value & weight" },
              { href: "/trade-calculator", label: "🤝 Trade Calculator", desc: "Win/Fair/Lose checker" },
              { href: "/seed-combiner", label: "🔧 Seed Combiner", desc: "Seed fusion simulator" },
              { href: "/seed-profit", label: "📈 Seed ROI", desc: "Seed profit calculator" },
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
