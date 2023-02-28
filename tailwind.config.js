/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      serif: ['EB Garamond','serif'],
      sans: ['Lato', 'sans-serif'],
      monospace: ['Source Code Pro', 'monospace'],
    },
    extend: {
      colors: {
        'bath-steel-gray': '#494f5d',
      }
    },
  },
  plugins: [],
}
