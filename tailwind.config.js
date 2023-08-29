/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js}',
    './src/views/*.ejs',
    './src/views/**/*.ejs',
  ],
  theme: {
    extend: {},
  },
  plugins: ['@tailwindcss/forms'],
};
