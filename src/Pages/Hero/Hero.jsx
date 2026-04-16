import React, { useEffect, useMemo, useRef, useState } from "react";

import hero1 from "../img/medical.webp";
import hero3 from "../img/tree3.webp";
import hero4 from "../img/rain.webp";

export default function Hero() {
  const slides = useMemo(() => [ hero1, hero3, hero4], []);
  const [active, setActive] = useState(0);
  const [outgoing, setOutgoing] = useState(null);

  const intervalRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion || slides.length <= 1) return;

    const stop = () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      intervalRef.current = null;

      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    };

    const start = () => {
      if (intervalRef.current) return;
      intervalRef.current = setInterval(() => {
        setActive((curr) => {
          setOutgoing(curr);
          if (timeoutRef.current) clearTimeout(timeoutRef.current);
          timeoutRef.current = setTimeout(() => setOutgoing(null), 920);
          return (curr + 1) % slides.length;
        });
      }, 4000);
    };

    start();

    const onVis = () => (document.hidden ? stop() : start());
    document.addEventListener("visibilitychange", onVis);

    return () => {
      stop();
      document.removeEventListener("visibilitychange", onVis);
    };
  }, [slides.length]);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Slider Images */}
      <div className="absolute inset-0">
        {slides.map((src, i) => {
          const isActive = i === active;
          const isOutgoing = i === outgoing;

          return (
            <img
              key={i}
              src={src}
              alt=""
              draggable="false"
              className={[
                "absolute inset-0 h-full w-full object-cover object-center",
                "will-change-[opacity,transform]",
                isActive ? "opacity-100 hero-fade-in" : "opacity-0",
                isOutgoing ? "hero-fade-out" : "",
              ].join(" ")}
            />
          );
        })}

        {/* Orange/White themed overlays for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-black/45 to-black/70" />
        <div className="absolute inset-0 bg-[radial-gradient(900px_500px_at_50%_35%,rgba(249,115,22,.28),transparent_60%)]" />
      </div>

      {/* Center Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-4">
        <div className="mx-auto w-full max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-200/60 bg-white/70 px-4 py-2 text-xs font-extrabold text-orange-700 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-orange-500" />
            Sambhav Sansthan • Raipur, Chhattisgarh
          </div>

          <h1 className="mt-5 text-4xl font-black leading-tight tracking-tight text-white md:text-6xl">
            Empowering Communities,
            <span className="block text-orange-400">Transforming Lives</span>
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-7 text-white/85 md:text-lg">
            Join us in making a difference through social welfare, women empowerment,
            and sustainable development across Chhattisgarh
          </p>

          {/* 2 CTA buttons */}
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <a
              href="#donate"
              className="rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 px-6 py-3 text-sm font-black text-white shadow-[0_18px_50px_rgba(249,115,22,.35)] ring-2 ring-orange-200/70 transition hover:-translate-y-0.5 hover:from-orange-600 hover:to-orange-700"
            >
              Donate Now
            </a>
            <a
              href="/contact"
              className="rounded-2xl border-2 border-orange-200 bg-white/90 px-6 py-3 text-sm font-black text-orange-700 backdrop-blur transition hover:-translate-y-0.5 hover:bg-white"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}