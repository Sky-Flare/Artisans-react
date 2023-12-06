/** @type {import('tailwindcss').Config} */
/* eslint-env node */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{html,js,tsx,ts}', './src/*.{tsx,ts}', './src/**/**/*.{tsx,ts}'],
  theme: {
    extend: {},
  },
  plugins: [],
}
