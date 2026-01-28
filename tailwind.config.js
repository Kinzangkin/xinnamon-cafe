/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./*.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cinnamon: {
          50: '#fdf8f6',
          100: '#f2e8e5',
          200: '#eaddd7',
          300: '#e0cec7',
          400: '#d2b48c', // Tan?
          500: '#b87333', // Copper
          600: '#a0522d', // Sienna
          700: '#8b4513', // SaddleBrown
          800: '#6d370f',
          900: '#4e270a',
          DEFAULT: '#8b4513',
        },
        cream: '#FDFBF7',
        'dark-charcoal': '#1a1a1a',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Lato"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
