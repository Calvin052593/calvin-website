"use client";

import { useState, useEffect } from "react";

export default function NavbarV2() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["Services", "Clients", "Events", "Contact"];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? "rgba(8,8,8,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-20">
        {/* Logo */}
        <a href="/v2" className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-sm flex items-center justify-center" style={{ background: "#DDA15E" }}>
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
              <path d="M3 10C3 6.13 6.13 3 10 3V7C8.34 7 7 8.34 7 10C7 11.66 8.34 13 10 13V17C6.13 17 3 13.87 3 10Z" fill="#0D0D0D" />
              <path d="M10 3C13.87 3 17 6.13 17 10H13C13 8.34 11.66 7 10 7V3Z" fill="#0D0D0D" opacity="0.5" />
            </svg>
          </div>
          <div>
            <span className="font-black text-lg tracking-tight text-white">CALVIN</span>
            <span className="font-light text-lg tracking-tight ml-1" style={{ color: "#DDA15E" }}>SDN BHD</span>
          </div>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l}
              href={`/v2#${l.toLowerCase()}`}
              className="text-sm font-medium tracking-wide text-white/50 hover:text-white transition-colors"
            >
              {l}
            </a>
          ))}
          <a
            href="/v2#contact"
            className="px-6 py-2.5 text-sm font-bold tracking-wider border border-white/20 text-white hover:bg-white hover:text-black transition-all duration-300"
          >
            GET A QUOTE
          </a>
        </div>

        {/* Compare link */}
        <a
          href="/"
          className="hidden md:block text-xs text-white/30 hover:text-white/60 transition-colors ml-6"
        >
          ← V1
        </a>

        {/* Mobile toggle */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-white/60 hover:text-white">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            {menuOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M3 12h18M3 6h18M3 18h18" />}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-white/10 py-6 px-6" style={{ background: "#0D0D0D" }}>
          {links.map((l) => (
            <a key={l} href={`/v2#${l.toLowerCase()}`} onClick={() => setMenuOpen(false)}
              className="block py-3 text-sm font-medium text-white/60 hover:text-white">
              {l}
            </a>
          ))}
          <a href="/v2#contact" onClick={() => setMenuOpen(false)}
            className="mt-4 block text-center py-3 border border-white/20 text-sm font-bold text-white">
            GET A QUOTE
          </a>
        </div>
      )}
    </nav>
  );
}
