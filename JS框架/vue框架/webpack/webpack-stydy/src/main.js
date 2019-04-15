//main.js文件是我们项目的入口文件

//导入jQuery
//import *** from *** 是ES6中导入模块的方式
//由于ES6的代码过于高级，浏览器解析不了，所以这一行在执行时会报错
import $ from 'jquery'
// const $ = require('jquery');

$(function () {
    $('li:odd').css('background','lightblue');
    $('li:even').css('background',function () {
        return "#"+"D97634";
    });
});

/*
    webpack作用：
        webpack能够处理js文件间的相互依赖关系。
        webpack能够处理js的兼容性问题，把高级的、浏览器不识别的语法转化为低级的、浏览器能够识别的语法

    打包命令：
        初始化：npm init -y
        打包：webpack 【要打包的文件路径】【打包好输出的文件路径】
            webpack ./src/main.js ./dist/bundle.js
*/

