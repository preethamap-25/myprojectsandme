/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#F6F3EC",
        paper2: "#EFEAE0",
        ink: "#1C1C1A",
        inkdim: "#55524A",
        inkfaint: "#8C8778",
        rule: "#D8D2C4",
        accent: "#A3291B",
      },
      fontFamily: {
        serif: ['"Source Serif 4"', "serif"],
        mono: ['"JetBrains Mono"', "monospace"],
      },
    },
  },
  plugins: [],
};
