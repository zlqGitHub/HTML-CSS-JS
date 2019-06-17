<template>
  <div class="Me">
    <select-login />
  </div>
</template>

<script>
  import SelectLogin from './../Login/SelectLogin';
  export default {
    name: "Me",
    components:{
      SelectLogin,
    }
  }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  .Me
    width 100%
    height 100%
    background palegreen
</style>
