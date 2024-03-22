/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'dm-sans': "DM Sans"
      },
      maxWidth: {
        'base': '76rem'
      },
      colors: {
        brand: {
          blue: {
            400: '#00C0FD',
            500: '#42446E'
          },
          green: {
            500: '#E70FAA',
            600: '#666666'
          }
        }
      }
    },
  },
  plugins: [],
}

