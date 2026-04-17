import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

// Awareness & Wellness images (use same names/paths)
import Disaster from "../img/Diaster.webp";
import Englishspeaking from "../img/English.webp";
import Govtexamprep from "../img/govexam.webp";
import Humanrights from "../img/humanrights.webp";
import Socialawarness from "../img/socialawarness.webp";
import Yoga from "../img/Yoga fitness.webp";
import Nashamukti from "../img/nasha mukti.webp";

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

/* ---------- Icons ---------- */
function AwarenessIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 2a7 7 0 0 0-4 12.74V17a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-2.26A7 7 0 0 0 12 2Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M10 22h4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
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

/* ---------- Awareness & Wellness Programs data ---------- */
const programs = [
  {
    id: 1,
    icon: <AwarenessIcon />,
    badge: "Awareness",
    title: "Disaster Management & Safety Awareness",
    subtitle:
      "Simple sessions to understand safety basics, preparedness, and community response.",
    image: Disaster,
    color: "from-red-500 to-orange-500",
    colorLight: "bg-red-50 text-red-700",
    checkColor: "bg-red-600",
    accentColor: "bg-red-600",
    activities: [
      "Basic do’s and don’ts for emergencies",
      "Safety drills and preparedness tips",
      "First response awareness (basic)",
      "Local risk and safe evacuation basics",
    ],
  },
  {
    id: 2,
    icon: <AwarenessIcon />,
    badge: "Communication",
    title: "English Speaking & Confidence Building",
    subtitle:
      "Practical speaking practice for daily communication and self-introduction.",
    image: Englishspeaking,
    color: "from-blue-600 to-indigo-600",
    colorLight: "bg-blue-50 text-blue-700",
    checkColor: "bg-blue-600",
    accentColor: "bg-blue-600",
    activities: [
      "Daily-use vocabulary and sentences",
      "Group conversation practice",
      "Pronunciation basics",
      "Interview and self-introduction practice",
    ],
  },
  {
    id: 3,
    icon: <AwarenessIcon />,
    badge: "Education Support",
    title: "Government Exam Preparation Support",
    subtitle:
      "Guidance sessions to build study routine, planning, and practice habits.",
    image: Govtexamprep,
    color: "from-emerald-600 to-green-600",
    colorLight: "bg-green-50 text-green-700",
    checkColor: "bg-green-600",
    accentColor: "bg-green-600",
    activities: [
      "Syllabus orientation and topic planning",
      "Reasoning and general awareness basics",
      "Time management and revision planning",
      "Test practice and feedback sessions",
    ],
  },
  {
    id: 4,
    icon: <AwarenessIcon />,
    badge: "Awareness",
    title: "Human Rights Awareness Program",
    subtitle:
      "Easy-to-understand sessions on rights, responsibilities, and support systems.",
    image: Humanrights,
    color: "from-violet-600 to-purple-600",
    colorLight: "bg-purple-50 text-purple-700",
    checkColor: "bg-purple-600",
    accentColor: "bg-purple-600",
    activities: [
      "Basic rights and responsibilities awareness",
      "Where to seek help and guidance",
      "Community discussion and case examples",
      "Respect, equality, and safe practices",
    ],
  },
  {
    id: 5,
    icon: <AwarenessIcon />,
    badge: "Community",
    title: "Social Awareness & Community Outreach",
    subtitle:
      "Local campaigns focusing on daily-life issues and positive community habits.",
    image: Socialawarness,
    color: "from-orange-500 to-amber-500",
    colorLight: "bg-orange-50 text-orange-700",
    checkColor: "bg-orange-600",
    accentColor: "bg-orange-600",
    activities: [
      "Cleanliness and hygiene awareness drives",
      "Education and community participation talks",
      "Issue-based awareness campaigns",
      "Volunteer support and local meetings",
    ],
  },
  {
    id: 6,
    icon: <AwarenessIcon />,
    badge: "Wellness",
    title: "Yoga & Fitness Sessions",
    subtitle:
      "Simple yoga routines and basic fitness awareness for daily well-being.",
    image: Yoga,
    color: "from-teal-500 to-cyan-500",
    colorLight: "bg-teal-50 text-teal-700",
    checkColor: "bg-teal-600",
    accentColor: "bg-teal-600",
    activities: [
      "Stretching and breathing exercises",
      "Simple yoga flow for daily routine",
      "Posture and mobility awareness",
      "Relaxation and stress basics",
    ],
  },
  {
    id: 7,
    icon: <AwarenessIcon />,
    badge: "Awareness",
    title: "Nasha Mukti Awareness Program",
    subtitle:
      "Awareness sessions focusing on healthy choices and community support.",
    image: Nashamukti,
    color: "from-lime-600 to-green-600",
    colorLight: "bg-lime-50 text-lime-800",
    checkColor: "bg-lime-700",
    accentColor: "bg-lime-700",
    activities: [
      "Community awareness talks and discussions",
      "Understanding habits and support options",
      "Family and peer support awareness",
      "Healthy routine building (basic)",
    ],
  },
];

