const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // chainWebpack: config => {
  //   // config.resolve.symlinks(true); // 修复热更新失效
  //   config.module
  //     .rule("images")
  //     .test(/\.(jpg|png|svg|ttf|JPG)$/)
  //     .use("url-loader")
  //     .loader("url-loader")
  //     // .options({
  //     //   limit:10485760
  //     // })

  // }
})