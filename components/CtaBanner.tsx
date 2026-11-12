"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Star, ArrowRight } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function CtaBanner() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Banner zoom reveal
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, scale: 0.96, y: 30 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      // 2. Giant title reveal
      if (titleRef.current) {
        gsap.fromTo(
          titleRef.current,
          { opacity: 0, y: 40, letterSpacing: "0.2em" },
          {
            opacity: 1,
            y: 0,
            letterSpacing: "0.04em",
            duration: 1.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: titleRef.current,
              start: "top 80%",
            },
          }
        );
      }

      // 3. Floating bar reveal
      if (barRef.current) {
        gsap.fromTo(
          barRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: barRef.current,
              start: "top 85%",
            },
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-16 lg:py-24 bg-[#F7F6F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {/* Full-Bleed Architectural Banner (Matching Oppenheim Screenshot 9) */}
        <div 
          ref={cardRef}
          className="relative min-h-[440px] sm:min-h-[520px] lg:min-h-[580px] rounded-3xl overflow-hidden shadow-2xl border border-black/8 group flex flex-col justify-end"
        >
          {/* Authentic Architectural Estate Background */}
          <Image
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=85"
            alt="Urbannest Architectural Estate"
            fill
            sizes="100vw"
            className="object-cover transition-transform duration-1000 ease-out group-hover:scale-104"
          />

          {/* Vignette Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/15" />

          {/* Giant Centered Brand Typography (Oppenheim Style) */}
          <div className="relative z-10 w-full text-center px-4 mb-4 sm:mb-8 pointer-events-none">
            <h2
              ref={titleRef}
              className="text-4xl sm:text-6xl md:text-8xl lg:text-[110px] font-bold text-white tracking-[0.03em] uppercase drop-shadow-xl select-none break-keep"
            >
              URBANNEST
            </h2>
          </div>

          {/* Floating Glass Bottom Bar (Exact Screenshot 9 Layout) */}
          <div 
            ref={barRef}
            className="relative z-10 mx-4 sm:mx-8 mb-6 sm:mb-8 p-4 sm:p-6 rounded-2xl bg-white/95 backdrop-blur-md border border-white/40 shadow-xl grid grid-cols-1 md:grid-cols-12 gap-4 items-center justify-between"
          >
            {/* Left: Value Proposition */}
            <div className="md:col-span-4 space-y-1">
              <span className="text-xs uppercase tracking-wider text-[#C29D59] font-bold block">
                Discreet Advisory
              </span>
              <p className="text-sm sm:text-base font-semibold text-[#181715] leading-snug">
                Your Trusted Partner for Luxury Real Estate
              </p>
            </div>

            {/* Center: Get in Touch Button */}
            <div className="md:col-span-4 flex justify-center">
              <Link
                href="/contact-us"
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#181715] hover:bg-black text-[#C29D59] text-xs sm:text-sm font-semibold transition-all duration-300 shadow-md hover:scale-[1.02] text-center"
              >
                Get in Touch
              </Link>
            </div>

            {/* Right: Advisor Avatar Stack & Reviews */}
            <div className="md:col-span-4 flex items-center justify-start md:justify-end gap-3">
              <div className="flex -space-x-2 shrink-0">
                <div className="relative w-8 h-8 rounded-full ring-2 ring-white overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=100&q=80"
                    alt="Advisor"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative w-8 h-8 rounded-full ring-2 ring-white overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&q=80"
                    alt="Advisor"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative w-8 h-8 rounded-full ring-2 ring-white overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80"
                    alt="Advisor"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative w-8 h-8 rounded-full ring-2 ring-white overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80"
                    alt="Advisor"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="space-y-0.5">
                <div className="flex items-center gap-0.5 text-[#C29D59]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#C29D59] text-[#C29D59]" />
                  ))}
                </div>
                <p className="text-[11px] text-[#6B665F] font-medium leading-tight">
                  Top-Rated Based on 1,500+ Reviews
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
