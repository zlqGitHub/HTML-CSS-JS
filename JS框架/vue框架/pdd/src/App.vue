<template>
  <div id="app">
    <router-view></router-view>
    <TarBar></TarBar>
  </div>
</template>

<script>
  import TarBar from './components/TarBar/TarBar';
  import {Toast} from 'mint-ui';
  export default {
    name: "App",
    components:{
      TarBar,
    },
    created(){
      let result = this.$store.dispatch("getUserInfos",{callback: (message) => {
        Toast({
          message:message,
          position:"center",
          duration:1500
        });
        this.$router.replace("/");
      }});

    }
  }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  @import "https://unpkg.com/mint-ui/lib/style.css"
  #app
    width 100%
    height 100%
    background #f5f5f5

</style>
