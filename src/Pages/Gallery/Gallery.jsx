// src/Pages/Gallery/Gallery.jsx
import React, { useEffect, useRef, useState, useCallback } from "react";

import g1 from "../img/hero.jpeg";
import g2 from "../img/gallery8.jpeg";
import g3 from "../img/hero2.jpeg";
import g4 from "../img/hero3.jpeg";
import g5 from "../img/hero4.jpeg";
import g6 from "../img/gallery.jpeg";
import g7 from "../img/gallery1.jpeg";
import g8 from "../img/gallery2.jpeg";
import g9 from "../img/gallery3.jpeg";
import g10 from "../img/gallery4.jpeg";
import g11 from "../img/gallery5.jpeg";
// import g12 from "../img/gallery6.jpeg";
import g13 from "../img/gallery7.jpeg";
import g14 from "../img/hero1.jpeg";

/* ---------- Fade-in on scroll ---------- */
function useFadeIn() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.classList.add("gal-show");
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
      className={`gal-hide ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/* ---------- Icons ---------- */
function CloseIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <path
        d="M18 6L6 18M6 6l12 12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronLeftIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
      <path
        d="M15 18l-6-6 6-6"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronRightIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
      <path
        d="M9 18l6-6-6-6"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ExpandIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path
        d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
      <path d="M10 8l6 4-6 4V8z" fill="currentColor" />
    </svg>
  );
}

/* ---------- Lightbox ---------- */
function Lightbox({ open, onClose, images, index, setIndex }) {
  const goNext = useCallback(() => {
    setIndex((i) => (i + 1) % images.length);
  }, [images.length, setIndex]);

  const goPrev = useCallback(() => {
    setIndex((i) => (i - 1 + images.length) % images.length);
  }, [images.length, setIndex]);

  useEffect(() => {
    if (!open) return;

    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };

    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose, goNext, goPrev]);

  if (!open) return null;

  const current = images[index];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/95" 
        onClick={onClose} 
      />

      {/* Close button */}
      <button
        type="button"
        onClick={onClose}
        className="absolute right-4 top-4 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:bg-white/20"
        aria-label="Close"
      >
        <CloseIcon />
      </button>

      {/* Counter */}
      <div className="absolute left-4 top-4 z-20 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white">
        {index + 1} / {images.length}
      </div>

      {/* Image Container */}
      <div className="relative z-10 flex max-h-[85vh] max-w-5xl items-center justify-center">
        <img
          src={current}
          alt={`Gallery ${index + 1}`}
          className="max-h-[85vh] max-w-full rounded-xl object-contain"
          draggable={false}
        />
      </div>

      {/* Navigation */}
      <button
        type="button"
        onClick={goPrev}
        className="absolute left-4 top-1/2 z-20 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full bg-white text-gray-900 shadow-xl transition-all hover:scale-110"
        aria-label="Previous"
      >
        <ChevronLeftIcon />
      </button>

      <button
        type="button"
        onClick={goNext}
        className="absolute right-4 top-1/2 z-20 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full bg-white text-gray-900 shadow-xl transition-all hover:scale-110"
        aria-label="Next"
      >
        <ChevronRightIcon />
      </button>
    </div>
  );
}

/* ---------- Gallery Card ---------- */
function GalleryCard({ image, index, onClick }) {
  return (
    <FadeIn delay={index * 50}>
      <button
        type="button"
        onClick={onClick}
        className="group relative w-full overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
        aria-label={`View image ${index + 1}`}
      >
        {/* Image Container - Fixed aspect ratio */}
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
          <img
            src={image}
            alt={`Gallery ${index + 1}`}
            className="h-full w-full object-cover"
            draggable={false}
          />

          {/* Hover Overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-300 group-hover:bg-black/40">
            <div className="flex h-14 w-14 scale-0 items-center justify-center rounded-full bg-white text-gray-900 shadow-lg transition-all duration-300 group-hover:scale-100">
              <ExpandIcon />
            </div>
          </div>
        </div>

       
      </button>
    </FadeIn>
  );
}

/* ===================== MAIN ===================== */
export default function Gallery() {
  const mainImage = g1;
  const galleryImages = [g2, g3, g4, g5, g6, g7, g8, g9, g10, g11, g13, g14];
  const allImages = [mainImage, ...galleryImages];

  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const openLightbox = (i) => {
    setIndex(i);
    setOpen(true);
  };

  return (
    <>
      <style>{`
        .gal-hide {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        .gal-show {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

      <section id="gallery" className="bg-gray-50 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          
          {/* ========== HEADER ========== */}
          <FadeIn>
            <div className="mb-14 text-center">
              {/* Top Badge */}
              <div className="mb-5 flex items-center justify-center">
                <div className="flex items-center gap-2 rounded-full bg-orange-500 px-5 py-2 text-white shadow-lg shadow-orange-200">
                  <PlayIcon />
                  <span className="text-sm font-semibold">Our Gallery</span>
                </div>
              </div>

              {/* Main Heading */}
              <h2 className="text-4xl font-bold leading-tight text-gray-900 md:text-4xl lg:text-5xl">
                Glimpses of Our
              </h2>
              <h2 className="mt-2 text-4xl font-bold leading-tight md:text-5xl lg:text-5xl">
                <span className="bg-gradient-to-r from-orange-500 via-orange-600 to-amber-500 bg-clip-text text-transparent">
                  Journey & Impact
                </span>
              </h2>

              {/* Subtitle */}
              <p className="mx-auto mt-6 max-w-xl text-lg text-gray-600">
                See how our volunteers are making a difference in communities across Chhattisgarh
              </p>

              {/* Decorative Element */}
              <div className="mt-8 flex items-center justify-center gap-2">
                <div className="h-1 w-3 rounded-full bg-orange-300" />
                <div className="h-1.5 w-12 rounded-full bg-gradient-to-r from-orange-500 to-amber-500" />
                <div className="h-1 w-3 rounded-full bg-orange-300" />
              </div>
            </div>
          </FadeIn>

          {/* ========== MAIN BANNER IMAGE ========== */}
          <FadeIn delay={100}>
            <button
              type="button"
              onClick={() => openLightbox(0)}
              className="group relative mb-8 w-full overflow-hidden rounded-3xl bg-white shadow-xl transition-all duration-300 hover:shadow-2xl"
              aria-label="View main image"
            >
              {/* Banner Image Container */}
              <div className="relative w-full overflow-hidden">
                <img
                  src={mainImage}
                  alt="Main Banner - Our Volunteers"
                  className="w-full object-contain"
                  draggable={false}
                  style={{ maxHeight: '500px' }}
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
                  <div className="flex items-end justify-between">
                    

                    {/* Expand Button */}
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-gray-900 shadow-lg transition-all duration-300 group-hover:scale-110">
                      <ExpandIcon />
                    </div>
                  </div>
                </div>

                {/* Corner Badge */}
                
              </div>
            </button>
          </FadeIn>

          {/* ========== GALLERY GRID ========== */}
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 lg:grid-cols-4">
            {galleryImages.map((img, i) => (
              <GalleryCard
                key={i}
                image={img}
                index={i + 2}
                onClick={() => openLightbox(i + 1)}
              />
            ))}
          </div>

          {/* ========== BOTTOM SECTION ========== */}
          <FadeIn delay={200}>
            <div className="mt-16 rounded-3xl border border-orange-100 bg-gradient-to-br from-orange-50 to-amber-50 p-8 text-center md:p-12">
              {/* Stats Row */}
              

              {/* CTA */}
              <h3 className="text-xl font-bold text-gray-900 md:text-2xl">
                Be Part of Our Story
              </h3>
              <p className="mx-auto mt-2 max-w-md text-gray-600">
                Join our community of changemakers and make a difference
              </p>

              <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
                <a
                  href="#volunteer"
                  className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-200 transition-all hover:bg-orange-600 hover:shadow-xl"
                >
                  Join as Volunteer
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-orange-200 bg-white px-7 py-3 text-sm font-semibold text-orange-600 transition-all hover:bg-orange-50"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Lightbox */}
      <Lightbox
        open={open}
        onClose={() => setOpen(false)}
        images={allImages}
        index={index}
        setIndex={setIndex}
      />
    </>
  );
}