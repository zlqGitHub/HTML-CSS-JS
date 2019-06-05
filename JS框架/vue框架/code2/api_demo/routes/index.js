let express = require('express');
let router = express.Router();
let conn = require("./../db");


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//获取学生列表信息
router.get("/api/getStuList",(req,res,next)=>{
  let sqlStr = "select * from students";
  // 允许来自所有域名请求    解决跨域问题
  res.set('Access-Control-Allow-Origin', '*');
  conn.query(sqlStr,function (err,results) {
    if(err) return res.json({err_code:1,message:"数据获取失败！"});
    // res.send(results);
    res.json({success_code:200,message:results});   //返回一个json数据
  });
});

//插入学生信息
router.post("/api/insertStu",function (req,res) {
  // console.log(req.body);
  // 允许来自所有域名请求    解决跨域问题
  res.set('Access-Control-Allow-Origin', '*');
  conn.query("INSERT INTO students SET ?",req.body,(err,results)=>{
    if (err) return res.json({err_code:1,message:"数据插入失败"});
    res.json({success_code:200,message:"数据插入成功"});
  });
});

//删除学生信息
router.post("/api/delStu",(req,res,next)=>{
  console.log(req.body.id);
  // 允许来自所有域名请求    解决跨域问题
  res.set('Access-Control-Allow-Origin', '*');

  conn.query("delete from students where id = ?",req.body.id,(err,results)=>{
    if(err)   return res.json({err_code:1,message:"数据删除失败"});
    return res.json({success_code:200,message:"数据删除成功"});
  });

});

module.exports = router;
