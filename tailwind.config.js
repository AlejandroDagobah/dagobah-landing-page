/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#F5F5F5",
        secondary: "#0D1821",
        aleBlue: "#2592A4",
        aleRed: "#FF5A5F",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        crimsonPro: ["Crimson Pro", "serif"],
        sourceCodePro: ["Source Code Pro", "sans-serif"]

      },
      letterSpacing: {
        customWide: '.1em',  
      }
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "750px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },

  },
  plugins: [],
};