/*
    数据的连接
*/
const mysql = require('mysql');

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '045412',
    database: 'pdd',
    multipleStatements:true     //可以多次执行SQL语句
});

conn.connect();

module.exports = conn;