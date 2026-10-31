"use client";

import React from "react";
import { ShieldCheck, MessageCircle, Star, CheckCircle, ThumbsUp } from "lucide-react";
import { BUSINESS_INFO, getVehicleWhatsAppUrl } from "@/data/fleet";

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 bg-luxury-950 relative border-t border-luxury-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-luxury-900 border border-luxury-700 text-xs font-semibold text-silver-metallic uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5 text-whatsapp" />
            <span>Trust & Authentic Reputation</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Guest Satisfaction & <span className="text-metallic">Genuine Service</span>
          </h2>

          <p className="text-luxury-300 text-base sm:text-lg">
            At <strong>INAYA TRAVEL</strong>, we pride ourselves on authentic integrity. 
            We do not display fabricated or unverified reviews. Our reputation is built on real, 
            consistent excellence on the roads of Goa.
          </p>
        </div>

        {/* Real Service Metrics & Trust Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-card rounded-2xl p-8 border border-luxury-800 text-center space-y-4">
            <div className="w-14 h-14 mx-auto rounded-full bg-luxury-900 border border-luxury-700 flex items-center justify-center">
              <Star className="w-7 h-7 text-gold fill-current" />
            </div>
            <h3 className="text-xl font-bold text-white">Genuine Guest Trust</h3>
            <p className="text-luxury-300 text-sm leading-relaxed">
              Serving business professionals, wedding parties, and vacationing families across Panjim, 
              North Goa, and South Goa with unwavering attention to punctuality.
            </p>
            <div className="pt-2 text-xs text-silver-metallic">
              ★ Direct management oversight on every trip
            </div>
          </div>

          <div className="glass-card rounded-2xl p-8 border border-luxury-800 text-center space-y-4">
            <div className="w-14 h-14 mx-auto rounded-full bg-luxury-900 border border-luxury-700 flex items-center justify-center">
              <CheckCircle className="w-7 h-7 text-whatsapp" />
            </div>
            <h3 className="text-xl font-bold text-white">Strict Punctuality Record</h3>
            <p className="text-luxury-300 text-sm leading-relaxed">
              Our chauffeurs arrive 15 minutes before scheduled pick-up for all Mopa (GOX) and Dabolim (GOI) 
              flight arrivals, ensuring zero transit anxiety.
            </p>
            <div className="pt-2 text-xs text-silver-metallic">
              ★ Flight arrival monitoring & greeting
            </div>
          </div>

          <div className="glass-card rounded-2xl p-8 border border-luxury-800 text-center space-y-4">
            <div className="w-14 h-14 mx-auto rounded-full bg-luxury-900 border border-luxury-700 flex items-center justify-center">
              <ThumbsUp className="w-7 h-7 text-silver-light" />
            </div>
            <h3 className="text-xl font-bold text-white">Direct WhatsApp Assistance</h3>
            <p className="text-luxury-300 text-sm leading-relaxed">
              Every inquiry and ride coordination is handled directly via our verified WhatsApp desk 
              at <strong>+91 9284430808</strong>. Fast, transparent, and respectful.
            </p>
            <div className="pt-2 text-xs text-silver-metallic">
              ★ No bots, no middlemen, direct support
            </div>
          </div>
        </div>

        {/* Authentic Feedback Banner */}
        <div className="mt-14 glass-panel-elevated p-8 rounded-2xl border border-luxury-700 text-center max-w-3xl mx-auto">
          <h4 className="text-lg font-bold text-white mb-2">Have you travelled with INAYA TRAVEL in Goa?</h4>
          <p className="text-xs sm:text-sm text-luxury-300 mb-6">
            We value your honest feedback. Message us directly on WhatsApp to share your experience 
            or to request custom corporate/wedding references.
          </p>
          <a
            href={getVehicleWhatsAppUrl("Feedback or Reference Inquiry")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-whatsapp hover:bg-whatsapp-hover text-luxury-950 font-bold text-xs uppercase tracking-wider shadow-whatsapp-glow transition-all"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Connect on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}
