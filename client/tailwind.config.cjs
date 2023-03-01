/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bgDark: "#202637",
        bgLight: "#EBF0FF",
        cardDark: "#2C3551",
        cardLight: "#FFFFFF",
        primaryTextDark: "#C8E0F6",
        primaryTextLight: "#3D4E5E",
        secondary: "#75EB9D",
        accent: "#ECDC4B"
      }
    }
  },
  plugins: []
};
