import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo.jpeg";

export default function Header() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Projects", path: "/projects" },
    { label: "Skill Development & Training Programs", path: "/skill" },
    { label: "Gallery", path: "/gallery" },

  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-white/70 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">

        {/* Logo */}
        <Link to="/" className="group flex items-center gap-4 transition-all hover:opacity-90">
          <div className="relative">
            <img
              src={logo}
              alt="Sambhav Sansthan"
              className="h-12 w-12 rounded-xl object-cover ring-2 ring-orange-500/20 transition-transform duration-300 group-hover:scale-110"
            />
          </div>
          <div className="hidden sm:block">
            <div className="text-base font-black tracking-tight text-gray-900">Sambhav Sansthan</div>
            <div className="text-[10px] font-bold uppercase tracking-widest text-orange-600">
              Raipur, Chhattisgarh
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1 lg:gap-3">
          <nav className="flex items-center gap-1 rounded-full bg-gray-100/50 p-1 backdrop-blur-sm">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="px-4 py-2 text-sm font-semibold text-slate-600 transition-all hover:bg-white hover:text-orange-600 hover:shadow-sm rounded-full"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Contact CTA */}
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 px-6 py-2.5 text-sm font-bold text-white shadow-lg shadow-orange-200 transition-all hover:scale-105 hover:shadow-xl hover:shadow-orange-300 active:scale-95"
          >
            Contact Now
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-100 text-gray-700 md:hidden transition-all active:scale-90"
        >
          {open ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 12h18M3 6h18M3 18h18" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col p-6 gap-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setOpen(false)}
                className="px-5 py-3 text-base font-semibold text-gray-700 rounded-2xl hover:bg-orange-50 hover:text-orange-600 transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <div className="h-px bg-gray-100 my-2" />
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 p-4 text-base font-bold text-white shadow-lg"
            >
              Contact Us Now
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}