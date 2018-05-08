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


```
use shop

db.system.users.find() #查看system.users里面的用户数据

----
#添加一个管理员账户
db.addUser('root','asdof879123sdjf'); 

db.auth('root','asdof879123sdjf'); 
```




