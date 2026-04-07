"use client";

import { useState, useMemo } from "react";
import { CROPS } from "@/data/crops";
import { MUTATIONS, Mutation } from "@/data/mutations";
import { formatCurrency, formatNumber } from "@/lib/calculator";

export default function ReverseCalculator() {
  const [targetCoins, setTargetCoins] = useState<number>(1000000);
  const [selectedCropId, setSelectedCropId] = useState<string>("carrot");
  const [selectedMuts, setSelectedMuts] = useState<Mutation[]>([]);

  const results = useMemo(() => {
    if (targetCoins <= 0) return { weightNeeded: 0, multiplier: 1, exactValue: 0 };

    const crop = CROPS.find(c => c.id === selectedCropId) || CROPS[0];
    const mutMultiplier = selectedMuts.reduce((acc, curr) => acc * curr.multiplier, 1);
    const requiredWeightSq = targetCoins / (crop.basePrice * mutMultiplier);
    const requiredWeight = requiredWeightSq > 0 ? Math.sqrt(requiredWeightSq) : 0;

    return {
      weightNeeded: requiredWeight,
      multiplier: mutMultiplier,
      exactValue: crop.basePrice * Math.pow(requiredWeight, 2) * mutMultiplier
    };
  }, [targetCoins, selectedCropId, selectedMuts]);

  const optimalSuggestions = useMemo(() => {
     if (targetCoins <= 0) return [];
     const crop = CROPS.find(c => c.id === selectedCropId) || CROPS[0];
     const targetWeight = 50;
     const baseAtWeight = crop.basePrice * Math.pow(targetWeight, 2);

     if (baseAtWeight >= targetCoins) {
        return [{ desc: `You don't need mutations! Just grow a ${targetWeight}kg ${crop.name}.`, muts: [] }];
     }

     const requiredMultiplier = targetCoins / baseAtWeight;
     const sortedMuts = [...MUTATIONS].sort((a,b) => b.multiplier - a.multiplier);
     const singleMut = sortedMuts.find(m => m.multiplier >= requiredMultiplier);

     const suggestions: { weight: number; muts: Mutation[] }[] = [];
     if (singleMut) {
       suggestions.push({ weight: targetWeight, muts: [singleMut] });
     }
     return suggestions;
  }, [targetCoins, selectedCropId]);

  const crop = CROPS.find(c => c.id === selectedCropId) || CROPS[0];

  const handleToggleMut = (mut: Mutation) => {
    setSelectedMuts(prev => prev.find(m => m.id === mut.id) ? prev.filter(m=>m.id!==mut.id) : [...prev, mut]);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      <div className="mb-8 text-center">
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-3" style={{ fontFamily: 'var(--font-display)', color: 'var(--foreground)' }}>
          🎯 Reverse Goal Targeter
        </h1>
        <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
          Tell us how many coins you want to make, and we will tell you exactly what weight and mutations you need to reach your goal.
        </p>
      </div>

      <div className="glass-card-static p-8">
         <div className="flex flex-col items-center mb-8">
            <h3 className="result-label mb-2">My Target Goal (Coins)</h3>
            <div className="relative max-w-sm w-full">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[10px] font-black uppercase tracking-widest" style={{ color: 'var(--warning)' }}>COINS</span>
              <input
                type="number"
                className="w-full text-center text-3xl font-black py-4 pl-16 pr-4 rounded-2xl outline-none"
                style={{ background: 'var(--surface-1)', color: 'var(--warning)', border: '2px solid rgba(245,158,11,0.3)', fontFamily: 'var(--font-display)' }}
                value={targetCoins}
                onChange={(e) => setTargetCoins(parseFloat(e.target.value) || 0)}
              />
            </div>
         </div>

         <div className="grid md:grid-cols-2 gap-8">

            {/* Left side: Customize */}
            <div className="space-y-6">
               <div>
                  <h4 className="text-sm font-bold block mb-2" style={{ color: 'var(--foreground)' }}>1. Using this Crop:</h4>
                  <div className="grid grid-cols-4 sm:grid-cols-6 gap-2 max-h-48 overflow-y-auto p-2 rounded-xl" style={{ background: 'var(--surface-1)' }}>
                     {CROPS.map(c => (
                        <button key={c.id} onClick={() => setSelectedCropId(c.id)} className={`p-2 flex flex-col items-center justify-center rounded-lg transition-all ${selectedCropId === c.id ? 'bg-[var(--primary)] bg-opacity-20 border border-[var(--primary)]' : 'hover:bg-[var(--surface-2)]'}`}>
                          <span className="text-2xl">{c.emoji}</span>
                        </button>
                     ))}
                  </div>
               </div>

               <div>
                 <h4 className="text-sm font-bold block mb-2" style={{ color: 'var(--foreground)' }}>2. With these Mutations:</h4>
                 <div className="flex flex-wrap gap-1.5 mb-2">
                   {selectedMuts.map(mut =>
                     <span key={mut.id} onClick={() => handleToggleMut(mut)} className="text-[10px] px-2 py-1 rounded-md font-bold cursor-pointer" style={{ background: mut.color, color: 'white' }}>{mut.name} ✕</span>
                   )}
                 </div>
                 <select
                   className="select-glow text-xs"
                   onChange={(e) => {
                     const m = MUTATIONS.find(m => m.id === e.target.value);
                     if (m && !selectedMuts.find(sm => sm.id === m.id)) setSelectedMuts([...selectedMuts, m]);
                   }}
                   value=""
                 >
                   <option value="" disabled>+ Add a mutation...</option>
                   {MUTATIONS.map(m => <option key={m.id} value={m.id}>{m.name} (x{m.multiplier})</option>)}
                 </select>
               </div>
            </div>

            {/* Right side: The Answer */}
            <div className="bg-[#0a0e17] p-6 rounded-2xl border border-[var(--glass-border)] flex flex-col justify-center items-center text-center">
               <p className="result-label mb-2 text-center w-full">The Mathematical Answer</p>

               <p className="text-[var(--muted)] text-sm mb-4">
                 To get exactly <strong className="text-[var(--warning)]">{formatCurrency(targetCoins)}</strong> coins using a <strong>{crop.name}</strong> with your mutations (x{formatNumber(results.multiplier)} multiplier):
               </p>

               <div className="p-5 rounded-2xl w-full border border-[var(--primary)] relative overflow-hidden" style={{ background: 'linear-gradient(135deg, rgba(34,197,94,0.1), transparent)' }}>
                  <div className="absolute top-0 right-0 p-2 text-4xl opacity-10">{crop.emoji}</div>
                  <p className="text-sm font-bold text-[var(--primary)] mb-1 uppercase tracking-wider">You Need To Grow It To</p>
                  <p className="text-4xl font-black number-animate" style={{ fontFamily: 'var(--font-display)', color: 'var(--foreground)' }}>
                    {results.weightNeeded.toFixed(2)} kg
                  </p>
               </div>

               {optimalSuggestions.length > 0 && optimalSuggestions[0].muts.length > 0 && (
                 <div className="mt-4 p-4 rounded-xl text-left bg-[var(--surface-1)] w-full">
                    <p className="text-[10px] uppercase font-bold text-[var(--accent)] mb-2">Auto-Suggestion for 50kg Plant:</p>
                    <p className="text-xs text-[var(--muted)]">Try getting the <strong className="text-white">{optimalSuggestions[0].muts[0].name}</strong> mutation. A 50kg plant with that makes the goal easy!</p>
                 </div>
               )}
            </div>

         </div>
      </div>
    </div>
  );
}
