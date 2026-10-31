"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MessageCircle, Users, Briefcase, Check, Sparkles, Filter } from "lucide-react";
import { FLEET_DATA, getVehicleWhatsAppUrl } from "@/data/fleet";

export default function FleetSection() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filteredFleet = activeFilter === "all"
    ? FLEET_DATA
    : activeFilter === "large"
    ? FLEET_DATA.filter((v) => v.capacity.includes("20") || v.capacity.includes("17"))
    : activeFilter === "mpv"
    ? FLEET_DATA.filter((v) => v.capacity.includes("7+") || v.capacity.includes("6+"))
    : FLEET_DATA.filter((v) => v.capacity.includes("4+"));

  return (
    <section id="fleet" className="py-24 bg-luxury-900/60 relative border-t border-luxury-800">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-gradient-radial from-luxury-800/10 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-luxury-950 border border-luxury-700 text-xs font-semibold text-silver-metallic uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-silver" />
            <span>Official Fleet Portfolio</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Our Premier <span className="text-metallic">Luxury Fleet</span>
          </h2>

          <p className="text-luxury-300 text-base sm:text-lg">
            Seven handpicked, pristine vehicles maintained to the highest standards of safety, 
            climate-controlled comfort, and executive hospitality.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            <button
              onClick={() => setActiveFilter("all")}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                activeFilter === "all"
                  ? "bg-white text-luxury-950 shadow-md scale-105"
                  : "bg-luxury-950/80 text-silver-metallic border border-luxury-800 hover:text-white"
              }`}
            >
              All 7 Vehicles
            </button>
            <button
              onClick={() => setActiveFilter("large")}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                activeFilter === "large"
                  ? "bg-white text-luxury-950 shadow-md scale-105"
                  : "bg-luxury-950/80 text-silver-metallic border border-luxury-800 hover:text-white"
              }`}
            >
              Group Coaches (17 - 20 Seater)
            </button>
            <button
              onClick={() => setActiveFilter("mpv")}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                activeFilter === "mpv"
                  ? "bg-white text-luxury-950 shadow-md scale-105"
                  : "bg-luxury-950/80 text-silver-metallic border border-luxury-800 hover:text-white"
              }`}
            >
              Luxury MPVs (6 - 8 Seater)
            </button>
            <button
              onClick={() => setActiveFilter("sedan")}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                activeFilter === "sedan"
                  ? "bg-white text-luxury-950 shadow-md scale-105"
                  : "bg-luxury-950/80 text-silver-metallic border border-luxury-800 hover:text-white"
              }`}
            >
              Private Sedans (4+1 Seater)
            </button>
          </div>
        </div>

        {/* Fleet Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredFleet.map((vehicle) => (
            <div
              key={vehicle.id}
              className="glass-card rounded-2xl overflow-hidden flex flex-col justify-between group border border-luxury-700/70 hover:border-silver-metallic/60"
            >
              {/* Card Upper: Image & Badges */}
              <div>
                {/* Image Container */}
                <div className="relative h-60 sm:h-64 w-full bg-luxury-950 overflow-hidden">
                  <Image
                    src={vehicle.image}
                    alt={`${vehicle.name} - ${vehicle.capacity} Chauffeur Vehicle in Goa`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-luxury-950 via-luxury-950/20 to-transparent" />

                  {/* Seating Capacity Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-luxury-950/90 border border-luxury-600/80 text-white font-bold text-xs backdrop-blur-md shadow-lg">
                      <Users className="w-3.5 h-3.5 text-whatsapp" />
                      {vehicle.capacity}
                    </span>
                  </div>

                  {/* Category Pill */}
                  <div className="absolute top-4 right-4 z-10">
                    <span className="px-2.5 py-1 rounded-md bg-luxury-900/90 border border-luxury-700 text-silver-light font-medium text-[11px] backdrop-blur-md">
                      {vehicle.category}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-silver-light transition-colors">
                      {vehicle.name}
                    </h3>
                    <p className="text-xs font-medium text-silver-metallic mt-1">
                      {vehicle.tagline}
                    </p>
                  </div>

                  <p className="text-luxury-300 text-sm leading-relaxed line-clamp-3">
                    {vehicle.description}
                  </p>

                  {/* Key Highlights */}
                  <div className="space-y-1.5 pt-2 border-t border-luxury-800">
                    {vehicle.features.slice(0, 3).map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-luxury-200">
                        <Check className="w-3.5 h-3.5 text-whatsapp flex-shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Specs Pill */}
                  <div className="flex items-center justify-between text-[11px] text-silver-metallic pt-3 border-t border-luxury-800/80">
                    <div className="flex items-center gap-1.5">
                      <Briefcase className="w-3.5 h-3.5 text-silver-light" />
                      <span>{vehicle.luggageCapacity}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer: WhatsApp Booking Action */}
              <div className="p-6 pt-0">
                <a
                  href={getVehicleWhatsAppUrl(vehicle.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2.5 py-3.5 px-4 rounded-xl bg-luxury-900 hover:bg-whatsapp text-silver-light hover:text-luxury-950 font-bold text-sm border border-luxury-700/80 hover:border-whatsapp shadow-sm hover:shadow-whatsapp-glow transition-all duration-300 group/btn"
                >
                  <MessageCircle className="w-4 h-4 text-whatsapp group-hover/btn:text-luxury-950 group-hover/btn:fill-current transition-colors" />
                  <span>Book {vehicle.name}</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Guarantee Banner */}
        <div className="mt-16 p-6 rounded-2xl glass-panel text-center max-w-4xl mx-auto border border-luxury-700/70">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-left">
              <h4 className="text-base font-bold text-white">Need multi-vehicle coordination or customized tour itineraries?</h4>
              <p className="text-xs text-silver-metallic mt-0.5">We cater to destination weddings, airport shuttle rotations, and executive convoys.</p>
            </div>
            <a
              href={getVehicleWhatsAppUrl("Fleet Consultation")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-whatsapp hover:bg-whatsapp-hover text-luxury-950 font-bold text-xs uppercase tracking-wider transition-all whitespace-nowrap shadow-whatsapp-glow"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Consult on WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
