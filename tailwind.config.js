/** @type {import('tailwindcss').Config} */

// Palette is named after what SkyHarbour actually ships:
// paper/kraft for packaging, harbour teal (the original site's brand colour),
// and the three hero spices — turmeric, chilli and cardamom.
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: "#F3EDE2",
          50: "#FBF8F2",
          100: "#F3EDE2",
          200: "#E9DFCD",
          300: "#D9CAAE",
        },
        ink: {
          DEFAULT: "#1C1A16",
          soft: "#3E3A32",
          muted: "#6F685B",
        },
        harbour: {
          50: "#EEF3F2",
          100: "#D6E3E1",
          200: "#A9C3C0",
          300: "#7AA19E",
          400: "#4C7C7E",
          500: "#2A545B",
          600: "#22474D",
          700: "#1B3A40",
          800: "#142D32",
          900: "#0E2125",
          950: "#091719",
        },
        turmeric: {
          100: "#FAEFD2",
          200: "#F5DC9C",
          300: "#EFC55E",
          400: "#E6AE2E",
          500: "#CF951A",
          600: "#A87613",
        },
        chilli: {
          300: "#DA7A66",
          400: "#C4472F",
          500: "#A63421",
          600: "#842818",
        },
        cardamom: {
          100: "#E4EAD6",
          300: "#A9BB86",
          400: "#819A5C",
          500: "#627C43",
          600: "#4B6133",
        },
      },
      fontFamily: {
        sans: ["'Jost'", "'Century Gothic'", "-apple-system", "sans-serif"],
      },
      boxShadow: {
        soft: "0 1px 2px rgba(28, 26, 22, 0.06), 0 4px 12px rgba(28, 26, 22, 0.05)",
        lift: "0 2px 4px rgba(28, 26, 22, 0.06), 0 18px 40px -12px rgba(28, 26, 22, 0.22)",
      },
      transitionTimingFunction: {
        out: "cubic-bezier(0.23, 1, 0.32, 1)",
        "in-out": "cubic-bezier(0.77, 0, 0.175, 1)",
      },
    },
  },
  plugins: [],
};
