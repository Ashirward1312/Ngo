import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import waterImg from "../img/water1.webp";
import treeImg from "../img/tree3.webp";
import swadeshiImg from "../img/swadesi.webp";
import culturalImg from "../img/festival.webp";
import healthImg from "../img/medical.webp";
import womenImg from "../img/women.webp";

// Added images (keep same names)
import Silai from "../img/silai.webp";
import weilding from "../img/weilding.webp";
import Fashion from "../img/fashion.webp";
import Plumbing from "../img/plumbing.webp";
import Carpenter from "../img/carpenter.webp";
import Electric from "../img/electric.webp";

/* ---------- Fade-in on scroll ---------- */
function useFadeIn() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.classList.add("proj-show");
          obs.unobserve(el);
        }
      },
      { threshold: 0.15 }
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
      className={`proj-hide ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/* ---------- Animated Counter ---------- */
function AnimatedCounter({ value, duration = 1600 }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);

  const numericValue = parseInt(String(value).replace(/[^0-9]/g, ""), 10) || 0;
  const suffix = String(value).replace(/[0-9]/g, "");

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

/* ---------- SVG Icons ---------- */
function WaterIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 2C12 2 5 10 5 15a7 7 0 0 0 14 0c0-5-7-13-7-13Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TreeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 22V10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M12 2C8 6 4 9 4 13a8 8 0 0 0 16 0c0-4-4-7-8-11Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ShopIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path
        d="M3 9h18v11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M3 9l1.5-5h15L21 9"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M9 21V14h6v7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FestivalIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 2v4M4.93 4.93l2.83 2.83M2 12h4M4.93 19.07l2.83-2.83M12 18v4M16.24 16.24l2.83 2.83M18 12h4M16.24 7.76l2.83-2.83"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function HealthIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path
        d="M8 2h8v4h4v8h-4v4H8v-4H4V6h4V2Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function WomenIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="8" r="5" stroke="currentColor" strokeWidth="2" />
      <path
        d="M12 13v9M9 19h6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function SkillIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path
        d="M14.7 6.3a4 4 0 0 0-5.65 5.65l-6.1 6.1a1.5 1.5 0 0 0 2.12 2.12l6.1-6.1A4 4 0 0 0 17.8 8.2l-2.2 2.2-2.2-2.2 1.3-1.9Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
      <path
        d="M5 13l4 4L19 7"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l2.4 7.2H22l-6 4.8 2.4 7.2L12 16.4l-6.4 4.8L8 14l-6-4.8h7.6L12 2Z" />
    </svg>
  );
}

/* ---------- Program data (first 6) ---------- */
const communityPrograms = [
  {
    id: 1,
    icon: <WaterIcon />,
    badge: "Environmental",
    title: "Water Conservation Program",
    subtitle:
      "Community-focused work to protect local water sources and promote better water habits.",
    image: waterImg,
    color: "from-blue-500 to-cyan-500",
    colorLight: "bg-blue-50 text-blue-600",
    checkColor: "bg-blue-500",
    accentColor: "bg-blue-500",
    activities: [
      "Cleaning and basic restoration of local water points",
      "Awareness on rainwater harvesting",
      "Public participation drives",
      "Simple learning sessions on water management",
    ],
  },
  {
    id: 2,
    icon: <TreeIcon />,
    badge: "Environmental",
    title: "Tree Plantation Campaign",
    subtitle:
      "Plantation drives with local participation, along with care and follow-ups.",
    image: treeImg,
    color: "from-green-500 to-emerald-500",
    colorLight: "bg-green-50 text-green-600",
    checkColor: "bg-green-500",
    accentColor: "bg-green-500",
    activities: [
      "Plantation drives in villages and public spaces",
      "Environmental awareness activities",
      "Community-based plantation support",
      "Basic monitoring and plant care guidance",
    ],
  },
  {
    id: 3,
    icon: <ShopIcon />,
    badge: "Economic",
    title: "Swadeshi Awareness Campaign",
    subtitle:
      "Encouraging local products, traditional work, and village-based small businesses.",
    image: swadeshiImg,
    color: "from-orange-500 to-amber-500",
    colorLight: "bg-orange-50 text-orange-600",
    checkColor: "bg-orange-500",
    accentColor: "bg-orange-500",
    activities: [
      "Promotion of local products and crafts",
      "Support for cottage industries",
      "Awareness around local farming practices",
      "Connecting artisans with simple market platforms",
    ],
  },
  {
    id: 4,
    icon: <FestivalIcon />,
    badge: "Cultural",
    title: "Cultural & Rural Festivals",
    subtitle:
      "Community gatherings that celebrate local culture, traditions, and shared values.",
    image: culturalImg,
    color: "from-purple-500 to-violet-500",
    colorLight: "bg-purple-50 text-purple-600",
    checkColor: "bg-purple-500",
    accentColor: "bg-purple-500",
    activities: [
      "Local celebrations and cultural events",
      "Community ceremonies and awareness drives",
      "Fairs, exhibitions, and gatherings",
      "Traditional performances and programs",
    ],
  },
  {
    id: 5,
    icon: <HealthIcon />,
    badge: "Healthcare",
    title: "Health & Medical Programs",
    subtitle:
      "Health awareness, guidance, and basic support through camps and community sessions.",
    image: healthImg,
    color: "from-teal-500 to-cyan-500",
    colorLight: "bg-teal-50 text-teal-600",
    checkColor: "bg-teal-500",
    accentColor: "bg-teal-500",
    activities: [
      "Health camps in rural and urban areas",
      "HIV/AIDS awareness and counseling support",
      "Support for medicines as per availability",
      "TB, cancer awareness, and malaria prevention sessions",
      "Sanitation and hygiene awareness",
    ],
  },
  {
    id: 6,
    icon: <WomenIcon />,
    badge: "Social Welfare",
    title: "Women Empowerment",
    subtitle:
      "Support through awareness, counseling, skill guidance, and community-led groups.",
    image: womenImg,
    color: "from-pink-500 to-rose-500",
    colorLight: "bg-pink-50 text-pink-600",
    checkColor: "bg-pink-500",
    accentColor: "bg-pink-500",
    activities: [
      "Legal awareness sessions and guidance",
      "Counseling and support where possible",
      "Self-help group formation support",
      "Skill guidance and livelihood-focused sessions",
      "Women’s Day programs and community talks",
    ],
  },
];

/* ---------- Continue same design UNDER the 6 cards (your added images) ---------- */
const skillPrograms = [
  {
    id: 7,
    icon: <SkillIcon />,
    badge: "Skill Training",
    title: "Women Empowerment through Tailoring Skills",
    subtitle:
      "Basic stitching skills with simple practice work and neat finishing.",
    image: Silai,
    color: "from-fuchsia-500 to-pink-500",
    colorLight: "bg-pink-50 text-pink-700",
    checkColor: "bg-pink-600",
    accentColor: "bg-pink-600",
    activities: [
      "Machine handling and basic setup",
      "Measurements and simple cutting practice",
      "Basic stitches and small repair work",
      "Finishing and quality basics",
    ],
  },
  {
    id: 8,
    icon: <SkillIcon />,
    badge: "Skill Training",
    title: "Youth Empowerment through Welding Skills",
    subtitle:
      "Intro to welding basics with safety-first practice and tool awareness.",
    image: weilding,
    color: "from-slate-700 to-gray-700",
    colorLight: "bg-gray-100 text-gray-700",
    checkColor: "bg-gray-700",
    accentColor: "bg-gray-700",
    activities: [
      "Safety rules and basic protective gear",
      "Tools and material understanding",
      "Practice of basic joints",
      "Workshop discipline and safe handling",
    ],
  },
  {
    id: 9,
    icon: <SkillIcon />,
    badge: "Skill Training",
    title: "Women Empowerment through Fashion Designing",
    subtitle:
      "Simple fashion basics: fabric understanding, patterns, and practical styling.",
    image: Fashion,
    color: "from-indigo-500 to-violet-500",
    colorLight: "bg-indigo-50 text-indigo-700",
    checkColor: "bg-indigo-600",
    accentColor: "bg-indigo-600",
    activities: [
      "Fabric types and usage basics",
      "Pattern and fitting fundamentals",
      "Simple design practice",
      "Finishing tips and clean presentation",
    ],
  },
  {
    id: 10,
    icon: <SkillIcon />,
    badge: "Skill Training",
    title: "Water Systems & Plumbing Training",
    subtitle:
      "Basic plumbing understanding for small fixes and everyday maintenance.",
    image: Plumbing,
    color: "from-sky-500 to-cyan-500",
    colorLight: "bg-sky-50 text-sky-700",
    checkColor: "bg-sky-600",
    accentColor: "bg-sky-600",
    activities: [
      "Pipes, fittings, and common tools",
      "Leak check and basic fixes",
      "Tap and connection practice",
      "Safety and clean work habits",
    ],
  },
  {
    id: 11,
    icon: <SkillIcon />,
    badge: "Skill Training",
    title: "Skilled Carpentry Training for Youth",
    subtitle:
      "Hands-on woodworking basics: measuring, cutting, and simple repairs.",
    image: Carpenter,
    color: "from-amber-600 to-orange-600",
    colorLight: "bg-amber-50 text-amber-800",
    checkColor: "bg-amber-700",
    accentColor: "bg-amber-700",
    activities: [
      "Tool introduction and safe use",
      "Measuring, marking, and cutting basics",
      "Simple repair and fitting practice",
      "Finishing and surface care",
    ],
  },
  {
    id: 12,
    icon: <SkillIcon />,
    badge: "Skill Training",
    title: "Electrical Wiring & Maintenance Training",
    subtitle:
      "Electrical basics with safety-first learning and simple hands-on practice.",
    image: Electric,
    color: "from-yellow-500 to-amber-500",
    colorLight: "bg-yellow-50 text-yellow-800",
    checkColor: "bg-yellow-600",
    accentColor: "bg-yellow-600",
    activities: [
      "Electrical safety and basic rules",
      "Switches, sockets, and connection basics",
      "Simple wiring practice (basic level)",
      "Common issue identification (basic)",
    ],
  },
];

const projects = [...communityPrograms, ...skillPrograms];

const impactStats = [
  { value: String(projects.length), label: "Total Programs", icon: "📋", color: "blue" },
  { value: "150+", label: "Villages Reached", icon: "🏘️", color: "green" },
  { value: "4000+", label: "Families Connected", icon: "👨‍👩‍👧‍👦", color: "orange" },
  { value: "10000+", label: "Trees Planted", icon: "🌳", color: "purple" },
];

/* ---------- Project Card ---------- */
function ProjectCard({ project, index }) {
  const isEven = index % 2 === 0;

  return (
    <FadeIn delay={index * 60}>
      <div className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Image Section */}
          <div className={`relative ${!isEven ? "lg:order-2" : ""}`}>
            <img
              src={project.image}
              alt={project.title}
              className="h-64 w-full object-cover lg:h-full lg:min-h-[400px]"
              draggable={false}
              loading={index < 2 ? "eager" : "lazy"}
              decoding="async"
            />

            {/* Simple overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

            {/* Badge */}
            <div className="absolute left-5 top-5">
              <span
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold shadow-md ${project.colorLight}`}
              >
                {project.icon}
                {project.badge}
              </span>
            </div>

            {/* Number */}
            <div className="absolute bottom-5 right-5">
              <span
                className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${project.color} text-lg font-bold text-white shadow-lg`}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
          </div>

          {/* Content Section */}
          <div className={`flex flex-col justify-center p-8 lg:p-10 ${!isEven ? "lg:order-1" : ""}`}>
            <h3 className="text-2xl font-bold text-gray-900">{project.title}</h3>

            <div className={`mt-3 h-1 w-16 rounded-full ${project.accentColor}`} />

            <p className="mt-4 leading-relaxed text-gray-600">{project.subtitle}</p>

            <div className="mt-6">
              <p className="mb-3 text-xs font-bold uppercase tracking-wider text-gray-400">
                Key Activities
              </p>
              <ul className="space-y-3">
                {project.activities.map((activity, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span
                      className={`mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${project.checkColor} text-white`}
                    >
                      <CheckIcon />
                    </span>
                    <span className="text-sm text-gray-600">{activity}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </FadeIn>
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
    <FadeIn delay={index * 90}>
      <div
        className={`rounded-xl border border-gray-100 border-t-4 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${colorStyles[stat.color]}`}
      >
        <div className="mb-3 text-3xl">{stat.icon}</div>
        <div className="text-3xl font-bold text-gray-900">
          <AnimatedCounter value={stat.value} />
        </div>
        <div className="mt-1 text-sm font-medium text-gray-500">{stat.label}</div>
      </div>
    </FadeIn>
  );
}

/* ===================== MAIN ===================== */
export default function Projects() {
  return (
    <>
      <style>{`
        .proj-hide {
          opacity: 0;
          transform: translateY(26px);
          transition: opacity 0.55s ease-out, transform 0.55s ease-out;
        }
        .proj-show {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

      <section id="projects" className="bg-gray-50 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          {/* ========== HEADER ========== */}
          <FadeIn>
            <div className="mb-16 text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-xs font-bold uppercase tracking-wider text-orange-600">
                <span className="h-2 w-2 rounded-full bg-orange-500" />
                Our Programs
              </span>

              <h2 className="mt-6 text-4xl font-bold text-gray-900 md:text-5xl">
                Programs That{" "}
                <span className="bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">
                  Support Communities
                </span>
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
                Practical initiatives and skill-focused activities, presented in one continuous flow.
              </p>

              <div className="mx-auto mt-6 flex items-center justify-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-orange-300" />
                <span className="h-1.5 w-8 rounded-full bg-orange-400" />
                <span className="h-1.5 w-1.5 rounded-full bg-orange-300" />
              </div>
            </div>
          </FadeIn>

          {/* ========== CARDS (6 + continue below same design) ========== */}
          <div className="space-y-8">
            {projects.map((project, index) => (
              <React.Fragment key={project.id}>
                {/* small divider after 6 cards (same page, not a new heavy section) */}
                {index === 6 && (
                  <FadeIn>
                   
                  </FadeIn>
                )}

                <ProjectCard project={project} index={index} />
              </React.Fragment>
            ))}
          </div>

          {/* ========== IMPACT SECTION ========== */}
          <div className="mt-24">
            <FadeIn>
              <div className="mb-12 text-center">
                <h3 className="text-3xl font-bold text-gray-900 md:text-4xl">
                  Quick{" "}
                  <span className="bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">
                    Overview
                  </span>
                </h3>
                <p className="mx-auto mt-3 max-w-lg text-gray-600">
                  A small snapshot of combined work and training.
                </p>
              </div>
            </FadeIn>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
              {impactStats.map((stat, i) => (
                <StatsCard key={stat.label} stat={stat} index={i} />
              ))}
            </div>

            {/* Trust Badge */}
            <FadeIn delay={350}>
              <div className="mt-10 flex flex-col items-center justify-center gap-3">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-amber-400">
                      <StarIcon />
                    </span>
                  ))}
                </div>
                <p className="text-sm text-gray-500">
                  Supported by communities across Chhattisgarh
                </p>
              </div>
            </FadeIn>

            {/* ========== BOTTOM CTA SECTION ========== */}
            <FadeIn delay={450}>
              <div className="mt-20 rounded-3xl border border-orange-100 bg-gradient-to-br from-orange-50 to-amber-50 p-8 text-center md:p-14">
                <h3 className="text-2xl font-bold text-gray-900 md:text-3xl">
                  Want to Connect?
                </h3>
                <p className="mx-auto mt-3 max-w-lg text-gray-600">
                  If you want to volunteer, collaborate, or know more about a program, feel free to reach out.
                </p>

                <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-orange-200 transition-all hover:bg-orange-600 hover:shadow-xl hover:-translate-y-0.5"
                  >
                    Join as Volunteer
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M5 12h14M12 5l7 7-7 7"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>

                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 rounded-full border-2 border-orange-200 bg-white px-8 py-3.5 text-sm font-bold text-orange-600 transition-all hover:bg-orange-50 hover:-translate-y-0.5 hover:shadow-md"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}