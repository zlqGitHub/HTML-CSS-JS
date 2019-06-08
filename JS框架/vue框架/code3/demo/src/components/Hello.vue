<template>
  <div>
    <p class="p">{{ msg }}</p>
  </div>
</template>

<script>
  //es6中 export default{}   只能有一个
  export default {
    name: "Hello",
    data() {      //一定要是函数
      return {
        msg: "我是Hello組件"
      }
    }
  }
</script>

<style scoped>
  /*
    lang="scss"表示启动 scss 样式   scoped 解决了style 的所有样式问题，相当于是作用域
  */
  .p{
    font-size: 25px;
    color: orange;
  }
</style>
