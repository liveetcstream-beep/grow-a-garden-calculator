import type { Metadata } from "next";
import Link from "next/link";
import { CROPS } from "@/data/crops";
import { formatNumber } from "@/lib/calculator";

export const metadata: Metadata = {
  title: "Grow A Garden Value List | All Crop & Pet Values",
  description: "The complete, up-to-date grow a garden value list for all crops, seeds, and pets. Check the exact base values before you trade.",
  keywords: ["grow a garden value", "value list grow a garden", "GAG value list", "grow a garden crop values"],
};

export default function ValueListPage() {
  const categories = Array.from(new Set(CROPS.map(c => c.category)));

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-black mb-4" style={{ fontFamily: 'var(--font-display)', color: 'var(--foreground)' }}>
          Grow A Garden <span style={{ background: 'var(--gradient-1)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Value List</span>
        </h1>
        <p className="text-sm max-w-2xl mx-auto leading-relaxed" style={{ color: 'var(--muted)' }}>
          Welcome to the most accurate <strong>grow a garden value</strong> database. Below is the complete, official value list for every plant/crop in the game. Use this list to check base coin values, or click on any crop to open the full calculator.
        </p>
      </div>

      <div className="space-y-12">
        {categories.map(category => {
          const categoryCrops = CROPS.filter(c => c.category === category);
          
          return (
            <div key={category} className="rounded-3xl border overflow-hidden shadow-xl" style={{ background: 'var(--surface-1)', borderColor: 'var(--glass-border)' }}>
              <div className="px-6 py-4 border-b" style={{ background: 'rgba(255,255,255,0.02)', borderColor: 'var(--glass-border)' }}>
                <h2 className="text-xl font-bold uppercase tracking-wider" style={{ fontFamily: 'var(--font-display)', color: 'var(--foreground)' }}>
                  {category}
                </h2>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="text-xs uppercase tracking-wider" style={{ color: 'var(--muted)', background: 'rgba(0,0,0,0.2)' }}>
                      <th className="px-6 py-4 font-semibold w-16">Icon</th>
                      <th className="px-6 py-4 font-semibold">Name</th>
                      <th className="px-6 py-4 font-semibold text-right">Base Value (Coins)</th>
                      <th className="px-6 py-4 font-semibold text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y" style={{ borderColor: 'var(--glass-border)' }}>
                    {categoryCrops.map(crop => (
                      <tr key={crop.id} className="transition-colors hover:bg-white/5">
                        <td className="px-6 py-4 text-3xl">{crop.emoji}</td>
                        <td className="px-6 py-4 font-bold text-sm" style={{ color: 'var(--foreground)' }}>{crop.name}</td>
                        <td className="px-6 py-4 font-mono font-bold text-right text-[var(--primary)] text-sm">
                          {formatNumber(crop.basePrice)}
                        </td>
                        <td className="px-6 py-4 text-center">
                          <Link 
                            href={`/crop-calculator`} 
                            className="inline-block px-4 py-2 rounded-xl text-xs font-bold transition-all hover:scale-105"
                            style={{ background: 'var(--primary)', color: 'white' }}
                          >
                            Calculate
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
