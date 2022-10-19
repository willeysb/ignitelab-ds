/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    fontSize: {
      xs: 14,
      sm: 16,
      lg: 24,
      xl: 32,
      '2xl': 36,
    },
    colors:{
      'black': '#000000',
      'white': '#ffffff',
      'transparent': 'transparent',

      'sage-200': '#99A29E',
      'sage-100': '#ECEEED',

      'indigo-900': '#2A2F2C',
      'indigo-700': '#192140',
      'indigo-500': '#2F4EB2',

      'crimson-300': '#F04F88',
    },
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif'
      }
    },
  },
  plugins: [],
}
