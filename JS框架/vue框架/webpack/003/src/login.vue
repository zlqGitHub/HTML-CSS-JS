<template>
    <div>
        <h1>这是登录组件，使用 .vue 文件定义出来的 --- {{msg}}</h1>
    </div>
</template>

<script>
export default{
    data(){   //注意：组件中 data 必须是方法 function
        return {
            msg:"你好，我叫···",
        }
    },
    methods:{
        show(){
            console.log("调用了login.vue中的show方法");
        }
    }
}
</script>

<style>

</style>
