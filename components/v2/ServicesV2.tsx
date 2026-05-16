const services = [
  { num: "01", title: "Corporate Conferences & AGMs", desc: "Large-scale conferences, annual general meetings, and leadership summits managed end-to-end." },
  { num: "02", title: "Educational & Convocation Events", desc: "Graduation ceremonies, orientation programmes, and academic seminars for universities and schools." },
  { num: "03", title: "Award Nights & Gala Dinners", desc: "Prestigious award ceremonies with professional hosting, stage design, and lighting production." },
  { num: "04", title: "Seminars & Workshops", desc: "Focused training events for the insurance and finance sectors with full registration management." },
  { num: "05", title: "Hybrid & Virtual Events", desc: "Broadcast-quality live-streaming and virtual event platforms connecting global audiences." },
  { num: "06", title: "Roadshows & Product Launches", desc: "Multi-city promotional activations and product launches with consistent brand execution." },
];

export default function ServicesV2() {
  return (
    <section id="services" className="py-24" style={{ background: "#F5F0E8" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-black/30" />
              <span className="text-xs font-bold tracking-[0.25em] uppercase text-black/40">What We Do</span>
            </div>
            <h2 className="font-black leading-none tracking-tight text-black" style={{ fontSize: "clamp(40px, 6vw, 72px)" }}>
              OUR
              <br />
              <span style={{ color: "#BC6C25" }}>SERVICES.</span>
            </h2>
          </div>
          <p className="max-w-sm text-base leading-relaxed md:text-right" style={{ color: "rgba(0,0,0,0.5)" }}>
            From 50-person workshops to 5,000-delegate conferences, we handle every detail with precision.
          </p>
        </div>

        {/* Service list */}
        <div className="border-t" style={{ borderColor: "rgba(0,0,0,0.1)" }}>
          {services.map((s) => (
            <div
              key={s.num}
              className="group flex items-start gap-8 py-8 border-b cursor-default transition-all duration-300"
              style={{ borderColor: "rgba(0,0,0,0.1)" }}
            >
              <span className="text-sm font-black mt-1 flex-shrink-0" style={{ color: "#BC6C25" }}>{s.num}</span>
              <div className="flex-1 grid md:grid-cols-2 gap-4 items-start">
                <h3 className="text-xl font-black text-black group-hover:text-[#BC6C25] transition-colors duration-300">
                  {s.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(0,0,0,0.5)" }}>{s.desc}</p>
              </div>
              <svg
                className="hidden md:block flex-shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0"
                width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#BC6C25" strokeWidth="2"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
