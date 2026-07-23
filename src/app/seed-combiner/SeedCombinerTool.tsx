"use client";

import { useState, useMemo } from "react";
import { formatNumber } from "@/lib/calculator";

const SEED_TIERS = [
  { id: "common", name: "Common Seed", color: "#9CA3AF", baseChance: { common: 80, uncommon: 20, rare: 0, epic: 0, legendary: 0, mythic: 0 } },
  { id: "uncommon", name: "Uncommon Seed", color: "#22C55E", baseChance: { common: 30, uncommon: 50, rare: 20, epic: 0, legendary: 0, mythic: 0 } },
  { id: "rare", name: "Rare Seed", color: "#3B82F6", baseChance: { common: 0, uncommon: 20, rare: 60, epic: 18, legendary: 2, mythic: 0 } },
  { id: "epic", name: "Epic Seed", color: "#A855F7", baseChance: { common: 0, uncommon: 0, rare: 25, epic: 50, legendary: 20, mythic: 5 } },
  { id: "legendary", name: "Legendary Seed", color: "#F59E0B", baseChance: { common: 0, uncommon: 0, rare: 0, epic: 30, legendary: 55, mythic: 15 } },
  { id: "mythic", name: "Mythic Seed", color: "#EF4444", baseChance: { common: 0, uncommon: 0, rare: 0, epic: 0, legendary: 40, mythic: 60 } },
];

const CATALYSTS = [
  { id: "none", name: "No Catalyst", bonus: 0 },
  { id: "silver", name: "Silver Catalyst (+10% Tier Upgrade)", bonus: 10 },
  { id: "golden", name: "Golden Catalyst (+20% Tier Upgrade)", bonus: 20 },
  { id: "rainbow", name: "Rainbow Catalyst (+35% Tier Upgrade)", bonus: 35 },
];