/* ---------- Card (same design) ---------- */
function ProgramCard({ program, index }) {
  const isEven = index % 2 === 0;

  return (
    <FadeIn delay={index * 60}>
      <div className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Image */}
          <div className={`relative ${!isEven ? "lg:order-2" : ""}`}>
            <img
              src={program.image}
              alt={program.title}
              className="h-64 w-full object-cover lg:h-full lg:min-h-[400px]"
              draggable={false}
              loading={index === 0 ? "eager" : "lazy"}
              decoding="async"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

            <div className="absolute left-5 top-5">
              <span
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold shadow-md ${program.colorLight}`}
              >
                {program.icon}
                {program.badge}
              </span>
            </div>

            <div className="absolute bottom-5 right-5">
              <span
                className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${program.color} text-lg font-bold text-white shadow-lg`}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
          </div>

          {/* Content */}
          <div
            className={`flex flex-col justify-center p-8 lg:p-10 ${
              !isEven ? "lg:order-1" : ""
            }`}
          >
            <h3 className="text-2xl font-bold text-gray-900">{program.title}</h3>
            <div className={`mt-3 h-1 w-16 rounded-full ${program.accentColor}`} />
            <p className="mt-4 leading-relaxed text-gray-600">{program.subtitle}</p>

            <div className="mt-6">
              <p className="mb-3 text-xs font-bold uppercase tracking-wider text-gray-400">
                Key Activities
              </p>
              <ul className="space-y-3">
                {program.activities.map((activity, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span
                      className={`mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${program.checkColor} text-white`}
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

/* ===================== MAIN ===================== */
export default function AwarenessWellnessPrograms() {
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

      <section id="awareness-wellness" className="bg-gray-50 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          {/* Header */}
          <FadeIn>
            <div className="mb-16 text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-xs font-bold uppercase tracking-wider text-orange-600">
                <span className="h-2 w-2 rounded-full bg-orange-500" />
                Awareness & Wellness
              </span>

              <h2 className="mt-6 text-4xl font-bold text-gray-900 md:text-5xl">
                Community{" "}
                <span className="bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">
                  Awareness & Wellness
                </span>{" "}
                Programs
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
                Simple programs focused on safety, communication, education support, wellness, and social awareness.
              </p>

              <div className="mx-auto mt-6 flex items-center justify-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-orange-300" />
                <span className="h-1.5 w-8 rounded-full bg-orange-400" />
                <span className="h-1.5 w-1.5 rounded-full bg-orange-300" />
              </div>
            </div>
          </FadeIn>

          {/* Cards */}
          <div className="space-y-8">
            {programs.map((program, index) => (
              <ProgramCard key={program.id} program={program} index={index} />
            ))}
          </div>

          {/* Bottom CTA */}
          <FadeIn delay={250}>
            <div className="mt-20 rounded-3xl border border-orange-100 bg-gradient-to-br from-orange-50 to-amber-50 p-8 text-center md:p-14">
              <h3 className="text-2xl font-bold text-gray-900 md:text-3xl">
                Want to Know More?
              </h3>
              <p className="mx-auto mt-3 max-w-lg text-gray-600">
                Reach out to get details about sessions, schedules, and participation.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-orange-200 transition-all hover:bg-orange-600 hover:shadow-xl hover:-translate-y-0.5"
                >
                  Contact Us
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
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}