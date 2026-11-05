import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
      colors: {
        brand: {
          red: "#E30613",
          orange: "#FF7300",
          black: "#0D0D0F",
          dark: "#141417",
          surface: "#F7F8FA",
          card: "#F8F9FB",
          border: "#ECEEF2",
          muted: "#6E717A",
        },
      },
      borderRadius: {
        "bento": "28px",
        "hero": "36px",
      },
      boxShadow: {
        "soft": "0 12px 36px -8px rgba(13, 13, 15, 0.06)",
        "card": "0 20px 50px -12px rgba(13, 13, 15, 0.08)",
        "pill": "0 4px 16px -2px rgba(13, 13, 15, 0.06)",
      },
    },
  },
  plugins: [],
};

export default config;
