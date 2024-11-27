/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {

    screens: {
      xs: '375px',
      sm: '478px',
      md: '769px',
      lg: '976px',
      xl: '1440px'
    },

    fontFamily: {
      barlow: ['Barlow', 'sans-serif'],
      fraunces: ['fraunces, sans-serif']
    },

    extend: {

      colors: {
        softRed: 'hsl(7, 99%, 70%)',
        yellow: 'hsl(51, 100%, 49%)',
        darkSaturatedCyan: 'hsl(167, 40%, 24%)',
        darkBlue: 'hsl(198, 62%, 26%)',
        darkModerateCyan: 'hsl(168, 34%, 41%)',
        veryDarkSaturatedCyan: 'hsl(212, 27%, 19%)',
        veryDarkGrayishBlue: 'hsl(213, 9%, 39%)',
        darkGrayishBlue: 'hsl(232, 10%, 55%)',
        grayishBlue: 'hsl(210, 4%, 67%)',
        white: 'hsl(0, 0%, 100%)'
      }
    },
  },
  plugins: [],
}

