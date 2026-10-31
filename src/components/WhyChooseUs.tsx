"use client";

import React from "react";
import { ShieldCheck, Sparkles, Clock, BadgeIndianRupee, MessageCircle, MapPin, CheckCircle } from "lucide-react";
import { WHY_CHOOSE_US_DATA } from "@/data/destinations";
import { getVehicleWhatsAppUrl } from "@/data/fleet";

export default function WhyChooseUs() {
  const getIcon = (name: string) => {
    switch (name) {
      case "ShieldCheck":
        return <ShieldCheck className="w-6 h-6 text-silver-light" />;
      case "Sparkles":
        return <Sparkles className="w-6 h-6 text-silver-light" />;
      case "Clock":
        return <Clock className="w-6 h-6 text-silver-light" />;
      case "BadgeIndianRupee":
        return <BadgeIndianRupee className="w-6 h-6 text-silver-light" />;
      case "MessageCircle":
        return <MessageCircle className="w-6 h-6 text-silver-light" />;
      case "MapPin":
        return <MapPin className="w-6 h-6 text-silver-light" />;
      default:
        return <CheckCircle className="w-6 h-6 text-silver-light" />;
    }
  };

  return (
    <section id="why-choose-us" className="py-24 bg-luxury-900/50 relative border-t border-luxury-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-luxury-950 border border-luxury-700 text-xs font-semibold text-silver-metallic uppercase tracking-wider">
            <span>The INAYA Distinction</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Why Discerning Travelers <span className="text-metallic">Choose Us</span>
          </h2>

          <p className="text-luxury-300 text-base sm:text-lg">
            We don’t treat your journey as a mere taxi ride. We provide a bespoke chauffeur service
            defined by reliability, safety, spotless luxury, and uncompromised punctuality.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_US_DATA.map((item, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl p-7 border border-luxury-800 hover:border-silver-metallic/60 transition-all duration-300 space-y-4 group"
            >
              <div className="p-3.5 rounded-xl bg-luxury-900 border border-luxury-700/80 w-fit group-hover:bg-luxury-800 group-hover:border-silver transition-colors">
                {getIcon(item.icon)}
              </div>

              <h3 className="text-lg font-bold text-white group-hover:text-silver-light transition-colors">
                {item.title}
              </h3>

              <p className="text-luxury-300 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Confidence Ribbon */}
        <div className="mt-16 text-center">
          <a
            href={getVehicleWhatsAppUrl("Booking Inquiry")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-whatsapp hover:bg-whatsapp-hover text-luxury-950 font-bold text-base shadow-whatsapp-glow transition-all hover:scale-105"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>Connect Directly on WhatsApp: +91 9284430808</span>
          </a>
        </div>

      </div>
    </section>
  );
}
