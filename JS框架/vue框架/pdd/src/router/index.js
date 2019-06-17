/*
  配置路由文件
  在 main.js 中来使用
*/

//导入相关模块
import Vue from 'vue';
import VueRouter from 'vue-router';

//导入组件模块
import Home from './../pages/Home/Home';
import Recommend from './../pages/Recommend/Recommend';
import Search from './../pages/Search/Search';
import Chat from './../pages/Chat/Chat';
import Me from './../pages/Me/Me';
import SelectLogin from './../pages/Login/SelectLogin';
import Login from './../pages/Login/Login';

//导入二级路由模块
import Hot from '../pages/Home/Children/Hot/Hot'
import Box from './../pages/Home/Children/Box'
import Dress from './../pages/Home/Children/Dress'
import Ele from './../pages/Home/Children/Ele'
import Food from './../pages/Home/Children/Food'
import General from './../pages/Home/Children/General'
import Man from './../pages/Home/Children/Man'
import Mbaby from './../pages/Home/Children/Mbaby'
import Shirt from './../pages/Home/Children/Shirt'


//注册路由
Vue.use(VueRouter);

//配置路由,并将其暴露出去
export default new VueRouter({
  routes:[
    //配置一级路由
    {
      path:"/home",
      component:Home,
      //配置二级路由
      children:[
        {path:'hot',component:Hot},
        {path:'box',component:Box},
        {path:'dress',component:Dress},
        {path:'ele',component:Ele},
        {path:'food',component:Food},
        {path:'general',component:General},
        {path:'mbaby',component:Mbaby},
        {path:'man',component:Man},
        {path:'shirt',component:Shirt},
        {path:'',redirect:'/home/hot'},     //请求重定向，默认显示首页的hot组件对应的内容
      ]
    },
    {path:"/recommend",component:Recommend},
    {path:"/search",component:Search},
    {path:"/chat",component:Chat},
    {path:"/me",component:Me},
    {path:"/selectLogin",component:SelectLogin},
    {path:"/login",component:Login},
    {path:"/",redirect:'/home'}      //重定向，默认显示页面
  ]
});
