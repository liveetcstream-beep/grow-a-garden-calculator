"use client";

import { useState, useMemo } from "react";
import { MUTATIONS, MUTATION_CATEGORIES, Mutation } from "@/data/mutations";
import { formatNumber } from "@/lib/calculator";

export default function MutationCalculator() {
  const [selectedMutations, setSelectedMutations] = useState<Mutation[]>([]);
  const [activeCat, setActiveCat] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [baseValue, setBaseValue] = useState(1000);

  const filteredMutations = useMemo(() => {
    let muts = MUTATIONS;
    if (activeCat !== "All") muts = muts.filter(m => m.category === activeCat);
    if (searchTerm) muts = muts.filter(m => m.name.toLowerCase().includes(searchTerm.toLowerCase()));
    return muts;
  }, [activeCat, searchTerm]);

  const totalMultiplier = selectedMutations.reduce((acc, m) => acc * m.multiplier, 1);
  const mutatedValue = baseValue * totalMultiplier;

  const toggleMutation = (mut: Mutation) => {
    setSelectedMutations(prev =>
      prev.find(m => m.id === mut.id)
        ? prev.filter(m => m.id !== mut.id)
        : [...prev, mut]
    );
  };

  // Sort by multiplier for the top mutations display
  const topMutations = useMemo(() => {
    return [...MUTATIONS].sort((a, b) => b.multiplier - a.multiplier).slice(0, 10);
  }, []);

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Base Value Input & Results */}
      <div className="glass-card-static p-6">
        <h3 className="text-sm font-semibold mb-4 flex items-center gap-2" style={{ color: 'var(--foreground)' }}>
          <span className="w-6 h-6 rounded-lg flex items-center justify-center text-sm" style={{ background: 'rgba(139,92,246,0.15)' }}>🧬</span>
          Mutation Value Calculator
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <div>
            <label className="result-label block mb-1.5">Base Crop Value</label>
            <input
              type="number"
              className="input-glow"
              value={baseValue}
              onChange={(e) => setBaseValue(parseFloat(e.target.value) || 0)}
              min={0}
            />
          </div>
          <div className="text-center p-3 rounded-xl" style={{ background: 'var(--surface-1)' }}>
            <p className="result-label mb-1">Total Multiplier</p>
            <p className="text-2xl font-bold" style={{ color: 'var(--secondary)', fontFamily: 'var(--font-display)' }}>
              ×{formatNumber(totalMultiplier)}
            </p>
          </div>
          <div className="text-center p-3 rounded-xl" style={{ background: 'linear-gradient(135deg, rgba(139,92,246,0.1), rgba(236,72,153,0.1))', border: '1px solid rgba(139,92,246,0.2)' }}>
            <p className="result-label mb-1">Mutated Value</p>
            <p className="text-2xl font-bold" style={{ background: 'var(--gradient-2)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontFamily: 'var(--font-display)' }}>
              🧬 {formatNumber(mutatedValue)}
            </p>
          </div>
        </div>

        {/* Selected stack */}
        {selectedMutations.length > 0 && (
          <div className="p-4 rounded-xl mb-4" style={{ background: 'var(--surface-1)', border: '1px solid var(--glass-border)' }}>
            <div className="flex items-center justify-between mb-3">
              <p className="text-xs font-semibold" style={{ color: 'var(--foreground)' }}>
                Mutation Stack ({selectedMutations.length})
              </p>
              <button onClick={() => setSelectedMutations([])} className="text-xs px-2 py-1 rounded-lg" style={{ color: 'var(--danger)', background: 'rgba(239,68,68,0.1)' }}>
                Clear
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {selectedMutations.map((mut, i) => (
                <span key={mut.id} className="inline-flex items-center gap-1">
                  <span className="px-3 py-1 rounded-full text-xs font-bold cursor-pointer hover:scale-105 transition-transform" style={{ background: `${mut.color}20`, color: mut.color, border: `1px solid ${mut.color}40` }} onClick={() => toggleMutation(mut)}>
                    {mut.name} ×{mut.multiplier}
                  </span>
                  {i < selectedMutations.length - 1 && <span className="text-xs" style={{ color: 'var(--muted)' }}>×</span>}
                </span>
              ))}
              <span className="self-center text-sm font-bold ml-2" style={{ color: 'var(--primary)' }}>
                = ×{formatNumber(totalMultiplier)}
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Search & Category Filter */}
      <div className="glass-card-static p-6">
        <div className="flex flex-col sm:flex-row gap-4 mb-4">
          <input
            type="text"
            className="input-glow flex-1"
            placeholder="🔍 Search mutations..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="flex gap-1 overflow-x-auto pb-3 mb-4" style={{ scrollbarWidth: 'none' }}>
          <button onClick={() => setActiveCat("All")} className={`tab-btn ${activeCat === "All" ? "active" : ""}`}>All ({MUTATIONS.length})</button>
          {MUTATION_CATEGORIES.map(cat => {
            const count = MUTATIONS.filter(m => m.category === cat).length;
            return (
              <button key={cat} onClick={() => setActiveCat(cat)} className={`tab-btn ${activeCat === cat ? "active" : ""}`}>
                {cat} ({count})
              </button>
            );
          })}
        </div>

        {/* Mutations Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {filteredMutations.map(mut => {
            const isSelected = selectedMutations.find(m => m.id === mut.id);
            return (
              <button
                key={mut.id}
                onClick={() => toggleMutation(mut)}
                className="text-left p-3 rounded-xl transition-all hover:scale-[1.02]"
                style={{
                  background: isSelected ? `${mut.color}15` : 'var(--surface-1)',
                  border: `1px solid ${isSelected ? mut.color + '50' : 'var(--glass-border)'}`,
                }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ background: mut.color, boxShadow: isSelected ? `0 0 10px ${mut.color}` : 'none' }} />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold truncate" style={{ color: isSelected ? mut.color : 'var(--foreground)' }}>{mut.name}</span>
                      <span className="text-xs font-bold px-1.5 py-0.5 rounded" style={{ background: `${mut.color}20`, color: mut.color }}>×{mut.multiplier}</span>
                    </div>
                    <p className="text-xs mt-0.5 truncate" style={{ color: 'var(--muted)' }}>{mut.howToGet}</p>
                  </div>
                  {isSelected && (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{ color: mut.color }}>
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Top Mutations Reference */}
      <div className="glass-card-static p-6">
        <h3 className="text-sm font-semibold mb-4 flex items-center gap-2" style={{ color: 'var(--foreground)' }}>
          <span className="w-6 h-6 rounded-lg flex items-center justify-center text-sm" style={{ background: 'rgba(245,158,11,0.15)' }}>🏆</span>
          Top 10 Highest Multipliers
        </h3>
        <div className="space-y-2">
          {topMutations.map((mut, i) => (
            <div key={mut.id} className="flex items-center gap-3 p-2.5 rounded-lg" style={{ background: 'var(--surface-1)' }}>
              <span className="text-sm font-bold w-6 text-center" style={{ color: i < 3 ? 'var(--warning)' : 'var(--muted)' }}>
                #{i + 1}
              </span>
              <span className="w-3 h-3 rounded-full flex-shrink-0" style={{ background: mut.color }} />
              <span className="text-sm font-medium flex-1" style={{ color: 'var(--foreground)' }}>{mut.name}</span>
              <span className="text-xs" style={{ color: 'var(--muted)' }}>{mut.category}</span>
              <span className="text-sm font-bold px-2 py-0.5 rounded" style={{ background: `${mut.color}20`, color: mut.color }}>×{mut.multiplier}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
