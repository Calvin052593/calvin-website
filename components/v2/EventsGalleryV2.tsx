const events = [
  {
    title: "National Insurance Summit 2024",
    type: "Corporate Conference",
    attendees: "800 Pax",
    image: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=600&h=400&fit=crop&auto=format",
  },
  {
    title: "UHM Convocation Ceremony 2024",
    type: "Educational Event",
    attendees: "3,000 Pax",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop&auto=format",
  },
  {
    title: "Amanah Insurance Gala Night",
    type: "Award Ceremony",
    attendees: "450 Pax",
    image: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=600&h=400&fit=crop&auto=format",
  },
  {
    title: "NovaTech 12-City Roadshow",
    type: "Roadshow",
    attendees: "2,400 Pax",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&h=400&fit=crop&auto=format",
  },
  {
    title: "MedAssure Hybrid Summit",
    type: "Hybrid Event",
    attendees: "1,200 Pax",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop&auto=format",
  },
  {
    title: "SKIM Leadership Workshop",
    type: "Seminar",
    attendees: "150 Pax",
    image: "https://images.unsplash.com/photo-1540575467537-de83bc62a2d6?w=600&h=400&fit=crop&auto=format",
  },
];

export default function EventsGalleryV2() {
  return (
    <section id="events" className="py-24" style={{ background: "#0D0D0D" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-px" style={{ background: "#DDA15E" }} />
              <span className="text-xs font-bold tracking-[0.25em] uppercase" style={{ color: "#DDA15E" }}>
                Recent Works
              </span>
            </div>
            <h2 className="font-black leading-none tracking-tight text-white" style={{ fontSize: "clamp(40px, 6vw, 72px)" }}>
              EVENTS WE&apos;VE
              <br />
              DELIVERED.
            </h2>
          </div>
          <a
            href="/v2#contact"
            className="self-start md:self-end text-sm font-bold tracking-widest uppercase pb-1 border-b transition-colors"
            style={{ color: "#DDA15E", borderColor: "#DDA15E" }}
          >
            Plan Your Event →
          </a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {events.map((ev) => (
            <div key={ev.title} className="group relative overflow-hidden cursor-default">
              <div className="relative aspect-[4/3] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={ev.image}
                  alt={ev.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  style={{ filter: "brightness(0.6) saturate(0.8)" }}
                />
                {/* Overlay */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: "rgba(221,161,94,0.2)" }}
                />
                {/* Bottom info */}
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: "#DDA15E" }}>
                    {ev.type}
                  </div>
                  <div className="text-base font-black text-white leading-tight">{ev.title}</div>
                  <div className="text-xs mt-2 font-medium" style={{ color: "rgba(255,255,255,0.5)" }}>
                    {ev.attendees}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
