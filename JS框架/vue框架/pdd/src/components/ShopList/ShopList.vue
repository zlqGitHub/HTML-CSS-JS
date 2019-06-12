<template>
  <li class="shop_item">
    <img class="item_img" :src="item.thumb_url" alt="" width="100%" v-if="item.thumb_url">
    <span class="item_title">{{item.short_name}}</span>
    <div class="item_bottom">
      <span class="item_price">￥{{item.price}}</span>
      <span class="item_count">{{item.sales_tip}}</span>
      <button class="item_btn">找相关</button>
    </div>
  </li>
</template>

<script>
  export default {
    name: "ShopList",
    props:{
      item:Object
    }
  }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  .shop_item
    width 49.4%
    list-style none
    background-color #FFF
    margin-bottom 5px
    padding-bottom 8px

    .item_title
      font-size 14px
      font-weight lighter
      line-height 28px
      height 28px
      padding 0 5px
      display inline-block
      overflow hidden

    .item_bottom
      display flex
      flex-direction row
      align-items center
      width 96%
      margin 0 auto

      .item_price
        flex 1
        color red
        font-weight 700
        font-size 15px

      .item_count
        flex 2
        color #ccc
        font-size 12px
        margin-left 3px

      .item_btn
        flex 1
        background transparent
        border 1px solid orangered
        height 25px
        color red
        margin-right 2px
        font-size 12px
        border-radius 5px

</style>
