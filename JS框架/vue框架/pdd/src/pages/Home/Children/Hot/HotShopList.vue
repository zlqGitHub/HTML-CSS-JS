<template>
  <div class="hot_shop_list" v-if="homeShopList.length > 0">
    <ul class="shop_list_content">
      <li class="shop_item" v-for="(item,index) in homeShopList" :key="index">
        <span class="shop_img"><img :src="item.image_url" alt=""></span>
        <span class="shop_title">{{item.short_name}}</span>
        <div class="shop_item_bottom">
          <span class="shop_price">￥{{item.normal_price}}</span>
          <span class="shop_count">{{item.sales_tip}}</span>
          <span class="shop_user">
              <img :src="item2.avatar" alt="" v-for="(item2,index2) in item.bubble" :key="index2">
            </span>
          <span class="shop_btn">
              <button>去拼单> </button>
            </span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import {mapState} from 'vuex';
  export default {
    name: "HotShopList",
    computed:{
      ...mapState(['homeShopList'])
    },
    mounted() {
      this.$store.dispatch("reqHomeShopList")
    }
  }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  .hot_shop_list
    width 100%
    margin-bottom 58px

    .shop_list_content
      .shop_item
        background #fff
        display flex
        flex-direction column
        margin-bottom 8px
        padding-bottom 8px

        .shop_img
          img
            width 100%

        .shop_title
          line-height 24px
          height 48px
          width 94%
          display block
          margin-left 3%
          display: -webkit-box
          -webkit-box-orient vertical
          -webkit-line-clamp 2
          overflow hidden

        .shop_item_bottom
          width 94%
          margin 5px auto 0
          display flex
          align-items center

          .shop_price
            flex 1
            font-size 14px
            font-weight 700
            color red

          .shop_count
            flex 2
            font-size 12px
            color #ccc
            margin-left -10px

          .shop_user
            flex 1.5
            display flex
            flex-direction row
            justify-content flex-end
            align-items center
            margin-right 8px

            img
              width 30px
              border-radius 50%

            img:last-child
              margin-left -8px

          .shop_btn
            flex 1
            display flex
            justify-content flex-end

            button
              width 80px
              height 30px
              color #fff
              background red
              border none
              font-size 14px
              border-radius 5px
</style>
