const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  // productionSourceMap 为 false 表示项目打包后不产生 map 文件
  // （有了 map 的话，运行打包后的项目会准确的输出是哪行哪列出错）
  productionSourceMap: false,
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