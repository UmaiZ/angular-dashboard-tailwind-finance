/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'bgcolor': '#f4f5fe',
        'darkgrey': '#2c2d31',
        'activesidebg': '#1a1a1a',
        'white': '#ffffff'
      }
    },

  },

  plugins: [],
}
