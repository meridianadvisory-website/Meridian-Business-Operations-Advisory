import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        brand: {
          DEFAULT: '#0c6e6b',
          light: '#eef8f7',
          dark: '#094e4c',
        },
        gold: {
          DEFAULT: '#866118',
          light: '#fdf8ed',
          accent: '#B08D57',
        },
        risk: {
          DEFAULT: '#c2410c',
          light: '#fff4ed',
          border: '#fed7aa',
        },
        ink: '#101828',
        cream: '#fdfcfa',
        navy: {
          DEFAULT: '#102A43',
          light: '#1a3a5c',
        },
        ivory: '#FAFAF8',
        slate: '#64748B',
        charcoal: '#2D3748',
        lightgray: '#F5F7FA',
      },
      fontFamily: {
        sora: ["var(--font-sora)", "sans-serif"],
        manrope: ["var(--font-manrope)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-dm-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
