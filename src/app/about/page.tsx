import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Grow A Garden Calculator — the most advanced free calculator tool suite for Roblox Grow A Garden players.",
  alternates: { canonical: "/about" },
  robots: { index: true, follow: true },
};

export default function AboutPage() {
  const features = [
    { emoji: "🌾", title: "Crop Value Calculator", desc: "Instantly calculate the exact coin value of any crop based on weight and mutations.", href: "/crop-calculator" },
    { emoji: "🧬", title: "Mutation Calculator", desc: "See how every mutation multiplier stacks to dramatically increase your crop's worth.", href: "/mutation-calculator" },
    { emoji: "🐾", title: "Pet Calculator", desc: "Calculate the value of your pets based on their rarity, type, and special abilities.", href: "/pet-calculator" },
    { emoji: "🤝", title: "Trade Calculator", desc: "Compare trade offers side-by-side and export them directly to Discord with one click.", href: "/trade-calculator" },
    { emoji: "🌱", title: "Seed Profit Calculator", desc: "Find out which seeds give the best return on investment per grow cycle.", href: "/seed-profit" },
    { emoji: "🎯", title: "Reverse Calculator", desc: "Set a coin goal and we'll tell you exactly which crop & mutation combo gets you there.", href: "/reverse-calculator" },
  ];

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6" style={{ background: "var(--background)" }}>
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold mb-6 border"
            style={{ background: "var(--surface-1)", borderColor: "var(--glass-border)", color: "var(--muted)" }}>
            🌱 About Us
          </div>
          <h1 className="text-4xl sm:text-5xl font-black mb-6" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
            The Ultimate{" "}
            <span style={{ background: "var(--gradient-1)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              GAG Calculator
            </span>
          </h1>
          <p className="text-base max-w-2xl mx-auto leading-relaxed" style={{ color: "var(--muted)" }}>
            We built the most comprehensive, accurate, and fast calculator suite for Roblox's Grow A Garden game — completely free, forever.
          </p>
        </div>

        {/* Mission */}
        <div className="p-8 rounded-3xl border mb-12 text-center" style={{ background: "var(--surface-1)", borderColor: "var(--glass-border)" }}>
          <p className="text-3xl mb-4">🎯</p>
          <h2 className="text-2xl font-black mb-4" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>Our Mission</h2>
          <p className="text-sm leading-relaxed max-w-2xl mx-auto" style={{ color: "var(--muted)" }}>
            Grow A Garden is a complex game with hundreds of crops, mutations, pets, and trading mechanics. We noticed players struggling with mental math and slow, outdated tools online. So we built GAG Calculator — a single, powerful hub that gives every player access to instant, accurate calculations to maximize their in-game earnings.
          </p>
        </div>

        {/* Features Grid */}
        <h2 className="text-2xl font-black mb-6 text-center" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
          Our Tools
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((f) => (
            <Link key={f.href} href={f.href}
              className="group p-6 rounded-2xl border transition-all duration-200 hover:scale-[1.02] hover:shadow-xl block"
              style={{ background: "var(--surface-1)", borderColor: "var(--glass-border)" }}>
              <div className="text-3xl mb-3">{f.emoji}</div>
              <h3 className="font-bold text-sm mb-2 group-hover:text-[var(--primary)] transition-colors" style={{ color: "var(--foreground)" }}>
                {f.title}
              </h3>
              <p className="text-xs leading-relaxed" style={{ color: "var(--muted)" }}>{f.desc}</p>
            </Link>
          ))}
        </div>

        {/* Why Us */}
        <div className="grid sm:grid-cols-3 gap-6 mb-16">
          {[
            { emoji: "⚡", title: "Lightning Fast", desc: "Results appear instantly as you type. No loading, no waiting." },
            { emoji: "🔄", title: "Always Updated", desc: "Our data is maintained regularly to stay in sync with the latest game patches." },
            { emoji: "🆓", title: "100% Free", desc: "Every tool, every feature, every calculation — completely free with no paywall." },
          ].map((item) => (
            <div key={item.title} className="p-6 rounded-2xl border text-center" style={{ background: "var(--surface-1)", borderColor: "var(--glass-border)" }}>
              <div className="text-3xl mb-3">{item.emoji}</div>
              <h3 className="font-bold text-sm mb-2" style={{ color: "var(--foreground)" }}>{item.title}</h3>
              <p className="text-xs" style={{ color: "var(--muted)" }}>{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="p-6 rounded-2xl border text-center" style={{ background: "rgba(255,165,0,0.05)", borderColor: "rgba(255,165,0,0.2)" }}>
          <p className="text-xs leading-relaxed" style={{ color: "var(--muted)" }}>
            <strong style={{ color: "var(--foreground)" }}>Disclaimer:</strong> Grow A Garden Calculator is a fan-made project and is NOT affiliated with, endorsed by, or connected to Roblox Corporation or the official Grow A Garden game developers. All game data is used for reference purposes only.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link href="/" className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-bold text-white transition-all hover:scale-105 hover:shadow-xl"
            style={{ background: "var(--gradient-1)" }}>
            🌱 Start Calculating
          </Link>
        </div>

      </div>
    </div>
  );
}
