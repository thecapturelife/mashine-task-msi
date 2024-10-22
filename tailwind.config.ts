import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
    screens : {
         xs: "300px",
         sm: "640px",
         md: "768px",
         lg: "1080px",
         xl: "1280px",
         ["2xl"] :  "1530px",
    }
  },
  plugins: [],
};
export default config;
