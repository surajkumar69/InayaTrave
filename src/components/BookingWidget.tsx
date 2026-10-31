"use client";

import React, { useState } from "react";
import { MessageCircle, Calendar, Users, Car, MapPin, Send } from "lucide-react";
import { FLEET_DATA, getCustomBookingWhatsAppUrl } from "@/data/fleet";

export default function BookingWidget() {
  const [vehicle, setVehicle] = useState("Toyota Innova Hycross");
  const [service, setService] = useState("Goa Airport Transfer");
  const [pickupDate, setPickupDate] = useState("");
  const [pickupLocation, setPickupLocation] = useState("");
  const [passengers, setPassengers] = useState("2-4");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const url = getCustomBookingWhatsAppUrl({
      vehicle,
      pickupDate: pickupDate || "Upcoming Date",
      pickupLocation: pickupLocation || "Goa",
      destination: service,
      passengers,
    });
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="glass-panel-elevated p-6 sm:p-7 rounded-2xl shadow-luxury border border-luxury-700/80 relative">
      <div className="absolute top-0 right-0 transform translate-x-1 -translate-y-2">
        <span className="bg-whatsapp text-luxury-950 font-bold text-[11px] uppercase tracking-wider py-1 px-3 rounded-full shadow-md">
          Fast WhatsApp Confirmation
        </span>
      </div>

      <div className="mb-5">
        <h3 className="text-xl font-bold text-white flex items-center gap-2">
          <span>Book Your Luxury Ride</span>
        </h3>
        <p className="text-xs text-silver-metallic mt-1">
          Select your requirements & receive instant quotation via WhatsApp
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 text-left">
        {/* Service Type */}
        <div>
          <label className="block text-xs font-medium text-luxury-300 mb-1.5 flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-silver-light" />
            Service or Destination
          </label>
          <select
            value={service}
            onChange={(e) => setService(e.target.value)}
            className="w-full bg-luxury-900 border border-luxury-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-silver-metallic transition-colors"
          >
            <option value="Airport Transfer (Mopa GOX)">Airport Transfer: Mopa (GOX)</option>
            <option value="Airport Transfer (Dabolim GOI)">Airport Transfer: Dabolim (GOI)</option>
            <option value="North Goa Local Sightseeing">North Goa Sightseeing</option>
            <option value="South Goa Heritage & Beaches">South Goa Heritage & Beaches</option>
            <option value="Dudhsagar Waterfalls Safari">Dudhsagar Waterfalls Trip</option>
            <option value="Outstation Trip (Mumbai/Pune/Bangalore)">Outstation Travel</option>
            <option value="Full Day Chauffeur Rental">Full Day Private Car Rental</option>
            <option value="Wedding / Group Logistics">Wedding & Event Transportation</option>
          </select>
        </div>

        {/* Vehicle Selection */}
        <div>
          <label className="block text-xs font-medium text-luxury-300 mb-1.5 flex items-center gap-1.5">
            <Car className="w-3.5 h-3.5 text-silver-light" />
            Select Fleet Vehicle
          </label>
          <select
            value={vehicle}
            onChange={(e) => setVehicle(e.target.value)}
            className="w-full bg-luxury-900 border border-luxury-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-silver-metallic transition-colors"
          >
            {FLEET_DATA.map((v) => (
              <option key={v.id} value={v.name}>
                {v.name} ({v.capacity})
              </option>
            ))}
          </select>
        </div>

        {/* Date and Passengers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          <div>
            <label className="block text-xs font-medium text-luxury-300 mb-1.5 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-silver-light" />
              Travel Date
            </label>
            <input
              type="date"
              value={pickupDate}
              onChange={(e) => setPickupDate(e.target.value)}
              className="w-full bg-luxury-900 border border-luxury-700 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-silver-metallic transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-luxury-300 mb-1.5 flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-silver-light" />
              Passengers
            </label>
            <select
              value={passengers}
              onChange={(e) => setPassengers(e.target.value)}
              className="w-full bg-luxury-900 border border-luxury-700 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-silver-metallic transition-colors"
            >
              <option value="1-2 Guests">1 - 2 Guests (Sedan / MPV)</option>
              <option value="3-4 Guests">3 - 4 Guests (MPV / Crysta / Dzire)</option>
              <option value="5-7 Guests">5 - 7 Guests (Hycross / Crysta / Ertiga / Carens)</option>
              <option value="8-16 Guests">8 - 16 Guests (Force Urbania 17S)</option>
              <option value="17-20 Guests">17 - 20 Guests (Tempo Traveller 20S)</option>
              <option value="20+ Large Group">20+ Multiple Vehicles</option>
            </select>
          </div>
        </div>

        {/* Pickup Location */}
        <div>
          <label className="block text-xs font-medium text-luxury-300 mb-1.5 flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-silver-light" />
            Pickup Location in Goa
          </label>
          <input
            type="text"
            placeholder="e.g. Mopa Airport, Panjim, Candolim Hotel..."
            value={pickupLocation}
            onChange={(e) => setPickupLocation(e.target.value)}
            className="w-full bg-luxury-900 border border-luxury-700 rounded-xl px-3.5 py-2 text-sm text-white placeholder-luxury-600 focus:outline-none focus:border-silver-metallic transition-colors"
          />
        </div>

        {/* Submit to WhatsApp */}
        <button
          type="submit"
          className="w-full mt-2 flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-whatsapp hover:bg-whatsapp-hover text-luxury-950 font-bold text-sm shadow-whatsapp-glow transition-all duration-300 hover:scale-[1.01] active:scale-[0.99]"
        >
          <MessageCircle className="w-4 h-4 fill-current" />
          <span>Send Booking Request on WhatsApp</span>
        </button>

        <p className="text-[11px] text-center text-luxury-400 pt-1">
          Direct reply from INAYA TRAVEL desk (+91 9284430808) within minutes.
        </p>
      </form>
    </div>
  );
}
