import {createStore} from 'redux';
import reducer from './reducer'

//获取到数据
const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;