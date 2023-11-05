/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'sp-primary': {
          200: '#000000',
          300: '#231F20',
          400: '#54482C',
          // 500: '#00ADB5',
          // 600: '#00A7B5',
          // 700: '#00A1B5',
        },
        'sp-secondary': {
          300: '#F7FDFD',
          400: '#FBFCF7',
          500: '#EFEEE6',
        },
        'sp-tertiary': {
          500: '#E09331',
          600: '#F2DC4F'
        },
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

