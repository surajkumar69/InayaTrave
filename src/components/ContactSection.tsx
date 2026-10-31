"use client";

import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, CheckCircle2 } from "lucide-react";
import { BUSINESS_INFO, getVehicleWhatsAppUrl } from "@/data/fleet";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [travelDetails, setTravelDetails] = useState("");
  const [service, setService] = useState("Airport Transfer");

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    const textLines = [
      `Hello INAYA TRAVEL, my name is ${name || "a traveler"}.`,
      `Service: ${service}`,
      travelDetails ? `Travel Details: ${travelDetails}` : "I would like to inquire about vehicle availability and rates.",
      `Please provide booking details.`
    ];
    const url = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(textLines.join("\n"))}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" className="py-24 bg-luxury-900/60 relative border-t border-luxury-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-luxury-950 border border-luxury-700 text-xs font-semibold text-silver-metallic uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5 text-whatsapp" />
            <span>Connect with Us</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Contact <span className="text-metallic">INAYA TRAVEL</span>
          </h2>

          <p className="text-luxury-300 text-base sm:text-lg">
            Stationed at Panjim Patto, Goa. Reach out directly on WhatsApp for immediate 
            fleet quotations, custom itineraries, and reservations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Business Info Cards */}
          <div className="lg:col-span-5 space-y-5">
            {/* Location Card */}
            <div className="glass-card rounded-2xl p-6 border border-luxury-800 flex items-start gap-4">
              <div className="p-3.5 rounded-xl bg-luxury-900 border border-luxury-700 text-whatsapp flex-shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div className="space-y-1 text-left">
                <h4 className="text-base font-bold text-white">Hub Location</h4>
                <p className="text-luxury-300 text-sm font-medium">Panjim Patto, Goa</p>
                <p className="text-luxury-400 text-xs">Patto Commercial Centre, Panaji (Panjim), Goa 403001</p>
              </div>
            </div>

            {/* WhatsApp Card */}
            <div className="glass-card rounded-2xl p-6 border border-luxury-800 flex items-start gap-4">
              <div className="p-3.5 rounded-xl bg-whatsapp/10 border border-whatsapp/30 text-whatsapp flex-shrink-0">
                <MessageCircle className="w-6 h-6 fill-current" />
              </div>
              <div className="space-y-1 text-left">
                <h4 className="text-base font-bold text-white">WhatsApp & Phone</h4>
                <p className="text-white text-base font-bold tracking-wide">{BUSINESS_INFO.phone}</p>
                <p className="text-xs text-silver-metallic">Primary Booking Channel • Instant Response</p>
                <a
                  href={getVehicleWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-whatsapp hover:underline font-semibold pt-1"
                >
                  <span>Chat on WhatsApp</span>
                  <span>→</span>
                </a>
              </div>
            </div>

            {/* Email Card */}
            <div className="glass-card rounded-2xl p-6 border border-luxury-800 flex items-start gap-4">
              <div className="p-3.5 rounded-xl bg-luxury-900 border border-luxury-700 text-silver-light flex-shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div className="space-y-1 text-left">
                <h4 className="text-base font-bold text-white">Email Address</h4>
                <a
                  href={`mailto:${BUSINESS_INFO.email}`}
                  className="text-luxury-300 text-sm hover:text-white transition-colors block break-all font-medium"
                >
                  {BUSINESS_INFO.email}
                </a>
                <p className="text-xs text-luxury-400">For corporate contracts & multi-day invoices</p>
              </div>
            </div>

            {/* Hours Card */}
            <div className="glass-card rounded-2xl p-6 border border-luxury-800 flex items-start gap-4">
              <div className="p-3.5 rounded-xl bg-luxury-900 border border-luxury-700 text-silver-light flex-shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div className="space-y-1 text-left">
                <h4 className="text-base font-bold text-white">Operational Timings</h4>
                <p className="text-luxury-300 text-sm font-medium">24 Hours / 7 Days a Week</p>
                <p className="text-xs text-luxury-400">Round-the-clock airport arrivals & departures</p>
              </div>
            </div>
          </div>

          {/* Right Column: Direct WhatsApp Interactive Form & Map */}
          <div className="lg:col-span-7 space-y-6">
            <div className="glass-panel-elevated p-8 rounded-2xl border border-luxury-700 shadow-luxury">
              <h3 className="text-2xl font-bold text-white mb-2 text-left">
                Quick WhatsApp Booking Request
              </h3>
              <p className="text-xs text-silver-metallic mb-6 text-left">
                Submit your trip details below to initiate a pre-filled WhatsApp conversation with our booking desk.
              </p>

              <form onSubmit={handleSendMessage} className="space-y-4 text-left">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-luxury-300 mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-luxury-900 border border-luxury-700 rounded-xl px-4 py-3 text-sm text-white placeholder-luxury-600 focus:outline-none focus:border-silver-metallic transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-luxury-300 mb-1.5">
                      Service Required
                    </label>
                    <select
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full bg-luxury-900 border border-luxury-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-silver-metallic transition-colors"
                    >
                      <option value="Airport Transfer (Mopa/Dabolim)">Airport Transfer (Mopa/Dabolim)</option>
                      <option value="Goa Local Sightseeing">Goa Local Sightseeing</option>
                      <option value="Group Transportation (Urbania / Tempo)">Group Transportation (Urbania / Tempo)</option>
                      <option value="Outstation Travel">Outstation Travel</option>
                      <option value="Private Car Rental with Chauffeur">Private Car Rental with Chauffeur</option>
                      <option value="Destination Wedding Fleet">Destination Wedding Fleet</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-luxury-300 mb-1.5">
                    Dates, Passenger Count & Specific Requirements
                  </label>
                  <textarea
                    rows={3}
                    placeholder="e.g. Need Innova Hycross for 4 passengers from Mopa Airport to Candolim on 15th Nov, returning on 18th Nov..."
                    value={travelDetails}
                    onChange={(e) => setTravelDetails(e.target.value)}
                    className="w-full bg-luxury-900 border border-luxury-700 rounded-xl px-4 py-3 text-sm text-white placeholder-luxury-600 focus:outline-none focus:border-silver-metallic transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2.5 py-4 px-6 rounded-xl bg-whatsapp hover:bg-whatsapp-hover text-luxury-950 font-bold text-sm shadow-whatsapp-glow transition-all duration-300 hover:scale-[1.01]"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span>Open & Send on WhatsApp</span>
                </button>
              </form>
            </div>

            {/* Embedded Location Map Preview */}
            <div className="rounded-2xl overflow-hidden border border-luxury-700/80 h-64 sm:h-72 w-full relative">
              <iframe
                title="INAYA TRAVEL Location - Panjim Patto, Goa"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15380.999797746412!2d73.83446071477755!3d15.495066986566818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfc0b4578dfc57%3A0xe76e93817f549c4f!2sPatto%20Centre%2C%20Panaji%2C%20Goa%20403001!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) contrast(90%)" }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute top-3 left-3 glass-panel px-3 py-1.5 rounded-lg text-xs font-semibold text-white pointer-events-none">
                Panjim Patto, Goa Hub
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
