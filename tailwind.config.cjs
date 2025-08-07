/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        yumi: ['"Yumi Normal"', 'sans-serif'],
      },
      colors: {
        ferrari: '#FF2800', // Ferrari Red
        black: '#000000', // Jet Black
        accent: '#FFFFFF', // White
        darkgray: '#1C1C1C', // Dark Gray for backgrounds
      },
    },
  },
  plugins: [],
});