let express = require('express');
let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');
let cors = require('cors')
require('./db');
let users = require('./routes/users');
let goods = require('./routes/goods')
let app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
//拦截所有的路由
app.use(function (req,res,next) {
  console.log("url:"+req.originalUrl);
  //如果已经登录或者是登录接口或者是首页商品列表则放行
  if(req.cookies.userId || req.originalUrl === '/users/login' || req.originalUrl === '/users/register' || req.originalUrl.indexOf('/goods/list')>-1 || req.originalUrl.indexOf('/goods/detail')>-1){

	// 只
    // res.header("Access-Control-Allow-Origin", "http://127.0.0.1:3000");
    // res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Origin", "http://hope1995.me:3000");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
	  
    next();
  }else{
    return res.json({
      status:'10001',
      msg:'当前未登录',
      result:''
    });
  }
});
app.use('/users', users);
app.use('/goods', goods);
module.exports = app;
