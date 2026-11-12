import Link from "next/link";

interface BrandLogoProps {
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function BrandLogo({
  variant = "dark",
  size = "md",
  className = "",
}: BrandLogoProps) {
  const isLight = variant === "light";

  const sizeClasses = {
    sm: "text-lg",
    md: "text-xl sm:text-2xl",
    lg: "text-2xl sm:text-3xl",
  };

  const iconSizes = {
    sm: "w-7 h-7",
    md: "w-8 h-8",
    lg: "w-10 h-10",
  };

  return (
    <Link href="/" className={`inline-flex items-center gap-2.5 group select-none ${className}`}>
      {/* Luxury Minimalist Architectural Emblem */}
      <div className={`relative ${iconSizes[size]} flex items-center justify-center shrink-0`}>
        <svg
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full transition-transform duration-300 group-hover:scale-105"
        >
          {/* Subtle Golden Geometric Roof Outline */}
          <path
            d="M3 18L18 4L33 18"
            stroke="url(#goldLogoGrad)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Modern Minimalist Skyline Pillars */}
          <path
            d="M11 17V29M18 11V29M25 17V29"
            stroke="url(#goldLogoGrad)"
            strokeWidth="2"
            strokeLinecap="round"
          />
          {/* Base Foundation Bar */}
          <path
            d="M7 29H29"
            stroke="url(#goldLogoGrad)"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient id="goldLogoGrad" x1="3" y1="4" x2="33" y2="30" gradientUnits="userSpaceOnUse">
              <stop stopColor="#E8D4A8" />
              <stop offset="0.5" stopColor="#C29D59" />
              <stop offset="1" stopColor="#9E7B3B" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Brand Name: ONLY "Urbannest" as requested */}
      <span
        className={`font-bold tracking-tight leading-none ${sizeClasses[size]} ${
          isLight ? "text-white" : "text-[#181715]"
        } transition-colors group-hover:text-[#C29D59]`}
      >
        Urbannest
      </span>
    </Link>
  );
}
