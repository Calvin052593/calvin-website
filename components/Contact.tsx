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

const contactItems = [
  {
    label: "Office Address",
    text: "Level 8, Menara Darussalam\nJalan Sultan Ismail\n50250 Kuala Lumpur, Malaysia",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    label: "Phone",
    text: "+603-2788 8888",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
  },
  {
    label: "Email",
    text: "hello@calvinsb.com.my",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    label: "Business Hours",
    text: "Monday – Friday\n9:00 AM – 6:00 PM (MYT)",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
];

const inputClass = "w-full rounded-lg px-4 py-3 text-sm outline-none transition-colors";
const inputStyle = {
  background: "rgba(40,54,24,0.5)",
  border: "1px solid #606C38",
  color: "#FEFAE0",
};

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "", company: "", email: "", phone: "", eventType: "", message: "",
  });

  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSubmitted(true); };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24" style={{ background: "#283618" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: "#DDA15E" }}>
            Get In Touch
          </span>
          <h2 className="mt-3 text-4xl lg:text-5xl font-bold tracking-tight" style={{ color: "#FEFAE0" }}>
            Let&apos;s Plan Your Event
          </h2>
          <p className="mt-4 text-lg max-w-xl mx-auto" style={{ color: "#FEFAE0aa" }}>
            Tell us about your event and our team will get back to you within one business day.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact info */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            {contactItems.map((item) => (
              <div key={item.label} className="flex gap-4">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background: "rgba(221,161,94,0.12)", color: "#DDA15E" }}
                >
                  {item.icon}
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest mb-1" style={{ color: "#FEFAE066" }}>
                    {item.label}
                  </div>
                  <div className="text-sm leading-relaxed whitespace-pre-line" style={{ color: "#FEFAE0" }}>
                    {item.text}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div
                className="h-full flex flex-col items-center justify-center text-center p-12 rounded-2xl border"
                style={{ background: "rgba(96,108,56,0.2)", borderColor: "#606C38" }}
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-6 border"
                  style={{ background: "rgba(221,161,94,0.1)", borderColor: "#DDA15E40" }}
                >
                  <svg style={{ color: "#DDA15E" }} width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 12l2 2 4-4" /><circle cx="12" cy="12" r="10" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3" style={{ color: "#FEFAE0" }}>Message Received!</h3>
                <p style={{ color: "#FEFAE0aa" }}>
                  Thank you for reaching out. Our team will contact you within one business day.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl p-8 space-y-5 border"
                style={{ background: "rgba(96,108,56,0.15)", borderColor: "#606C3880" }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-medium mb-2 uppercase tracking-wider" style={{ color: "#FEFAE0aa" }}>
                      Full Name <span style={{ color: "#DDA15E" }}>*</span>
                    </label>
                    <input
                      type="text" name="name" value={form.name} onChange={handleChange} required
                      placeholder="Your full name"
                      className={inputClass} style={inputStyle}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium mb-2 uppercase tracking-wider" style={{ color: "#FEFAE0aa" }}>
                      Company / Organisation
                    </label>
                    <input
                      type="text" name="company" value={form.company} onChange={handleChange}
                      placeholder="Your organisation"
                      className={inputClass} style={inputStyle}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-medium mb-2 uppercase tracking-wider" style={{ color: "#FEFAE0aa" }}>
                      Email Address <span style={{ color: "#DDA15E" }}>*</span>
                    </label>
                    <input
                      type="email" name="email" value={form.email} onChange={handleChange} required
                      placeholder="you@company.com"
                      className={inputClass} style={inputStyle}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium mb-2 uppercase tracking-wider" style={{ color: "#FEFAE0aa" }}>
                      Phone Number
                    </label>
                    <input
                      type="tel" name="phone" value={form.phone} onChange={handleChange}
                      placeholder="+60 12-345 6789"
                      className={inputClass} style={inputStyle}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium mb-2 uppercase tracking-wider" style={{ color: "#FEFAE0aa" }}>
                    Event Type <span style={{ color: "#DDA15E" }}>*</span>
                  </label>
                  <select
                    name="eventType" value={form.eventType} onChange={handleChange} required
                    className={inputClass} style={inputStyle}
                  >
                    <option value="">Select event type</option>
                    {eventTypes.map((type) => <option key={type} value={type}>{type}</option>)}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium mb-2 uppercase tracking-wider" style={{ color: "#FEFAE0aa" }}>
                    Tell Us About Your Event
                  </label>
                  <textarea
                    name="message" value={form.message} onChange={handleChange} rows={4}
                    placeholder="Estimated date, expected number of attendees, location, special requirements..."
                    className={inputClass} style={{ ...inputStyle, resize: "none" }}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full font-semibold py-3.5 rounded-lg transition-colors duration-200 text-sm"
                  style={{ background: "#BC6C25", color: "#FEFAE0" }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#DDA15E")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "#BC6C25")}
                >
                  Send Enquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
