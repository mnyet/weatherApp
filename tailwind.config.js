/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'niceGray': {
          100: '#424242',
          200: '474747'
        },
        'niceGreen': {
          100: '#EEF2B7'
        },
        'niceWhite': {
          100: '#E2E2E2',
          200: '#d3d3d3'
        },
        'niceBlack': {
          100: '#1F1E1C'
        },
      },
    },
  },
  plugins: [],
}

