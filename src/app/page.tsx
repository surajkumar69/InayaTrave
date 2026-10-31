import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import FleetSection from "@/components/FleetSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import DestinationsSection from "@/components/DestinationsSection";
import GallerySection from "@/components/GallerySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-luxury-950 text-luxury-100 flex flex-col selection:bg-silver-light selection:text-luxury-950">
      {/* 1. Premium Header */}
      <Header />

      {/* 2. Hero Section with Goa background & Quick Booking */}
      <Hero />

      {/* 3. About INAYA TRAVEL */}
      <About />

      {/* 4. Our Fleet - Exactly 7 Vehicles */}
      <FleetSection />

      {/* 5. Our Services */}
      <ServicesSection />

      {/* 6. Why Choose Us */}
      <WhyChooseUs />

      {/* 7. Goa Travel Destinations */}
      <DestinationsSection />

      {/* 8. Premium Gallery */}
      <GallerySection />

      {/* 9. Customer Testimonials & Genuine Trust */}
      <TestimonialsSection />

      {/* 10. Contact Details & Map */}
      <ContactSection />

      {/* 11. Premium Footer */}
      <Footer />

      {/* 12. Floating WhatsApp Button */}
      <FloatingWhatsApp />
    </main>
  );
}
