import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CategoriesSection from "@/components/CategoriesSection";
import FeaturedProducts from "@/components/FeaturedProducts";
import CTASection from "@/components/CTASection";
import ClientsSlider from "@/components/ClientsSlider";
import TestimonialsSection from "@/components/TestimonialsSection";
import FooterSection from "@/components/FooterSection";

const WEBPAGE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://canastanavidena.pe/#webpage",
  "url": "https://canastanavidena.pe/",
  "name": "Publiventa - Canastas Navideñas Artesanales | Regalos Gourmet",
  "description": "Canastas navideñas artesanales de lujo. Regalos gourmet curados con los mejores productos para celebrar la temporada navideña.",
  "inLanguage": "es",
  "isPartOf": {
    "@type": "WebSite",
    "name": "Publiventa",
    "url": "https://canastanavidena.pe"
  },
  "about": {
    "@type": "Organization",
    "name": "Publiventa"
  },
  "dateModified": new Date().toISOString().split("T")[0],
};

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("todos");
  const location = useLocation();

  useEffect(() => {
    document.title = "Publiventa - Canastas Navideñas Artesanales | Regalos Gourmet";
  }, []);

  useEffect(() => {
    if (location.state?.scrollTo) {
      setTimeout(() => {
        const el = document.querySelector(location.state.scrollTo);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
      window.history.replaceState({}, document.title);
    }
  }, [location.state]);

  return (
    <div className="bg-[#FAF7F2]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBPAGE_SCHEMA) }}
      />

      <Navbar />
      <HeroSection />
      <CategoriesSection />
      <FeaturedProducts
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
      <CTASection />
      <ClientsSlider />
      <TestimonialsSection />
      <FooterSection />
    </div>
  );
}
