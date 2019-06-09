<template>
  <ul class="todo_main">
    <Item
      v-for="(todo,index) in todos"
      :key="index"
      :todo="todo"
      :index="index"
      :delTodo="delTodo"

    />
  </ul>
</template>

<script>
    import Item from './Item';
    export default {
        name: "List",
        components:{
          Item
        },
        props:{
          "todos":Array,
          "delTodo":Function
        },
        // props:["todos"],
        // mounted() {
        //   console.log(this.todos);
        // }
    }
</script>

<style scoped>
  /* 类表 */
  .todo_main{
    margin-left: 0;
    border: 1px solid #ddd;
    padding: 0;
    border-radius: 2px;
  }
  .todo_empty{
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    margin-top: 10px;
    padding-left: 5px;
  }

</style>
