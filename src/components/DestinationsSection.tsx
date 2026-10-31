"use client";

import React from "react";
import Image from "next/image";
import { MapPin, MessageCircle, ArrowRight, Check } from "lucide-react";
import { DESTINATIONS_DATA } from "@/data/destinations";
import { BUSINESS_INFO } from "@/data/fleet";

export default function DestinationsSection() {
  const getDestinationWhatsAppUrl = (destName: string) => {
    const text = `Hello INAYA TRAVEL, I want to plan a sightseeing trip to ${destName}. Please share itinerary packages and available vehicles.`;
    return `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="destinations" className="py-24 bg-luxury-950 relative border-t border-luxury-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-luxury-900 border border-luxury-700 text-xs font-semibold text-silver-metallic uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5 text-silver-light" />
            <span>Curated Goa Excursions</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Iconic Goa <span className="text-metallic">Travel Destinations</span>
          </h2>

          <p className="text-luxury-300 text-base sm:text-lg">
            Discover Goa’s golden coastlines, historic Portuguese quarters, and cascading waterfalls
            in the comfort of our air-conditioned chauffeur-driven fleet.
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DESTINATIONS_DATA.map((dest, idx) => (
            <div
              key={dest.id}
              className={`glass-card rounded-2xl overflow-hidden flex flex-col justify-between group border border-luxury-800 hover:border-silver-metallic/60 transition-all duration-300 ${
                idx === 0 ? "lg:col-span-2" : ""
              }`}
            >
              <div>
                {/* Image Container */}
                <div className={`relative w-full bg-luxury-950 overflow-hidden ${idx === 0 ? "h-72 sm:h-80" : "h-60"}`}>
                  <Image
                    src={dest.image}
                    alt={`${dest.name} - Goa Tour with INAYA TRAVEL`}
                    fill
                    sizes={idx === 0 ? "(max-width: 1024px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"}
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-luxury-950 via-luxury-950/20 to-transparent" />

                  {/* Badges */}
                  <div className="absolute top-4 left-4 z-10 flex gap-2">
                    <span className="px-3 py-1 rounded-full bg-luxury-950/90 border border-luxury-700 text-silver-light font-bold text-xs backdrop-blur-md">
                      {dest.region}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-luxury-900/90 border border-luxury-600 text-white font-medium text-xs backdrop-blur-md">
                      {dest.tag}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-silver-light transition-colors">
                    {dest.name}
                  </h3>

                  <p className="text-luxury-300 text-sm leading-relaxed">
                    {dest.description}
                  </p>

                  {/* Highlights */}
                  <div className="pt-2 border-t border-luxury-800/80">
                    <div className="text-xs font-semibold text-silver-metallic uppercase tracking-wider mb-2">
                      Tour Highlights
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                      {dest.highlights.map((h, hIdx) => (
                        <div key={hIdx} className="flex items-center gap-1.5 text-xs text-luxury-200">
                          <Check className="w-3.5 h-3.5 text-whatsapp flex-shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 pt-0">
                <a
                  href={getDestinationWhatsAppUrl(dest.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-between px-4 py-3 rounded-xl bg-luxury-900 hover:bg-whatsapp text-silver-light hover:text-luxury-950 font-bold text-xs border border-luxury-700/80 hover:border-whatsapp transition-all duration-300 group/btn"
                >
                  <span className="flex items-center gap-2">
                    <MessageCircle className="w-4 h-4 text-whatsapp group-hover/btn:text-luxury-950 group-hover/btn:fill-current transition-colors" />
                    <span>Plan {dest.name} Trip on WhatsApp</span>
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
