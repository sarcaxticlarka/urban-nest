export interface Property {
  id: string;
  slug: string;
  title: string;
  price: number;
  formattedPrice: string;
  period?: string;
  type: "For Sale" | "For Rent";
  category: "Apartment" | "Villa" | "Manor" | "Penthouse" | "Commercial";
  tagline: string;
  description: string;
  fullStory: string[];
  keyHighlights: { title: string; desc: string }[];
  bedrooms: number;
  bathrooms: number;
  sqft: string;
  parkingLots: number;
  builtYear: number;
  floors: number;
  location: string;
  fullAddress: string;
  image: string;
  gallery: string[];
  featured?: boolean;
  reraId?: string;
  agent: {
    name: string;
    role: string;
    image: string;
    phone: string;
    email: string;
  };
  amenities: string[];
}

export const PROPERTIES: Property[] = [
  {
    id: "azure-heights",
    slug: "azure-heights",
    title: "Azure Heights",
    price: 18500000,
    formattedPrice: "$18,500,000",
    type: "For Sale",
    category: "Penthouse",
    tagline: "Panoramic waterfront penthouse with private sky deck",
    description: "Luxury waterfront residence offering modern minimalist interiors, floor-to-ceiling glass, automated solar shading, and expansive coastal panoramas.",
    fullStory: [
      "URBANNEST is proud to present Azure Heights, an architectural sky residence commanding uninterrupted horizon vistas. Conceived by award-winning modernist architects, this home seamlessly integrates cantilevered terraces, acoustic triple glazing, and custom fluted travertine finishes.",
      "The private elevator delivers guests into a double-height salon framed by 24-foot glass curtains. The chef's kitchen features concealed Gaggenau appliances, monolithic marble islands, and an auxiliary butler's preparation scullery.",
      "Residents enjoy full access to bespoke concierge services, climate-controlled subterranean parking for 4 vehicles, and a private rooftop heated saltwater plunge pool."
    ],
    keyHighlights: [
      { title: "Direct Coastline & Horizon Vistas", desc: "Unobstructed panoramic water views with 1,200 sq.ft private wrap-around terrace." },
      { title: "Turnkey Haute Couture Interiors", desc: "Italian Fior di Bosco marble, automated Lutron HomeWorks, and biometric access." }
    ],
    bedrooms: 4,
    bathrooms: 4,
    sqft: "4,600 sq.ft",
    parkingLots: 4,
    builtYear: 2025,
    floors: 2,
    location: "Malibu, California",
    fullAddress: "24800 Pacific Coast Highway, Malibu, CA 90265",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=80",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1800&q=80"
    ],
    featured: true,
    reraId: "UN-USA-90265-01",
    agent: {
      name: "Victoria Sterling",
      role: "Managing Director — Coastal Estates",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
      phone: "+1 (310) 844-9200",
      email: "v.sterling@urbannest.com"
    },
    amenities: ["Panoramic Ocean Terrace", "Private Elevator Access", "Saltwater Lap Pool", "24/7 Discreet Concierge", "Subterranean Garage", "Smart Home Automation"]
  },
  {
    id: "lakeside-manor",
    slug: "lakeside-manor",
    title: "Lakeside Manor",
    price: 24800000,
    formattedPrice: "$24,800,000",
    type: "For Sale",
    category: "Manor",
    tagline: "Serene lakeside architectural estate with private gardens",
    description: "Elegant modern manor offering secluded privacy, dramatic volumes, tranquil water reflection pools, and world-class craftsmanship.",
    fullStory: [
      "Set along a tranquil private shoreline, Lakeside Manor is an extraordinary multi-tier architectural masterpiece spanning over 7,200 sq.ft of conditioned living space. Designed to foster harmony between indoor sanctuary and natural topography.",
      "The residence features triple-height cathedral timber ceilings, a bespoke temperature-controlled wine gallery holding 1,500 bottles, and an acoustic private cinema engineered to Dolby Atmos specifications.",
      "Surrounding the home are landscaped Japanese zen gardens, an infinity water basin reflecting the alpine horizons, and a heated glasshouse pavilion."
    ],
    keyHighlights: [
      { title: "Direct Lake Shoreline Access", desc: "Private floating boat dock and 180 feet of secluded water frontage." },
      { title: "Multigenerational Architectural Design", desc: "Includes detached guest villa, wellness spa wing, and 5-bay climate-controlled auto salon." }
    ],
    bedrooms: 5,
    bathrooms: 6,
    sqft: "7,200 sq.ft",
    parkingLots: 5,
    builtYear: 2024,
    floors: 3,
    location: "Zurich, Switzerland",
    fullAddress: "Seestrasse 142, 8700 Küsnacht, Zurich",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1800&q=80",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1800&q=80"
    ],
    featured: true,
    reraId: "UN-CH-8700-04",
    agent: {
      name: "Marcus von Berg",
      role: "Partner — European Portfolios",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80",
      phone: "+41 44 210 8820",
      email: "m.berg@urbannest.com"
    },
    amenities: ["Private Boat Dock", "Indoor Heated Plunge Pool", "Sommelier Wine Vault", "Dolby Atmos Cinema", "Detached Guest House", "Geothermal Heating"]
  },
  {
    id: "palm-residence",
    slug: "palm-residence",
    title: "Palm Residence",
    price: 14500000,
    formattedPrice: "$14,500,000",
    period: "/ Available for Acquisition",
    type: "For Rent",
    category: "Apartment",
    tagline: "Ultra-prime waterfront sky residence with private marina berth",
    description: "Sculptural waterfront residence designed for refined contemporary living, curated art collections, and effortless international entertaining.",
    fullStory: [
      "Positioned within one of Dubai's most celebrated waterfront addresses, Palm Residence blends modern brutalist precision with soft Mediterranean warmth.",
      "The layout showcases wide expansive gallery salons with 3.6-meter ceiling clearances, Italian terrazzo finishes, and customized bronze hardware. Floor-to-ceiling motorized sliding glass pockets completely open the primary living salon to the Gulf breeze.",
      "Includes 24/7 dedicated white-glove valet concierge, direct beach access, Olympic-length private wellness pool, and biometric private elevator foyer."
    ],
    keyHighlights: [
      { title: "Direct Beachfront & Palm Horizon", desc: "Private gated access to pristine white sand beach and dedicated yacht berth." },
      { title: "Exceptional Rental & Capital Yields", desc: "Historical gross rental yields exceeding 6.8% with prime international corporate lease." }
    ],
    bedrooms: 3,
    bathrooms: 4,
    sqft: "3,950 sq.ft",
    parkingLots: 3,
    builtYear: 2025,
    floors: 2,
    location: "Palm Jumeirah, Dubai",
    fullAddress: "Crescent West, Palm Jumeirah, Dubai, UAE",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1800&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=80",
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1800&q=80"
    ],
    featured: true,
    reraId: "UN-DXB-9714-12",
    agent: {
      name: "Soraya Al-Mansoor",
      role: "Managing Director — Middle East & Gulf",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80",
      phone: "+971 4 399 2200",
      email: "s.mansoor@urbannest.com"
    },
    amenities: ["Private Beach Access", "Dedicated Yacht Berth", "Wellness Spa & Sauna", "Technogym Studio", "Direct Valet Service", "Smart Security Vault"]
  },
  {
    id: "crestview-villa",
    slug: "crestview-villa",
    title: "Crestview Villa",
    price: 32000000,
    formattedPrice: "$32,000,000",
    type: "For Sale",
    category: "Villa",
    tagline: "Iconic Beverly Hills mid-century modern architectural compound",
    description: "Cantilevered glass architectural estate offering complete hillside seclusion, infinity pool overlooking city lights, and museum-grade finishes.",
    fullStory: [
      "Anchored atop a private promontory in Beverly Hills, Crestview Villa stands as an architectural triumph that bridges 1960s modernist purity with 21st-century engineering excellence.",
      "The compound features expansive open-concept volumes wrapped in custom anodized bronze glass, book-matched Nero Marquina fireplaces, and an 80-foot infinity-edge pool that vanishes into the Los Angeles skyline.",
      "A subterranean level hosts a private car gallery for up to 6 collector vehicles, commercial-grade wellness spa with Finnish sauna, and a private sommelier tasting cellar."
    ],
    keyHighlights: [
      { title: "Unmatched Promontory City-to-Ocean Vistas", desc: "Rare 300-degree vistas from Downtown Los Angeles to Santa Monica bay." },
      { title: "Complete Privacy & Security Gated Acreage", desc: "Private security guard house, biometric perimeter access, and motorized steel security gates." }
    ],
    bedrooms: 5,
    bathrooms: 7,
    sqft: "8,500 sq.ft",
    parkingLots: 6,
    builtYear: 2024,
    floors: 3,
    location: "Beverly Hills, California",
    fullAddress: "1140 Loma Vista Drive, Beverly Hills, CA 90210",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1800&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1800&q=80"
    ],
    featured: true,
    reraId: "UN-USA-90210-77",
    agent: {
      name: "Harrison Vance",
      role: "Partner — North American Prime Estates",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80",
      phone: "+1 (310) 902-1400",
      email: "h.vance@urbannest.com"
    },
    amenities: ["80ft Infinity Edge Pool", "Collector Auto Gallery", "Sommelier Wine Pavilion", "Outdoor Kitchen & Cabana", "Guardhouse Gate", "Solar Storage Grid"]
  },
  {
    id: "harbor-point",
    slug: "harbor-point",
    title: "Harbor Point",
    price: 16800000,
    formattedPrice: "£16,800,000",
    period: "/ Long Term Lease",
    type: "For Rent",
    category: "Apartment",
    tagline: "Restored Grade II listed Mayfair mansion residence",
    description: "Classic Mayfair town residence combining heritage architectural proportions, herringbone French oak parquet, and modern smart amenities.",
    fullStory: [
      "Steeped in aristocratic pedigree, Harbor Point is an exceptional residence on Mount Street in prime Mayfair, moments from Berkeley Square and Hyde Park.",
      "Painstakingly restored in partnership with English Heritage, the residence pairs 14-foot original plasterwork ceilings and marble fireplaces with silent concealed air conditioning and Crestron lighting automation.",
      "Includes private direct lift access, 24-hour uniformed hall porter, and access to a secluded private keyholders' garden square."
    ],
    keyHighlights: [
      { title: "Prime Central London Mayfair Address", desc: "Moments from Scott's, Connaught, and London's finest galleries." },
      { title: "Master Craftsmanship & Heritage Purity", desc: "Grade II listed detailing seamlessly blended with modern acoustic isolation." }
    ],
    bedrooms: 3,
    bathrooms: 3,
    sqft: "3,800 sq.ft",
    parkingLots: 2,
    builtYear: 2023,
    floors: 3,
    location: "Mayfair, London",
    fullAddress: "18 Mount Street, Mayfair, London W1K 2RN",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=80",
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1800&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=80"
    ],
    featured: true,
    reraId: "UN-UK-W1K-08",
    agent: {
      name: "Arthur Pendelton",
      role: "Head of Prime Central London",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
      phone: "+44 20 7946 0912",
      email: "a.pendelton@urbannest.com"
    },
    amenities: ["Uniformed 24hr Porter", "Private Direct Lift", "Heritage Fireplaces", "Wine Cellar", "Resident Key Garden Access", "Underfloor Heating"]
  },
  {
    id: "summit-court",
    slug: "summit-court",
    title: "Summit Court",
    price: 45000000,
    formattedPrice: "$45,000,000",
    type: "For Sale",
    category: "Commercial",
    tagline: "Iconic Grade-A headquarters tower asset with institutional tenancy",
    description: "High-end corporate commercial asset offering long-term institutional lease covenant, LEED Platinum certification, and prime capital growth.",
    fullStory: [
      "Summit Court is a landmark trophy commercial development situated within an established global financial district. Designed for multinational enterprise headquarters seeking unmatched sustainability credentials and architectural prestige.",
      "The tower features high-efficiency column-free floor plates of 24,000 sq.ft each, triple-height corporate atrium, high-speed destination-controlled elevators, and double-skin active solar glass facades.",
      "Fully leased to blue-chip technology and global banking tenants with a 9.2-year weighted average lease expiry (WALE) and annual escalations."
    ],
    keyHighlights: [
      { title: "LEED Platinum & Net Zero Carbon Ready", desc: "Lowest carbon operational footprint in the financial core." },
      { title: "Trophy Income-Generating Asset", desc: "Net initial yield of 7.4% with triple-net institutional leases." }
    ],
    bedrooms: 0,
    bathrooms: 12,
    sqft: "48,000 sq.ft",
    parkingLots: 45,
    builtYear: 2024,
    floors: 8,
    location: "Manhattan, New York",
    fullAddress: "767 Fifth Avenue, Midtown, New York, NY 10153",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=80",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1800&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1800&q=80"
    ],
    featured: true,
    reraId: "UN-USA-10153-99",
    agent: {
      name: "Marcus von Berg",
      role: "Partner — Capital Markets & Commercial",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80",
      phone: "+1 (212) 555-0199",
      email: "m.berg@urbannest.com"
    },
    amenities: ["LEED Platinum Certified", "High-Speed Elevators", "Subterranean Parking Garage", "Executive Rooftop Helipad", "Corporate Conference Center", "24/7 Security Operations"]
  }
];

export function getPropertyBySlug(slug: string): Property | undefined {
  return PROPERTIES.find((p) => p.slug === slug);
}

export function getFeaturedProperties(): Property[] {
  return PROPERTIES.filter((p) => p.featured);
}
