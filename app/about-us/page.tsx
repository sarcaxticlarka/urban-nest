import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FaqSection from "@/components/FaqSection";
import CtaBanner from "@/components/CtaBanner";
import { AGENTS } from "@/data/siteData";
import { 
  Building2, 
  Sparkles, 
  ShieldCheck, 
  Award, 
  Globe2, 
  Users, 
  ArrowUpRight, 
  CheckCircle2 
} from "lucide-react";

export const metadata = {
  title: "About Us — Urbannest",
  description: "Learn about our vision, leadership advisory, global prime micro-markets reach, and fiduciary commitment to curating premier architectural residences worldwide."
};

export default function AboutPage() {
  const stats = [
    { value: "$4.8B+", label: "Transacted Volume", sub: "Verified private portfolio sales" },
    { value: "450+", label: "Prime Residences", sub: "Off-market & bespoke estates" },
    { value: "18+", label: "Global Micro-Markets", sub: "Zurich, Mayfair, Beverly Hills, Dubai" },
    { value: "99.4%", label: "Client Retainment", sub: "Generational family office trust" }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F6F2] text-[#181715]">
      <Navbar />

      <main className="flex-1 py-14 lg:py-20 space-y-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {/* Header */}
          <div className="max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#181715]/5 text-xs font-semibold uppercase tracking-wider text-[#181715]">
              <Sparkles className="w-3.5 h-3.5 text-[#C29D59]" />
              <span>About Urbannest</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-[#181715] leading-[1.08]">
              Your trusted partner in <span className="font-serif italic font-light text-[#C29D59]">architectural living</span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-[#6B665F] max-w-2xl leading-relaxed">
              We provide fiduciary real estate advisory, guiding private clients and family offices through prime property acquisitions with institutional rigor and bespoke discretion.
            </p>
          </div>

          {/* Mission, Vision & Goals 3 Column Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Mission */}
            <div className="bg-white rounded-3xl p-8 sm:p-9 border border-black/8 space-y-6 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="space-y-4">
                <span className="text-[11px] uppercase tracking-widest text-[#C29D59] font-bold">
                  Core Purpose
                </span>
                <h3 className="text-2xl font-bold tracking-tight text-[#181715]">
                  Our mission
                </h3>
                <p className="text-xs sm:text-sm text-[#6B665F] leading-relaxed">
                  We curate exceptional architectural properties, pairing buyers with extraordinary homes seamlessly. Our mission is to deliver discreet guidance, institutional valuation standards, and bespoke advisory tailored to generational wealth.
                </p>
              </div>
              <div className="pt-4 border-t border-black/6 flex items-center gap-2 text-xs font-semibold text-[#181715]">
                <CheckCircle2 className="w-4 h-4 text-[#C29D59]" />
                <span>Client-Centered Fiduciary Care</span>
              </div>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-3xl p-8 sm:p-9 border border-black/8 space-y-6 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="space-y-4">
                <span className="text-[11px] uppercase tracking-widest text-[#C29D59] font-bold">
                  Future Horizon
                </span>
                <h3 className="text-2xl font-bold tracking-tight text-[#181715]">
                  Our vision
                </h3>
                <p className="text-xs sm:text-sm text-[#6B665F] leading-relaxed">
                  To be the quintessential global private listings benchmark recognized for transparency, curatorial taste, and client satisfaction. We bridge prime international enclaves with high-touch, digital-first acquisition experiences.
                </p>
              </div>
              <div className="pt-4 border-t border-black/6 flex items-center gap-2 text-xs font-semibold text-[#181715]">
                <Globe2 className="w-4 h-4 text-[#C29D59]" />
                <span>Global Market Authority</span>
              </div>
            </div>

            {/* Goals */}
            <div className="bg-white rounded-3xl p-8 sm:p-9 border border-black/8 space-y-6 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="space-y-4">
                <span className="text-[11px] uppercase tracking-widest text-[#C29D59] font-bold">
                  Continuous Growth
                </span>
                <h3 className="text-2xl font-bold tracking-tight text-[#181715]">
                  Future standard
                </h3>
                <p className="text-xs sm:text-sm text-[#6B665F] leading-relaxed">
                  We expand our partner desks across Zurich, London Mayfair, Dubai, and Beverly Hills, deploying advanced spatial visualization to connect discerning patrons with world-class residential investments.
                </p>
              </div>
              <div className="pt-4 border-t border-black/6 flex items-center gap-2 text-xs font-semibold text-[#181715]">
                <Award className="w-4 h-4 text-[#C29D59]" />
                <span>Architectural Distinction</span>
              </div>
            </div>
          </div>

          {/* Numbers that reflect our great success */}
          <div className="bg-[#141311] text-white rounded-3xl p-8 sm:p-14 border border-[#C29D59]/20 space-y-10 shadow-xl">
            <div className="max-w-2xl space-y-2">
              <span className="text-xs uppercase tracking-widest text-[#C29D59] font-semibold">
                In Numbers
              </span>
              <h2 className="text-2xl sm:text-4xl font-normal tracking-tight text-white">
                Numbers that reflect our <span className="font-serif italic font-light text-[#C29D59]">measured impact</span>
              </h2>
              <p className="text-xs sm:text-sm text-[#8E8880]">
                We substantiate our reputation through tangible milestones reflecting discreet execution and international trust.
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-8 border-t border-white/10">
              {stats.map((s) => (
                <div key={s.label} className="space-y-2">
                  <span className="text-3xl sm:text-5xl font-bold tracking-tight text-[#C29D59] block">
                    {s.value}
                  </span>
                  <span className="text-sm font-semibold text-white block">
                    {s.label}
                  </span>
                  <span className="text-xs text-[#8E8880] block">
                    {s.sub}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* The Team Behind Your Property Success (Advisors) */}
          <div id="agents" className="space-y-10 scroll-mt-24">
            <div className="max-w-3xl space-y-3">
              <span className="inline-flex items-center px-3.5 py-1 rounded-full bg-[#181715]/5 text-xs font-semibold uppercase tracking-wider text-[#181715]">
                Private Advisors
              </span>
              <h2 className="text-3xl sm:text-5xl font-normal tracking-tight text-[#181715]">
                The team behind your <span className="font-serif italic font-light text-[#C29D59]">acquisition success</span>
              </h2>
              <p className="text-sm sm:text-base text-[#6B665F]">
                Our licensed senior partners provide specialized advisory across luxury residential enclaves and global prime markets.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {AGENTS.map((agent) => (
                <div
                  key={agent.name}
                  className="bg-white rounded-3xl p-5 border border-black/8 flex flex-col justify-between space-y-4 hover:shadow-xl transition-all group"
                >
                  <div className="space-y-4">
                    <div className="relative aspect-4/5 rounded-2xl overflow-hidden bg-black/5 border border-black/8">
                      <Image
                        src={agent.avatar}
                        alt={agent.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 25vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>

                    <div className="space-y-1">
                      <h3 className="text-lg font-bold text-[#181715]">
                        {agent.name}
                      </h3>
                      <p className="text-xs font-semibold text-[#C29D59]">
                        {agent.role}
                      </p>
                      <p className="text-[11px] text-[#6B665F]">
                        {agent.specialty}
                      </p>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-black/6 space-y-2.5 text-xs">
                    <div className="text-[11px] text-[#181715] font-semibold flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C29D59]" />
                      <span>{agent.propertiesSold}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <a
                        href={`tel:${agent.phone}`}
                        className="flex-1 py-2 text-center rounded-xl bg-[#181715]/5 hover:bg-[#181715] hover:text-[#C29D59] text-[#181715] transition-colors font-medium text-[11px]"
                      >
                        Call
                      </a>
                      <a
                        href={`mailto:${agent.email}`}
                        className="flex-1 py-2 text-center rounded-xl bg-[#181715]/5 hover:bg-[#181715] hover:text-[#C29D59] text-[#181715] transition-colors font-medium text-[11px]"
                      >
                        Email
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Join Our Team / Career Advisory Banner */}
          <div className="bg-[#141311] text-white rounded-3xl p-8 sm:p-14 flex flex-col md:flex-row items-center justify-between gap-8 border border-[#C29D59]/20 shadow-xl">
            <div className="space-y-4 max-w-xl">
              <span className="text-xs uppercase tracking-widest text-[#C29D59] font-bold block">
                Bespoke Real Estate Advisory
              </span>
              <h3 className="text-2xl sm:text-4xl font-normal tracking-tight leading-tight">
                Partner with our international desk and represent <span className="font-serif italic font-light text-[#C29D59]">iconic architectural estates</span>
              </h3>
              <div className="flex flex-wrap items-center gap-4 text-xs text-[#8E8880] pt-2">
                <span className="flex items-center gap-1"><span className="text-[#C29D59]">✓</span> Global network reach</span>
                <span className="flex items-center gap-1"><span className="text-[#C29D59]">✓</span> Off-market listings</span>
                <span className="flex items-center gap-1"><span className="text-[#C29D59]">✓</span> Institutional support</span>
              </div>
            </div>

            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#C29D59] text-[#181715] text-xs font-semibold hover:bg-white transition-colors shrink-0 shadow-md font-sans"
            >
              <span>Connect with us</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <FaqSection />
        <CtaBanner />
      </main>

      <Footer />
    </div>
  );
}
