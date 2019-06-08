/*
  入口js：创建Vue实例
*/
import Vue from 'vue';
import App from './App';

//实例对象
new Vue({
  el: "#app",
  //注册组件
  components:{
    App
  },
  //生成模板
  template:"<App />"
});

