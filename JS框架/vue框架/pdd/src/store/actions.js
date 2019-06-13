//引入api接口
import {
  getHomeCasual,
  getHomeNav,
  getHomeShopList,
  getRecommendShopList,
  getSearchGoods
} from './../api/index';

//进行规范约束
import {
  HOME_CASUAL,
  HOME_NAV,
  HOME_SHOP_LIST,
  RECOMMEND_SHOP_LIST,
  SEARCH_GOODS
} from "./mutation-types";

export default {
  //获取轮播图数据   （注意：此处需要异步获取数据）
  async reqHomeCasual({commit}){
    let result = await getHomeCasual();    //因为是异步请求，所以此处需要等待同步完成后，在进行获取
    // console.log(result);
    // console.log(result.message);
    commit(HOME_CASUAL,{home_casual:result.message});
  },

  //获取首页导航条数据
  async reqHomeNav({commit}){
    let result = await getHomeNav();
    // console.log(result.message.data);
    commit(HOME_NAV,{home_nav:result.message.data})
  },

  //获取首页商品列表数据
  async reqHomeShopList({commit}){
    let result = await getHomeShopList();
    console.log(result);
    commit(HOME_SHOP_LIST,{home_shop_list:result.message.goods_list});
  },

  //获取推荐页面商品数据
  async reqRecommendShopList({commit}){
    let result = await getRecommendShopList();
    console.log(result.message);
    commit(RECOMMEND_SHOP_LIST,{recommend_shop_list:result.message});
  },

  //获取搜索页面数据     通过回调函数来处理异步问题
  async reqSearchGoods({commit},callback){
    let result = await getSearchGoods();
    // console.log(result);
    commit(SEARCH_GOODS,{search_goods:result.message.data});
    callback && callback();
  }




}
