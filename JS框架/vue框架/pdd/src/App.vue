<template>
  <div id="app">
    <router-view></router-view>
    <TarBar></TarBar>
  </div>
</template>

<script>
  import TarBar from './components/TarBar/TarBar';
  export default {
    name: "App",
    components:{
      TarBar,
    },
    created(){
      this.$store.dispatch("getUserInfo");
    }
  }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  #app
    width 100%
    height 100%
    background #f5f5f5

</style>
