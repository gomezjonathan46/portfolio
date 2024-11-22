/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
      '1': 'inset 0 2px 3px 0 rgb(0 0 0 / 0.3)'
      },
    },
  },
  plugins: [],
};
