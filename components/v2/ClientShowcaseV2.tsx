const clients = [
  {
    name: "Dato' Razif Bin Osman",
    role: "Director of Operations",
    company: "Amanah Insurance Group",
    quote:
      "Calvin Sdn Bhd managed our National Insurance Summit with precision I have never seen before. 800 delegates, zero issues. They are the only team we trust for large-scale events.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&fit=crop&auto=format",
    highlight: "800 Delegates. Zero Issues.",
  },
  {
    name: "Prof. Dr. Siti Nabilah",
    role: "Registrar",
    company: "Universiti Harapan Malaysia",
    quote:
      "Our convocation had 3,000 graduates and their families. Calvin handled venue, live-streaming, staging, and coordination flawlessly. Our Vice Chancellor called it the best ceremony in the university's history.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop&auto=format",
    highlight: "3,000 Graduates. Best Ceremony Ever.",
  },
];

export default function ClientShowcaseV2() {
  return (
    <section id="clients" className="py-0" style={{ background: "#0D0D0D" }}>
      {/* Section header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-24 pb-16">
        <div className="flex items-center gap-4">
          <span className="w-8 h-px" style={{ background: "#DDA15E" }} />
          <span className="text-xs font-bold tracking-[0.25em] uppercase" style={{ color: "#DDA15E" }}>
            What Our Clients Say
          </span>
        </div>
        <h2 className="mt-6 font-black text-white leading-none tracking-tight" style={{ fontSize: "clamp(40px, 6vw, 80px)" }}>
          THE NAMES
          <br />
          WHO TRUST US.
        </h2>
      </div>

      {/* Client blocks */}
      {clients.map((client, i) => (
        <div
          key={client.name}
          className="border-t"
          style={{ borderColor: "rgba(255,255,255,0.06)", background: i % 2 === 0 ? "#0D0D0D" : "#111111" }}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
            <div className={`grid lg:grid-cols-2 gap-16 items-center ${i % 2 !== 0 ? "lg:grid-flow-dense" : ""}`}>
              {/* Photo */}
              <div className={i % 2 !== 0 ? "lg:col-start-2" : ""}>
                <div className="relative">
                  <div className="relative overflow-hidden" style={{ aspectRatio: "4/5" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={client.image}
                      alt={client.name}
                      className="w-full h-full object-cover"
                      style={{ filter: "grayscale(30%) brightness(0.85)" }}
                    />
                    <div className="absolute inset-0" style={{ background: "linear-gradient(to top, #0D0D0D 0%, transparent 50%)" }} />
                  </div>

                  {/* Highlight badge */}
                  <div
                    className="absolute bottom-0 left-0 right-0 px-8 pb-8"
                  >
                    <div className="text-xl font-black text-white leading-tight">{client.highlight}</div>
                  </div>
                </div>
              </div>

              {/* Quote */}
              <div className={i % 2 !== 0 ? "lg:col-start-1 lg:row-start-1" : ""}>
                <div className="text-8xl font-black leading-none mb-6" style={{ color: "#DDA15E" }}>&ldquo;</div>
                <p className="text-2xl font-light leading-relaxed text-white/80 mb-10">
                  {client.quote}
                </p>
                <div className="h-px mb-8" style={{ background: "rgba(255,255,255,0.1)" }} />
                <div>
                  <div className="text-xl font-black text-white">{client.name}</div>
                  <div className="text-sm mt-1 font-medium" style={{ color: "#DDA15E" }}>
                    {client.role} · {client.company}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
