export interface Vehicle {
  id: string;
  name: string;
  category: string;
  capacity: string;
  tagline: string;
  description: string;
  image: string;
  features: string[];
  luggageCapacity: string;
  idealFor: string;
}

export const FLEET_DATA: Vehicle[] = [
  {
    id: "tempo-traveller-20",
    name: "Tempo Traveller",
    category: "Executive Mini Coach",
    capacity: "20 Seater",
    tagline: "Unmatched spacious luxury for large corporate & wedding groups",
    description: "Designed for premium group transportation across Goa and outstation tours. Features 20 plush high-back pushback seats, individual AC vents, wide panoramic windows, and ample luggage boot space.",
    image: "/fleet/tempo-traveller.jpg",
    features: [
      "20 Reclining Executive Seats",
      "Ducted Roof Air Conditioning",
      "Extra-Wide Luggage Compartment",
      "Smooth Long-Distance Suspension",
      "Music & Audio Entertainment System",
      "Pristine Chauffeur-Driven Service"
    ],
    luggageCapacity: "15-18 Large Suitcases",
    idealFor: "Destination Weddings, Corporate Delegations, Grand Family Reunions"
  },
  {
    id: "force-urbania-17",
    name: "Force Urbania",
    category: "Ultra-Luxury Modern Van",
    capacity: "17 Seater",
    tagline: "Next-generation European styling and business-class travel",
    description: "The gold standard in luxury group travel. Boasts aerodynamic European design, whisper-quiet cabin acoustics, individual USB charging ports, recliner captain-style ergonomics, and panoramic sightlines.",
    image: "/fleet/force-urbania.jpg",
    features: [
      "17 Business-Class Recliner Seats",
      "Individual AC Vents & Ambient Lighting",
      "USB Ports at Every Seat",
      "Air-Suspension Ride Comfort",
      "Massive Panoramic Windows",
      "Executive Professional Chauffeur"
    ],
    luggageCapacity: "12-15 Medium Suitcases",
    idealFor: "VIP Delegations, Luxury Family Vacations, High-End Event Commutes"
  },
  {
    id: "toyota-innova-hycross",
    name: "Toyota Innova Hycross",
    category: "Premium Luxury Hybrid MPV",
    capacity: "7+2 Seater",
    tagline: "Cutting-edge hybrid luxury with ottoman captain comfort",
    description: "Experience the epitome of modern sophistication. The Toyota Innova Hycross delivers silent hybrid cruising, opulent multi-zone climate control, ultra-spacious legroom, and refined styling.",
    image: "/fleet/toyota-innova-hycross.jpg",
    features: [
      "7+2 Ergonomic Seating Configuration",
      "Ultra-Smooth Hybrid Powertrain",
      "Multi-Zone Automatic Climate Control",
      "Plush Leather-Appointed Upholstery",
      "Dual Airbags & Advanced Safety Package",
      "Top-Tier Chauffeur Hospitality"
    ],
    luggageCapacity: "4-5 Large Suitcases + Cabin Bags",
    idealFor: "Airport VIP Pickups, Executive Sightseeing, Luxury Family Travel"
  },
  {
    id: "toyota-innova-crysta",
    name: "Toyota Innova Crysta",
    category: "Executive Luxury MPV",
    capacity: "7+1 Seater",
    tagline: "India's most trusted executive long-distance champion",
    description: "Renowned for its commanding road presence, royal ride comfort, and robust highway reliability. Perfect for exploring both bustling North Goa beach shacks and tranquil South Goa heritage estates.",
    image: "/fleet/toyota-innova-crysta.jpg",
    features: [
      "7+1 Comfortable Seating Arrangement",
      "Powerful Dual Air-Conditioning",
      "Superior High-Speed Highway Stability",
      "Ample Boot Space with Foldable 3rd Row",
      "Premium Tinted UV Cut Windows",
      "Dedicated Uniformed Chauffeur"
    ],
    luggageCapacity: "4-5 Large Suitcases",
    idealFor: "Goa Sightseeing, Dabolim & Mopa Airport Transfers, Outstation Trips"
  },
  {
    id: "maruti-suzuki-ertiga",
    name: "Maruti Suzuki Ertiga",
    category: "Smart Family MPV",
    capacity: "6+1 Seater",
    tagline: "Effortless versatility, smart comfort, and smooth city transit",
    description: "A compact yet remarkably spacious 7-seater MPV engineered for seamless city maneuvers and family adventures. Offers flexible seating configurations, excellent cooling, and supreme comfort.",
    image: "/fleet/maruti-ertiga.jpg",
    features: [
      "6+1 Flexible Seating Layout",
      "Roof-Mounted 2nd Row AC Vents",
      "Smart Hybrid Smooth Acceleration",
      "Spacious Cabin Ergonomics",
      "Clean & Sanitized Interiors",
      "Punctual Courteous Chauffeur"
    ],
    luggageCapacity: "3 Medium Suitcases + Hand Baggage",
    idealFor: "Family Beach Holidays, Local Goa Exploration, Budget-Smart Luxury"
  },
  {
    id: "kia-carens",
    name: "Kia Carens",
    category: "Modern Recreational MPV",
    capacity: "6+1 Seater",
    tagline: "Futuristic styling, smart amenities, and refined ride quality",
    description: "Combines SUV boldness with MPV practicality. Features signature star-map DRLs, premium leatherette seating, ventilated space, and ultra-smooth highway cruising for couples and families.",
    image: "/fleet/kia-carens.jpg",
    features: [
      "6+1 Plush Ergonomic Seats",
      "Roof AC Vents with Diffuse Airflow",
      "Sleek High-Tech Interior Styling",
      "Multiple Device Fast Charging Points",
      "Generous Knee & Legroom",
      "Experienced Local Goa Chauffeur"
    ],
    luggageCapacity: "3-4 Medium Suitcases",
    idealFor: "Couples & Small Families, Goa Nightlife Commutes, Day Excursions"
  },
  {
    id: "maruti-suzuki-dzire",
    name: "Maruti Suzuki Dzire",
    category: "Premium Compact Sedan",
    capacity: "4+1 Seater",
    tagline: "Classic sedan elegance for swift, private journeys",
    description: "The ideal private chauffeur-driven sedan for solo travelers, couples, and business delegates. Offers smooth quiet cruising, powerful cooling, pristine sanitization, and swift airport transfers.",
    image: "/fleet/maruti-dzire.jpg",
    features: [
      "4+1 Comfortable Sedan Seating",
      "Dedicated Rear AC Air Vents",
      "Dedicated 378L Deep Boot Space",
      "Smooth & Silent Ride Dynamic",
      "Pristine Interior Grooming",
      "Professional 24/7 On-Time Chauffeur"
    ],
    luggageCapacity: "2 Large Suitcases + 2 Backpacks",
    idealFor: "Airport Pick & Drop, Business Meetings in Panjim, Private Couple Trips"
  }
];

