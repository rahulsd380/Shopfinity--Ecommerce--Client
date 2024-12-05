import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        Inter : ["Inter", "sans-serif"],      // for body font
        Poppins : ["Poppins", "sans-serif"],  //for heading
        Sora : ["Sora", "sans-serif"],        // for headins
      },

      colors: {
        black : "#333",
        warning : {
          10 : "#EA4B48",
          20 : "#fdeded",
        },
        
        primary : {
          10 : "#29A56C",
          20 : "#d2f0d4",
          30 : '#2C742F'

        },
        neutral : {
          10 : "#253D4E",  // for heading
          20 : "#4A4A4A",   // for body text
          30 : "#666",
          40 : '#B3B3B3'
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
