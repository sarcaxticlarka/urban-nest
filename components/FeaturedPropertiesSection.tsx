"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";
import { PROPERTIES } from "@/data/properties";
import PropertyCard from "@/components/PropertyCard";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function FeaturedPropertiesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

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

      // 2. Cards staggered lift
      if (gridRef.current) {
        gsap.fromTo(
          gridRef.current.children,
          { opacity: 0, y: 60, scale: 0.97 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.85,
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
    <section ref={sectionRef} id="properties" className="py-20 lg:py-28 bg-[#F7F6F2] text-[#181715]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Header Row (Screenshot 4 exact layout) */}
        <div ref={headerRef} className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end justify-between">
          {/* Left Title */}
          <div className="lg:col-span-7 space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#181715]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C29D59]" />
              <span>Properties</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#181715] leading-tight">
              Curated residences, <span className="font-serif italic font-light text-[#C29D59]">rare architecture</span>
            </h2>
          </div>

          {/* Right Subtitle & Link */}
          <div className="lg:col-span-5 lg:text-right space-y-3">
            <p className="text-sm sm:text-base text-[#6B665F] max-w-md lg:ml-auto">
              We present handpicked private architectural residences helping buyers explore, evaluate, and acquire exceptional properties across premier global enclaves.
            </p>
            <div>
              <Link
                href="/properties"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#181715] hover:text-[#C29D59] group"
              >
                <span>View all properties</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>

        {/* 6 Full-Bleed Property Cards (3x2 Grid, Screenshot 4 exact) */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {PROPERTIES.slice(0, 6).map((property, idx) => (
            <PropertyCard key={property.id} property={property} priority={idx < 3} />
          ))}
        </div>
      </div>
    </section>
  );
}
