import Link from "next/link";
import Dashboard from "@/components/Dashboard";

export default function HomePage() {
  return (
    <div>
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
            If you want to maximize your profits and dominate trading, you need an accurate <strong>grow a garden calculator</strong>. This multi-tool platform serves as a complete <strong>gag calculator</strong> suite replacing messy spreadsheets. From calculating exact crop mutation multipliers to finding the perfect trade offer, our tools are updated alongside every game patch.
          </p>
          <p className="mb-4" style={{ color: 'var(--muted)' }}>
            Looking for a reliable <strong>pet calculator grow a garden</strong> expansion? We have that too! Track exactly how much your mythical and divine pets are worth, combine them with your crop values, and get a true picture of your complete <strong>grow a garden value</strong> in your virtual backpack. Check your net worth live without any login required.
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
    </div>
  );
}
