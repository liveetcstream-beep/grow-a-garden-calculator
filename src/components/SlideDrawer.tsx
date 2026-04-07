"use client";

import { useState, useMemo, useEffect } from "react";
import { MUTATIONS, Mutation, MUTATION_CATEGORIES } from "@/data/mutations";
import { calculateCropValue, calculatePetValue, formatCurrency, formatNumber } from "@/lib/calculator";
import { InventoryItem } from "./Dashboard";

interface SlideDrawerProps {
  item: { type: "crops" | "pets"; data: any };
  onClose: () => void;
  onAddToInventory: (item: InventoryItem) => void;
}

export default function SlideDrawer({ item, onClose, onAddToInventory }: SlideDrawerProps) {
  const isCrop = item.type === "crops";
  const data = item.data;

  // Generic form state
  const [weight, setWeight] = useState(isCrop ? 1 : 10);
  const [quantity, setQuantity] = useState(1);
  const [copyStatus, setCopyStatus] = useState("Copy for Discord");

  // Crop specific
  const [selectedMutations, setSelectedMutations] = useState<Mutation[]>([]);
  const [activeMutCategory, setActiveMutCategory] = useState("All");
  
  // Pet specific
  const [age, setAge] = useState(30);

  // Esc key listener to close
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  const toggleMutation = (mut: Mutation) => {
    setSelectedMutations(prev =>
      prev.find(m => m.id === mut.id) ? prev.filter(m => m.id !== mut.id) : [...prev, mut]
    );
  };

  const calculateResult = useMemo(() => {
    if (isCrop) {
      return calculateCropValue({
        basePrice: data.basePrice,
        weight,
        mutations: selectedMutations,
        friendBoost: 0,
        quantity,
      });
    } else {
      return calculatePetValue({
        baseValue: data.baseValue,
        weight,
        age,
        abilityMultiplier: data.abilityMultiplier,
      });
    }
  }, [isCrop, data, weight, quantity, selectedMutations, age]);

  const finalValue = isCrop 
    ? (calculateResult as any).finalValue 
    : (calculateResult as any).estimatedValue;

  const handleCopyDiscord = () => {
    let text = "";
    if (isCrop) {
      const muts = selectedMutations.length > 0 ? ` with [${selectedMutations.map(m=>m.name).join(", ")}]` : "";
      text = `\`🌾\` **${data.name}** (${weight}kg)${muts}\n\`💰\` **Est. Value:** ${formatNumber(finalValue)}`;
    } else {
      text = `\`🐾\` **${data.name}** (${weight}kg, ${age} days old)\n\`🌟\` **Rarity:** ${data.rarity}\n\`💰\` **Est. Value:** ${formatNumber(finalValue)}`;
    }
    
    navigator.clipboard.writeText(text);
    setCopyStatus("Copied! ✅");
    setTimeout(() => setCopyStatus("Copy for Discord"), 2000);
  };

  const handleAddInventory = () => {
    const invItem: InventoryItem = {
      id: Math.random().toString(36).substr(2, 9),
      type: isCrop ? "crop" : "pet",
      name: data.name,
      emoji: data.emoji,
      value: finalValue,
      details: isCrop 
        ? `${weight}kg · ${selectedMutations.length} mutations` 
        : `${weight}kg · ${age} days old`,
    };
    onAddToInventory(invItem);
  };

  const filteredMutations = useMemo(() => {
    if (activeMutCategory === "All") return MUTATIONS.slice(0, 100); // limit to not lag the modal
    return MUTATIONS.filter(m => m.category === activeMutCategory);
  }, [activeMutCategory]);

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm z-50 transition-opacity" onClick={onClose} />
      
      <div className="fixed bottom-0 left-0 right-0 sm:left-1/2 sm:-translate-x-1/2 sm:bottom-10 sm:max-w-xl sm:rounded-3xl w-full bg-[#0a0e17] border border-[var(--glass-border)] shadow-2xl z-50 animate-slideUp overflow-hidden max-h-[90vh] flex flex-col">
        
        {/* Header Banner */}
        <div className="p-6 relative flex-shrink-0" style={{ 
          background: isCrop 
            ? 'linear-gradient(135deg, rgba(34,197,94,0.1), transparent)' 
            : 'linear-gradient(135deg, rgba(245,158,11,0.1), transparent)',
          borderBottom: '1px solid var(--glass-border)'
        }}>
           <button onClick={onClose} className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white bg-opacity-10 hover:bg-opacity-20 flex items-center justify-center transition-colors">✕</button>
           
           <div className="flex items-center gap-4">
             <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-4xl bg-black bg-opacity-20 border border-[var(--glass-border)] shadow-inner">
               {data.emoji}
             </div>
             <div>
               <h2 className="text-2xl font-black" style={{ fontFamily: 'var(--font-display)', color: 'var(--foreground)' }}>
                 {data.name}
               </h2>
               <p className="text-xs font-semibold mt-1" style={{ color: isCrop ? 'var(--primary)' : 'var(--warning)' }}>
                 {isCrop ? `Base Price:  ${data.basePrice}` : `Base Value:  ${data.baseValue}`}
               </p>
             </div>
           </div>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 overflow-y-auto" style={{ scrollbarWidth: 'none' }}>
           
           {/* Inputs Grid */}
           <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <label className="text-xs font-bold text-[var(--muted)] block mb-1">Weight (kg)</label>
                <input type="number" className="w-full bg-[var(--surface-1)] border border-[var(--glass-border)] rounded-xl py-3 px-4 text-white outline-none focus:border-[var(--primary)]" 
                       value={weight} onChange={(e) => setWeight(parseFloat(e.target.value) || 0)} min={0} step={0.1} />
              </div>
              
              {isCrop ? (
                <div>
                  <label className="text-xs font-bold text-[var(--muted)] block mb-1">Quantity</label>
                  <input type="number" className="w-full bg-[var(--surface-1)] border border-[var(--glass-border)] rounded-xl py-3 px-4 text-white outline-none focus:border-[var(--primary)]" 
                         value={quantity} onChange={(e) => setQuantity(parseInt(e.target.value) || 1)} min={1} />
                </div>
              ) : (
                <div>
                  <label className="text-xs font-bold text-[var(--muted)] block mb-1">Age (Days)</label>
                  <input type="number" className="w-full bg-[var(--surface-1)] border border-[var(--glass-border)] rounded-xl py-3 px-4 text-white outline-none focus:border-[var(--warning)]" 
                         value={age} onChange={(e) => setAge(parseInt(e.target.value) || 0)} min={0} />
                </div>
              )}
           </div>

           {/* Crop Mutations Section */}
           {isCrop && (
             <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold text-[var(--muted)]">Mutations ({selectedMutations.length})</label>
                  {selectedMutations.length > 0 && <span className="text-xs text-[var(--primary)] font-bold">= ×{formatNumber((calculateResult as any).mutationMultiplier)}</span>}
                </div>
                
                <div className="flex gap-2 overflow-x-auto pb-2 mb-2 no-scrollbar">
                  <button onClick={() => setActiveMutCategory("All")} className={`px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap ${activeMutCategory === "All" ? "bg-[var(--surface-3)] text-white" : "text-[var(--muted)]"}`}>Top</button>
                  {MUTATION_CATEGORIES.map(cat => (
                    <button key={cat} onClick={() => setActiveMutCategory(cat)} className={`px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap ${activeMutCategory === cat ? "bg-[var(--surface-3)] text-white" : "text-[var(--muted)]"}`}>
                      {cat}
                    </button>
                  ))}
                </div>

                <div className="max-h-32 overflow-y-auto flex flex-wrap gap-1.5 p-2 rounded-xl bg-[var(--surface-1)] border border-[var(--glass-border)]">
                  {filteredMutations.map(mut => {
                    const sel = selectedMutations.find(m => m.id === mut.id);
                    return (
                      <button key={mut.id} onClick={() => toggleMutation(mut)} 
                              className="text-[10px] px-2 py-1 rounded-md font-bold transition-transform hover:scale-105 active:scale-95" 
                              style={{ background: sel ? `${mut.color}30` : 'var(--surface-2)', color: sel ? mut.color : 'white', border: `1px solid ${sel ? mut.color : 'transparent'}` }}>
                        {mut.name}
                      </button>
                    )
                  })}
                </div>
             </div>
           )}

           {/* Value Display */}
           <div className="p-5 rounded-2xl text-center bg-[var(--surface-1)] border border-[var(--glass-border)] relative overflow-hidden">
             <div className="absolute inset-0 opacity-20 bg-[var(--gradient-1)] blur-3xl pointer-events-none transform scale-150" />
             <p className="text-xs font-bold text-[var(--muted)] uppercase tracking-widest mb-1 relative z-10">Calculated Value</p>
             <p className="text-4xl sm:text-5xl font-black number-animate relative z-10" style={{ fontFamily: 'var(--font-display)', background: 'var(--gradient-1)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                {formatCurrency(finalValue)}
             </p>
           </div>
        </div>

        {/* Action Buttons Footer */}
        <div className="p-4 bg-[var(--surface-1)] border-t border-[var(--glass-border)] flex flex-col gap-3 flex-shrink-0">
           <div className="flex gap-3">
             <button onClick={handleAddInventory} className="flex-1 py-3.5 rounded-xl font-bold text-sm bg-[var(--surface-2)] hover:bg-[var(--surface-3)] transition-colors border border-[var(--glass-border)] flex items-center justify-center gap-2">
               🎒 Add to Net Worth
             </button>
             <button onClick={handleCopyDiscord} className="flex-1 py-3.5 rounded-xl font-bold text-sm text-white transition-all hover:opacity-90 flex items-center justify-center gap-2" style={{ background: '#5865F2' }}> {/* Discord Color */}
               💬 {copyStatus}
             </button>
           </div>
           
           <a href={`/${isCrop ? 'crop' : 'pet'}/${data.id}-value`} className="text-[11px] font-bold text-[var(--muted)] hover:text-white uppercase tracking-wider text-center py-1 transition-colors">
             🔗 Open Detailed Stats Page
           </a>
        </div>
        
      </div>
      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </>
  );
}
