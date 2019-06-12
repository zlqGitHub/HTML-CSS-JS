<template>
  <div class="bottom_tarBar">
      <span class="item" @click="switched('/home')">
        <img :src=" $route.path.includes('/home') ? tarBarImgArr[0].selected : tarBarImgArr[0].normal " alt="">
        <span :style=" $route.path.includes('/home') ?  {color} : ''">首页</span>
      </span>
      <span class="item" @click="switched('/recommend')">
        <img :src=" $route.path.includes('/recommend') ? tarBarImgArr[1].selected : tarBarImgArr[1].normal " alt="">
        <span :style=" $route.path.includes('/recommend') ?  {color} : ''">推荐</span>
      </span>
      <span class="item" @click="switched('/search')">
        <img :src=" $route.path.includes('/search') ? tarBarImgArr[2].selected : tarBarImgArr[2].normal" alt="">
        <span :style=" $route.path.includes('/search') ?  {color} : ''">搜索</span>
      </span>
      <span class="item" @click="switched('/chat')">
        <img :src="$route.path.includes('/chat') ? tarBarImgArr[3].selected : tarBarImgArr[3].normal" alt="">
        <span :style=" $route.path.includes('/chat') ?  {color} : ''">聊天</span>
      </span>
      <span class="item" @click="switched('/me')">
        <img :src=" $route.path.includes('/me') ? tarBarImgArr[4].selected : tarBarImgArr[4].normal" alt="">
        <span :style=" $route.path.includes('/me') ?  {color} : ''">我的</span>
      </span>
  </div>
</template>

<script>
  export default {
    name: "TarBar",
    data(){
      return {
        color:'red',
        tarBarImgArr:[
          {normal: './../../../static/img/icon_home.png', selected: './../../../static/img/icon_home_selected.png'},
          {normal: require('./../../../static/img/icon_intro.png') , selected: require('./../../../static/img/icon_intro_selected.png')},
          {normal: require('./../../../static/img/icon_search.png') , selected: require('./../../../static/img/icon_search_selected.png')},
          {normal: require('./../../../static/img/icon_chat.png') , selected: require('./../../../static/img/icon_chat_selected.png')},
          {normal: require('./../../../static/img/icon_mine.png') , selected: require('./../../../static/img/icon_mine_selected.png')},
        ]
      }
    },
    methods: {
      switched(path) {
        // console.log(this.$router);
        //通过replace来切换路由页面    replace来切换没有层级的页面
        this.$router.replace(path);
      }
    }
  }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  .bottom_tarBar
    background #fff
    width 100%
    height 50px
    position fixed
    bottom 0
    left 0
    display flex
    flex 1
    justify-content space-around
    font-size 14px;
    color 666
    z-index 666

    .item
      display flex
      flex-direction column
      align-items center
      justify-content center

      img
        width 35%
        margin-bottom 3px
</style>
