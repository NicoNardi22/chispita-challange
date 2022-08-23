const colors = require("tailwindcss/colors");

const config = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./lib/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      green: colors.green,
      red: colors.red,
      slate: colors.slate,
      primary: {
        DEFAULT: "#3D63A9",
        dark: "#253B65",
        disabled: "#ECEFF6",
      },
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
