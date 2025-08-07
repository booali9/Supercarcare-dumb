/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        yumi: ['"Yumi Normal"', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        ferrari: 'rgba(255,40,0,1)',
        black: '#000',
        maroon: {
          50: '#fdf2f2',
          100: '#fce7e7',
          200: '#f9d3d3',
          300: '#f4b3b3',
          400: '#ec8585',
          500: '#e25a5a',
          600: '#d13a3a',
          700: '#b02d2d',
          800: '#922929',
          900: '#7a2727',
          950: '#421111',
        },
      },
      animation: {
        'header-shrink': 'headerShrink 0.3s ease-out',
        'header-expand': 'headerExpand 0.3s ease-out',
        'gridMove': 'gridMove 20s linear infinite',
      },
      keyframes: {
        headerShrink: {
          '0%': { height: 'var(--header-height-expanded)' },
          '100%': { height: 'var(--header-height-shrunk)' },
        },
        headerExpand: {
          '0%': { height: 'var(--header-height-shrunk)' },
          '100%': { height: 'var(--header-height-expanded)' },
        },
        gridMove: {
          '0%': { transform: 'translateX(0) translateY(0)' },
          '100%': { transform: 'translateX(40px) translateY(40px)' },
        },
      },
    },
  },
  plugins: [],
});
