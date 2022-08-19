const colors = require("tailwindcss/colors");

const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      green: colors.green,
      red: colors.red,
    },
    container: {
      padding: {
        DEFAULT: "1.5rem",
        md: "5.313rem",
      },
      center: true,
    },
  },
  plugins: [],
};

module.exports = config;
