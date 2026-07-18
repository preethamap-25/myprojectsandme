/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0B0F14",
        surface: "#10161D",
        surface2: "#161F2A",
        line: "#232E39",
        linesoft: "#1A232C",
        ink: "#E7EDF3",
        dim: "#8FA0AC",
        faint: "#5B6B78",
        accent: "#FF8A3D",
        accent2: "#4FD1C5",
      },
      fontFamily: {
        mono: ['"IBM Plex Mono"', "monospace"],
        sans: ['"IBM Plex Sans"', "sans-serif"],
      },
      keyframes: {
        flow: { to: { strokeDashoffset: "-120" } },
        pulse2: { "0%,100%": { opacity: 1 }, "50%": { opacity: 0.35 } },
      },
      animation: {
        flow: "flow 2.6s linear infinite",
        "flow-slow": "flow 3.6s linear infinite",
        pulse2: "pulse2 2.4s ease-in-out infinite",
      },
      backgroundImage: {
        grid: "linear-gradient(#1A232C 1px, transparent 1px), linear-gradient(90deg, #1A232C 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "48px 48px",
      },
    },
  },
  plugins: [],
};
