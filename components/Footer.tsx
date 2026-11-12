"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-[#121110] text-[#F7F6F2] pt-20 pb-10 overflow-hidden border-t border-[#C29D59]/15">
      {/* Ambient subtle warm candlelight radial glow overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(194,157,89,0.07),transparent_65%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Top Header & Columns Grid (Haute Couture Editorial Layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Monogram, Headline & Direct Email Pill */}
          <div className="lg:col-span-6 space-y-8">
            {/* Minimalist Circular Monogram Logo in Champagne Gold */}
            <div className="w-12 h-12 rounded-full border border-[#C29D59]/40 flex items-center justify-center backdrop-blur-sm bg-white/5 shadow-xs">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="w-6 h-6 text-[#C29D59]"
              >
                <path d="M4 10V14C4 18.4183 7.58172 22 12 22C16.4183 22 20 18.4183 20 14V10" />
                <path d="M12 2V22" strokeOpacity="0.4" />
                <path d="M4 10L12 3L20 10" />
              </svg>
            </div>

            {/* Signature Caldren-Style Editorial Headline */}
            <div className="space-y-1">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-white leading-[1.08]">
                Private listings,
              </h2>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif italic font-light text-[#C29D59] leading-[1.08]">
                first.
              </h2>
            </div>

            {/* Integrated Email Pill Input with Gold Accent */}
            <form
              onSubmit={(e) => e.preventDefault()}
              className="max-w-md flex items-center rounded-full bg-white/5 border border-white/20 p-1.5 backdrop-blur-md focus-within:border-[#C29D59] transition-all duration-300"
            >
              <input
                type="email"
                placeholder="Your email address"
                required
                className="flex-1 px-4 py-2.5 bg-transparent text-sm text-white placeholder-white/50 focus:outline-hidden"
              />
              <button
                type="submit"
                className="px-6 py-2.5 rounded-full bg-[#C29D59] hover:bg-[#D6B577] text-[#121110] text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer shadow-sm hover:scale-[1.02]"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Right Column: 3 Directory Columns (EXPLORE, COMPANY, OFFICES) */}
          <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-8 text-xs sm:text-sm">
            {/* Column 1: EXPLORE */}
            <div className="space-y-4">
              <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C29D59]">
                Explore
              </h3>
              <ul className="space-y-2.5 text-white/75">
                <li>
                  <Link href="/properties" className="hover:text-white transition-colors">
                    Properties
                  </Link>
                </li>
                <li>
                  <Link href="/properties?filter=developments" className="hover:text-white transition-colors">
                    Developments
                  </Link>
                </li>
                <li>
                  <Link href="/properties?filter=locations" className="hover:text-white transition-colors">
                    Prime Locations
                  </Link>
                </li>
                <li>
                  <Link href="/blogs" className="hover:text-white transition-colors">
                    Private Journal
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2: COMPANY */}
            <div className="space-y-4">
              <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C29D59]">
                Company
              </h3>
              <ul className="space-y-2.5 text-white/75">
                <li>
                  <Link href="/about-us" className="hover:text-white transition-colors">
                    About Urbannest
                  </Link>
                </li>
                <li>
                  <Link href="/contact-us" className="hover:text-white transition-colors">
                    Private Advisory
                  </Link>
                </li>
                <li>
                  <Link href="/about-us#careers" className="hover:text-white transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/blogs" className="hover:text-white transition-colors">
                    Press &amp; Media
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: OFFICES (Premier Global Locations) */}
            <div className="col-span-2 sm:col-span-1 space-y-4">
              <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C29D59]">
                Offices
              </h3>
              <ul className="space-y-2.5 text-white/75 text-xs">
                <li>London — 18 Mount Street</li>
                <li>Dubai — DIFC Gate Village</li>
                <li>New York — 767 Fifth Avenue</li>
                <li>Zurich — Bahnhofstrasse 24</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Guaranteed Full-Width Scalable "URBANNEST" Signature Watermark */}
        {/* Using responsive SVG viewBox ensures all 9 letters fit completely without clipping on ANY screen */}
        <div className="pt-8 pb-4 w-full select-none pointer-events-none flex items-center justify-center border-t border-white/10 overflow-hidden">
          <svg
            viewBox="0 0 1100 130"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full max-w-6xl h-auto select-none"
          >
            <text
              x="50%"
              y="58%"
              dominantBaseline="middle"
              textAnchor="middle"
              fill="rgba(247, 246, 242, 0.12)"
              fontSize="86"
              letterSpacing="16"
              fontFamily="var(--font-serif), Georgia, serif"
              fontWeight="300"
            >
              URBANNEST
            </text>
          </svg>
        </div>

        {/* Bottom Bar: Copyright & Links */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <p>© 2026 URBANNEST Real Estate &amp; Development</p>
          <div className="flex items-center gap-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#C29D59] transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#C29D59] transition-colors"
            >
              LinkedIn
            </a>
            <Link href="/properties" className="hover:text-[#C29D59] transition-colors">
              Private Portal
            </Link>
            <Link href="/contact-us" className="hover:text-[#C29D59] transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
