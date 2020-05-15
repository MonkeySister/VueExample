<template>
  <button>{{text}}</button>
</template>
<script>
export default {
  props: {
    type: {
      type: String,
      default: 'default'
    },
    text: {
      type: String,
      default: '按钮'
    }
  },
  data () {
    return {

    }
  }
}
</script>
<style lang="less" scoped>
</style>