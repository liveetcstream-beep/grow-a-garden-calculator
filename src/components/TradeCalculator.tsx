"use client";

import { useState, useMemo, useCallback } from "react";
import { CROPS } from "@/data/crops";
import { MUTATIONS, Mutation } from "@/data/mutations";
import { calculateTrade, TradeItem, formatNumber, formatCurrency } from "@/lib/calculator";

interface TradeItemUI extends TradeItem {
  selectedMutationIds: string[];
}

function createEmptyItem(): TradeItemUI {
  return {
    id: Math.random().toString(36).substr(2, 9),
    cropName: CROPS[0].name,
    basePrice: CROPS[0].basePrice,
    weight: 1,
    mutations: [],
    selectedMutationIds: [],
    quantity: 1,
  };
}

function TradeItemCard({ item, onChange, onRemove, side }: {
  item: TradeItemUI;
  onChange: (item: TradeItemUI) => void;
  onRemove: () => void;
  side: "yours" | "theirs";
}) {
  const [mutDropdownOpen, setMutDropdownOpen] = useState(false);
  const sideColor = side === "yours" ? "var(--accent)" : "var(--secondary)";

  const toggleMut = (mut: Mutation) => {
    const hasIt = item.selectedMutationIds.includes(mut.id);
    const newIds = hasIt
      ? item.selectedMutationIds.filter(id => id !== mut.id)
      : [...item.selectedMutationIds, mut.id];
    const newMuts = MUTATIONS.filter(m => newIds.includes(m.id));
    onChange({ ...item, selectedMutationIds: newIds, mutations: newMuts });
  };

  return (
    <div className="p-4 rounded-xl" style={{ background: 'var(--surface-1)', border: '1px solid var(--glass-border)' }}>
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-semibold" style={{ color: sideColor }}>Item</span>
        <button onClick={onRemove} className="text-xs px-2 py-1 rounded-lg hover:opacity-80" style={{ color: 'var(--danger)', background: 'rgba(239,68,68,0.1)' }}>✕</button>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-3">
        <div className="col-span-2">
          <label className="result-label block mb-1">Crop</label>
          <select
            className="select-glow"
            value={item.cropName}
            onChange={(e) => {
              const crop = CROPS.find(c => c.name === e.target.value) || CROPS[0];
              onChange({ ...item, cropName: crop.name, basePrice: crop.basePrice });
            }}
          >
            {CROPS.map(c => (
              <option key={c.id} value={c.name}>{c.emoji} {c.name} (Base: {c.basePrice})</option>
            ))}
          </select>
        </div>
        <div>
          <label className="result-label block mb-1">Weight (kg)</label>
          <input type="number" className="input-glow" value={item.weight} onChange={(e) => onChange({ ...item, weight: parseFloat(e.target.value) || 0 })} min={0} step={0.1} />
        </div>
        <div>
          <label className="result-label block mb-1">Quantity</label>
          <input type="number" className="input-glow" value={item.quantity} onChange={(e) => onChange({ ...item, quantity: parseInt(e.target.value) || 1 })} min={1} />
        </div>
      </div>

      {/* Mutation selector */}
      <div>
        <button
          onClick={() => setMutDropdownOpen(!mutDropdownOpen)}
          className="w-full text-left text-xs font-medium px-3 py-2 rounded-lg flex items-center justify-between"
          style={{ background: 'var(--surface-2)', color: 'var(--muted)', border: '1px solid var(--glass-border)' }}
        >
          <span>🧬 Mutations ({item.selectedMutationIds.length})</span>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ transform: mutDropdownOpen ? 'rotate(180deg)' : '', transition: 'transform 0.2s' }}>
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>

        {item.selectedMutationIds.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-2">
            {item.mutations.map(mut => (
              <span key={mut.id} className="text-[10px] px-2 py-0.5 rounded-full font-semibold" style={{ background: `${mut.color}20`, color: mut.color }}>
                {mut.name} ×{mut.multiplier}
              </span>
            ))}
          </div>
        )}

        {mutDropdownOpen && (
          <div className="mt-2 p-3 rounded-lg max-h-[200px] overflow-y-auto" style={{ background: 'var(--surface-2)', border: '1px solid var(--glass-border)' }}>
            <div className="flex flex-wrap gap-1.5">
              {MUTATIONS.map(mut => {
                const isSelected = item.selectedMutationIds.includes(mut.id);
                return (
                  <button
                    key={mut.id}
                    onClick={() => toggleMut(mut)}
                    className="text-[11px] px-2 py-1 rounded-full font-medium transition-all"
                    style={{
                      background: isSelected ? `${mut.color}25` : 'var(--surface-3)',
                      color: isSelected ? mut.color : 'var(--muted)',
                      border: `1px solid ${isSelected ? mut.color + '50' : 'transparent'}`,
                    }}
                  >
                    {mut.name} ×{mut.multiplier}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function TradeCalculator() {
  const [yourItems, setYourItems] = useState<TradeItemUI[]>([createEmptyItem()]);
  const [theirItems, setTheirItems] = useState<TradeItemUI[]>([createEmptyItem()]);
  const [shareCopied, setShareCopied] = useState(false);

  const updateYourItem = useCallback((index: number, item: TradeItemUI) => {
    setYourItems(prev => { const n = [...prev]; n[index] = item; return n; });
  }, []);

  const updateTheirItem = useCallback((index: number, item: TradeItemUI) => {
    setTheirItems(prev => { const n = [...prev]; n[index] = item; return n; });
  }, []);

  const result = useMemo(() => {
    return calculateTrade(yourItems, theirItems);
  }, [yourItems, theirItems]);

  const handleShare = () => {
    const data = {
      y: yourItems.map(i => ({ c: i.cropName, w: i.weight, m: i.selectedMutationIds, q: i.quantity })),
      t: theirItems.map(i => ({ c: i.cropName, w: i.weight, m: i.selectedMutationIds, q: i.quantity })),
    };
    const encoded = btoa(JSON.stringify(data));
    const url = `${window.location.origin}/trade-calculator?d=${encoded}`;
    navigator.clipboard.writeText(url);
    setShareCopied(true);
    setTimeout(() => setShareCopied(false), 2000);
  };

  const resultClass = result.result === "WIN" ? "trade-win" : result.result === "LOSE" ? "trade-lose" : "trade-fair";

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Trade Sides */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Your Side */}
        <div className="glass-card-static p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-semibold flex items-center gap-2" style={{ color: 'var(--accent)' }}>
              <span className="w-6 h-6 rounded-lg flex items-center justify-center text-sm" style={{ background: 'rgba(6,182,212,0.15)' }}>📦</span>
              Your Items
            </h3>
            <button
              onClick={() => setYourItems(prev => [...prev, createEmptyItem()])}
              className="text-xs px-3 py-1.5 rounded-lg font-medium"
              style={{ background: 'rgba(6,182,212,0.1)', color: 'var(--accent)' }}
            >
              + Add Item
            </button>
          </div>
          <div className="space-y-3">
            {yourItems.map((item, i) => (
              <TradeItemCard
                key={item.id}
                item={item}
                onChange={(updated) => updateYourItem(i, updated)}
                onRemove={() => setYourItems(prev => prev.length > 1 ? prev.filter((_, idx) => idx !== i) : prev)}
                side="yours"
              />
            ))}
          </div>
          <div className="mt-4 p-3 rounded-xl text-center" style={{ background: 'rgba(6,182,212,0.08)', border: '1px solid rgba(6,182,212,0.15)' }}>
            <p className="result-label mb-1">Your Total Value</p>
            <p className="text-xl font-bold" style={{ color: 'var(--accent)', fontFamily: 'var(--font-display)' }}>{formatCurrency(result.yourTotal)}</p>
          </div>
        </div>

        {/* Their Side */}
        <div className="glass-card-static p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-semibold flex items-center gap-2" style={{ color: 'var(--secondary)' }}>
              <span className="w-6 h-6 rounded-lg flex items-center justify-center text-sm" style={{ background: 'rgba(139,92,246,0.15)' }}>🎁</span>
              Their Items
            </h3>
            <button
              onClick={() => setTheirItems(prev => [...prev, createEmptyItem()])}
              className="text-xs px-3 py-1.5 rounded-lg font-medium"
              style={{ background: 'rgba(139,92,246,0.1)', color: 'var(--secondary)' }}
            >
              + Add Item
            </button>
          </div>
          <div className="space-y-3">
            {theirItems.map((item, i) => (
              <TradeItemCard
                key={item.id}
                item={item}
                onChange={(updated) => updateTheirItem(i, updated)}
                onRemove={() => setTheirItems(prev => prev.length > 1 ? prev.filter((_, idx) => idx !== i) : prev)}
                side="theirs"
              />
            ))}
          </div>
          <div className="mt-4 p-3 rounded-xl text-center" style={{ background: 'rgba(139,92,246,0.08)', border: '1px solid rgba(139,92,246,0.15)' }}>
            <p className="result-label mb-1">Their Total Value</p>
            <p className="text-xl font-bold" style={{ color: 'var(--secondary)', fontFamily: 'var(--font-display)' }}>{formatCurrency(result.theirTotal)}</p>
          </div>
        </div>
      </div>

      {/* Trade Result */}
      <div className="glass-card-static p-6" style={{ background: 'rgba(17,25,40,0.9)' }}>
        <div className="text-center">
          <p className="result-label mb-4">Trade Result</p>

          <div className={`inline-flex items-center gap-3 px-8 py-4 rounded-2xl text-3xl font-black ${resultClass}`} style={{ fontFamily: 'var(--font-display)' }}>
            {result.result === "WIN" && "🎉"}
            {result.result === "FAIR" && "🤝"}
            {result.result === "LOSE" && "❌"}
            {result.result}
          </div>

          <div className="mt-4 grid grid-cols-2 gap-4 max-w-md mx-auto">
            <div className="p-3 rounded-xl" style={{ background: 'var(--surface-1)' }}>
              <p className="result-label mb-1">Difference</p>
              <p className="text-lg font-bold" style={{ color: 'var(--foreground)', fontFamily: 'var(--font-display)' }}>{formatCurrency(result.difference)}</p>
            </div>
            <div className="p-3 rounded-xl" style={{ background: 'var(--surface-1)' }}>
              <p className="result-label mb-1">Percentage</p>
              <p className="text-lg font-bold" style={{
                color: result.percentageDiff > 0 ? 'var(--success)' : result.percentageDiff < 0 ? 'var(--danger)' : 'var(--warning)',
                fontFamily: 'var(--font-display)'
              }}>
                {result.percentageDiff > 0 ? "+" : ""}{result.percentageDiff}%
              </p>
            </div>
          </div>

          {/* Actions */}
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <button onClick={handleShare} className="btn-primary">
              {shareCopied ? "✅ Link Copied!" : "🔗 Share Trade"}
            </button>
            <button
              onClick={() => {
                setYourItems([createEmptyItem()]);
                setTheirItems([createEmptyItem()]);
              }}
              className="btn-secondary"
            >
              🗑️ Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
