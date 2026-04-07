import type { Metadata } from "next";
import TradeCalculator from "@/components/TradeCalculator";

export const metadata: Metadata = {
  title: "GAG Calculator Trade Tools | Win Fair Lose | Grow A Garden",
  description: "Use the ultimate GAG calculator to compare trade values in Grow A Garden. Find out if your trade is a WIN, FAIR, or LOSE. Share trade exports.",
  keywords: ["gag calculator", "GAG trade calculator", "Grow A Garden trade", "trade win fair lose", "trade value calculator", "grow a garden calculator"],
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
    </div>
  );
}
