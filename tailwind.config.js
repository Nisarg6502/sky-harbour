/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: "#FBF7EF",
          50: "#FEFDFB",
          100: "#FBF7EF",
          200: "#F5EDDC",
        },
        clay: {
          50: "#FCF5EE",
          100: "#F5E4D3",
          200: "#E8C7A6",
          300: "#D9A97A",
          400: "#C67B5C",
          500: "#B5651D",
          600: "#96541C",
          700: "#733F16",
        },
        olive: {
          50: "#F3F5EB",
          100: "#E1E6CC",
          200: "#C2CC98",
          300: "#9FAD6C",
          400: "#7D8F4C",
          500: "#5E6E37",
          600: "#4A582B",
          700: "#374220",
          800: "#242C15",
        },
        ink: {
          DEFAULT: "#241B14",
          soft: "#4A3E33",
          muted: "#786A5C",
        },
      },
      fontFamily: {
        display: ["'Fraunces'", "Georgia", "serif"],
        sans: ["'Inter'", "-apple-system", "sans-serif"],
      },
      boxShadow: {
        soft: "0 2px 8px rgba(36, 27, 20, 0.06)",
        card: "0 8px 30px rgba(36, 27, 20, 0.08)",
        "card-hover": "0 16px 40px rgba(36, 27, 20, 0.14)",
        glow: "0 0 0 1px rgba(94, 110, 55, 0.08)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      transitionTimingFunction: {
        out: "cubic-bezier(0.23, 1, 0.32, 1)",
        "in-out": "cubic-bezier(0.77, 0, 0.175, 1)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        float: "float 3s ease-in-out infinite",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
