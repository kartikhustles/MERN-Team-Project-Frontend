/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    
  ],  theme: {
    extend: {
      colors: {
        new:{
          400:"#18292d",
          800:"#001317"
        },
      },
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'sans-serif'],
        'script': ['Dancing Script', 'cursive'],
      },
    },
  },
  plugins: [
   
  ],
}

