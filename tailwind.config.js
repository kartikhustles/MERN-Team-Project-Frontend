/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        new:{
          400:"#18292d",
          800:"#001317"
        },
      },
    },
  },
  plugins: [],
}

