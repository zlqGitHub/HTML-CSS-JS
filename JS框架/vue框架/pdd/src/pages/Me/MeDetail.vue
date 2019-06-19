<template>
  <div class="user-detail">
    <div class="user-detail-top">基本信息</div>
    <div class="user-detail-group">
      <div class="user-icon">
        <span>头像</span>
        <img src="./images/me_icon.png" alt="">
      </div>
      <div class="user-item">
        <span>手机</span>
        <span>{{ userInfo.user_phone | phoneFormat }}</span>
      </div>
      <div class="user-item">
        <span>昵称</span>
        <span><input type="text" v-model="user_name"></span>
      </div>
      <div class="user-item">
        <span>性别</span>
        <span><input type="text" v-model="user_sex"></span>
      </div>
      <div class="user-item">
        <span>常住地</span>
        <span><input type="text" v-model="user_address"></span>
      </div>
      <div class="user-item">
        <span>生日</span>
        <span><input type="text" v-model="user_birthday"></span>
      </div>
      <div class="user-item">
        <span>个性签名</span>
        <span><input type="text" v-model="user_sign"></span>
      </div>

      <button @click="saveUserInfo">修改</button>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex';
  import phoneFormat from './../../filter/index'
  export default {
    name: "MeDetail",
    data(){
      return{
        user_sign: '',   //人性前面
        user_address: '',
        user_name: '',
        user_sex: '',
        user_phone: '',
        user_birthday: '',
      }
    },
    computed:{
      ...mapState(["userInfo"]),
    },
    mounted(){
      this.user_name = this.userInfo.user_name || '';
      this.user_sex = this.userInfo.user_sex || '';
      this.user_address = this.userInfo.user_address || '';
      this.user_birthday = this.userInfo.user_birthday || '';
      this.user_sign = this.userInfo.user_sign || '';
    },
    methods:{
      saveUserInfo(){

      }
    }
  }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  .user-detail
    width 100%
    height 100%

    .user-detail-top
      width 100%
      height 60px
      line-height 60px
      padding-left 10px
      font-weight bold

    .user-detail-group
      .user-icon
        height 60px
        padding 0 10px
        background-color #fff
        border-bottom: 1px solid #e0e0e0
        display flex
        justify-content space-between
        align-items center

        img
          width 50px
          border-radius 50%

      .user-item
        height 40px
        padding 0 10px
        background-color #fff
        border-bottom: 1px solid #e0e0e0
        display flex
        justify-content space-between
        align-items center

        input
          border none
          outline none
          text-align right
          font-size 100%
      button
        width 90%
        height 40px
        line-height 40px
        background-color #e9232c
        text-align center
        margin 20px 5%
        border none
        font-size 16px
        color #fff
        border-radius 10px

    .right-title-color
      color #999
      font-size 14px
</style>
