/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'node_modules/daisyui/dist/**/*.js',
    'node_modules/react-daisyui/dist/**/*.js',
    './src/**/*.{js,jsx,ts,tsx}',
    './src/layout/*.tsx',
    './public/index.html',
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}

