/*
   修改state中数据
*/
//导入mutation-types中的规范常量
import {
  ADD_TODO,
  DEL_ITEM,
  SELECT_ALL_TODO,
  DEL_FINISHED_TODO
} from './mutation-types';
export default {
  [ADD_TODO](state,{todo}){   //注意：参数的固定写法
    //将数据添加进去
    state.todos.unshift(todo);
    window.localStorage.setItem("todos",JSON.stringify(state.todos))
  },

  //删除一条记录
  [DEL_ITEM](state,{index}){
    state.todos.splice(index,1);
    window.localStorage.setItem("todos",JSON.stringify(state.todos))
  },

  //选中所有
  [SELECT_ALL_TODO](state){
    let flag = state.todos.filter(todo => {
      return todo.checked === false;
    })
    //全部选中时，取反
    if(flag.length == 0){
      state.todos.forEach(todo => {
        todo.checked = false;
      })
    }else{   //否则全部选中
      state.todos.forEach(todo => {
        todo.checked = true;
      })
    }
  },

  //删除选中项
  [DEL_FINISHED_TODO](state){
    state.todos = state.todos.filter((todo) => {
      return todo.checked === false;
    });
  }


}
