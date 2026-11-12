import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ishm: {
          orange: {
            DEFAULT: "#ed8100",
            hover: "#d97400",
            light: "#ff9724",
            50: "#fff8ed",
            100: "#ffefd4",
            200: "#fedaa8",
            500: "#ed8100",
            600: "#dc6607",
          },
          navy: {
            DEFAULT: "#112555",
            dark: "#0c1b33",
            900: "#112555",
            800: "#142857",
            700: "#1c3786",
            50: "#f0f4fd",
          },
          red: {
            DEFAULT: "#bb2226",
            dark: "#991b1e",
            light: "#e31f25",
          },
          gold: {
            DEFAULT: "#ffc923",
            light: "#ffd654",
          },
        },
        cims: {
          orange: {
            DEFAULT: "#ed8100",
            hover: "#d97400",
            light: "#ff9724",
            50: "#fff8ed",
          },
          navy: {
            DEFAULT: "#112555",
            dark: "#0c1b33",
            800: "#142857",
            900: "#112555",
          },
          gold: "#ffc923",
          red: "#bb2226",
        },
      },
      fontFamily: {
        rethink: ["'Rethink Sans'", "sans-serif"],
        montserrat: ["'Montserrat'", "sans-serif"],
        heading: ["'Rethink Sans'", "'Montserrat'", "sans-serif"],
        sans: ["'Plus Jakarta Sans'", "'Mulish'", "sans-serif"],
      },
      boxShadow: {
        card: "0 10px 30px -5px rgba(17, 37, 85, 0.08)",
        hover: "0 20px 35px -5px rgba(17, 37, 85, 0.15)",
        header: "0 4px 20px -2px rgba(17, 37, 85, 0.06)",
        badge: "0 8px 25px rgba(237, 129, 0, 0.25)",
      },
      animation: {
        float: "float 4s ease-in-out infinite",
        "float-delayed": "float 5s ease-in-out 2s infinite",
        "pulse-subtle": "pulseSubtle 2.5s ease-in-out infinite",
        shimmer: "shimmer 2.5s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        pulseSubtle: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.92", transform: "scale(1.03)" },
        },
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(200%)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