export default function SeedCombinerTool() {
  // Simulator State
  const [seed1, setSeed1] = useState("rare");
  const [seed2, setSeed2] = useState("rare");
  const [catalyst, setCatalyst] = useState("none");

  // 18 Watermelons Tool State
  const [wmQty, setWmQty] = useState(18);
  const [wmWeight, setWmWeight] = useState(1);
  const [wmMutation, setWmMutation] = useState(1);
  const [wmFriendBoost, setWmFriendBoost] = useState(0);

  // Mutation Probability State
  const [soil, setSoil] = useState("normal");
  const [spray, setSpray] = useState("none");

  // Fusion Odds Calculation
  const fusionResults = useMemo(() => {
    const s1 = SEED_TIERS.find(s => s.id === seed1) || SEED_TIERS[0];
    const s2 = SEED_TIERS.find(s => s.id === seed2) || SEED_TIERS[0];
    const cat = CATALYSTS.find(c => c.id === catalyst) || CATALYSTS[0];

    let c = (s1.baseChance.common + s2.baseChance.common) / 2;
    let uc = (s1.baseChance.uncommon + s2.baseChance.uncommon) / 2;
    let r = (s1.baseChance.rare + s2.baseChance.rare) / 2;
    let ep = (s1.baseChance.epic + s2.baseChance.epic) / 2;
    let leg = (s1.baseChance.legendary + s2.baseChance.legendary) / 2;
    let my = (s1.baseChance.mythic + s2.baseChance.mythic) / 2;

    if (cat.bonus > 0) {
      const shift = cat.bonus / 2;
      if (c > 0) { const dec = Math.min(c, shift); c -= dec; r += dec; }
      if (uc > 0) { const dec = Math.min(uc, shift); uc -= dec; ep += dec; }
      if (r > 0) { const dec = Math.min(r, shift / 2); r -= dec; leg += dec; }
      if (ep > 0) { const dec = Math.min(ep, shift / 2); ep -= dec; my += dec; }
    }

    const total = c + uc + r + ep + leg + my;

    return [
      { tier: "Common", pct: Math.round((c / total) * 100), color: "#9CA3AF" },
      { tier: "Uncommon", pct: Math.round((uc / total) * 100), color: "#22C55E" },
      { tier: "Rare", pct: Math.round((r / total) * 100), color: "#3B82F6" },
      { tier: "Epic", pct: Math.round((ep / total) * 100), color: "#A855F7" },
      { tier: "Legendary", pct: Math.round((leg / total) * 100), color: "#F59E0B" },
      { tier: "Mythic", pct: Math.round((my / total) * 100), color: "#EF4444" },
    ].filter(res => res.pct > 0);
  }, [seed1, seed2, catalyst]);

  // Watermelon Earnings Calculation
  const watermelonTotal = useMemo(() => {
    const basePrice = 120;
    const weightFactor = Math.pow(Math.max(0, wmWeight), 2);
    const friendFactor = 1 + (Math.max(0, wmFriendBoost) / 100);
    return Math.round(basePrice * weightFactor * wmMutation * friendFactor * Math.max(0, wmQty));
  }, [wmQty, wmWeight, wmMutation, wmFriendBoost]);

  // Mutation Chance Calculation
  const mutationChances = useMemo(() => {
    let baseGolden = 10;
    let baseRainbow = 3;
    let baseCelestial = 0.5;

    if (soil === "night") { baseGolden += 5; baseRainbow += 4; }
    if (soil === "eclipse") { baseGolden += 15; baseRainbow += 10; baseCelestial += 2; }
    if (soil === "bloodmoon") { baseGolden += 25; baseRainbow += 20; baseCelestial += 5; }

    if (spray === "golden") { baseGolden *= 2; }
    if (spray === "rainbow") { baseRainbow *= 3; }
    if (spray === "quantum") { baseGolden *= 2.5; baseRainbow *= 3.5; baseCelestial *= 5; }

    return {
      golden: Math.min(100, Math.round(baseGolden * 10) / 10),
      rainbow: Math.min(100, Math.round(baseRainbow * 10) / 10),
      celestial: Math.min(100, Math.round(baseCelestial * 10) / 10),
    };
  }, [soil, spray]);

  return (
    <div className="space-y-12 my-8 text-left">
      
      {/* TOOL 1: Interactive Seed Fusion Simulator */}
      <div className="glass-card-static p-6 sm:p-8 border-2" style={{ borderColor: 'var(--primary)' }}>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl" style={{ background: 'var(--surface-2)' }}>
            🧬
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-left" style={{ fontFamily: 'var(--font-display)', color: 'var(--foreground)' }}>
              Interactive Seed Combination Simulator
            </h2>
            <p className="text-xs sm:text-sm text-left" style={{ color: 'var(--muted)' }}>
              Select two input seed tiers and an optional catalyst to predict fusion output probability.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 mb-8">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: 'var(--muted)' }}>
              First Seed Input
            </label>
            <select
              value={seed1}
              onChange={(e) => setSeed1(e.target.value)}
              className="w-full p-3.5 rounded-xl font-bold text-sm border outline-none cursor-pointer"
              style={{ background: 'var(--surface-1)', borderColor: 'var(--glass-border)', color: 'var(--foreground)' }}
            >
              {SEED_TIERS.map(s => (
                <option key={s.id} value={s.id}>{s.name}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: 'var(--muted)' }}>
              Second Seed Input
            </label>
            <select
              value={seed2}
              onChange={(e) => setSeed2(e.target.value)}
              className="w-full p-3.5 rounded-xl font-bold text-sm border outline-none cursor-pointer"
              style={{ background: 'var(--surface-1)', borderColor: 'var(--glass-border)', color: 'var(--foreground)' }}
            >
              {SEED_TIERS.map(s => (
                <option key={s.id} value={s.id}>{s.name}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: 'var(--muted)' }}>
              Fusion Catalyst
            </label>
            <select
              value={catalyst}
              onChange={(e) => setCatalyst(e.target.value)}
              className="w-full p-3.5 rounded-xl font-bold text-sm border outline-none cursor-pointer"
              style={{ background: 'var(--surface-1)', borderColor: 'var(--glass-border)', color: 'var(--foreground)' }}
            >
              {CATALYSTS.map(c => (
                <option key={c.id} value={c.id}>{c.name}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="p-6 rounded-2xl border" style={{ background: 'var(--surface-1)', borderColor: 'var(--glass-border)' }}>
          <h3 className="text-sm font-bold uppercase tracking-wider mb-4 text-left" style={{ color: 'var(--foreground)' }}>
            Predicted Outcome Probabilities
          </h3>
          <div className="space-y-3">
            {fusionResults.map(res => (
              <div key={res.tier} className="space-y-1">
                <div className="flex justify-between text-xs font-bold">
                  <span style={{ color: res.color }}>{res.tier} Tier</span>
                  <span className="font-mono text-white">{res.pct}%</span>
                </div>
                <div className="w-full h-3 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.05)' }}>
                  <div 
                    className="h-full rounded-full transition-all duration-300" 
                    style={{ width: `${res.pct}%`, background: res.color }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* TOOL 2: Interactive 18 Watermelons Earning Calculator */}
      <div className="glass-card-static p-6 sm:p-8 border" style={{ borderColor: 'var(--glass-border)' }}>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl" style={{ background: 'rgba(34,197,94,0.1)' }}>
            🍉
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-left" style={{ fontFamily: 'var(--font-display)', color: 'var(--foreground)' }}>
              18 Watermelons Earning Calculator
            </h2>
            <p className="text-xs sm:text-sm text-left" style={{ color: 'var(--muted)' }}>
              Calculate exact profit for 18 watermelons (or any stack) with weight and mutation multipliers.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-4 gap-4 mb-6">
          <div>
            <label className="block text-xs font-bold mb-1.5" style={{ color: 'var(--muted)' }}>Quantity Stack</label>
            <input
              type="number"
              min="1"
              value={wmQty}
              onChange={(e) => setWmQty(Number(e.target.value))}
              className="w-full p-3 rounded-xl font-bold text-sm border outline-none"
              style={{ background: 'var(--surface-1)', borderColor: 'var(--glass-border)', color: 'var(--foreground)' }}
            />
          </div>

          <div>
            <label className="block text-xs font-bold mb-1.5" style={{ color: 'var(--muted)' }}>Avg Weight (kg)</label>
            <input
              type="number"
              min="0.1"
              step="0.5"
              value={wmWeight}
              onChange={(e) => setWmWeight(Number(e.target.value))}
              className="w-full p-3 rounded-xl font-bold text-sm border outline-none"
              style={{ background: 'var(--surface-1)', borderColor: 'var(--glass-border)', color: 'var(--foreground)' }}
            />
          </div>

          <div>
            <label className="block text-xs font-bold mb-1.5" style={{ color: 'var(--muted)' }}>Mutation Boost</label>
            <select
              value={wmMutation}
              onChange={(e) => setWmMutation(Number(e.target.value))}
              className="w-full p-3 rounded-xl font-bold text-sm border outline-none cursor-pointer"
              style={{ background: 'var(--surface-1)', borderColor: 'var(--glass-border)', color: 'var(--foreground)' }}
            >
              <option value={1}>None (1x)</option>
              <option value={20}>Golden (×20)</option>
              <option value={50}>Rainbow (×50)</option>
              <option value={120}>Celestial (×120)</option>
              <option value={365}>Astral (×365)</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold mb-1.5" style={{ color: 'var(--muted)' }}>Friend Boost %</label>
            <input
              type="number"
              min="0"
              max="100"
              value={wmFriendBoost}
              onChange={(e) => setWmFriendBoost(Number(e.target.value))}
              className="w-full p-3 rounded-xl font-bold text-sm border outline-none"
              style={{ background: 'var(--surface-1)', borderColor: 'var(--glass-border)', color: 'var(--foreground)' }}
            />
          </div>
        </div>

        <div className="p-6 rounded-2xl text-center border" style={{ background: 'rgba(34,197,94,0.05)', borderColor: 'var(--primary)' }}>
          <p className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: 'var(--primary)' }}>
            Calculated Total Earnings ({wmQty} Watermelons)
          </p>
          <p className="text-3xl sm:text-4xl font-mono font-black" style={{ color: 'var(--primary)' }}>
            {formatNumber(watermelonTotal)} Coins
          </p>
          <p className="text-xs mt-2" style={{ color: 'var(--muted)' }}>
            Formula: 120 Coins Base × {wmWeight}² kg × {wmMutation}x Mutation × (1 + {wmFriendBoost}%) × {wmQty}
          </p>
        </div>
      </div>

      {/* TOOL 3: Mutation Probability Calculator */}
      <div className="glass-card-static p-6 sm:p-8 border" style={{ borderColor: 'var(--glass-border)' }}>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl" style={{ background: 'rgba(168,85,247,0.1)' }}>
            🧪
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-left" style={{ fontFamily: 'var(--font-display)', color: 'var(--foreground)' }}>
              Mutation Probability Calculator
            </h2>
            <p className="text-xs sm:text-sm text-left" style={{ color: 'var(--muted)' }}>
              Estimate mutation trigger rates based on weather events and fertilizers.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: 'var(--muted)' }}>
              Event / Weather Condition
            </label>
            <select
              value={soil}
              onChange={(e) => setSoil(e.target.value)}
              className="w-full p-3.5 rounded-xl font-bold text-sm border outline-none cursor-pointer"
              style={{ background: 'var(--surface-1)', borderColor: 'var(--glass-border)', color: 'var(--foreground)' }}
            >
              <option value="normal">Normal Day (Standard Soil)</option>
              <option value="night">Night Event (+5% Mutation Rate)</option>
              <option value="eclipse">Solar Eclipse (+15% High Tier Rate)</option>
              <option value="bloodmoon">Blood Moon Event (+25% Max Mutation Rate)</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: 'var(--muted)' }}>
              Fertilizer / Spray Used
            </label>
            <select
              value={spray}
              onChange={(e) => setSpray(e.target.value)}
              className="w-full p-3.5 rounded-xl font-bold text-sm border outline-none cursor-pointer"
              style={{ background: 'var(--surface-1)', borderColor: 'var(--glass-border)', color: 'var(--foreground)' }}
            >
              <option value="none">No Spray</option>
              <option value="golden">Golden Fertilizer Spray (2x Golden Rate)</option>
              <option value="rainbow">Rainbow Fertilizer Spray (3x Rainbow Rate)</option>
              <option value="quantum">Quantum Mutation Catalyst (Massive Boost)</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 text-center">
          <div className="p-4 rounded-xl border" style={{ background: 'var(--surface-1)', borderColor: 'var(--glass-border)' }}>
            <p className="text-xs font-bold text-[#F59E0B] mb-1">Golden Mutation</p>
            <p className="text-xl sm:text-2xl font-mono font-black text-white">{mutationChances.golden}%</p>
          </div>
          <div className="p-4 rounded-xl border" style={{ background: 'var(--surface-1)', borderColor: 'var(--glass-border)' }}>
            <p className="text-xs font-bold text-[#EC4899] mb-1">Rainbow Mutation</p>
            <p className="text-xl sm:text-2xl font-mono font-black text-white">{mutationChances.rainbow}%</p>
          </div>
          <div className="p-4 rounded-xl border" style={{ background: 'var(--surface-1)', borderColor: 'var(--glass-border)' }}>
            <p className="text-xs font-bold text-[#A855F7] mb-1">Celestial Mutation</p>
            <p className="text-xl sm:text-2xl font-mono font-black text-white">{mutationChances.celestial}%</p>
          </div>
        </div>
      </div>

    </div>
  );
}
