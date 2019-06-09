<template>
  <div id="root">
    <div class="todo_container">
      <div class="todo_warp">
        <!--
          将一个静态页面进行拆分，（Header、List、Footer）
          之后将他们全部集成到App.vue中
          由于几个组件中都会用到 list 数据，所以将数据放到 App 下，通过来回传值的方式来实现组件对数据的处理
        -->
        <Header :addTodo="addTodo"/>
        <List :todos="todos" :delTodo="delTodo"/>
        <Footer :todos="todos" :selectAll="selectAll" :setStatus="setStatus" :delFinishedTodo="delFinishedTodo"/>
      </div>
    </div>
  </div>
</template>

<script>
    //导入组件
    import Header from './components/Header';
    import List from './components/List';
    import Footer from './components/Footer';
    // import css from './assets/css/base.css';

    export default {
      name: "App",
      data(){
        return {
          todos :[]
        }
      },
      //获取本地数据，并将其挂载到页面上去
      mounted(){
        this.todos = JSON.parse(localStorage.getItem("todos") || []);
      },
      methods:{
        //点击清除已完成任务
        delFinishedTodo(){
          this.todos = this.todos.filter(todo => {
            return todo.checked === false;
          });
          window.localStorage.setItem("todos",JSON.stringify(this.todos));
        },
        //设置点击全部的状态
        setStatus(){
          let flag = this.todos.filter(todo => {
            return todo.checked === false;
          })
          //全部选中时，取反
          if(flag.length == 0){
            this.todos.forEach(todo => {
              todo.checked = false;
            })
          }else{   //否则全部选中
            this.todos.forEach(todo => {
              todo.checked = true;
            })
          }
        },
        //点击选中所有
        selectAll(){
          this.todos.forEach(todo => {
            todo.checked = true;
          })
        },
        //添加任务
        addTodo(todo){
          this.todos.unshift(todo);
          window.localStorage.setItem("todos",JSON.stringify(this.todos));
        },
        //删除指定任务
        delTodo(index){
          this.todos.splice(index,1);
          window.localStorage.setItem("todos",JSON.stringify(this.todos));
        }
      },
      //映射组件
      components:{
        Header,
        List,
        Footer
      }
    }
</script>

<style scoped>
  /* 主面板 */
  .todo_container{
    width: 600px;
    margin: 0 auto;
  }
  .todo_container .todo_warp{
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }

</style>
