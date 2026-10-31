import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://inayatravelgoa.com"),
  title: "INAYA TRAVEL | Luxury Car Rental & Chauffeur Services in Panjim Patto, Goa",
  description:
    "Official website of INAYA TRAVEL, Panjim Patto, Goa. Premium luxury car rental, Mopa & Dabolim airport transfers, Goa sightseeing, and group transportation with 7 exclusive vehicles: Tempo Traveller (20S), Force Urbania (17S), Innova Hycross (7+2), Innova Crysta (7+1), Ertiga (6+1), Carens (6+1), and Dzire (4+1). Fast WhatsApp bookings at +91 9284430808.",
  keywords: [
    "INAYA TRAVEL",
    "Luxury Car Rental Goa",
    "Car Rental Panjim Patto",
    "Force Urbania Goa Rental",
    "Tempo Traveller 20 Seater Goa",
    "Toyota Innova Hycross Goa",
    "Toyota Innova Crysta Rental Goa",
    "Mopa Airport Taxi",
    "Dabolim Airport Luxury Chauffeur",
    "Goa Sightseeing Chauffeur",
    "Wedding Transportation Goa",
    "Panjim Car Rental"
  ],
  authors: [{ name: "INAYA TRAVEL" }],
  creator: "INAYA TRAVEL",
  publisher: "INAYA TRAVEL",
  formatDetection: {
    email: true,
    telephone: true,
    address: true,
  },
  openGraph: {
    title: "INAYA TRAVEL | Luxury Car Rental & Chauffeur Services Panjim Patto, Goa",
    description:
      "Experience Goa in luxury with INAYA TRAVEL. Fleet of 7 premium vehicles. Direct WhatsApp bookings at +91 9284430808.",
    url: "https://inayatravelgoa.com",
    siteName: "INAYA TRAVEL",
    images: [
      {
        url: "/inaya-logo.png",
        width: 1200,
        height: 630,
        alt: "INAYA TRAVEL Luxury Travel Goa",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  icons: {
    icon: "/inaya-logo.png",
    shortcut: "/inaya-logo.png",
    apple: "/inaya-logo.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#060709",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-luxury-950 text-luxury-100 min-h-screen selection:bg-silver-light selection:text-luxury-950 antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
