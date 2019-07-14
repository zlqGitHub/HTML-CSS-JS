// 将action进行统一的封装
//导入action类型
import {GET_INIT_TODO,INIT_TODO_ITEM,CHANGE_INPUT_VALUE,ADD_TODO_ITEM,DEL_TODO_ITEM} from './actionTypes.js';
import axios from 'axios';

//es6高级语法，直接返回一个对象
export const getInputChangeAction = (value) => ({
	type:CHANGE_INPUT_VALUE,
	value,
})

export const getAddItemAction = () => ({
	type:ADD_TODO_ITEM,
})

export const getDelItemAction = (index) => ({
	type:DEL_TODO_ITEM,
	index
})

export const getInitItemAction = (data) =>({
	type: INIT_TODO_ITEM,
	data
})

// 使用 redux-thunk 中间件来进行ajax请求,可以返回一个函数
export const getTodoList = () => {
	return (dispatch) => {   //返回的这个函数会自动的接收dispatch方法
		axios.get('/list.json').then((res) => {
			const data = res.data;
			const action = getInitItemAction(data);
			console.log(action)
			dispatch(action)
        });
	}
}

export const getInitList = () => ({
	type: GET_INIT_TODO
})