<template>
    <div class="photo-container">
        <h3>{{info.title}}</h3>
        <p class="subtitle">
            <span>发表时间:{{info.add_time | dateFormat }}</span>
            <span>点击：{{info.click}}次</span>
        </p>
        <hr>
        <!--  缩略图区域  -->
        <div class="thumbs">
            <vue-preview :slides="list" @close="handleClose"></vue-preview>

            <!--<img class="preview-img" v-for="(item, index) in list" :src="item.src" height="100" @click="$preview.open(index, list)">-->
        </div>



        <!--  图片内容区域  -->
        <div class="content" v-html="info.content"></div>
        <!--  放置一个现成的评论子组件  -->
        <cmt-box :id="id"></cmt-box>
    </div>
</template>
<script>
    import comment from '../subcomponents/comment.vue'
    export default {
        data(){
            return{
                id : this.$route.params.id, // 从路由中获取到的图片id
                info : {}, // 图片详情
                list:[] // 缩略图数组
            }
        },
        created(){
            this.getPhotoInfo();
            this.getThumbs();
        },
        methods:{
            getPhotoInfo(){
                this.$http.get('static/photoInfo.json').then(result=>{
                    if(result.body.status === 0){
                        // console.log(result.body.message[0])
                        this.info = result.body.message[0]
                    }
                })
            },
            getThumbs(){
                this.$http.get('static/Thumbs.json').then(result=>{
                    if(result.body.status === 0){
                        // 循环每个图片的数据，补全图片的宽和高
                        result.body.message.forEach(item=>{
                            item.w = 600
                            item.h = 400
                            // item.msrc = item.src
                        })
                        // 把完整的数据保存到 list 中
                        this.list = result.body.message
                        // console.log(result.body.message)

                    }
                })
            },
            handleClose () {
                console.log('close event')
            }
        },
        components:{
            'cmt-box': comment
        }
    }
</script>
<style lang="scss" scoped>
    .photo-container{
        background-color: #FFF;
        overflow: hidden;
        padding: 0 10px;
        h3{
            color: #26A2ff;
            font-size: 15px;
            text-align: center;
            margin: 15px 0;
        }
        .subtitle{
            display: flex;
            justify-content: space-between;
            font-size: 13px;
        }
        .thumbs{
            padding: 5px 5px;
            box-shadow: 0 0 6px #999;
            /*background-color: red;*/
            *{
                position: relative;
                left: -11%;
                margin-left: 1px;
            }
        }
        .content{
            font-size: 13px;
            line-height: 30px;
        }


    }
</style>