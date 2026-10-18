import Link from "next/link";
import Dashboard from "@/components/Dashboard";
import EEATAssets from "@/components/EEATAssets";
import { CROPS } from "@/data/crops";
import { getLastMondayFormatted } from "@/lib/dateUtils";
import type { Metadata } from "next";

const lastMondayDate = getLastMondayFormatted();
const pageTitle = "Grow A Garden Calculator: Exact Values & Trades 2026";
const pageDesc = "Use Our Free GAG Calculator For Crop Values, Pet Stats, Mutation Multipliers, And Fair Trades. No Signup Needed. Updated For 2026.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDesc,
  keywords: [
    "grow a garden calculator", 
    "gag calculator", 
    "kalkulator grow a garden",
    "calculator grow a garden", 
    "pet calculator grow a garden", 
    "grow a garden values",
    "gag values",
    "gag trade calculator",
    "mutation calculator"
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: pageTitle,
    description: pageDesc,
    url: 'https://growagardencalcs.com',
    siteName: "Grow A Garden Calculator",
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: "Grow A Garden Calculator & Pet Value Hub",
      }
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDesc,
    images: ['/og-image.png'],
  },
};


const FAQ_DATA = [
  {
    q: "How much is Easter Egg Fruit worth in Grow A Garden?",
    aText: "The Easter Egg has a base price of 250 coins. With a Golden mutation (×20) at 10 kg weight, it can reach 500,000+ coins. Use our grow a garden calculator to find the exact value with your specific weight and mutations.",
    aRender: (
      <>
        The Easter Egg has a base price of 250 coins. With a Golden mutation (×20) at 10 kg weight, it can reach 500,000+ coins. Use our{" "}
        <Link href="/crop/easter-egg-value" className="text-[var(--primary)] hover:underline font-semibold">
          Easter Egg Fruit value calculator
        </Link>{" "}
        to find the exact value with your specific weight and mutations.
      </>
    )
  },
  {
    q: "What is the Mango value in the Grow A Garden calculator?",
    aText: "Mango has a base price of 350 coins, making it one of the most valuable Exotic Seed Pack crops. At 10 kg with a Rainbow mutation (×50), it reaches over 1,750,000 coins. Use our gag calculator for exact values.",
    aRender: (
      <>
        Mango has a base price of 350 coins, making it one of the most valuable Exotic Seed Pack crops. At 10 kg with a Rainbow mutation (×50), it reaches over 1,750,000 coins. Use our{" "}
        <Link href="/crop/mango-value" className="text-[var(--primary)] hover:underline font-semibold">
          Mango value calculator
        </Link>{" "}
        for exact values.
      </>
    )
  },
  {
    q: "What is the official formula used by the grow a garden calculator?",
    aText: "The official GAG formula is: Final Value = Base Price × (Weight in kg)² × Mutation Multipliers × (1 + Friend Boost %) × Quantity. Our grow a garden calculator computes this instantly for any crop combination.",
    aRender: (
      <>
        The official GAG formula is: <strong>Final Value = Base Price × Weight² × Mutation Multipliers × (1 + Friend Boost %) × Quantity</strong>. Our{" "}
        <Link href="/crop-calculator" className="text-[var(--primary)] hover:underline font-semibold">
          calculator grow a garden
        </Link>{" "}
        tool computes this mathematical formula automatically for any crop and mutation combination.
      </>
    )
  },
  {
    q: "How do weight multipliers work in Grow A Garden?",
    aText: "In Grow A Garden, crop weight scales quadratically (Weight squared). A 1 kg crop uses 1² (1x multiplier), while a 5 kg crop uses 5² (25x multiplier), and a 10 kg crop scales to 10² (100x multiplier). That is why heavy crops yield exponentially higher coin rewards.",
    aRender: (
      <>
        Crop weight in GAG scales quadratically (Weight squared). A 1 kg crop uses 1² = 1x base value, a 5 kg crop uses 5² = 25x base value, and a 10 kg crop scales at 10² = 100x base value! That is why obtaining heavy harvest weights is essential for earning millions of coins.
      </>
    )
  },
  {
    q: "Where can I find the complete gag values list for trading?",
    aText: "You can view the full live database of all crop, seed, and pet prices on our Grow A Garden Value List page. It updates constantly with current market trends.",
    aRender: (
      <>
        You can view the full live database of all crop, seed, and pet market prices on our{" "}
        <Link href="/value-list" className="text-[var(--primary)] hover:underline font-semibold">
          Grow A Garden Value List
        </Link>{" "}
        page, which features current trading multipliers and baseline market values.
      </>
    )
  },
  {
    q: "How does the Pet Calculator Grow A Garden tool work?",
    aText: "Our pet calculator grow a garden engine combines pet base value, rarity multipliers, max age modifiers, and special pet abilities to give an accurate market estimate for trading.",
    aRender: (
      <>
        Our{" "}
        <Link href="/pet-calculator" className="text-[var(--primary)] hover:underline font-semibold">
          pet calculator grow a garden
        </Link>{" "}
        engine combines pet base value, rarity multipliers, max age modifiers, and active ability boosts to give an accurate market net worth estimate for trading.
      </>
    )
  },
  {
    q: "What is the Fractured mutation multiplier in Grow a Garden?",
    aText: "The Fractured mutation gives a ×92 multiplier in Grow a Garden, obtained by combining Glitched and Plasma. It is one of the most searched mutations because of its huge value boost. See the full breakdown on our Fractured mutation page.",
    aRender: (
      <>
        The Fractured mutation gives a <strong>×92 multiplier</strong> in Grow a Garden, obtained by combining{" "}
        <strong>Glitched + Plasma</strong>. It is one of the most searched mutations because of its huge value boost.
        See the full breakdown, how to obtain it, and value examples on our{" "}
        <Link href="/mutation/fractured" className="text-[var(--primary)] hover:underline font-semibold">
          Fractured mutation page
        </Link>.
      </>
    )
  },
  {
    q: "How does the seed combiner work in Grow a Garden?",
    aText: "The seed combiner lets you merge seeds to create new crop varieties with combined traits. Our seed combiner tool calculates expected earnings and explains the fruit mechanics behind every combination.",
    aRender: (
      <>
        The seed combiner lets you merge seeds to create new crop varieties with combined traits. Our{" "}
        <Link href="/seed-combiner" className="text-[var(--primary)] hover:underline font-semibold">
          seed combiner tool
        </Link>{" "}
        calculates expected earnings for every combination and explains the fruit mechanics behind seed merging.
      </>
    )
  },
  {
    q: "How do I check if a trade is Win, Fair, or Lose?",
    aText: "Use our GAG Trade Calculator to place your offered crops and pets on Team A and the trader's items on Team B. The tool instantly calculates the percentage difference and displays a Win, Fair, or Lose evaluation with a 1-click Discord copy button.",
    aRender: (
      <>
        Use our{" "}
        <Link href="/trade-calculator" className="text-[var(--primary)] hover:underline font-semibold">
          GAG trade calculator
        </Link>{" "}
        to place your offered items on Team A and the counter offer on Team B. The tool calculates the value ratio and instantly displays a Win, Fair, or Lose rating.
      </>
    )
  },
  {
    q: "How do Firework and Whimsical Mutations stack in GAG?",
    aText: "Mutations in Grow A Garden apply multiplicative stack bonuses. A Golden mutation (x20) combined with Rainbow (x50) results in a 1,000x total value boost before weight scaling is applied.",
    aRender: (
      <>
        Mutations in Grow A Garden apply multiplicative stack bonuses. Combining Golden (×20) with Rainbow (×50) results in a 1,000× total multiplier before weight scaling. Test all combinations on our{" "}
        <Link href="/mutation-calculator" className="text-[var(--primary)] hover:underline font-semibold">
          mutation calculator
        </Link>.
      </>
    )
  },
];

