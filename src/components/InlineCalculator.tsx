"use client";

import { useState, useMemo, useEffect } from "react";
import { MUTATIONS, Mutation } from "@/data/mutations";
import { calculateCropValue, calculatePetValue, formatCurrency, formatNumber } from "@/lib/calculator";
import { InventoryItem } from "./Dashboard";

interface InlineCalculatorProps {
  item: { type: "crops" | "pets"; data: any };
  onAddToInventory: (item: InventoryItem) => void;
}

export default function InlineCalculator({ item, onAddToInventory }: InlineCalculatorProps) {
  const isCrop = item.type === "crops";
  const data = item.data;

  const [weight, setWeight] = useState(isCrop ? 5.22 : 10);
  const [quantity, setQuantity] = useState(1);
  const [age, setAge] = useState(30);
  const [friendBoost, setFriendBoost] = useState(0);
  const [selectedMutations, setSelectedMutations] = useState<Mutation[]>([]);
  const [copyStatus, setCopyStatus] = useState("Copy for Discord");

  const toggleMutation = (mut: Mutation) => {
    setSelectedMutations(prev =>
      prev.find(m => m.id === mut.id) ? prev.filter(m => m.id !== mut.id) : [...prev, mut]
    );
  };

  const calculateResult = useMemo(() => {
    if (isCrop) {
      let baseMult = 1;
      let otherMultsSum = 0;
      let count = 0;
      
      const hasRainbow = selectedMutations.find(m => m.id === 'rainbow');
      const hasGold = selectedMutations.find(m => m.id === 'golden');
      const hasSilver = selectedMutations.find(m => m.id === 'silver');
      
      if (hasRainbow) baseMult = 50;
      else if (hasGold) baseMult = 20;
      else if (hasSilver) baseMult = 5;
      
      selectedMutations.forEach(m => {
        if (!['rainbow', 'golden', 'silver'].includes(m.id)) {
          otherMultsSum += m.multiplier;
          count++;
        }
      });
      
      const mutationModifier = baseMult * (1 + otherMultsSum - (count > 0 ? count : 0));
      const friendMultiplier = 1 + (friendBoost / 100);
      const val = data.basePrice * Math.pow(weight, 2) * (mutationModifier || 1) * friendMultiplier * quantity;
      
      return { 
        total: val,
        modifier: mutationModifier,
        formula: count > 0 || baseMult > 1 ? `(${baseMult}X) × (1 + ${otherMultsSum} - ${count}) = X${mutationModifier.toLocaleString()}` : `X1`
      };
    } else {
      return calculatePetValue({
        baseValue: data.baseValue,
        weight,
        age,
        abilityMultiplier: data.abilityMultiplier,
      });
    }
  }, [isCrop, data, weight, quantity, selectedMutations, age, friendBoost]);

  const finalValue = isCrop ? (calculateResult as any).total : (calculateResult as any).estimatedValue;

  return (
    <div className="mt-8 p-6 sm:p-10 rounded-[2.5rem] animate-slideUp overflow-hidden" 
         style={{ background: 'var(--surface-1)', border: '2px solid var(--glass-border)', boxShadow: '0 30px 100px rgba(0,0,0,0.4)' }}>
      
      {/* Header & Mutation Selector (MOVED UP) */}
      <div className="flex flex-col gap-8 mb-10">
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <div className="w-20 h-20 rounded-2xl flex items-center justify-center text-5xl shrink-0 shadow-xl bg-surface-2 border border-glass-border">
            {data.emoji}
          </div>
          <div className="text-center sm:text-left">
            <h2 className="text-4xl font-black text-white" style={{ fontFamily: 'var(--font-display)' }}>{data.name}</h2>
            <div className="flex flex-wrap justify-center sm:justify-start gap-4 mt-1">
              <span className="text-[10px] px-3 py-1 rounded-lg font-black bg-white/5 border border-white/10 text-muted uppercase tracking-widest leading-none">
                {data.category || data.rarity}
              </span>
              <p className="text-sm font-black text-primary uppercase tracking-tighter">
                Base Value: {isCrop ? data.basePrice : data.baseValue}
              </p>
            </div>
          </div>
        </div>

        {isCrop && (
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h4 className="text-[11px] uppercase font-black text-white/40 tracking-[0.2em]">Mutations Selector</h4>
              <div className="flex gap-2">
                 <button onClick={() => setSelectedMutations([])} className="text-[10px] px-4 py-1.5 rounded-xl font-black border border-white/10 hover:bg-white/5 transition-all text-white uppercase tracking-widest bg-white/5">Clear</button>
                 <button onClick={() => setSelectedMutations(MUTATIONS.slice(0, 8))} className="text-[10px] px-4 py-1.5 rounded-xl font-black border border-primary/20 bg-primary/10 text-primary uppercase tracking-widest">Pre-Set</button>
              </div>
            </div>
            <div className="p-5 rounded-3xl bg-black/40 border border-white/5 flex flex-wrap gap-2">
               {MUTATIONS.slice(0, 48).map(mut => {
                 const isSel = selectedMutations.find(m => m.id === mut.id);
                 return (
                   <button key={mut.id} onClick={() => toggleMutation(mut)}
                     className={`text-[10px] py-1.5 px-3 rounded-lg font-black transition-all border ${isSel ? 'border-primary shadow-lg scale-105' : 'border-white/5 hover:border-white/10 bg-surface-2'}`}
                     style={{ background: isSel ? `${mut.color}25` : '', color: isSel ? mut.color : 'rgba(255,255,255,0.4)' }}
                   >
                     {mut.name} <span className="opacity-50 ml-1">x{mut.multiplier}</span>
                   </button>
                 );
               })}
            </div>
          </div>
        )}
      </div>

      {/* Inputs Section (BETWEEN SELECTOR AND RESULT) */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-10 p-6 rounded-3xl bg-white/2 border border-white/5">
        <div className="space-y-3">
          <label className="text-[11px] uppercase font-black text-white/60 tracking-[0.2em] block">Weight (kg)</label>
          <input type="number" step="0.001" className="bg-input text-xl" value={weight} onChange={(e) => setWeight(parseFloat(e.target.value) || 0)} />
        </div>
        <div className="space-y-3">
          <label className="text-[11px] uppercase font-black text-white/60 tracking-[0.2em] block">{isCrop ? 'Plants' : 'Age (Days)'}</label>
          <input type="number" className="bg-input text-xl text-white font-black" value={isCrop ? quantity : age} onChange={(e) => isCrop ? setQuantity(parseInt(e.target.value) || 1) : setAge(parseInt(e.target.value) || 0)} />
        </div>
        <div className="space-y-3">
          <label className="text-[11px] uppercase font-black text-white/60 tracking-[0.2em] block">Friend Boost</label>
          <div className="flex flex-col gap-2 pt-1">
            <input type="range" min="0" max="100" step="1" className="w-full h-1.5 rounded-lg appearance-none cursor-pointer accent-primary bg-white/10" value={friendBoost} onChange={(e) => setFriendBoost(parseInt(e.target.value))} />
            <span className="text-xl font-black text-white flex items-center justify-between">
               {friendBoost}% <span className="text-[10px] text-primary uppercase">Boost Active</span>
            </span>
          </div>
        </div>
      </div>

      {/* Image-Style Result Display */}
      <div className="p-8 sm:p-12 rounded-[3.5rem] text-center bg-[#0a0e17] border border-white/5 relative mb-10 overflow-hidden shadow-2xl flex flex-col items-center">
         <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none">
            <span className="text-[15vw] font-black uppercase tracking-tighter">CASH OUT</span>
         </div>

         <div className="relative z-10 flex flex-wrap justify-center gap-2 sm:gap-3 mb-8">
           {isCrop && selectedMutations.map(m => (
             <div key={m.id} className="px-5 py-1.5 rounded-full text-[12px] sm:text-sm font-black border border-white/5 bg-white/5 flex items-center" style={{ color: m.color }}>
               {m.name} <span className="ml-1.5 opacity-40 text-xs text-white/50">+</span>
             </div>
           ))}
           <div className="px-5 py-1.5 rounded-full text-[12px] sm:text-sm font-black border-l-4 border-primary bg-white/10 text-white flex items-center">
             {data.name} {weight}kg
           </div>
         </div>
         
         <p className="relative z-10 text-[12px] sm:text-[14px] uppercase font-black text-white/40 tracking-[0.5em] mb-4 text-center">Estimated Sale Price:</p>
         
         <h3 className="relative z-10 text-6xl sm:text-7xl md:text-8xl font-black text-white tracking-tighter leading-none mb-8" style={{ fontFamily: 'var(--font-display)' }}>
           ≈ {formatNumber(finalValue)}
         </h3>
         
         <div className="relative z-10 flex flex-col items-center gap-4">
            <div className="px-10 py-4 rounded-full border border-white/20 flex items-center gap-4 bg-white/5 backdrop-blur-xl shadow-lg">
               <span className="text-2xl font-black text-white">Value: {formatCurrency(finalValue)}</span>
            </div>
            {isCrop && (
              <p className="text-[11px] font-black text-primary tracking-widest mt-4 uppercase bg-primary/10 px-4 py-1.5 rounded-lg border border-primary/20">
                Modifier: {(calculateResult as any).formula}
              </p>
            )}
         </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
         <button onClick={() => onAddToInventory({ id: Math.random().toString(36).substr(2, 9), type: isCrop ? "crop" : "pet", name: data.name, emoji: data.emoji, value: finalValue, details: isCrop ? `${weight}kg · ${selectedMutations.length} muts` : `${weight}kg · ${age}d` })} className="py-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 text-white font-black text-sm transition-all flex items-center justify-center gap-3 active:scale-95">
           🎒 Add to Backpack List
         </button>
         <button onClick={() => {
            const muts = selectedMutations.length > 0 ? ` + [${selectedMutations.map(m=>m.name).join(" + ")}]` : "";
            const text = isCrop ? `🌾 ${data.name} (${weight}kg)${muts}\n💰 Value:  ${formatNumber(finalValue)}` : `🐾 ${data.name} (${weight}kg, ${age}d)\n💰 Value:  ${formatNumber(finalValue)}`;
            navigator.clipboard.writeText(text);
            setCopyStatus("Copied! ✅");
            setTimeout(() => setCopyStatus("Copy for Discord"), 2000);
         }} className="py-5 rounded-2xl text-white font-black text-sm transition-all flex items-center justify-center gap-3 active:scale-95 shadow-xl bg-primary hover:bg-opacity-90">
           💬 {copyStatus}
         </button>
      </div>

      <style jsx>{`
        .bg-input {
          width: 100%;
          background: rgba(255,255,255,0.06);
          border: 2px solid var(--glass-border);
          padding: 18px 24px;
          border-radius: 20px;
          color: white;
          font-weight: 800;
          outline: none;
          transition: all 0.2s;
        }
        .bg-input:focus {
          border-color: var(--primary);
          background: rgba(255,255,255,0.1);
        }
      `}</style>
    </div>
  );
}
