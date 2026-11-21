import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "#F5F5F7",
        "on-canvas": "#1D1D1F",
        primary: "#FFFFFF",
        "on-primary": "#1D1D1F",
        surface: "#141815",
        "on-surface": "#F5F5F7",
        "surface-container": "#0F2A1D",
        "on-surface-container": "#F5F5F7",
        ink: "#1D1D1F",
        charcoal: "#1D1D1F",
        "on-ink": "#FFFFFF",
        obsidian: "#0D100E",
        "on-obsidian": "#FFFFFF",
        muted: "#6E6E73",
        "muted-dark": "#A1A1A6",
        alert: "#E85D2A",
        "burnt-orange": "#E85D2A",
        "alert-ink": "#C44114",
        accent: "#D99B26",
        "on-accent": "#1D1D1F",
        outline: "#3A423D",
      },
      borderRadius: {
        sm: "4px",
        DEFAULT: "12px",
        item: "12px",
        card: "20px",
        master: "28px",
        full: "9999px",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        graffiti: ["var(--font-graffiti)", "cursive"],
      },
    },
  },
  plugins: [],
};

export default config;
