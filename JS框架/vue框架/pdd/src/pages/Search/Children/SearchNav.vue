<template>
  <div class="search_nav">
    <a href="" class="search_nav_to">
      <img src="./../imgs/search.png" alt="" width="20px">
      <span>男士瑞士手表</span>
    </a>
  </div>
</template>

<script>
  export default {
    name: "SearchNav"
  }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  @import "./../../../common/stylus/mixins.styl"
  .search_nav
    width 100%
    height 50px
    background #fff
    display flex
    justify-content center
    align-items center
    border-bottom-1px(#ededed)
    .search_nav_to
      width 88%
      height 70%
      background #ededed
      color #9c9c9c
      text-decoration none
      display flex
      justify-content center
      align-items center
      border-radius 8px
      span
        margin-left 3px
</style>
