/*
  项目的入口文件
*/
import Vue from 'vue';
import App from "./App";
import router from './router/index';

//导入第三方顶部选项栏库
import LyTab from 'ly-tab';
Vue.use(LyTab);

//导入Vuex使得全局使用
import store from './store/index';
import Vuex from 'vuex';
Vue.use(Vuex);


new Vue({
  el:"#app",
  render:h => h(App),     //渲染组件
  router,     //注册路由，使得组件全局使用
  store,
});
