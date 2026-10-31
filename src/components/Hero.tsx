"use client";

import React from "react";
import Image from "next/image";
import { MessageCircle, ChevronDown, ShieldCheck, Clock, MapPin, Award } from "lucide-react";
import { getVehicleWhatsAppUrl, BUSINESS_INFO } from "@/data/fleet";
import BookingWidget from "./BookingWidget";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-12 pb-20">
      {/* Background Image with Cinematic Luxury Overlays */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.jpg"
          alt="Luxury Goa Travel Highway at Dusk"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-105"
        />
        {/* Multilayer Dark Luxury Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-luxury-950 via-luxury-950/75 to-luxury-950/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-luxury-950/90 via-luxury-950/60 to-transparent" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-luxury-950/40 to-luxury-950/90" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Hero Text & Value Props */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Brand Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-luxury-900/90 border border-luxury-700/80 text-xs sm:text-sm text-silver-light backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-whatsapp animate-ping" />
              <span className="font-semibold tracking-wider uppercase text-silver">INAYA TRAVEL</span>
              <span className="text-luxury-600">•</span>
              <span className="text-luxury-300">Panjim Patto, Goa</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12]">
              Experience Goa in{" "}
              <span className="text-metallic">Unrivaled Luxury</span> & Executive Comfort.
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-luxury-300 max-w-2xl leading-relaxed">
              Panjim Patto’s premier private chauffeur and luxury vehicle service.
              From prompt airport transfers at Mopa & Dabolim to bespoke coastal sightseeing
              and spacious group mobility across our dedicated 7-vehicle fleet.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={getVehicleWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-whatsapp hover:bg-whatsapp-hover text-luxury-950 font-bold text-base shadow-whatsapp-glow transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Book Your Ride on WhatsApp</span>
              </a>

              <a
                href="#fleet"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-luxury-900/80 hover:bg-luxury-800 text-silver-light hover:text-white font-medium text-base border border-luxury-700/80 backdrop-blur-md transition-all duration-300 hover:border-silver-metallic"
              >
                <span>Explore Our 7 Vehicles</span>
                <ChevronDown className="w-4 h-4" />
              </a>
            </div>

            {/* Micro Trust Indicators */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/10 text-xs sm:text-sm text-luxury-300">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-silver-light flex-shrink-0" />
                <span>100% Sanitized Fleet</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-silver-light flex-shrink-0" />
                <span>24/7 On-Time Dispatch</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-silver-light flex-shrink-0" />
                <span>Panjim Patto Hub</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-silver-light flex-shrink-0" />
                <span>VIP Chauffeurs</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Quick Booking & Ride Inquiry Form */}
          <div className="lg:col-span-5">
            <BookingWidget />
          </div>

        </div>
      </div>
    </section>
  );
}
