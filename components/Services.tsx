"use client";

const services = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    title: "Corporate Conferences",
    description:
      "End-to-end management of large-scale corporate conferences, AGMs, and leadership summits — from venue sourcing to AV production.",
    image: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=600&h=300&fit=crop&auto=format",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
    title: "Educational Events",
    description:
      "Graduation ceremonies, convocations, academic seminars, and orientation programmes tailored to universities and schools.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=300&fit=crop&auto=format",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    title: "Award Nights & Galas",
    description:
      "Prestigious award ceremonies, gala dinners, and appreciation nights with professional hosting, staging, and lighting design.",
    image: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=600&h=300&fit=crop&auto=format",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" />
        <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" />
      </svg>
    ),
    title: "Seminars & Workshops",
    description:
      "Focused training seminars and workshops for the insurance and finance sectors — including speaker coordination and registration management.",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=300&fit=crop&auto=format",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
        <path d="M7 8h.01M17 8h.01M12 8h.01" />
      </svg>
    ),
    title: "Hybrid & Virtual Events",
    description:
      "Seamless live-streaming, virtual platforms, and hybrid setups that connect in-person and remote audiences with broadcast-quality production.",
    image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=600&h=300&fit=crop&auto=format",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4l3 3" />
        <path d="M3.05 11a9 9 0 011.41-3.38" />
        <path d="M20.95 11a9 9 0 00-1.41-3.38" />
      </svg>
    ),
    title: "Roadshows & Launches",
    description:
      "Product launches, roadshows, and promotional activations across multiple cities — handled with consistency and brand precision.",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&h=300&fit=crop&auto=format",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24" style={{ background: "#FEFAE0" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: "#BC6C25" }}>
            What We Do
          </span>
          <h2 className="mt-3 text-4xl lg:text-5xl font-bold tracking-tight" style={{ color: "#283618" }}>
            Our Services
          </h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto" style={{ color: "#606C38" }}>
            From intimate workshops to nationwide roadshows, we handle every
            detail so you can focus on what matters.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-white rounded-2xl overflow-hidden border transition-all duration-300"
              style={{ borderColor: "#DDA15E30" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "#DDA15E";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 20px 40px rgba(188,108,37,0.12)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "#DDA15E30";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              {/* Event image */}
              <div className="relative h-44 overflow-hidden" style={{ background: "#606C3820" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Icon badge */}
                <div
                  className="absolute top-3 left-3 w-9 h-9 rounded-lg flex items-center justify-center shadow-md"
                  style={{ background: "#BC6C25", color: "#FEFAE0" }}
                >
                  {service.icon}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold mb-2" style={{ color: "#283618" }}>
                  {service.title}
                </h3>
                <p className="leading-relaxed text-sm" style={{ color: "#606C38" }}>
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
