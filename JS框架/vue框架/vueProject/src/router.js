//导入vue
import Vue from 'vue';

import VueRouter from 'vue-router'

//手动安装
Vue.use(VueRouter);

//导入对应的组件
import HomeContainer from './components/tabbar/HomeContainer.vue';
import MerberContainer from './components/tabbar/MerberContainer.vue';
import ShopcarContainer from './components/tabbar/ShopcarContainer.vue';
import SearchContainer from './components/tabbar/SearchContainer.vue';
import newList from './components/news/newList.vue';
import newsInfo from './components/news/newsInfo.vue';
import photoList from './components/photoList/photoList.vue';
import photoInfo from './components/photoList/photoInfo.vue';
import goodsList from './components/goods/goodsList.vue';
import goodsInfo from './components/goods/goodsInfo.vue';
import goodsComment from './components/goods/goodsComment.vue';
import goodsDesc from './components/goods/goodsDesc.vue';

// 3. 创建路由对象
var router = new VueRouter({
    routes: [
        {path:'/',redirect:'/home'},    //重定向
        {path:'/home',component:HomeContainer},
        {path:'/merber',component:MerberContainer},
        {path:'/shopcar',component:ShopcarContainer},
        {path:'/search',component:SearchContainer},
        {path:'/home/newList',component:newList},
        {path:'/home/newInfo/:id',component:newsInfo},
        {path:'/home/photoList',component:photoList},
        {path:'/home/photoInfo/:id',component:photoInfo},
        {path:'/home/goodsList',component:goodsList},
        {path:'/home/goodsInfo',component:goodsInfo,name:'goodsInfo'},
        {path:'/home/goodsComment',component:goodsComment,name:'goodsComment'},
        {path:'/home/goodsDesc',component:goodsDesc,name:'goodsDesc'},
    ],
    linkActiveClass:'mui-active'   // 覆盖默认的路由高亮的类，默认的类叫做 router-link-active
})

// 把路由对象暴露出去
export default router