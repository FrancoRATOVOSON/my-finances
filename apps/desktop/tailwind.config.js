/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      white: "#F9FDF7",
      gray: "#F1FAEE",
      state: "#A8DADC",
      secondary: "#457B9D",
      primary: "#1D3557",
      black: "#080E17"
    },
    fontFamily: {
      raleway: ["Raleway", "sans-serif"]
    }
  },
  plugins: [],
}
