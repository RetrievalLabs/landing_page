import { useState, useEffect } from 'react';
import logoUrl from '../../assets/logo.png';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { label: 'Products', href: '#products' },
    { label: 'Founders', href: '#founders' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${scrolled
          ? 'py-4 bg-background/80 backdrop-blur-xl'
          : 'py-8 bg-transparent'
        }`}
    >
      <div className="section-container h-stack justify-between">
        {/* Logo - Minimalist */}
        <a href="#" className="h-stack gap-3 group">
          <div
            className="w-8 h-8 rounded bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-105"
            style={{ backgroundImage: `url(${logoUrl})`, backgroundSize: '360%' }}
            aria-hidden="true"
          />
          <span className="font-sans font-bold text-white text-lg tracking-tight">
            RetrievalLabs.ai
          </span>
        </a>

        {/* Desktop Nav - High Density */}
        <div className="hidden md:h-stack gap-12">
          <div className="h-stack gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs font-mono uppercase tracking-[0.2em] text-slate-500 hover:text-white transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>
          <a
            href="https://calendly.com/yp969803/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono uppercase tracking-[0.2em] bg-white/10 border border-white/20 text-white hover:bg-white hover:text-navy-950 px-4 py-2 rounded-full transition-all duration-300"
          >
            Talk to Founders
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <div className={`w-6 h-px bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-1' : ''}`} />
          <div className={`w-4 h-px bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <div className={`w-6 h-px bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-1' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu - Minimal Overlay */}
      <div
        className={`fixed inset-0 bg-background z-[-1] flex items-center justify-center transition-all duration-700 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
      >
        <div className="v-stack items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-heading text-4xl text-white hover:text-sky-400 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://calendly.com/yp969803/30min"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="font-heading text-4xl text-sky-400 hover:text-white transition-colors"
          >
            Talk to Founders
          </a>
        </div>
      </div>
    </nav>
  );
}
