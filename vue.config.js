const path = require('path')

const resolve = (dir) => {
  return path.join(__dirname, dir)
}

module.exports = {
  lintOnSave: true,
  devServer: {
    proxy: {
      api: {
        target: 'http://localhost:4000'
      }
    }
  },
  chainWebpack: (config) => {
    config.resolve.symlinks(true)
    config.resolve.alias
      .set('@', resolve('src'))
      .set('assets', resolve('src/assets'))
  }
}
