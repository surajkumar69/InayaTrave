"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle, Menu, X, MapPin, Phone, Shield } from "lucide-react";
import { BUSINESS_INFO, getVehicleWhatsAppUrl } from "@/data/fleet";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Our Fleet", href: "#fleet" },
    { label: "Services", href: "#services" },
    { label: "Goa Destinations", href: "#destinations" },
    { label: "Why Choose Us", href: "#why-choose-us" },
    { label: "Gallery", href: "#gallery" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* Top Luxury Bar */}
      <div className="hidden lg:block bg-luxury-950 border-b border-luxury-800/80 text-xs text-silver-metallic py-2 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-luxury-300">
              <MapPin className="w-3.5 h-3.5 text-luxury-400" />
              Panjim Patto, Goa
            </span>
            <span className="flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-silver-metallic" />
              Premium Chauffeur Driven Fleet • 24/7 Service
            </span>
          </div>
          <div className="flex items-center gap-6">
            <a
              href={`mailto:${BUSINESS_INFO.email}`}
              className="hover:text-white transition-colors"
            >
              {BUSINESS_INFO.email}
            </a>
            <a
              href={getVehicleWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="text-luxury-200 hover:text-white flex items-center gap-1.5 font-medium transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-whatsapp" />
              {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-luxury-950/95 backdrop-blur-md border-b border-luxury-800 shadow-luxury py-3"
            : "bg-luxury-950/80 backdrop-blur-sm border-b border-white/5 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="#home" className="flex items-center gap-3 group">
              <div className="relative h-12 w-32 sm:h-14 sm:w-40 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/inaya-logo.png"
                  alt="INAYA TRAVEL Logo"
                  fill
                  sizes="(max-width: 640px) 130px, 160px"
                  className="object-contain"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center gap-7">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-silver-metallic hover:text-white transition-colors duration-200 relative group py-1"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-silver-light transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </nav>

            {/* Desktop WhatsApp Action Button */}
            <div className="hidden sm:flex items-center gap-4">
              <a
                href={getVehicleWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-whatsapp hover:bg-whatsapp-hover text-luxury-950 font-semibold text-sm shadow-whatsapp-glow transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Book on WhatsApp</span>
              </a>
            </div>

            {/* Mobile Menu Hamburger */}
            <div className="flex xl:hidden items-center gap-3">
              <a
                href={getVehicleWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="sm:hidden p-2 rounded-full bg-whatsapp text-luxury-950 font-semibold shadow-whatsapp-glow"
                aria-label="WhatsApp Booking"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
              </a>
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-lg bg-luxury-900 border border-luxury-800 text-silver-light hover:text-white focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="xl:hidden bg-luxury-950/98 border-b border-luxury-800 px-5 pt-4 pb-6 space-y-4 shadow-2xl backdrop-blur-xl animate-fade-in">
            <div className="grid grid-cols-1 gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-3 py-2.5 text-base font-medium text-luxury-200 hover:text-white hover:bg-luxury-900 rounded-lg transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="pt-4 border-t border-luxury-800 space-y-3">
              <div className="text-xs text-silver-metallic flex items-center gap-2">
                <MapPin className="w-4 h-4 text-silver-light" />
                <span>Panjim Patto, Goa</span>
              </div>
              <div className="text-xs text-silver-metallic flex items-center gap-2">
                <Phone className="w-4 h-4 text-whatsapp" />
                <span>{BUSINESS_INFO.phone}</span>
              </div>
              <a
                href={getVehicleWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-whatsapp hover:bg-whatsapp-hover text-luxury-950 font-bold text-center shadow-whatsapp-glow transition-all"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Book on WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
