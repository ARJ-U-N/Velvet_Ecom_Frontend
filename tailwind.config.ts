import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // Added this just in case
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: "#1f332e",        // New Deep Green
        oatmeal: "#f2f0eb",        // New Base Color
        "beige-surface": "#e8e4dc",
        "background-light": "#f2f0eb",
        "background-dark": "#171b1a",
        "deep-green": "#162b26",
      },
      fontFamily: {
        display: ["Manrope", "sans-serif"],
        serif: ["Noto Serif", "serif"],
      },
      borderRadius: {
        'blob': '60% 40% 30% 70% / 60% 30% 70% 40%',
        'blob-alt': '40% 60% 70% 30% / 40% 70% 30% 60%',
      },
    },
  },
  plugins: [],
};
export default config;