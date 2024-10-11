import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "1024px", 
        xl: "1280px",
        "2xl": "1400px",
      },
    },
    fontFamily: {
      primary: "var(--font-plus-sans)",
      secondary: "var(--font-poppins)"
    },
    extend: {
      boxShadow: {
        'right': '10px 10px 25px rgba(0, 0, 0, 0.5)', // Darker shadow with increased blur and opacity
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
