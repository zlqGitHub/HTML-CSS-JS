<template>
    <div class="comment">
        <h3>发表评论</h3>
        <hr>
        <textarea rows="5" placeholder="请输入要评论的内容（最大120字）" maxlength="120" v-model="msg"></textarea>
        <mt-button type="primary" size="large" @click="postComment">发表评论</mt-button>

        <div class="cmt-list">
            <div class="item" v-for="(item,i) in comments">
                <div class="cmt-title">
                    第{{i+1}}楼&nbsp;&nbsp;用户：{{item.username}}&nbsp;&nbsp;发表时间：{{item.add_time | dateFormat}}
                </div>
                <div class="cmt-body" v-html="item.content">
                    {{item.content === 'undefined' ? '此用户很懒，嘛都没说':item.content}}
                </div>
            </div>
        </div>

        <mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button>
    </div>
</template>

<script>
    import {Toast} from 'mint-ui'
    export default {
        data(){
            return{
                pageIndex : 1, // 默认展示第一页数据
                comments : [], // 所有的评论数据
                msg : ''       // 评论输入的内容
            }
        },
        created(){
            this.getComments();
        },
        methods:{
            getComments(){
                // this.$http.get('api/comments/' + this.id + '?pageIndex=' + this.pageIndex).then(result=>{
                this.$http.get('static/comments.json').then(result=>{
                    if(result.body.status === 0){
                        // this.comments = result.body.message
                        // 每当获取新评论数据的时候，不要把老数据情况覆盖，而是应该以老数据，拼接上新数据
                        this.comments = this.comments.concat(result.body.message)
                    }else{
                        Toast('获取评论失败')
                    }
                })
            },
            getMore(){ // 加载更多
                this.pageIndex++;
                this.getComments();
            },
            postComment(){
                // 检验内容是否为空
                if(this.msg.trim().length === 0){
                    return Toast('评论内容不能为空')
                }
                // 发表评论
                // 参数1：请求的 URL 地址
                // 参数2：提交给服务器的参数对象，{content : this.msg}
                // 参数3：定义提交的时候，表单中数据的格式 {emulateJSON : true}
                /*this.$http.post('api/postcommeng' + this.$route.params.id , {content : this.msg.trim()})
                    .then(result=>{
                        if(result.body.status === 0){
                            // 1. 拼接出一个评论对象
                            var cmt = {username : '匿名用户' , add_time : Date.now() , content : this.msg.trim()};
                            this.comments.unshift(cmt);
                            this.msg = ''
                        }
                    })*/
                var cmt = {username : '匿名用户' , add_time : Date.now() , content : this.msg.trim()};
                this.comments.unshift(cmt);
                this.msg = ''
            }
        },
        props:['id']   //接收父组件传递过来的值
    }

</script>

<style lang="scss" scoped>
    .comment{
        textarea{
            font-size: 13px;
            height: 85px;
            margin: 0;
        }
        h3{
            font-size: 18px;
        }
        .cmt-list{
            font-size: 13px;
            margin: 5px 0;
            .cmt-title{
                line-height: 30px;
                background-color: #CCC;
            }
            .cmt-body{
                line-height: 35px;
                text-indent: 2em;
            }
        }
    }
</style>