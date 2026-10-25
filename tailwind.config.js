/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        background: "#080B10",
        surface: "#0E131B",
        card: "#121824",
        border: "#212B39",
        muted: "#8B96A8",
        foreground: "#EAF0F7",
        primary: {
          DEFAULT: "#5EE7C9",
          dim: "#3FB89F",
        },
        signal: {
          DEFAULT: "#7C8CFF",
          soft: "#A9B4FF",
        },
      },
      fontFamily: {
        display: ["Sora", "sans-serif"],
        body: ["Manrope", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      backgroundImage: {
        "grid-lines":
          "linear-gradient(to right, rgba(94,231,201,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(94,231,201,0.06) 1px, transparent 1px)",
      },
      boxShadow: {
        glow: "0 0 40px rgba(94, 231, 201, 0.25)",
      },
      keyframes: {
        pulseSlow: {
          "0%, 100%": { opacity: 0.5, transform: "scale(1)" },
          "50%": { opacity: 0.85, transform: "scale(1.12)" },
        },
      },
      animation: {
        pulseSlow: "pulseSlow 9s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
