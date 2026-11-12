import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PropertyCard from "@/components/PropertyCard";
import PropertyDetailClient from "@/components/PropertyDetailClient";
import { PROPERTIES } from "@/data/properties";
import { 
  ArrowLeft, 
  MapPin, 
  Bed, 
  Bath, 
  Square, 
  Car, 
  Calendar, 
  Layers, 
  ShieldCheck, 
  Sparkles 
} from "lucide-react";

export function generateStaticParams() {
  return PROPERTIES.map((property) => ({
    slug: property.slug,
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function PropertyDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const property = PROPERTIES.find((p) => p.slug === slug);

  if (!property) {
    notFound();
  }

  const similarProperties = PROPERTIES.filter((p) => p.slug !== slug).slice(0, 3);
  const currentIndex = PROPERTIES.findIndex((p) => p.slug === slug);
  const prevProperty = currentIndex > 0 ? PROPERTIES[currentIndex - 1] : PROPERTIES[PROPERTIES.length - 1];
  const nextProperty = currentIndex < PROPERTIES.length - 1 ? PROPERTIES[currentIndex + 1] : PROPERTIES[0];

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F6F2]">
      <Navbar />

      <main className="flex-1 pt-28 pb-16 lg:pt-36 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Breadcrumb & Go Back */}
          <div className="flex items-center justify-between">
            <Link
              href="/properties"
              className="inline-flex items-center gap-2 text-xs font-semibold text-[#181715] hover:text-[#C29D59] group"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              <span>Go Back to portfolio</span>
            </Link>

            <div className="flex items-center gap-2 sm:gap-3">
              {property.reraId && (
                <span className="hidden sm:inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-[#181715]/5 text-[#181715] border border-black/8">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#C29D59]" />
                  Mandate: {property.reraId}
                </span>
              )}
              <span className="px-3.5 py-1 rounded-full text-xs font-semibold bg-[#181715] text-[#C29D59]">
                {property.type}
              </span>
              <span className="px-3.5 py-1 rounded-full text-xs font-semibold bg-white border border-black/8 text-[#181715]">
                {property.category}
              </span>
            </div>
          </div>

          {/* Title & Price Header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-black/8">
            <div className="space-y-3 max-w-3xl">
              <div className="inline-flex items-center gap-1.5 text-xs text-[#6B665F]">
                <MapPin className="w-3.5 h-3.5 text-[#C29D59]" />
                <span>{property.fullAddress}</span>
              </div>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#181715]">
                {property.title}
              </h1>
              <p className="text-sm sm:text-base text-[#6B665F]">
                {property.description}
              </p>
            </div>

            <div className="lg:text-right space-y-1">
              <span className="text-xs uppercase tracking-wider text-[#6B665F] font-semibold block">
                Acquisition Value
              </span>
              <span className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#181715] block">
                {property.formattedPrice}
              </span>
              {property.period && (
                <span className="text-xs text-[#6B665F] font-medium block">
                  {property.period}
                </span>
              )}
            </div>
          </div>

          {/* Client Interactive Gallery and Booking Component */}
          <PropertyDetailClient property={property} />

          {/* Property Specifications Overview Grid */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-black/8 shadow-sm">
            <h2 className="text-lg font-bold tracking-tight text-[#181715] mb-6">
              Property Specifications &amp; Overview
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 text-xs text-[#333333]">
              <div className="p-4 rounded-2xl bg-[#F7F6F2] border border-black/6 space-y-1">
                <span className="text-[#6B665F] block flex items-center gap-1">
                  <Bed className="w-3.5 h-3.5 text-[#C29D59]" /> Bedrooms
                </span>
                <span className="text-xl font-bold text-[#181715] block">{property.bedrooms}</span>
              </div>

              <div className="p-4 rounded-2xl bg-[#F7F6F2] border border-black/6 space-y-1">
                <span className="text-[#6B665F] block flex items-center gap-1">
                  <Bath className="w-3.5 h-3.5 text-[#C29D59]" /> Bathrooms
                </span>
                <span className="text-xl font-bold text-[#181715] block">{property.bathrooms}</span>
              </div>

              <div className="p-4 rounded-2xl bg-[#F7F6F2] border border-black/6 space-y-1">
                <span className="text-[#6B665F] block flex items-center gap-1">
                  <Square className="w-3.5 h-3.5 text-[#C29D59]" /> Interior Living
                </span>
                <span className="text-xl font-bold text-[#181715] block">{property.sqft}</span>
              </div>

              <div className="p-4 rounded-2xl bg-[#F7F6F2] border border-black/6 space-y-1">
                <span className="text-[#6B665F] block flex items-center gap-1">
                  <Car className="w-3.5 h-3.5 text-[#C29D59]" /> Auto Bays
                </span>
                <span className="text-xl font-bold text-[#181715] block">{property.parkingLots}</span>
              </div>

              <div className="p-4 rounded-2xl bg-[#F7F6F2] border border-black/6 space-y-1">
                <span className="text-[#6B665F] block flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-[#C29D59]" /> Completion
                </span>
                <span className="text-xl font-bold text-[#181715] block">{property.builtYear}</span>
              </div>

              <div className="p-4 rounded-2xl bg-[#F7F6F2] border border-black/6 space-y-1">
                <span className="text-[#6B665F] block flex items-center gap-1">
                  <Layers className="w-3.5 h-3.5 text-[#C29D59]" /> Levels
                </span>
                <span className="text-xl font-bold text-[#181715] block">{property.floors}</span>
              </div>
            </div>
          </div>

          {/* Detailed Story & Key Highlights */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Story Left */}
            <div className="lg:col-span-8 space-y-8 bg-white rounded-3xl p-6 sm:p-10 border border-black/8 shadow-sm">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold tracking-tight text-[#181715]">
                  About {property.title}
                </h3>
                <div className="space-y-4 text-sm sm:text-base text-[#6B665F] leading-relaxed">
                  {property.fullStory.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>

              {/* Strategic highlights */}
              <div className="pt-6 border-t border-black/8 space-y-4">
                <h4 className="text-lg font-bold text-[#181715]">
                  Architectural Highlights
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {property.keyHighlights.map((highlight, idx) => (
                    <div key={idx} className="p-4 rounded-2xl bg-[#F7F6F2] border border-black/6 space-y-1.5">
                      <span className="text-sm font-bold text-[#181715] block">
                        {highlight.title}
                      </span>
                      <p className="text-xs text-[#6B665F] leading-relaxed">
                        {highlight.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Amenities */}
              <div className="pt-6 border-t border-black/8 space-y-4">
                <h4 className="text-lg font-bold text-[#181715]">
                  Included Appointments &amp; Amenities
                </h4>
                <div className="flex flex-wrap gap-2.5">
                  {property.amenities.map((item) => (
                    <span
                      key={item}
                      className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#F7F6F2] text-[#181715] border border-black/6"
                    >
                      ✓ {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Agent Sidebar */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-white rounded-3xl p-6 border border-black/8 space-y-6 shadow-sm">
                <div className="flex items-center gap-3.5">
                  <div className="relative w-14 h-14 rounded-2xl overflow-hidden border border-black/10 shrink-0">
                    <img
                      src={property.agent.image}
                      alt={property.agent.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-base text-[#181715]">
                      {property.agent.name}
                    </h4>
                    <p className="text-xs text-[#6B665F]">
                      {property.agent.role}
                    </p>
                    <span className="inline-flex items-center gap-1 text-[10px] text-[#C29D59] font-semibold mt-1">
                      <ShieldCheck className="w-3 h-3" /> Licensed Senior Partner
                    </span>
                  </div>
                </div>

                <div className="space-y-2 text-xs text-[#333333] pt-4 border-t border-black/6">
                  <div className="flex items-center justify-between py-1">
                    <span className="text-[#6B665F]">Direct Phone:</span>
                    <a href={`tel:${property.agent.phone}`} className="font-semibold text-[#181715] hover:underline">
                      {property.agent.phone}
                    </a>
                  </div>
                  <div className="flex items-center justify-between py-1">
                    <span className="text-[#6B665F]">Official Email:</span>
                    <a href={`mailto:${property.agent.email}`} className="font-semibold text-[#181715] hover:underline">
                      {property.agent.email}
                    </a>
                  </div>
                </div>

                <div className="pt-2 flex flex-col gap-2">
                  <a
                    href={`tel:${property.agent.phone}`}
                    className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#181715] text-[#C29D59] text-xs font-semibold hover:bg-black transition-colors"
                  >
                    <span>Call Advisor</span>
                  </a>
                  <a
                    href={`mailto:${property.agent.email}?subject=Inquiry%20regarding%20${encodeURIComponent(property.title)}`}
                    className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#F7F6F2] hover:bg-black/5 text-[#181715] text-xs font-semibold transition-colors"
                  >
                    <span>Send Message</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Prev / Next */}
          <div className="py-6 border-t border-b border-black/8 flex items-center justify-between">
            <Link
              href={`/properties/${prevProperty.slug}`}
              className="inline-flex items-center gap-2 text-xs font-semibold text-[#181715] hover:text-[#C29D59]"
            >
              <span>← Previous ({prevProperty.title})</span>
            </Link>

            <Link
              href={`/properties/${nextProperty.slug}`}
              className="inline-flex items-center gap-2 text-xs font-semibold text-[#181715] hover:text-[#C29D59]"
            >
              <span>Next ({nextProperty.title}) →</span>
            </Link>
          </div>

          {/* Similar Recommended Properties */}
          <div className="space-y-8 pt-8">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold tracking-tight text-[#181715]">
                Similar Luxury Residences
              </h3>
              <Link
                href="/properties"
                className="text-xs font-semibold text-[#181715] hover:text-[#C29D59]"
              >
                View all properties →
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {similarProperties.map((p) => (
                <PropertyCard key={p.id} property={p} />
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
