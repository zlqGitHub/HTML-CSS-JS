<template>
  <div class="selectLogin">
    <span class="select">选择登录方式</span>
    <router-link to="/login" tag="button" class="btn">手机登录</router-link>
    <div class="footer">
      <img class="logo" src="./images/login_footer.png" alt="" width="140">
      <span class="company">
        由
        <img class="" src="./images/brand_PICC.png" alt="" width="110">
        全程保障
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "SelectLogin"
  }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  .selectLogin
    width 100%
    height 100%
    background #f5f5f5
    text-align center
    position fixed
    z-index 999
    .select
      display inline-block
      width 100%
      margin 180px auto 0
      font-size 20px
    .btn
      display inline-block
      width 295px
      height 45px
      color #fff
      text-align center
      border none
      border-radius 5px
      background #f6a622
      font-size 17px
      margin 50px auto

    .footer
      width 100%
      height 100px
      /*background palegreen*/
      position absolute
      bottom 0
      display flex
      flex-direction column
      align-items center
      .company
        width 100%
        height 20px
        font-size 12px
        color #9c9c9c
        display flex
        justify-content center
        align-items center
        margin-top 20px
        img
          position relative
          top 2px
          margin 0px 3px
</style>
