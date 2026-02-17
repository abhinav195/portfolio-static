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
        background: "var(--background)",
        foreground: "var(--foreground)",
        card: "var(--card-bg)",
        "card-border": "var(--card-border)",
        accent: "var(--accent)",
        "accent-foreground": "var(--accent-foreground)",
      },
      // Adding a custom drop-shadow to match the modal pop-out effect
      boxShadow: {
        'neon': '0 0 20px -5px var(--accent)', 
      }
    },
  },
  plugins: [],
};
export default config;