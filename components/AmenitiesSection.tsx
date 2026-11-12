"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Waves, Dumbbell, Sparkles, Car, Wine, Trees } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const PHOTO_STRIP = [
  {
    title: "Collector Auto Gallery",
    image: "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Infinity Lap Pool",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Modern Architectural Villa",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Zen Courtyards",
    image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&w=1200&q=80",
  },
];

const AMENITY_ITEMS = [
  {
    icon: Waves,
    title: "Infinity Lap Pools",
    description: "Architectural cantilevered swimming pools engineered with temperature regulation and horizon water reflection basins.",
  },
  {
    icon: Dumbbell,
    title: "Private Wellness Suites",
    description: "State-of-the-art gym pavilions equipped with custom Technogym machines, Finnish saunas, and cold plunge therapy.",
  },
  {
    icon: Sparkles,
    title: "Architectural Pavilions",
    description: "Sculptural outdoor living spaces, shaded teak terraces, and curated alfresco culinary kitchens for private entertaining.",
  },
  {
    icon: Car,
    title: "Climate Auto Salons",
    description: "Subterranean multi-bay garages with EV fast-chargers, turntable platforms, and biometric security gates.",
  },
  {
    icon: Wine,
    title: "Sommelier Wine Vaults",
    description: "Bespoke wine tasting cellars, private library salons, and discreet meeting quarters for confidential business.",
  },
  {
    icon: Trees,
    title: "Sculptural Zen Gardens",
    description: "Master-landscaped grounds incorporating mature olive groves, reflective water basins, and native botanical design.",
  },
];

export default function AmenitiesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const stripRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

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

      // 2. Photo strip staggered reveal
      if (stripRef.current) {
        gsap.fromTo(
          stripRef.current.children,
          { opacity: 0, y: 40, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: stripRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      // 3. Amenity cards staggered lift
      if (cardsRef.current) {
        gsap.fromTo(
          cardsRef.current.children,
          { opacity: 0, y: 45 },
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            stagger: 0.08,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cardsRef.current,
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Header Row */}
        <div ref={headerRef} className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end justify-between">
          <div className="lg:col-span-7 space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#181715]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C29D59]" />
              <span>Amenities &amp; Lifestyle</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#181715] leading-tight">
              Curated spaces for <span className="font-serif italic font-light text-[#C29D59]">extraordinary living</span>
            </h2>
          </div>

          <div className="lg:col-span-5 lg:text-right">
            <p className="text-sm sm:text-base text-[#6B665F] max-w-md lg:ml-auto">
              Every residence in our portfolio is selected for exceptional architectural appointments, private wellness amenities, and serene leisure spaces.
            </p>
          </div>
        </div>

        {/* Top 4-Photo Strip (Authentic Real Architecture) */}
        <div ref={stripRef} className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {PHOTO_STRIP.map((photo, idx) => (
            <div
              key={idx}
              className="relative aspect-4/5 rounded-3xl overflow-hidden shadow-sm border border-black/8 group"
            >
              <Image
                src={photo.image}
                alt={photo.title}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-106"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              <div className="absolute bottom-4 left-4 right-4 z-10">
                <span className="text-xs font-medium text-white/90 drop-shadow-sm">
                  {photo.title}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* 6 Amenities Cards Grid (Refined Minimalist Luxury) */}
        <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {AMENITY_ITEMS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-8 border border-black/8 shadow-sm space-y-4 hover:shadow-xl hover:border-[#C29D59]/40 transition-all duration-300 group"
              >
                {/* Refined Gold Minimalist Icon Container */}
                <div className="w-12 h-12 rounded-2xl bg-[#181715]/5 flex items-center justify-center text-[#181715] group-hover:bg-[#181715] group-hover:text-[#C29D59] transition-all duration-300">
                  <Icon className="w-5 h-5 transition-transform group-hover:scale-110" />
                </div>

                {/* Title & Description */}
                <div className="space-y-2">
                  <h3 className="text-xl font-bold tracking-tight text-[#181715] group-hover:text-[#C29D59] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6B665F] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
