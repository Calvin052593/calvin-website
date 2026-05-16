const testimonials = [
  {
    quote:
      "Calvin Sdn Bhd managed our annual National Insurance Summit with outstanding professionalism. The logistics, speaker coordination, and on-site execution were flawless. Our delegates were thoroughly impressed.",
    name: "Dato' Razif Bin Osman",
    role: "Director of Operations",
    company: "Amanah Insurance Group",
    initial: "R",
  },
  {
    quote:
      "We engaged Calvin for our university's convocation ceremony — 3,000 graduates and their families. The team handled everything seamlessly, from venue setup to live-streaming. We will not use anyone else.",
    name: "Prof. Dr. Siti Nabilah",
    role: "Registrar",
    company: "Universiti Harapan Malaysia",
    initial: "S",
  },
  {
    quote:
      "Our company needed a reliable partner for a 12-city roadshow within 6 weeks. Calvin delivered consistent, brand-aligned execution across every location. Impressive capacity and attention to detail.",
    name: "Marcus Lim",
    role: "Head of Marketing",
    company: "NovaTech Solutions Bhd",
    initial: "M",
  },
];

export default function Testimonials() {
  return (
    <section id="reviews" className="py-24" style={{ background: "#FEFAE0" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: "#BC6C25" }}>
            Client Reviews
          </span>
          <h2 className="mt-3 text-4xl lg:text-5xl font-bold tracking-tight" style={{ color: "#283618" }}>
            Trusted by Industry Leaders
          </h2>
          <p className="mt-4 text-lg max-w-xl mx-auto" style={{ color: "#606C38" }}>
            Hear from the organisations that have relied on Calvin Sdn Bhd for
            their most important events.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="flex flex-col rounded-2xl p-8 border"
              style={{ background: "#fff", borderColor: "#DDA15E30" }}
            >
              {/* Quote mark */}
              <div className="text-6xl font-serif leading-none mb-4 select-none" style={{ color: "#DDA15E60" }}>
                &ldquo;
              </div>

              <p className="leading-relaxed text-sm flex-1 mb-6" style={{ color: "#283618cc" }}>
                {t.quote}
              </p>

              {/* Divider */}
              <div className="h-px mb-6" style={{ background: "#DDA15E30" }} />

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0"
                  style={{ background: "#BC6C25", color: "#FEFAE0" }}
                >
                  {t.initial}
                </div>
                <div>
                  <div className="font-semibold text-sm" style={{ color: "#283618" }}>{t.name}</div>
                  <div className="text-xs" style={{ color: "#606C38" }}>{t.role}, {t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8">
          {[
            "Education Sector",
            "Insurance Industry",
            "Government Bodies",
            "Corporate Clients",
            "Non-Profit Organisations",
          ].map((badge) => (
            <div key={badge} className="flex items-center gap-2 text-sm" style={{ color: "#606C38" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#BC6C25" strokeWidth="2">
                <path d="M9 12l2 2 4-4" />
                <circle cx="12" cy="12" r="10" />
              </svg>
              {badge}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
