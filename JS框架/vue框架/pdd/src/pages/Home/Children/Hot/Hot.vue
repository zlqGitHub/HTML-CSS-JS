<template>
  <div class="hot">
    <!-- 轮播图 -->
    <div class="swiper-container" v-if="homeCasual.length > 0">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in homeCasual" :key="index">
          <img :src="item.imgurl" alt="" width="100%">
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>

    <!-- 中间导航区 -->
    <HotNav />

    <!-- 中间广告区 -->
    <img src="./../../img/hot_ad/home_ad.gif" class="ad_img" alt="">
    
    <!-- 商品列表区域 -->
    <HotShopList />

  </div>
</template>

<script>
  //导入轮播图第三库
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.css'

  //通过 延展字符来获取数据
  import { mapState } from 'vuex';

  //导入HotNav组件
  import HotNav from './HotNav';
  import HotShopList from './HotShopList';
  export default {
    name: "Hot",
    computed:{
      //注意：获取的数据必须在computed中来定义，因为他是时刻动态变化的
      ...mapState(['homeCasual'])
    },
    components:{
      HotNav,
      HotShopList,
    },
    /*
      注意：数据的请求的是异步请求，因此需要在数据请求完成时在来进行 实例化 Swiper ，
      方法：1 $nextTick()  异步更新队列
            2. 回调
    */
    watch:{    //主要用来监听某些特定数据的变化，从而进行某些具体的业务逻辑操作；   深度监视
      homeCasual(){   //只要数据发生变化就会执行其操作
        this.$nextTick(() => {
          new Swiper('.swiper-container', {
            autoplay:true,//等同于以下设置
            pagination: {
              el: '.swiper-pagination',
            }
          });
        });
      }
    },
    mounted() {
      //获取轮播图数据
      this.$store.dispatch("reqHomeCasual")
      //获取导航栏数据
      this.$store.dispatch("reqHomeNav");
    }

  }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  .hot
    width 100%
    background #f5f5f5
    padding-top 44px
    .ad_img
      width 100%
      background #fff
      margin 8px 0
      padding 5px
      box-sizing border-box
</style>
