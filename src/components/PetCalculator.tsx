"use client";

import { useState, useMemo } from "react";
import { PETS, PET_RARITIES } from "@/data/pets";
import { calculatePetValue, formatNumber, formatCurrency } from "@/lib/calculator";

const RARITY_COLORS: Record<string, string> = {
  Common: "#9CA3AF",
  Uncommon: "#34D399",
  Rare: "#60A5FA",
  Epic: "#A78BFA",
  Legendary: "#F59E0B",
};

export default function PetCalculator() {
  const [selectedPet, setSelectedPet] = useState(PETS[0]);
  const [weight, setWeight] = useState(10);
  const [age, setAge] = useState(1);
  const [customAbilityMod, setCustomAbilityMod] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeRarity, setActiveRarity] = useState("All");

  const filteredPets = useMemo(() => {
    let pets = PETS;
    if (activeRarity !== "All") pets = pets.filter(p => p.rarity === activeRarity);
    if (searchTerm) pets = pets.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()));
    return pets;
  }, [activeRarity, searchTerm]);

  const result = useMemo(() => {
    return calculatePetValue({
      baseValue: selectedPet.baseValue,
      weight,
      age,
      abilityMultiplier: customAbilityMod ?? selectedPet.abilityMultiplier,
    });
  }, [selectedPet, weight, age, customAbilityMod]);

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Pet Selection */}
      <div className="glass-card-static p-6">
        <h3 className="text-sm font-semibold mb-4 flex items-center gap-2" style={{ color: 'var(--foreground)' }}>
          <span className="w-6 h-6 rounded-lg flex items-center justify-center text-sm" style={{ background: 'rgba(245,158,11,0.15)' }}>🐾</span>
          Select Pet
        </h3>

        <input
          type="text"
          className="input-glow mb-4"
          placeholder="🔍 Search pets..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {/* Rarity Filter */}
        <div className="flex gap-1 overflow-x-auto pb-3 mb-4" style={{ scrollbarWidth: 'none' }}>
          <button onClick={() => setActiveRarity("All")} className={`tab-btn ${activeRarity === "All" ? "active" : ""}`}>All</button>
          {PET_RARITIES.map(r => (
            <button key={r} onClick={() => setActiveRarity(r)} className={`tab-btn ${activeRarity === r ? "active" : ""}`}>
              <span className="w-2 h-2 rounded-full inline-block mr-1.5" style={{ background: RARITY_COLORS[r] }} />
              {r}
            </button>
          ))}
        </div>

        {/* Pet Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 max-h-[300px] overflow-y-auto pr-1">
          {filteredPets.map(pet => {
            const isSelected = selectedPet.id === pet.id;
            const rarityColor = RARITY_COLORS[pet.rarity];
            return (
              <button
                key={pet.id}
                onClick={() => { setSelectedPet(pet); setCustomAbilityMod(null); }}
                className="p-3 rounded-xl text-left transition-all hover:scale-[1.03]"
                style={{
                  background: isSelected ? `${rarityColor}15` : 'var(--surface-1)',
                  border: `1px solid ${isSelected ? rarityColor + '50' : 'var(--glass-border)'}`,
                }}
              >
                <div className="text-2xl mb-1">{pet.emoji}</div>
                <p className="text-sm font-semibold truncate" style={{ color: isSelected ? rarityColor : 'var(--foreground)' }}>{pet.name}</p>
                <p className="text-xs" style={{ color: rarityColor }}>{pet.rarity}</p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Pet Stats Input */}
      <div className="glass-card-static p-6">
        <h3 className="text-sm font-semibold mb-4 flex items-center gap-2" style={{ color: 'var(--foreground)' }}>
          <span className="w-6 h-6 rounded-lg flex items-center justify-center text-sm" style={{ background: 'rgba(6,182,212,0.15)' }}>⚙️</span>
          {selectedPet.emoji} {selectedPet.name} Stats
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="result-label block mb-1.5">Weight (kg)</label>
            <input
              type="number"
              className="input-glow"
              value={weight}
              onChange={(e) => setWeight(parseFloat(e.target.value) || 0)}
              min={0}
              step={0.5}
            />
          </div>
          <div>
            <label className="result-label block mb-1.5">Age (days)</label>
            <input
              type="number"
              className="input-glow"
              value={age}
              onChange={(e) => setAge(parseInt(e.target.value) || 0)}
              min={0}
            />
          </div>
          <div>
            <label className="result-label block mb-1.5">Ability Modifier</label>
            <input
              type="number"
              className="input-glow"
              value={customAbilityMod ?? selectedPet.abilityMultiplier}
              onChange={(e) => setCustomAbilityMod(parseFloat(e.target.value) || 0)}
              min={0}
              step={0.1}
            />
          </div>
        </div>

        <div className="mt-4 p-3 rounded-xl" style={{ background: 'var(--surface-1)', border: '1px solid var(--glass-border)' }}>
          <p className="text-xs font-medium" style={{ color: 'var(--muted)' }}>
            <strong style={{ color: 'var(--foreground)' }}>Ability:</strong> {selectedPet.ability}
          </p>
        </div>
      </div>

      {/* Results */}
      <div className="glass-card-static p-6" style={{ background: 'rgba(17,25,40,0.9)' }}>
        <h3 className="text-sm font-semibold mb-5 flex items-center gap-2" style={{ color: 'var(--foreground)' }}>
          <span className="w-6 h-6 rounded-lg flex items-center justify-center text-sm" style={{ background: 'rgba(34,197,94,0.15)' }}>📊</span>
          Pet Valuation
        </h3>

        {/* Main Value */}
        <div className="text-center p-6 rounded-xl mb-6" style={{ background: 'linear-gradient(135deg, rgba(245,158,11,0.1), rgba(239,68,68,0.05))', border: `1px solid ${RARITY_COLORS[selectedPet.rarity]}30` }}>
          <p className="result-label mb-2">Estimated Pet Value</p>
          <p className="text-4xl font-extrabold number-animate" style={{ fontFamily: 'var(--font-display)', color: RARITY_COLORS[selectedPet.rarity] }}>
            {formatCurrency(result.estimatedValue)}
          </p>
          <p className="text-xs mt-2" style={{ color: 'var(--muted)' }}>
            Total Multiplier: ×{result.totalMultiplier}
          </p>
        </div>

        {/* Stat Breakdown */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl" style={{ background: 'var(--surface-1)' }}>
            <p className="result-label mb-2">Weight Bonus</p>
            <p className="text-lg font-bold" style={{ color: 'var(--accent)', fontFamily: 'var(--font-display)' }}>×{result.weightBonus}</p>
            <div className="stat-bar-bg mt-2">
              <div className="stat-bar-fill" style={{ width: `${Math.min((result.weightBonus / 3) * 100, 100)}%`, background: 'var(--accent)' }} />
            </div>
          </div>
          <div className="p-4 rounded-xl" style={{ background: 'var(--surface-1)' }}>
            <p className="result-label mb-2">Age Bonus</p>
            <p className="text-lg font-bold" style={{ color: 'var(--primary)', fontFamily: 'var(--font-display)' }}>×{result.ageBonus}</p>
            <div className="stat-bar-bg mt-2">
              <div className="stat-bar-fill" style={{ width: `${Math.min((result.ageBonus / 5) * 100, 100)}%` }} />
            </div>
          </div>
          <div className="p-4 rounded-xl" style={{ background: 'var(--surface-1)' }}>
            <p className="result-label mb-2">Ability Bonus</p>
            <p className="text-lg font-bold" style={{ color: 'var(--secondary)', fontFamily: 'var(--font-display)' }}>×{result.abilityBonus}</p>
            <div className="stat-bar-bg mt-2">
              <div className="stat-bar-fill" style={{ width: `${Math.min((result.abilityBonus / 5) * 100, 100)}%`, background: 'var(--secondary)' }} />
            </div>
          </div>
        </div>

        {/* Formula */}
        <div className="mt-5 p-4 rounded-xl text-xs font-mono" style={{ background: 'var(--surface-1)', color: 'var(--muted)' }}>
          <p><span style={{ color: 'var(--warning)' }}>Base</span> = {formatNumber(selectedPet.baseValue)} ({selectedPet.rarity})</p>
          <p><span style={{ color: 'var(--primary)' }}>Value</span> = {formatNumber(selectedPet.baseValue)} × {result.weightBonus} × {result.ageBonus} × {result.abilityBonus} = <strong style={{ color: RARITY_COLORS[selectedPet.rarity] }}>{formatNumber(result.estimatedValue)}</strong></p>
        </div>
      </div>
    </div>
  );
}
