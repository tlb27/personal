//引入插件
const express=require('express');
const bodyParser=require('body-parser')
//构建web服务器
var app=express();
app.listen(3000);
//托管静态资源
app.use(express.static('./public'));

//使用body中间件
app.use(bodyParser.urlencoded({extended:false}));


















