const colors = require("tailwindcss/colors");

const config = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./lib/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      cursor: {
        happy: "url(/assets/in-love.png), pointer",
      },
    },
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
    screens: {
      sm: "640px",
      md: "768px",
      xmd: "960px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};

module.exports = config;
