/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#E31E24",
          dark: "#B71C1C",
          light: "#FF5252",
        },
        dark: {
          DEFAULT: "#1A1A1A",
          lighter: "#2A2A2A",
          darker: "#D2D2D2",
          darkest: "#151515",
        },
        grey: {
          DEFAULT: '#B9B9B9'
        },
        gold: {
          DEFAULT: "#FFD700",
          dark: "#FFC107",
        },
        "premier-primary": {
          DEFAULT: "#ED1D25",
        },
      },
      fontFamily: {
        sans: ["Urbanist", "system-ui", "sans-serif"],
        gilroy: ["Gilroy", "sans-serif"],
      },
      animation: {
        scroll: "scroll 30s linear infinite",
        "fade-in": "fadeIn 0.5s ease-in",
        "slide-up": "slideUp 0.6s ease-out",
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
