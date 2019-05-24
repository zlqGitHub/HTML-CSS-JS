<template>
    <div class="goodsInfo-container">
        <transition
            @before-enter="beforeEnter"
            @enter="enter"
            @after-enter="afterEnter"
        >
            <div class="ball" v-show="ballFlag" ref="ball"></div>
        </transition>

        <!--商品轮播图区域-->
        <div class="mui-card">
            <swiper :lunbotuList="lunbotuList"></swiper>
        </div>

        <!--商品购买 区域-->
        <div class="mui-card">
            <div class="mui-card-header">商品的名称标题</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p class="price">
                        市场价： <del>￥2499</del>&nbsp;&nbsp;销售价：<span class="now_price">￥2199</span>
                    </p>
                    <p>购买数量：<numbox @getcount="getSelectCount"></numbox></p>
                    <p>
                        <mt-button type="primary" size="small">立即购买</mt-button>
                        <mt-button type="danger" size="small" @click="addToShopCar">加入购物车</mt-button>
                        <!--  分析：如何实现加入购物车的时候，拿到选择的数量  -->
                        <!--  1.经过分析发现：按钮属于 goodsinfo 页面，数字属于 numberbox 组件  -->
                        <!--  2.由于涉及到了父子组件的嵌套，所以，无法直接在 goodsinfo 页面中获取到选中的数量  -->
                        <!--  3.怎么解决这个问题：涉及到了 子组件向父组件传值（事件调用机制）  -->
                        <!--  4.事件调用的本质：父向子传递方法，子调用这个方法，同时把数据当做参数，传递
                        给这个方法  -->
                    </p>
                </div>
            </div>
        </div>

        <!--商品参数区域-->
        <div class="mui-card">
            <div class="mui-card-header">商品参数</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p>商品货号：*******</p>
                    <p>库存情况：99件</p>
                    <p>上架时间：2019-4-1</p>
                </div>
            </div>
            <!--注意：一下类中有flex布局，所有<br>会失效-->
            <div class="mui-card-footer">
                <mt-button type="primary" size="large" plain @click="goDesc(id)">图文介绍</mt-button>
                <!--<br>-->
                <mt-button type="danger" size="large" plain @click="goComment(id)">商品评论</mt-button>
            </div>
        </div>

    </div>
</template>

<script>
    import swiper from '../subcomponents/swiper.vue';
    import numbox from './goodsinfo_numbox.vue';
    export default {
        data(){
            return {
                lunbotuList:[],  //轮播图列表
                id:this.$route.params.id,    //将路由参数对象中的id挂载到data中，方便后期使用
                ballFlag:false,    //控制小球隐藏和显示的
                selectCount:1
            }
        },
        created(){
            this.getLunbotu();
        },
        methods:{
            getLunbotu(){
                this.$http.get('/static/Luobotu.json').then(result => {
                    if(result.body.status === 0){
                        console.log(result.body.message);
                        this.lunbotuList = result.body.message;
                    }
                });
            },
            goDesc(id){
                this.$router.push({name:'goodsDesc',params:{id}})
            },
            goComment(id){
                this.$router.push({path:'/home/goodsComment',params:{id}});
                // this.$router.push({name : 'goodsComment' , params : {id}})
            },
            addToShopCar(){
                this.ballFlag = !this.ballFlag;
            },
            beforeEnter(el){
                el.style.transform = "translate(0,0)";
            },
            enter(el,done){
                el.offsetWidth;
                // 小球动画优化思路
                // 1.先分析导致动画不准确的本质原因：我们把小球最终位移到的位置，已经局限在了某一分辨率
                // 下的滚动条未滚动的情况下；
                // 2.只要分辨率和测试的时候不一样，或者滚动条有一定的距离之后，问题就出现了
                // 3.因此，我们经过分析，得到结论，不能把位置的横纵左边写死了，而是应该根据不同情况，动态
                // 计算这个坐标值
                // 4.经过分析，得出思路：先得到 徽标 的横纵坐标，在得到小球的横纵坐标，然后让 y 值求查，
                // x 值求差，得到的结果，就是横纵坐标要位移的距离
                // 5.如何获取徽标和小球的位置？？  domObject.getBoundingClientRect()
                console.log(this);
                const ballPosition = this.$refs.ball.getBoundingClientRect();
                // 获取徽标在页面中的位置
                const badgePosition = document.getElementById('badge').getBoundingClientRect()
                const xDist = badgePosition.left - ballPosition.left;
                const yDist = badgePosition.top - ballPosition.top;
                el.style.transform = `translate(${xDist}px,${yDist}px)`
                el.style.transition = 'all .5s cubic-bezier(.4,-0.3,1,.68)'
                done()
            },
            afterEnter(el){
                // el.style.transform = "translate(0,0)";
                this.ballFlag = !this.ballFlag;
            },
            getSelectCount(count){
                this.selectCount = count;
                console.log("父组件的值"+this.selectCount);

            }
        },
        components:{
            swiper,
            numbox
        }
    }
</script>

<style lang="scss" scoped>
    .goodsInfo-container{
        background-color: #ddd;
        overflow: hidden;
        .ball{
            width: 15px;
            height: 15px;
            border-radius: 50%;
            background-color: red;
            position: absolute;
            z-index: 100;
            top: 382px;
            left: 77px;
        }
        .mui-numbox{
            position: relative;
            top: -20px;
            left: 80px;
        }
    }
    .now_price{
        color: red;
        font-size: 16px;
    }
    .mui-card-footer{
        display: block;
        button{
            margin: 10px 0;
        }
    }
</style>