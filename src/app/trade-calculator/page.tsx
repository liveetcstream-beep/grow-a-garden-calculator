import type { Metadata } from "next";
import TradeCalculator from "@/components/TradeCalculator";
import Link from "next/link";

export const metadata: Metadata = {
  title: "GAG Calculator Trade Tools | Win Fair Lose | Grow A Garden",
  description: "Use the ultimate GAG calculator to compare trade values in Grow A Garden. Find out if your trade is a WIN, FAIR, or LOSE. Share trade exports.",
  keywords: [
    "grow a garden trade calculator", 
    "gag trade calculator", 
    "trade calculator grow a garden", 
    "gag calculator", 
    "GAG trade calculator", 
    "Grow A Garden trade", 
    "trade win fair lose", 
    "trade value calculator", 
    "grow a garden calculator",
    "trading grow a garden value",
    "trade value grow a garden"
  ],
  alternates: { canonical: '/trade-calculator' },
};

export default function TradeCalculatorPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-3" style={{ fontFamily: 'var(--font-display)', color: 'var(--foreground)' }}>
          🤝 GAG Calculator: Trade Analysis
        </h1>
        <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
          Welcome to the premier <strong>gag calculator</strong> for trades. Add items to both sides of a trade, including crop weight and mutations. Instantly calculate if a trade is a WIN, FAIR, or LOSE and export directly to Discord!
        </p>
      </div>
      
      <TradeCalculator />

      {/* Trading Guide & Economics Section */}
      <section className="mt-16 border-t pt-12 text-center sm:text-left" style={{ borderColor: 'var(--glass-border)' }}>
        <div className="max-w-4xl mx-auto prose prose-invert prose-sm sm:prose-base">
          <h2 className="text-2xl font-bold mb-6 text-white" style={{ fontFamily: 'var(--font-display)' }}>
            Roblox Grow A Garden Trading Guide & Economics
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8 text-left">
            <div>
              <h3 className="text-lg font-bold mb-3 text-[var(--primary)]">How the Trade Calculator Works</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
                Our <strong>grow a garden trade calculator</strong> uses the official formula to calculate the exact coin value of all crops and pets on both sides of a trade. 
                By factoring in crop weight scales (which scale quadratically as Weight²), mutation multipliers, and pet rarity tiers, the engine delivers a transparent 
                <strong>Win / Fair / Lose (W/F/L)</strong> output. This ensures you never execute bad trades.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-3 text-[var(--primary)]">Understanding GAG Pet Rarity & Multipliers</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
                Unlike crops, pets have fixed base values (e.g. <strong>Kitsune</strong> at 18,000 coins, <strong>Phoenix</strong> at 15,000 coins) combined with 
                unique ability multipliers. When checking the <strong>gag pet calculator</strong> margins, keep in mind that high-tier divine pets like the 
                <strong>Celestial Dragon</strong> are highly sought-after. Always verify demand tiers along with basic calculator numbers.
              </p>
            </div>
          </div>

          <div className="glass-card-static p-6 mb-8 text-left">
            <h3 className="text-lg font-bold mb-3 text-white">Top 3 Trading Rules in GAG</h3>
            <ul className="text-sm space-y-2 list-disc pl-5" style={{ color: 'var(--muted)' }}>
              <li>
                <strong>Always Factor in Mutations:</strong> A crop with a Golden (x20) or Rainbow (x50) mutation is worth far more than a standard crop. Always apply mutation filters in the <strong>gag trade calculator</strong>.
              </li>
              <li>
                <strong>Watch the Weight Scaling:</strong> Because value scales with Weight², a single 10kg crop is worth 100 times more than a 1kg crop of the same type. Weight is the ultimate profit driver!
              </li>
              <li>
                <strong>Check the Value List:</strong> Before locking in a trade offer, cross-reference base values on our complete{" "}
                <Link href="/value-list" className="text-[var(--primary)] hover:underline font-semibold">
                  Grow A Garden Value List
                </Link>{" "}
                to check real-time changes in item rankings.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
