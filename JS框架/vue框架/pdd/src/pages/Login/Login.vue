<template>
  <div class="login_container">
    <!--顶部logo-->
    <div class="login_logo">
      <img src="./images/lk_logo_sm.png" alt="" width="65%">
    </div>

    <!--登录选项卡-->
    <div class="select">
      <a href="#" class="select_way current">验证码登录</a>
      <a href="#" class="select_way">密码登录</a>
    </div>

    <!--验证码登录-->
    <div class="verCodeLogin">
      <input class="input" type="text" placeholder="手机号">
      <button class="getCode">获取验证码</button>
      <input class="input" type="text" placeholder="验证码">
      <span class="tip">
         温馨提示：未注册撩课帐号的手机号，登录时将自动注册，且代表已同意
          <a href="javascript:;">服务协议与隐私政策</a>
      </span>

      <button class="loginBtn">登录</button>
      <button class="backBtn">返回</button>
    </div>

    <!--密码登录-->
    <!--<div class="pwdLogin">-->

    <!--</div>-->

  </div>
</template>

<script>
  export default {
    name: "Login"
  }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  .login_container
    width 100%
    height 100%
    background #f5f5f5
    position fixed
    top 0
    left 0
    z-index 1000

    .login_logo
      width 100%
      text-align center
      margin-top 60px

    .select
      width 90%
      margin 30px auto 0;
      display flex
      justify-content center

      .select_way
        display inline-block
        height 25px
        margin 0 10px
        font-size 18px
        font-weight 900
        color black
        text-decoration none

      .current
        color #9370DB
        border-bottom 3px solid #9370DB

    .verCodeLogin
      width 100%
      display flex
      flex-direction column
      /*justify-content center*/
      align-items center
      margin-top 30px
      .input
        width 85%
        height 40px
        outline none
        border none
        color #BD8C76
        padding-left 8px
        margin-bottom 20px
        box-sizing border-box
        font-size 15px
        border-radius 5px
      .tip
        width 85%
        margin-bottom 20px
        line-height 20px
        font-size 13px
        color #ACACAC
        a
          text-decoration none
      .loginBtn
        width 85%
        height 40px
        background #9370DB
        color #fff
        border none
        border-radius 5px
        margin-bottom 20px
      .backBtn
        width 85%
        height 40px
        color #9370DB
        border 1px solid #9370DB
        border-radius 5px



</style>
