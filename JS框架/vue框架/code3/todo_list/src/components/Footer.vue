<template>
  <div class="todo_footer">
    <label>
      <input type="checkbox" v-model="isSelected">
    </label>
    <span>
        <!-- 已完成的任务件数需要通过动态计算computed来监听 -->
        <span>已完成 {{finishedCount}} 件</span> / 总计 {{ todos.length }} 件
    </span>
    <button class="btn btn-warning" @click="delFinishedTodo">清除任务已完成</button>
  </div>
</template>

<script>
  export default {
    name: "Footer",
    props:{
      todos:Array,
      selectAll:Function,
      setStatus:Function,
      delFinishedTodo:Function
    },
    computed:{
      //动态监听
      /*finishedCount(){
        const num = this.todos.filter((todo) => {
          if(todo.checked === true){
            return todo;
          }
        });
        // console.log(num);
        return num.length;
      }*/
      finishedCount(){
        //reduce() 方法接收一个函数作为累加器
        return this.todos.reduce((total,todo)=>{
          return todo.checked === true ? total + 1 : total + 0;
        },0);
      },
      isSelected:{
        //获取，被动获取
        get:function () {
          if(this.todos.length == 0){
            return false;
          }
          return this.finishedCount === this.todos.length
        },
        //设置，主动去设置
        set:function () {
          // this.selectAll();
          this.setStatus();
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
