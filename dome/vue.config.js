const { defineConfig } = require('@vue/cli-service')
const { VantResolver } = require('unplugin-vue-components/resolvers')
const ComponentsPlugin = require('unplugin-vue-components/webpack')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer:{
   host:'localhost',
   port:8080,
   proxy:{
    '^/dev':{
      target:'http://localhost:7001',
      changeOrigin:true,
      pathRewrite:{
        '^/dev':''
      }
    }
   }
  },
  configureWebpack: {
    plugins: [
      ComponentsPlugin({
        resolvers: [VantResolver()]
      })
    ]
  }
})
