<template>
  <div class="Home">
    <!--顶部选项栏-->
    <ly-tab
      v-model="selectedId"
      :items="items"
      :options="options"
      @change="handleChange"
      class="tarBar-top"
    >
    </ly-tab>
    <!--显示二级路由-->
    <router-view>

    </router-view>

  </div>
</template>

<script>
  export default {
    name: "Home",
    mounted(){
      // console.log(this.$store);

    },
    data () {
      return {
        selectedId: 0,   //传递当前的ID
        items: [    //顶部选项卡菜单
          {label: '热门'},
          {label: '服饰'},
          {label: '鞋包'},
          {label: '母婴'},
          {label: '百货'},
          {label: '食品'},
          {label: '内衣'},
          {label: '男装'},
          {label: '电器'}
        ],
        options: {
          activeColor: 'red',   //当前激活的颜色
          // 可在这里指定labelKey为你数据里文字对应的字段
        },
        //二级路由路径
        urlArr:[
          "/home/hot","/home/dress","/home/box","/home/mbaby","/home/general",
          "/home/food","/home/shirt","/home/man","/home/ele"
        ]
      }
    },
    methods:{
      //点击选项卡时触发的方法
      handleChange(item,index){
        // console.log(item,index);
        this.$router.replace(this.urlArr[index]);
      }
    }
  }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  .Home
    width 100%
    height 100%
    .tarBar-top
      position fixed
      left 0
      top 0
      z-index 333
      font-size 14px
</style>
