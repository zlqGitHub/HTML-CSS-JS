<template>
  <li
    @mouseenter="dealShow(true)"
    @mouseleave="dealShow(false)"
    :style="{backgroundColor:bgColor}"
  >
    <label>
      <!--
        为什么数据双向绑定后就可以确定其选中与否的状态?
          解释：checkbox 不同于其他类型的input ，它可以通过 v-model 来触发器转态
      -->
      <input type="checkbox" v-model="todo.checked">
      <span>{{ todo.title }}</span>
    </label>
    <!--<button :style="{display: isBtnShow}">删除</button>-->
    <button v-show="isBtnShow" @click="delItem(todo.title)">删除</button>

  </li>
</template>

<script>
  export default {
    name: "Item",
    data() {
      return {
        isBtnShow: false,
        bgColor: "#fff",
      }
    },
    props: {
      todo: Object,
      index: Number,
      delTodo: Function
    },
    // mounted(){
    //   console.log(this.todo.checked);
    // },
    methods: {
      //处理按钮的显示隐藏
      dealShow(flag) {
        flag ? this.bgColor = "#ddd" : this.bgColor = "#fff",
          flag ? this.isBtnShow = true : this.isBtnShow = false
      },
      //删除任务
      delItem(title) {
        // console.log(window.confirm("确认删除吗"));
        window.confirm("你确认删除"+title+"吗？") ? this.delTodo(this.index) : "";
      }
    }
  }
</script>

<style scoped>
  /* 类表选项 */
  li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
  }

  li label {
    float: left;
    cursor: pointer;
  }

  li label input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
  }

  li button {
    background: orangered;
    padding: 4px 10px;
    border-radius: 5px;
    color: #fff;
    outline: none;
    border: none;
    float: right;
    margin-top: 5px;
    cursor: pointer;
  }

  li:before {
    content: inherit;
  }

  li:last-child {
    border: none;
  }

</style>
