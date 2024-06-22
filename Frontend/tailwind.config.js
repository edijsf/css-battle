/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        theme: {
          50: "#E4EBFF",
          100: "#eff5fb",
          200: "#c7cddc",
          300: "#a0b3c6",
          400: "#2d3740",
          500: "#0060ca",
          600: "#07080b",
          700: "#121518",
          800: "#13181c",
          cgi: "#e11937",
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
