import axios from 'axios'

//通过 axios 来发送 get/post 请求
export default function ajax( url = '', params = {}, type ="GET") {
  //定义 Promise 对象
  let promise;
  // console.log(params);
  return new Promise((resolve,reject) => {
    //判断请求方式
    if(type === "GET"){    //需要处理url字符串
      let paramStr = '';
      for(var item in params){
        paramStr += item + "=" + params[item] + "&";
      }
      if(paramStr !== ''){
        paramStr = paramStr.substr(0,paramStr.lastIndexOf("&"));
      }
      url = url + "?" + paramStr;
      // console.log(url);
      //发送get请求
      promise = axios.get(url);

    }else if(type === "POST"){
      promise = axios.post(url,params);
    }

    //返回请求的结果
    promise.then((response) => {
      resolve(response.data);
    }).catch((err) => {
      reject(err);
    })

  });
}
