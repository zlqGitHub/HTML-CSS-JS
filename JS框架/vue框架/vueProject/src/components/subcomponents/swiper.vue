<template>
    <div>
        <mt-swipe :auto="3000">
            <mt-swipe-item v-for="item in lunbotuList" :key="item.id">
                <img :src="item.img" alt="">
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>
<script>
    export default {
        props:['lunbotuList'],
    }

</script>
<style lang="scss" scoped>
    .mint-swipe{
        height: 200px;
        img{
            width: 100%;
            height: 100%;
        }
    }
</style>