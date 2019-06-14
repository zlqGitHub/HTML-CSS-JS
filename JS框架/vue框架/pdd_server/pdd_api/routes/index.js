let express = require('express');
let router = express.Router();
const conn = require("./../db/db");


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//解决跨域问题
router.get("*",function(req,res,next){
  //设置允许跨域的域名，*代表允许任意域名跨域
  res.header("Access-Control-Allow-Origin","*");
  //允许的header类型
  res.header("Access-Control-Allow-Headers","content-type");
  //跨域允许的请求方式
  res.header("Access-Control-Allow-Methods","DELETE,PUT,POST,GET,OPTIONS");
  if (req.method.toLowerCase() == 'options'){
    res.send(200);  //让options尝试请求快速结束
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

module.exports = router;
