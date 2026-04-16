import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

// Skill images (same names)
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

/* ---------- Icons ---------- */
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

/* ---------- Skill Programs (same content) ---------- */
const skillPrograms = [
    {
        id: 7,
        icon: <SkillIcon />,
        badge: "Skill Training",
        title: "Women Empowerment through Tailoring Skills",
        subtitle: "Basic stitching skills with simple practice work and neat finishing.",
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
        subtitle: "Intro to welding basics with safety-first practice and tool awareness.",
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
        subtitle: "Simple fashion basics: fabric understanding, patterns, and practical styling.",
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
        subtitle: "Basic plumbing understanding for small fixes and everyday maintenance.",
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
        subtitle: "Hands-on woodworking basics: measuring, cutting, and simple repairs.",
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
        subtitle: "Electrical basics with safety-first learning and simple hands-on practice.",
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

/* ---------- Card (same design) ---------- */
function ProjectCard({ project, index }) {
    const isEven = index % 2 === 0;

    return (
        <FadeIn delay={index * 60}>
            <div className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className={`relative ${!isEven ? "lg:order-2" : ""}`}>
                        <img
                            src={project.image}
                            alt={project.title}
                            className="h-64 w-full object-cover lg:h-full lg:min-h-[400px]"
                            draggable={false}
                            loading={index < 1 ? "eager" : "lazy"}
                            decoding="async"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                        <div className="absolute left-5 top-5">
                            <span
                                className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold shadow-md ${project.colorLight}`}
                            >
                                {project.icon}
                                {project.badge}
                            </span>
                        </div>

                        <div className="absolute bottom-5 right-5">
                            <span
                                className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${project.color} text-lg font-bold text-white shadow-lg`}
                            >
                                {String(index + 1).padStart(2, "0")}
                            </span>
                        </div>
                    </div>

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

export default function SkillPrograms() {
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

            <section id="skill-programs" className="bg-gray-50 py-20 md:py-28">
                <div className="mx-auto max-w-6xl px-5 md:px-8">
                    <FadeIn>
                        <div className="mb-16 text-center">
                            <span className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-xs font-bold uppercase tracking-wider text-orange-600">
                                <span className="h-2 w-2 rounded-full bg-orange-500" />
                                Skill Development
                            </span>

                            <h2 className="mt-6 text-4xl font-bold text-gray-900 md:text-5xl">
                                Empowering Communities Through{" "}
                                <span className="bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">
                                    Skill Development
                                </span>
                            </h2>

                            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
                                Providing practical training programs that create livelihood opportunities, build confidence, and support self-reliance.
                            </p>

                            <div className="mx-auto mt-6 flex items-center justify-center gap-1">
                                <span className="h-1.5 w-1.5 rounded-full bg-orange-300" />
                                <span className="h-1.5 w-8 rounded-full bg-orange-400" />
                                <span className="h-1.5 w-1.5 rounded-full bg-orange-300" />
                            </div>
                        </div>
                    </FadeIn>

                    <div className="space-y-8">
                        {skillPrograms.map((project, index) => (
                            <ProjectCard key={project.id} project={project} index={index} />
                        ))}
                    </div>

                    <FadeIn delay={250}>
                        <div className="mt-20 rounded-3xl border border-orange-100 bg-gradient-to-br from-orange-50 to-amber-50 p-8 text-center md:p-14">
                            <h3 className="text-2xl font-bold text-gray-900 md:text-3xl">
                                Want to Know More?
                            </h3>
                            <p className="mx-auto mt-3 max-w-lg text-gray-600">
                                Contact us to learn about training details and how to participate.
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