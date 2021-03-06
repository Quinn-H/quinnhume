module.exports = (config) => [
  require('stylelint')(),
  require('postcss-cssnext')({
    browsers: 'last 2 versions',
    features: {
      customProperties: {
        variables: {
          maxWidth: '60rem',
          colorPrimaryDark: '#107491',
          colorPrimary: '#007acc',
          colorSecondaryDark: '#22846C',
          colorSecondary: '#427AA1',
          colorNeutralDark: '#111',
          colorNeutral: '#8C8D91',
          colorNeutralLight: '#FBFCFC',
          colorText: '#555'
        }
      },
      customMedia: {
        extensions: {
          '--mobile': '(max-width: 767px)'
        }
      }
    }
  }),
  require('postcss-reporter')(),
  ...!config.production ? [
    require('postcss-browser-reporter')()
  ] : []
]
