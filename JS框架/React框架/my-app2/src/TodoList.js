import React,{Component} from 'react';
import {connect} from 'react-redux';

class TodoList extends Component{
    render(){
        // 可以通过解构赋值来获取数据
        const {inputVaule, list, handleInputValue, handleClickAddItem} = this.props;
        return (
            <div>
                <input onChange={handleInputValue} value={inputVaule}/>
                <button onClick={handleClickAddItem}>提交</button>
                <ul>
                    {
                        list.map((item,index) => {
                            return <li key={index}>{item}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {  //将state中的数据绑定给Props
    return {
        inputVaule: state.inputVaule,
        list: state.list
    }
}

const mapDispatchToProps = (dispatch) => {  //将dispatch中的方法绑定给Props
    return {
        handleInputValue(e){
            const action = {
                type:'change_input_value',
                value:e.target.value,
            }
            dispatch(action);
        },
        handleClickAddItem(){
            const action = {
                type:'add_item',
                // value: this.props.inputVaule
            }
            dispatch(action);
        }
    }
}
// 此处的connect将 UI组件 与逻辑结合了起来，形成 容器组件 暴露了出去
export default connect(mapStateToProps,mapDispatchToProps)(TodoList);