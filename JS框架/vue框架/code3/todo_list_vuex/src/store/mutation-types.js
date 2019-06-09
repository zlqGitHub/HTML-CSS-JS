/*
  mutation.js 和 actions.js 之间的一个规范
  统一常量
*/
//注意：这边暴露出去的是一个字符串，使用时需要使用 [] 来将其转化为一个对象
export const ADD_TODO  = 'add_todo';    //增加一条记录

export const DEL_ITEM = 'del_item';    //删除一条记录

export const SELECT_ALL_TODO = 'select_all_todo';    //选中所有

export const DEL_FINISHED_TODO = 'del_finished_todo';    //删除选中项



