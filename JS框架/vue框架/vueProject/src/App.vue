<template>
    <div class="app-container">
        <!--顶部header-->
        <mt-header class="mint-header" fixed title="vue项目实战"></mt-header>
        <!--中间内容-->
        <!--实现组件间切换的动画-->
        <transition>
            <router-view></router-view>
        </transition>

        <!--底部tabbar-->
        <nav class="mui-bar mui-bar-tab">
            <router-link class="mui-tab-item-lib" to="/home">
                <span class="mui-icon mui-icon-home"></span>
                <span class="mui-tab-label">首页</span>
            </router-link>
            <router-link class="mui-tab-item-lib" to="/merber">
                <span class="mui-icon mui-icon-contact"></span>
                <span class="mui-tab-label">会员</span>
            </router-link>
            <router-link class="mui-tab-item-lib" to="/shopcar">
                <span class="mui-icon mui-icon-extra mui-icon-extra-cart" id="badge"><span class="mui-badge">9</span></span>
                <span class="mui-tab-label">购物车</span>
            </router-link>
            <router-link class="mui-tab-item-lib" to="/search">
                <span class="mui-icon mui-icon-search"></span>
                <span class="mui-tab-label">搜索</span>
            </router-link>
        </nav>

    </div>
</template>

<script>


</script>

<style lang="scss" scoped>
    .mint-header{
        z-index: 999;
    }
    .app-container{
        padding-top: 40px;
        padding-bottom: 55px;
    }
    .v-enter{
        opacity:0;
        transform: translateX(100%);
    }
    .v-leave-to{
        opacity:0;
        transform: translateX(-100%);
        position: absolute;
    }
    .v-enter-active,.v-leave-active{
        transition: all 0.4s ease;
    }
    .mui-bar-tab .mui-tab-item-lib.mui-active {
        color: #007aff;
    }
    .mui-bar-tab .mui-tab-item-lib {
        display: table-cell;
        overflow: hidden;
        width: 1%;
        height: 50px;
        text-align: center;
        vertical-align: middle;
        white-space: nowrap;
        text-overflow: ellipsis;
        color: #929292;
    }
    .mui-bar-tab .mui-tab-item-lib .mui-icon {
        top: 3px;
        width: 24px;
        height: 24px;
        padding-top: 0;
        padding-bottom: 0;
    }
    .mui-bar-tab .mui-tab-item-lib .mui-icon ~ .mui-tab-label {
        font-size: 11px;
        display: block;
        overflow: hidden;
        text-overflow: ellipsis;
    }

</style>