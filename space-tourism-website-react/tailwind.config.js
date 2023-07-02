/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./*.{html,js,tsx}",
    "./src/*.{html,js,tsx}",
    "./src/**/*.{html,js,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        BarlowCondensed: ["Barlow Condensed, sans-serif"],
        Barlow: ["Barlow"],
      },
      screens: {
        sm: "380px",
        sm_md: "700px",
        md: "770px",
        lg: "976px",
        xl: "1440px",
      },
    },
  },
  plugins: [],
};
