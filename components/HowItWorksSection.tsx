"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HOW_IT_WORKS } from "@/data/siteData";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const bannerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const step = HOW_IT_WORKS[activeStep];

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

      // 2. Banner zoom in on scroll
      gsap.fromTo(
        bannerRef.current,
        { opacity: 0, scale: 0.96 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: bannerRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      // 3. Floating card slide up
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: bannerRef.current,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 lg:py-28 bg-[#F7F6F2] text-[#181715]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div ref={headerRef} className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end justify-between">
          <div className="lg:col-span-7 space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#181715]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C29D59]" />
              <span>How it works</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#181715] leading-tight">
              Acquire rare properties, <span className="font-serif italic font-light text-[#C29D59]">without friction</span>
            </h2>
          </div>

          <div className="lg:col-span-5 lg:text-right">
            <p className="text-sm sm:text-base text-[#6B665F] max-w-md lg:ml-auto">
              We guide you through each strategic milestone, ensuring seamless access to exceptional global estates.
            </p>
          </div>
        </div>

        {/* Panoramic Landscape with Floating Card at Bottom-Left */}
        <div 
          ref={bannerRef}
          className="relative aspect-16/9 sm:aspect-21/10 rounded-3xl overflow-hidden shadow-md border border-black/8 group"
        >
          {/* Panoramic Image */}
          <Image
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85"
            alt="Find and buy your property without hassle"
            fill
            sizes="100vw"
            className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
          />

          {/* Subtle gradient vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/10" />

          {/* Floating White Card */}
          <div 
            ref={cardRef}
            className="absolute bottom-4 left-4 right-4 sm:right-auto sm:bottom-8 sm:left-8 max-w-md sm:max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-black/8 space-y-5 animate-in fade-in duration-300 backdrop-blur-xs"
          >
            {/* Step Tabs Row */}
            <div className="flex items-center border-b border-black/10 pb-3 gap-6 sm:gap-8">
              {HOW_IT_WORKS.map((s, idx) => (
                <button
                  key={s.number}
                  type="button"
                  onClick={() => setActiveStep(idx)}
                  className={`text-xs sm:text-sm font-semibold pb-2 -mb-3 transition-colors relative cursor-pointer ${
                    activeStep === idx
                      ? "text-[#181715] border-b-2 border-[#C29D59]"
                      : "text-[#8c8c8c] hover:text-[#181715]"
                  }`}
                >
                  Step {s.number}
                </button>
              ))}
            </div>

            {/* Step Content */}
            <div className="space-y-3">
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#181715]">
                {step.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#6B665F] leading-relaxed">
                {step.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
