import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import aboutImg from "../img/hero1.webp";

/* ---------- Fade-in on scroll ---------- */
function useFadeIn() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.classList.add("about-show");
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
      className={`about-hide ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/* ---------- Icons (only needed) ---------- */
function StoryIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M7 4h10a2 2 0 0 1 2 2v13a1 1 0 0 1-1.6.8L12 16l-5.4 3.8A1 1 0 0 1 5 19V6a2 2 0 0 1 2-2Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5 13l4 4L19 7"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ---------- Icon Badge ---------- */
function IconBadge({ children }) {
  return (
    <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-200/50">
      {children}
    </span>
  );
}

/* ---------- Animated Counter ---------- */
function AnimatedCounter({ value, duration = 2000 }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);

  const numericValue = parseInt(value.replace(/[^0-9]/g, ""));
  const suffix = value.replace(/[0-9]/g, "");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const increment = numericValue / (duration / 16);
          const timer = setInterval(() => {
            start += increment;
            if (start >= numericValue) {
              setCount(numericValue);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
        }
      },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [numericValue, duration, hasAnimated]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

/* ---------- Stats Card ---------- */
function StatsCard({ stat, index }) {
  const colorStyles = {
    blue: "border-t-blue-500 hover:bg-blue-50/50",
    green: "border-t-green-500 hover:bg-green-50/50",
    orange: "border-t-orange-500 hover:bg-orange-50/50",
    purple: "border-t-purple-500 hover:bg-purple-50/50",
  };

  return (
    <FadeIn delay={index * 100}>
      <div
        className={`rounded-2xl border border-gray-100 border-t-4 bg-white p-6 text-center shadow-lg shadow-gray-200/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${colorStyles[stat.color]}`}
      >
        <div className="mb-3 text-3xl">{stat.icon}</div>
        <div className="text-3xl font-bold text-gray-900">
          <AnimatedCounter value={stat.value} />
        </div>
        <div className="mt-1 text-sm font-semibold text-gray-500 uppercase tracking-wider">{stat.label}</div>
      </div>
    </FadeIn>
  );
}

const impactStats = [
  { value: "18", label: "Major Programs", icon: "📋", color: "blue" },
  { value: "150+", label: "Villages Reached", icon: "🏘️", color: "green" },
  { value: "4000+", label: "Families Impacted", icon: "👨‍👩‍👧‍👦", color: "orange" },
  { value: "10000+", label: "Trees Planted", icon: "🌳", color: "purple" },
];

/* ===================== MAIN ===================== */
export default function About() {
  return (
    <>
      <style>{`
        .about-hide {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.7s cubic-bezier(.16,1,.3,1),
                      transform 0.7s cubic-bezier(.16,1,.3,1);
        }
        .about-show {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

      <section id="about" className="relative overflow-hidden bg-gray-50 py-20 md:py-28">
        {/* Background blobs */}
        <div className="pointer-events-none absolute -left-48 top-20 h-96 w-96 rounded-full bg-orange-100/50 blur-3xl" />
        <div className="pointer-events-none absolute -right-48 bottom-20 h-80 w-80 rounded-full bg-amber-100/40 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-5 md:px-8">
          {/* ========== CENTERED HEADER ========== */}
          <FadeIn>
            <div className="mb-16 text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white px-4 py-2 text-xs font-bold uppercase tracking-widest text-orange-600 shadow-sm">
                <span className="h-2 w-2 rounded-full bg-orange-500 animate-pulse" />
                About Sambhav Sansthan
              </span>

              <h2 className="mt-6 text-4xl font-bold text-gray-900 md:text-5xl">
                Empowering Lives,{" "}
                <span className="bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">
                  Transforming Communities
                </span>
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-xl text-gray-600">
                Creating positive social change across Chhattisgarh through sustainable development, education, and
                community empowerment.
              </p>
            </div>
          </FadeIn>

          {/* ========== OUR STORY ========== */}
          <FadeIn delay={100}>
            <div className="group overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-xl shadow-gray-200/30">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={aboutImg}
                    alt="Sambhav Sansthan community work"
                    className="h-[350px] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03] lg:h-full lg:min-h-[520px]"
                    draggable={false}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-white/10" />
                </div>

                {/* Content */}
                <div className="flex flex-col justify-center px-8 py-10 lg:px-12 lg:py-14">
                  {/* Our Story heading (clean + line) */}
                  <div className="mb-6 flex items-start gap-4">
                    <IconBadge>
                      <StoryIcon />
                    </IconBadge>

                    <div className="min-w-0">
                      <div className="-mt-1 flex items-center gap-3">
                        <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-orange-600">
                          Our Story
                        </p>
                        <span className="h-px flex-1 bg-gradient-to-r from-orange-500 via-amber-400 to-transparent" />
                      </div>

                      <h3 className="mt-3 text-xl font-bold text-gray-900 md:text-2xl">
                        A Journey of Hope &amp; Service
                      </h3>
                    </div>
                  </div>

                  <div className="space-y-4 text-gray-500 leading-relaxed">
                    <p>
                      Sambhav Sansthan was established with a powerful vision — to create lasting, positive social
                      change in the heart of Chhattisgarh. Our journey began with a simple yet profound belief:{" "}
                      <span className="font-semibold text-gray-700">
                        every individual deserves the opportunity to live a life of dignity, health, and prosperity.
                      </span>
                    </p>

                    <p>
                      Over the years, we have grown from a small grassroots initiative into a recognized organization
                      driving meaningful transformation across rural and urban communities. Our dedicated team works
                      tirelessly on the ground — implementing programs that touch lives and change destinies.
                    </p>

                    <p>
                      What sets us apart is our deep-rooted connection with the communities we serve. We don’t just
                      bring programs — we listen, understand, and co-create solutions that are sustainable and
                      culturally sensitive.
                    </p>
                  </div>

                  {/* Focus areas */}
                  <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-2">
                    {[
                      "Water Conservation",
                      "Women Empowerment",
                      "Skill Development",
                      "Health Awareness",
                      "Rural Development",
                      "Education Support",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-2 text-sm text-gray-600">
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                          <CheckIcon />
                        </span>
                        {item}
                      </div>
                    ))}
                  </div>

                  {/* ✅ Two CTA Buttons (Programs + Contact) */}
                  <div className="mt-8 flex flex-wrap gap-3">
                    <Link
                      to="/projects"
                      className="inline-flex items-center justify-center rounded-2xl bg-orange-600 px-6 py-3 text-sm font-extrabold text-white shadow-sm transition hover:bg-orange-700"
                    >
                      View Programs
                    </Link>
                    <Link
                      to="/contact"
                      className="inline-flex items-center justify-center rounded-2xl border border-orange-200 bg-white px-6 py-3 text-sm font-extrabold text-orange-700 transition hover:bg-orange-50"
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* ========== IMPACT SECTION ========== */}
          <div className="mt-24">
            <FadeIn>
              <div className="mb-12 text-center">
                <h3 className="text-3xl font-bold text-gray-900 md:text-4xl">
                  Our Journey of{" "}
                  <span className="bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">
                    Impact
                  </span>
                </h3>
                <p className="mx-auto mt-3 max-w-lg text-lg text-gray-600">
                  Real numbers reflecting real change across Chhattisgarh — building a stronger community every day.
                </p>
              </div>
            </FadeIn>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
              {impactStats.map((stat, i) => (
                <StatsCard key={stat.label} stat={stat} index={i} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}