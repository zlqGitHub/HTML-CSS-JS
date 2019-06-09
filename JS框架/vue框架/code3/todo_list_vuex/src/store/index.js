/*
  相当于是一个集合，将其他的几个 .js 文件集成过来
*/
import Vuex from 'vuex';
import Vue from 'vue';

//将其他的 .js 文件引入
import actions from './actions';
import mutations from './mutations';
import state from './state';
import getters from './getters';

//注册Vuex
Vue.use(Vuex);

//实例一个Vuex对象
export default new Vuex.Store({
  //将这些对象一次性暴露出去
  actions,
  mutations,
  state,
  getters
});
