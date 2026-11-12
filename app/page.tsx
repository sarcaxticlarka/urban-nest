import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import IntroStatsSection from "@/components/IntroStatsSection";
import FeaturedPropertiesSection from "@/components/FeaturedPropertiesSection";
import DestinationsSection from "@/components/DestinationsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import AmenitiesSection from "@/components/AmenitiesSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BlogSection from "@/components/BlogSection";
import FaqSection from "@/components/FaqSection";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F7F6F2]">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <IntroStatsSection />
        <FeaturedPropertiesSection />
        <DestinationsSection />
        <HowItWorksSection />
        <AmenitiesSection />
        <ServicesSection />
        <TestimonialsSection />
        <BlogSection />
        <FaqSection />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  );
}
