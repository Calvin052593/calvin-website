export default function FooterV2() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t py-12" style={{ background: "#080808", borderColor: "rgba(255,255,255,0.06)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-sm flex items-center justify-center" style={{ background: "#DDA15E" }}>
            <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
              <path d="M3 10C3 6.13 6.13 3 10 3V7C8.34 7 7 8.34 7 10C7 11.66 8.34 13 10 13V17C6.13 17 3 13.87 3 10Z" fill="#0D0D0D" />
              <path d="M10 3C13.87 3 17 6.13 17 10H13C13 8.34 11.66 7 10 7V3Z" fill="#0D0D0D" opacity="0.5" />
            </svg>
          </div>
          <span className="text-sm font-black text-white/40">CALVIN SDN BHD</span>
          <span className="text-xs text-white/20 ml-2">· SSM 1234567-X</span>
        </div>

        <p className="text-xs text-white/20 text-center">
          © {year} Calvin Sdn Bhd. All rights reserved. · Kuala Lumpur, Malaysia
        </p>

        <div className="flex gap-6">
          {["Privacy", "Terms"].map((l) => (
            <a key={l} href="#" className="text-xs text-white/20 hover:text-white/50 transition-colors">{l}</a>
          ))}
          <a href="/" className="text-xs font-bold tracking-wider" style={{ color: "#DDA15E" }}>VIEW V1 →</a>
        </div>
      </div>
    </footer>
  );
}
