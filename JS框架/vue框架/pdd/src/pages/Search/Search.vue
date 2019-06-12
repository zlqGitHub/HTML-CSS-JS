<template>
  <div class="Search">
    <!-- 顶部搜索框 -->
    <SearchNav class="search_nav"/>

    <!-- 中间内容区 -->
    <div class="shop">
      <!-- 左边 -->
      <div class="menu_wrapper">
        <ul ref="menu_parent">
          <li
            class="menu_item"
            v-for="(item,index) in searchGoods"
            :key="index"
            :class="currentIndex === index ? 'current' : ''"
            @click="clickLeftItem(index)"
          >
            <span>{{item.name}}</span>
          </li>
        </ul>
      </div>
      <!-- 右边 -->
      <div class="shop_wrapper">
        <ul class="shop_ul" ref="shopsParent">
          <li class="shop_li" v-for="(item,index) in searchGoods" :key="index">
            <div class="li_top">
              <span>{{ item.name }}</span>
              <a href="#">查看更多 ></a>
            </div>
            <ul class="ad_img" v-if="item.tag === 'phone'">
              <li v-for="(item,index) in item.category" :key="index">
                <img :src="item.icon" alt="">
              </li>
            </ul>
            <ul class="shop_li_items">
              <li class="shop_li_item" v-for="(item2,index) in item.items" :key="index">
                <img :src="item2.icon" alt="">
                <span>{{ item2.title }}</span>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>

  </div>
</template>

<script>
  import {mapState} from 'vuex';
  import SearchNav from './Children/SearchNav';
  import BScroll from 'better-scroll';      //第三方库，实现滚动
  export default {
    name: "Search",
    data(){
      return {
        scrollY:0,   //滚动的纵坐标
        rightTops:[],   //报错右边li元素加载时对应的高度
      }
    },
    computed:{
      ...mapState(['searchGoods']),
      currentIndex(){
        return this.rightTops.findIndex((item,index) => {
          this._leftScroll(index);
          return this.scrollY >= item && this.scrollY <= this.rightTops[index+1];
        })
      }
    },
    watch:{
      searchGoods(){
        this.$nextTick(() => {
          //左右两边栏的滚动
          this._initBScroll();

          //获取右边栏li的头部位置
          this._initRightScrollTop();

        });
      }
    },
    components:{
      SearchNav,
    },
    mounted(){
      //获取发送请求
      this.$store.dispatch("reqSearchGoods");
    },
    methods:{
      //商品左边栏和右边栏的滚动处理    (通过this来处理，可以变为全局的)
      _initBScroll(){
        //左侧菜单栏
        this.scrollLeft = new BScroll(".menu_wrapper", {
          click:true
        });
        //右侧列表
        this.scrollRight = new BScroll(".shop_wrapper", {
          probeType:3
        });
        //监听右侧的滚动事件
        this.scrollRight.on("scroll",(pos) => {
          this.scrollY = Math.abs(Math.round(pos.y));
        });

      },
      //获取右边栏所有的li 的高度
      _initRightScrollTop(){
        // console.log(this.$refs.shopsParent);
        let tempArr = [];   //临时数组来存放li元素的高度
        let top = 0
        tempArr.push(top);
        let lis = this.$refs.shopsParent.getElementsByClassName("shop_li");
        Array.prototype.slice.call(lis).forEach( (item,index) => {    //注意：伪  ->  真
          // 最后一个li元素时的处理
          if(index === lis.length - 1){
            item.style.paddingBottom = `${window.innerHeight - item.clientHeight - 100 }px`
          }
          top += item.clientHeight;
          tempArr.push(top);
        })
        //更新数据
        this.rightTops = tempArr;
        // console.log(this.rightTops);
      },

      //左侧菜单的联动效果    使用第三方库中 scrollToElement
      _leftScroll(index){
        let lis = this.$refs.menu_parent.getElementsByTagName("li");
        // console.log(lis);
        let el = lis[index];
        this.scrollLeft.scrollToElement(el,0,0,-100);
      },

      //左侧菜单栏点击事件
      clickLeftItem(index){
        this.scrollY = this.rightTops[index];
        this.scrollRight.scrollTo(0,-this.rightTops[index],300);
      }

    }
  }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  .Search
    width 100%
    height 100%
    .search_nav
      position fixed
      top 0
      left 0
      z-index 333
    .shop
      width 100%
      height 100%
      /*padding-top 52px*/
      background #fff
      display flex
      flex-direction row
      overflow hidden
      .menu_wrapper
        width 100px
        margin-top 52px
        margin-bottom 50px
        background #FAFAFA
        .menu_item
          width 100%
          height 60px
          display flex
          justify-content center
          align-items center
          position relative
          color #666
        .current
          background #fff
          color #e02424
        .current::before
          content ''
          width 4px
          height 30px
          background #e02424
          position absolute
          left 0
      .shop_wrapper
        background #fff
        width 100%
        margin-top 52px
        margin-bottom 60px
        .shop_ul
          width 100%
          .shop_li
            width 100%
            display flex
            flex-direction column
            margin-bottom 10px
            .li_top
              width 88%
              display flex
              margin 20px auto 10px
              justify-content space-between
              span
                color #58595B
              a
                color #9C9C9C
                text-decoration none
                font-size 14px
                font-weight lighter
            .ad_img
              width 94%
              margin 0 auto
              display flex
              align-items center
              flex-wrap wrap
              li
                width 33.3%
                display flex
                align-items center
                justify-content center
                margin 10px 0
                img
                  width 78%
            .shop_li_items
              display flex
              flex-wrap wrap
              .shop_li_item
                width 33.3%
                display flex
                flex-direction column
                justify-content center
                align-items center
                /*background red*/
                height 95px
                span
                  color #151516
                  font-size 14px
                img
                  width 60px
                  margin-bottom 3px

</style>
