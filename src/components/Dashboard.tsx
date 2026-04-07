"use client";

import { useState, useMemo, useEffect } from "react";
import { CROPS } from "@/data/crops";
import { PETS } from "@/data/pets";
import { MUTATIONS, Mutation } from "@/data/mutations";
import { calculateCropValue, calculatePetValue, formatCurrency, formatNumber } from "@/lib/calculator";
import InlineCalculator from "./InlineCalculator";

export interface InventoryItem {
  id: string;
  type: "crop" | "pet";
  name: string;
  emoji: string;
  value: number;
  details: string;
}

export default function Dashboard() {
  const [mode, setMode] = useState<"crops" | "pets">("crops");
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedItem, setSelectedItem] = useState<any | null>(null);
  
  const [inventory, setInventory] = useState<InventoryItem[]>([]);
  const [isInventoryOpen, setIsInventoryOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("gag_inventory");
    if (saved) {
      try {
        setInventory(JSON.parse(saved));
      } catch (e) {}
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("gag_inventory", JSON.stringify(inventory));
  }, [inventory]);

  const totalNetWorth = useMemo(() => inventory.reduce((sum, item) => sum + item.value, 0), [inventory]);

  const cropCategories = ["All", "BaseValue", "Seed Shop", "Exotic Seed Pack", "Night Event", "Summer Event", "Prehistoric", "Zen Update", "Cooking Update", "Beanstalk Event", "Fairy Event", "Bee Event", "Normal Seed Pack", "Limited Reward"];
  const petCategories = ["All", "Farm", "Domestic", "Forest", "Pond", "Savanna", "Jungle", "Arctic", "Mythical", "Ocean", "Divine", "Event"];
  
  const currentCategories = mode === "crops" ? cropCategories : petCategories;

  const displayedItems = useMemo(() => {
    let items: any[] = mode === "crops" ? CROPS : PETS;
    if (activeCategory !== "All") {
      items = items.filter(item => item.category === activeCategory || item.rarity === activeCategory);
    }
    if (searchTerm) {
      const lowerSearch = searchTerm.toLowerCase();
      items = items.filter(item => item.name.toLowerCase().includes(lowerSearch) || item.category.toLowerCase().includes(lowerSearch));
    }
    return items;
  }, [mode, activeCategory, searchTerm]);

  const handleModeChange = (newMode: "crops" | "pets") => {
    setMode(newMode);
    setActiveCategory("All");
    setSearchTerm("");
    setSelectedItem(null);
  };

  const addToInventory = (item: InventoryItem) => {
    setInventory(prev => [...prev, item]);
    setIsInventoryOpen(true);
  };

  const removeFromInventory = (id: string) => {
    setInventory(prev => prev.filter(item => item.id !== id));
  };

  return (
    <div className="w-full relative">
      
      {/* Search Bar / Mode Toggle Header */}
      <div className="flex flex-col md:flex-row items-center gap-6 mb-12">
        <div className="inline-flex rounded-2xl p-1 border" style={{ background: 'var(--surface-1)', borderColor: 'var(--glass-border)' }}>
          <button onClick={() => handleModeChange("crops")} className={`px-6 py-3 rounded-xl text-xs font-bold transition-all ${mode === "crops" ? "shadow-lg bg-primary text-white" : "text-muted hover:text-white"}`}>🌾 Plants / Crops</button>
          <button onClick={() => handleModeChange("pets")} className={`px-6 py-3 rounded-xl text-xs font-bold transition-all ${mode === "pets" ? "shadow-lg bg-amber-500 text-white" : "text-muted hover:text-white"}`}>🐾 Pets</button>
        </div>

        <div className="flex-1 relative w-full">
          <input 
            type="text" 
            placeholder={`Search for a ${mode === "crops" ? "plant" : "pet"}...`}
            className="w-full py-4 pl-12 pr-4 rounded-2xl outline-none transition-all placeholder-opacity-50"
            style={{ 
              background: 'rgba(17, 25, 40, 0.8)', 
              backdropFilter: 'blur(10px)',
              border: '1px solid var(--glass-border)',
              color: 'var(--foreground)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.2)'
            }}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <svg className="absolute left-4 top-1/2 transform -translate-y-1/2" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--muted)" strokeWidth="2">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </div>

        <button 
          onClick={() => setIsInventoryOpen(true)}
          className="p-4 rounded-2xl shadow-xl transition-all hover:scale-[1.03] flex items-center gap-3 relative whitespace-nowrap"
          style={{ background: 'var(--surface-1)', border: '1px solid var(--glass-border)' }}
        >
          <span className="text-xl">🎒</span>
          <span className="text-xs font-bold text-white">Backpack List</span>
          {inventory.length > 0 && (
            <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-red-500 text-xs font-bold flex items-center justify-center text-white">
              {inventory.length}
            </span>
          )}
        </button>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap items-center gap-2 mb-8 bg-black/20 p-2 rounded-2xl border border-white/5">
        {currentCategories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2.5 rounded-xl text-xs font-black transition-all ${activeCategory === cat ? 'bg-primary text-white shadow-xl scale-105' : 'text-muted hover:text-white hover:bg-white/5'}`}
            style={{ 
              background: activeCategory === cat ? 'var(--primary)' : 'transparent',
              fontFamily: 'var(--font-display)' 
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Big Visual Grid with Scrollbar (The Selector) */}
      <div className="max-h-[50vh] overflow-y-auto pr-2 custom-scrollbar p-1" style={{ scrollbarWidth: 'thin' }}>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
          {displayedItems.map(item => (
            <button
              key={item.id}
              onClick={() => {
                setSelectedItem({ type: mode, data: item });
                window.scrollTo({ top: document.getElementById('inline-calc-trigger')?.offsetTop || 500, behavior: 'smooth' });
              }}
              className={`group flex flex-col items-center justify-center p-4 rounded-2xl transition-all relative overflow-hidden h-32 border-2 ${selectedItem?.data?.id === item.id ? 'border-primary shadow-glow scale-[1.02] bg-primary/10' : 'border-white/5 hover:border-white/10 bg-surface-1'}`}
              style={{ background: 'var(--surface-1)' }}
            >
               <div className="text-4xl mb-2 drop-shadow-lg group-hover:scale-110 transition-transform">
                  {item.emoji}
               </div>
               <p className="text-[10px] font-black text-center text-white uppercase tracking-tighter" style={{ fontFamily: 'var(--font-display)' }}>
                  {item.name}
               </p>
               {mode === "pets" && (
                  <p className="text-[8px] uppercase mt-1 font-black opacity-60" style={{ color: item.rarity === 'Legendary' ? '#F59E0B' : 'white' }}>
                    {item.rarity}
                  </p>
               )}
            </button>
          ))}
        </div>
      </div>

      <div id="inline-calc-trigger" />

      {/* INLINE CALCULATOR (Instead of Popup) */}
      {selectedItem ? (
        <InlineCalculator 
          item={selectedItem} 
          onAddToInventory={addToInventory}
        />
      ) : (
        <div className="mt-12 p-16 rounded-3xl border-2 border-dashed border-white/5 flex flex-col items-center justify-center text-center">
           <p className="text-5xl mb-4 opacity-20">🖱️</p>
           <h3 className="text-xl font-bold text-white/20 uppercase tracking-widest">Select a {mode === "crops" ? "plant" : "pet"} above to start calculating</h3>
        </div>
      )}

      {/* Inventory Sidebar (Kept as Sidebar for Net Worth Tracking) */}
      {isInventoryOpen && (
        <>
          <div className="fixed inset-0 bg-black/70 backdrop-blur-md z-[60]" onClick={() => setIsInventoryOpen(false)}></div>
          <div className="fixed inset-y-0 right-0 w-full max-w-md bg-[#0a0e17] border-l border-white/10 shadow-2xl z-[70] flex flex-col pt-8 animate-slideInRight">
             <div className="px-8 flex items-center justify-between mb-8">
                <h2 className="text-2xl font-black text-white uppercase tracking-tighter" style={{ fontFamily: 'var(--font-display)' }}>💰 My Net Worth</h2>
                <button onClick={() => setIsInventoryOpen(false)} className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-white transition-all">✕</button>
             </div>
             <div className="px-8 py-6 bg-gradient-to-br from-primary/10 to-transparent border-y border-white/5 mb-6">
                <p className="text-[10px] uppercase font-black text-muted tracking-widest mb-1">Total Backpack Value</p>
                <h3 className="text-4xl font-black text-primary">{formatCurrency(totalNetWorth)}</h3>
             </div>
             <div className="flex-1 overflow-y-auto px-8 space-y-4 pb-8">
                {inventory.length === 0 ? (
                  <p className="text-center py-20 text-muted font-bold text-sm">Your backpack is empty!</p>
                ) : (
                  inventory.map(item => (
                    <div key={item.id} className="p-4 rounded-2xl bg-white/5 border border-white/5 flex items-center gap-4 group relative">
                       <span className="text-3xl">{item.emoji}</span>
                       <div className="flex-1">
                          <p className="font-bold text-white text-sm">{item.name}</p>
                          <p className="text-[10px] text-muted">{item.details}</p>
                          <p className="text-xs font-black text-primary mt-1">Value: {formatNumber(item.value)}</p>
                       </div>
                       <button onClick={() => removeFromInventory(item.id)} className="opacity-0 group-hover:opacity-100 p-2 bg-red-500/20 text-red-500 rounded-lg absolute right-4 transition-all hover:bg-red-500/30">✕</button>
                    </div>
                  ))
                )}
             </div>
             {inventory.length > 0 && (
               <div className="p-8 border-t border-white/10">
                 <button onClick={() => setInventory([])} className="w-full py-4 rounded-2xl bg-red-500/10 text-red-500 font-bold hover:bg-red-500/20 transition-all border border-red-500/20">Clear Backpack</button>
               </div>
             )}
          </div>
        </>
      )}

    </div>
  );
}
