<template>
    <div>
        <div class="mui-numbox" data-numbox-min="1" data-numbox-max="9">
            <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
            <input id="test" class="mui-input-numbox" type="number" value="1" ref="input" @change="countChangeed">
            <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
        </div>
    </div>
</template>

<script>
    import mui from '../../lib/mui/js/mui';
    export default {
        mounted() {
            mui('.mui-numbox').numbox();
        },
        methods:{
            countChangeed(){
                //每当文本框的数据被修改时，立即把最新的数据通过事件调用传递给父组件
                // console.log(this.$refs.input.value);
                this.$emit("getcount",parseInt(this.$refs.input.value));
            }
        }
    }

</script>

<style lang="scss" scoped>

</style>