<template>
    <div>
        <div id="slider" class="mui-slider" scrollX="true">
            <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted" data-scroll="1">
                <div class="mui-scroll" style="transform: translate3d(0px, 0px, 0px) translateZ(0px); transition-duration: 0ms;">
                    <a :class="['mui-control-item',item.id == 0 ? 'mui-active' : '']" v-for="item in photoCategory" :key="item.id" @click="getPhotoListByCateId(item.id)">
                        {{item.title}}
                    </a>
                </div>
            </div>

        </div>

        <!--图片列表区域-->
        <ul class="photo-list">
            <router-link v-for="item in list" :key="item.id" :to="'/home/photoInfo/'+item.id" tag="li">
                <img v-lazy="item.img_url">
                <div class="info">
                    <h4 class="info_title">{{item.title}}</h4>
                    <div class="info_body">{{item.zhaiyao}}</div>
                </div>
            </router-link>
        </ul>
    </div>
</template>

<script>
    import mui from '../../lib/mui/js/mui.min.js';
    import '../../lib/mui/css/mui.css';
    export default {
        data(){
            return {
                photoCategory:[],// 所有分类的列表数组
                list : [] // 图片列表数组
            }
        },
        mounted(){
            // 当组件中的 DOM 结构被渲染好并放到页面中后，会执行这个钩子函数
            // 如果要操作元素了，最好在 mounted 里面，因为，这里时候的 DOM 元素是最新的
            // 2. 初始化滑动控件
            mui('.mui-scroll-wrapper').scroll({
                deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
            });
        },
        created(){
            this.getAllCategory();
            // 每当进入就请求 第一页数据
            this.getPhotoListByCateId(0);
        },
        methods:{
            // 获取所有的图片分类
            getAllCategory(){
                this.$http.get('static/photoTitle.json').then(result=>{
                    if(result.body.status === 0){
                        this.photoCategory = result.body.message
                        var msg = {title:'全部', id:0}
                        // 手动拼接出一个最完整的分类列表
                        this.photoCategory.unshift(msg)
                    }
                })
            },
            getPhotoListByCateId(cateid){   //根据分类的id来获取图片列表
                // this.$http.get('/api/getimages/' + cateid)
                this.$http.get("/static/imageInfo.json").then(result => {
                    if(result.body.status === 0){
                        console.log(result.body.message);
                        this.list = result.body.message;
                    }
                });

            },
        }

    }

</script>

<style lang="scss" scoped>
    /* 取消警告 */
    *{
        touch-action: pan-y;
    }
    .photo-list{
        list-style: none;
        margin: 0;
        padding: 10px;
        padding-bottom: 0;
        li{
            text-align: center;
            background-color: #CCC;
            margin-bottom: 10px;
            box-shadow: 0 0 9px #999999;
            position: relative;
            img{
                width: 100%;
                vertical-align: middle;
            }
            img[lazy=loading] {
                width: 40px;
                height: 300px;
                margin: auto;
            }
            .info{
                position: absolute;
                bottom: 0;
                z-index: 100;
                color: #FFF;
                background-color: rgba(0,0,0,0.4);;
                text-align: left;
                max-height: 100px;
                width: 100%;
                .info_title{
                    font-size: 14px;
                }
                .info_body{
                    font-size: 13px;
                }
            }
        }

    }
</style>