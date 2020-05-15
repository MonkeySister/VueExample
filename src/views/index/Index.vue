<template>
  <div class="container">
    <!-- <three-text></three-text> -->
    <p>测试一个全局过滤器设置金钱的样式{{countData|moneyData}}</p>
    <p>
      <input type="number"
             v-model.number="day1"
             @change="dayChange(day1)"
             :disabled="day1<=0?true:false">天
    </p>
    <p>
      <input type="number"
             v-model.number="day2"
             :disabled="day1<=0?true:false"
             @change="dayChange(day2)">天
    </p>
    <p>{{day1}}*500+{{day2}}*300={{day1_day2}} </p>
    <!-- <p>测试计算属性{{day1Day2(500)}}</p> -->
    <three-text></three-text>
    <my-button></my-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      countData: "20.83736",
      day1: 5,
      day2: 6,
    }
  },
  //计算属性
  computed: {
    //计算属性有缓存，可以缓存未改变的数据
    day1_day2: {
      get () {
        return this.day1 * 500 + this.day2 * 300
      },
    }
  },
  methods: {
    //不建议使用，反复调用不好
    day1Day2 (num) {
      return this.day1 * num + this.day2 * (num - 100)
    },
  }
}
</script>
<style lang="less" scoped>
p {
  color: @successColor;
}
</style>