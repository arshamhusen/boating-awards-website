/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  plugins: [require("tw-elements/dist/plugin")],
  theme: {
    colors: {
      primary: "#B78533",
      lightPrimary: "#FFFAEA",
      secondary: "#050A30",
      lightSecondary: "#FDF3D4",
      white: "#FFFFFF",
      black: "#00000",
      gray: "#7A7A7A",
      lightgray: "#F3F3F3",
      parrot: "#92CC3E",
      darkGray: "#555555",
      gitHub: "#2D2D2D",
      borderGray: "#cbd4cd",
      button: "#A2E637",
      lime: "#7DFF7D",
      red: "#BF0F00",
      black: "#000000",
      warning: "#E6CF37",
    },
    extend: {
      fontFamily: {
        sans: ['"DM Sans"', ...defaultTheme.fontFamily.sans],
        cursive: ["cursive"],
      },
    },
  },
};