export const BUSINESS_INFO = {
  name: "INAYA TRAVEL",
  tagline: "Premium Chauffeur & Luxury Fleet Travel in Goa",
  phone: "+91 9284430808",
  whatsappNumber: "919284430808",
  email: "SAYYEDGAWS22@GMAIL.COM",
  location: "Panjim Patto, Goa",
  address: "Patto Centre, Panaji (Panjim), Goa 403001, India",
  operatingHours: "24 Hours / 7 Days a Week",
  defaultWhatsAppMessage: "Hello, I want to book a vehicle with INAYA TRAVEL. Please share the details."
};

export function getVehicleWhatsAppUrl(vehicleName?: string): string {
  const base = `https://wa.me/${BUSINESS_INFO.whatsappNumber}`;
  const text = vehicleName
    ? `Hello, I want to book the ${vehicleName} with INAYA TRAVEL. Please share the details.`
    : BUSINESS_INFO.defaultWhatsAppMessage;
  return `${base}?text=${encodeURIComponent(text)}`;
}

export function getCustomBookingWhatsAppUrl(params: {
  vehicle?: string;
  pickupDate?: string;
  pickupLocation?: string;
  destination?: string;
  passengers?: string;
}): string {
  const lines = [
    `Hello INAYA TRAVEL, I would like to book a luxury ride:`,
    params.vehicle ? `• Vehicle: ${params.vehicle}` : null,
    params.pickupDate ? `• Date: ${params.pickupDate}` : null,
    params.pickupLocation ? `• Pickup Location: ${params.pickupLocation}` : null,
    params.destination ? `• Destination/Service: ${params.destination}` : null,
    params.passengers ? `• Passenger Count: ${params.passengers}` : null,
    `Please share pricing and vehicle availability.`
  ].filter(Boolean);

  return `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(lines.join("\n"))}`;
}
