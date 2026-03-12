// src/Pages/About/MissionValues.jsx
import React, { useEffect, useRef } from "react";

/* ────────────── Fade-in on scroll ────────────── */
function useFadeIn() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.classList.add("mv-show");
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
      className={`mv-hide ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/* ────────────── SVG Icons ────────────── */
const TargetIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const EyeIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round">
    <path d="M2.5 12s3.5-7 9.5-7 9.5 7 9.5 7-3.5 7-9.5 7-9.5-7-9.5-7Z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const HeartIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round">
    <path d="M12 21s-7-4.6-9.5-9.2C.7 8 2.8 4.8 6.3 4.5c1.9-.2 3.6.8 4.7 2.2 1.1-1.4 2.8-2.4 4.7-2.2 3.5.3 5.6 3.5 3.8 7.3C19 16.4 12 21 12 21Z" />
  </svg>
);

const UsersIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <circle cx="9" cy="7" r="3" />
    <path d="M3 21v-1a6 6 0 0112 0v1" />
    <path d="M16 3.13a4 4 0 010 7.75M21 21v-1a4 4 0 00-3-3.87" />
  </svg>
);

const ShieldIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round">
    <path d="M12 2 20 6v7c0 5-3.4 8.4-8 9-4.6-.6-8-4-8-9V6l8-4Z" />
    <path d="M9 12l2 2 4-5" strokeLinecap="round" />
  </svg>
);

const SparkIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round">
    <path d="M12 2l1.2 6.2L20 10l-6.8 1.8L12 18l-1.2-6.2L4 10l6.8-1.8L12 2Z" />
  </svg>
);

const CheckListIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 13l4 4L19 7" />
  </svg>
);

/* ────────────── Icon Badge ────────────── */
function IconBadge({ children, variant = "orange" }) {
  const gradients = {
    orange: "from-orange-500 to-amber-500 shadow-orange-200/50",
    violet: "from-violet-500 to-purple-500 shadow-violet-200/50",
  };
  return (
    <span
      className={`inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${gradients[variant]} text-white shadow-lg`}
    >
      {children}
    </span>
  );
}

/* ────────────── Mission/Vision Bullet ────────────── */
function BulletPoint({ text }) {
  return (
    <div className="flex items-start gap-2.5">
      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-600">
        <CheckListIcon />
      </span>
      <span className="text-sm leading-relaxed text-gray-500">{text}</span>
    </div>
  );
}

/* ────────────── Value Card ────────────── */
function ValueCard({ icon, title, desc, color = "orange", delay = 0 }) {
  const colors = {
    orange: {
      bg: "bg-orange-50",
      text: "text-orange-600",
      hoverBg: "group-hover:from-orange-500 group-hover:to-amber-500",
      border: "hover:border-orange-200",
      shadow: "hover:shadow-orange-100/40",
      accent: "bg-orange-500",
    },
    blue: {
      bg: "bg-blue-50",
      text: "text-blue-600",
      hoverBg: "group-hover:from-blue-500 group-hover:to-cyan-500",
      border: "hover:border-blue-200",
      shadow: "hover:shadow-blue-100/40",
      accent: "bg-blue-500",
    },
    green: {
      bg: "bg-emerald-50",
      text: "text-emerald-600",
      hoverBg: "group-hover:from-emerald-500 group-hover:to-teal-500",
      border: "hover:border-emerald-200",
      shadow: "hover:shadow-emerald-100/40",
      accent: "bg-emerald-500",
    },
    purple: {
      bg: "bg-violet-50",
      text: "text-violet-600",
      hoverBg: "group-hover:from-violet-500 group-hover:to-purple-500",
      border: "hover:border-violet-200",
      shadow: "hover:shadow-violet-100/40",
      accent: "bg-violet-500",
    },
  };

  const c = colors[color];

  return (
    <FadeIn delay={delay}>
      <div
        className={`group relative h-full overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 ${c.border} hover:shadow-xl ${c.shadow}`}
      >
        {/* Top accent line */}
        <div className={`absolute left-0 top-0 h-1 w-0 ${c.accent} transition-all duration-500 group-hover:w-full`} />

        {/* Icon */}
        <div
          className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl ${c.bg} ${c.text} transition-all duration-300 group-hover:bg-gradient-to-br ${c.hoverBg} group-hover:text-white group-hover:shadow-lg`}
        >
          {icon}
        </div>

        <h4 className="text-lg font-black text-gray-900">{title}</h4>
        <p className="mt-2 text-sm leading-relaxed text-gray-500">{desc}</p>

        {/* Bottom dot decoration */}
        <div className="mt-4 flex gap-1">
          <div className={`h-1.5 w-6 rounded-full ${c.accent} opacity-60`} />
          <div className={`h-1.5 w-1.5 rounded-full ${c.accent} opacity-30`} />
          <div className={`h-1.5 w-1.5 rounded-full ${c.accent} opacity-15`} />
        </div>
      </div>
    </FadeIn>
  );
}

