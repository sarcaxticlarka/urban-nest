"use client";

import { useState } from "react";
import Image from "next/image";
import { Property } from "@/data/properties";
import { Calendar, CheckCircle2, Phone, Mail, User, ShieldCheck } from "lucide-react";

interface Props {
  property: Property;
}

export default function PropertyDetailClient({ property }: Props) {
  const [activeImage, setActiveImage] = useState(property.gallery[0] || property.image);
  const [isBooked, setIsBooked] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    preferredDate: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsBooked(true);
  };

  return (
    <div className="space-y-8">
      {/* Main Image Gallery */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* Large Main Feature Photo */}
        <div className="lg:col-span-9 relative aspect-16/10 rounded-3xl overflow-hidden bg-black/5 border border-black/8 shadow-md">
          <Image
            src={activeImage}
            alt={property.title}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 75vw"
            className="object-cover transition-all duration-500"
          />
        </div>

        {/* Gallery Thumbnails List */}
        <div className="lg:col-span-3 flex lg:flex-col gap-3 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
          {property.gallery.map((imgUrl, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setActiveImage(imgUrl)}
              className={`relative aspect-16/10 w-28 lg:w-full rounded-2xl overflow-hidden border transition-all duration-200 shrink-0 ${
                activeImage === imgUrl
                  ? "border-[#111111] ring-2 ring-black/20 scale-[0.98]"
                  : "border-black/10 opacity-75 hover:opacity-100"
              }`}
            >
              <Image
                src={imgUrl}
                alt={`${property.title} preview ${idx + 1}`}
                fill
                sizes="(max-width: 1024px) 120px, 25vw"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Booking Form Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-black/8 shadow-sm">
        <div className="max-w-3xl space-y-6">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-[#C29D59] font-bold block">
              Private Concierge
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#181715]">
              Schedule A Private Viewing &amp; Consultation
            </h3>
            <p className="text-xs sm:text-sm text-[#6B665F] leading-relaxed">
              Experience {property.title} with an exclusive private walkthrough guided by {property.agent.name}.
            </p>
          </div>

          {isBooked ? (
            <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 space-y-2 animate-in fade-in duration-300">
              <div className="flex items-center gap-2 font-bold text-base">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                <span>Tour Request Received!</span>
              </div>
              <p className="text-xs leading-relaxed text-emerald-800">
                Thank you, <strong>{formData.name || "Client"}</strong>. Our luxury advisor <strong>{property.agent.name}</strong> will contact you via email ({formData.email}) or phone ({formData.phone}) within 2 hours to confirm your private itinerary.
              </p>
              <button
                type="button"
                onClick={() => setIsBooked(false)}
                className="text-xs font-bold text-emerald-900 underline pt-1 cursor-pointer"
              >
                Submit another request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-[#181715] flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-[#6B665F]" /> Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Eleanor Vance"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-black/3 border border-black/8 text-xs text-[#181715] placeholder-[#808080] focus:outline-hidden focus:ring-1 focus:ring-[#181715]"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-[#181715] flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-[#6B665F]" /> Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="e.g. eleanor@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-black/3 border border-black/8 text-xs text-[#181715] placeholder-[#808080] focus:outline-hidden focus:ring-1 focus:ring-[#181715]"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-[#181715] flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-[#6B665F]" /> Phone Number
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. +1 (555) 019-2834"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-black/3 border border-black/8 text-xs text-[#181715] placeholder-[#808080] focus:outline-hidden focus:ring-1 focus:ring-[#181715]"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-[#181715] flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#6B665F]" /> Preferred Viewing Date
                </label>
                <input
                  type="date"
                  required
                  value={formData.preferredDate}
                  onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-black/3 border border-black/8 text-xs text-[#181715] focus:outline-hidden focus:ring-1 focus:ring-[#181715]"
                />
              </div>

              <div className="sm:col-span-2 space-y-1">
                <label className="text-xs font-semibold text-[#181715]">
                  Personal Inquiries or Special Requirements
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us about your timeline, investment objectives, or specific questions..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-black/3 border border-black/8 text-xs text-[#181715] placeholder-[#808080] focus:outline-hidden focus:ring-1 focus:ring-[#181715]"
                />
              </div>

              <div className="sm:col-span-2 pt-2 flex items-center justify-between gap-4">
                <span className="text-[11px] text-[#6B665F] flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#C29D59]" />
                  Your information is protected by strict non-disclosure.
                </span>

                <button
                  type="submit"
                  className="px-8 py-3.5 rounded-full bg-[#181715] text-[#C29D59] text-xs font-semibold hover:bg-black transition-colors shadow-md cursor-pointer hover:scale-[1.01]"
                >
                  Book A Property Tour
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

