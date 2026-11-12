"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import BrandLogo from "@/components/BrandLogo";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "About us", href: "/about-us" },
    { name: "Properties", href: "/properties" },
    { name: "Agents", href: "/about-us#agents" },
    { name: "Services", href: "/#services" },
    { name: "Blogs", href: "/blogs" },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#141311]/90 backdrop-blur-md border-b border-[#C29D59]/20 py-3 shadow-lg"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Urbannest Brand Logo */}
          <BrandLogo variant="light" size="md" />

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium text-white/90">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`transition-colors duration-200 hover:text-[#C29D59] ${
                    isActive ? "text-[#C29D59] font-semibold" : "text-white/80"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}

            {/* Pill "Contact us" Button */}
            <Link
              href="/contact-us"
              className="px-5 py-2 rounded-full text-xs font-semibold bg-white/10 hover:bg-[#C29D59] text-white hover:text-[#141311] border border-white/25 hover:border-[#C29D59] backdrop-blur-md transition-all duration-200 shadow-sm cursor-pointer"
            >
              Contact us
            </Link>
          </nav>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 md:hidden">
            <Link
              href="/contact-us"
              className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#C29D59] text-[#141311] shadow-sm"
            >
              Contact
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-white hover:bg-white/10 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden border-b border-[#C29D59]/20 bg-[#141311]/95 backdrop-blur-xl px-4 pt-4 pb-6 space-y-3 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-2.5 rounded-xl text-base font-medium transition-colors ${
                    isActive
                      ? "bg-[#C29D59] text-[#141311] font-bold"
                      : "text-white/80 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
            <Link
              href="/contact-us"
              className="w-full text-center py-3 rounded-full text-sm font-semibold bg-[#C29D59] text-[#141311]"
            >
              Contact us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
