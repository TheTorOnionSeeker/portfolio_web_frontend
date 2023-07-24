/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      nintendo: "#E60011",
      ...colors,
      brand: {
        100: "#f7fafc",
        900: "#1a202c",
      },
    },
    fontFamily: {
      heading: ["Montserrat", "sans-serif"],
      body: ["Inter", "sans-serif"],
      "D-DIN": ["D-DIN", "sans-serif"],
    },
  },
  plugins: ["daisyui"],
};
