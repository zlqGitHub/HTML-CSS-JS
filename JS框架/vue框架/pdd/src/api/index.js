import ajax from './ajax';

//定义api接口，通过node实现的后端服务器来获取对应的数据

//请求数据

//定义基础路径
const BASE_URL = 'http://127.0.0.1:3000';

//请求轮播图数据
export const getHomeCasual = () => ajax(BASE_URL+'/api/homecasual');

//请求Nav导航栏的数据
export const getHomeNav = () => ajax(BASE_URL + '/api/homenav');

//请求首页商品列表数据
export const getHomeShopList = () => ajax(BASE_URL + "/api/homeshoplist");

//请求推荐页面数据
export const getRecommendShopList = () => ajax(BASE_URL + "/api/recommendshoplist");

//请求搜索页面数据
export const getSearchGoods = () => ajax(BASE_URL + "/api/searchgoods");
