import axios from 'axios'

const DEV_BASE_URL = '/api'
const PRO_BASE_URL = '/api'

process.env.NODE_ENV === 'production' ? PRO_BASE_URL : DEV_BASE_URL
// axios.defaults.baseURL = DEV_BASE_URL

axios.defaults.timeout = 5000
// http request 请求拦截器
axios.interceptors.request.use(
  config => {
    if (config.url !== '/oauth/token') {
      let token = localStorage.getItem('token')
      if (token) {
        config.headers.Authorization = `bearer ${token}`
      } else {
        console.log("token过期或者不存在，请重新登录！")
      }
    }
    return config
  },
  err => {
    return Promise.reject(err)
  }
)

// http response 响应拦截器
axios.interceptors.response.use(
  response => {
    return response
  },
  error => {
    if (error.response) {
      // switch (error.response.status) {
      //   case 401:
      //     // 返回 401 清除token信息并跳转到登录页面
      //     // store.commit(types.LOGOUT);
      //     router.replace({
      //       path: '/login',
      //       query: {
      //         redirect: router.currentRoute.fullPath
      //       }
      //     })
      //     break
      //   case 403:
      //     router.replace({
      //       path: '/admin/403'
      //     })
      //     break
      //   case 404:
      //     window.$vm.$message({
      //       type: 'error',
      //       message: '404',
      //       showClose: true
      //     })
      //     break
      //   case 500:
      //     router.replace({
      //       path: '/500'
      //     })
      //     break
      // }
    }
    // 返回接口返回的错误信息
    return Promise.reject(error.response.data)
  }
)

export default axios