module.exports = {
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = "zhengrr's Crossfire Database"
        return args
      })
  },

  lintOnSave: false
}
