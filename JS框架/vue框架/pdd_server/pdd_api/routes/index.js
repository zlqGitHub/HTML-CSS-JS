let express = require('express');
let router = express.Router();
const conn = require("./../db/db");
const sms = require("./../util/sms_util");

const users = [];    //保存用户信息

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//解决跨域问题
router.all("*",function(req,res,next){
  //设置允许跨域的域名，*代表允许任意域名跨域
  res.header("Access-Control-Allow-Origin","*");
  //允许的header类型
  res.header("Access-Control-Allow-Headers","content-type");
  //跨域允许的请求方式
  res.header("Access-Control-Allow-Methods","DELETE,PUT,POST,GET,OPTIONS");
  if (req.method.toLowerCase() == 'options'){
    res.sendStatus(200);  //让options尝试请求快速结束
  }else{
    next();
  }
})

//将推荐栏目 的数据写入数据库中
router.get("/recomment/api",(req,res) => {
  const recommend = require("./../data/recommend");
  let sqlStr = "INSERT INTO pdd_recommend(`goods_id`,`goods_name`,`short_name`, `thumb_url`, `hd_thumb_url`, `image_url`, `price`, `normal_price`, `market_price`, `sales_tip`, `hd_url`) VALUES ?"

  let tempData = [];   //定义一个临时数据，用来存放将来存入库中的集合
  for(let i  =  0; i < recommend.data.length; i++){
    let temp_arr = [];    //定义一个数组用来存放当前的数据
    let oldItem = recommend.data[i];

    temp_arr.push(oldItem.goods_id);
    temp_arr.push(oldItem.goods_name);
    temp_arr.push(oldItem.short_name);
    temp_arr.push(oldItem.thumb_url);
    temp_arr.push(oldItem.hd_thumb_url);
    temp_arr.push(oldItem.image_url);
    temp_arr.push(oldItem.price);
    temp_arr.push(oldItem.normal_price);
    temp_arr.push(oldItem.market_price);
    temp_arr.push(oldItem.sales_tip);
    temp_arr.push(oldItem.hd_url);

    tempData.push(temp_arr);
  }
  // console.log(tempData);

  //进行数据库的操作
  conn.query(sqlStr,[tempData],(error,result,fields) => {
    if (error){
      // res.json(error)
      res.json({error_code:0,message:"数据插入失败"});
    } else{
      res.json({success_code:200,message:"数据插入成功"});
    }
  });

});

//获取首页轮播图数据
router.get('/api/homecasual',(req,res,next) => {
  /*
  let result = require("./../data/homecasual");
  res.json({success_code:200,message:result});  //获取本地的数据，并通过res.json来返回
  */

  let sql = "select * from pdd_homecasual";
  conn.query(sql,(error,result) => {
    if(error) {
      res.json({error_code:0,message:"请求数据失败"});
    }else{

      res.json({success_code:0,message:result})
    }
  });
})

//获取首页导航栏数据
router.get("/api/homenav",(req,res) => {
  const data = require("./../data/homenav");
  res.json({success_code: 200,message:data});
});

//获取首页商品列表
router.get("/api/homeshoplist",(req,res) => {
  setTimeout(()=>{
    const data = require("./../data/shopList");
    res.json({success_code:200,message:data});
  },200)
});

//推荐页面的数据
router.get("/api/recommendshoplist",(req,res)=>{
  // const data = require("./../data/recommend");
  // res.json({success_code:200,message:data});
  //参数
  let page = req.query.page || 1;   //页码
  let count = req.query.count || 20;   //每页 的数量

    /*
      从数据库中来获取数据
    * */
  let sqlStr = "select * from pdd_recommend limit "+(page-1)+","+count;
  conn.query(sqlStr,(error,results,fields) => {
    if(error){
      res.json({error_code:0,message:"获取数据失败"});
    }else{
      // console.log(results.message.length);
      setTimeout(()=>{
        res.json({success_code:200,message:results});
      },500)
    }
  });

});


//获取搜索页面的数据
router.get("/api/searchgoods",(req,res) => {
  setTimeout(()=>{
    const data = require("./../data/search");
    res.json({success_code:200,message:data});
  },10)
});

