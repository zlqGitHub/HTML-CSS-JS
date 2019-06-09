/*
  项目入口文件
*/
//1.导入
import Vue from "vue";
import Css from './assets/css/base.css';
import App from "./App";
import store from './store'

new Vue({
  el:"#app",
  /*//2.注册组件
  components:{
    App,
  },
  //3.生成组件模板
  template:"<App />"*/

  store,    //全局范围内均可使用
  //通过箭头函数来注册模板
  render: h => h(App)

})
