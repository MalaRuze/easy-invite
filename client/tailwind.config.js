/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        easyPurple: "#7743DB",
        easyPurpleDark: "#3B3486",
        easyGrey: "#D9D9D9",
      },
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      height: {
        screen75: "85vh",
      },
      maxWidth: {
        custom: "65%",
      },
      screens: {
        xs: "360px",
        sm: "576px",
        // => @media (min-width: 576px) { ... }

        md: "960px",
        // => @media (min-width: 960px) { ... }

        lg: "1440px",
        // => @media (min-width: 1440px) { ... }
      },
    },
  },
  plugins: [],
};
