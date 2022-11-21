/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "body-color": "#F2F2F2",
        "title-color": "#373B53",
        "nav-base": "#494E6E",
        "purple-base": "#7C5DFA",
        "purple-light": "#9277FF",
        "muted-color": "#888EB0",
        "moon-color": "#7E88C3",
        "moon-hover": "#DFE3FA",
        "sun-color": "#858BB2",

        paid: {
          bg: "hsl(var(--paid) / 0.15)",
          text: "hsl(var(--paid))",
          dark: "hsl(var(--paid))",
        },
        pending: {
          bg: "hsl(var(--pending) / 0.15)",
          text: "hsl(var(--pending))",
          dark: "hsl(var(--pending))",
        },
        draft: {
          bg: "hsl(var(--draft) / 0.15)",
          text: "hsl(var(--draft-light))",
          dark: "hsl(var(--draft-dark))",
        },

        "body-color-dark": "#1E2139",
        "title-color-dark": "var(--title-color)",
        "nav-dark": "#252945",
        "purple-dark": "#7C5DFA",
        "purple-light-dark": "#9277FF",
        "muted-color-dark": "#DFE3FA",
        "moon-color-dark": "#7E88C3",
        "moon-hover-dark": "#DFE3FA",
        "sun-color-dark": "#858BB2",
      },
    },
  },
  plugins: [],
};
