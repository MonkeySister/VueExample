export default {
  path: '/',
  name: 'index',
  //路由的懒加载模式，当需要时才引入
  component: () => import('@/views/index/Index'),
  children: []
}