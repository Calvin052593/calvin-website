export default function HeroV2() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden" style={{ background: "#0D0D0D" }}>
      {/* Subtle grain texture overlay */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")" }}
      />

      {/* Amber glow top-right */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[120px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(221,161,94,0.12) 0%, transparent 70%)" }} />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-32 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left: text */}
          <div>
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-8">
              <span className="w-8 h-px" style={{ background: "#DDA15E" }} />
              <span className="text-xs font-bold tracking-[0.25em] uppercase" style={{ color: "#DDA15E" }}>
                Malaysia&apos;s Premier Event Organiser
              </span>
            </div>

            {/* Main headline */}
            <h1 className="font-black leading-[0.95] tracking-tight text-white mb-8" style={{ fontSize: "clamp(52px, 8vw, 96px)" }}>
              WE DON&apos;T JUST
              <br />
              ORGANISE
              <br />
              <span style={{ color: "#DDA15E" }}>EVENTS.</span>
            </h1>

            <p className="text-xl font-light leading-relaxed mb-10 max-w-lg" style={{ color: "rgba(255,255,255,0.5)" }}>
              We craft unforgettable experiences for corporations, universities, and industry leaders — from 50-person workshops to 5,000-delegate conferences.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/v2#contact"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 font-bold text-sm tracking-widest uppercase transition-all duration-300"
                style={{ background: "#DDA15E", color: "#0D0D0D" }}
              >
                Start Planning
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="/v2#events"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 font-bold text-sm tracking-widest uppercase border transition-all duration-300 text-white hover:bg-white hover:text-black"
                style={{ borderColor: "rgba(255,255,255,0.2)" }}
              >
                See Our Work
              </a>
            </div>

            {/* Logos row */}
            <div className="mt-14 pt-10 border-t" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
              <p className="text-xs font-medium tracking-widest uppercase mb-5" style={{ color: "rgba(255,255,255,0.3)" }}>
                Trusted by organisations across Malaysia
              </p>
              <div className="flex flex-wrap gap-6 items-center">
                {["Insurance", "Education", "Government", "Corporate", "Finance"].map((sector) => (
                  <span key={sector} className="text-xs font-bold tracking-wider px-3 py-1.5 border"
                    style={{ color: "rgba(255,255,255,0.3)", borderColor: "rgba(255,255,255,0.1)" }}>
                    {sector.toUpperCase()}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: large event image with overlay */}
          <div className="relative hidden lg:block">
            <div className="relative aspect-[4/5] overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=1000&fit=crop&auto=format"
                alt="Corporate event"
                className="w-full h-full object-cover"
                style={{ filter: "brightness(0.7) contrast(1.1)" }}
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0" style={{ background: "linear-gradient(to right, #0D0D0D 0%, transparent 40%)" }} />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, #0D0D0D 0%, transparent 40%)" }} />

              {/* Floating stat card */}
              <div className="absolute bottom-8 right-8 p-5 border" style={{ background: "rgba(13,13,13,0.9)", borderColor: "rgba(221,161,94,0.3)" }}>
                <div className="text-4xl font-black text-white">500+</div>
                <div className="text-xs font-medium tracking-widest uppercase mt-1" style={{ color: "#DDA15E" }}>
                  Events Delivered
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom stats bar */}
      <div className="relative w-full border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-2 md:grid-cols-4">
          {[
            { n: "12+", l: "Years in Business" },
            { n: "500+", l: "Events Organised" },
            { n: "200+", l: "Satisfied Clients" },
            { n: "15+", l: "Cities Covered" },
          ].map((s, i) => (
            <div key={s.l} className="py-7 px-4 text-center border-r last:border-r-0"
              style={{ borderColor: "rgba(255,255,255,0.06)" }}>
              <div className="text-3xl font-black text-white">{s.n}</div>
              <div className="text-xs mt-1 tracking-wider" style={{ color: "rgba(255,255,255,0.35)" }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
