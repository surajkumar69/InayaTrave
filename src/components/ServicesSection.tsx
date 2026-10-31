"use client";

import React from "react";
import { Compass, Plane, MapPin, HeartHandshake, Users, Car, ArrowRight, MessageCircle } from "lucide-react";
import { SERVICES_DATA } from "@/data/services";
import { BUSINESS_INFO } from "@/data/fleet";

export default function ServicesSection() {
  const getIcon = (name: string) => {
    switch (name) {
      case "Compass":
        return <Compass className="w-6 h-6 text-silver-light" />;
      case "Plane":
        return <Plane className="w-6 h-6 text-silver-light" />;
      case "MapPin":
        return <MapPin className="w-6 h-6 text-silver-light" />;
      case "HeartHandshake":
        return <HeartHandshake className="w-6 h-6 text-silver-light" />;
      case "Users":
        return <Users className="w-6 h-6 text-silver-light" />;
      case "Car":
        return <Car className="w-6 h-6 text-silver-light" />;
      default:
        return <Car className="w-6 h-6 text-silver-light" />;
    }
  };

  const getServiceWhatsAppUrl = (serviceTitle: string) => {
    const text = `Hello INAYA TRAVEL, I want to inquire about your ${serviceTitle} service. Please share packages and vehicle details.`;
    return `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="services" className="py-24 bg-luxury-950 relative border-t border-luxury-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-luxury-900 border border-luxury-700 text-xs font-semibold text-silver-metallic uppercase tracking-wider">
            <span>Tailored Travel Experiences</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Our Bespoke <span className="text-metallic">Travel Services</span>
          </h2>

          <p className="text-luxury-300 text-base sm:text-lg">
            From punctual airport greets to panoramic coastal tours and high-capacity wedding logistics,
            discover personalized chauffeur services crafted for effortless Goa journeys.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((srv) => (
            <div
              key={srv.id}
              className="glass-card rounded-2xl p-7 flex flex-col justify-between group border border-luxury-800 hover:border-silver-metallic/60 transition-all duration-300"
            >
              <div>
                {/* Icon & Subtitle Header */}
                <div className="flex items-center justify-between mb-5">
                  <div className="p-3.5 rounded-xl bg-luxury-900/90 border border-luxury-700/80 group-hover:bg-luxury-800 group-hover:border-silver transition-colors">
                    {getIcon(srv.iconName)}
                  </div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-silver-metallic px-2.5 py-1 rounded bg-luxury-900 border border-luxury-800">
                    {srv.subtitle}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-silver-light transition-colors">
                  {srv.title}
                </h3>

                <p className="text-luxury-300 text-sm leading-relaxed mb-6">
                  {srv.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2 mb-6 pt-4 border-t border-luxury-800/80">
                  {srv.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-luxury-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-whatsapp mt-1.5 flex-shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <a
                  href={getServiceWhatsAppUrl(srv.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-between px-4 py-3 rounded-xl bg-luxury-900/90 hover:bg-whatsapp text-silver-light hover:text-luxury-950 text-xs font-bold border border-luxury-700 hover:border-whatsapp transition-all duration-300 group/btn"
                >
                  <span className="flex items-center gap-2">
                    <MessageCircle className="w-4 h-4 text-whatsapp group-hover/btn:text-luxury-950 group-hover/btn:fill-current transition-colors" />
                    <span>Inquire via WhatsApp</span>
                  </span>
                  <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
