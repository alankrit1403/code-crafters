/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#0B0F19', // Deep dark blue instead of flat black
          card: '#151B2B', // Slightly lighter for cards
          purple: '#A855F7', // Matching the purple in the logo
          blue: '#0EA5E9', // Matching the cyan/blue in the logo
        }
      },
      fontFamily: {
        display: ['Inter', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}