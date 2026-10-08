/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: { 900: '#0b2a4a', 800: '#12396a', 700: '#1a4d8f' },
        sky: { 50: '#f1f7fd', 100: '#e3effa', 200: '#c7dff4' },
        care: { 500: '#1f9d63', 100: '#e2f5ec' },
      },
    },
  },
  plugins: [],
}
