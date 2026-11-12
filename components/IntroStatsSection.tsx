"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Building2, Users2, MapPin, Smile } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function IntroStatsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Text reveal on scroll
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      // 2. Bento grid staggered reveal
      if (gridRef.current) {
        gsap.fromTo(
          gridRef.current.children,
          { opacity: 0, y: 50, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: gridRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 lg:py-28 bg-[#F7F6F2] text-[#181715]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Top Header Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Label */}
          <div className="lg:col-span-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#181715]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C29D59]" />
            <span>Introduction</span>
          </div>

          {/* Right Main Editorial Statement */}
          <div className="lg:col-span-9">
            <h2
              ref={textRef}
              className="text-2xl sm:text-4xl lg:text-[40px] font-normal tracking-tight text-[#181715] leading-[1.3]"
            >
              We provide modern real estate solutions helping discerning buyers, private investors, and collectors acquire <span className="font-serif italic font-light text-[#C29D59]">rare residential and commercial properties</span> with trusted strategies, innovative advisory, seamless transaction experiences, and <span className="text-[#8c8c8c]">exceptional client support across all platforms.</span>
            </h2>
          </div>
        </div>

        {/* Bento Grid */}
        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Row 1, Box 1: 650+ Properties acquired */}
          <div className="bg-white rounded-3xl p-8 border border-black/8 shadow-sm flex flex-col justify-between min-h-[220px] sm:min-h-[260px] hover:shadow-md transition-shadow group">
            <div className="w-10 h-10 rounded-xl bg-[#181715]/5 flex items-center justify-center text-[#181715] group-hover:scale-110 transition-transform">
              <Building2 className="w-5 h-5 text-[#C29D59]" />
            </div>
            <div className="space-y-1">
              <span className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#181715] block">
                650+
              </span>
              <span className="text-xs sm:text-sm text-[#6B665F] font-medium block">
                Properties acquired globally
              </span>
            </div>
          </div>

          {/* Row 1, Box 2: 120+ Expert advisors */}
          <div className="bg-white rounded-3xl p-8 border border-black/8 shadow-sm flex flex-col justify-between min-h-[220px] sm:min-h-[260px] hover:shadow-md transition-shadow group">
            <div className="w-10 h-10 rounded-xl bg-[#181715]/5 flex items-center justify-center text-[#181715] group-hover:scale-110 transition-transform">
              <Users2 className="w-5 h-5 text-[#C29D59]" />
            </div>
            <div className="space-y-1">
              <span className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#181715] block">
                120+
              </span>
              <span className="text-xs sm:text-sm text-[#6B665F] font-medium block">
                Senior licensed partners
              </span>
            </div>
          </div>

          {/* Row 1, Box 3: Aerial Architecture Photo Card */}
          <div className="relative rounded-3xl overflow-hidden min-h-[220px] sm:min-h-[260px] border border-black/8 shadow-sm group">
            <Image
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80"
              alt="Urban masterplanned community"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          {/* Row 2, Box 4: Modern Architectural Pavilion */}
          <div className="relative rounded-3xl overflow-hidden min-h-[220px] sm:min-h-[260px] border border-black/8 shadow-sm group">
            <Image
              src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80"
              alt="Luxury architectural pavilion with pool"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          {/* Row 2, Box 5: 28+ Prime Enclaves */}
          <div className="bg-white rounded-3xl p-8 border border-black/8 shadow-sm flex flex-col justify-between min-h-[220px] sm:min-h-[260px] hover:shadow-md transition-shadow group">
            <div className="w-10 h-10 rounded-xl bg-[#181715]/5 flex items-center justify-center text-[#181715] group-hover:scale-110 transition-transform">
              <MapPin className="w-5 h-5 text-[#C29D59]" />
            </div>
            <div className="space-y-1">
              <span className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#181715] block">
                28+
              </span>
              <span className="text-xs sm:text-sm text-[#6B665F] font-medium block">
                Prime global enclaves
              </span>
            </div>
          </div>

          {/* Row 2, Box 6: 1500+ Happy clients */}
          <div className="bg-white rounded-3xl p-8 border border-black/8 shadow-sm flex flex-col justify-between min-h-[220px] sm:min-h-[260px] hover:shadow-md transition-shadow group">
            <div className="w-10 h-10 rounded-xl bg-[#181715]/5 flex items-center justify-center text-[#181715] group-hover:scale-110 transition-transform">
              <Smile className="w-5 h-5 text-[#C29D59]" />
            </div>
            <div className="space-y-1">
              <span className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#181715] block">
                1500+
              </span>
              <span className="text-xs sm:text-sm text-[#6B665F] font-medium block">
                Discerning private clients
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
