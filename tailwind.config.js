/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: '#011638',
        slate: '#364156',
        silver: '#cdcdcd',
        mint: '#dff8eb',
      },
    },
  },
  plugins: [],
}

