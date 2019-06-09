/*
  独立处理的一部分
  主要是获取，不涉及数据的修改
*/
export default {
  //已经完成的件数
  finishedCount(state){
    return state.todos.reduce((total,todo) => {
      return todo.checked === true ? total + 1 : total + 0;
    },0);
  },

  //总任务数
  totalCount(state){
    return state.todos.length;
  },

  //判断其是否全部选中
  isCheckedAll(state,getter){
    return getter.finishedCount === state.todos.length && state.todos.length > 0;
  },

  //获取本地数据
  getLocalTodos(){
    return JSON.parse(window.localStorage.getItem('todos') || []);
    // console.log(JSON.parse(window.localStorage.getItem('todos') || []));
  }

}

