module.exports = {
  indent: 'postcss',
  plugins: (loader) => {
    return [
      require('autoprefixer')({
        browsers: ['last 5 versions']
      })
    ]
  }
}