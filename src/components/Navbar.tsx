"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NAV_ITEMS = [
  { href: "/", label: "Home Base", icon: "🏠" },
  { href: "/reverse-calculator", label: "Reverse Targeter", icon: "🎯" },
  { href: "/trade-calculator", label: "Trade Win/Lose", icon: "🤝" },
  { href: "/mutation-calculator", label: "Mutations", icon: "🧬" },
  { href: "/seed-profit", label: "Seed ROI", icon: "🌱" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 py-4 px-4 sm:px-6 transition-all" style={{ background: 'rgba(10, 14, 23, 0.8)', backdropFilter: 'blur(12px)', borderBottom: '1px solid var(--glass-border)' }}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 flex items-center justify-center rounded-xl text-xl transition-transform group-hover:scale-110" style={{ background: 'var(--gradient-1)' }}>
            🌱
          </div>
          <div>
            <span className="font-extrabold text-lg sm:text-xl tracking-tight block leading-none" style={{ fontFamily: 'var(--font-display)', color: 'var(--foreground)' }}>
              Grow A Garden
            </span>
            <span className="text-[10px] font-bold tracking-widest uppercase" style={{ color: 'var(--primary)' }}>
              Calculator Hub
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1 p-1 rounded-2xl" style={{ background: 'var(--surface-1)', border: '1px solid var(--glass-border)' }}>
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className="nav-link"
                style={{
                  color: isActive ? 'var(--primary)' : 'var(--muted)',
                  background: isActive ? 'rgba(34,197,94,0.1)' : 'transparent',
                  fontWeight: isActive ? 600 : 500
                }}
              >
                <span className="mr-1.5 opacity-70">{item.icon}</span>
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl"
          style={{ background: 'var(--surface-1)', border: '1px solid var(--glass-border)' }}
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--foreground)" strokeWidth="2">
            {isOpen ? (
              <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round"/>
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round"/>
            )}
          </svg>
        </button>

      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 p-4 border-b border-[var(--glass-border)] animate-slideUp" style={{ background: 'rgba(10, 14, 23, 0.95)', backdropFilter: 'blur(20px)' }}>
          <div className="flex flex-col gap-2">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="p-4 rounded-xl flex items-center gap-3 text-sm font-semibold transition-colors"
                  style={{
                    color: isActive ? 'var(--primary)' : 'var(--foreground)',
                    background: isActive ? 'rgba(34,197,94,0.1)' : 'var(--surface-1)',
                    border: `1px solid ${isActive ? 'rgba(34,197,94,0.2)' : 'var(--glass-border)'}`
                  }}
                  onClick={() => setIsOpen(false)}
                >
                  <span className="text-xl">{item.icon}</span>
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
