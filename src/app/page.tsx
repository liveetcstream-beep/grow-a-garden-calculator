import Dashboard from "@/components/Dashboard";
import EEATAssets from "@/components/EEATAssets";
import HomepageGuide from "@/components/HomepageGuide";
import { CROPS } from "@/data/crops";
import { PETS } from "@/data/pets";
import { MUTATIONS } from "@/data/mutations";
import { formatDataUpdatedAt } from "@/lib/contentDates";
import type { Metadata } from "next";

const pageTitle = "Grow A Garden Calculator (GAG) | Crop & Pet Values";
const pageDesc = "Calculate Grow A Garden crop values by weight and mutation, estimate pet stats, and compare trades with free fan-made tools using site-stored data.";

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


export default function HomePage() {
  // Get popular crops for quick links
  const popularCrops = CROPS.filter(c =>
    ["mango", "easter-egg", "starfruit", "diamond-fruit", "aurora-vine", "void-berry", "golden-apple", "magic-bean", "crystal-lotus", "dragon-fruit", "coconut", "watermelon", "phantom-pepper", "dino-egg-plant", "strawberry", "pepper", "eggplant", "butternut-squash", "badland-pepper", "papaya", "mint", "aloe-vera", "zen-lily"].includes(c.id)
  );

  return (
    <div>
      {/* Main Interactive App Section */}
      <section className="min-h-screen pt-8 pb-16 px-4 sm:px-6 relative overflow-hidden" style={{ background: 'var(--background)' }}>
        
        {/* Background effects specific to home */}
        <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-[#111927] to-transparent pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          
          <div className="text-center mb-8">
            {/* These dates are repository file-change dates, not game patch verification dates. */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold mb-4 border" style={{ background: 'var(--surface-1)', borderColor: 'rgba(34,197,94,0.3)', color: 'var(--primary)' }}>
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>Dataset files last changed: crops {formatDataUpdatedAt("crops")} · mutations {formatDataUpdatedAt("mutations")} · pets {formatDataUpdatedAt("pets")}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black mb-3" style={{ fontFamily: 'var(--font-display)', color: 'var(--foreground)' }}>
              Grow A Garden <span style={{ background: 'var(--gradient-1)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Calculator (GAG)</span>
            </h1>
            <p className="text-xs sm:text-sm font-semibold mb-6" style={{ color: 'var(--muted)' }}>
              Fruit values, pet stats & mutation multipliers — free, no signup
            </p>
            <p className="text-sm sm:text-base font-medium max-w-2xl mx-auto mb-6" style={{ color: 'var(--muted)' }}>
              Estimate crop values from weight and selected mutations, inspect pet calculator inputs, and compare crop totals before a trade. Results use this site&apos;s stored data and calculation rules; they are not live market quotes.
            </p>
            <h2 className="text-xl sm:text-2xl font-bold text-center" style={{ fontFamily: 'var(--font-display)', color: 'var(--foreground)' }}>
              How to Use the GAG Calculator
            </h2>
          </div>

          {/* Dataset update dates */}
          <div className="mb-6 p-4 rounded-2xl border flex flex-col sm:flex-row items-center justify-between gap-3 text-left" style={{ background: 'var(--surface-1)', borderColor: 'var(--glass-border)' }}>
            <div className="flex items-center gap-3">
              <span className="text-2xl">✨</span>
              <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--primary)]">Dataset change dates</h3>
                <p className="text-xs font-semibold text-[var(--foreground)]">Crop file: {formatDataUpdatedAt("crops")} · Mutation file: {formatDataUpdatedAt("mutations")} · Pet file: {formatDataUpdatedAt("pets")}</p>
              </div>
            </div>
            <a href="https://discord.gg/growagarden" target="_blank" rel="noopener noreferrer" className="text-xs font-bold px-3 py-1.5 rounded-xl bg-[var(--primary)] text-white hover:opacity-90 shrink-0 transition-opacity">
              Join Discord Updates →
            </a>
          </div>

          {/* Factual Codebase Trust Banner */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
            {[
              { value: `${CROPS.length}`, label: "Stored crop records", icon: "🌾" },
              { value: `${MUTATIONS.length}`, label: "Stored mutations", icon: "🧬" },
              { value: `${PETS.length}`, label: "Stored pet records", icon: "🐾" },
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
                <p className="font-bold text-[var(--foreground)] mb-1">🌾 Crop Base Values</p>
                <p>Crop base prices are read from the site&apos;s crop dataset. The date above is the file&apos;s last repository change, not a patch verification date.</p>
              </div>
              <div className="p-3 rounded-xl" style={{ background: "var(--surface-2)" }}>
                <p className="font-bold text-[var(--foreground)] mb-1">⚖️ Weight Calculation</p>
                <p>The crop tool applies its stored formula: base price × weight in kg squared, then selected mutation, boost and quantity factors.</p>
              </div>
              <div className="p-3 rounded-xl" style={{ background: "var(--surface-2)" }}>
                <p className="font-bold text-[var(--foreground)] mb-1">🧬 Compounded Mutation Multipliers</p>
                <p>Selected multipliers are compounded by this site&apos;s formula. See the mutation guide and verify time-sensitive mechanics in game.</p>
              </div>
              <div className="p-3 rounded-xl" style={{ background: "var(--surface-2)" }}>
                <p className="font-bold text-[var(--foreground)] mb-1">🔄 Data Updates</p>
                <p>Dates change when a corresponding data file changes in the repository. They do not establish that a patch was tested or the data is current.</p>
              </div>
            </div>
          </div>

          {/* Priority 6 Bookmark CTA Banner */}
          <div className="my-6 p-4 rounded-2xl border text-center text-xs" style={{ background: 'rgba(59,130,246,0.05)', borderColor: 'rgba(59,130,246,0.2)', color: 'var(--muted)' }}>
            📌 <strong>Tip:</strong> Bookmark the calculator for quick access. Check the data change dates and verify patch-sensitive details before using an estimate in a trade.
          </div>

          {/* Priority 4 EEAT Assets */}
          <EEATAssets />

        </div>
      </section>

      <HomepageGuide crops={popularCrops} />
    </div>
  );
}
