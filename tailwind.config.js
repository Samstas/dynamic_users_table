/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cwhite: "#fcf6f5ff",
        cblue: "#89abe3ff",
      },
    },
  },
  plugins: [],
};
