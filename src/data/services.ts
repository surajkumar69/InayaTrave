export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  iconName: string;
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "local-sightseeing",
    title: "Goa Local Sightseeing",
    subtitle: "Curated Coastal & Cultural Tours",
    description: "Explore the real Goa with experienced local chauffeurs who know every scenic route, historic landmark, hidden beach, and sunset viewpoint. Flexible full-day and multi-day packages.",
    features: [
      "Customizable North & South Goa itineraries",
      "No waiting stress or parking hassles",
      "Courteous chauffeurs with local expertise",
      "Chilled mineral water & air-conditioned comfort"
    ],
    iconName: "Compass"
  },
  {
    id: "airport-transfers",
    title: "Airport Transfers",
    subtitle: "Mopa (GOX) & Dabolim (GOI)",
    description: "Punctual, stress-free transfers connecting both Goa international airports to luxury resorts, villas, and hotels. Flight tracking, complimentary wait time, and VIP meet-and-greet.",
    features: [
      "Dedicated pick-up from Mopa (GOX) & Dabolim (GOI)",
      "Real-time flight arrival monitoring",
      "Name-board reception at arrivals gate",
      "Pristine sanitized vehicles with luggage assistance"
    ],
    iconName: "Plane"
  },
  {
    id: "outstation-travel",
    title: "Outstation Travel",
    subtitle: "Inter-State Luxury Journeys",
    description: "Comfortable cross-border road trips from Goa to Mumbai, Pune, Bengaluru, Gokarna, Dandeli, Kolhapur, and Belgaum. Safe, dependable highway driving with experienced long-haul drivers.",
    features: [
      "Direct door-to-door interstate transit",
      "Highway safety-inspected vehicles",
      "Transparent toll & permit coordination",
      "Ergonomic seating for extended highway journeys"
    ],
    iconName: "MapPin"
  },
  {
    id: "family-trips",
    title: "Family Trips",
    subtitle: "Safe, Relaxed & Private Holidays",
    description: "Designed for families traveling with children and elders. We prioritize safety, smooth suspension, clean non-smoking vehicles, child-friendly pacing, and courteous chauffeur etiquette.",
    features: [
      "Spotless, thoroughly sanitized interiors",
      "Luggage space for strollers & family gear",
      "Patient drivers who accommodate family stops",
      "Comfortable captain seating across MPV fleet"
    ],
    iconName: "HeartHandshake"
  },
  {
    id: "group-transportation",
    title: "Group Transportation",
    subtitle: "Conferences, Weddings & Events",
    description: "High-capacity mobility solutions featuring our 17-Seater Force Urbania and 20-Seater Tempo Traveller. Ideal for destination wedding guest logistics, corporate conferences, and tour groups.",
    features: [
      "Coordinated multi-vehicle fleet deployment",
      "Luggage vans and dedicated dispatch assistance",
      "Uniformed professional crew",
      "Special corporate & wedding group rates"
    ],
    iconName: "Users"
  },
  {
    id: "private-car-rental",
    title: "Private Car Rental",
    subtitle: "Chauffeur-Driven Exclusivity",
    description: "Your personal chauffeur on call throughout your Goa stay. Experience the freedom of private luxury travel with unmatched discretion, flexibility, and round-the-clock availability.",
    features: [
      "Hourly, daily, or weekly private hire",
      "Zero liability or driving stress for you",
      "Premium sedans and executive MPVs",
      "24/7 dedicated WhatsApp support"
    ],
    iconName: "Car"
  }
];
