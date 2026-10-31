"use client";

import React from "react";
import Image from "next/image";
import { ShieldCheck, Award, MapPin, Users, CheckCircle2, MessageCircle } from "lucide-react";
import { BUSINESS_INFO, getVehicleWhatsAppUrl } from "@/data/fleet";

export default function About() {
  return (
    <section id="about" className="py-24 bg-luxury-950 relative overflow-hidden border-t border-luxury-800/80">
      {/* Subtle luxury glow in background */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-luxury-800/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-luxury-700/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Images Collage */}
          <div className="lg:col-span-6 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden border border-luxury-700/80 shadow-2xl group">
              <div className="relative h-80 sm:h-96 w-full">
                <Image
                  src="/gallery/luxury-interior.jpg"
                  alt="INAYA TRAVEL Luxury Chauffeur Interior"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-950 via-transparent to-transparent opacity-80" />
              </div>
              <div className="absolute bottom-4 left-4 right-4 p-4 glass-panel rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-luxury-900 border border-luxury-700 text-silver-light">
                    <MapPin className="w-5 h-5 text-whatsapp" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Stationed in Panjim Patto, Goa</h4>
                    <p className="text-xs text-silver-metallic">Rapid dispatch to North Goa, South Goa, and both Airports</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Overlapping Badge Card */}
            <div className="absolute -bottom-6 -right-4 sm:-bottom-8 sm:right-6 z-20 glass-panel-elevated p-4 sm:p-5 rounded-2xl border border-luxury-600/60 shadow-luxury max-w-[240px] sm:max-w-xs">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-whatsapp/10 border border-whatsapp/30 text-whatsapp">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-white">100% VIP</div>
                  <div className="text-xs text-silver-metallic">Chauffeur Standard</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial About Content */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-luxury-900 border border-luxury-700 text-xs font-semibold text-silver-metallic tracking-wider uppercase">
              <span>About INAYA TRAVEL</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
              Crafting Exceptional Goa Journeys with <span className="text-metallic">Elegance & Integrity</span>.
            </h2>

            <p className="text-luxury-300 text-base sm:text-lg leading-relaxed">
              Headquartered at <strong>Panjim Patto</strong>, the central administrative and commercial nerve center of Goa, 
              <strong> INAYA TRAVEL</strong> was established with a singular vision: to deliver an authentic luxury travel 
              experience that combines immaculate vehicles, disciplined chauffeurs, and effortless WhatsApp-first booking.
            </p>

            <p className="text-luxury-400 text-sm sm:text-base leading-relaxed">
              We understand that modern travelers, visiting families, corporate executives, and wedding organizers despise 
              the uncertainty of unpredictable taxis. That is why our entire fleet—from executive sedans and luxury hybrid 
              MPVs to 17-seater Force Urbania and 20-seater Tempo Travellers—is maintained to pristine showroom benchmarks.
            </p>

            {/* Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-whatsapp flex-shrink-0 mt-0.5" />
                <span className="text-sm text-luxury-200">24/7 Dispatch Across All Goa Regions</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-whatsapp flex-shrink-0 mt-0.5" />
                <span className="text-sm text-luxury-200">Zero Surge or Concealed Charges</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-whatsapp flex-shrink-0 mt-0.5" />
                <span className="text-sm text-luxury-200">Mopa (GOX) & Dabolim (GOI) Specialists</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-whatsapp flex-shrink-0 mt-0.5" />
                <span className="text-sm text-luxury-200">Dedicated Uniformed Professional Chauffeurs</span>
              </div>
            </div>

            {/* Direct Connect Action */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href={getVehicleWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-whatsapp hover:bg-whatsapp-hover text-luxury-950 font-bold text-sm shadow-whatsapp-glow transition-all duration-300 hover:scale-105"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Talk with INAYA TRAVEL on WhatsApp</span>
              </a>

              <div className="text-xs text-silver-metallic">
                <div>Direct Hotline: <strong className="text-white">{BUSINESS_INFO.phone}</strong></div>
                <div>Location: <span className="text-luxury-300">Panjim Patto, Goa</span></div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
