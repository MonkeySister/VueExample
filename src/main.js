import Vue from 'vue'
import App from './App.vue'

import store from './store'


//全局过滤器
import "./filter/globalFilter"

//全局组件管理
import "./components/globalComponent"

//全局样式
import "./assets/css/index.css"

//路由
import router from './router'

//全局权限处理
import { checkAuthority } from './common/authority'
//Vue自定义指令用于权限的按钮显示与隐藏
Vue.directive('permission', {
  inserted (el, binging) {
    let permission = binging.value//获取v-permission的值
    if (permission) {
      let hasPermission = checkAuthority(permission)
      if (!hasPermission) {
        //没有权限移除DOM元素
        el.parentNode && el.parentNode.removeChild(el)
      }
    } else {
      console.log('需要传key')
    }

  }
})

//请求http
import http from './http/http'
Vue.prototype.$http = http

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
