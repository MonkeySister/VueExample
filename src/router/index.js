import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routerList = []
function importAll (routerArr) {
  routerArr.keys().forEach(key => {
    routerList.push(routerArr(key).default)
  });
}
//获取同文件下的所有.js文件
importAll(require.context('.', true, /\.router\.js/))


const routes = [
  ...routerList
]

const router = new VueRouter({
  routes
})

export default router
