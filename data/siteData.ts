export interface Amenity {
  id: string;
  title: string;
  description: string;
  image: string;
  iconName?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  features: string[];
}

export interface StepItem {
  number: string;
  title: string;
  description: string;
  image: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  location: string;
  rating: number;
  avatar: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface StatItem {
  value: string;
  label: string;
  sublabel?: string;
}

export const STATS: StatItem[] = [
  { value: "650+", label: "Properties acquired", sublabel: "Verified private transactions" },
  { value: "120+", label: "Bespoke advisors", sublabel: "Senior licensed partners" },
  { value: "28+", label: "Prime enclaves", sublabel: "Leading global micro-markets" },
  { value: "1500+", label: "Private clients", sublabel: "Discerning families & investors" }
];

export const AMENITIES: Amenity[] = [
  {
    id: "swimming-pool",
    title: "Infinity lap pools",
    description: "Architectural cantilevered swimming pools engineered with temperature regulation and horizon reflection basins.",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "gym-facility",
    title: "Private wellness suites",
    description: "State-of-the-art gym pavilions equipped with custom Technogym machines, Finnish saunas, and steam rooms.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "kids-playground",
    title: "Architectural pavilions",
    description: "Sculptural outdoor living spaces, shaded teak terraces, and curated alfresco culinary kitchens.",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "parking-space",
    title: "Climate auto salons",
    description: "Subterranean multi-bay garages with EV fast-chargers, turntable platforms, and biometric security gates.",
    image: "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "community-lounge",
    title: "Private sommelier salons",
    description: "Bespoke wine tasting cellars, private library salons, and discreet meeting quarters for confidential business.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "garden-area",
    title: "Sculptural zen gardens",
    description: "Master-landscaped grounds incorporating mature olive groves, reflective water basins, and native botanical design.",
    image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&w=1200&q=80"
  }
];

export const SERVICES: Service[] = [
  {
    id: "property-buying",
    title: "Discreet acquisitions",
    description: "We represent private buyers with institutional rigor, granting access to unlisted trophy estates and confidential mandates.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Access to off-market & private seller registers",
      "Rigorous structural, architectural, and legal due diligence",
      "Comparative market benchmarking and bespoke valuation models",
      "Confidential transaction structuring & escrow oversight"
    ]
  },
  {
    id: "property-selling",
    title: "Global estate divestment",
    description: "We craft targeted divestment campaigns for iconic residences, presenting them discreetly to pre-qualified high-net-worth buyers.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Cinematic architectural photography & bespoke editorial monographs",
      "Targeted placement across vetted family office networks",
      "Strategic pricing designed to preserve exclusivity and market yield",
      "Turnkey negotiation management with strict confidentiality"
    ]
  },
  {
    id: "property-management",
    title: "Portfolio capital advisory",
    description: "We advise sovereign funds, family offices, and private collectors on high-yield commercial assets and trophy real estate holdings.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Long-term lease covenant optimization and risk modeling",
      "Trophy asset repositioning and architectural value-add strategies",
      "ESG & net-zero carbon retrofitting guidance",
      "Cross-border tax-efficient ownership structures"
    ]
  }
];

export const HOW_IT_WORKS_STEPS: StepItem[] = [
  {
    number: "01",
    title: "Define acquisition brief",
    description: "We consult confidentially to establish your spatial, architectural, tax, and lifestyle requirements across premier global enclaves.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
  },
  {
    number: "02",
    title: "Curated private portfolio",
    description: "Receive unlisted private mandates and off-market architectural residences vetted thoroughly by senior local advisors.",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80"
  },
  {
    number: "03",
    title: "Seamless completion",
    description: "From private air-chauffeured inspections to escrow closing and bespoke interior handover, every detail is managed flawlessly.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80"
  }
];

export const HOW_IT_WORKS = HOW_IT_WORKS_STEPS;

export interface Agent {
  name: string;
  role: string;
  specialty: string;
  propertiesSold: string;
  avatar: string;
  phone: string;
  email: string;
}

export const AGENTS: Agent[] = [
  {
    name: "Victoria Sterling",
    role: "Managing Director",
    specialty: "Coastal & Waterfront Estates",
    propertiesSold: "$240M+ Volume Closed",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    phone: "+1 (310) 844-9200",
    email: "v.sterling@urbannest.com"
  },
  {
    name: "Marcus von Berg",
    role: "Senior Partner",
    specialty: "European Trophy Portfolios & Alpine Chalets",
    propertiesSold: "€310M+ Volume Closed",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80",
    phone: "+41 44 210 8820",
    email: "m.berg@urbannest.com"
  },
  {
    name: "Soraya Al-Mansoor",
    role: "Managing Director",
    specialty: "Middle East & Gulf Private Mandates",
    propertiesSold: "$195M+ Volume Closed",
    avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80",
    phone: "+971 4 399 2200",
    email: "s.mansoor@urbannest.com"
  },
  {
    name: "Arthur Pendelton",
    role: "Head of Prime Central London",
    specialty: "Mayfair, Belgravia & Historic Mansions",
    propertiesSold: "£280M+ Volume Closed",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    phone: "+44 20 7946 0912",
    email: "a.pendelton@urbannest.com"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    quote: "URBANNEST secured our coastal residence in Malibu completely off-market. Their discretion, architectural acumen, and legal precision were exemplary at every turn.",
    name: "Elena Rostova",
    role: "Managing Director, Rostova Family Office",
    location: "Zurich & Malibu",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "t2",
    quote: "When divesting our Mayfair townhouse, URBANNEST identified a sovereign buyer within three weeks without ever publicly publishing the property. Incomparable service.",
    name: "David Sterling",
    role: "Principal, Sterling Capital Partners",
    location: "London, Mayfair",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "t3",
    quote: "Their team understands real estate not merely as square footage, but as timeless architectural assets that compound capital and enhance everyday life.",
    name: "Camilla Dupont",
    role: "Founder, Horizon Media Ventures",
    location: "Paris & Dubai",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"
  }
];

export const FAQS: FaqItem[] = [
  {
    id: "f1",
    question: "What differentiates URBANNEST from conventional brokerage agencies?",
    answer: "URBANNEST operates as a discreet private advisory rather than an open marketplace. We specialize in off-market trophy residences, architectural landmarks, and institutional commercial holdings. Our clients work directly with senior partners who provide data-backed valuation analysis and strict confidentiality."
  },
  {
    id: "f2",
    question: "How do you maintain confidentiality during off-market transactions?",
    answer: "Every unlisted mandate is protected through strict multi-party non-disclosure agreements before any property dossiers, floor plans, or addresses are revealed. Viewings are conducted privately and security vetted to protect both buyer and seller privacy."
  },
  {
    id: "f3",
    question: "Which global destinations do you actively represent?",
    answer: "We have dedicated partner presences in Zurich, London (Mayfair & Belgravia), Dubai (DIFC & Palm Jumeirah), New York (Midtown & Tribeca), and Los Angeles (Beverly Hills & Malibu), alongside verified affiliate networks across premier European resort enclaves."
  },
  {
    id: "f4",
    question: "Do you facilitate cross-border legal and tax structuring?",
    answer: "Yes. In partnership with leading international private client law firms and tax counsels, we coordinate compliant cross-border SPV entities, escrow facilities, and multi-currency transactions."
  }
];
