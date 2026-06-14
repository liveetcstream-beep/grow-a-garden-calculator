"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { formatNumber } from "@/lib/calculator";

interface Crop {
  id: string;
  name: string;
  basePrice: number;
  emoji: string;
  category: string;
}

interface Pet {
  id: string;
  name: string;
  baseValue: number;
  rarity: string;
  ability: string;
  abilityMultiplier: number;
  emoji: string;
  category: string;
}

interface ValueListTabsProps {
  crops: Crop[];
  pets: Pet[];
}

const RARITY_COLORS: Record<string, string> = {
  Common: "#9CA3AF", // Gray
  Uncommon: "#22C55E", // Green
  Rare: "#3B82F6", // Blue
  Epic: "#A855F7", // Purple
  Legendary: "#F59E0B", // Orange/Gold
  Mythic: "#EF4444", // Red
  Divine: "#EC4899", // Pink/Light Magenta
  Event: "#06B6D4", // Cyan
};

export default function ValueListTabs({ crops, pets }: ValueListTabsProps) {
  const [activeTab, setActiveTab] = useState<"crops" | "pets">("crops");
  const [searchTerm, setSearchTerm] = useState("");

  const cropCategories = useMemo(() => Array.from(new Set(crops.map(c => c.category))), [crops]);
  const petRarities = useMemo(() => ["Divine", "Mythic", "Legendary", "Epic", "Rare", "Uncommon", "Common", "Event"], []);

  const filteredCrops = useMemo(() => {
    if (!searchTerm) return crops;
    const term = searchTerm.toLowerCase();
    return crops.filter(c => c.name.toLowerCase().includes(term) || c.category.toLowerCase().includes(term));
  }, [crops, searchTerm]);

  const filteredPets = useMemo(() => {
    if (!searchTerm) return pets;
    const term = searchTerm.toLowerCase();
    return pets.filter(p => p.name.toLowerCase().includes(term) || p.rarity.toLowerCase().includes(term) || p.category.toLowerCase().includes(term));
  }, [pets, searchTerm]);

  return (
    <div>
      {/* Search Bar / Tab Switcher */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12 bg-black/20 p-4 rounded-3xl border border-white/5">
        <div className="inline-flex rounded-2xl p-1 border" style={{ background: 'var(--surface-2)', borderColor: 'var(--glass-border)' }}>
          <button 
            onClick={() => { setActiveTab("crops"); setSearchTerm(""); }} 
            className={`px-6 py-3 rounded-xl text-xs font-bold transition-all ${activeTab === "crops" ? "shadow-lg bg-primary text-white" : "text-muted hover:text-white"}`}
          >
            🌾 Plants / Crops
          </button>
          <button 
            onClick={() => { setActiveTab("pets"); setSearchTerm(""); }} 
            className={`px-6 py-3 rounded-xl text-xs font-bold transition-all ${activeTab === "pets" ? "shadow-lg bg-amber-500 text-white" : "text-muted hover:text-white"}`}
          >
            🐾 Pets Value List
          </button>
        </div>

        <div className="relative w-full md:max-w-xs">
          <input 
            type="text" 
            placeholder={`Search ${activeTab === "crops" ? "crops" : "pets"}...`}
            className="w-full py-3 pl-10 pr-4 rounded-xl outline-none transition-all placeholder-opacity-50 text-sm"
            style={{ 
              background: 'rgba(10, 14, 23, 0.8)', 
              border: '1px solid var(--glass-border)',
              color: 'var(--foreground)'
            }}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <svg className="absolute left-3.5 top-1/2 transform -translate-y-1/2" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--muted)" strokeWidth="2">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </div>
      </div>

      {/* Crops Value List Tab */}
      {activeTab === "crops" && (
        <div className="space-y-12">
          {cropCategories.map(category => {
            const categoryCrops = filteredCrops.filter(c => c.category === category);
            if (categoryCrops.length === 0) return null;
            
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
                              href={`/crop/${crop.id}-value`} 
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
      )}

      {/* Pets Value List Tab */}
      {activeTab === "pets" && (
        <div className="space-y-12">
          {petRarities.map(rarity => {
            const rarityPets = filteredPets.filter(p => p.rarity === rarity);
            if (rarityPets.length === 0) return null;
            
            return (
              <div key={rarity} className="rounded-3xl border overflow-hidden shadow-xl" style={{ background: 'var(--surface-1)', borderColor: 'var(--glass-border)' }}>
                <div className="px-6 py-4 border-b flex items-center justify-between" style={{ background: 'rgba(255,255,255,0.02)', borderColor: 'var(--glass-border)' }}>
                  <h2 className="text-xl font-bold uppercase tracking-wider" style={{ fontFamily: 'var(--font-display)', color: RARITY_COLORS[rarity] || 'white' }}>
                    {rarity} Pets
                  </h2>
                  <span className="text-xs px-3 py-1 rounded-full font-bold uppercase" style={{ background: `${RARITY_COLORS[rarity]}15`, color: RARITY_COLORS[rarity] }}>
                    Tier: {rarity}
                  </span>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="text-xs uppercase tracking-wider" style={{ color: 'var(--muted)', background: 'rgba(0,0,0,0.2)' }}>
                        <th className="px-6 py-4 font-semibold w-16">Icon</th>
                        <th className="px-6 py-4 font-semibold">Pet Name</th>
                        <th className="px-6 py-4 font-semibold">Special Ability</th>
                        <th className="px-6 py-4 font-semibold">Category</th>
                        <th className="px-6 py-4 font-semibold text-right">Base Value (Coins)</th>
                        <th className="px-6 py-4 font-semibold text-center">Stats Link</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y" style={{ borderColor: 'var(--glass-border)' }}>
                      {rarityPets.map(pet => (
                        <tr key={pet.id} className="transition-colors hover:bg-white/5">
                          <td className="px-6 py-4 text-3xl">{pet.emoji}</td>
                          <td className="px-6 py-4 font-bold text-sm" style={{ color: 'var(--foreground)' }}>{pet.name}</td>
                          <td className="px-6 py-4 text-xs font-semibold" style={{ color: 'var(--muted)' }}>
                            {pet.ability} <span style={{ color: RARITY_COLORS[rarity] || 'var(--primary)' }}>(x{pet.abilityMultiplier})</span>
                          </td>
                          <td className="px-6 py-4 text-xs font-semibold" style={{ color: 'var(--muted)' }}>
                            {pet.category}
                          </td>
                          <td className="px-6 py-4 font-mono font-bold text-right text-[var(--accent)] text-sm">
                            {formatNumber(pet.baseValue)}
                          </td>
                          <td className="px-6 py-4 text-center">
                            <Link 
                              href={`/pet/${pet.id}-stats`} 
                              className="inline-block px-4 py-2 rounded-xl text-xs font-bold transition-all hover:scale-105"
                              style={{ background: 'var(--surface-2)', border: '1px solid var(--glass-border)', color: 'var(--foreground)' }}
                            >
                              View Stats
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
      )}
    </div>
  );
}
