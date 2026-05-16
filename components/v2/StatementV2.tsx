export default function StatementV2() {
  return (
    <section className="py-32" style={{ background: "#F5F0E8" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: big bold quote */}
          <div>
            <div className="flex items-center gap-3 mb-10">
              <span className="w-8 h-px bg-black/30" />
              <span className="text-xs font-bold tracking-[0.25em] uppercase text-black/40">Our Philosophy</span>
            </div>
            <blockquote className="font-black leading-tight tracking-tight text-black" style={{ fontSize: "clamp(36px, 5vw, 64px)" }}>
              &ldquo;Your event is not a meeting.
              <br />
              <span style={{ color: "#BC6C25" }}>It&apos;s your brand</span>
              <br />
              speaking at full volume.&rdquo;
            </blockquote>
            <div className="mt-10 h-px w-24 bg-black/20" />
            <p className="mt-6 text-lg font-medium text-black/50">— Calvin Sdn Bhd</p>
          </div>

          {/* Right: text + photo */}
          <div>
            <div className="relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1540575467537-de83bc62a2d6?w=700&h=500&fit=crop&auto=format"
                alt="Event in progress"
                className="w-full object-cover"
                style={{ filter: "saturate(0.8)" }}
              />
              {/* Year badge */}
              <div className="absolute -bottom-5 -left-5 px-6 py-5" style={{ background: "#BC6C25" }}>
                <div className="text-4xl font-black text-white">2013</div>
                <div className="text-xs font-bold tracking-widest text-white/70 mt-1">ESTABLISHED</div>
              </div>
            </div>

            <p className="mt-12 text-base leading-relaxed" style={{ color: "rgba(0,0,0,0.55)" }}>
              Since 2013, Calvin Sdn Bhd has been Malaysia&apos;s go-to partner for high-stakes events.
              We handle every detail — from venue and AV to branding and post-event reports —
              so that you can focus on your audience, not the logistics.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
