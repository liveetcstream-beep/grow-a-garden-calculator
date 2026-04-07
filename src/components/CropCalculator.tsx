"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import { CROPS } from "@/data/crops";
import { MUTATIONS, MUTATION_CATEGORIES, Mutation } from "@/data/mutations";
import { calculateCropValue, formatNumber, formatCurrency } from "@/lib/calculator";
import html2canvas from "html2canvas";

export default function CropCalculator() {
  const [selectedCrop, setSelectedCrop] = useState(CROPS[0]);
  const [weight, setWeight] = useState(1);
  const [customBasePrice, setCustomBasePrice] = useState<number | null>(null);
  const [selectedMutations, setSelectedMutations] = useState<Mutation[]>([]);
  const [friendBoost, setFriendBoost] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeMutCategory, setActiveMutCategory] = useState("All");
  const dropdownRef = useRef<HTMLDivElement>(null);
  const resultRef = useRef<HTMLDivElement>(null);
  const [isExporting, setIsExporting] = useState(false);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const filteredCrops = useMemo(() => {
    if (!searchTerm) return CROPS;
    return CROPS.filter(c =>
      c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const filteredMutations = useMemo(() => {
    if (activeMutCategory === "All") return MUTATIONS;
    return MUTATIONS.filter(m => m.category === activeMutCategory);
  }, [activeMutCategory]);

  const toggleMutation = (mut: Mutation) => {
    setSelectedMutations(prev =>
      prev.find(m => m.id === mut.id)
        ? prev.filter(m => m.id !== mut.id)
        : [...prev, mut]
    );
  };

  const result = useMemo(() => {
    return calculateCropValue({
      basePrice: customBasePrice ?? selectedCrop.basePrice,
      weight,
      mutations: selectedMutations,
      friendBoost,
      quantity,
    });
  }, [selectedCrop, weight, customBasePrice, selectedMutations, friendBoost, quantity]);

  const exportResult = async () => {
    if (!resultRef.current) return;
    setIsExporting(true);
    try {
      const canvas = await html2canvas(resultRef.current, { backgroundColor: '#111927' });
      const image = canvas.toDataURL("image/png");
      const a = document.createElement("a");
      a.href = image;
      a.download = `gag-crop-value-${selectedCrop.id}.png`;
      a.click();
    } catch (err) {
      console.error("Failed to export image", err);
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Crop Selection */}
      <div className="glass-card-static p-6">
        <h3 className="text-sm font-semibold mb-4 flex items-center gap-2" style={{ color: 'var(--foreground)' }}>
          <span className="w-6 h-6 rounded-lg flex items-center justify-center text-sm" style={{ background: 'rgba(34,197,94,0.15)' }}>🌾</span>
          Select Crop
        </h3>

        {/* Searchable Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <div
            className="input-glow cursor-pointer flex items-center justify-between"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <span className="flex items-center gap-2">
              <span className="text-lg">{selectedCrop.emoji}</span>
              <span>{selectedCrop.name}</span>
              <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: 'var(--surface-2)', color: 'var(--muted)' }}>
                {selectedCrop.category}
              </span>
            </span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: 'var(--muted)', transition: 'transform 0.2s', transform: dropdownOpen ? 'rotate(180deg)' : '' }}>
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </div>

          {dropdownOpen && (
            <div className="absolute top-full left-0 right-0 mt-2 z-40 animate-fadeIn" style={{ background: 'var(--surface-1)', border: '1px solid var(--glass-border)', borderRadius: 'var(--radius-sm)', maxHeight: '300px', overflow: 'hidden' }}>
              <div className="p-2" style={{ borderBottom: '1px solid var(--glass-border)' }}>
                <input
                  type="text"
                  placeholder="Search crops..."
                  className="input-glow"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  autoFocus
                />
              </div>
              <div style={{ maxHeight: '240px', overflowY: 'auto' }}>
                {filteredCrops.map(crop => (
                  <button
                    key={crop.id}
                    className="w-full text-left px-4 py-3 flex items-center gap-3 transition-colors hover:bg-[var(--surface-2)]"
                    style={{ fontSize: '14px' }}
                    onClick={() => {
                      setSelectedCrop(crop);
                      setCustomBasePrice(null);
                      setDropdownOpen(false);
                      setSearchTerm("");
                    }}
                  >
                    <span className="text-lg">{crop.emoji}</span>
                    <span className="font-medium" style={{ color: 'var(--foreground)' }}>{crop.name}</span>
                    <span className="text-xs ml-auto px-2 py-0.5 rounded-full" style={{ background: 'var(--surface-3)', color: 'var(--muted)' }}>
                      {crop.basePrice}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Input Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
          <div>
            <label className="result-label block mb-1.5">Base Price</label>
            <input
              type="number"
              className="input-glow"
              value={customBasePrice ?? selectedCrop.basePrice}
              onChange={(e) => setCustomBasePrice(parseFloat(e.target.value) || 0)}
              min={0}
            />
          </div>
          <div>
            <label className="result-label block mb-1.5">Weight (kg)</label>
            <input
              type="number"
              className="input-glow"
              value={weight}
              onChange={(e) => setWeight(parseFloat(e.target.value) || 0)}
              min={0}
              step={0.1}
            />
          </div>
          <div>
            <label className="result-label block mb-1.5">Friend Boost %</label>
            <input
              type="number"
              className="input-glow"
              value={friendBoost}
              onChange={(e) => setFriendBoost(parseFloat(e.target.value) || 0)}
              min={0}
              max={100}
            />
          </div>
          <div>
            <label className="result-label block mb-1.5">Quantity</label>
            <input
              type="number"
              className="input-glow"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
              min={1}
            />
          </div>
        </div>
      </div>

      {/* Mutation Selection */}
      <div className="glass-card-static p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-semibold flex items-center gap-2" style={{ color: 'var(--foreground)' }}>
            <span className="w-6 h-6 rounded-lg flex items-center justify-center text-sm" style={{ background: 'rgba(139,92,246,0.15)' }}>🧬</span>
            Mutations
            {selectedMutations.length > 0 && (
              <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: 'rgba(34,197,94,0.15)', color: 'var(--primary)' }}>
                {selectedMutations.length} selected
              </span>
            )}
          </h3>
          {selectedMutations.length > 0 && (
            <button
              onClick={() => setSelectedMutations([])}
              className="text-xs font-medium px-3 py-1.5 rounded-lg transition-colors"
              style={{ color: 'var(--danger)', background: 'rgba(239,68,68,0.1)' }}
            >
              Clear All
            </button>
          )}
        </div>

        {/* Category Tabs */}
        <div className="flex gap-1 overflow-x-auto pb-3 mb-4" style={{ scrollbarWidth: 'none' }}>
          <button
            onClick={() => setActiveMutCategory("All")}
            className={`tab-btn ${activeMutCategory === "All" ? "active" : ""}`}
          >
            All
          </button>
          {MUTATION_CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveMutCategory(cat)}
              className={`tab-btn ${activeMutCategory === cat ? "active" : ""}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Selected Mutations Preview */}
        {selectedMutations.length > 0 && (
          <div className="mb-4 p-3 rounded-xl flex flex-wrap gap-2" style={{ background: 'var(--surface-1)', border: '1px solid var(--glass-border)' }}>
            {selectedMutations.map(mut => (
              <span
                key={mut.id}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold cursor-pointer transition-all hover:scale-105"
                style={{ background: `${mut.color}20`, color: mut.color, border: `1px solid ${mut.color}40` }}
                onClick={() => toggleMutation(mut)}
              >
                {mut.name} ×{mut.multiplier}
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              </span>
            ))}
            <span className="text-xs self-center ml-2 font-bold" style={{ color: 'var(--primary)' }}>
              = ×{formatNumber(result.mutationMultiplier)}
            </span>
          </div>
        )}

        {/* Mutation Grid */}
        <div className="flex flex-wrap gap-2">
          {filteredMutations.map(mut => {
            const isSelected = selectedMutations.find(m => m.id === mut.id);
            return (
              <button
                key={mut.id}
                onClick={() => toggleMutation(mut)}
                className="mutation-pill"
                style={{
                  background: isSelected ? `${mut.color}25` : 'var(--surface-2)',
                  color: isSelected ? mut.color : 'var(--muted)',
                  borderColor: isSelected ? mut.color : 'transparent',
                  ['--pill-color' as string]: `${mut.color}50`,
                }}
              >
                <span className="w-2 h-2 rounded-full" style={{ background: mut.color }} />
                {mut.name}
                <span className="opacity-70">×{mut.multiplier}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Results */}
      <div className="glass-card-static p-6" style={{ background: 'rgba(17,25,40,0.9)' }} ref={resultRef}>
        <div className="flex items-center justify-between mb-5">
           <h3 className="text-sm font-semibold flex items-center gap-2" style={{ color: 'var(--foreground)' }}>
             <span className="w-6 h-6 rounded-lg flex items-center justify-center text-sm" style={{ background: 'rgba(6,182,212,0.15)' }}>📊</span>
             Calculation Results
           </h3>
           <button onClick={exportResult} disabled={isExporting} className="btn-secondary text-xs px-3 py-1.5 flex items-center gap-2">
             <span>🖼️</span> {isExporting ? "Exporting..." : "Export Image"}
           </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="text-center p-4 rounded-xl" style={{ background: 'var(--surface-1)' }}>
            <p className="result-label mb-2">Base Value</p>
            <p className="text-xl font-bold" style={{ color: 'var(--accent)', fontFamily: 'var(--font-display)' }}>
              {formatCurrency(result.baseValue)}
            </p>
            <p className="text-xs mt-1" style={{ color: 'var(--muted)' }}>
              {customBasePrice ?? selectedCrop.basePrice} × {weight}² kg
            </p>
          </div>

          <div className="text-center p-4 rounded-xl" style={{ background: 'var(--surface-1)' }}>
            <p className="result-label mb-2">Mutation Value</p>
            <p className="text-xl font-bold" style={{ color: 'var(--secondary)', fontFamily: 'var(--font-display)' }}>
              {formatCurrency(result.mutationValue)}
            </p>
            <p className="text-xs mt-1" style={{ color: 'var(--muted)' }}>
              ×{formatNumber(result.mutationMultiplier)} multiplier
            </p>
          </div>

          <div className="text-center p-4 rounded-xl" style={{ background: 'linear-gradient(135deg, rgba(34,197,94,0.1), rgba(6,182,212,0.1))', border: '1px solid rgba(34,197,94,0.2)' }}>
            <p className="result-label mb-2">Final Sell Value</p>
            <p className="result-value number-animate">
              {formatCurrency(result.finalValue)}
            </p>
            <p className="text-xs mt-1" style={{ color: 'var(--muted)' }}>
              {quantity > 1 ? `${formatCurrency(result.perUnit)} per unit` : `×${result.friendBoostMultiplier} friend boost`}
            </p>
          </div>
        </div>

        {/* Formula Breakdown */}
        <div className="mt-5 p-4 rounded-xl text-xs font-mono" style={{ background: 'var(--surface-1)', color: 'var(--muted)' }}>
          <p className="mb-1"><span style={{ color: 'var(--accent)' }}>Base</span> = {customBasePrice ?? selectedCrop.basePrice} × {weight}² = {formatNumber(result.baseValue)}</p>
          <p className="mb-1"><span style={{ color: 'var(--secondary)' }}>Mutations</span> = {result.baseValue.toFixed(0)} × {formatNumber(result.mutationMultiplier)} = {formatNumber(result.mutationValue)}</p>
          <p><span style={{ color: 'var(--primary)' }}>Final</span> = {formatNumber(result.mutationValue)} × {result.friendBoostMultiplier} × {quantity} = <strong style={{ color: 'var(--primary)' }}>{formatNumber(result.finalValue)}</strong></p>
        </div>
      </div>
    </div>
  );
}
