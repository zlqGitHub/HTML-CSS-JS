// 注意：Reducer必须还纯函数
// 纯函数指给定固定的输入，就一定有固定的输出，而且不会有任何副作用
//导入action类型
import {CHANGE_INPUT_VALUE,ADD_TODO_ITEM,DEL_TODO_ITEM} from './actionTypes.js';

const defaultData = {
	inputValue:'',
	list:[]
};

/* 
	state表示上一次传递过来的数据，action表示用户传递过来的action
	reducer 可以接收state的数据,但不可修改state
 */
export default (state = defaultData,action) => {
	// console.log(state,action);
	//输入框数据发生变化的时候
	if(action.type === CHANGE_INPUT_VALUE){
		const newState = JSON.parse(JSON.stringify(state));  //深度复制
        newState.inputValue = action.value;
		
		/* 
			newState.inputValue = new Date();
			这样处理之后就不在是一个纯函数了，因为其随时间的变化而变化
		 */
		
		// console.log(newState)
        return newState;
	}
	//点击提交按钮
	if(action.type === ADD_TODO_ITEM){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue = '';
        console.log(newState);
        return newState;
    }
	//删除点击当前的item 
	if(action.type === DEL_TODO_ITEM){
	    const newState = JSON.parse(JSON.stringify(state));
	    newState.list.splice(action.index,1);
	    return newState;
	}
	return state;   //将数据返回
}