import React from 'react';
import {Input,Button,List} from 'antd';

// 无状态组件(作为一个函数，将模板渲染出去，参数props来接收父组件传递的值)
const TodoListUI = (props) =>{
    return (
        <div style={{marginTop:20,marginLeft:20}}>
            <Input 
                style={{width:300}}
                value={props.inputValue}
                onChange={props.handleInputChange}
            />
            <Button onClick={props.handleClick} type="primary">提交</Button>
            <List
                style={{width:300,marginTop:10}}
                bordered
                dataSource={props.list}
                renderItem={(item,index) => (
                    <List.Item onClick={() => {props.handleClickDelete(index)}}>
                        {item}
                    </List.Item>
                )}
            />
        </div>
    )
}


// UI组件
// class TodoListUI extends Component{
//     render() {
//         return (
//             <div style={{marginTop:20,marginLeft:20}}>
// 				<Input 
//                     style={{width:300}}
//                     value={this.props.inputValue}
//                     onChange={this.props.handleInputChange}
//                 />
//                 <Button onClick={this.props.handleClick} type="primary">提交</Button>
//                 <List
//                     style={{width:300,marginTop:10}}
//                     bordered
//                     dataSource={this.props.list}
//                     renderItem={(item,index) => (
//                         <List.Item onClick={(index) => {this.props.handleClickDelete(index)}}>
//                             {item}
//                         </List.Item>
//                     )}
//                 />
//             </div>
//         )
//     }
// }

export default TodoListUI;