<template>
    <div class="goodsList-container">
        <!--<router-link class="goods-item" v-for="item in goodsList" :key="item.id" to="/home/goodsInfo">-->
            <!--<img :src="item.img_url" alt="">-->
            <!--<div class="title">{{item.title}}</div>-->
            <!--<div class="info">-->
                <!--<p class="price">-->
                    <!--<span class="now">￥{{item.sell_price}}</span>-->
                    <!--<span class="old">￥{{item.market_price}}</span>-->
                <!--</p>-->
                <!--<p class="sell">-->
                    <!--<span>热卖中</span>-->
                    <!--<span>剩{{item.stock_quantity}}件</span>-->
                <!--</p>-->
            <!--</div>-->
        <!--</router-link>-->


        <!--  在网页中，有两种跳转方式  -->
        <!--  1. 使用 a 标签的形式叫做 标签跳转  -->
        <!--  2. 使用 window.location.href 的形式，叫做编程式导航  -->
        <div class="goods-item" v-for="item in goodsList" :key="item.id" @click="getDetail(item.id)">
            <img :src="item.img_url" alt="">
            <div class="title">{{item.title}}</div>
            <div class="info">
                <p class="price">
                    <span class="now">￥{{item.sell_price}}</span>
                    <span class="old">￥{{item.market_price}}</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩{{item.stock_quantity}}件</span>
                </p>
            </div>
        </div>

        <mt-button type="danger" size="large" @click="getMore">加载更多</mt-button>

    </div>
</template>

<script>
    export default{
        data(){
            return{
                goodsList:[],
                pageIndex:0
            }
        },
        created(){
          this.getGoodsList();
        },
        methods:{
            getGoodsList(){
                this.$http.get("/static/goodsList.json").then(result => {
                    if(result.body.status === 0){
                        // console.log(result.body.message);
                        // this.goodsList = result.body.message;
                        this.goodsList = this.goodsList.concat(result.body.message);
                    }
                });
            },
            getMore(){
                this.pageIndex++;
                this.getGoodsList();
            },
            getDetail(id){
                console.log(this);
                // 使用 js 的形式进行路由导航
                // 注意：一定要区分 this.$route 和 this.$router 这两个对象
                // 其中：this.$route 是路由【参数对象】，所有路由中的参数，params，query 都属于它
                // 其中：this.$router 是一个路由【导航对象】，用它可以方便的使用 js 代码，实现路由的导航
                // 1. 最简单的
                // this.$router.push('/home/goodsInfo/'+id);
                // 2. 传递对象
                // this.$router.push({path : '/home/goodsInfo/' + id})
                // 3. 传递命名的路由
                this.$router.push({name:'goodsInfo',params:{id}})
            }

        }
    }

</script>

<style lang="scss" scoped>
    .goodsList-container{
        background-color: #FFF;
        padding: 8px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        .goods-item{
            width: 48.5%;
            height: 280px;
            border: 1px solid #CCC;
            box-shadow: 0 0 3px #CCC;
            margin:0 0 10px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            img{
                width: 100%;
            }
            .info{
                background-color: #eee;
                p{
                    margin: 0;
                    padding: 3px;
                }
                .price{
                    .now{
                        color: red;
                    }
                    .old{
                        text-decoration: line-through;
                        margin-left: 5px;
                    }
                }
                .sell{
                    display: flex;
                    justify-content: space-between;
                    font-size: 13px;
                }
            }
        }
    }
</style>