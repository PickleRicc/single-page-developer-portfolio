/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        'primary': '#4EE1A0',
        'background': '#151515',
        'card': '#242424',
        'text': '#ffffff',
        'text-secondary': '#D9D9D9',
      },
      fontFamily: {
        'font-family': ["'Space Grotesk'", 'sans-serif'],
      },
      gridTemplateColumns: {
        'custom_grid': 'repeat(2, minmax(0, 1fr))',
      },
    },
  },
  plugins: [],
}
