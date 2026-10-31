"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle, MapPin, Phone, Mail, Clock, ShieldCheck, ArrowUp } from "lucide-react";
import { BUSINESS_INFO, FLEET_DATA, getVehicleWhatsAppUrl } from "@/data/fleet";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-luxury-950 text-luxury-300 border-t border-luxury-800/80 pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12 border-b border-luxury-800">
          
          {/* Brand & About Column */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="#home" className="inline-block">
              <div className="relative h-14 w-44">
                <Image
                  src="/inaya-logo.png"
                  alt="INAYA TRAVEL Official Logo"
                  fill
                  sizes="180px"
                  className="object-contain"
                />
              </div>
            </Link>

            <p className="text-sm text-luxury-400 leading-relaxed">
              Panjim Patto’s premier luxury chauffeur and car rental company. 
              Delivering executive transfers, tailored sightseeing, and high-capacity 
              group travel across Goa with unwavering punctuality and sophistication.
            </p>

            <div className="pt-2">
              <a
                href={getVehicleWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-whatsapp hover:bg-whatsapp-hover text-luxury-950 font-bold text-xs uppercase tracking-wider shadow-whatsapp-glow transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Chat on WhatsApp: +91 9284430808</span>
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link href="#home" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#fleet" className="hover:text-white transition-colors">
                  Our Fleet
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#destinations" className="hover:text-white transition-colors">
                  Goa Destinations
                </Link>
              </li>
              <li>
                <Link href="#why-choose-us" className="hover:text-white transition-colors">
                  Why Choose Us
                </Link>
              </li>
              <li>
                <Link href="#gallery" className="hover:text-white transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Dedicated Fleet Vehicles */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Our 7 Fleet Vehicles
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {FLEET_DATA.map((v) => (
                <li key={v.id}>
                  <a
                    href={getVehicleWhatsAppUrl(v.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors flex items-center justify-between group"
                  >
                    <span>{v.name}</span>
                    <span className="text-[11px] text-silver-metallic font-medium group-hover:text-whatsapp">
                      {v.capacity}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Business Office
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-luxury-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-whatsapp flex-shrink-0 mt-0.5" />
                <span>Panjim Patto, Goa 403001, India</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-whatsapp flex-shrink-0" />
                <a
                  href={getVehicleWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white font-semibold"
                >
                  {BUSINESS_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-silver-light flex-shrink-0" />
                <a
                  href={`mailto:${BUSINESS_INFO.email}`}
                  className="hover:text-white break-all"
                >
                  {BUSINESS_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-silver-light flex-shrink-0" />
                <span>24/7 Dispatch & Reservations</span>
              </div>
              <div className="flex items-center gap-2.5 pt-1 text-silver-metallic">
                <ShieldCheck className="w-4 h-4 text-silver" />
                <span>Official Brand Identity Registered</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-luxury-500">
          <div>
            © {new Date().getFullYear()} <strong>{BUSINESS_INFO.name}</strong>. All rights reserved. Panjim Patto, Goa.
          </div>

          <div className="flex items-center gap-6">
            <span>Luxury Chauffeur Services</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-luxury-900 border border-luxury-800 text-silver-metallic hover:text-white transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
