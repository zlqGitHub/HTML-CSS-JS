import React,{ Component } from "react";
import 'antd/dist/antd.css';
import TodoListUI from './TodoLIstUI';
import axios from 'axios';  

//导入action类型
// import {CHANGE_INPUT_VALUE,ADD_TODO_ITEM,DEL_TODO_ITEM} from './store/actionTypes.js';

//直接来使用actionCreator封装的action方法
import {getInitList,getTodoList,getInitItemAction,getInputChangeAction,getAddItemAction,getDelItemAction} from './store/actionCreator.js'
//使用store
import store from "./store/index";

class TodoList extends Component{
    constructor(props){
        super(props);
		this.state = store.getState();
		this.handleInputChange = this.handleInputChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleClickDelete = this.handleClickDelete.bind(this);
		store.subscribe(this.handleStoreChange);    //是的store中的数据时刻更新
    }
    render(){
        return (
            <TodoListUI 
                inputValue = {this.state.inputValue}
                handleInputChange = {this.handleInputChange}
                handleClick = {this.handleClick}
                list = {this.state.list}
                handleClickDelete = {this.handleClickDelete}
            />
        )
    }

    // 生命周期函数来获取
    componentDidMount(){    
        const action = getInitList();
        store.dispatch(action)

        // 将请求在action中通过中间件来完成
        // axios.get('/list.json').then((res) => {
        //     const data = res.data;
        //     const action = getInitItemAction(data);
        //     store.dispatch(action);
        // });
    }
    
	//输入框发生改变的时候
	 handleInputChange(e){
        // const action = {
        //     type:CHANGE_INPUT_VALUE,
        //     value:e.target.value
        // }
		const action = getInputChangeAction(e.target.value);
        store.dispatch(action);
    }
	//点击提交 的时候
    handleClick(){
        const action = getAddItemAction();
        store.dispatch(action);

    }
	//store中数据发生变化的时候
	handleStoreChange(){
		// console.log("store change");
		this.setState(store.getState());
	}
	//删除item
	handleClickDelete(index){
		const action = getDelItemAction(index);
		store.dispatch(action);
	}
}

export default TodoList;