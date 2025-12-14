/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
theme: {
  extend: {
    colors: {
      primary: "#7F5BFF",
      secondary: "#FF6BCD",
      accent: "#4CC9F0",
    },
  },
},

  plugins: [],
};
