"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, ArrowRight, MapPin } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface Destination {
  city: string;
  country: string;
  yoy: string;
  image: string;
  href: string;
}

const DESTINATIONS: Destination[] = [
  {
    city: "Zurich",
    country: "Switzerland",
    yoy: "+18% YOY",
    image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1200&q=80",
    href: "/properties?location=Zurich",
  },
  {
    city: "Dubai",
    country: "United Arab Emirates",
    yoy: "+11% YOY",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80",
    href: "/properties?location=Dubai",
  },
  {
    city: "London",
    country: "United Kingdom",
    yoy: "+14% YOY",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80",
    href: "/properties?location=London",
  },
  {
    city: "Beverly Hills",
    country: "United States",
    yoy: "+9% YOY",
    image: "https://images.unsplash.com/photo-1580655653885-65763b2597d0?auto=format&fit=crop&w=1200&q=80",
    href: "/properties?location=Beverly+Hills",
  },
];

const PREMIER_ENCLAVES = [
  {
    name: "Beverly Hills, CA",
    subtitle: "Golden Triangle Estates",
    desc: "Private gated sanctuaries and mid-century architectural estates.",
    properties: "18 Listings",
  },
  {
    name: "Malibu, CA",
    subtitle: "Pacific Coastline",
    desc: "Oceanfront architectural pavilions and private blufftop villas.",
    properties: "12 Listings",
  },
  {
    name: "Mayfair, London",
    subtitle: "Historic Prime Central",
    desc: "Restored Georgian mansions and private mews residences.",
    properties: "15 Listings",
  },
  {
    name: "DIFC & Palm, Dubai",
    subtitle: "Waterfront & Sky Living",
    desc: "High-spec penthouses and private beachfront resort estates.",
    properties: "24 Listings",
  },
  {
    name: "Aspen, CO",
    subtitle: "Alpine Masterpieces",
    desc: "Ski-in/ski-out timber pavilions with 360-degree mountain vistas.",
    properties: "9 Listings",
  },
];

export default function DestinationsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Header reveal
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current.children,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: headerRef.current,
              start: "top 85%",
            },
          }
        );
      }

      // 2. Cards staggered reveal with scale
      if (cardsRef.current) {
        const cards = cardsRef.current.children;
        gsap.fromTo(
          cards,
          { opacity: 0, y: 45, scale: 0.96 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.9,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 80%",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 sm:py-32 bg-[#F7F6F2] border-t border-[#181715]/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Top Header Section (Matching Caldren Reference) */}
        <div ref={headerRef} className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-2">
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C29D59] flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C29D59]" />
              Discover Premier Destinations
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#181715]">
              Four cities, <span className="font-serif italic font-light text-[#C29D59]">one standard</span>
            </h2>
          </div>

          <div className="max-w-md space-y-3">
            <p className="text-sm sm:text-base text-[#6B665F] font-normal leading-relaxed">
              We work where architecture, demand and quality of life align — each market led by a local URBANNEST advisor.
            </p>
            <div>
              <Link
                href="/properties"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#181715] hover:text-[#C29D59] transition-colors group"
              >
                <span>Explore locations</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>

        {/* 4 Tall Vertical Destination Cards (Exact Caldren Layout) */}
        <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {DESTINATIONS.map((dest) => (
            <Link
              key={dest.city}
              href={dest.href}
              className="group relative h-[480px] sm:h-[540px] rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col justify-between p-6 bg-[#141311]"
            >
              {/* Background Image with Zoom on Hover */}
              <Image
                src={dest.image}
                alt={`${dest.city}, ${dest.country}`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
              />

              {/* Sophisticated Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#141311]/90 via-[#141311]/20 to-black/40 group-hover:from-[#141311]/95 group-hover:via-[#141311]/35 transition-all duration-500" />

              {/* Top Row: YOY Pill Badge + Circular Arrow Button */}
              <div className="relative z-10 flex items-center justify-between">
                <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold text-white/95 bg-white/20 backdrop-blur-md border border-white/25 shadow-xs">
                  {dest.yoy}
                </span>

                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/25 flex items-center justify-center text-white transition-all duration-300 group-hover:bg-[#C29D59] group-hover:text-[#141311] group-hover:scale-110 shadow-xs">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              {/* Bottom Row: City & Country Details */}
              <div className="relative z-10 space-y-1">
                <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white group-hover:text-[#C29D59] transition-colors">
                  {dest.city}
                </h3>
                <p className="text-xs sm:text-sm text-white/75 font-normal tracking-wide">
                  {dest.country}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Subtle Dark Luxury Enclave Strip */}
        <div className="mt-16 rounded-3xl bg-[#141311] p-8 sm:p-10 lg:p-12 text-white border border-[#C29D59]/20 shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-white/10">
            <div>
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#C29D59] font-semibold block">
                Exclusive Enclaves
              </span>
              <h3 className="text-2xl sm:text-3xl font-normal tracking-tight text-white mt-1">
                Explore Prime <span className="font-serif italic font-light text-[#C29D59]">Micro-Markets</span>
              </h3>
            </div>
            <Link
              href="/properties"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#C29D59] hover:bg-[#D6B577] text-[#141311] text-xs sm:text-sm font-semibold transition-all duration-300 shadow-md hover:scale-[1.02] cursor-pointer"
            >
              <span>Explore All Locations</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 pt-8">
            {PREMIER_ENCLAVES.map((enclave) => (
              <Link
                key={enclave.name}
                href="/properties"
                className="group p-5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#C29D59]/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs text-[#C29D59]">
                    <MapPin className="w-3.5 h-3.5 shrink-0" />
                    <span className="font-semibold">{enclave.name}</span>
                  </div>
                  <p className="text-xs text-white/60 leading-relaxed">
                    {enclave.desc}
                  </p>
                </div>
                <div className="pt-4 flex items-center justify-between text-[11px] text-white/80 group-hover:text-[#C29D59] transition-colors">
                  <span className="font-medium">{enclave.properties}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
