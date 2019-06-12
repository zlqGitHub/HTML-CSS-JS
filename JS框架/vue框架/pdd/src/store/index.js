import Vue from 'vue';
import Vuex from 'vuex';

//导入其他的状态包
import state from './state';
import getters from './getters';
import mutations from './mutations';
import actions from './actions';

//注册
Vue.use(Vuex);

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
});
