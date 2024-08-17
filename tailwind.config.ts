import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      boxShadow: {
        custom: "rgba(180, 155, 255, 0.8) 0px 10px 50px",
      },

      screens: {
        xs: "460px",
        "md-l": "880px",
        "lg-l": "1100px",
        "xl-l": "1400px",
      },

      animation: {
        gradient: "gradient 8s linear infinite",
        "spin-slow": "spin-slow 30s linear infinite",
        pulse: "pulse var(--duration) ease-out infinite",
      },

      keyframes: {
        "spin-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },

        pulse: {
          "0%, 100%": { boxShadow: "0 0 0 0 var(--pulse-color)" },
          "50%": { boxShadow: "0 0 0 3px var(--pulse-color)" },
        },

        "shine-pulse": {
          "0%": {
            "background-position": "0% 0%",
          },

          "50%": {
            "background-position": "100% 100%",
          },

          to: {
            "background-position": "0% 0%",
          },
        },

        gradient: {
          to: {
            backgroundPosition: "var(--bg-size) 0",
          },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
