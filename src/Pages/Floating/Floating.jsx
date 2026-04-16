import React from "react";
import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";

export default function FloatingSocial() {
  return (
    <div className="fixed bottom-10 left-5 z-50 flex flex-col gap-3">
      {/* Instagram */}
      <a
        href="https://instagram.com/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        title="Instagram"
        className="rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-3 text-white shadow-lg transition-transform duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/60"
      >
        <FaInstagram size={20} />
      </a>

      {/* Facebook */}
      <a
        href="https://facebook.com/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
        title="Facebook"
        className="rounded-full bg-blue-600 p-3 text-white shadow-lg transition-transform duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/60"
      >
        <FaFacebookF size={20} />
      </a>

      {/* WhatsApp */}
      <a
        href="https://wa.me/919329445769?text=Hello%20I%20want%20to%20connect"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        title="WhatsApp"
        className="rounded-full bg-green-500 p-3 text-white shadow-lg transition-transform duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/60"
      >
        <FaWhatsapp size={20} />
      </a>
    </div>
  );
}