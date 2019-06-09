<template>
  <div class="todo_footer">
    <label>
      <input type="checkbox" v-model="isSelected">
    </label>
    <span>
        <!-- 已完成的任务件数需要通过动态计算computed来监听 -->
        <span>已完成 {{finishedCount}} 件</span> / 总计 {{ totalCount }} 件
    </span>
    <button class="btn btn-warning" @click="$store.dispatch('delFinishedTodo')">清除任务已完成</button>
  </div>
</template>

<script>
  import {mapGetters} from 'Vuex';     //mapGetters该属性必须在computed中展开，因为其需要动态实时更新
  export default {
    name: "Footer",
    props:{
      todos:Array,
      selectAll:Function,
      setStatus:Function,
      delFinishedTodo:Function
    },
    created(){
      console.log(this.$store.getters);    //第一种方法拿getters中的数据
    },
    computed:{
      ...mapGetters(['finishedCount','totalCount']),    //第二种方法拿getters中的数据

      isSelected:{
        //获取，被动获取
        get:function () {
          return this.$store.getters.isCheckedAll;
        },
        //设置，主动去设置
        set:function () {
          // this.selectAll();
          this.$store.dispatch('selectAll')
        }
      }
    }


  }
</script>

<style scoped>
  /* 尾部 */
  .todo_footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }

  .todo_footer button {
    float: right;
    margin-right: 8px;
  }

</style>
