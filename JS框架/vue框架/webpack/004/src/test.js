//Node 中向外暴露成员的方式： module.exports = { }

/*
    在ES6中，也通过规范的形式导入和暴露模块
        导入：import 模块名称 from ‘模块标识符’    或     import ‘表示路径’
        导出：export default    或   export  向外暴露成员
    注意：export default 向外暴露成员，可以是任意的变量来接收
          在一个模块中，export default 只允许向外暴露一次
          在一个模块中，可以同时使用export default 和 export 向外暴露成员
*/
var info = {
    name:'zlq',
    age:20
}
export default info;

/*
    使用export向外暴露成员，只能使用 { } 的形式来接收，叫做 按需导出  import {title,title2} from "./test.js";
        按需导出即，需要什么导什么，当不需要title2时，可以将其删掉
    export 导出成员时，必须按照严格的导出名称来通过 { } 接收
    可以通过 as 来修改别名import {title as title3,title2} from "./test.js";
*/
export var title = "我是一颗小小的石头。";
export  var title2 = "我是第二颗。";


/*
    在Node中
        导入：var 名称 = require('标识符名称');
        导出：module.exports   和  exports  来暴露成员
*/

