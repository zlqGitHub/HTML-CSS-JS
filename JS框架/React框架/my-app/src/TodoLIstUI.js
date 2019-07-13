import React, {Component} from 'react';
import {Input,Button,List,Typography} from 'antd';

class TodoListUI extends Component{
    render() {
        return (
            <div style={{marginTop:20,marginLeft:20}}>
				<Input 
                    style={{width:300}}
                    value={this.props.inputValue}
                    onChange={this.props.handleInputChange}
                />
                <Button onClick={this.props.handleClick} type="primary">提交</Button>
                <List
                    style={{width:300,marginTop:10}}
                    bordered
                    dataSource={this.props.list}
                    renderItem={(item,index) => (
                        <List.Item onClick={(index) => {this.props.handleClickDelete(index)}}>
                            {item}
                        </List.Item>
                    )}
                />
            </div>
        )
    }
}

export default TodoListUI;