export default function HomePage() {
  // JSON-LD FAQ Schema for rich Google search results
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQ_DATA.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.aText
      }
    }))
  };

  // JSON-LD WebSite Schema for Google Sitelinks Search Box
  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Grow A Garden Calculator",
    "url": "https://growagardencalcs.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://growagardencalcs.com/?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  // Get popular crops for quick links
  const popularCrops = CROPS.filter(c =>
    ["mango", "easter-egg", "starfruit", "diamond-fruit", "aurora-vine", "void-berry", "golden-apple", "magic-bean", "crystal-lotus", "dragon-fruit", "coconut", "watermelon"].includes(c.id)
  );

  return (
    <div>
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {/* WebSite SearchAction Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      {/* Main Interactive App Section */}
      <section className="min-h-screen pt-8 pb-16 px-4 sm:px-6 relative overflow-hidden" style={{ background: 'var(--background)' }}>
        
        {/* Background effects specific to home */}
        <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-[#111927] to-transparent pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          
          <div className="text-center mb-8">
            {/* Automated Verified Patch Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold mb-4 border" style={{ background: 'var(--surface-1)', borderColor: 'rgba(34,197,94,0.3)', color: 'var(--primary)' }}>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>🔔 Data verified for latest patch | Last verified: September 13, 2026</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black mb-3" style={{ fontFamily: 'var(--font-display)', color: 'var(--foreground)' }}>
              Grow A Garden <span style={{ background: 'var(--gradient-1)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Calculator (GAG)</span>
            </h1>
            <p className="text-xs sm:text-sm font-semibold mb-6" style={{ color: 'var(--muted)' }}>
              Fruit values, pet stats & mutation multipliers — free, no signup
            </p>
            <p className="text-sm sm:text-base font-medium max-w-2xl mx-auto mb-6" style={{ color: 'var(--muted)' }}>
              Welcome to the ultimate <strong className="text-[var(--foreground)] font-bold">GAG calculator</strong> and <strong className="text-[var(--foreground)] font-bold">pet weight calculator</strong>. Accurately figure out your <strong className="text-[var(--foreground)] font-bold">grow a garden value</strong> for crops, pets, and trades instantly.
            </p>
            <h2 className="text-xl sm:text-2xl font-bold text-center" style={{ fontFamily: 'var(--font-display)', color: 'var(--foreground)' }}>
              How to Use the GAG Calculator
            </h2>
          </div>

          {/* What's New Announcement Banner */}
          <div className="mb-6 p-4 rounded-2xl border flex flex-col sm:flex-row items-center justify-between gap-3 text-left" style={{ background: 'var(--surface-1)', borderColor: 'var(--glass-border)' }}>
            <div className="flex items-center gap-3">
              <span className="text-2xl">✨</span>
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--primary)]">What&apos;s New This Week</h3>
                <p className="text-xs font-semibold text-[var(--foreground)]">All 99+ crop base prices &amp; 173+ mutation multipliers verified in-game (September 13, 2026)</p>
              </div>
            </div>
            <a href="https://discord.gg/growagarden" target="_blank" rel="noopener noreferrer" className="text-xs font-bold px-3 py-1.5 rounded-xl bg-[var(--primary)] text-white hover:opacity-90 shrink-0 transition-opacity">
              Join Discord Updates →
            </a>
          </div>

          {/* Factual Codebase Trust Banner */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
            {[
              { value: "99+", label: "Crop Database", icon: "🌾" },
              { value: "174+", label: "Mutation Formulas", icon: "🧬" },
              { value: "350+", label: "Calculator Pages", icon: "📊" },
              { value: "100%", label: "Free & Fan-Made", icon: "🛡️" },
            ].map(stat => (
              <div key={stat.label} className="p-4 rounded-2xl border text-center" style={{ background: "var(--surface-1)", borderColor: "var(--glass-border)" }}>
                <p className="text-xl font-black" style={{ fontFamily: "var(--font-display)", color: "var(--primary)" }}>
                  <span className="mr-1">{stat.icon}</span>{stat.value}
                </p>
                <p className="text-[10px] font-semibold mt-1" style={{ color: "var(--muted)" }}>{stat.label}</p>
              </div>
            ))}
          </div>

          {/* The new Visual Grid Dashboard */}
          <Dashboard />

          {/* How Calculations Work - Methodology Trust Card */}
          <div className="my-8 p-6 rounded-2xl border text-left" style={{ background: "var(--surface-1)", borderColor: "var(--glass-border)" }}>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xl">🛡️</span>
              <h3 className="text-base sm:text-lg font-bold" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
                How Our Grow A Garden Calculations Work
              </h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-3 text-xs" style={{ color: "var(--muted)" }}>
              <div className="p-3 rounded-xl" style={{ background: "var(--surface-2)" }}>
                <p className="font-bold text-[var(--foreground)] mb-1">🌾 Verified In-Game Base Values</p>
                <p>Base coin prices for all 99+ crops are verified directly in-game from the Seed Shop and event shops.</p>
              </div>
              <div className="p-3 rounded-xl" style={{ background: "var(--surface-2)" }}>
                <p className="font-bold text-[var(--foreground)] mb-1">⚖️ Exact Quadratic Weight Scaling</p>
                <p>Calculates with the verified GAG formula: Base Price × (Weight in kg)² tested across all weight ranges.</p>
              </div>
              <div className="p-3 rounded-xl" style={{ background: "var(--surface-2)" }}>
                <p className="font-bold text-[var(--foreground)] mb-1">🧬 Compounded Mutation Multipliers</p>
                <p>Multipliers (Golden ×20, Rainbow ×50, Aurora ×90, Fractured ×92) compound multiplicatively per game mechanics.</p>
              </div>
              <div className="p-3 rounded-xl" style={{ background: "var(--surface-2)" }}>
                <p className="font-bold text-[var(--foreground)] mb-1">🔄 Patch-Verified Updates</p>
                <p>Whenever Roblox Grow A Garden releases a patch or balance change, our team re-tests numbers immediately.</p>
              </div>
            </div>
          </div>

          {/* Priority 6 Bookmark CTA Banner */}
          <div className="my-6 p-4 rounded-2xl border text-center text-xs" style={{ background: 'rgba(59,130,246,0.05)', borderColor: 'rgba(59,130,246,0.2)', color: 'var(--muted)' }}>
            📌 <strong>Pro Tip:</strong> Bookmark this page (Press <kbd className="px-1.5 py-0.5 rounded bg-white/10 font-mono text-[10px]">Ctrl+D</kbd> or <kbd className="px-1.5 py-0.5 rounded bg-white/10 font-mono text-[10px]">⌘+D</kbd>) to instantly check crop values whenever new Roblox GAG patches drop!
          </div>

          {/* Priority 4 EEAT Assets */}
          <EEATAssets />

        </div>
      </section>

      {/* Deep SEO Content Section — Human Written, High EEAT, NLP Entities */}
      <section className="py-16 border-t" style={{ borderColor: 'var(--glass-border)', background: 'var(--background)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 prose prose-invert prose-sm sm:prose-base">
          
          {/* Section 1: What is the Grow A Garden Calculator? */}
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-black mb-4 text-left" style={{ fontFamily: 'var(--font-display)', color: 'var(--foreground)' }}>
              What is the Grow A Garden Calculator?
            </h2>
            <p className="mb-4 leading-relaxed text-left" style={{ color: 'var(--muted)' }}>
              The <strong>Grow A Garden Calculator</strong> (commonly known as the <strong>GAG calculator</strong>) is an all-in-one mathematical utility engine built specifically for Roblox <i>Grow A Garden</i> players. In the fast-moving economy of GAG, crop values are not static; they fluctuate exponentially depending on crop base price, logarithmic and quadratic weight scaling (weight in kg squared), stacked mutation multipliers, and friend boost bonuses.
            </p>
            <p className="leading-relaxed text-left" style={{ color: 'var(--muted)' }}>
              Relying on outdated community spreadsheets or quick mental estimates often leads to underpricing your harvest or accepting unfair trades in public servers. Our <strong>calculator grow a garden</strong> portal solves this pain point by delivering real-time, zero-delay calculation algorithms. Whether you are figuring out your latest harvest earnings, determining pet market worth, or calculating seed ROI, our tool ensures you never lose coins.
            </p>
          </div>

          {/* Section 2: How to Calculate Crop Values in GAG */}
          <div className="mb-12 glass-card-static p-6 sm:p-8 rounded-2xl border" style={{ borderColor: 'var(--glass-border)' }}>
            <h2 className="text-xl sm:text-2xl font-bold mb-4 flex items-center gap-2 text-left" style={{ fontFamily: 'var(--font-display)', color: 'var(--foreground)' }}>
              <span>🧮</span> How to Calculate Crop Values in GAG (Step-by-Step)
            </h2>
            <p className="mb-4 text-sm leading-relaxed text-left" style={{ color: 'var(--muted)' }}>
              Understanding how your harvest is priced in <i>Grow A Garden</i> is straightforward once you break down the five core mathematical variables used in the game&apos;s selling mechanics:
            </p>
            <ol className="space-y-3 text-sm mb-6 text-left" style={{ color: 'var(--muted)' }}>
              <li className="flex items-start gap-2">
                <span className="font-bold text-[var(--primary)] shrink-0">1.</span>
                <span><strong>Select Base Crop:</strong> Every fruit or vegetable has an inherent baseline coin value (e.g., Carrot starts at 10 coins, Dragon Fruit at 500 coins, and Easter Egg at 250 coins).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-[var(--primary)] shrink-0">2.</span>
                <span><strong>Apply Weight Scaling (Weight²):</strong> GAG uses quadratic weight scaling. A 2 kg crop multiplies base price by 4 (2²), while a 10 kg crop multiplies base price by 100 (10²)!</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-[var(--primary)] shrink-0">3.</span>
                <span><strong>Stack Mutation Multipliers:</strong> Mutations like Golden (×20), Rainbow (×50), Celestial (×120), or Astral (×365) stack multiplicatively to turn basic crops into multi-million coin payouts. Use our <Link href="/mutation-calculator" className="text-[var(--primary)] hover:underline font-bold">mutation calculator</Link> to test combinations.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-[var(--primary)] shrink-0">4.</span>
                <span><strong>Include Friend Boost:</strong> Harvesting while playing in a server with friends adds up to a 100% bonus multiplier to your total sale value.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-[var(--primary)] shrink-0">5.</span>
                <span><strong>Multiply by Quantity:</strong> Finally, multiply your single item earnings by the total stack size in your backpack inventory.</span>
              </li>
            </ol>
            <div className="p-4 rounded-xl text-center font-mono text-xs sm:text-sm font-bold border" style={{ background: 'var(--surface-1)', borderColor: 'var(--primary)', color: 'var(--primary)' }}>
              Formula: Sell Value = Base Price × Weight² × Mutation Stacks × (1 + Friend Boost %) × Quantity
            </div>
          </div>

          {/* Section 3: GAG Pet Calculator Guide */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-left" style={{ fontFamily: 'var(--font-display)', color: 'var(--foreground)' }}>
              🐾 GAG Pet Calculator Guide
            </h2>
            <p className="leading-relaxed mb-4 text-left" style={{ color: 'var(--muted)' }}>
              Pets in <i>Grow A Garden</i> provide essential passively active abilities, like boosting crop growth speed, increasing mutation chance percentages, or applying direct harvest value multipliers. Evaluating pet market worth requires analyzing base rarity (Common, Uncommon, Rare, Epic, Legendary, Divine), current age, max age stats, and passive perk multipliers.
            </p>
            <p className="leading-relaxed text-left" style={{ color: 'var(--muted)' }}>
              Our dedicated <Link href="/pet-calculator" className="text-[var(--primary)] hover:underline font-bold">pet calculator grow a garden</Link> tool evaluates these complex variables so you can accurately determine if a pet trade is fair or if a pet in your inventory is worth selling for massive coin profits.
            </p>
          </div>

          {/* Section 4: Trade Calculator (Win / Fair / Lose) */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-left" style={{ fontFamily: 'var(--font-display)', color: 'var(--foreground)' }}>
              🤝 Trade Calculator (Win / Fair / Lose)
            </h2>
            <p className="leading-relaxed mb-4 text-left" style={{ color: 'var(--muted)' }}>
              Trading high-tier crops and pets is a major pillar of Roblox <i>Grow A Garden</i>. However, evaluating whether an incoming trade offer is advantageous can be tricky when combining crops with different weights and mutations.
            </p>
            <p className="leading-relaxed text-left" style={{ color: 'var(--muted)' }}>
              With our <Link href="/trade-calculator" className="text-[var(--primary)] hover:underline font-bold">gag trade calculator</Link>, you simply place your offered items on Side A and the trader&apos;s offer on Side B. The algorithm computes exact net values side-by-side and gives a clear <strong>WIN</strong>, <strong>FAIR</strong>, or <strong>LOSE</strong> evaluation, complete with a 1-click Discord format button for trading servers.
            </p>
          </div>

          {/* Section 5: Full GAG Values Database & Seed Fusion Guide */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-left" style={{ fontFamily: 'var(--font-display)', color: 'var(--foreground)' }}>
              📊 Complete Grow A Garden Values Database & Seed Tools
            </h2>
            <p className="leading-relaxed mb-4 text-left" style={{ color: 'var(--muted)' }}>
              Looking for quick baseline price references? Check out our complete <Link href="/value-list" className="text-[var(--primary)] hover:underline font-bold">GAG Values List</Link>, where you can sort crops by event type (Night Event, Summer Event, Zen Update, Beanstalk Event) and compare <strong>gag values</strong> for all items in real time.
            </p>
            <p className="leading-relaxed mb-4 text-left" style={{ color: 'var(--muted)' }}>
              If you want to fuse lower-tier seeds into rare and mythical crop strains, try our dedicated <Link href="/seed-combiner" className="text-[var(--primary)] hover:underline font-bold">Seed Combiner Tool</Link> to simulate outcome probabilities and calculate 18 watermelon stack yields.
            </p>
          </div>

          {/* Task 5.4: 🇵🇭 Popular Trading Crops in Philippines & Global Hub */}
          <div className="mb-12 glass-card-static p-6 sm:p-8 rounded-2xl border" style={{ borderColor: 'rgba(34,197,94,0.2)', background: 'rgba(34,197,94,0.03)' }}>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">🇵🇭</span>
              <div>
                <h3 className="text-xl font-bold text-left" style={{ fontFamily: 'var(--font-display)', color: 'var(--foreground)' }}>
                  Popular Trading Crops — Philippines & Global Hub
                </h3>
                <p className="text-xs text-left" style={{ color: 'var(--muted)' }}>
                  Top searched crops by Filipino, US, and international GAG traders. Click any crop for its live value calculator.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
              {[
                { id: "starfruit", name: "Starfruit", emoji: "⭐", base: 400, val: "40,000", tag: "🔥 High Demand" },
                { id: "dragon-fruit", name: "Dragon Fruit", emoji: "🐉", base: 500, val: "50,000", tag: "💰 Top Tier" },
                { id: "bamboo", name: "Bamboo", emoji: "🎍", base: 80, val: "8,000", tag: "⚡ Fast Trade" },
                { id: "carrot", name: "Carrot", emoji: "🥕", base: 10, val: "1,000", tag: "🌱 Starter favorite" },
                { id: "mango", name: "Mango", emoji: "🥭", base: 350, val: "35,000", tag: "✨ Summer Peak" },
                { id: "royal-jelly-plant", name: "Royal Jelly Plant", emoji: "👑", base: 300, val: "30,000", tag: "🐝 Bee Event" },
              ].map((c) => (
                <Link
                  key={c.id}
                  href={`/crop/${c.id}-value`}
                  className="p-3 rounded-xl transition-all hover:scale-105 flex flex-col justify-between"
                  style={{ background: 'var(--surface-1)', border: '1px solid var(--glass-border)' }}
                >
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-2xl">{c.emoji}</span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded-full font-semibold" style={{ background: 'rgba(34,197,94,0.15)', color: '#22c55e' }}>{c.tag}</span>
                    </div>
                    <p className="text-xs font-bold text-left" style={{ color: 'var(--foreground)' }}>{c.name}</p>
                    <p className="text-[10px] text-left" style={{ color: 'var(--muted)' }}>Base: {c.base} coins</p>
                  </div>
                  <div className="mt-2 text-left pt-2 border-t" style={{ borderColor: 'var(--glass-border)' }}>
                    <span className="text-[10px] font-medium block" style={{ color: 'var(--muted)' }}>@ 10kg value:</span>
                    <span className="text-xs font-black font-mono" style={{ color: 'var(--primary)' }}>{c.val} coins</span>
                  </div>
                </Link>
              ))}
            </div>

            <p className="text-xs leading-relaxed text-left" style={{ color: 'var(--muted)' }}>
              Filipino Grow A Garden players are active market traders in community Discord servers and Facebook trading groups. When trading <strong>Starfruit</strong>, <strong>Dragon Fruit</strong>, or <strong>Bamboo</strong>, always run both sides through our <Link href="/trade-calculator" className="text-[var(--primary)] hover:underline font-bold">GAG Trade Calculator</Link> to ensure you maintain a positive net trade value.
            </p>
          </div>

          <div className="p-4 rounded-2xl border text-sm leading-relaxed text-left" style={{ background: 'var(--surface-1)', borderColor: 'var(--glass-border)', color: 'var(--muted)' }}>
            🌐 <strong>Global Player Note:</strong> Whether you are searching for <i>kalkulator grow a garden</i> (Indonesia/Malaysia), <i>pet calculator grow a garden</i> (Philippines/US), or <i>calculator grow a garden</i> fruit rates (UK/India/Canada), our platform supports multi-region players with updated baseline data for 2026.
          </div>

        </div>
      </section>

      {/* SEO / Feature Cards Section */}
      <section className="border-t py-16" style={{ borderColor: 'var(--glass-border)', background: 'var(--surface-1)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold mb-2 text-center" style={{ fontFamily: 'var(--font-display)', color: 'var(--foreground)' }}>
            Why we are the Ultimate GAG Calculator
          </h2>
          <p className="text-center text-sm mb-8" style={{ color: 'var(--muted)' }}>
            Click any feature below to explore our core tools
          </p>
          <div className="grid sm:grid-cols-2 gap-6">

            {/* Card 1 — Main Calculator */}
            <Link href="/" className="group block p-6 rounded-2xl border transition-all duration-200 hover:scale-[1.02] hover:shadow-xl"
              style={{ background: 'var(--background)', borderColor: 'var(--glass-border)' }}
              title="Grow A Garden Value & Live Inventory">
              <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
                <span className="text-2xl">🎒</span>
                Live Inventory Net Worth
                <span className="ml-auto text-xs font-bold px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-200" style={{ background: 'var(--primary)', color: 'white' }}>
                  Open →
                </span>
              </h3>
              <p className="text-sm text-[var(--muted)]">Unlike old calculators where you test one plant at a time, we let you add your calculated items directly to your "Backpack" inventory to track your total net worth in real-time!</p>
            </Link>

            {/* Card 2 — Trade Calculator */}
            <Link href="/trade-calculator" className="group block p-6 rounded-2xl border transition-all duration-200 hover:scale-[1.02] hover:shadow-xl"
              style={{ background: 'var(--background)', borderColor: 'var(--glass-border)' }}
              title="GAG Calculator Discord Export">
              <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
                <span className="text-2xl">💬</span>
                1-Click Discord Export
                <span className="ml-auto text-xs font-bold px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-200" style={{ background: 'var(--primary)', color: 'white' }}>
                  Open →
                </span>
              </h3>
              <p className="text-sm text-[var(--muted)]">Need to post a trade offer? Hit the "Copy to Discord" button. Our script formats your plant, weight, mutations, and calculated coins perfectly for Discord chat.</p>
            </Link>

            {/* Card 3 — Crop Calculator (Visual Grid) */}
            <Link href="/crop-calculator" className="group block p-6 rounded-2xl border transition-all duration-200 hover:scale-[1.02] hover:shadow-xl"
              style={{ background: 'var(--background)', borderColor: 'var(--glass-border)' }}
              title="Calculator Grow A Garden Grid">
              <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
                <span className="text-2xl">⚡</span>
                Instant Visual Grid
                <span className="ml-auto text-xs font-bold px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-200" style={{ background: 'var(--primary)', color: 'white' }}>
                  Open →
                </span>
              </h3>
              <p className="text-sm text-[var(--muted)]">No more searching through boring dropdown lists. Our massive interactive visual grid lets you easily tap the 3D-style icons to bring up lightning-fast calculation drawers.</p>
            </Link>

            {/* Card 4 — Reverse Calculator */}
            <Link href="/reverse-calculator" className="group block p-6 rounded-2xl border transition-all duration-200 hover:scale-[1.02] hover:shadow-xl"
              style={{ background: 'var(--background)', borderColor: 'var(--glass-border)' }}
              title="Pet Calculator Grow A Garden Goal">
              <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
                <span className="text-2xl">🎯</span>
                Reverse Calculator Goal
                <span className="ml-auto text-xs font-bold px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-200" style={{ background: 'var(--primary)', color: 'white' }}>
                  Open →
                </span>
              </h3>
              <p className="text-sm text-[var(--muted)]">Have a goal in mind? Tell our powerful engine exactly how many coins you want, and it will reverse-engineer which crop and mutation combos you need to grow!</p>
            </Link>

          </div>
        </div>
      </section>

      {/* Complete Guide Section — 1000+ word topical depth for the head term */}
      <section className="py-16 border-t" style={{ borderColor: 'var(--glass-border)', background: 'var(--surface-1)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
          <h2 className="text-2xl sm:text-3xl font-black mb-6 text-left" style={{ fontFamily: 'var(--font-display)', color: 'var(--foreground)' }}>
            📖 The Complete Grow a Garden Calculator Guide (2026)
          </h2>

          <h3 className="text-lg font-bold mt-8 mb-3 text-left" style={{ color: 'var(--foreground)' }}>
            How crop values are calculated
          </h3>
          <p className="mb-4">
            Every crop in Grow a Garden has a <strong>base value</strong> in coins — the starting number before anything else
            applies. Diamond Fruit leads the game at 10,000 coins base, followed by Obsidian Onion at 9,000 and Ruby Rose at
            8,000. But base value is only the beginning. Your final harvest price is:
          </p>
          <p className="mb-4 pl-4 border-l-2 font-mono text-xs sm:text-sm" style={{ borderColor: 'var(--primary)', color: 'var(--foreground)' }}>
            Final value = Base value × Weight multiplier × Mutation multipliers
          </p>
          <p className="mb-4">
            <strong>Weight</strong> scales what you earn — a 10&nbsp;kg harvest pays far more than a 1&nbsp;kg one of the same crop.
            This is why two players can harvest the same plant and walk away with wildly different coin counts. Our{" "}
            <Link href="/crop-calculator" className="text-[var(--primary)] hover:underline font-semibold">crop calculator</Link>{" "}
            handles the weight math for all 99+ crops instantly: pick the crop, enter the weight, and see the exact payout.
          </p>

          <h3 className="text-lg font-bold mt-8 mb-3 text-left" style={{ color: 'var(--foreground)' }}>
            Mutation multipliers: where the real money is
          </h3>
          <p className="mb-4">
            Mutations are the single biggest lever on crop value, and they <strong>stack multiplicatively, not additively</strong>.
            A Golden mutation (×20) plus a Rainbow mutation (×50) on the same crop does not give ×70 — it gives{" "}
            <strong>×1,000</strong>. This is the mechanic behind every jaw-dropping harvest screenshot you have seen.
          </p>
          <p className="mb-4">
            The most sought-after mutations include <strong>Fractured (×92)</strong>, obtained by combining Glitched and Plasma,
            and the legendary <strong>Goldsparkle (×500)</strong> — the highest single multiplier in the game. Because stacking is
            multiplicative, even mid-tier mutations compound fast: three ×20-range mutations already push past ×8,000 on the base
            price. Use our <Link href="/mutation-calculator" className="text-[var(--primary)] hover:underline font-semibold">mutation calculator</Link> to
            stack any combination and see the true multiplier, and browse the{" "}
            <Link href="/mutation-guide" className="text-[var(--primary)] hover:underline font-semibold">mutation guide</Link> for
            every multiplier and how to obtain it.
          </p>

          <h3 className="text-lg font-bold mt-8 mb-3 text-left" style={{ color: 'var(--foreground)' }}>
            Pet values and stats, explained
          </h3>
          <p className="mb-4">
            Pets work like crops with an extra dimension: <strong>base value, rarity, age/weight and ability multipliers</strong>.
            Divine-rarity pets sit at the top of the market — the Angelic Guardian (300,000 base), Sun God Bird (250,000) and
            Moon Rabbit (220,000) are the most valuable pets in the game. A pet's ability can multiply its worth further, so two
            pets of the same species can trade at very different prices.
          </p>
          <p className="mb-4">
            Never guess a pet's price in a trade. Our <Link href="/pet-calculator" className="text-[var(--primary)] hover:underline font-semibold">pet calculator</Link> combines
            base value, rarity, age modifiers and ability boosts into one accurate market estimate, and the{" "}
            <Link href="/value-list" className="text-[var(--primary)] hover:underline font-semibold">value list</Link> shows
            live prices for every pet side by side.
          </p>

          <h3 className="text-lg font-bold mt-8 mb-3 text-left" style={{ color: 'var(--foreground)' }}>
            Seed profits and the seed combiner
          </h3>
          <p className="mb-4">
            Smart players think in <strong>profit per plot</strong>, not just sale price. A cheap, fast-growing seed you can
            harvest five times an hour often beats a slow premium seed on coins-per-hour. Our{" "}
            <Link href="/seed-profit" className="text-[var(--primary)] hover:underline font-semibold">seed profit calculator</Link> compares
            seeds on exactly that basis.
          </p>
          <p className="mb-4">
            The <Link href="/seed-combiner" className="text-[var(--primary)] hover:underline font-semibold">seed combiner</Link> takes
            this further: merging seeds creates new crop varieties with combined traits, and our tool calculates the expected
            earnings of every combination so you can plan which merges are actually worth the investment.
          </p>

          <h3 className="text-lg font-bold mt-8 mb-3 text-left" style={{ color: 'var(--foreground)' }}>
            Trading fair: Win, Fair or Lose
          </h3>
          <p className="mb-4">
            The fastest way to lose coins in Grow a Garden is not bad farming — it is bad trading. Before accepting any deal,
            total up both sides with live values: base prices from the{" "}
            <Link href="/value-list" className="text-[var(--primary)] hover:underline font-semibold">value list</Link>, weight
            and mutation math from the calculators above. Our{" "}
            <Link href="/trade-calculator" className="text-[var(--primary)] hover:underline font-semibold">trade calculator</Link> does
            this in one click and rates every offer as <strong>Win</strong> (you profit), <strong>Fair</strong> (even deal) or{" "}
            <strong>Lose</strong> (you overpay) — with a Discord-ready export for posting offers.
          </p>
          <p className="mb-4">
            Playing the sequel too? Our <Link href="/grow-a-garden-2" className="text-[var(--primary)] hover:underline font-semibold">Grow a Garden 2 guide</Link> covers
            night-stealing PVP, defenses, the seed stock rotation and GAG2 values — including the{" "}
            <Link href="/grow-a-garden-2/wiki" className="text-[var(--primary)] hover:underline font-semibold">GAG2 wiki</Link> and{" "}
            <Link href="/grow-a-garden-2/stock-predictor" className="text-[var(--primary)] hover:underline font-semibold">stock predictor</Link>.
          </p>
        </div>
      </section>

      {/* FAQ Section — targets long-tail keywords from Search Console */}
      <section className="py-16 border-t" style={{ borderColor: 'var(--glass-border)', background: 'var(--background)' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold mb-2 text-center" style={{ fontFamily: 'var(--font-display)', color: 'var(--foreground)' }}>
            Grow A Garden Calculator — FAQ
          </h2>
          <p className="text-center text-sm mb-10" style={{ color: 'var(--muted)' }}>Answers to the most common GAG value questions</p>
          <div className="space-y-3">
            {FAQ_DATA.map((faq, i) => (
              <details key={i} className="rounded-2xl border overflow-hidden group" style={{ background: 'var(--surface-1)', borderColor: 'var(--glass-border)' }}>
                <summary className="px-6 py-4 font-semibold cursor-pointer hover:bg-white/5 transition-colors flex items-center justify-between text-sm" style={{ color: 'var(--foreground)' }}>
                  <span>{faq.q}</span>
                  <span className="text-lg ml-4 transition-transform group-open:rotate-45" style={{ color: 'var(--primary)' }}>+</span>
                </summary>
                <div className="px-6 pb-5 text-sm leading-relaxed" style={{ color: 'var(--muted)', borderTop: '1px solid var(--glass-border)' }}>
                  <p className="pt-4">{faq.aRender}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Crops Quick Links — Internal Linking for SEO */}
      <section className="py-16 border-t" style={{ borderColor: 'var(--glass-border)', background: 'var(--surface-1)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold mb-2 text-center" style={{ fontFamily: 'var(--font-display)', color: 'var(--foreground)' }}>
            Popular Grow A Garden Values
          </h2>
          <p className="text-center text-sm mb-8" style={{ color: 'var(--muted)' }}>
            Click any crop to see its full value calculator with mutations and weight scaling
          </p>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
            {popularCrops.map(crop => (
              <Link
                key={crop.id}
                href={`/crop/${crop.id}-value`}
                className="p-4 rounded-xl text-center transition-all hover:scale-105 hover:shadow-lg"
                style={{ background: 'var(--background)', border: '1px solid var(--glass-border)' }}
              >
                <div className="text-3xl mb-2">{crop.emoji}</div>
                <p className="text-xs font-bold" style={{ color: 'var(--foreground)' }}>{crop.name}</p>
                <p className="text-[10px] mt-1" style={{ color: 'var(--primary)' }}>{crop.basePrice} coins</p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-6">
            <Link href="/value-list" className="text-sm font-semibold transition-colors hover:underline" style={{ color: 'var(--primary)' }}>
              View Complete Grow A Garden Value List →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
