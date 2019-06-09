<template>
  <div id="root">
    <div class="todo_container">
      <div class="todo_warp">
        <Header />
        <List />
        <Footer />
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
