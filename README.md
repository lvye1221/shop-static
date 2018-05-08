# shop-static
电商项目静态页面

# api 启动方法


1. 启动 MongoDB

第一次启动时，需要导入数据库，shop

```
打开 MongoBooster 可视化界面工具


创建数据库 shop

导入 goods.json 和 users.json 数据

```

打开命令窗口
```
mongod --dbpath=c:\mongo
```

2. 启动服务器

在当前目录再 打开命令窗口

第一次启动时，需要安装依赖
```
cnpm install
```


```
node bin\www
```


# MongoDB

## 密码设置


# 添加一个管理员账户

```
// 先进入数据库
mongo

// 使用数据库
use shop

// 显示所有角色
show roles

// 创建用户
db.createUser({user:'root',pwd:'root1234',roles:[{role:'dbOwner',db:'shop'}]})

// 授权数据库
db.auth('root','root1234'); 

```
