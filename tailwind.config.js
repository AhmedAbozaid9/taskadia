/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-purple": "#B0578D",
        "secondary-purple": "#E074ED",
        "pastel-green": "#B8ECED",
        "pastel-pink": "#ED74BD",
        "main-dark-bg": "#151419",
        "hover-bg": "rgba(36,35,42,0.6)",
        "secondary-text": "#B3B3B3",
      },
    },
  },
  plugins: [nextui()],
};
