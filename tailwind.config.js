const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'kkum-white': '#F4F9FF',
        'kkum-dark': '#131E29',
        'kkum-mid': '#1A2D38',
        'kkum-khaki': '#CCB57F',
      },
      fontFamily: {
        poppins: ['Poppins', ...defaultTheme.fontFamily.mono]
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
