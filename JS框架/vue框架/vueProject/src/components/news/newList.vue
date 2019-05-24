<template>
    <div>
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="item in newList" :key="item.id">
                <router-link :to="'/home/newInfo/'+item.id" class="">
                    <img class="mui-media-object mui-pull-left" src="https://ss0.baidu.com/-Po3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=e95179517d8da977512f802b8050f872/91529822720e0cf3740bf4990446f21fbf09aad0.jpg">
                    <div class="mui-media-body">
                        <h4>{{item.title}}</h4>
                        <p class="mui-ellipsis">
                            <span>发表时间：{{item.add_time | dateFormat()}}</span>
                            <span>点击：{{item.click}}次</span>
                        </p>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    import { Toast } from 'mint-ui';
    export default{
        data(){
            return {
                newList:[],
            }
        },
        created(){
            this.getNewList();
        },
        methods:{
            //获取数据
            getNewList(){
                this.$http.get('/static/newList.json').then(result => {
                    if(result.body.status === 0){
                        this.newList = result.body.message;
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

<style lang="scss" scoped>
    li{
        h4{
            font-size: 14px;
        }
        .mui-ellipsis{
            color: #226aff;
            font-size: 12px;
            display: flex;
            justify-content: space-between;
        }

    }
</style>