import {
  HOME_CASUAL,
  HOME_NAV,
  HOME_SHOP_LIST,
  RECOMMEND_SHOP_LIST,
  SEARCH_GOODS,
  SYNC_USER_INFO,
  USER_INFO
} from "./mutation-types";

export default {
  //设置轮播图
  [HOME_CASUAL](state,{home_casual}){
    state.homeCasual = home_casual;
  },

  //设置导航栏数据
  [HOME_NAV](state,{home_nav}){
    state.homeNav = home_nav;
  },

  //设置首页商品列表
  [HOME_SHOP_LIST](state,{home_shop_list}){
    state.homeShopList = home_shop_list;
  },

  //设置推荐页面商品列表数据
  [RECOMMEND_SHOP_LIST](state,{recommend_shop_list}){
    state.recommendShopList = state.recommendShopList.concat(recommend_shop_list);
  },

  //设置搜索页面的数据
  [SEARCH_GOODS](state,{search_goods}){
    state.searchGoods =  search_goods;
  },

  //保存用户信息id   同步用户信息
  [SYNC_USER_INFO](state,sync_user_info){
    state.userInfo = sync_user_info;
  },




}
