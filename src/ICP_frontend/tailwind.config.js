/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-dark': '#191a19',
        'prime': '#D8E9A8',
        'prime-text': '#025514',
        'dim-prime': '#4E9F3D',
        'btn-prime': 'rgba(78, 159, 61, 0.9)',
        'trans-prime': 'rgba(25,26,25, 0.1)'
      },
    },
  },
  plugins: [],
}

