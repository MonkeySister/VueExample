// 管理全局组件
import Vue from 'vue'

// 处理首字母大写 abc => Abc
function changeStr (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}
/*
    require.context(arg1,arg2,arg3)
        arg1 - 读取文件的路径
        arg2 - 是否遍历文件的子目录
        arg3 - 匹配文件的正则
    关于这个Api的用法，可以去webpack中查询一下
*/
const requireComponent = require.context('.', true, /\.vue$/)

//获取指定目录下的所有.vue文件
requireComponent.keys().forEach(fileName => {
  const config = requireComponent(fileName)
  // 对fileName进行截取操作
  fileName = fileName.replace(/^\.\//, '').replace(/\.\w+$/, '')
  let num = fileName.indexOf('/')
  fileName = fileName.slice(num + 1)
  // 将文件名首字母大写改为小写
  const componentName = changeStr(fileName)
  Vue.component(componentName, config.default || config)
});