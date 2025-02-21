import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        mainBackgroundColor: "#F5F5F5",
        mensColor: "#2BD9AF",
        womensColor: "#FF5E84",
        priceTextColor : "#0E42FD"

      },
    },
  },
  plugins: [],
} satisfies Config;
