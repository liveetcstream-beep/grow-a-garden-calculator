import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "XP Calculator | Grow A Garden Player Level Guide",
  description: "Calculate how much XP you need to level up in Grow A Garden. Plan your farming strategy to reach max level quickly.",
  keywords: ["grow a garden xp calculator", "GAG xp guide", "how to level up fast in grow a garden", "roblox grow a garden levels"],
};

export default function XpCalculatorPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 text-center">
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold mb-6 border"
        style={{ background: "var(--surface-1)", borderColor: "var(--glass-border)", color: "var(--muted)" }}>
        ⭐ Coming Soon
      </div>
      <h1 className="text-4xl sm:text-5xl font-black mb-6" style={{ fontFamily: 'var(--font-display)', color: 'var(--foreground)' }}>
        XP Calculator
      </h1>
      <p className="text-base leading-relaxed mb-8" style={{ color: 'var(--muted)' }}>
        We are currently gathering the exact level-scaling data from the latest game update to ensure our <strong>XP Calculator</strong> is 100% accurate. 
        Soon, you'll be able to calculate exactly how many crops you need to harvest to reach your next level goal.
      </p>

      <div className="p-8 rounded-3xl border opacity-50 pointer-events-none" style={{ background: 'var(--surface-1)', borderColor: 'var(--glass-border)' }}>
        <div className="grid sm:grid-cols-2 gap-6 mb-6">
          <div className="text-left">
            <label className="block text-xs font-bold mb-2" style={{ color: 'var(--muted)' }}>Current Level</label>
            <input type="number" disabled value="50" className="w-full px-4 py-3 rounded-xl border bg-black/20" style={{ borderColor: 'var(--glass-border)' }} />
          </div>
          <div className="text-left">
            <label className="block text-xs font-bold mb-2" style={{ color: 'var(--muted)' }}>Target Level</label>
            <input type="number" disabled value="100" className="w-full px-4 py-3 rounded-xl border bg-black/20" style={{ borderColor: 'var(--glass-border)' }} />
          </div>
        </div>
        <button disabled className="w-full py-4 rounded-xl font-bold bg-gray-700 text-gray-400">
          Calculate XP Required
        </button>
      </div>
    </div>
  );
}
