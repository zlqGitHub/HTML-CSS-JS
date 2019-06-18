<template>
  <div class="Me">
    <select-login />
   <div>
      我的页面
   </div>
  </div>
</template>

<script>
  import SelectLogin from './../Login/SelectLogin';
  export default {
    name: "Me",
    components:{
      SelectLogin,
    },
    mounted() {
      // console.log(this.$router);
    }
  }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  .Me
    width 100%
    height 100%
    background palegreen
</style>
