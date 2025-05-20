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
        sans: ["var(--font-inter)"],
      },
      colors: {
        // Light mode colors (default)
        background: "#ffffff",
        foreground: "#1b1b1b",
      },
    },
  },
  plugins: [],
  // Override colors in dark mode
  future: {
    darkOverride: {
      theme: {
        extend: {
          colors: {
            background: "#1b1b1b",
            foreground: "#ededed",
          },
        },
      },
    },
  },
};
