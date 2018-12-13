//引入插件
const express=require('express');
const bodyParser=require('body-parser')
const session=require("express-session")
//引入模块
const user=require("./routes/user")
const star_detail=require("./routes/star_detail")
<<<<<<< HEAD
const star_info=require("./routes/star_info")
const star_news=require("./routes/news")
=======
>>>>>>> origin/master
//构建web服务器
var app=express();
app.listen(3000);
//托管静态资源
app.use(express.static(__dirname+'/public'));

//使用body中间件
app.use(bodyParser.urlencoded({extended:false}));

app.use(session({
    secret: '128位随机字符串',
    resave: false,
    saveUninitialized: true,
  }))

  //挂载路由
  app.use("/user",user);
  app.use("/star",star_detail)
<<<<<<< HEAD
  app.use("/info",star_info)
  app.use("/news",star_news)
=======
>>>>>>> origin/master















