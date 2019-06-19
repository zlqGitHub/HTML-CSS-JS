<template>
  <div class="me-setting">
    <div>
      <MeCommentCell left-icon="itlike-2" left-title="免密码支付"/>
      <MeCommentCell left-icon="itlike-3" left-title="免拼单设置" :clickCell="dealCellClick"/>
      <MeCommentCell left-icon="itlike-1" left-title="消息接收设置" right-title="接收" right-title-color="red"/>
    </div>

    <div style="margin-top: 10px;">
      <MeCommentCell left-icon="itlike-5" left-title="免密码支付" :clickCell="dealCellClick"/>
      <MeCommentCell left-icon="itlike-4" left-title="免密码支付"/>
    </div>

    <div style="margin-top: 10px;">
      <MeCommentCell left-icon="itlike-1" left-title="免密码支付"/>
    </div>

    <div class="logout" @click="logout">退出登录</div>
  </div>
</template>

<script>
  import {Toast, MessageBox} from 'mint-ui';
  import {mapActions} from 'vuex';
  import MeCommentCell from "./MeCommentCell"

  export default {
    name: "MeSetting",
    components: {
      MeCommentCell
    },
    methods: {
      dealCellClick(props) {
        Toast('点击了' + props);
      },
      //退出登录
      logout(){
        MessageBox.confirm('你确定退出吗').then(action => {
          console.log(action);
          if(action !== "confirm")  return;
          this.$store.dispatch("logout").then((response)=>{
            console.log(response);
            Toast({
              message:response.message,
              position:"center",
              duration:1000
            });
            setTimeout(()=>{
              this.$router.replace("/");
            },1000)
          })

        });
      }


    }
  }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  @import "https://unpkg.com/mint-ui/lib/style.css"
  .logout
    width 100%
    height 44px
    margin-top 10px
    background-color #fff
    display flex
    justify-content center
    align-items center
    text-align center
</style>
