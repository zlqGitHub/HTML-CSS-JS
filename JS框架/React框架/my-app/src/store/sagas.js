// 通过 takeEvery 来捕获 dispatch 方法    put 来提交
import {takeEvery, put} from 'redux-saga/effects';
import {GET_INIT_TODO} from './actionTypes';
import {getInitItemAction} from './actionCreator';
import axios from 'axios';

// 在该方法中进行 ajax 数据请求
function* getInitList(){
    try{
        const res = yield axios.get('./list.json');  //等待ajax数据请求完毕返回给res
        const action = getInitItemAction(res.data);
        yield put(action);
    }catch(e){
        console.log('list.json数据请求失败');
    }
}

// 当配置了 redux-saga 后，在 sagas.js 中也能够监听到 dispatch 方法
// generator函数（es6 内容）
function* mySaga() {
    yield takeEvery(GET_INIT_TODO, getInitList);  //当监听到dispatch方法后，就会执行  getInitList 方法
}
  
export default mySaga;  