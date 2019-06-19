<template>
  <div class="Me">
    <div v-if="userInfo.id">
      <MeTop />
    </div>
    <select-login v-else />
  </div>
</template>

<script>
  import SelectLogin from './../Login/SelectLogin';
  import {mapState} from 'vuex';
  import MeTop from './MeTop';
  export default {
    name: "Me",
    computed:{
      ...mapState(["userInfo"])
    },
    components:{
      SelectLogin,
      MeTop
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
    background #f5f5f5
</style>
