// 将action进行统一的封装
//导入action类型
import {CHANGE_INPUT_VALUE,ADD_TODO_ITEM,DEL_TODO_ITEM} from './actionTypes.js';

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