"use client";

import { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PropertyCard from "@/components/PropertyCard";
import { PROPERTIES } from "@/data/properties";
import { Search, MapPin, Home, DollarSign, Sparkles } from "lucide-react";

export default function PropertiesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState<string>("All");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedLocation, setSelectedLocation] = useState<string>("All");
  const [selectedPrice, setSelectedPrice] = useState<string>("All");

  const filteredProperties = useMemo(() => {
    return PROPERTIES.filter((property) => {
      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchTitle = property.title.toLowerCase().includes(q);
        const matchLocation = property.location.toLowerCase().includes(q);
        const matchDesc = property.description.toLowerCase().includes(q);
        if (!matchTitle && !matchLocation && !matchDesc) return false;
      }

      // Type
      if (selectedType !== "All" && property.type !== selectedType) {
        return false;
      }

      // Category
      if (selectedCategory !== "All") {
        if (selectedCategory === "Villa" && property.category !== "Villa" && property.category !== "Manor") {
          return false;
        } else if (selectedCategory !== "Villa" && property.category !== selectedCategory) {
          return false;
        }
      }

      // Location
      if (selectedLocation !== "All" && !property.location.toLowerCase().includes(selectedLocation.toLowerCase())) {
        return false;
      }

      // Price Range (USD/Equivalent)
      if (selectedPrice === "under-20m" && property.price >= 20000000) return false;
      if (selectedPrice === "20m-30m" && (property.price < 20000000 || property.price > 30000000)) return false;
      if (selectedPrice === "above-30m" && property.price <= 30000000) return false;

      return true;
    });
  }, [searchQuery, selectedType, selectedCategory, selectedLocation, selectedPrice]);

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F6F2] text-[#181715]">
      <Navbar />

      <main className="flex-1 pt-28 pb-16 lg:pt-36 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Header */}
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#181715]/5 text-xs font-semibold uppercase tracking-wider text-[#181715]">
              <Sparkles className="w-3.5 h-3.5 text-[#C29D59]" />
              <span>Private Portfolio Mandates</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-normal tracking-tight text-[#181715] leading-[1.1]">
              Discover Exceptional <span className="font-serif italic font-light text-[#C29D59]">Residences</span>
            </h1>
            <p className="text-base sm:text-lg text-[#6B665F] leading-relaxed">
              Explore our handpicked collection of prime architectural residences, coastal compounds, and sky penthouses across premier global enclaves.
            </p>
          </div>

          {/* Filter Bar */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-black/8 shadow-xs space-y-6">
            {/* Search Input & Type Tabs */}
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between pb-6 border-b border-black/8">
              {/* Search Bar */}
              <div className="relative w-full lg:max-w-md">
                <Search className="w-4 h-4 text-[#8E8880] absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by title, location (Malibu, Zurich, London, Beverly Hills)..."
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-black/3 border border-black/8 text-sm placeholder-[#8E8880] text-[#181715] focus:outline-hidden focus:ring-1 focus:ring-[#C29D59]"
                />
              </div>

              {/* Status Tabs */}
              <div className="flex items-center gap-2 self-start lg:self-auto">
                {["All", "For Sale", "For Rent"].map((type) => (
                  <button
                    key={type}
                    onClick={() => setSelectedType(type)}
                    className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                      selectedType === type
                        ? "bg-[#181715] text-[#C29D59] shadow-xs"
                        : "bg-black/4 text-[#6B665F] hover:bg-black/8 hover:text-[#181715]"
                    }`}
                  >
                    {type === "All" ? "All Mandates" : type}
                  </button>
                ))}
              </div>
            </div>

            {/* Dropdown Filters */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Category */}
              <div className="space-y-1.5">
                <label className="text-[11px] font-semibold text-[#6B665F] uppercase tracking-wider flex items-center gap-1.5">
                  <Home className="w-3 h-3 text-[#C29D59]" />
                  Property Type
                </label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl bg-black/3 border border-black/8 text-xs font-medium text-[#181715] focus:outline-hidden focus:ring-1 focus:ring-[#C29D59]"
                >
                  <option value="All">All Types</option>
                  <option value="Apartment">Luxury Apartment</option>
                  <option value="Villa">Villa &amp; Manor</option>
                  <option value="Penthouse">Sky Penthouse</option>
                  <option value="Commercial">Commercial Asset</option>
                </select>
              </div>

              {/* Location */}
              <div className="space-y-1.5">
                <label className="text-[11px] font-semibold text-[#6B665F] uppercase tracking-wider flex items-center gap-1.5">
                  <MapPin className="w-3 h-3 text-[#C29D59]" />
                  Premier Enclave
                </label>
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl bg-black/3 border border-black/8 text-xs font-medium text-[#181715] focus:outline-hidden focus:ring-1 focus:ring-[#C29D59]"
                >
                  <option value="All">All Premier Enclaves</option>
                  <option value="Malibu">Malibu, CA</option>
                  <option value="Zurich">Zurich, Switzerland</option>
                  <option value="Palm Jumeirah">Palm Jumeirah, Dubai</option>
                  <option value="Beverly Hills">Beverly Hills, CA</option>
                  <option value="Mayfair">Mayfair, London</option>
                  <option value="Manhattan">Midtown, New York</option>
                </select>
              </div>

              {/* Price */}
              <div className="space-y-1.5">
                <label className="text-[11px] font-semibold text-[#6B665F] uppercase tracking-wider flex items-center gap-1.5">
                  <DollarSign className="w-3 h-3 text-[#C29D59]" />
                  Capital Bracket
                </label>
                <select
                  value={selectedPrice}
                  onChange={(e) => setSelectedPrice(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl bg-black/3 border border-black/8 text-xs font-medium text-[#181715] focus:outline-hidden focus:ring-1 focus:ring-[#C29D59]"
                >
                  <option value="All">Any Capital Tier</option>
                  <option value="under-20m">Under $20,000,000</option>
                  <option value="20m-30m">$20,000,000 - $30,000,000</option>
                  <option value="above-30m">Above $30,000,000</option>
                </select>
              </div>
            </div>

            {/* Results Counter and Reset */}
            <div className="flex items-center justify-between text-xs text-[#6B665F] pt-2">
              <span>Showing <strong>{filteredProperties.length}</strong> verified luxury residences</span>
              {(searchQuery || selectedType !== "All" || selectedCategory !== "All" || selectedLocation !== "All" || selectedPrice !== "All") && (
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedType("All");
                    setSelectedCategory("All");
                    setSelectedLocation("All");
                    setSelectedPrice("All");
                  }}
                  className="text-xs font-semibold text-[#181715] hover:text-[#C29D59] hover:underline cursor-pointer transition-colors"
                >
                  Reset all filters
                </button>
              )}
            </div>
          </div>

          {/* Properties Grid */}
          {filteredProperties.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 pt-4">
              {filteredProperties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-3xl p-12 text-center border border-black/8 space-y-4">
              <h3 className="text-lg font-semibold text-[#181715]">No properties found</h3>
              <p className="text-xs text-[#6B665F] max-w-sm mx-auto">
                We couldn&apos;t find any properties matching your selected criteria. Try adjusting your filters.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedType("All");
                  setSelectedCategory("All");
                  setSelectedLocation("All");
                  setSelectedPrice("All");
                }}
                className="px-6 py-2.5 rounded-full bg-[#181715] text-[#C29D59] text-xs font-semibold cursor-pointer hover:bg-black transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
