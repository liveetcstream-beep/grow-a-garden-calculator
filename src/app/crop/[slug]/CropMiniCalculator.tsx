"use client";

import { useState, useMemo } from "react";
import { Crop } from "@/data/crops";
import { MUTATIONS, Mutation } from "@/data/mutations";
import { calculateCropValue, formatCurrency } from "@/lib/calculator";

export default function CropMiniCalculator({ crop }: { crop: Crop }) {
  const [weight, setWeight] = useState(1);
  const [selectedMuts, setSelectedMuts] = useState<Mutation[]>([]);
  const [friendBoost, setFriendBoost] = useState(0);

  const toggleMut = (mut: Mutation) => {
    setSelectedMuts(prev =>
      prev.find(m => m.id === mut.id) ? prev.filter(m => m.id !== mut.id) : [...prev, mut]
    );
  };

  const result = useMemo(() => calculateCropValue({
    basePrice: crop.basePrice,
    weight,
    mutations: selectedMuts,
    friendBoost,
    quantity: 1,
  }), [crop, weight, selectedMuts, friendBoost]);

  // Popular mutations for easy access
  const popular = MUTATIONS.filter(m => ["golden", "rainbow", "frozen", "shocked", "disco", "celestial", "cosmic", "astral"].includes(m.id));

  return (
    <div className="glass-card-static p-6">
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="result-label block mb-1.5">Weight (kg)</label>
          <input type="number" className="input-glow" value={weight} onChange={(e) => setWeight(parseFloat(e.target.value) || 0)} min={0} step={0.1} />
        </div>
        <div>
          <label className="result-label block mb-1.5">Friend Boost %</label>
          <input type="number" className="input-glow" value={friendBoost} onChange={(e) => setFriendBoost(parseFloat(e.target.value) || 0)} min={0} max={100} />
        </div>
      </div>

      <div className="mb-4">
        <label className="result-label block mb-1.5">Quick Mutations</label>
        <div className="flex flex-wrap gap-1.5">
          {popular.map(mut => {
            const sel = selectedMuts.find(m => m.id === mut.id);
            return (
              <button key={mut.id} onClick={() => toggleMut(mut)} className="text-xs px-3 py-1.5 rounded-full font-semibold transition-all hover:scale-105" style={{
                background: sel ? `${mut.color}25` : 'var(--surface-2)',
                color: sel ? mut.color : 'var(--muted)',
                border: `1px solid ${sel ? mut.color + '50' : 'transparent'}`,
              }}>
                {mut.name} ×{mut.multiplier}
              </button>
            );
          })}
        </div>
      </div>

      <div className="p-5 rounded-xl text-center" style={{ background: 'linear-gradient(135deg, rgba(34,197,94,0.1), rgba(6,182,212,0.05))', border: '1px solid rgba(34,197,94,0.2)' }}>
        <p className="result-label mb-1">Sell Value</p>
        <p className="result-value number-animate">{formatCurrency(result.finalValue)}</p>
      </div>
    </div>
  );
}
