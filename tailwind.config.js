/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {

    fontFamily:{
      'Proxima': 'Proxima Nova'
    },
    extend: {
      screens:{
        'tablet':'200px',
        'desktop': '1200px',
      },
      colors:{
        'map':'#202336',
        'backbtn':'#E4E5EA',
        'benefitsText':'#988B49',
        'benefits':'#FFCF00',
        'etype':'#E1E6F4',
        'etypetext':'#55699E',
        'mobileBg':'#EFF0F5',
        'title':'#3A4562',
        'subtext':'#878D9D',
        'pagination-border':'#5876C5',
      }
    },
  },
  plugins: [],
}
