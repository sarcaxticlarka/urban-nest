"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";
import { BLOGS } from "@/data/blogs";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function BlogSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const featuredRef = useRef<HTMLAnchorElement>(null);
  const stackRef = useRef<HTMLDivElement>(null);

  const featured = BLOGS[0];
  const sideArticles = BLOGS.slice(1, 4);

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

      // 2. Featured card reveal
      gsap.fromTo(
        featuredRef.current,
        { opacity: 0, y: 45, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: featuredRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      // 3. Stacked cards reveal
      if (stackRef.current) {
        gsap.fromTo(
          stackRef.current.children,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: stackRef.current,
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
              <span>Private Journal</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#181715] leading-tight">
              The Private Journal, <span className="font-serif italic font-light text-[#C29D59]">market insights</span>
            </h2>
          </div>

          <div className="lg:col-span-5 lg:text-right space-y-3">
            <p className="text-sm sm:text-base text-[#6B665F] max-w-md lg:ml-auto">
              We publish proprietary intelligence on global architecture, prime yields, and macro trends shaping luxury asset allocation.
            </p>
            <div>
              <Link
                href="/blogs"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#181715] hover:text-[#C29D59] group"
              >
                <span>Read All Insights</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>

        {/* 2-Column Asymmetric Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Left Column: 1 Large Featured Photo Card */}
          <Link
            ref={featuredRef}
            href={`/blogs/${featured.slug}`}
            className="lg:col-span-6 relative aspect-4/3 sm:aspect-square rounded-3xl overflow-hidden shadow-sm border border-black/8 group flex flex-col justify-end"
          >
            <Image
              src={featured.image}
              alt={featured.title}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Dark gradient for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

            {/* Bottom Content */}
            <div className="relative z-10 p-6 sm:p-8 flex items-end justify-between gap-4 text-white">
              <div className="space-y-2">
                <span className="text-xs text-white/75 font-medium block">
                  {featured.date} &nbsp;•&nbsp; {featured.readTime}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white leading-snug group-hover:text-[#C29D59] transition-colors">
                  {featured.title}
                </h3>
              </div>

              {/* Round Arrow Button */}
              <div className="w-10 h-10 rounded-full bg-white text-[#181715] flex items-center justify-center shrink-0 shadow-md transition-transform group-hover:scale-110">
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </Link>

          {/* Right Column: 3 Stacked Horizontal Cards */}
          <div ref={stackRef} className="lg:col-span-6 flex flex-col gap-4 sm:gap-6 justify-between">
            {sideArticles.map((article) => (
              <Link
                key={article.id}
                href={`/blogs/${article.slug}`}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-black/8 shadow-2xs hover:shadow-md transition-all flex items-center justify-between gap-6 group flex-1"
              >
                <div className="space-y-2">
                  <span className="text-xs text-[#8c8c8c] font-medium block">
                    {article.date} &nbsp;•&nbsp; {article.readTime}
                  </span>
                  <h4 className="text-base sm:text-lg font-bold tracking-tight text-[#181715] group-hover:text-[#C29D59] transition-colors leading-snug">
                    {article.title}
                  </h4>
                </div>

                {/* Round Arrow Button */}
                <div className="w-9 h-9 rounded-full border border-black/15 flex items-center justify-center text-[#181715] group-hover:bg-[#181715] group-hover:text-white shrink-0 transition-colors">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
