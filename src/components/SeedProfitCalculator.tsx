"use client";

import { useState, useMemo } from "react";
import { CROPS } from "@/data/crops";
import { MUTATIONS, Mutation } from "@/data/mutations";
import { calculateSeedProfit, formatNumber, formatCurrency } from "@/lib/calculator";

export default function SeedProfitCalculator() {
  const [selectedCrop, setSelectedCrop] = useState(CROPS[0]);
  const [seedCost, setSeedCost] = useState(10);
  const [expectedWeight, setExpectedWeight] = useState(1);
  const [growthTime, setGrowthTime] = useState(5);
  const [quantity, setQuantity] = useState(10);
  const [selectedMutations, setSelectedMutations] = useState<Mutation[]>([]);
  const [showMuts, setShowMuts] = useState(false);

  const toggleMutation = (mut: Mutation) => {
    setSelectedMutations(prev =>
      prev.find(m => m.id === mut.id)
        ? prev.filter(m => m.id !== mut.id)
        : [...prev, mut]
    );
  };

  const result = useMemo(() => {
    return calculateSeedProfit({
      seedCost,
      cropBasePrice: selectedCrop.basePrice,
      expectedWeight: expectedWeight,
      mutations: selectedMutations,
      growthTimeMinutes: growthTime,
      quantity,
    });
  }, [selectedCrop, seedCost, expectedWeight, growthTime, quantity, selectedMutations]);

  const isProfit = result.profit > 0;

  // Compare all crops profitability
  const cropComparison = useMemo(() => {
    return CROPS.map(crop => {
      const r = calculateSeedProfit({
        seedCost: crop.basePrice * 0.1,
        cropBasePrice: crop.basePrice,
        expectedWeight: expectedWeight,
        mutations: selectedMutations,
        growthTimeMinutes: growthTime,
        quantity: 1,
      });
      return { crop, ...r };
    }).sort((a, b) => b.roi - a.roi).slice(0, 10);
  }, [expectedWeight, selectedMutations, growthTime]);

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Inputs */}
      <div className="glass-card-static p-6">
        <h3 className="text-sm font-semibold mb-4 flex items-center gap-2" style={{ color: 'var(--foreground)' }}>
          <span className="w-6 h-6 rounded-lg flex items-center justify-center text-sm" style={{ background: 'rgba(34,197,94,0.15)' }}>🌱</span>
          Seed Profit Calculator
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <div className="col-span-2 sm:col-span-1">
            <label className="result-label block mb-1.5">Crop</label>
            <select
              className="select-glow"
              value={selectedCrop.id}
              onChange={(e) => {
                const crop = CROPS.find(c => c.id === e.target.value) || CROPS[0];
                setSelectedCrop(crop);
                setSeedCost(Math.round(crop.basePrice * 0.1));
              }}
            >
              {CROPS.map(c => (
                <option key={c.id} value={c.id}>{c.emoji} {c.name}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="result-label block mb-1.5">Seed Cost</label>
            <input type="number" className="input-glow" value={seedCost} onChange={(e) => setSeedCost(parseFloat(e.target.value) || 0)} min={0} />
          </div>
          <div>
            <label className="result-label block mb-1.5">Expected Weight</label>
            <input type="number" className="input-glow" value={expectedWeight} onChange={(e) => setExpectedWeight(parseFloat(e.target.value) || 0)} min={0} step={0.1} />
          </div>
          <div>
            <label className="result-label block mb-1.5">Growth Time (min)</label>
            <input type="number" className="input-glow" value={growthTime} onChange={(e) => setGrowthTime(parseInt(e.target.value) || 1)} min={1} />
          </div>
          <div>
            <label className="result-label block mb-1.5">Quantity</label>
            <input type="number" className="input-glow" value={quantity} onChange={(e) => setQuantity(parseInt(e.target.value) || 1)} min={1} />
          </div>
        </div>

        {/* Quick mutation toggle */}
        <div className="mt-4">
          <button
            onClick={() => setShowMuts(!showMuts)}
            className="text-xs font-medium px-3 py-2 rounded-lg flex items-center gap-2 w-full"
            style={{ background: 'var(--surface-2)', color: 'var(--muted)', border: '1px solid var(--glass-border)' }}
          >
            🧬 Expected Mutations ({selectedMutations.length})
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginLeft: 'auto', transform: showMuts ? 'rotate(180deg)' : '', transition: '0.2s' }}>
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>

          {selectedMutations.length > 0 && (
            <div className="flex flex-wrap gap-1 mt-2">
              {selectedMutations.map(m => (
                <span key={m.id} className="text-[10px] px-2 py-0.5 rounded-full font-semibold cursor-pointer" style={{ background: `${m.color}20`, color: m.color }} onClick={() => toggleMutation(m)}>
                  {m.name} ×{m.multiplier} ✕
                </span>
              ))}
            </div>
          )}

          {showMuts && (
            <div className="mt-2 flex flex-wrap gap-1.5 p-3 rounded-lg max-h-[200px] overflow-y-auto" style={{ background: 'var(--surface-2)', border: '1px solid var(--glass-border)' }}>
              {MUTATIONS.slice(0, 50).map(mut => {
                const sel = selectedMutations.find(m => m.id === mut.id);
                return (
                  <button key={mut.id} onClick={() => toggleMutation(mut)} className="text-[11px] px-2 py-1 rounded-full font-medium transition-all" style={{
                    background: sel ? `${mut.color}25` : 'var(--surface-3)',
                    color: sel ? mut.color : 'var(--muted)',
                    border: `1px solid ${sel ? mut.color + '50' : 'transparent'}`,
                  }}>
                    {mut.name} ×{mut.multiplier}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Results */}
      <div className="glass-card-static p-6" style={{ background: 'rgba(17,25,40,0.9)' }}>
        <h3 className="text-sm font-semibold mb-5 flex items-center gap-2" style={{ color: 'var(--foreground)' }}>
          <span className="w-6 h-6 rounded-lg flex items-center justify-center text-sm" style={{ background: 'rgba(34,197,94,0.15)' }}>📊</span>
          Profit Analysis
        </h3>

        {/* Main Profit */}
        <div className="text-center p-6 rounded-xl mb-6" style={{
          background: isProfit ? 'linear-gradient(135deg, rgba(34,197,94,0.1), rgba(6,182,212,0.05))' : 'linear-gradient(135deg, rgba(239,68,68,0.1), rgba(245,158,11,0.05))',
          border: `1px solid ${isProfit ? 'rgba(34,197,94,0.2)' : 'rgba(239,68,68,0.2)'}`,
        }}>
          <p className="result-label mb-2">{isProfit ? "💰 Total Profit" : "📉 Total Loss"}</p>
          <p className="text-4xl font-extrabold number-animate" style={{
            fontFamily: 'var(--font-display)',
            color: isProfit ? 'var(--success)' : 'var(--danger)',
          }}>
            {isProfit ? "+" : ""}{formatCurrency(result.profit)}
          </p>
          <p className="text-sm mt-2 font-semibold" style={{ color: isProfit ? 'var(--success)' : 'var(--danger)' }}>
            ROI: {result.roi > 0 ? "+" : ""}{result.roi}%
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="p-3 rounded-xl text-center" style={{ background: 'var(--surface-1)' }}>
            <p className="result-label mb-1">Revenue</p>
            <p className="text-lg font-bold" style={{ color: 'var(--primary)', fontFamily: 'var(--font-display)' }}>{formatCurrency(result.totalRevenue)}</p>
          </div>
          <div className="p-3 rounded-xl text-center" style={{ background: 'var(--surface-1)' }}>
            <p className="result-label mb-1">Cost</p>
            <p className="text-lg font-bold" style={{ color: 'var(--danger)', fontFamily: 'var(--font-display)' }}>{formatCurrency(result.totalCost)}</p>
          </div>
          <div className="p-3 rounded-xl text-center" style={{ background: 'var(--surface-1)' }}>
            <p className="result-label mb-1">Per Seed</p>
            <p className="text-lg font-bold" style={{ color: 'var(--accent)', fontFamily: 'var(--font-display)' }}>{formatCurrency(result.profitPerSeed)}</p>
          </div>
          <div className="p-3 rounded-xl text-center" style={{ background: 'var(--surface-1)' }}>
            <p className="result-label mb-1">Per Minute</p>
            <p className="text-lg font-bold" style={{ color: 'var(--warning)', fontFamily: 'var(--font-display)' }}>{formatCurrency(result.profitPerMinute)}</p>
          </div>
        </div>
      </div>

      {/* Top Crops by ROI */}
      <div className="glass-card-static p-6">
        <h3 className="text-sm font-semibold mb-4 flex items-center gap-2" style={{ color: 'var(--foreground)' }}>
          <span className="w-6 h-6 rounded-lg flex items-center justify-center text-sm" style={{ background: 'rgba(245,158,11,0.15)' }}>🏆</span>
          Top 10 Crops by ROI
        </h3>
        <div className="space-y-2">
          {cropComparison.map((item, i) => (
            <div key={item.crop.id} className="flex items-center gap-3 p-3 rounded-lg" style={{ background: 'var(--surface-1)' }}>
              <span className="text-sm font-bold w-6 text-center" style={{ color: i < 3 ? 'var(--warning)' : 'var(--muted)' }}>#{i + 1}</span>
              <span className="text-lg">{item.crop.emoji}</span>
              <span className="text-sm font-medium flex-1" style={{ color: 'var(--foreground)' }}>{item.crop.name}</span>
              <span className="text-xs px-2 py-0.5 rounded" style={{ background: item.profit > 0 ? 'rgba(34,197,94,0.15)' : 'rgba(239,68,68,0.15)', color: item.profit > 0 ? 'var(--success)' : 'var(--danger)' }}>
                {formatCurrency(item.profit)}
              </span>
              <span className="text-xs font-bold px-2 py-0.5 rounded" style={{ background: 'rgba(245,158,11,0.15)', color: 'var(--warning)' }}>
                {item.roi.toFixed(0)}% ROI
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
