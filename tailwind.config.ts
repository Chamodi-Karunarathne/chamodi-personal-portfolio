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
        themeBg: "#070a13",
        themeText: "#f0f2f5",
        themeSecondary: "#8c9baf",
        themeCopper: "#d49a7a",
        themeCopperDark: "#c17a58",
        themeYellow: "#e5c07b", // Yellowish copper/gold for PCB routes
      },
    },
  },
  plugins: [],
};
export default config;
