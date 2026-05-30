import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        forest: "#0f3d2e",
        emeraldDeep: "#06251d",
        gold: "#c9a24a",
        goldSoft: "#f1d98a",
        ivory: "#f8f6ef",
        charcoal: "#171b1f"
      },
      fontFamily: {
        sans: ["Arial", "Helvetica", "sans-serif"],
        serif: ["Georgia", "Times New Roman", "serif"]
      },
      boxShadow: {
        premium: "0 24px 70px rgba(6, 37, 29, 0.16)",
        glow: "0 0 50px rgba(201, 162, 74, 0.18)"
      },
      backgroundImage: {
        "gold-line": "linear-gradient(90deg, rgba(201,162,74,0), rgba(201,162,74,.9), rgba(201,162,74,0))"
      }
    }
  },
  plugins: []
};

export default config;
