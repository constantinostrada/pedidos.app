/** @type {import('tailwindcss').Config} */
purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
};

