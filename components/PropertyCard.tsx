"use client";

import Image from "next/image";
import Link from "next/link";
import { Bed, Bath, Square, ArrowUpRight } from "lucide-react";
import { Property } from "@/data/properties";

interface PropertyCardProps {
  property: Property;
  priority?: boolean;
}

export default function PropertyCard({ property, priority = false }: PropertyCardProps) {
  return (
    <Link
      href={`/properties/${property.slug}`}
      className="group relative block aspect-3/4 sm:aspect-4/5 rounded-3xl overflow-hidden bg-black/5 border border-black/8 shadow-sm hover:shadow-xl transition-all duration-500"
    >
      {/* Full-Bleed Property Background Image */}
      <Image
        src={property.image}
        alt={property.title}
        fill
        priority={priority}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />

      {/* Cinematic Dark Gradient Overlay for Text Legibility (Screenshot 4 exact) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/10 opacity-90 group-hover:opacity-95 transition-opacity" />

      {/* Top Right Status Badge (Screenshot 4 exact) */}
      <div className="absolute top-5 right-5 z-10">
        <span className="px-3.5 py-1 rounded-full text-xs font-semibold bg-white text-[#111111] shadow-md backdrop-blur-md">
          {property.type}
        </span>
      </div>

      {/* Bottom Content Overlay (Screenshot 4 exact layout) */}
      <div className="absolute bottom-0 inset-x-0 p-6 z-10 flex flex-col justify-end space-y-3 text-white">
        {/* Title */}
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-[#C29D59] transition-colors">
            {property.title}
          </h3>
          <span className="text-xs font-semibold text-[#C29D59] bg-black/50 px-2.5 py-0.5 rounded-full border border-[#C29D59]/35 backdrop-blur-md">
            {property.formattedPrice}
          </span>
        </div>

        {/* Subtitle / Description */}
        <p className="text-xs text-white/80 line-clamp-2 leading-relaxed">
          {property.description}
        </p>

        {/* Specs Pills Bar (Screenshot 4 exact) */}
        <div className="pt-2 flex flex-wrap items-center gap-2">
          {/* Beds */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/50 border border-white/15 backdrop-blur-md text-xs text-white">
            <Bed className="w-3.5 h-3.5 text-white/80" />
            <span className="font-semibold">{property.bedrooms}</span>
          </div>

          {/* Baths */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/50 border border-white/15 backdrop-blur-md text-xs text-white">
            <Bath className="w-3.5 h-3.5 text-white/80" />
            <span className="font-semibold">{property.bathrooms}</span>
          </div>

          {/* Size */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/50 border border-white/15 backdrop-blur-md text-xs text-white">
            <Square className="w-3.5 h-3.5 text-white/80" />
            <span className="font-semibold">{property.sqft}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
