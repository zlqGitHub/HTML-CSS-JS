// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Muit from 'mint-ui'


//注册
Vue.use(Muit);

import { Button , DatetimePicker } from 'mint-ui';


//全局注册组件
Vue.component(Button.name,Button);
Vue.component(DatetimePicker.name, DatetimePicker)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
