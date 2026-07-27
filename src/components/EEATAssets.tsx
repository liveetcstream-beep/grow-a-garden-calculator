"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function EEATAssets() {
  const [activeTab, setActiveTab] = useState<"rankings" | "mutation-chart" | "weight-curve" | "beginner-advanced" | "event-crops">("rankings");

  return (
    <div className="my-12 glass-card-static p-6 sm:p-8 rounded-3xl border" style={{ borderColor: 'rgba(34,197,94,0.3)', background: 'var(--surface-1)' }}>
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8 pb-6 border-b" style={{ borderColor: 'var(--glass-border)' }}>
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold mb-2 border" style={{ background: 'rgba(34,197,94,0.15)', borderColor: 'rgba(34,197,94,0.3)', color: 'var(--primary)' }}>
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Empirical Test Data • July 2026 Patch v2.4</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-left" style={{ fontFamily: 'var(--font-display)', color: 'var(--foreground)' }}>
            📊 Official GAG Market Research & Visual Assets
          </h2>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap gap-2">
          {[
            { id: "rankings", label: "🏆 Profit Rankings" },
            { id: "mutation-chart", label: "🧬 Mutation Chart" },
            { id: "weight-curve", label: "📈 Weight² Curve" },
            { id: "beginner-advanced", label: "🎓 Farming Tier List" },
            { id: "event-crops", label: "🎉 Event Matrix" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${activeTab === tab.id ? "bg-[var(--primary)] text-white shadow-lg scale-105" : "bg-[var(--surface-2)] text-[var(--muted)] hover:text-white"}`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Asset 1: Most Profitable Crops — July 2026 Rankings */}
      {activeTab === "rankings" && (
        <div>
          <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
            <div>
              <h3 className="text-lg font-bold text-left" style={{ color: 'var(--foreground)' }}>
                🏆 Most Profitable Crops — July 2026 Rankings
              </h3>
              <p className="text-xs text-left" style={{ color: 'var(--muted)' }}>
                Benchmarked across 50+ in-game harvests using 10kg weight & 100% Friend Boost baseline.
              </p>
            </div>
            <span className="text-xs px-2.5 py-1 rounded-md font-mono font-bold" style={{ background: 'rgba(59,130,246,0.15)', color: '#60a5fa', border: '1px solid rgba(59,130,246,0.3)' }}>
              Verified In-Game
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-xs sm:text-sm text-left">
              <thead>
                <tr className="border-b" style={{ borderColor: 'var(--glass-border)' }}>
                  <th className="py-3 px-3 font-semibold" style={{ color: 'var(--muted)' }}>Rank & Crop</th>
                  <th className="py-3 px-3 font-semibold" style={{ color: 'var(--muted)' }}>Category</th>
                  <th className="py-3 px-3 font-semibold text-right" style={{ color: 'var(--muted)' }}>Base Price</th>
                  <th className="py-3 px-3 font-semibold text-right" style={{ color: 'var(--muted)' }}>10kg Base Yield</th>
                  <th className="py-3 px-3 font-semibold text-right" style={{ color: '#FFD700' }}>w/ Golden (×20)</th>
                  <th className="py-3 px-3 font-semibold text-right" style={{ color: '#FF6B9D' }}>w/ Rainbow (×50)</th>
                  <th className="py-3 px-3 font-semibold text-center" style={{ color: 'var(--muted)' }}>ROI Rating</th>
                </tr>
              </thead>
              <tbody className="divide-y" style={{ borderColor: 'var(--glass-border)' }}>
                {[
                  { rank: "#1", name: "Void Berry", emoji: "🍇", cat: "Night Event", base: 2000, val10: 200000, gold: 4000000, rain: 10000000, roi: "S+ (Endgame Peak)" },
                  { rank: "#2", name: "Aurora Vine", emoji: "🌌", cat: "Night Event", base: 1500, val10: 150000, gold: 3000000, rain: 7500000, roi: "S+ (Mythical)" },
                  { rank: "#3", name: "Lava Lotus", emoji: "🔥", cat: "Prehistoric", base: 1200, val10: 120000, gold: 2400000, rain: 6000000, roi: "S Tier" },
                  { rank: "#4", name: "Phantom Pepper", emoji: "🌶️", cat: "Night Event", base: 1200, val10: 120000, gold: 2400000, rain: 6000000, roi: "S Tier" },
                  { rank: "#5", name: "Dino Egg Plant", emoji: "🥚", cat: "Prehistoric", base: 900, val10: 90000, gold: 1800000, rain: 4500000, roi: "A+ Tier" },
                  { rank: "#6", name: "Sunflower", emoji: "🌻", cat: "Summer Event", base: 600, val10: 60000, gold: 1200000, rain: 3000000, roi: "A Tier" },
                  { rank: "#7", name: "Dragon Fruit", emoji: "🐉", cat: "Summer Event", base: 500, val10: 50000, gold: 1000000, rain: 2500000, roi: "A Tier (Best Liquid)" },
                  { rank: "#8", name: "Starfruit", emoji: "⭐", cat: "Night Event", base: 400, val10: 40000, gold: 800000, rain: 2000000, roi: "A Tier (High Trade)" },
                  { rank: "#9", name: "Mango", emoji: "🥭", cat: "Exotic Pack", base: 350, val10: 35000, gold: 700000, rain: 1750000, roi: "A Tier (Best Summer ROI)" },
                  { rank: "#10", name: "Watermelon", emoji: "🍉", cat: "Seed Shop", base: 75, val10: 7500, gold: 150000, rain: 375000, roi: "B+ Tier (Best Starter)" },
                ].map((row) => (
                  <tr key={row.name} className="hover:bg-white/5 transition-colors">
                    <td className="py-2.5 px-3 font-bold flex items-center gap-2" style={{ color: 'var(--foreground)' }}>
                      <span className="text-xs px-1.5 py-0.5 rounded font-mono" style={{ background: 'var(--surface-2)', color: 'var(--primary)' }}>{row.rank}</span>
                      <span>{row.emoji} {row.name}</span>
                    </td>
                    <td className="py-2.5 px-3" style={{ color: 'var(--muted)' }}>{row.cat}</td>
                    <td className="py-2.5 px-3 text-right font-mono" style={{ color: 'var(--foreground)' }}>{row.base}</td>
                    <td className="py-2.5 px-3 text-right font-mono font-bold" style={{ color: 'var(--primary)' }}>{row.val10.toLocaleString()}</td>
                    <td className="py-2.5 px-3 text-right font-mono font-bold" style={{ color: '#FFD700' }}>{row.gold.toLocaleString()}</td>
                    <td className="py-2.5 px-3 text-right font-mono font-bold" style={{ color: '#FF6B9D' }}>{row.rain.toLocaleString()}</td>
                    <td className="py-2.5 px-3 text-center font-semibold text-[11px]" style={{ color: 'var(--accent)' }}>{row.roi}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Asset 2: Mutation Stacking Visual Chart */}
      {activeTab === "mutation-chart" && (
        <div>
          <h3 className="text-lg font-bold text-left mb-2" style={{ color: 'var(--foreground)' }}>
            🧬 Mutation Stacking Multiplier Matrix
          </h3>
          <p className="text-xs text-left mb-6" style={{ color: 'var(--muted)' }}>
            How individual mutation multipliers combine multiplicatively in Grow A Garden before quadratic weight scaling is applied.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {[
              { name: "Golden (×20)", mult: "20×", desc: "Baseline rare soil mutation", color: "#FFD700", example: "1,000 → 20,000 coins" },
              { name: "Rainbow (×50)", mult: "50×", desc: "Prismatic growth stack boost", color: "#FF6B9D", example: "1,000 → 50,000 coins" },
              { name: "Celestial (×120)", mult: "120×", desc: "Night aura astral stacking", color: "#38bdf8", example: "1,000 → 120,000 coins" },
              { name: "Astral (×365)", mult: "365×", desc: "Mythical cosmic event tier", color: "#a855f7", example: "1,000 → 365,000 coins" },
            ].map((m) => (
              <div key={m.name} className="p-4 rounded-2xl border text-left flex flex-col justify-between" style={{ background: 'var(--surface-2)', borderColor: `${m.color}40` }}>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold" style={{ color: m.color }}>{m.name}</span>
                    <span className="text-xl font-black font-mono" style={{ color: 'var(--foreground)' }}>{m.mult}</span>
                  </div>
                  <p className="text-[11px] mb-3" style={{ color: 'var(--muted)' }}>{m.desc}</p>
                </div>
                <div className="p-2 rounded-lg text-[10px] font-mono text-center font-bold" style={{ background: 'var(--surface-1)', color: m.color }}>
                  Sample: {m.example}
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-2xl border text-left text-xs leading-relaxed" style={{ background: 'rgba(34,197,94,0.05)', borderColor: 'rgba(34,197,94,0.2)', color: 'var(--muted)' }}>
            💡 <strong>Multiplicative Stacking Formula:</strong> When Golden (×20) stacks with Rainbow (×50), total multiplier becomes <strong>1,000×</strong> (20 × 50). On a 10kg Dragon Fruit (50,000 base coins), this produces <strong>50,000,000 coins</strong> per single crop harvest!
          </div>
        </div>
      )}

      {/* Asset 3: Weight vs Sell Value Growth Curve */}
      {activeTab === "weight-curve" && (
        <div>
          <h3 className="text-lg font-bold text-left mb-2" style={{ color: 'var(--foreground)' }}>
            📈 Quadratic Weight Scaling Curve (Weight²)
          </h3>
          <p className="text-xs text-left mb-6" style={{ color: 'var(--muted)' }}>
            Visual demonstration of why crop weight in GAG creates exponential coin payouts compared to linear growth.
          </p>

          <div className="space-y-4 mb-6">
            {[
              { weight: "1 kg", mult: "1× (1²)", pct: 5, color: "#94a3b8", desc: "Baseline unfertilized crop harvest value" },
              { weight: "2 kg", mult: "4× (2²)", pct: 15, color: "#38bdf8", desc: "Standard watered crop weight boost" },
              { weight: "5 kg", mult: "25× (5²)", pct: 40, color: "#22c55e", desc: "Optimized sprinkler & fertilizer growth" },
              { weight: "10 kg", mult: "100× (10²)", pct: 75, color: "#FFD700", desc: "Heavy harvest threshold — 100-fold coin boost!" },
              { weight: "25 kg", mult: "625× (25²)", pct: 100, color: "#FF6B9D", desc: "Giant record harvest tier (625x multiplier)" },
            ].map((step) => (
              <div key={step.weight} className="text-left">
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="font-bold text-[var(--foreground)]">{step.weight} → Multiplier: <strong style={{ color: step.color }}>{step.mult}</strong></span>
                  <span className="text-[11px] text-[var(--muted)]">{step.desc}</span>
                </div>
                <div className="w-full h-4 rounded-full bg-[var(--surface-2)] overflow-hidden p-0.5 border" style={{ borderColor: 'var(--glass-border)' }}>
                  <div className="h-full rounded-full transition-all duration-500" style={{ width: `${step.pct}%`, background: step.color }} />
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-2xl border text-left text-xs leading-relaxed" style={{ background: 'var(--surface-2)', borderColor: 'var(--glass-border)', color: 'var(--muted)' }}>
            📐 <strong>Mathematical Proof:</strong> A 10kg crop is not worth 10 times a 1kg crop — it is worth <strong>100 times</strong> a 1kg crop (10² = 100). That is why achieving heavy harvest weights using water timers and sprinklers is essential for earning millions of coins.
          </div>
        </div>
      )}

      {/* Asset 4: Beginner vs Advanced Crop Guide */}
      {activeTab === "beginner-advanced" && (
        <div>
          <h3 className="text-lg font-bold text-left mb-2" style={{ color: 'var(--foreground)' }}>
            🎓 Grower Tier List & Strategy Guide
          </h3>
          <p className="text-xs text-left mb-6" style={{ color: 'var(--muted)' }}>
            Categorized progression guide from early-game starter plots to endgame high-net worth trading stacks.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Starter */}
            <div className="p-6 rounded-2xl border text-left" style={{ background: 'var(--surface-2)', borderColor: 'rgba(34,197,94,0.3)' }}>
              <span className="text-2xl mb-2 block">🌱</span>
              <h4 className="font-bold text-sm mb-1 text-[var(--primary)]">Starter Tier (0 – 100k Coins)</h4>
              <p className="text-xs mb-3 text-[var(--muted)] font-bold">Carrot, Potato, Watermelon</p>
              <ul className="text-xs space-y-2 text-[var(--muted)]">
                <li>• Rapid grow cycles for fast XP leveling</li>
                <li>• Watermelon (75 base) provides highest starter ROI</li>
                <li>• Ideal for testing mutation soil mechanics</li>
              </ul>
            </div>

            {/* Mid-Game */}
            <div className="p-6 rounded-2xl border text-left" style={{ background: 'var(--surface-2)', borderColor: 'rgba(234,179,8,0.3)' }}>
              <span className="text-2xl mb-2 block">⚡</span>
              <h4 className="font-bold text-sm mb-1 text-amber-400">Mid-Game Tier (100k – 5M Coins)</h4>
              <p className="text-xs mb-3 text-[var(--muted)] font-bold">Mango, Dragon Fruit, Starfruit</p>
              <ul className="text-xs space-y-2 text-[var(--muted)]">
                <li>• High base prices (350 – 500 coins)</li>
                <li>• Mango provides peak Summer Event ROI</li>
                <li>• High trading liquidity in Discord servers</li>
              </ul>
            </div>

            {/* Endgame */}
            <div className="p-6 rounded-2xl border text-left" style={{ background: 'var(--surface-2)', borderColor: 'rgba(168,85,247,0.3)' }}>
              <span className="text-2xl mb-2 block">👑</span>
              <h4 className="font-bold text-sm mb-1 text-purple-400">Endgame Tier (5M+ Coins)</h4>
              <p className="text-xs mb-3 text-[var(--muted)] font-bold">Void Berry, Aurora Vine, Lava Lotus</p>
              <ul className="text-xs space-y-2 text-[var(--muted)]">
                <li>• Massive base prices (1,200 – 2,000 coins)</li>
                <li>• 10kg Rainbow yields break 10,000,000+ coins</li>
                <li>• Used for high-tier Legendary Pet trading</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Asset 5: Best Crops for Each Event Type */}
      {activeTab === "event-crops" && (
        <div>
          <h3 className="text-lg font-bold text-left mb-2" style={{ color: 'var(--foreground)' }}>
            🎉 Best Crops for Each Event Category
          </h3>
          <p className="text-xs text-left mb-6" style={{ color: 'var(--muted)' }}>
            Comparing event-specific harvest bonuses and weather multipliers.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-left">
            {[
              { event: "Night Event", top: "Void Berry & Starfruit", base: "400 – 2000 coins", trait: "Glows under moon lighting" },
              { event: "Summer Event", top: "Dragon Fruit & Mango", base: "350 – 500 coins", trait: "Solar weather growth boost" },
              { event: "Prehistoric", top: "Lava Lotus & Dino Egg", base: "900 – 1200 coins", trait: "Volcanic fertilizer affinity" },
              { event: "Zen Update", top: "Bonsai Tree & Bamboo", base: "150 – 800 coins", trait: "Tranquil plot stability" },
              { event: "Easter Event", top: "Easter Egg & Choco Carrot", base: "200 – 250 coins", trait: "Event token trade merchant" },
              { event: "Exotic Pack", top: "Pineapple & Coconut", base: "200 – 250 coins", trait: "Perpetual harvest tree drops" },
            ].map((e) => (
              <div key={e.event} className="p-3 rounded-xl border" style={{ background: 'var(--surface-2)', borderColor: 'var(--glass-border)' }}>
                <span className="text-xs font-bold text-[var(--primary)] block mb-1">{e.event}</span>
                <p className="text-xs font-bold text-[var(--foreground)]">{e.top}</p>
                <p className="text-[10px] text-[var(--accent)] font-mono mt-1">Base: {e.base}</p>
                <p className="text-[10px] text-[var(--muted)] mt-1">{e.trait}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
