//main.js文件是我们项目的入口文件

//导入jQuery
//import *** from *** 是ES6中导入模块的方式
//由于ES6的代码过于高级，浏览器解析不了，所以这一行在执行时会报错
import $ from 'jquery'
// const $ = require('jquery');

//导入less文件
import  './css/index.less';

//导入scss文件
import './css/index.scss'

//使用import语法导入css样式文件
import './css/index.css';
/*
    注意：webpack 只能打包处理 js 类型的文件，无法处理其他非 js 类型的文件。
    解决方法：我们需要手动安装一些合适的第三方 loader 加载器。
    打包 css 文件，需要安装：cnpm i style-loader css-loader -D
        在 webpack.config.js 配置文件中，新增一个配置节点，叫 module ，是一个对象，在module 对象身上有一个rules属性
        是一个数组，存放了所有第三方文件的匹配和处理规则。
sa
    webpack处理第三方文件类型的原理：
        如果处理的不是js文件，就去配置文件中查找对应的第三方loader规则
        查找到规则后，调用对应的的loader处理当前类型的文件
        调用loader时，是从后往前执行的
        当最后一个loader之心完之后，直接把结果交给webpack进行打包，最后输出到 bundle.js 文件中去
*/

$(function () {
    $('li:odd').css('background','yellow');
    $('li:even').css('background',function () {
        // return "#"+"D97634";
        return "blue";
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


/*
    为了不需要每次执行webpack进行打包，我们需要安装webpack-dev-server这个工具，来实现自动打包编译功能
        运行 npm i webpack-dev-server -D    (-D表示在项目中安装)
        安装完成之后，该工具的用法和webpack的命令用法完全一样
            就像 nodemon 可以实现 node    同理webpack-dev-server 可以实现 webpack
        由于，我们是在项目中，本地安装的 webpack-dev-server ， 所以，无法把它当作 脚本命令，在powershell 终端中直接运行；（只有那些 安装到 全局 -g 的工具，才能在 终端中正常执行）
        注意： webpack-dev-server 这个工具，如果想要正常运行，要求，在本地项目中，必须安装 webpack
        webpack-dev-server 帮我们打包生成的 bundle.js 文件，并没有存放到 实际的 物理磁盘上；而是，直接托管到了 电脑的内存中，所以，我们在 项目根目录中，根本找不到 这个打包好的 bundle.js;
        我们可以认为， webpack-dev-server 把打包好的 文件，以一种虚拟的形式，托管到了 咱们项目的 根目录中，虽然我们看不到它，但是，可以认为， 和 dist  src   node_modules  平级，有一个看不见的文件，叫做 bundle.js

*/
