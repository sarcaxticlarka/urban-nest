"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Star, ArrowLeft, ArrowRight } from "lucide-react";
import { TESTIMONIALS } from "@/data/siteData";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const mainCardRef = useRef<HTMLDivElement>(null);
  const bottomGridRef = useRef<HTMLDivElement>(null);

  const prev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const featured = TESTIMONIALS[currentIndex];
  const others = TESTIMONIALS.filter((_, idx) => idx !== currentIndex);

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

      // 2. Main card reveal
      gsap.fromTo(
        mainCardRef.current,
        { opacity: 0, y: 45, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: mainCardRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      // 3. Bottom cards reveal
      if (bottomGridRef.current) {
        gsap.fromTo(
          bottomGridRef.current.children,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: bottomGridRef.current,
              start: "top 85%",
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Header Row (Screenshot 8 exact layout) */}
        <div ref={headerRef} className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end justify-between">
          <div className="lg:col-span-7 space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#181715]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C29D59]" />
              <span>Testimonials</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#181715] leading-tight">
              Client voices, <span className="font-serif italic font-light text-[#C29D59]">verified trust</span>
            </h2>
          </div>

          <div className="lg:col-span-5 lg:text-right">
            <p className="text-sm sm:text-base text-[#6B665F] max-w-md lg:ml-auto">
              We share verified feedback from family offices, founders, and private collectors highlighting discretion, advisory rigor, and successful property acquisitions worldwide.
            </p>
          </div>
        </div>

        {/* Featured Big Card (Screenshot 8 exact layout) */}
        <div 
          ref={mainCardRef}
          className="bg-white rounded-3xl p-6 sm:p-10 border border-black/8 shadow-sm"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Left Client Portrait Image */}
            <div className="md:col-span-5 relative aspect-square rounded-2xl overflow-hidden bg-black/5 border border-black/8">
              <Image
                src={featured.avatar}
                alt={featured.name}
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
              />
            </div>

            {/* Right Testimonial Content */}
            <div className="md:col-span-7 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-[#C29D59]">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < featured.rating
                          ? "fill-[#C29D59] text-[#C29D59]"
                          : "fill-none text-black/20"
                      }`}
                    />
                  ))}
                </div>

                {/* Big Quote */}
                <blockquote className="text-base sm:text-lg lg:text-xl font-normal text-[#181715] leading-relaxed">
                  &ldquo;{featured.quote}&rdquo;
                </blockquote>
              </div>

              {/* Author and Navigation Arrow Buttons */}
              <div className="pt-4 flex items-center justify-between border-t border-black/6">
                <div>
                  <h4 className="font-bold text-base text-[#181715] capitalize">
                    {featured.name}
                  </h4>
                  <p className="text-xs text-[#6B665F] capitalize">
                    {featured.role} • {featured.location}
                  </p>
                </div>

                {/* Circle Navigation Arrows */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={prev}
                    aria-label="Previous testimonial"
                    className="w-10 h-10 rounded-full border border-black/15 flex items-center justify-center text-[#181715] hover:bg-[#181715] hover:text-[#C29D59] transition-colors cursor-pointer"
                  >
                    <ArrowLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={next}
                    aria-label="Next testimonial"
                    className="w-10 h-10 rounded-full border border-black/15 flex items-center justify-center text-[#181715] hover:bg-[#181715] hover:text-[#C29D59] transition-colors cursor-pointer"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Row of 3 Preview Testimonial Cards */}
        <div ref={bottomGridRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {others.slice(0, 3).map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-black/8 shadow-2xs flex flex-col justify-between space-y-6 hover:shadow-sm transition-shadow"
            >
              <div className="space-y-3">
                {/* Rating stars */}
                <div className="flex items-center gap-1 text-[#C29D59]">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3.5 h-3.5 ${
                        i < item.rating
                          ? "fill-[#C29D59] text-[#C29D59]"
                          : "fill-none text-black/20"
                      }`}
                    />
                  ))}
                </div>

                {/* Quote snippet */}
                <p className="text-xs sm:text-sm text-[#181715] leading-relaxed line-clamp-3">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Author info */}
              <div className="flex items-center gap-3 pt-2">
                <div className="relative w-8 h-8 rounded-full overflow-hidden border border-black/10 shrink-0">
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h5 className="font-semibold text-xs text-[#181715] capitalize">
                    {item.name}
                  </h5>
                  <p className="text-[10px] text-[#6B665F] capitalize">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
