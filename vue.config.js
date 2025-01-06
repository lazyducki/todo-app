const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true, // babel을 이용하라는 설정
  devServer: {
    overlay: false
  }
})
