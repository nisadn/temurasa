/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3E86F5',
        },
        white: {
          DEFAULT: '#FFFFFF',
          200: '#F7F7F7',
          300: '#D6D6D6',
          400: '#808080',
        }
      },
    },
  },
  plugins: [],
}
