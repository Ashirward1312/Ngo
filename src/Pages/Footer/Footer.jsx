import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPhoneAlt,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

export default function Footer() {
  const [showTop, setShowTop] = useState(false);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8 relative">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">

        {/* NGO Info */}
        <div>
          <h3 className="text-2xl font-bold text-orange-500">
            Sambhav Sansthan
          </h3>

          <p className="mt-4 text-sm text-slate-300 leading-relaxed">
            Sambhav Sansthan is committed to uplifting communities through
            education, healthcare, and social development initiatives.
          </p>

          <div className="flex gap-4 mt-6">
            {[FaFacebookF, FaInstagram, FaTwitter].map((Icon, i) => (
              <div
                key={i}
                className="bg-slate-800 hover:bg-orange-500 p-3 rounded-full cursor-pointer transition duration-300 hover:scale-110 shadow-lg"
              >
                <Icon />
              </div>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-5 text-orange-400">
            Quick Links
          </h4>

          <ul className="space-y-3 text-sm text-slate-300">
            {[
              { name: "Home", path: "/" },
              { name: "About Us", path: "/about" },
              { name: "Projects", path: "/projects" },
              { name: "Gallery", path: "/gallery" },
              { name: "Contact", path: "/contact" },
            ].map((link, i) => (
              <li key={i}>
                <Link
                  to={link.path}
                  className="hover:text-orange-400 hover:pl-1 transition-all duration-200"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-5 text-orange-400">
            Contact Us
          </h4>

          <div className="space-y-4 text-sm text-slate-300">
            <p className="flex items-center gap-3 hover:text-orange-400 transition">
              <FaPhoneAlt className="text-orange-500" />
              +91 98271 98000
            </p>

            <p className="flex items-center gap-3 hover:text-orange-400 transition">
              <FaEnvelope className="text-orange-500" />
              info@sambhav.org
            </p>

            <p>Raipur, Chhattisgarh, India</p>
          </div>
        </div>

        {/* Donate CTA */}
        <div>
          <h4 className="text-lg font-semibold mb-5 text-orange-400">
            Support Our Mission
          </h4>

          <p className="text-sm text-slate-300">
            Your support helps us bring education, healthcare, and hope to
            communities in need.
          </p>

          <button className="mt-6 bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-xl font-semibold transition shadow-lg hover:scale-105">
            Donate Now
          </button>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-700 mt-12 pt-6 text-center text-sm text-slate-400">
        <div>
          © {new Date().getFullYear()} Sambhav Sansthan. All Rights Reserved.
        </div>

        {/* Stylish SP Advertising */}
        <div className="mt-3 text-xs">
          Website designed by{" "}
          <a
            href="https://spadvertising.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-block font-semibold text-orange-400 hover:text-orange-500 transition"
          >
            <span className="tracking-wider">SP ADVERTISING</span>

            {/* underline animation */}
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>
      </div>

      {/* 🔥 Scroll To Top Button */}
      {showTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full shadow-xl transition duration-300 hover:scale-110 z-50"
        >
          <FaArrowUp />
        </button>
      )}
    </footer>
  );
}