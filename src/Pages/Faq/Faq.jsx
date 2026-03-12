import React, { useState } from "react";

const faqs = [
  {
    q: "What is the mission of Sambhav Sansthan?",
    a: "Our mission is to empower underprivileged communities through education, healthcare support, and social awareness programs.",
  },
  {
    q: "How can I become a volunteer?",
    a: "You can join our volunteer program by filling out the volunteer form on our website. Our team will contact you shortly.",
  },
  {
    q: "How are donations used?",
    a: "All donations are used for social initiatives like education programs, food distribution drives, and healthcare camps.",
  },
  {
    q: "Is online donation available?",
    a: "Yes, you can donate securely using UPI, debit card, credit card, or bank transfer.",
  },
  {
    q: "Where does the NGO work?",
    a: "Currently we operate mainly in Chhattisgarh and nearby rural communities where support is most needed.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  const toggle = (i) => setOpen((prev) => (prev === i ? -1 : i));

  return (
    <section id="faq" className="bg-gray-50 py-14 md:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-4xl md:text-4xl font-extrabold text-slate-900">
            Frequently Asked <span className="text-orange-600">Questions</span>
          </h2>

          <p className="mt-3 text-slate-600">
            Quick answers about our NGO, volunteering, and donations.
          </p>
        </div>

        {/* FAQs */}
        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = open === i;

            return (
              <div
                key={i}
                className="rounded-xl border border-slate-200 bg-white"
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between gap-4 px-4 py-4 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-slate-800">{faq.q}</span>
                  <span className="text-orange-600 text-xl font-bold">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 text-sm leading-6 text-slate-600">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Small CTA (optional) */}
        <div className="mt-8 text-center">
          <a
            href="/contact"
            className="inline-flex rounded-xl bg-orange-500 px-5 py-3 text-sm font-extrabold text-white hover:bg-orange-600"
          >
            Still have a question? Contact us
          </a>
        </div>
      </div>
    </section>
  );
}