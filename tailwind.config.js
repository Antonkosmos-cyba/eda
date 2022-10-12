/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        
        'Roboto-Regular':'Roboto-Regular',
        'Roboto-Bold':'Roboto-Bold',
        'Caveat-Regular':'Caveat-Regular',
      },

      backgroundImage: {
        'foto': "url('./src/images/02.jpg')",
        'footer-texture': "url('/img/footer-texture.png')",
      }
    },

  },
  plugins: [],
}
