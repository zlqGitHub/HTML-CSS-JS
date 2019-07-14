import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList.js'
import { Provider } from 'react-redux';
import store from './store'

const App = (
    // 将store绑定给Provider（提供器），这样其子组件就可以来访问store中的数据
    <Provider store={store}>   
        <TodoList></TodoList>
    </Provider>
)

ReactDOM.render(App, document.getElementById('root'));
