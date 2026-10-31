"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Camera, ZoomIn, X, MessageCircle } from "lucide-react";
import { GALLERY_ITEMS } from "@/data/destinations";
import { getVehicleWhatsAppUrl } from "@/data/fleet";

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-24 bg-luxury-900/60 relative border-t border-luxury-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-luxury-950 border border-luxury-700 text-xs font-semibold text-silver-metallic uppercase tracking-wider">
            <Camera className="w-3.5 h-3.5 text-silver-light" />
            <span>Visual Showcase</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
            The INAYA <span className="text-metallic">Travel Experience</span>
          </h2>

          <p className="text-luxury-300 text-base sm:text-lg">
            A glimpse into the executive cabins, immaculate vehicles, and breathtaking Goa landscapes 
            our guests experience daily.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_ITEMS.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedImage(item.image)}
              className="relative h-72 rounded-2xl overflow-hidden cursor-pointer group border border-luxury-800 hover:border-silver-metallic/60 transition-all duration-500 shadow-lg"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover object-center group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-950 via-luxury-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

              {/* Hover Zoom Icon */}
              <div className="absolute top-4 right-4 p-2 rounded-full bg-luxury-950/80 border border-luxury-700 text-silver-light opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ZoomIn className="w-4 h-4" />
              </div>

              {/* Title & Category Tag */}
              <div className="absolute bottom-4 left-4 right-4 p-3 glass-panel rounded-xl transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-[10px] uppercase font-bold tracking-wider text-whatsapp">
                  {item.category}
                </span>
                <h4 className="text-sm font-bold text-white truncate">
                  {item.title}
                </h4>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 p-3 rounded-full bg-luxury-900 border border-luxury-700 text-white hover:bg-luxury-800 transition-colors"
              aria-label="Close Preview"
            >
              <X className="w-6 h-6" />
            </button>
            <div
              className="relative max-w-4xl max-h-[85vh] w-full h-[600px] rounded-2xl overflow-hidden border border-luxury-700 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="Enlarged INAYA TRAVEL Gallery"
                fill
                sizes="100vw"
                className="object-contain"
              />
            </div>
          </div>
        )}

        {/* Gallery CTA */}
        <div className="mt-14 text-center">
          <a
            href={getVehicleWhatsAppUrl("Photo Gallery Inquiry")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-luxury-900 border border-luxury-700 hover:border-whatsapp text-silver-light hover:text-white text-xs font-semibold transition-all hover:scale-105"
          >
            <MessageCircle className="w-4 h-4 text-whatsapp" />
            <span>Request Vehicle Interior & Exterior Videos via WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}
