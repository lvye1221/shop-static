let mongoose = require('mongoose');
//连接MongoDB数据库,本地默认端口27017，数据库叫dumall
// mongoose.connect('mongodb://127.0.0.1:27017/xshop');
// mongoose.connect('mongodb://127.0.0.1:27017/shop');
// mongoose.connect('mongodb://107.191.43.142:27017/shop');
mongoose.connect('mongodb://root:asdof879123sdjf@127.0.0.1:27017/shop');

mongoose.connection.on("connected", function () {//连接成功事件
  console.log("MongoDB 数据库连接 成功.")
});

mongoose.connection.on("error", function () {//连接失败事件
  console.log("MongoDB 数据库连接 失败. 请启动MongoDB服务器： mongod --dbpath=c:\mongo")
});

mongoose.connection.on("disconnected", function () {//断开连接事件
  console.log("MongoDB 数据库连接 端开.")
});

module.exports = mongoose;
