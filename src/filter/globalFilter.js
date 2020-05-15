import Vue from 'vue'

//定义一个全局过滤器，修改金钱的样式
Vue.filter('moneyData', function (value) {
  if (isNaN(value)) return 0;
  value = Number(value)
  return '￥' + value.toFixed(2)
})