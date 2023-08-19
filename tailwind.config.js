/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        barlow: "'Barlow Condensed', sans-serif",
        bellefair: "'Bellefair', serif;",
      },
    },
  },
  plugins: [],
};

