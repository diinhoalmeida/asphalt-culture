/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    fontSize: {
      titleXL: [
        "14vw",
        { lineHeight: "18.8vw", fontWeight: 400, letterSpacing: "-.1em" },
      ],
      titleS: [
        "4vw",
        { lineHeight: "3.5vw", fontWeight: 400, letterSpacing: "-.07em" },
      ],
      textM: ["4.3vw", { lineHeight: "4.57vw", fontWeight: 400 }],
      reviewTextL: [
        "1.2vw",
        { lineHeight: "1.4vw", fontWeight: 400, letterSpacing: "-.04em" },
      ],
      menuTextS: [
        ".85vw",
        { lineHeight: ".85vw", fontWeight: 400, letterSpacing: "-.04em" },
      ],
      cardValueTextXS: [
        "2vw",
        { lineHeight: "2vw", fontWeight: 400, letterSpacing: "-.06em" },
      ],
      textInfoAndPolicy: ["1.85vw", { lineHeight: "130%", fontWeight: 700 }],
      buttonG: ["0.875rem", { lineHeight: "160%", fontWeight: 600 }],
      buttonM: ["0.75rem", { lineHeight: "160%", fontWeight: 400 }],
    },
    colors: {
      background: "#fcf9ee",
      textColor: "#141414",
      bandColor: "#ddc92a",
      cardColor: "#e7d6c4",
    },
    extend: {},
  },
  plugins: [],
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
};
