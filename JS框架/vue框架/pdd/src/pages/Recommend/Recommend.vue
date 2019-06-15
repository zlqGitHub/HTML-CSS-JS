<template>
  <div class="Recommend-container" v-if="recommendShopList.length > 0">
    <ul class="Recommend">
      <!--
      <li class="shop_item" v-for="(item,index) in recommendShopList" :key="index">
        <img class="item_img" :src="item.thumb_url" alt="" width="100%" v-if="item.thumb_url">
        <span class="item_title">{{item.short_name}}</span>
        <div class="item_bottom">
          <span class="item_price">￥{{item.normal_price}}</span>
          <span class="item_count">{{item.sales_tip}}</span>
          <button class="item_btn">找相关</button>
        </div>
      </li>
       -->
      <!-- 将商品列表抽离出来，因为其他地方也有用到，这样可以提高代码的重用性 -->
      <ShopList
        v-for="(item,index) in recommendShopList"
        :key="index"
        :item=item
      />
    </ul>

  </div>
</template>

<script>
  import { Indicator } from 'mint-ui';
  import {mapState} from 'vuex';
  //引入组件
  import ShopList from './../../components/ShopList/ShopList'
  //引入better-scroll库
  import BScroll from 'better-scroll';

  export default {
    name: "Recommend",
    data(){
      return {
        page:1,
        count:20
      }
    },
    components: {
      ShopList
    },
    mounted() {
      Indicator.open("正在加载数据...");
      this.$store.dispatch("reqRecommendShopList",{page:this.page,count:this.count,callback:()=>{
        Indicator.close();
      }});
    },
    computed: {
      ...mapState(['recommendShopList'])
    },
    watch:{
      recommendShopList(){
        this.$nextTick(()=>{
          //只要有数据的变化就需要page+1
          this.page += 1;
          //初始化
          this._initScroll();
          //关闭加载
          Indicator.close();
        });
      }
    },
    methods:{
      _initScroll(){
        //实力化
        this.scroll = new BScroll('.Recommend-container',{
          scrollY: true,
          click: true,
          probeType: 3
        })
        //监听触摸结束
        this.scroll.on("touchEnd",(pos) => {
          if(pos.y >= 50){
            console.log("下拉刷新");
            // Indicator.open({
            //   spinnerType: 'fading-circle'
            // });
          }else if(this.scroll.maxScrollY > pos.y + 20){
            console.log(this.page);
            console.log("上拉刷新");
            Indicator.open("正在加载数据...");
            this.$store.dispatch("reqRecommendShopList",{page:this.page,count:this.count,callback:()=>{
              Indicator.close();
            }});
          }
        });

        //监听滚动结束
        this.scroll.on("scrollEnd",(pos) => {
          this.scroll.refresh();  // 当 DOM 结构发生变化的时候务必要调用确保滚动的效果正常
        });
      }
    }
  }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  @import "https://unpkg.com/mint-ui/lib/style.css"
  .Recommend-container
    width 100%
    height 100%
    background #f5f5f5
    /*overflow hidden*/
    .Recommend
      display flex
      flex-wrap wrap
      flex-direction row
      justify-content space-between
      padding-bottom 50px
</style>
