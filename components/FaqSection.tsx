"use client";

import { useState } from "react";
import Link from "next/link";
import { Headphones, Plus, Minus } from "lucide-react";
import { FAQS } from "@/data/siteData";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-20 lg:py-28 bg-[#F7F6F2] text-[#181715]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Floating Concierge Card (Screenshot 10 exact) */}
          <div className="lg:col-span-4 bg-white rounded-3xl p-8 border border-black/8 shadow-sm space-y-6">
            <div className="w-10 h-10 rounded-full bg-[#181715]/5 flex items-center justify-center text-[#181715]">
              <Headphones className="w-5 h-5 text-[#C29D59]" />
            </div>

            <div className="space-y-2">
              <p className="text-sm sm:text-base font-semibold text-[#181715] leading-snug">
                Need extra guidance? Book your private confidential consultation now.
              </p>
            </div>

            <div className="pt-2 space-y-3">
              <Link
                href="/contact-us"
                className="w-full inline-flex items-center justify-center py-3.5 rounded-full bg-[#181715] hover:bg-black text-[#C29D59] text-xs sm:text-sm font-semibold transition-all shadow-sm hover:shadow cursor-pointer"
              >
                Contact us
              </Link>

              <div className="text-center">
                <a
                  href="mailto:advisory@urbannest.com"
                  className="text-xs text-[#6B665F] hover:text-[#181715] transition-colors"
                >
                  or email us at <span className="font-semibold text-[#181715]">advisory@urbannest.com</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Minimalist Accordion (Screenshot 10 exact) */}
          <div className="lg:col-span-8 divide-y divide-black/10">
            {FAQS.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div key={faq.id} className="py-5 sm:py-6 first:pt-0 last:pb-0">
                  <button
                    type="button"
                    onClick={() => toggle(idx)}
                    className="w-full flex items-center justify-between text-left gap-4 font-semibold text-base sm:text-lg text-[#181715] hover:text-[#C29D59] cursor-pointer group"
                  >
                    <span className="tracking-tight">{faq.question}</span>

                    {/* Circular +/- button */}
                    <div className="w-8 h-8 rounded-full border border-black/15 flex items-center justify-center shrink-0 text-[#181715] group-hover:bg-[#181715] group-hover:text-[#C29D59] transition-colors">
                      {isOpen ? (
                        <Minus className="w-3.5 h-3.5" />
                      ) : (
                        <Plus className="w-3.5 h-3.5" />
                      )}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="pt-4 pr-12 text-xs sm:text-sm text-[#6B665F] leading-relaxed animate-in fade-in duration-200">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
