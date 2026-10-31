import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        luxury: {
          950: "#060709", // Deepest obsidian black
          900: "#0D0F14", // Surface black
          850: "#13161F", // Card elevated surface
          800: "#1A1E29", // Border / highlight subtle
          700: "#272D3D",
          600: "#4B5563",
          400: "#94A3B8", // Subtle silver-grey text
          300: "#CBD5E1", // Bright silver text
          200: "#E2E8F0", // Platinum
          100: "#F1F5F9", // Bright white-silver
          50: "#F8FAFC",
        },
        silver: {
          light: "#EAEFF5",
          DEFAULT: "#C5CDD9",
          metallic: "#A0AEC0",
          dark: "#718096",
        },
        gold: {
          light: "#F7E7CE",
          DEFAULT: "#D4AF37",
          dark: "#AA8C2C",
        },
        whatsapp: {
          DEFAULT: "#25D366",
          hover: "#20BA5A",
          dark: "#128C7E",
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        serif: ["var(--font-cinzel)", "Georgia", "serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "metallic-gradient": "linear-gradient(135deg, #FFFFFF 0%, #C5CDD9 50%, #8A99AD 100%)",
        "gold-gradient": "linear-gradient(135deg, #FFF1CC 0%, #D4AF37 50%, #997B20 100%)",
        "card-gradient": "linear-gradient(180deg, rgba(26,30,41,0.7) 0%, rgba(13,15,20,0.9) 100%)",
      },
      boxShadow: {
        "luxury": "0 10px 40px -10px rgba(0, 0, 0, 0.7)",
        "luxury-glow": "0 0 25px rgba(255, 255, 255, 0.08)",
        "whatsapp-glow": "0 0 30px rgba(37, 211, 102, 0.35)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "pulse-subtle": "pulseSubtle 3s infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseSubtle: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.85" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
