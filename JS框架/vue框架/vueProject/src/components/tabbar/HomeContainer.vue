<template>
    <div>
        <!--使用轮播图组件-->
        <swiper :lunbotuList="lunbotuList"></swiper>

        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newList">
                <img src="../../images/menu1.png" alt="">
                <div class="mui-media-body">新闻资讯</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/photolist">
                <img src="../../images/menu2.png" alt="">
                <div class="mui-media-body">图片分享</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/goodsList">
                <img src="../../images/menu3.png" alt="">
                <div class="mui-media-body">商品购买</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="#">
                <img src="../../images/menu4.png" alt="">
                <div class="mui-media-body">留言反馈</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="#">
                <img src="../../images/menu5.png" alt="">
                <div class="mui-media-body">视频专区</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="#">
                <img src="../../images/menu6.png" alt="">
                <div class="mui-media-body">联系我们</div></router-link></li>
        </ul>
    </div>
</template>

<script>
    import { Toast } from 'mint-ui';
    import swiper from '../subcomponents/swiper.vue';
    export default {
        data(){
            return {
                lunbotuList: [],
            }
        },
        created(){
            this.getLunbotu();
        },
        methods:{
            //获取轮播图资源
            getLunbotu:function () {
                this.$http.get('/static/luobotu.json').then(result => {
                    if(result.body.status === 0){
                        this.lunbotuList = result.body.message;
                        // console.log(result.body.message);
                    }
                    else{
                        Toast({
                            message: '加载数据失败',
                            position: 'center',
                            duration: 3000
                        });
                    }
                },reason => {
                    console.log(reason.status);
                });
            }
        },
        components:{
            swiper
        }

    }
</script>

<style lang="scss" scoped>
    /* 注意：样式可以嵌套 */
    .mint-swipe{
        height: 200px;
        img{
            width: 100%;
            height: 100%;
        }
    }
    .mui-grid-view.mui-grid-9{
        background-color: #FFF;
        img{
            width: 60px;
        }
        .mui-media-body{
            font-size: 12px;
        }
    }
    .mui-grid-view.mui-grid-9 .mui-table-view-cell{
        border: 0;
    }

</style>