module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        'xs':               '0px'
      },
      backgroundImage: {
        introductionPage:   "url('/img/introduction-page.jpg')"
      }
    },
    colors: {
      pink: {
        primary:            '#F84D9E',
        secondary:          '#FF7475',
      },
      black:                '#000000',
      white:                '#ffffff',
      transparent:          'transparent'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "100%",
          margin: "0 auto",
          padding: "0 15px",
          
          "@screen xs": {
            maxWidth: "100%"
          },
          "@screen sm": {
            maxWidth: "540px"
          },
          "@screen md": {
            maxWidth: "720px"
          },
          "@screen lg": {
            maxWidth: "960px"
          },
          "@screen xl": {
            maxWidth: "1140px"
          },
        },
        ".container-fluid": {
          maxWidth: "100%",
          margin: "0 auto",
          padding: "0 15px",
          width: "100%"
        }
      })
    }
  ],
}
