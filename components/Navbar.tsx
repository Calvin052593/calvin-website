"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Reviews", href: "#reviews" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={
        scrolled
          ? { background: "rgba(40,54,24,0.96)", backdropFilter: "blur(12px)", boxShadow: "0 4px 24px rgba(0,0,0,0.25)" }
          : { background: "transparent" }
      }
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3">
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{ background: "#BC6C25" }}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M3 10C3 6.13 6.13 3 10 3V7C8.34 7 7 8.34 7 10C7 11.66 8.34 13 10 13V17C6.13 17 3 13.87 3 10Z" fill="white" />
                <path d="M10 3C13.87 3 17 6.13 17 10H13C13 8.34 11.66 7 10 7V3Z" fill="white" opacity="0.6" />
                <circle cx="15" cy="15" r="2.5" fill="white" opacity="0.5" />
              </svg>
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-bold text-lg tracking-tight" style={{ color: "#FEFAE0" }}>Calvin</span>
              <span className="text-[10px] font-medium tracking-widest uppercase" style={{ color: "#DDA15E" }}>Sdn Bhd</span>
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium transition-colors duration-200"
                style={{ color: "#FEFAE0cc" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#FEFAE0")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#FEFAE0cc")}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="ml-2 px-5 py-2 text-sm font-semibold rounded-lg transition-colors duration-200"
              style={{ background: "#BC6C25", color: "#FEFAE0" }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#DDA15E")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#BC6C25")}
            >
              Get a Quote
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2"
            style={{ color: "#FEFAE0" }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {menuOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M3 12h18M3 6h18M3 18h18" />}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden border-t py-4" style={{ background: "#283618", borderColor: "#606C3860" }}>
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block px-4 py-3 text-sm font-medium"
                style={{ color: "#FEFAE0cc" }}
              >
                {link.label}
              </a>
            ))}
            <div className="px-4 pt-2">
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="block text-center px-5 py-2 text-sm font-semibold rounded-lg"
                style={{ background: "#BC6C25", color: "#FEFAE0" }}
              >
                Get a Quote
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
