"use client";

import { useState } from "react";

const eventTypes = [
  "Corporate Conference / AGM",
  "Educational / Convocation Event",
  "Award Night / Gala Dinner",
  "Seminar / Workshop",
  "Product Launch / Roadshow",
  "Hybrid / Virtual Event",
  "Others",
];

export default function ContactV2() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", eventType: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSubmitted(true); };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "transparent",
    border: "none",
    borderBottom: "1px solid rgba(255,255,255,0.15)",
    color: "#fff",
    padding: "14px 0",
    fontSize: "14px",
    outline: "none",
  };

  return (
    <section id="contact" style={{ background: "#0D0D0D" }}>
      {/* Bold CTA banner */}
      <div className="border-t border-b py-20" style={{ borderColor: "rgba(255,255,255,0.06)", background: "#111111" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <h2 className="font-black leading-none tracking-tight text-white" style={{ fontSize: "clamp(36px, 5vw, 72px)" }}>
            READY TO CREATE
            <br />
            <span style={{ color: "#DDA15E" }}>SOMETHING GREAT?</span>
          </h2>
          <p className="text-base max-w-sm leading-relaxed md:text-right" style={{ color: "rgba(255,255,255,0.4)" }}>
            Tell us about your event and we&apos;ll get back to you within one business day with a custom proposal.
          </p>
        </div>
      </div>

      {/* Form + info grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24">
        <div className="grid lg:grid-cols-5 gap-20">
          {/* Left: contact info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-10">
              <span className="w-8 h-px" style={{ background: "#DDA15E" }} />
              <span className="text-xs font-bold tracking-[0.25em] uppercase" style={{ color: "#DDA15E" }}>Contact</span>
            </div>

            <div className="space-y-10">
              {[
                { label: "ADDRESS", value: "Level 8, Menara Darussalam\nJalan Sultan Ismail\n50250 Kuala Lumpur" },
                { label: "PHONE", value: "+603-2788 8888" },
                { label: "EMAIL", value: "hello@calvinsb.com.my" },
                { label: "HOURS", value: "Monday – Friday\n9:00 AM – 6:00 PM (MYT)" },
              ].map((item) => (
                <div key={item.label}>
                  <div className="text-xs font-black tracking-[0.2em] mb-3" style={{ color: "#DDA15E" }}>{item.label}</div>
                  <div className="text-sm leading-relaxed whitespace-pre-line" style={{ color: "rgba(255,255,255,0.5)" }}>{item.value}</div>
                </div>
              ))}
            </div>

            {/* V1 comparison link */}
            <div className="mt-16 pt-10 border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
              <a href="/" className="text-xs font-bold tracking-widest uppercase pb-1 border-b"
                style={{ color: "rgba(255,255,255,0.3)", borderColor: "rgba(255,255,255,0.15)" }}>
                ← View Version 1
              </a>
            </div>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="flex flex-col items-start pt-10">
                <div className="text-6xl font-black mb-6" style={{ color: "#DDA15E" }}>✓</div>
                <h3 className="text-3xl font-black text-white mb-4">Message Received.</h3>
                <p style={{ color: "rgba(255,255,255,0.4)" }}>Our team will reach out within one business day.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-xs font-black tracking-[0.2em] mb-3" style={{ color: "#DDA15E" }}>
                      FULL NAME *
                    </label>
                    <input type="text" name="name" value={form.name} onChange={handleChange} required
                      placeholder="Your name" style={inputStyle} className="placeholder-white/20" />
                  </div>
                  <div>
                    <label className="block text-xs font-black tracking-[0.2em] mb-3" style={{ color: "rgba(255,255,255,0.4)" }}>
                      ORGANISATION
                    </label>
                    <input type="text" name="company" value={form.company} onChange={handleChange}
                      placeholder="Your company" style={inputStyle} className="placeholder-white/20" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-xs font-black tracking-[0.2em] mb-3" style={{ color: "#DDA15E" }}>
                      EMAIL *
                    </label>
                    <input type="email" name="email" value={form.email} onChange={handleChange} required
                      placeholder="you@company.com" style={inputStyle} className="placeholder-white/20" />
                  </div>
                  <div>
                    <label className="block text-xs font-black tracking-[0.2em] mb-3" style={{ color: "rgba(255,255,255,0.4)" }}>
                      PHONE
                    </label>
                    <input type="tel" name="phone" value={form.phone} onChange={handleChange}
                      placeholder="+60 12-345 6789" style={inputStyle} className="placeholder-white/20" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-black tracking-[0.2em] mb-3" style={{ color: "#DDA15E" }}>
                    EVENT TYPE *
                  </label>
                  <select name="eventType" value={form.eventType} onChange={handleChange} required
                    style={{ ...inputStyle, cursor: "pointer" }}>
                    <option value="" style={{ background: "#0D0D0D" }}>Select event type</option>
                    {eventTypes.map((t) => <option key={t} value={t} style={{ background: "#0D0D0D" }}>{t}</option>)}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-black tracking-[0.2em] mb-3" style={{ color: "rgba(255,255,255,0.4)" }}>
                    TELL US ABOUT YOUR EVENT
                  </label>
                  <textarea name="message" value={form.message} onChange={handleChange} rows={4}
                    placeholder="Date, attendees, location, requirements..."
                    style={{ ...inputStyle, resize: "none" }} className="placeholder-white/20" />
                </div>

                <button
                  type="submit"
                  className="w-full py-5 font-black text-sm tracking-widest uppercase transition-all duration-300"
                  style={{ background: "#DDA15E", color: "#0D0D0D" }}
                >
                  SEND ENQUIRY →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
