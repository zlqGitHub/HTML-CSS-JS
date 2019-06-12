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
  import {mapState} from 'vuex';
  //引入组件
  import ShopList from './../../components/ShopList/ShopList'

  export default {
    name: "Recommend",
    components: {
      ShopList
    },
    mounted() {
      this.$store.dispatch("reqRecommendShopList");
    },
    computed: {
      ...mapState(['recommendShopList'])
    }
  }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  .Recommend-container
    width 100%
    /*height 100%*/
    background #f5f5f5
    margin-bottom 50px

    .Recommend
      width 100%
      display flex
      flex-wrap wrap
      flex-direction row
      justify-content space-between

</style>
