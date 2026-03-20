import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F9FAFB",
        blessing: {
          green: "#10B981",
          deep: "#047857",
          gold: "#D97706",
          goldSoft: "#F59E0B"
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"]
      },
      boxShadow: {
        soft: "0 20px 55px rgba(15, 23, 42, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
