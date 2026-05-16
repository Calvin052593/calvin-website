"use client";

const points = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    title: "Industry Expertise",
    description: "Over a decade of experience working with education institutions, insurance corporations, and government bodies across Malaysia.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: "On-Time Delivery",
    description: "We respect your schedule. Our project management process ensures every milestone is met — no surprises on event day.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "End-to-End Management",
    description: "From concept and budgeting through execution and post-event reporting — one dedicated team handles everything.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    title: "Dedicated Account Manager",
    description: "Every client gets a single point of contact — your account manager is reachable before, during, and after your event.",
  },
];

export default function WhyUs() {
  return (
    <section className="py-24" style={{ background: "#283618" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left text */}
          <div>
            <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: "#DDA15E" }}>
              Why Calvin
            </span>
            <h2 className="mt-3 text-4xl lg:text-5xl font-bold leading-tight tracking-tight" style={{ color: "#FEFAE0" }}>
              Built for Professionals
              <br />
              <span style={{ color: "#DDA15E" }}>Who Demand Results</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed" style={{ color: "#FEFAE0aa" }}>
              We understand that for your organisation, events are not just
              gatherings — they&apos;re high-stakes platforms for leadership,
              branding, and community. We treat them that way.
            </p>
            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 font-semibold transition-colors"
              style={{ color: "#DDA15E" }}
            >
              Talk to our team
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Right: feature cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {points.map((point) => (
              <div
                key={point.title}
                className="rounded-xl p-6 border transition-colors duration-300"
                style={{ background: "rgba(96,108,56,0.2)", borderColor: "rgba(96,108,56,0.5)" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "rgba(221,161,94,0.5)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "rgba(96,108,56,0.5)")}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                  style={{ background: "rgba(221,161,94,0.12)", color: "#DDA15E" }}
                >
                  {point.icon}
                </div>
                <h3 className="font-semibold mb-2" style={{ color: "#FEFAE0" }}>{point.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#FEFAE0" + "99" }}>{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
