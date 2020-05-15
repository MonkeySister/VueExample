const path = require('path')
module.exports = {
  //配置全局less文件
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        path.resolve(__dirname, './src/assets/css/main.less')
      ]
    }
  }
}
