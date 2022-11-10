/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},

    colors: {
      extraLightBlue: 'var(--extraLightBlue)',
      lightBlue: 'var(--lightBlue)',
      hover: 'var(--hover)',
      blue: 'var(--blue)',
    },
  },
  plugins: [require('daisyui')],
};
