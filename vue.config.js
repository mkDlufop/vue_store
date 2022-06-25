const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false, // 关闭eslint
  devServer: { // 代理跨域
    proxy: {
      '/api': {
        // target: 'http://39.98.123.211',
        target: "http://gmall-h5-api.atguigu.cn",
        // pathRewrite: { '^/api': '' },
      },
    },
  },
})
