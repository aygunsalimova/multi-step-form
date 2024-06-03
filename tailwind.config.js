/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'main-blue': 'rgb(72, 62, 255)',
        'main-pink': 'rgb(249, 129, 142)',
        'main-purple': 'rgb(98, 89, 255)',
        'main-orange': 'rgb(255, 175, 126)',
        'sky-blue': 'rgb(190, 226, 253)',
        'dark-blue': 'rgb(2, 41, 89)',
        'main-grey': 'rgb(150, 153, 170)',
        'bg': 'rgb(239, 245, 255)',
        "border-grey": 'rgb(214, 217, 230)',
        'very-light-grey': 'rgb(248, 249, 255)',
        'btn-blue': 'rgb(22, 74, 138)'
      },
      height: {
        '568': "568px",
        '33': '33px',
        '81': '81px',
      },
      borderWidth: {
        'custom': '33px'  // Custom border-width utility
      },
      width: {
        '33': '33px',
        '138': "138px",
        '450': '450px'
      },
      margin: {
        '100': '100px'
      },
      padding: {
        '018': '18px'
      }
    },
  },
  plugins: [],

}

