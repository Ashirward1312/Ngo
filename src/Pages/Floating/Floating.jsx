import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";

export default function FloatingSocial() {
  return (
    <div className="fixed left-5 bottom-10 flex flex-col gap-3 z-50">

      {/* Instagram */}
      <a
        href="https://instagram.com"
        target="_blank"
        className="bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white p-3 rounded-full shadow-lg hover:scale-110 transition"
      >
        <FaInstagram size={20} />
      </a>

      {/* Facebook */}
      <a
        href="https://facebook.com"
        target="_blank"
        className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:scale-110 transition"
      >
        <FaFacebookF size={20} />
      </a>

      {/* WhatsApp */}
      <a
        href="https://wa.me/91XXXXXXXXXX"
        target="_blank"
        className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:scale-110 transition"
      >
        <FaWhatsapp size={20} />
      </a>

    </div>
  );
}