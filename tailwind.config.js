/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        wilden: ["wilden", "sans-serif"],
      },
      colors: {
        bera: {
          lightblue: "#CADBED",
          darkblue: "#282E5C",
          mediumgreen: "#606E64",
          darkgreen: "#27331A",
          lightgreen: "#151E26",
          mint: "#759D90",
        },
        button: {
          light: "#314350",
          lighthover: "#2A3946",
          darkhover: "#313B43",
          dark: "#566270",
        },
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
}
