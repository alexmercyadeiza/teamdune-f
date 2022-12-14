/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Switzer"],
      },
      colors: {
        "dune-brown": "#003B73",
      },
    },
  },
  plugins: [require("daisyui"), require("@tailwindcss/forms")],

  daisyui: {
    themes: false,
  },
};
