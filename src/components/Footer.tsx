import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer-gradient mt-20 border-t" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl" style={{ background: 'var(--gradient-1)' }}>
                🌱
              </div>
              <div>
                <h3 className="font-bold" style={{ fontFamily: 'var(--font-display)' }}>GAG Calculator</h3>
                <p className="text-xs" style={{ color: 'var(--muted)' }}>Grow A Garden Tools</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
              The most advanced calculator suite for Roblox Grow A Garden players. Fast, accurate, and always updated.
            </p>
          </div>

          {/* Calculators */}
          <div>
            <h4 className="font-semibold text-sm mb-4" style={{ color: 'var(--foreground)' }}>Calculators</h4>
            <ul className="space-y-2">
              {[
                { href: "/crop-calculator", label: "🌾 Crop Value Calculator" },
                { href: "/mutation-calculator", label: "🧬 Mutation Calculator" },
                { href: "/pet-calculator", label: "🐾 Pet Calculator" },
                { href: "/trade-calculator", label: "🤝 Trade Calculator" },
                { href: "/seed-profit", label: "🌱 Seed Profit" },
              ].map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm transition-colors hover:text-[var(--primary)]" style={{ color: 'var(--muted)' }}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-sm mb-4" style={{ color: 'var(--foreground)' }}>Resources</h4>
            <ul className="space-y-2">
              {[
                { href: "/crop/carrot-value", label: "Crop Values" },
                { href: "/mutation/golden", label: "Mutation Guide" },
                { href: "/pet/phoenix-stats", label: "Pet Stats" },
              ].map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm transition-colors hover:text-[var(--primary)]" style={{ color: 'var(--muted)' }}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Community */}
          <div>
            <h4 className="font-semibold text-sm mb-4" style={{ color: 'var(--foreground)' }}>Company & Community</h4>
            <ul className="space-y-2">
              {[
                { href: "/about", label: "🏢 About Us" },
                { href: "/contact", label: "📧 Contact Us" },
              ].map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm transition-colors hover:text-[var(--primary)]" style={{ color: 'var(--muted)' }}>
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <a href="https://discord.gg/growagarden" target="_blank" rel="noopener noreferrer" className="text-sm transition-colors hover:text-[var(--primary)]" style={{ color: 'var(--muted)' }}>
                  🎮 GAG Discord
                </a>
              </li>
              <li>
                <a href="https://www.roblox.com/games/126884695634066/Grow-A-Garden" target="_blank" rel="noopener noreferrer" className="text-sm transition-colors hover:text-[var(--primary)]" style={{ color: 'var(--muted)' }}>
                  🎯 Play on Roblox
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <p className="text-xs" style={{ color: 'var(--muted)' }}>
            © 2025 GAG Calculator. Not affiliated with Roblox Corporation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/about" className="text-xs transition-colors hover:text-[var(--primary)]" style={{ color: 'var(--muted)' }}>About Us</Link>
            <Link href="/contact" className="text-xs transition-colors hover:text-[var(--primary)]" style={{ color: 'var(--muted)' }}>Contact</Link>
            <Link href="/privacy" className="text-xs transition-colors hover:text-[var(--primary)]" style={{ color: 'var(--muted)' }}>Privacy Policy</Link>
            <Link href="/terms" className="text-xs transition-colors hover:text-[var(--primary)]" style={{ color: 'var(--muted)' }}>Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
