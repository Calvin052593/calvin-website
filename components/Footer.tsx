"use client";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t" style={{ background: "#1c2710", borderColor: "#606C3840" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "#BC6C25" }}>
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
            </div>
            <p className="text-sm leading-relaxed max-w-sm mb-6" style={{ color: "#FEFAE066" }}>
              A professional event management company based in Kuala Lumpur,
              delivering exceptional events for the education, insurance, and
              corporate sectors since 2013.
            </p>
            <div
              className="inline-flex px-3 py-1.5 rounded-md text-xs border"
              style={{ background: "#283618", borderColor: "#606C3860", color: "#FEFAE050" }}
            >
              SSM Reg. No: 1234567-X
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-semibold text-sm mb-5 uppercase tracking-wider" style={{ color: "#FEFAE0" }}>
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "#home" },
                { label: "Services", href: "#services" },
                { label: "Why Calvin", href: "#about" },
                { label: "Client Reviews", href: "#reviews" },
                { label: "Contact Us", href: "#contact" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors"
                    style={{ color: "#FEFAE066" }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#FEFAE0")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#FEFAE066")}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="font-semibold text-sm mb-5 uppercase tracking-wider" style={{ color: "#FEFAE0" }}>
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <svg style={{ color: "#DDA15E", flexShrink: 0, marginTop: 2 }} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
                </svg>
                <span className="text-sm leading-relaxed" style={{ color: "#FEFAE066" }}>
                  Level 8, Menara Darussalam<br />
                  Jalan Sultan Ismail<br />
                  50250 Kuala Lumpur
                </span>
              </li>
              <li className="flex gap-3 items-center">
                <svg style={{ color: "#DDA15E", flexShrink: 0 }} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                </svg>
                <a href="tel:+60327888888" className="text-sm transition-colors" style={{ color: "#FEFAE066" }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#FEFAE0")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#FEFAE066")}>
                  +603-2788 8888
                </a>
              </li>
              <li className="flex gap-3 items-center">
                <svg style={{ color: "#DDA15E", flexShrink: 0 }} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
                </svg>
                <a href="mailto:hello@calvinsb.com.my" className="text-sm transition-colors" style={{ color: "#FEFAE066" }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#FEFAE0")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#FEFAE066")}>
                  hello@calvinsb.com.my
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4" style={{ borderColor: "#606C3840" }}>
          <p className="text-xs" style={{ color: "#FEFAE040" }}>
            © {year} Calvin Sdn Bhd (1234567-X). All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs transition-colors" style={{ color: "#FEFAE040" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#FEFAE0aa")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#FEFAE040")}>
              Privacy Policy
            </a>
            <a href="#" className="text-xs transition-colors" style={{ color: "#FEFAE040" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#FEFAE0aa")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#FEFAE040")}>
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
