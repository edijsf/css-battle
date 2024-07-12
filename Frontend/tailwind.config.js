/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        special: {
          cgi: "#e11937",
          gold: "#FFD700",
          blue: "#0060ca",
        },
        dark: {
          50: "#eff5fb",
          100: "#E4EBFF",
          200: "#c7cddc",
          300: "#a0b3c6",
          400: "#2d3740",
          500: "#",
          600: "#13181c",
          700: "#121518",
          800: "#07080b",
        },

        light: {
          50: "#",
          100: "#",
          200: "#",
          300: "#",
          400: "#cbd1d8",
          500: "#",
          600: "#ffffff",
          700: "#",
          800: "#edf2f7",
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
