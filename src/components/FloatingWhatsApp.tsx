"use client";

import React, { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";
import { getVehicleWhatsAppUrl, BUSINESS_INFO } from "@/data/fleet";

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show tooltip after 3 seconds to catch attention smoothly
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end flex-col gap-2">
      {/* Tooltip speech bubble */}
      {showTooltip && (
        <div className="relative glass-panel-elevated py-2 px-3.5 rounded-xl border border-luxury-700 shadow-luxury max-w-[210px] animate-fade-in text-left">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-1 right-1 text-luxury-400 hover:text-white p-0.5"
            aria-label="Close tooltip"
          >
            <X className="w-3 h-3" />
          </button>
          <div className="text-[11px] font-bold text-white flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-whatsapp animate-ping" />
            <span>Need a luxury ride in Goa?</span>
          </div>
          <p className="text-[10px] text-silver-metallic mt-0.5">
            Chat with INAYA TRAVEL on WhatsApp now!
          </p>
        </div>
      )}

      {/* Floating Button */}
      <a
        href={getVehicleWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Book on WhatsApp with INAYA TRAVEL"
        className="group relative flex items-center gap-3 bg-whatsapp hover:bg-whatsapp-hover text-luxury-950 p-4 rounded-full shadow-whatsapp-glow transition-all duration-300 hover:scale-110 active:scale-95"
      >
        <MessageCircle className="w-7 h-7 fill-current" />
        <span className="hidden sm:inline font-bold text-sm tracking-wide pr-1">
          WhatsApp Booking
        </span>
      </a>
    </div>
  );
}
