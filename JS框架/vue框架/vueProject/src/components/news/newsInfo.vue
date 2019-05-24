<template>
    <div class="newsInfo-container">
        <!--头部区域-->
        <h4 class="title">vue项目实战</h4>
        <p class="subtitle">
            <span>发表时间：{{newsInfo.add_time | dateFormat}}</span>
            <span>点击：{{newsInfo.click}}次</span>
        </p>
        <hr>
        <!--内容区域-->
        <div class="content" v-html="newsInfo.content"></div>


        <!--评论区域-->
        <components-box :id="this.id"></components-box>
    </div>
</template>

<script>
    //导入评论区域
    import comment from '../subcomponents/comment.vue';
    import { Toast } from 'mint-ui';
    export default {
        data(){
            return {
                newsInfo:{},
                id: this.$route.params.id,    //这是将url中传递过来的id值，放到data上
            }
        },
        components:{
            "components-box":comment,
        },
        created(){
            this.getNewsInfo();
        },
        methods:{
            getNewsInfo(){
                this.$http.get('/static/newsInfo.json').then(result => {
                    if(result.body.status === 0){
                        this.newsInfo = result.body.message[0];
                        // console.log(result.body.message);
                    }
                    else{
                        Toast({
                            message: '数据加载失败',
                            position: 'center',
                            duration: 3000
                        });
                    }
                },reason => {
                    console.log(reason.status);
                });
            }
        }

    }

</script>

<!--此处的 scoped 可以省略 ，并不会对全局造成污染-->
<style lang="scss">
    .newsInfo-container{
        padding: 0 4px;
        .title{
            color: red;
            text-align: center;
            margin: 15px auto 12px;
            font-size: 16px;
        }
        .subtitle{
            color: #2a36ff;
            display: flex;
            justify-content: space-between;
        }
        .content{
            li{
                display: block;
                list-style: none;
                margin-left: -50px;
            }
            img{
                width: 100%;
                height: 100%;
            }
        }
    }
</style>