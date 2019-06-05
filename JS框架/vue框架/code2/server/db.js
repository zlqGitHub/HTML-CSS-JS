/*
    mysql数据库的连接
*/
let mysql = require("mysql");
let connection = mysql.createConnection({
    host: '127.0.0.1',   //数据库地址
    user: 'root',
    password : '123456',
    database:"pdd",    //库名
    multipleStatements:true,    //允许执行多条语句
});

connection.connect(function (err) {
    if(err){
        console.log("失败")
    }else{
        console.log("cg")
    }

});
//将连接暴露出去
module.exports = connection;