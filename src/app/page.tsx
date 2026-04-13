import Link from "next/link";
import Dashboard from "@/components/Dashboard";
import { CROPS } from "@/data/crops";

const FAQ_DATA = [
  {
    q: "How much is Easter Egg Fruit worth in Grow A Garden?",
    a: "The Easter Egg has a base price of 250 coins. With a Golden mutation (×20) at 10 kg weight, it can reach 500,000+ coins. Use our grow a garden calculator to find the exact value with your specific weight and mutations."
  },
  {
    q: "What is the Mango value in the Grow A Garden calculator?",
    a: "Mango has a base price of 350 coins, making it one of the most valuable Exotic Seed Pack crops. At 10 kg with a Rainbow mutation (×50), it reaches over 1,750,000 coins. Use our gag calculator for exact values."
  },
  {
    q: "How do Firework Mutation multipliers work in GAG?",
    a: "The Firework Mutation in Grow A Garden applies a multiplicative bonus to your crop's base value. Stack it with other mutations like Golden or Rainbow for massive multipliers. Use the mutation calculator to see combined effects."
  },
  {
    q: "What does Whimsical Mutation do in Grow A Garden?",
    a: "The Whimsical Mutation is one of the most sought-after multipliers in GAG. It dramatically increases your crop's final sell value. Open the mutation calculator to see exact multiplier values and stack combinations."
  },
  {
    q: "How does the Pet Calculator Grow A Garden work?",
    a: "The pet calculator grow a garden tool uses weight, age, rarity, and ability modifiers to calculate exact pet values. Heavier and older pets are worth significantly more due to logarithmic weight scaling and linear age bonuses."
  },
  {
    q: "What is the GAG Calculator formula for crop value?",
    a: "The official formula is: Final Value = Base Price × Weight² × Mutation Multipliers × Friend Boost × Quantity. Our grow a garden calculator applies this formula automatically — just select your crop and enter your parameters."
  },
  {
    q: "What is the Glimmering Mutation multiplier in Grow A Garden?",
    a: "The Glimmering Mutation is a rare and powerful mutation that provides a high value multiplier in Grow A Garden. Check the mutation calculator page for the exact glimmering mutation grow a garden multiplier value."
  },
  {
    q: "How do I use the Stampede Mutation in Grow A Garden?",
    a: "The Stampede Mutation is a special mutation that multiplies your crop value. Grow a garden stampede mutation can be stacked with other mutations. Use the calculator grow a garden tool to see its exact effect on any crop."
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
        "text": faq.a
      }
    }))
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
      {/* Main Interactive App Section */}
      <section className="min-h-screen pt-8 pb-16 px-4 sm:px-6 relative overflow-hidden" style={{ background: 'var(--background)' }}>
        
        {/* Background effects specific to home */}
        <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-[#111927] to-transparent pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-5xl font-black mb-3" style={{ fontFamily: 'var(--font-display)', color: 'var(--foreground)' }}>
              Grow A Garden <span style={{ background: 'var(--gradient-1)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Calculator</span>
            </h1>
            <h2 className="text-sm sm:text-base font-medium max-w-2xl mx-auto" style={{ color: 'var(--muted)' }}>
              Welcome to the ultimate <strong className="text-[var(--foreground)] font-bold">GAG calculator</strong>. Accurately figure out your <strong className="text-[var(--foreground)] font-bold">grow a garden value</strong> for crops, pets, and trades instantly.
            </h2>
          </div>

          {/* The new Visual Grid Dashboard */}
          <Dashboard />

        </div>
      </section>

      {/* Deep SEO Content Section */}
      <section className="py-12 border-t" style={{ borderColor: 'var(--glass-border)', background: 'var(--background)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 prose prose-invert prose-sm sm:prose-base text-center sm:text-left">
          <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)', color: 'var(--foreground)' }}>
            The #1 Calculator Grow A Garden Players Trust
          </h2>
          <p className="mb-4" style={{ color: 'var(--muted)' }}>
            If you want to maximize your profits and dominate trading, you need an strictly accurate <strong>grow a garden calculator</strong>. This multi-tool platform serves as a complete <strong>gag calculator</strong> suite replacing messy spreadsheets. From calculating exact multipliers with the integrated <strong>grow a garden mutation</strong> tools to finding the perfect trade offer, we keep everything updated to reflect the true <strong>grow a garden values</strong> in real-time. Whether you need a standard <strong>weight calculator grow a garden</strong> formula, a massive <strong>grow a garden kg calculator</strong>, or just want to quickly check the <strong>kalkulator grow a garden</strong> format for international trading, this covers it all.
          </p>
          <p className="mb-4" style={{ color: 'var(--muted)' }}>
            Looking for a reliable <strong>pet calculator grow a garden</strong> expansion? We have that too! Track exactly how much your mythical and divine pets are worth, check their current <strong>grow a garden pet value</strong> margins, combine them with your crop yields, and get a true picture of your complete <strong>grow a garden value</strong> in your virtual backpack. Check your net worth live without any login required.
          </p>
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
                  <p className="pt-4">{faq.a}</p>
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
