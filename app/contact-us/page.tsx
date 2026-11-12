"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FaqSection from "@/components/FaqSection";
import CtaBanner from "@/components/CtaBanner";
import { 
  Mail, 
  Phone, 
  MapPin, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  Send,
  Clock,
  Globe2
} from "lucide-react";

export default function ContactUsPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    phone: "",
    propertyType: "Residential Estates",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F6F2] text-[#181715]">
      <Navbar />

      <main className="flex-1 pt-28 pb-16 lg:pt-36 lg:pb-24 space-y-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Header */}
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#181715]/5 text-xs font-semibold uppercase tracking-wider text-[#181715]">
              <Sparkles className="w-3.5 h-3.5 text-[#C29D59]" />
              <span>Private Advisory</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-[#181715] leading-[1.08]">
              Connect with our <span className="font-serif italic font-light text-[#C29D59]">private client advisory</span>
            </h1>

            <p className="text-base sm:text-lg text-[#6B665F] leading-relaxed">
              Connect with senior partners for confidential off-market acquisitions, estate divestments, and high-yield property portfolio mandates worldwide.
            </p>
          </div>

          {/* Form and Contact Information Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Contact Details & Highlights */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white rounded-3xl p-8 border border-black/8 space-y-6 shadow-xs">
                <div className="space-y-1">
                  <span className="text-xs uppercase tracking-widest text-[#C29D59] font-bold">
                    Direct Partner Desk
                  </span>
                  <h3 className="text-2xl font-bold tracking-tight text-[#181715]">
                    Global Headquarters &amp; Salons
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-[#6B665F] leading-relaxed">
                  Have confidential inquiries regarding private portfolio mandates, off-market estates, or sovereign investments? Our senior partners operate with strict fiduciaries and complete non-disclosure discretion.
                </p>

                <div className="space-y-4 pt-2 border-t border-black/8">
                  {/* Email */}
                  <a
                    href="mailto:advisory@urbannest.com"
                    className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#181715]/3 hover:bg-[#181715]/7 transition-colors text-[#181715] group"
                  >
                    <div className="w-11 h-11 rounded-xl bg-[#181715] text-[#C29D59] flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] text-[#8E8880] block font-medium">Confidential Inquiries</span>
                      <span className="text-xs sm:text-sm font-bold group-hover:text-[#C29D59] transition-colors">
                        advisory@urbannest.com
                      </span>
                    </div>
                  </a>

                  {/* Phone */}
                  <a
                    href="tel:+18005550199"
                    className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#181715]/3 hover:bg-[#181715]/7 transition-colors text-[#181715] group"
                  >
                    <div className="w-11 h-11 rounded-xl bg-[#181715] text-[#C29D59] flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] text-[#8E8880] block font-medium">Global Partner Desk</span>
                      <span className="text-xs sm:text-sm font-bold group-hover:text-[#C29D59] transition-colors">
                        +1 (800) 555-0199 / +44 20 7946 0912
                      </span>
                    </div>
                  </a>

                  {/* Prime Office Locations */}
                  <div className="space-y-2 p-3.5 rounded-2xl bg-[#181715]/3 text-[#181715]">
                    <div className="flex items-center gap-2 text-xs font-bold text-[#C29D59] uppercase tracking-wider">
                      <Globe2 className="w-4 h-4" />
                      <span>International Offices</span>
                    </div>
                    <ul className="text-xs text-[#6B665F] space-y-1.5 pt-1">
                      <li>• London — 18 Mount Street, Mayfair</li>
                      <li>• Dubai — DIFC Gate Village, Level 4</li>
                      <li>• New York — 767 Fifth Avenue, Midtown</li>
                      <li>• Zurich — Bahnhofstrasse 24</li>
                    </ul>
                  </div>

                  {/* Hours */}
                  <div className="flex items-center gap-3 px-3.5 py-2 text-xs text-[#8E8880]">
                    <Clock className="w-4 h-4 text-[#C29D59]" />
                    <span>Private Client Hours: 24/7 By Appointment</span>
                  </div>
                </div>
              </div>

              {/* 3 Pillars */}
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-white p-4 rounded-2xl border border-black/8 text-center space-y-1 shadow-2xs">
                  <ShieldCheck className="w-4 h-4 text-[#C29D59] mx-auto" />
                  <span className="text-xs font-bold text-[#181715] block">Confidential</span>
                  <p className="text-[10px] text-[#8E8880]">Multi-party NDA</p>
                </div>
                <div className="bg-white p-4 rounded-2xl border border-black/8 text-center space-y-1 shadow-2xs">
                  <span className="text-sm">💎</span>
                  <span className="text-xs font-bold text-[#181715] block">Prime Estates</span>
                  <p className="text-[10px] text-[#8E8880]">Off-Market Access</p>
                </div>
                <div className="bg-white p-4 rounded-2xl border border-black/8 text-center space-y-1 shadow-2xs">
                  <span className="text-sm">📈</span>
                  <span className="text-xs font-bold text-[#181715] block">High Yield</span>
                  <p className="text-[10px] text-[#8E8880]">Capital Advisory</p>
                </div>
              </div>
            </div>

            {/* Right Contact Form */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-black/8 shadow-xs">
              {submitted ? (
                <div className="p-8 rounded-2xl bg-[#181715]/5 border border-[#C29D59]/30 text-[#181715] space-y-4 text-center">
                  <div className="w-12 h-12 rounded-full bg-[#181715] text-[#C29D59] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold">Inquiry Received Confidentially</h3>
                  <p className="text-xs sm:text-sm text-[#6B665F] max-w-md mx-auto leading-relaxed">
                    Thank you, <strong>{formData.fullName}</strong>. A managing partner will review your inquiry regarding <strong>{formData.subject || formData.propertyType}</strong> and reach out via phone ({formData.phone}) or secure email ({formData.email}) within 2 business hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ fullName: "", email: "", subject: "", phone: "", propertyType: "Residential Estates", message: "" });
                    }}
                    className="px-6 py-2.5 rounded-full bg-[#181715] text-[#C29D59] text-xs font-semibold cursor-pointer hover:bg-black transition-colors"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-1 pb-2">
                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#181715]">
                      Schedule A Private Consultation
                    </h3>
                    <p className="text-xs text-[#8E8880]">
                      Please share your requirements. All communications are bound by strict non-disclosure obligations.
                    </p>
                  </div>

                  {/* Property Interest Pill Toggle */}
                  <div className="space-y-1.5 pb-2">
                    <label className="text-[11px] font-semibold text-[#8E8880] uppercase tracking-wider">
                      Area of Interest:
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {["Residential Estates", "Commercial Assets", "Off-Market Mandates", "Capital Advisory"].map((cat) => (
                        <button
                          key={cat}
                          type="button"
                          onClick={() => setFormData({ ...formData, propertyType: cat })}
                          className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                            formData.propertyType === cat
                              ? "bg-[#181715] text-[#C29D59] shadow-xs"
                              : "bg-black/4 text-[#6B665F] hover:bg-black/8 hover:text-[#181715]"
                          }`}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-[#181715]">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Harrison Vance"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-black/3 border border-black/8 text-xs text-[#181715] placeholder-[#8E8880] focus:outline-hidden focus:ring-1 focus:ring-[#C29D59]"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-[#181715]">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="harrison@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-black/3 border border-black/8 text-xs text-[#181715] placeholder-[#8E8880] focus:outline-hidden focus:ring-1 focus:ring-[#C29D59]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-[#181715]">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+1 (555) 019-2834"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-black/3 border border-black/8 text-xs text-[#181715] placeholder-[#8E8880] focus:outline-hidden focus:ring-1 focus:ring-[#C29D59]"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-[#181715]">
                        Preferred Enclave / City
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Zurich, London, Beverly Hills, Dubai"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-black/3 border border-black/8 text-xs text-[#181715] placeholder-[#8E8880] focus:outline-hidden focus:ring-1 focus:ring-[#C29D59]"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-[#181715]">
                      Acquisition or Divestment Brief *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Please outline your target square footage, architectural preferences, timeline, and investment parameters..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black/3 border border-black/8 text-xs text-[#181715] placeholder-[#8E8880] focus:outline-hidden focus:ring-1 focus:ring-[#C29D59]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-full bg-[#181715] hover:bg-black text-[#C29D59] text-xs sm:text-sm font-semibold transition-all duration-300 shadow-md hover:scale-[1.01] cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>Request Confidential Consultation</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        <FaqSection />
        <CtaBanner />
      </main>

      <Footer />
    </div>
  );
}
