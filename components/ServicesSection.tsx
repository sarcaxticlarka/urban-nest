"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Header reveal
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      // 2. Left column cards reveal
      if (leftColRef.current) {
        gsap.fromTo(
          leftColRef.current.children,
          { opacity: 0, y: 45 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: leftColRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      // 3. Right column card reveal
      gsap.fromTo(
        rightColRef.current,
        { opacity: 0, y: 55 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: rightColRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="services" className="py-20 lg:py-28 bg-[#F7F6F2] text-[#181715]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Header Row */}
        <div ref={headerRef} className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end justify-between">
          <div className="lg:col-span-7 space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#181715]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C29D59]" />
              <span>Services</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#181715] leading-tight">
              Bespoke advisory for <span className="font-serif italic font-light text-[#C29D59]">buyers, sellers &amp; collectors</span>
            </h2>
          </div>

          <div className="lg:col-span-5 lg:text-right">
            <p className="text-sm sm:text-base text-[#6B665F] max-w-md lg:ml-auto">
              We provide fiduciary-level real estate advisory helping private clients acquire, divest, and optimize prime real estate holdings across premier global destinations.
            </p>
          </div>
        </div>

        {/* 2-Column Asymmetric Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {/* Left Column: 2 Stacked Cards */}
          <div ref={leftColRef} className="flex flex-col gap-6 lg:gap-8 justify-between">
            {/* Card 1: Property Buying */}
            <div className="relative aspect-16/10 rounded-3xl overflow-hidden shadow-sm border border-black/8 group">
              <Image
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80"
                alt="Property buying consultation"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />

              {/* Floating Bottom Card */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 bg-white rounded-2xl p-5 sm:p-6 shadow-xl border border-black/8 space-y-1.5">
                <h3 className="text-lg sm:text-xl font-bold tracking-tight text-[#181715]">
                  Discreet acquisitions
                </h3>
                <p className="text-xs sm:text-sm text-[#6B665F] leading-relaxed">
                  We represent private buyers with institutional rigor, granting confidential access to off-market architectural estates.
                </p>
              </div>
            </div>

            {/* Card 2: Property Selling */}
            <div className="relative aspect-16/10 rounded-3xl overflow-hidden shadow-sm border border-black/8 group">
              <Image
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80"
                alt="Property selling showcase"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />

              {/* Floating Bottom Card */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 bg-white rounded-2xl p-5 sm:p-6 shadow-xl border border-black/8 space-y-1.5">
                <h3 className="text-lg sm:text-xl font-bold tracking-tight text-[#181715]">
                  Global estate divestment
                </h3>
                <p className="text-xs sm:text-sm text-[#6B665F] leading-relaxed">
                  We craft targeted, confidential divestment campaigns for iconic residences placed directly before vetted family offices.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: 1 Tall Vertical Card (Property Management) */}
          <div 
            ref={rightColRef}
            className="relative min-h-[480px] lg:min-h-[auto] rounded-3xl overflow-hidden shadow-sm border border-black/8 group flex flex-col justify-end"
          >
            <Image
              src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80"
              alt="Professional property asset management"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />

            {/* Floating Bottom Card */}
            <div className="relative z-10 m-4 sm:m-6 bg-white rounded-2xl p-5 sm:p-6 shadow-xl border border-black/8 space-y-1.5">
              <h3 className="text-lg sm:text-xl font-bold tracking-tight text-[#181715]">
                Portfolio capital advisory
              </h3>
              <p className="text-xs sm:text-sm text-[#6B665F] leading-relaxed">
                Strategic advice for sovereign funds, private trusts, and family offices on prime yields and trophy real estate holdings.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
