module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  productionSourceMap: false,
  devServer: {
    port: '9548',
    proxy: {
      '/view': {
        target: 'http://43.143.98.14',
        changeOrigin: true
      }
    }
  }
}
