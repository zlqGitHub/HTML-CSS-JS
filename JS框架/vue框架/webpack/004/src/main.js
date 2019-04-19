import Vue from "vue";

//1.导入 vue-router 包
import VueRouter from 'vue-router';
//2.在模块中需要手动安装VueRouter
Vue.use(VueRouter);

//导入组件
import account from './main/account.vue';
import goodsList from './main/goodsList.vue';

//3.创建路由对象
var router = new VueRouter({
    routes:[   //注意：此处是 routes 属性
        {path:'/account',component: account },
        {path:'/goodsList',component: goodsList }
    ]
});

//导入app组件
import app from './app.vue';

var vm = new Vue({
    el:'#app',
    render:function (createElements) {
        return createElements(app);
    },
    router,  //注册路由
})