/* ═══════════════════ MAIN COMPONENT ═══════════════════ */
export default function MissionValues() {
  return (
    <>
      {/* ── Styles ── */}
      <style>{`
        .mv-hide {
          opacity: 0;
          transform: translateY(32px);
          transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1),
                      transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .mv-show {
          opacity: 1;
          transform: translateY(0);
        }

        @keyframes mv-float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        .mv-float-1 { animation: mv-float 7s ease-in-out infinite; }
        .mv-float-2 { animation: mv-float 9s ease-in-out infinite 2s; }

        .mv-dot-pattern {
          background-image: radial-gradient(circle, rgba(249,115,22,0.05) 1px, transparent 1px);
          background-size: 22px 22px;
        }

        @keyframes mv-gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .mv-gradient-animate {
          background-size: 200% 200%;
          animation: mv-gradient-shift 5s ease infinite;
        }
      `}</style>

      <section
        id="mission"
        className="relative overflow-hidden bg-gradient-to-b from-orange-50/20 via-white to-gray-50 py-20 md:py-28"
      >
        {/* ── Background Elements ── */}
        <div className="pointer-events-none absolute inset-0 mv-dot-pattern opacity-40" />
        <div className="pointer-events-none absolute -right-36 top-32 h-72 w-72 rounded-full bg-orange-100/30 blur-3xl mv-float-1" />
        <div className="pointer-events-none absolute -left-36 bottom-24 h-64 w-64 rounded-full bg-amber-100/25 blur-3xl mv-float-2" />

        {/* Small floating dots */}
        <div className="pointer-events-none absolute right-24 top-48 h-2 w-2 rounded-full bg-orange-400/25 mv-float-2" />
        <div className="pointer-events-none absolute left-16 top-80 h-3 w-3 rounded-full bg-amber-300/20 mv-float-1" />

        <div className="relative mx-auto max-w-6xl px-5 md:px-8">
          {/* ══════════ SECTION HEADER ══════════ */}
          <FadeIn>
            <div className="mb-14 text-center">
              <div className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-orange-200/80 bg-white px-5 py-2 shadow-sm">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-orange-500" />
                </span>
                <span className="text-xs font-bold uppercase tracking-[0.15em] text-orange-700">
                  Mission & Values
                </span>
              </div>

              <h2 className="text-4xl font-black tracking-tight text-gray-900 md:text-5xl">
                What Drives{" "}
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 bg-clip-text text-transparent">
                    Our Purpose
                  </span>
                  
                </span>
              </h2>

              <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-gray-500 md:text-lg">
                Our mission, vision, and core values shape every initiative we
                undertake for community empowerment.
              </p>
            </div>
          </FadeIn>

          {/* ══════════ MISSION & VISION CARDS ══════════ */}
          <div className="mb-20 grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
            {/* ── Mission Card ── */}
            <FadeIn delay={100}>
              <div className="group relative h-full overflow-hidden rounded-3xl border border-white/60 bg-white p-8 shadow-lg ring-1 ring-gray-100/50 transition-all duration-300 hover:border-orange-200 hover:shadow-xl hover:shadow-orange-100/30 md:p-10">
                {/* Hover glow */}
                <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-orange-100/50 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative">
                  <IconBadge variant="orange">
                    <TargetIcon />
                  </IconBadge>

                  <h3 className="mt-6 text-2xl font-black text-gray-900">Our Mission</h3>

                  <p className="mt-4 text-sm leading-relaxed text-gray-500 md:text-base">
                    To empower communities through sustainable development initiatives,
                    focusing on social welfare, women empowerment, health awareness,
                    skill development, and environmental conservation.
                  </p>

                  {/* Bullet points */}
                  <div className="mt-5 space-y-2.5">
                    <BulletPoint text="Create self-reliant and empowered communities" />
                    <BulletPoint text="Ensure access to basic rights and opportunities" />
                    <BulletPoint text="Drive sustainable environmental practices" />
                    <BulletPoint text="Promote gender equality and women's leadership" />
                  </div>

                  {/* Accent bar */}
                  <div className="mt-7 flex items-center gap-2">
                    <div className="h-1 w-12 rounded-full bg-gradient-to-r from-orange-500 to-amber-400" />
                    <div className="h-1 w-3 rounded-full bg-orange-300" />
                    <div className="h-1 w-1.5 rounded-full bg-orange-200" />
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* ── Vision Card ── */}
            <FadeIn delay={200}>
              <div className="group relative h-full overflow-hidden rounded-3xl border border-white/60 bg-white p-8 shadow-lg ring-1 ring-gray-100/50 transition-all duration-300 hover:border-violet-200 hover:shadow-xl hover:shadow-violet-100/30 md:p-10">
                {/* Hover glow */}
                <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-violet-100/50 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative">
                  <IconBadge variant="violet">
                    <EyeIcon />
                  </IconBadge>

                  <h3 className="mt-6 text-2xl font-black text-gray-900">Our Vision</h3>

                  <p className="mt-4 text-sm leading-relaxed text-gray-500 md:text-base">
                    A society where every individual, regardless of gender, age, or
                    economic background, has equal opportunities for growth and
                    development.
                  </p>

                  {/* Bullet points */}
                  <div className="mt-5 space-y-2.5">
                    <BulletPoint text="Environmentally sustainable communities" />
                    <BulletPoint text="Socially inclusive growth for all" />
                    <BulletPoint text="Economically empowered individuals" />
                    <BulletPoint text="A life of dignity, health, and prosperity" />
                  </div>

                  {/* Accent bar */}
                  <div className="mt-7 flex items-center gap-2">
                    <div className="h-1 w-12 rounded-full bg-gradient-to-r from-violet-500 to-purple-400" />
                    <div className="h-1 w-3 rounded-full bg-violet-300" />
                    <div className="h-1 w-1.5 rounded-full bg-violet-200" />
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* ══════════ VALUES SECTION ══════════ */}
          <FadeIn>
            <div className="mb-10 text-center">
              <h3 className="text-3xl font-black text-gray-900 md:text-4xl">
                Values That{" "}
                <span className="bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">
                  Guide Us
                </span>
              </h3>
              <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-gray-500 md:text-base">
                The core principles behind everything we do and every community we
                serve.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <ValueCard
              icon={<HeartIcon />}
              title="Compassion"
              desc="We serve with deep empathy and genuine care for every individual, ensuring no one is left behind."
              color="orange"
              delay={100}
            />
            <ValueCard
              icon={<UsersIcon />}
              title="Community"
              desc="Building resilient, self-reliant communities through collective strength and shared purpose."
              color="blue"
              delay={200}
            />
            <ValueCard
              icon={<ShieldIcon />}
              title="Integrity"
              desc="Complete transparency and accountability in every action, decision, and partnership we undertake."
              color="green"
              delay={300}
            />
            <ValueCard
              icon={<SparkIcon />}
              title="Impact"
              desc="Driving measurable, lasting change that transforms futures and creates sustainable progress."
              color="purple"
              delay={400}
            />
          </div>

          {/* ══════════ BOTTOM CTA BANNER ══════════ */}
          <FadeIn delay={300}>
            <div className="mv-gradient-animate mt-16 overflow-hidden rounded-3xl bg-gradient-to-r from-orange-500 via-orange-500 to-amber-500 shadow-2xl shadow-orange-500/20">
              <div className="h-1 bg-gradient-to-r from-white/0 via-white/25 to-white/0" />

              <div className="relative px-6 py-8 md:px-10 md:py-10">
                {/* Decorative circles */}
                <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/5" />
                <div className="pointer-events-none absolute -left-8 -bottom-8 h-28 w-28 rounded-full bg-white/5" />

                <div className="relative flex flex-col items-center justify-between gap-6 md:flex-row">
                  <div className="text-center md:text-left">
                    <h3 className="text-xl font-black text-white md:text-2xl">
                      Want to Be Part of the Change?
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-white/80">
                      Join us as a volunteer or partner — together we can create a
                      lasting impact in communities.
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center justify-center gap-3">
                    <a
                      href="/contact"
                      className="group inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-bold text-orange-700 shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                    >
                      <span>Get Involved</span>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </a>

                    <a
                      href="/about"
                      className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 py-3 text-sm font-bold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/20"
                    >
                      <span>Learn More</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="h-1 bg-gradient-to-r from-white/0 via-white/15 to-white/0" />
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}