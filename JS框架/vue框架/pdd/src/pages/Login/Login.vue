<template>
  <div class="login_container">
    <!--顶部logo-->
    <div class="login_logo">
      <img src="./images/lk_logo_sm.png" alt="" width="65%">
    </div>

    <!--登录选项卡-->
    <div class="select">
      <a href="#" class="select_way" :class="changeLogin ? 'current' : ''" @click.prevent="changeLoginWay(true)">验证码登录</a>
      <a href="#" class="select_way" :class="!changeLogin ? 'current' : ''" @click.prevent="changeLoginWay(false)">密码登录</a>
    </div>

    <!--验证码登录-->
    <div class="verCodeLogin" v-if="changeLogin">
      <input class="input" type="text" placeholder="手机号" v-model="phone">
      <button class="getCode" :style="phoneRight ? {color:'#9370DB'} : ''" @click.prevent="getVerifyCode">{{tipTitle}}</button>
      <!--<button class="getCode" @click.prevent="getVerifyCode">剩余 ({{countDown}}) s</button>-->
      <input class="input" v-model="code" type="text" placeholder="验证码">
      <span class="tip">
         温馨提示：未注册撩课帐号的手机号，登录时将自动注册，且代表已同意
          <a href="javascript:;">服务协议与隐私政策</a>
      </span>

      <button class="loginBtn" @click.prevent="loginSubmit">登录</button>
      <button class="backBtn" @click.prevent="$router.replace('/selectLogin')">返回</button>
    </div>

    <!--密码登录-->
    <div class="pwdLogin" v-else>
      <input class="input" type="text" placeholder="请输入手机号">
      <input class="input" type="text" placeholder="请输入密码">
      <input class="input inputCode" type="text" style="width: 50%" placeholder="请输入验证码">
      <button class="code">
        <img src="./images/captcha.svg" width="100%" alt="">
      </button>
      <span class="tip">
         温馨提示：未注册撩课帐号的手机号，登录时将自动注册，且代表已同意
          <a href="javascript:;">服务协议与隐私政策</a>
      </span>

      <button class="loginBtn">登录</button>
      <button class="backBtn">返回</button>
    </div>

  </div>
</template>

<script>
  import { Toast } from 'mint-ui';
  import {getPhoneCode,phoneCodeLogin} from './../../api/index';
  export default {
    name: "Login",
    data(){
      return {
        changeLogin: true,   //判断那种登录方式
        phone:'',   //手机号
        code:'',  //验证码
        tipTitle:'获取验证码',
        countDown:0,   //倒计时
        userInfo:{},   //用户信息
      }
    },
    computed:{
      //监听输入电话号是否正确
      phoneRight(){
        let result = /^1[35789]\d{9}$/gi.test(this.phone);
        return result;
      }
    },
    methods:{
      //选择多了方式
      changeLoginWay(flag){
        this.changeLogin = flag;
      },
      //获取验证码
      async getVerifyCode(){
        if(!this.phoneRight) return;   //手机号不正确是不允许点击
        this.countDown = 5;
        this.timer = setInterval(()=>{
          this.countDown--;
          this.tipTitle = '剩余 ('+ this.countDown +') s';
          if(this.countDown == -1){
            clearTimeout(this.timer);
            this.tipTitle = "获取验证码";
          }
        },1000);
        //向后台发送请求验证码的请求  因为返回的是promise异步对象，因此使用异步请求
        let result = await getPhoneCode({phone:this.phone});
        console.log(result);
        //验证码验证
        if(result.error_code === 0){
          Toast({
            message:result.message,
            position: "center",
            duration: 2000
          });
          return ;
        }
      },
      //提交信息进行登录
      async loginSubmit(){
        if(!this.phoneRight){
          Toast({
            message: '请输入正确的手机号',
            position: 'center',
            duration: 2000
          });
          return;
        }
        if(!/\d{6}/gi.test(this.code)){
          Toast({
            message: '请输入验证码',
            position: 'center',
            duration: 2000
          });
          return;
        }
        //登录
        let result = await phoneCodeLogin(this.phone,this.code);
        console.log(result);
        //验证码出错
        if(result.error_code === 0){
          Toast({
            message:result.method,
            position:"center",
            duration: 2000
          });
          return;
        }
        //获取数据失败
        if(result.error_code === 1){
          Toast({
            message:result.method,
            position:"center",
            duration: 2000
          });
          return;
        }
        //登录成功处理
        if(result.success_code === 200){
          this.userInfo = result.message;
        }


        //成功后后续处理
        if(!this.userInfo.id){
          Toast(this.userInfo.message);
        }else{    //成功

          this.$router.back();
        }

      }
    }

  }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  @import "https://unpkg.com/mint-ui/lib/style.css"
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
    .verCodeLogin,.pwdLogin
      width 100%
      display flex
      flex-direction column
      /*justify-content center*/
      align-items center
      margin-top 30px
      position relative
      .input
        width 85%
        height 40px
        outline none
        border none
        color #757575
        padding-left 8px
        margin-bottom 20px
        box-sizing border-box
        font-size 15px
        border-radius 5px
      .inputCode
        position relative
        left -17.5%
      .code
        width 36%
        height 70px
        border none
        background transparent
        position absolute
        top 105px
        left 57%
      .getCode
        height 24px
        border none
        background transparent
        font-size 16px
        color #D5D3D8
        position absolute
        top 8px
        left 65%

      .tip
        width 85%
        margin-bottom 30px
        line-height 20px
        font-size 14px
        color #ACACAC
        a
          text-decoration none
      .loginBtn
        width 85%
        height 40px
        background #9370DB
        color #fff
        border none
        font-size 16px
        border-radius 5px
        margin-bottom 20px
      .backBtn
        width 85%
        height 40px
        color #9370DB
        background #fff
        font-size 16px
        border 1px solid #9370DB
        border-radius 5px



</style>
