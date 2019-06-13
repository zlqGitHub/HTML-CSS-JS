<template>
  <div class="searchPanel">
    <div class="searchTop">
      <div class="searchInput">
        <img src="./../imgs/search.png" width="20px" alt="">
        <input ref="mySearch" type="search" placeholder="男士手表">
      </div>
      <button @click="isShowPanel(false)">取消</button>
    </div>

    <div class="hopSearch">
      <div class="searchTip">
        <img src="./../imgs/hot.png" width="23px" alt="">
        <span>热门搜索</span>
      </div>
      <ul class="hopLi">
        <li>面纸巾</li>
        <li>浴巾儿童</li>
        <li>石榴水果</li>
        <li>冰箱保温盒</li>
        <li>富豪卷纸</li>
        <li>皮皮虾</li>
      </ul>
    </div>

  </div>
</template>

<script>
  export default {
    name: "SearchPanel",
    props:{
      isShowPanel:Function
    },
    mounted(){
      // this.$refs.mySearch.focus();
      // console.log(document.getElementsByTagName("input")[0]);
      setTimeout(()=>{
        document.getElementsByTagName("input")[0].focus()
      },50)
    }
  }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  .searchPanel
    width 100%
    height 100%
    background #fff
    position absolute
    left 0
    top 0
    z-index 1000

    .searchTop
      width 92%
      height 60px
      margin 0 auto
      display flex
      flex-direction row
      align-items center
      justify-content space-between

      .searchInput
        width 80%
        height 40px
        padding 0 8px
        border-radius 8px
        background #EDEDED
        display flex
        align-items center
        input
          width 90%
          height 90%
          outline none
          padding-left 8px
          border none
          background transparent
          font-size 17px
          color #aaa
      button
        border none
        font-size 18px
        cursor pointer
        color #A7A7A7
        background transparent
    .hopSearch
      width 92%
      margin 30px auto
      color #aaa

      .searchTip
        display flex
        align-items center
        margin-bottom 10px
        margin-left 5px

        span
          margin-left 5px
          font-size 18px

      .hopLi
        display flex
        flex-wrap wrap

        li
          color #58595b
          padding 8px 14px
          margin 5px 10px
          border-radius 15px
          background #ededed

</style>
