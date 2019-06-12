<template>
  <div class="hot_nav">
    <!-- 滚动区域 -->
    <div class="hot_nav_content" v-if="homeNav.length > 0">
      <!--<div class="hot_nav_inner" @touchstart="handleTouchStart" @touchmove="handleTouchMove" @touchend="handleTouchEnd">-->
      <div class="hot_nav_inner">
        <a class="hot_item" v-for="(item,index) in homeNav" :key="index">
          <img :src="item.iconurl" alt="">
          <span>{{item.icontitle}}</span>
        </a>
      </div>
    </div>
    <!-- 进度条 -->
    <div class="bgScroll">
      <div class="barXWidth" :style="innerBarStyle"></div>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  export default {
    name: "HouNav",
    data() {
      return {
        screenW: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,     //屏幕宽度
        scrollContentW: 720,   //内容宽度
        bgBarW: 100,    //滚动条背景宽度
        barXWidth: 0,    //滚动条宽度
        currentPageX: 0,   //当前点击位置
        moveW: 0,    //手触摸移动距离
        barMoveW: 0,   //底部滚动条要滚动的距离
        moveEnd: 0,   //滚动条结束时的位置
      }
    },
    mounted() {
      this.getBottomBarWidth();
      this.bindEvent();
    },
    methods: {
      //移动端事件监听
      bindEvent(){
        this.$el.addEventListener("touchstart",this.handleTouchStart,false);
        this.$el.addEventListener("touchmove",this.handleTouchMove,false);
        this.$el.addEventListener("touchend",this.handleTouchEnd,false);
      },
      //开始触摸
      handleTouchStart(event) {
        //console.log(event.touches[0].pageX);
        this.currentPageX = event.targetTouches[0].pageX;   //移动前获取当前的位置
      },
      //触摸过程
      handleTouchMove(event) {
        this.moveW = event.touches[0].pageX - this.currentPageX;   //手移动的距离

        //计算滚动条要滚动的距离
        this.barMoveW = -((parseFloat(this.bgBarW) / this.scrollContentW) * this.moveW - this.moveEnd);

        //处理边界
        if (this.barMoveW <= 0) {  //左边
          this.barMoveW = 0;
        } else if (this.barMoveW >= this.bgBarW - this.barXWidth) {    //右边
          this.barMoveW = this.bgBarW - this.barXWidth + 1
        }

      },
      //触摸结束
      handleTouchEnd() {
        console.log(" 结束触摸");
        this.moveEnd = this.barMoveW;
      },

      //获取滚动条的宽度
      getBottomBarWidth() {
        this.barXWidth = (this.screenW / this.scrollContentW) * this.bgBarW;
      }
    },
    computed: {
      ...mapState(['homeNav']),
      //通过计算属性时刻来监听滚动的样式变化
      innerBarStyle() {
        return {
          width: `${this.barXWidth}px`,
          left: `${this.barMoveW}px`
        }
      }
    },
  }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  .hot_nav
    width 100%
    height 180px
    overflow-x: auto
    position relative
    background #fff
    margin-top 8px
    .hot_nav_content
      width 100%
      height 180px
      overflow-x: auto

      .hot_nav_inner
        width 720px
        display flex
        flex-wrap wrap
        overflow-x: auto

        .hot_item
          width 90px
          height 80px
          display flex
          flex-direction column
          justify-content center
          align-items center
          color: #666
          font-size 14px
          img
            width 35px
            margin-bottom 8px
    .bgScroll
      width 100px
      height 5px
      background #D6D5D6
      position absolute
      left 50%
      bottom 10px
      margin-left -50px
      border-radius 5px
      .barXWidth
        width 30px
        height 100%
        border-radius 5px
        background #F87E46
        position absolute
        left 0

    .hot_nav_content::-webkit-scrollbar { /* 隐藏默认的滚动条 */
      display none
    }
</style>
