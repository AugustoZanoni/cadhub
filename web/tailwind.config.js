module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
    defaultLineHeights: true,
    standardFontWeights: true
  },
  purge: [],
  theme: {
    extend: {
      maxWidth: {
        '7xl': '80rem',
        '8xl': '96rem',
        '9xl': '110rem',
      },
      minHeight: {
        'md': '28rem'
      },

    }
  },
  variants: {},
  plugins: []
}
