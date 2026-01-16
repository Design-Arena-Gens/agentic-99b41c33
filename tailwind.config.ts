import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx,md}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f0f8ff",
          100: "#d6ecff",
          200: "#addaff",
          300: "#7cc2ff",
          400: "#349bff",
          500: "#0077e6",
          600: "#005dbc",
          700: "#004a99",
          800: "#003873",
          900: "#022d5c"
        }
      },
      boxShadow: {
        soft: "0 20px 35px -15px rgba(0, 119, 230, 0.35)"
      }
    }
  },
  plugins: []
};

export default config;
