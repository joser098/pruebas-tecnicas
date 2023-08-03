/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'violet': '#4C5FD5'
      },
      screens: {
        'mobile': {'max': '850px'}
      }
    },
  },
  plugins: [],
}