//获取验证码
router.get("/api/send_code",(req,res) => {
  //当前用户请求的手机号吗
  let phone = req.query.phone;
  //验证码
  let code = sms.randomCode(6);
  console.log(code);

  //向指定号码发送验证码   将会报错，因为没有第三方服务提供短信发送
  /*sms.sendCode(phone,code,function(success){
    if(success){
      users[phone] = code;
      res.json({success_code:200,message:"验证码获取成功"});
    }else{
      res.json({error_code:0,message:"验证码获取失败"});
    }
  })*/

  //成功
  setTimeout(()=>{
    users[phone] = code;
    res.json({success_code:200,message:code});
  },2000);

/*
  模拟失败
  setTimeout(()=>{
    res.json({error_code:0,message:"验证码获取失败"});
  },2000);*/

});

//手机验证码登录
router.post("/api/login_code",(req,res) => {
    setTimeout(()=>{
        console.log("167=",req.session.userId);
    },2000);
  let phone = req.body.phone;
  let code = req.body.code;
  //判断提交验证码是否正确
  if(users[phone] !== code ){
    res.json({error_code:0,message:"验证输入有误"});
  }

  //先将当前的信息删除
  delete users[phone];

  //查询表中信息看看是否存再当前用户
  let sqlStr = "select * from pdd_user_info where user_phone = "+ phone +" LIMIT 1;";

  conn.query(sqlStr,(error,result,field) => {
    if(error){
      res.json({error_code:1,message:"获取数据失败"});
    }else{
        // console.log(result[0]);
        result = JSON.parse(JSON.stringify(result));
        // console.log(result[0]);
        if(result[0]){   //用户存在
            // console.log(result[0]);
            req.session.userId = result[0].id;
            console.log(req.session);
            //将数据返回
            res.json({success_code:200,message:{id:result[0].id,user_name:result[0].user_name,user_phone:result[0].user_phone,user_sex:result[0].user_sex,user_address:result[0].user_address,user_birthday:result[0].user_birthday,user_sign:result[0].user_sign}});
        }else{   //新用户
            let sqlStr = "insert into pdd_user_info (user_name,user_phone) VALUES (?,?)";
            //将新用户插入表中
            conn.query(sqlStr,[phone,phone],(error,result,field) => {
                if(error){
                    res.json({error_code:3,message:"数据写入失败"});
                }else{
                    //将信息查询出来并保存
                    let sqlStr = "select * from pdd_user_info where user_phone = "+ phone +" LIMIT 1;";
                    conn.query(sqlStr,(error,result,field) => {
                        result = JSON.parse(JSON.stringify(result));
                        req.session.userId = result[0].id;
                        res.json({success_code:200,
                            message:{
                                id:result[0].id,
                                user_name:result[0].user_name,
                                user_phone:result[0].user_phone,
                                user_sex:result[0].user_sex,
                                user_address:result[0].user_address,
                                user_birthday:result[0].user_birthday,
                                user_sign:result[0].user_sign
                            }
                        });
                    })
                }
            });
        }
    }

  });

});

//获取用户的信息
router.get("/api/getUserInfo",(req,res) => {
    console.log(req.session.userId);
    //获取用户ID
    let userID = req.session.userId;
    //查询用户信息
    let sqlStr = "select * from pdd_user_info where id = " + userID;
    conn.query(sqlStr,(error,result,field)=>{
        if(error){
            res.json({error_code:0,message:"请求数据失败"});
        }else{
            result = JSON.parse(JSON.stringify(result));
            if(!result[0]){
                delete req.session.userId;
                res.json({error_code:1,message:"请先登录"});
            }else{
                res.json({
                    success_code:200,
                    message:{id:result[0].id,user_name:result[0].user_name,user_phone:result[0].user_phone,user_sex:result[0].user_sex,user_address:result[0].user_address,user_birthday:result[0].user_birthday,user_sign:result[0].user_sign}
                })
            }
        }
    });



    res.json({success_code:200,message:req.session});
});

module.exports = router;
