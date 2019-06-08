<!-- 将其他组件结合起来 -->
<template>
  <div>
    <!-- 3. 使用组件 -->
    <Hello />
    <World />
  </div>
</template>

<script>
  //1. 引入组件   注意：组件名称开头一定是大写，因为在实例化的时候自动会为你解析掉
  import Hello from "./components/Hello";
  import World from "./components/World";
  export default {
    name: "App",
    //2. 注册组件
    components: {
      Hello,
      World,
    },

  }
</script>

<style scoped>

</style>
