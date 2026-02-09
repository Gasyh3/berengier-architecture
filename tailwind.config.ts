import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: "#F2C891",
          light: "#F7D9B4",
          dark: "#E7AA5E"
        },
        darkbase: "#0E0E0E",
        surface: "#F2F2F2"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        racoleta: ["var(--font-racoleta)", "serif"],
        reboleta: ["var(--font-reboleta)", "serif"]
      }
    }
  },
  plugins: []
};

export default config;
