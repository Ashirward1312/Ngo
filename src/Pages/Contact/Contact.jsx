// src/Pages/Contact/Contact.jsx
import React, { useEffect, useRef, useState } from "react";

/* ────────────── Fade-in on scroll ────────────── */
function useFadeIn() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.classList.add("contact-visible");
          obs.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

function FadeIn({ children, delay = 0, className = "" }) {
  const ref = useFadeIn();
  return (
    <div
      ref={ref}
      className={`contact-hidden ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/* ────────────── SVG Icons ────────────── */
const LocationIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const PhoneIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
  </svg>
);

const EmailIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="M22 6l-10 7L2 6" />
  </svg>
);

const ClockIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v6l4 2" />
  </svg>
);

const SendIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
  </svg>
);

const UserIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const MessageIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2v10z" />
  </svg>
);

const SubjectIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 6h16M4 12h16M4 18h10" />
  </svg>
);

const CheckCircleIcon = () => (
  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const StarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

/* ────────────── Contact Info Card Item ────────────── */
function InfoItem({ icon, title, children, delay = 0 }) {
  return (
    <div
      className="group flex items-start gap-4 rounded-2xl p-4 transition-all duration-300 hover:bg-orange-50/60"
    >
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-orange-100 to-amber-50 text-orange-600 shadow-sm ring-1 ring-orange-200/50 transition-transform duration-300 group-hover:scale-110 group-hover:shadow-md">
        {icon}
      </div>
      <div className="min-w-0">
        <h4 className="text-sm font-bold text-gray-900">{title}</h4>
        <div className="mt-1 text-sm leading-relaxed text-gray-600">{children}</div>
      </div>
    </div>
  );
}

/* ────────────── Floating Label Input ────────────── */
function FormInput({ id, name, type = "text", value, onChange, placeholder, icon, required = false, label }) {
  return (
    <div className="group">
      <label htmlFor={id} className="mb-1.5 block text-sm font-semibold text-gray-700">
        {label} {required && <span className="text-orange-500">*</span>}
      </label>
      <div className="relative">
        <div className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 transition-colors duration-200 group-focus-within:text-orange-500">
          {icon}
        </div>
        <input
          id={id}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          required={required}
          placeholder={placeholder}
          className="w-full rounded-xl border border-gray-200 bg-white py-3 pl-11 pr-4 text-sm text-gray-900 placeholder-gray-400 shadow-sm outline-none transition-all duration-200 focus:border-orange-400 focus:shadow-[0_0_0_3px_rgba(249,115,22,0.1)] focus:ring-0"
        />
      </div>
    </div>
  );
}

/* ═══════════════════ MAIN COMPONENT ═══════════════════ */
export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <>
      {/* ── Styles ── */}
      <style>{`
        .contact-hidden {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1),
                      transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .contact-visible {
          opacity: 1;
          transform: translateY(0);
        }

        @keyframes contact-float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(2deg); }
        }
        .contact-float-1 { animation: contact-float 6s ease-in-out infinite; }
        .contact-float-2 { animation: contact-float 8s ease-in-out infinite 1s; }
        .contact-float-3 { animation: contact-float 7s ease-in-out infinite 2s; }

        @keyframes contact-pulse-ring {
          0% { transform: scale(1); opacity: 0.5; }
          100% { transform: scale(1.8); opacity: 0; }
        }
        .contact-pulse-ring::before {
          content: '';
          position: absolute;
          inset: -4px;
          border-radius: 50%;
          border: 2px solid currentColor;
          animation: contact-pulse-ring 2s ease-out infinite;
        }

        @keyframes contact-success-pop {
          0% { transform: scale(0.5); opacity: 0; }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); opacity: 1; }
        }
        .contact-success-pop {
          animation: contact-success-pop 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes contact-shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .contact-shimmer-btn {
          background-size: 200% 100%;
          animation: contact-shimmer 3s ease-in-out infinite;
        }

        .contact-glass {
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
        }

        .contact-card-hover {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .contact-card-hover:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 40px -12px rgba(249, 115, 22, 0.15);
        }

        .contact-input-glow:focus {
          box-shadow: 0 0 0 3px rgba(249, 115, 22, 0.1), 0 1px 3px rgba(0,0,0,0.06);
        }

        @keyframes contact-gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .contact-gradient-animate {
          background-size: 200% 200%;
          animation: contact-gradient-shift 4s ease infinite;
        }

        .contact-dot-pattern {
          background-image: radial-gradient(circle, rgba(249,115,22,0.08) 1px, transparent 1px);
          background-size: 24px 24px;
        }
      `}</style>

      <section id="contact" className="relative overflow-hidden bg-gradient-to-b from-gray-50 via-white to-orange-50/30 py-20 md:py-28">
        {/* ── Background Elements ── */}
        <div className="pointer-events-none absolute inset-0 contact-dot-pattern opacity-40" />
        <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-orange-200/20 blur-3xl contact-float-1" />
        <div className="pointer-events-none absolute -right-32 top-1/2 h-80 w-80 rounded-full bg-amber-200/15 blur-3xl contact-float-2" />
        <div className="pointer-events-none absolute left-1/2 bottom-0 h-64 w-64 -translate-x-1/2 rounded-full bg-orange-100/25 blur-3xl contact-float-3" />

        {/* Decorative shapes */}
        <div className="pointer-events-none absolute right-10 top-32 h-3 w-3 rounded-full bg-orange-400/30 contact-float-1" />
        <div className="pointer-events-none absolute left-20 top-60 h-2 w-2 rounded-full bg-amber-400/40 contact-float-2" />
        <div className="pointer-events-none absolute right-1/4 bottom-40 h-4 w-4 rounded-full bg-orange-300/20 contact-float-3" />

        <div className="relative mx-auto max-w-6xl px-5 md:px-8">
          {/* ══════════ HEADER ══════════ */}
          <FadeIn>
            <div className="mb-14 text-center md:mb-16">
              <div className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-orange-200/80 bg-white px-5 py-2 shadow-sm">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-orange-500" />
                </span>
                <span className="text-xs font-bold uppercase tracking-[0.15em] text-orange-700">
                  Contact Us
                </span>
              </div>

              <h2 className="text-4xl font-black tracking-tight text-gray-900 md:text-5xl lg:text-[3.25rem]">
                Let's Start a{" "}
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 bg-clip-text text-transparent">
                    Conversation
                  </span>
                  
                </span>
              </h2>

              <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-gray-500 md:text-lg">
                Have questions or want to get involved? We'd love to hear from you.
                Reach out to us anytime.
              </p>
            </div>
          </FadeIn>

          {/* ══════════ MAIN GRID ══════════ */}
          <div className="grid gap-8 lg:grid-cols-5 lg:gap-10">
            {/* ──── LEFT COLUMN (2/5) ──── */}
            <div className="lg:col-span-2 space-y-6">
              {/* Contact Info Card */}
              <FadeIn delay={80}>
                <div className="contact-glass contact-card-hover rounded-3xl border border-white/60 p-6 shadow-lg ring-1 ring-gray-100/50 md:p-7">
                  <div className="mb-1 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 text-white shadow-md">
                      <PhoneIcon />
                    </div>
                    <h3 className="text-xl font-black text-gray-900">Get In Touch</h3>
                  </div>
                  <p className="mb-5 pl-[52px] text-sm text-gray-500">
                    Office details & contact info
                  </p>

                  <div className="space-y-1">
                    <InfoItem icon={<LocationIcon />} title="Our Office">
                      <div>House No. 142, Riddhi Siddhi Lotus Park</div>
                      <div>Boriyakala, Raipur, Chhattisgarh</div>
                    </InfoItem>

                    <InfoItem icon={<PhoneIcon />} title="Phone">
                      <a
                        href="tel:+917415315166"
                        className="font-semibold text-gray-800 transition-colors hover:text-orange-600"
                      >
                        +91 74153 15166
                      </a>
                    </InfoItem>

                    <InfoItem icon={<EmailIcon />} title="Email">
                      <a
                        href="mailto:sansthansambhav@gmail.com"
                        className="font-semibold text-gray-800 transition-colors hover:text-orange-600"
                      >
                        sansthansambhav@gmail.com
                      </a>
                    </InfoItem>

                    <InfoItem icon={<ClockIcon />} title="Office Hours">
                      <div className="space-y-0.5">
                        <div>
                          <span className="font-semibold text-gray-700">Mon – Fri:</span>{" "}
                          10 AM – 6 PM
                        </div>
                        <div>
                          <span className="font-semibold text-gray-700">Saturday:</span>{" "}
                          10 AM – 2 PM
                        </div>
                        <div>
                          <span className="font-semibold text-gray-700">Sunday:</span>{" "}
                          <span className="text-red-500">Closed</span>
                        </div>
                      </div>
                    </InfoItem>
                  </div>
                </div>
              </FadeIn>

              {/* Map Card */}
              <FadeIn delay={160}>
                <div className="contact-card-hover overflow-hidden rounded-3xl border border-white/60 bg-white shadow-lg ring-1 ring-gray-100/50">
                  <div className="flex items-center gap-3 border-b border-gray-100 px-5 py-3.5">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                      <LocationIcon />
                    </div>
                    <span className="text-sm font-bold text-gray-900">
                      Find Us on Map
                    </span>
                  </div>
                  <div className="aspect-[16/10] w-full bg-gray-100">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.4350613332854!2d81.69269191005235!3d21.17486938266439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28c4aa12b0f711%3A0xc3d0f5863322461a!2sRiddhi%20Siddhi%20Lotus%20Park!5e0!3m2!1sen!2sin!4v1773055561283!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Office Location"
                      className="h-full w-full"
                    />
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* ──── RIGHT COLUMN (3/5) – Form ──── */}
            <FadeIn delay={120} className="lg:col-span-3">
              <div className="contact-glass contact-card-hover rounded-3xl border border-white/60 p-6 shadow-lg ring-1 ring-gray-100/50 md:p-9">
                {/* Header */}
                <div className="mb-2 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 text-white shadow-md">
                    <MessageIcon />
                  </div>
                  <h3 className="text-xl font-black text-gray-900">Send Us a Message</h3>
                </div>
                <p className="mb-7 pl-[52px] text-sm text-gray-500">
                  Fill out the form and we'll respond within 24 hours.
                </p>

                {isSubmitted ? (
                  /* ── Success State ── */
                  <div className="contact-success-pop flex flex-col items-center justify-center rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 py-14 text-center">
                    <div className="mb-4 text-green-500">
                      <CheckCircleIcon />
                    </div>
                    <h4 className="text-2xl font-black text-gray-900">Thank You!</h4>
                    <p className="mt-2 max-w-xs text-sm leading-relaxed text-gray-600">
                      Your message has been sent successfully. We'll get back to you
                      soon.
                    </p>
                    <div className="mt-4 flex items-center gap-1 text-amber-500">
                      <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon />
                    </div>
                  </div>
                ) : (
                  /* ── Form ── */
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Name */}
                    <FormInput
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      icon={<UserIcon />}
                      required
                      label="Full Name"
                    />

                    {/* Email & Phone */}
                    <div className="grid gap-5 sm:grid-cols-2">
                      <FormInput
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        icon={<EmailIcon />}
                        required
                        label="Email Address"
                      />
                      <FormInput
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 XXXXX XXXXX"
                        icon={<PhoneIcon />}
                        label="Phone Number"
                      />
                    </div>

                    {/* Subject */}
                    <div className="group">
                      <label
                        htmlFor="subject"
                        className="mb-1.5 block text-sm font-semibold text-gray-700"
                      >
                        Subject <span className="text-orange-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 transition-colors duration-200 group-focus-within:text-orange-500">
                          <SubjectIcon />
                        </div>
                        <select
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full appearance-none rounded-xl border border-gray-200 bg-white py-3 pl-11 pr-10 text-sm text-gray-900 shadow-sm outline-none transition-all duration-200 focus:border-orange-400 focus:shadow-[0_0_0_3px_rgba(249,115,22,0.1)]"
                        >
                          <option value="">Select a subject</option>
                          <option value="general">General Inquiry</option>
                          <option value="volunteer">Become a Volunteer</option>
                          <option value="donation">Donation Information</option>
                          <option value="partnership">Partnership Opportunity</option>
                          <option value="feedback">Feedback</option>
                          <option value="other">Other</option>
                        </select>
                        {/* chevron */}
                        <svg
                          className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    </div>

                    {/* Message */}
                    <div className="group">
                      <label
                        htmlFor="message"
                        className="mb-1.5 block text-sm font-semibold text-gray-700"
                      >
                        Message <span className="text-orange-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="pointer-events-none absolute left-3.5 top-3.5 text-gray-400 transition-colors duration-200 group-focus-within:text-orange-500">
                          <MessageIcon />
                        </div>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          placeholder="Write your message here..."
                          className="w-full resize-none rounded-xl border border-gray-200 bg-white py-3 pl-11 pr-4 text-sm text-gray-900 placeholder-gray-400 shadow-sm outline-none transition-all duration-200 focus:border-orange-400 focus:shadow-[0_0_0_3px_rgba(249,115,22,0.1)]"
                        />
                      </div>
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="contact-shimmer-btn group relative inline-flex w-full items-center justify-center gap-2.5 overflow-hidden rounded-xl bg-gradient-to-r from-orange-500 via-orange-500 to-amber-500 px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-orange-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/30 hover:brightness-105 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {/* hover shine */}
                      <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                      {isSubmitting ? (
                        <>
                          <svg
                            className="h-5 w-5 animate-spin"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            />
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            />
                          </svg>
                          <span>Sending Message...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <SendIcon />
                        </>
                      )}
                    </button>

                    {/* trust note */}
                    <p className="text-center text-xs text-gray-400">
                      🔒 Your information is safe with us. We never share your data.
                    </p>
                  </form>
                )}
              </div>
            </FadeIn>
          </div>

          {/* ══════════ BOTTOM CTA BANNER ══════════ */}
          <FadeIn delay={260}>
            <div className="contact-gradient-animate mt-14 overflow-hidden rounded-3xl bg-gradient-to-r from-orange-500 via-orange-500 to-amber-500 shadow-2xl shadow-orange-500/20">
              {/* Top decorative line */}
              <div className="h-1 bg-gradient-to-r from-white/0 via-white/30 to-white/0" />

              <div className="relative px-6 py-8 md:px-10 md:py-9">
                {/* Subtle circles */}
                <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/5" />
                <div className="pointer-events-none absolute -left-10 -bottom-10 h-32 w-32 rounded-full bg-white/5" />

                <div className="relative flex flex-col items-center justify-between gap-6 md:flex-row">
                  <div className="text-center md:text-left">
                    <h3 className="text-xl font-black text-white md:text-2xl">
                      Need Immediate Assistance?
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-white/80">
                      Call us directly or send a WhatsApp message — we'll respond
                      right away.
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center justify-center gap-3">
                    <a
                      href="tel:+917415315166"
                      className="group inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-bold text-orange-700 shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                    >
                      <span className="transition-transform duration-300 group-hover:scale-110">
                        <PhoneIcon />
                      </span>
                      <span>Call Now</span>
                    </a>

                    <a
                      href="https://wa.me/917415315166"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 py-3 text-sm font-bold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/20"
                    >
                      <span className="transition-transform duration-300 group-hover:scale-110">
                        <WhatsAppIcon />
                      </span>
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Bottom shine */}
              <div className="h-1 bg-gradient-to-r from-white/0 via-white/20 to-white/0" />
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}