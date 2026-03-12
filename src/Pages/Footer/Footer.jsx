import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">

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

            <div className="bg-orange-500 p-2 rounded-lg cursor-pointer hover:bg-orange-600 transition">
              <FaFacebookF />
            </div>

            <div className="bg-orange-500 p-2 rounded-lg cursor-pointer hover:bg-orange-600 transition">
              <FaInstagram />
            </div>

            <div className="bg-orange-500 p-2 rounded-lg cursor-pointer hover:bg-orange-600 transition">
              <FaTwitter />
            </div>

          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-5 text-orange-400">
            Quick Links
          </h4>

          <ul className="space-y-3 text-sm text-slate-300">

            <li>
              <Link to="/" className="hover:text-orange-400">
                Home
              </Link>
            </li>

            <li>
              <Link to="/about" className="hover:text-orange-400">
                About Us
              </Link>
            </li>

            <li>
              <Link to="/projects" className="hover:text-orange-400">
                Projects
              </Link>
            </li>

            <li>
              <Link to="/gallery" className="hover:text-orange-400">
                Gallery
              </Link>
            </li>

            <li>
              <Link to="/contact" className="hover:text-orange-400">
                Contact
              </Link>
            </li>

          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-5 text-orange-400">
            Contact Us
          </h4>

          <div className="space-y-4 text-sm text-slate-300">

            <p className="flex items-center gap-3">
              <FaPhoneAlt className="text-orange-500" />
              +91 98271 98000
            </p>

            <p className="flex items-center gap-3">
              <FaEnvelope className="text-orange-500" />
              info@sambhav.org
            </p>

            <p>
              Raipur, Chhattisgarh, India
            </p>

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

          <button className="mt-6 bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-lg font-semibold transition">
            Donate Now
          </button>

        </div>

      </div>

      {/* Bottom bar */}

      <div className="border-t border-slate-700 mt-12 pt-6 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} Sambhav Sansthan. All Rights Reserved.
      </div>

    </footer>
  );
}