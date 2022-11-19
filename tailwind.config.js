/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "body-color": "#F2F2F2",
        "title-color": "#373B53",
        "nav-light": "#494E6E",
        "purple-dark": "#7C5DFA",
        "purple-light": "#9277FF",
        "checkbox-color": "#DFE3FA",
        "moon-color": "#7E88C3",
        "moon-hover": "#DFE3FA",
      },
    },
  },
  plugins: [],
};
