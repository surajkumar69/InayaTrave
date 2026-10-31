export interface Destination {
  id: string;
  name: string;
  region: string;
  image: string;
  tag: string;
  description: string;
  highlights: string[];
}

export const DESTINATIONS_DATA: Destination[] = [
  {
    id: "panjim-fontainhas",
    name: "Panjim & Fontainhas",
    region: "Central Goa",
    image: "/destinations/fontainhas.jpg",
    tag: "Cultural Heritage",
    description: "The historic capital right at our doorstep in Panjim Patto. Walk through cobblestone alleys flanked by pastel-colored Portuguese mansions, art galleries, and quaint cafes in Asia's oldest Latin Quarter.",
    highlights: ["Fontainhas Latin Quarter", "Our Lady of Immaculate Conception", "Mandovi River Cruise Promenade", "Patto Business District"]
  },
  {
    id: "dudhsagar-waterfalls",
    name: "Dudhsagar Waterfalls",
    region: "Western Ghats",
    image: "/destinations/dudhsagar.jpg",
    tag: "Nature & Adventure",
    description: "One of India's tallest four-tiered waterfalls, cascading like a sea of milk through the lush Bhagwan Mahaveer Sanctuary. Travel comfortably in our heavy-duty fleet directly to the safari gateway.",
    highlights: ["4-Tier Majestic Waterfall", "Spice Plantation Lunch Stop", "Scenic Western Ghats Drive", "Jeep Safari Connection"]
  },
  {
    id: "old-goa-churches",
    name: "Old Goa & Churches",
    region: "North Goa / Tiswadi",
    image: "/destinations/old-goa.jpg",
    tag: "UNESCO World Heritage",
    description: "Step back into the 16th century in the Rome of the East. Marvel at the preserved architecture of Basilica of Bom Jesus, Se Cathedral, and the Church of St. Francis of Assisi.",
    highlights: ["Basilica of Bom Jesus", "Se Cathedral (Largest in Asia)", "Archaeological Museum", "Church of St. Cajetan"]
  },
  {
    id: "north-goa-beaches",
    name: "North Goa Coast & Forts",
    region: "North Goa",
    image: "/destinations/north-goa.jpg",
    tag: "Sun, Sunset & Nightlife",
    description: "From the cliffside vistas of Chapora and Aguada forts to the vibrant seaside shacks and luxury beach clubs of Vagator, Morjim, and Candolim.",
    highlights: ["Aguada & Chapora Forts", "Vagator & Anjuna Sunset Points", "Morjim & Ashvem Serene Beaches", "Luxury Seaside Dining"]
  },
  {
    id: "south-goa-beaches",
    name: "South Goa & Palolem",
    region: "South Goa",
    image: "/destinations/palolem.jpg",
    tag: "Pristine Luxury & Peace",
    description: "Golden crescent bays framed by swaying coconut palms, turquoise calm waters, and secluded coves. Experience authentic coastal tranquility away from the crowds.",
    highlights: ["Palolem Crescent Bay", "Cabo de Rama Cliff Fort", "Agonda Beach", "Heritage Portuguese Mansions in Chandor"]
  }
];

export const GALLERY_ITEMS = [
  {
    image: "/gallery/luxury-interior.jpg",
    title: "Executive First-Class Comfort",
    category: "Fleet Interior"
  },
  {
    image: "/gallery/airport-transfer.jpg",
    title: "VIP Airport Meet & Greet",
    category: "Airport Service"
  },
  {
    image: "/gallery/chauffeur-drive.jpg",
    title: "Chauffeured Road Trips",
    category: "Experience"
  },
  {
    image: "/gallery/goa-coast.jpg",
    title: "Scenic Goa Coastal Highways",
    category: "Destinations"
  },
  {
    image: "/fleet/force-urbania.jpg",
    title: "Force Urbania 17-Seater In Action",
    category: "Group Fleet"
  },
  {
    image: "/fleet/toyota-innova-hycross.jpg",
    title: "Toyota Innova Hycross Hybrid",
    category: "Luxury MPV"
  }
];

export const WHY_CHOOSE_US_DATA = [
  {
    icon: "ShieldCheck",
    title: "100% Verified Professional Chauffeurs",
    description: "All our drivers are background-checked, polite, uniformed, and possess exhaustive knowledge of Goa's shortcuts, attractions, and safety protocols."
  },
  {
    icon: "Sparkles",
    title: "Pristine, Showroom-Condition Fleet",
    description: "Every vehicle is thoroughly vacuumed, sanitised, air-conditioned, and inspected prior to each booking to ensure zero breakdowns and total luxury."
  },
  {
    icon: "Clock",
    title: "Strict Punctuality Guaranteed",
    description: "Never miss a flight or appointment. Our drivers arrive 15 minutes before scheduled pickup time for airport transfers and local sightseeing."
  },
  {
    icon: "BadgeIndianRupee",
    title: "Completely Transparent Pricing",
    description: "No hidden toll surcharges, no surprise fees, and no inflated tourist rates. You receive honest, all-inclusive quotations directly on WhatsApp."
  },
  {
    icon: "MessageCircle",
    title: "Instant 24/7 WhatsApp Bookings",
    description: "Direct booking channel with our management. Fast replies within minutes, instant booking confirmations, and driver details sent in advance."
  },
  {
    icon: "MapPin",
    title: "Strategic Hub in Panjim Patto",
    description: "Centrally stationed in the heart of Goa's business and transport nerve center, enabling rapid vehicle dispatch to both North & South Goa."
  }
];
