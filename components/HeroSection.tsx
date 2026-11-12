"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Building2,
  ShieldCheck,
  TrendingUp,
  ArrowRight,
  PhoneCall,
  Sparkles
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const tickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Hero Content Entrance Timeline
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.fromTo(
        badgeRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.15 }
      )
        .fromTo(
          headlineRef.current,
          { opacity: 0, y: 40, filter: "blur(6px)" },
          { opacity: 1, y: 0, filter: "blur(0px)", duration: 1.1 },
          "-=0.5"
        )
        .fromTo(
          subtitleRef.current,
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.9 },
          "-=0.7"
        )
        .fromTo(
          buttonsRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.6"
        )
        .fromTo(
          tickerRef.current ? tickerRef.current.children : [],
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.7, stagger: 0.08 },
          "-=0.4"
        );

      // 2. Parallax background effect on scroll
      if (bgRef.current) {
        gsap.to(bgRef.current, {
          yPercent: 16,
          scale: 1.12,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-[96vh] flex flex-col justify-between overflow-hidden bg-[#141311]">
      {/* Full-Bleed User-Specified Architectural Background with Parallax */}
      <div
        ref={bgRef}
        className="absolute inset-0 will-change-transform scale-105"
      >
        <Image
          src="https://cdn.prod.website-files.com/6a794e5aeebba97e3ac774ae/6aa29749f382ff2f808108a3_Full%20Res_19.webp"
          alt="Urbannest Architectural Luxury Estate"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Cinematic Vignette Overlay: Balances full image visibility with crystal-clear text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#141311]/58 via-[#141311]/55 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#141311] via-transparent to-black/5" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 sm:pt-40 lg:pt-48 pb-20 w-full flex-1 flex flex-col justify-center">
        <div className="max-w-3xl space-y-7 text-white">
          {/* Top Pill / Badge */}
          <div ref={badgeRef} className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-xs sm:text-sm font-medium tracking-wide text-white/95">
            <span className="w-2 h-2 rounded-full bg-[#C29D59] animate-pulse" />
            <span className="text-[#E8D4A8] font-semibold uppercase tracking-wider">Private Listings &amp; Architectural Estates</span>
          </div>

          {/* User-Friendly, Awwwards Luxury Editorial Headline */}
          <h1 ref={headlineRef} className="text-4xl sm:text-6xl lg:text-[76px] font-normal tracking-tight leading-[1.04] text-white">
            A modern way to <br className="hidden sm:block" />
            acquire <span className="font-serif italic font-light text-[#C29D59]">exceptional estates.</span>
          </h1>

          {/* Relatable Subtitle: What we do & Why choose us */}
          <p ref={subtitleRef} className="text-base sm:text-lg lg:text-xl text-white/85 font-normal leading-relaxed max-w-2xl">
            We advise discerning buyers, private investors, and sellers on the world&apos;s most distinguished residential architecture, confidential off-market estates, and high-yield property assets.
          </p>

          {/* Action Buttons */}
          <div ref={buttonsRef} className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="/properties"
              className="px-8 py-4 rounded-full text-xs sm:text-sm font-semibold bg-[#C29D59] hover:bg-[#D6B577] text-[#141311] transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-[1.02] cursor-pointer flex items-center gap-2 group"
            >
              <span>Explore Portfolio</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full text-xs sm:text-sm font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/30 backdrop-blur-md transition-all duration-300 group cursor-pointer"
            >
              <PhoneCall className="w-4 h-4 text-[#C29D59]" />
              <span>Book Private Advisory</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Horizontal Feature Ticker */}
      <div className="relative z-10 w-full border-t border-[#C29D59]/20 bg-[#141311]/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={tickerRef}
            className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/10 text-white/90 py-4 sm:py-5"
          >
            {/* 1. Smart Listings */}
            <div className="flex items-center gap-3 py-2 sm:py-0 px-2 sm:px-4">
              <Sparkles className="w-4 h-4 text-[#C29D59] shrink-0" />
              <div>
                <span className="text-xs sm:text-sm font-semibold tracking-tight block">Smart Listings</span>
                <span className="text-[10px] text-white/60 block hidden sm:block">Curated off-market residences</span>
              </div>
            </div>

            {/* 2. Architectural Excellence */}
            <div className="flex items-center gap-3 py-2 sm:py-0 px-2 sm:px-4">
              <Building2 className="w-4 h-4 text-[#C29D59] shrink-0" />
              <div>
                <span className="text-xs sm:text-sm font-semibold tracking-tight block">Architectural Excellence</span>
                <span className="text-[10px] text-white/60 block hidden sm:block">Signature luxury residences</span>
              </div>
            </div>

            {/* 3. High-Yield Growth */}
            <div className="flex items-center gap-3 py-2 sm:py-0 px-2 sm:px-4">
              <TrendingUp className="w-4 h-4 text-[#C29D59] shrink-0" />
              <div>
                <span className="text-xs sm:text-sm font-semibold tracking-tight block">Capital Growth</span>
                <span className="text-[10px] text-white/60 block hidden sm:block">Pre-vetted high-yield portfolios</span>
              </div>
            </div>

            {/* 4. Trusted Advisory */}
            <div className="flex items-center gap-3 py-2 sm:py-0 px-2 sm:px-4">
              <ShieldCheck className="w-4 h-4 text-[#C29D59] shrink-0" />
              <div>
                <span className="text-xs sm:text-sm font-semibold tracking-tight block">Discreet Advisory</span>
                <span className="text-[10px] text-[#C29D59] font-semibold block hidden sm:block">100% Confidential Representation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
