"use client";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ background: "#283618" }}
    >
      {/* Multi-tone gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 20% 30%, #606C3840 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 80% 70%, #BC6C2520 0%, transparent 55%), linear-gradient(160deg, #283618 0%, #3a4a20 50%, #283618 100%)",
        }}
      />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(#FEFAE0 1px, transparent 1px), linear-gradient(90deg, #FEFAE0 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Warm glow orbs */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none"
        style={{ background: "#DDA15E30" }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl pointer-events-none"
        style={{ background: "#BC6C2520" }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-20">
        <div className="max-w-4xl">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8 border"
            style={{
              background: "#DDA15E18",
              borderColor: "#DDA15E40",
            }}
          >
            <span
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ background: "#DDA15E" }}
            />
            <span className="text-sm font-medium" style={{ color: "#DDA15E" }}>
              Malaysia&apos;s Trusted Event Partner
            </span>
          </div>

          {/* Headline */}
          <h1
            className="text-5xl lg:text-7xl font-bold leading-tight tracking-tight mb-6"
            style={{ color: "#FEFAE0" }}
          >
            Events That
            <span style={{ color: "#DDA15E" }}> Inspire,</span>
            <br />
            Moments That{" "}
            <span className="relative inline-block">
              Last.
              <span
                className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full"
                style={{ background: "#DDA15E" }}
              />
            </span>
          </h1>

          {/* Subheadline */}
          <p
            className="text-xl leading-relaxed max-w-2xl mb-10"
            style={{ color: "#FEFAE0b0" }}
          >
            Calvin Sdn Bhd specialises in crafting seamless, high-impact events
            for the education, insurance, and corporate sectors — from intimate
            seminars to large-scale conferences.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 font-semibold rounded-lg transition-all duration-200 text-base"
              style={{ background: "#BC6C25", color: "#FEFAE0" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "#DDA15E")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "#BC6C25")
              }
            >
              Start Planning Your Event
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 font-semibold rounded-lg transition-all duration-200 text-base border"
              style={{ borderColor: "#606C38", color: "#FEFAE0" }}
            >
              Explore Our Services
            </a>
          </div>
        </div>

        {/* Stats bar */}
        <div
          id="about"
          className="mt-24 grid grid-cols-2 md:grid-cols-4 rounded-2xl overflow-hidden border"
          style={{ borderColor: "#606C3860", background: "#606C3820" }}
        >
          {[
            { number: "12+", label: "Years Experience" },
            { number: "500+", label: "Events Organised" },
            { number: "200+", label: "Satisfied Clients" },
            { number: "15+", label: "Cities Covered" },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className="px-8 py-6 text-center"
              style={{
                borderRight:
                  i < 3 ? "1px solid #606C3840" : undefined,
              }}
            >
              <div
                className="text-3xl font-bold mb-1"
                style={{ color: "#DDA15E" }}
              >
                {stat.number}
              </div>
              <div className="text-sm" style={{ color: "#FEFAE0a0" }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
