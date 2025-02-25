/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        "sans": ["Inter", "sans-serif"],
      },
      boxShadow: {
        "btn": "0 0 10px 10px #0FBAC044",
        "btn-hover": "0 0 15px 15px #0FBAC044",
      },
    },
    colors: {
      "primary": "#0FBAC0",
      "secondary": "#0FBAC0bb",
      "tertiary": "#ffffff44",
      "quaternary": "#cccccc",

      "bg-primary": "#060606",
      "bg-secondary": "#040404",
      "bg-tertiary": "#111111",

      "white": "#ffffff",
    },
    backgroundImage: {

    }
  },
  plugins: [],
};