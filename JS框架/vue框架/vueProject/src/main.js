//这是项目的入口
import Vue from 'vue';

//导入vue-router
import VueRouter from 'vue-router';
//安装路由
Vue.use(VueRouter);

//导入vue-preview
import VuePreview from 'vue-preview';
Vue.use(VuePreview);

//导入vue-resource
import VueResource from 'vue-resource';
//安装vue-resource
Vue.use(VueResource);

//导入MUI样式文件
import './lib/mui/css/mui.css';
import  './lib/mui/css/icons-extra.css';

//按需导入组件
// import { Header, Swipe, SwipeItem, Button, Lazyload  } from 'mint-ui';
// Vue.component(Header.name, Header);
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
// Vue.component(Button.name, Button)
// Vue.use(Lazyload);   //安装

//注意：懒加载效果需要全局导入mint-ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

//导入APP.vue文件
import app from './App.vue';

//导入router.js文件
import router from './router';

//导入moment格式化时间差价
import moment from 'moment';
//定义一个全局过滤去，来处理时间
Vue.filter('dateFormat',function (dateStr,partten = 'YYYY-MM-DD HH:mm:ss') {
    return moment(dateStr).format(partten);
});

//全局配置POST请求的第三个参数，application/x-www-form-urlencoded
Vue.http.options.emulateJSON = true;

var vm  = new Vue({
    el:'#app',
    render:function(createElemnet){
        return createElemnet(app);
    },
    router,  //注册组件
});