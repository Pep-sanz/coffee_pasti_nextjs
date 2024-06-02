import { url } from "inspector";
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#b6895b",
        bgPrimary: "rgba(72, 72, 72, 0.616)",
      },
      backgroundImage: {
        "coffee-1": "url('/images/bg-coffee(1).jpg')",
        "coffee-2": "url('/images/bg-coffee(2).jpg')",
      },
    },
  },
  plugins: [],
};
export default config;
