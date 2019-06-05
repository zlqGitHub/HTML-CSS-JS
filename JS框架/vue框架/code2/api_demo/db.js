/*
    mysql数据库的连接
        使用前需要先下载mysql包
        参考文档：https://github.com/mysqljs/mysql
*/
let mysql = require("mysql");
let connection = mysql.createConnection({
    host: '127.0.0.1',   //数据库地址
    user: 'root',
    password : '045412',
    database:"pdd",    //库名
    multipleStatements:true,    //允许执行多条语句
});

connection.connect(function (err) {
    if(err){
        console.log("数据库连接失败")
    }else{
        console.log("数据库连接成功")
    }
});

//将连接暴露出去
module.exports = connection;