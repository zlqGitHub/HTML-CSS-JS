import React,{ Component } from "react";
import {Input,Button,List,Typography} from 'antd';
import 'antd/dist/antd.css';

//导入action类型
// import {CHANGE_INPUT_VALUE,ADD_TODO_ITEM,DEL_TODO_ITEM} from './store/actionTypes.js';

//直接来使用actionCreator封装的action方法
import {getInputChangeAction,getAddItemAction,getDelItemAction} from './store/actionCreator.js'
//使用store
import store from "./store/index"

class TodoList extends Component{
	componentDidMount(){
		//通过store.getState() 来获取store中的数据
		console.log(store.getState());   
	}
    constructor(props){
        super(props);
		this.state = store.getState();
		this.handleInputChange = this.handleInputChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
		this.handleStoreChange = this.handleStoreChange.bind(this);
		store.subscribe(this.handleStoreChange);    //是的store中的数据时刻更新
    }
    render(){
        return (
            <div style={{marginTop:20,marginLeft:20}}>
				<Input 
                    style={{width:300}}
                    value={this.state.inputValue}
                    onChange={this.handleInputChange}
                />
                <Button onClick={this.handleClick} type="primary">提交</Button>
                <List
                    style={{width:300,marginTop:10}}
                    bordered
                    dataSource={this.state.list}
                    renderItem={(item,index) => (
                        <List.Item onClick={this.handleClickDelete.bind(this,index)}>
                            {item}
                        </List.Item>
                    )}
                />
               
            </div>
        )
    }
	//输入框发生改变的时候
	 handleInputChange(e){
		console.log(store.getState());
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