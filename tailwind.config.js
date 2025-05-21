/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "media", // 'media' uses system preference, 'class' allows manual toggle
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)"],
      },
      colors: {
        black: "#1b1b1b",
        white: "#ffffff",
        blue: {
          DEFAULT: "#6080ff",
          light: "#7a95ff",
          dark: "#4b6adf",
          50: "#f0f3ff",
          100: "#e0e7ff",
          200: "#c7d1ff",
          300: "#a6b8ff",
          400: "#869eff",
          500: "#6080ff",
          600: "#4b6adf",
          700: "#3a55c8",
          800: "#2d45a4",
          900: "#233a85",
        },
      },
    },
  },
  plugins: [],
};
