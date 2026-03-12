// src/Pages/Testimonials/Testimonials.jsx
import React, { useEffect, useRef } from "react";

/* ---------- Fade-in on scroll ---------- */
function useFadeIn() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.classList.add("testi-show");
          obs.unobserve(el);
        }
      },
      { threshold: 0.12 }
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
      className={`testi-hide ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/* ---------- Data ---------- */
const testimonials = [
  {
    quote:
      "Sambhav Sansthan's tailoring training program changed my life. Now I can earn for my family and live with dignity.",
    name: "Radha Devi",
    location: "Boriyakala Village",
    tag: "Skill Development",
  },
  {
    quote:
      "The tree plantation drive in our village has made the environment cleaner and greener. Thank you for your efforts!",
    name: "Mohan Kumar",
    location: "Raipur District",
    tag: "Environment",
  },
  {
    quote:
      "The legal aid support helped me stand up against domestic violence. This organization truly empowers women.",
    name: "Sunita Sharma",
    location: "Chhattisgarh",
    tag: "Women Empowerment",
  },
];

/* ---------- Small icons (no lib) ---------- */
function QuoteIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M10 11H6a4 4 0 0 1 4-4V5a6 6 0 0 0-6 6v6h6v-6Zm10 0h-4a4 4 0 0 1 4-4V5a6 6 0 0 0-6 6v6h6v-6Z"
        fill="currentColor"
      />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2l2.4 7.2H22l-6 4.8 2.4 7.2L12 16.4l-6.4 4.8L8 14l-6-4.8h7.6L12 2Z" />
    </svg>
  );
}

/* ---------- Card ---------- */
function TestimonialCard({ item, delay = 0 }) {
  const initials = item.name
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase())
    .join("");

  return (
    <FadeIn delay={delay}>
      <article className="relative h-full overflow-hidden rounded-3xl border border-gray-100 bg-white p-6 shadow-sm transition-colors duration-300 hover:bg-orange-50/30 md:p-8">
        {/* top stripe */}
        <div className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-orange-500 to-amber-400" />

        <div className="flex items-start justify-between gap-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white px-3 py-1 text-[11px] font-extrabold uppercase tracking-widest text-orange-700">
            {item.tag}
          </div>

          <div className="text-orange-300">
            <QuoteIcon />
          </div>
        </div>

        <p className="mt-5 text-[15px] leading-7 text-gray-700 md:text-base">
          “{item.quote}”
        </p>

        <div className="mt-6 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 text-sm font-black text-white shadow-sm">
              {initials}
            </div>
            <div className="min-w-0">
              <div className="truncate text-sm font-black text-gray-900">{item.name}</div>
              <div className="truncate text-xs font-semibold text-gray-500">{item.location}</div>
            </div>
          </div>

          <div className="hidden items-center gap-1 text-orange-400 sm:flex" aria-label="5 star rating">
            {Array.from({ length: 5 }).map((_, i) => (
              <StarIcon key={i} />
            ))}
          </div>
        </div>
      </article>
    </FadeIn>
  );
}

/* ===================== MAIN ===================== */
export default function Testimonials() {
  return (
    <>
      <style>{`
        .testi-hide{
          opacity: 0;
          transform: translateY(24px);
          transition: opacity .7s cubic-bezier(.16,1,.3,1),
                      transform .7s cubic-bezier(.16,1,.3,1);
        }
        .testi-show{
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

      <section id="testimonials" className="relative overflow-hidden bg-gray-50 py-16 md:py-24">
        {/* subtle blobs */}
        <div className="pointer-events-none absolute -left-48 top-24 h-96 w-96 rounded-full bg-orange-100/40 blur-3xl" />
        <div className="pointer-events-none absolute -right-48 bottom-10 h-80 w-80 rounded-full bg-amber-100/30 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-5 md:px-8">
          {/* Header */}
          <FadeIn>
            <div className="mb-10 text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white px-4 py-2 text-xs font-bold uppercase tracking-widest text-orange-600 shadow-sm">
                <span className="h-2 w-2 rounded-full bg-orange-500" />
                Testimonials
              </span>

              <h2 className="mt-5 text-3xl font-bold text-gray-900 md:text-5xl">
                Stories of Impact
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-600 md:text-xl">
                Real voices from the communities we serve—how Sambhav Sansthan programs are helping people build better,
                safer, and more dignified lives.
              </p>
            </div>
          </FadeIn>

          {/* Grid */}
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <TestimonialCard key={t.name} item={t} delay={i * 120} />
            ))}
          </div>

          {/* CTA row (optional) */}
          <FadeIn delay={240}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <a
                href="#donate"
                className="rounded-2xl bg-orange-600 px-6 py-3 text-sm font-extrabold text-white shadow-sm hover:bg-orange-700"
              >
                Donate Now
              </a>
              <a
                href="/contact"
                className="rounded-2xl border border-orange-200 bg-white px-6 py-3 text-sm font-extrabold text-orange-700 hover:bg-orange-50"
              >
                Become a Volunteer
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}