/* eslint-disable prettier/prettier */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      gray: "#C8C4C4",
      blue: "#3F7491",
      pink: "#B185AB",
      orange: "#B47F66",
      purple: "#716687",
      red: "#762D3F",
      white: "#FFFFFF",
      grey: "#757575",
      black: "#292929",
      black2: "#000000",
      purple2: {
        500: "#716687",
      },
      pink2: {
        500: "#B185AB",
      },
    },
    extend: {
      animation: {
        "background-shine": "background-shine 2s linear infinite",
        "fade-in": "fade-in 3s ease-in",
        "fade-inn": "fade-in 6s ease-in",
        "fade-innn": "fade-in 9s ease-in",
        "fade-in-left": "fade-in-left 3s ease-in",
      },
      keyframes: {
        "background-shine": {
          from: {
            backgroundPosition: "0 0",
          },
          to: {
            backgroundPosition: "-200% 0",
          },
        },
        "fade-in": {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },
        "fade-in-left": {
          "0%": {
            opacity: 0,
            transform: "translateX(-20px)",
          },
          "100%": {
            opacity: 1,
            transform: "translateX(0)",
          },
        },
      },
      fontFamily: {
        sans: ["Bungee", "sans-serif"],
      },
    },
  },
  plugins: [],
};
