<template>
  <div class="todo_header">
    <input placeholder="请输入今天的任务清单，按回车键确认" v-model="title" @keyup.enter="addItem" type="text">
  </div>
</template>

<script>
  export default {
    name: "Header",
    data() {
      return {
        title: '',
      }
    },
    props: {
      addTodo: Function
    },
    methods:{
      addItem(){
        //判断输入任务是否合法
        if(this.title.trim() === ""){
          alert("请输入合法的任务");
          return;
        }
        //生成一个todo对象
        const todo = {title:this.title,checked:false};
        //添加进去
        // this.addTodo(todo);
        //界面只能通过 dispatch() 方法来与actions建立关系
        this.$store.dispatch("addTodo",todo);   //第一个是方法名，第二个参数
        //将输入框清空
        this.title = '';
      }
    }
  }
</script>

<style scoped>
  /* 头部 */
  .todo_header input {
    width: 560px;
    height: 28px;
    font-size: 14px;
    border: 1px solid #ccc;
    padding: 4px 7px;
    outline: none;
    border-radius: 4px;
  }

  .todo_header input:focus {
    outline: none;
    border-color: rgba(255, 0, 0, 0.8);
    box-shadow: inset 0 1px 1px rgba(255, 0, 0, 0.075), 0 0 8px rgba(255, 0, 0, 0.6);
    /*box-shadow: 0 0 8px rgba(255,0,0,0.6);*/
  }

</style>
