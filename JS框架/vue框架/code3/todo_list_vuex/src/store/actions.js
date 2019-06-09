/*
  行为操作
*/
import {
  ADD_TODO,
  DEL_ITEM,
  SELECT_ALL_TODO,
  DEL_FINISHED_TODO
} from "./mutation-types";

export default {
  //添加一条记录   注意：该方法名称与外界调用的方法名称一致
  addTodo:function ({commit},todo) {    //注意：此处为固定写法
    // console.log(todo);
    commit(ADD_TODO,{todo});
  },

  //删除一条记录
  delItem({commit},index) {
    commit(DEL_ITEM,{index});
  },

  //全部选中
  selectAll({commit}){
    commit(SELECT_ALL_TODO);
  },

  //删除选中项
  delFinishedTodo({commit}){
    commit(DEL_FINISHED_TODO);
  }
}
