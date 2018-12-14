const express=require('express');
//引入mysql连接池
const pool=require('../pool.js');
//创建路由器
var router=express.Router();

router.get("/name",(req,res)=>{
    var star_name=req.query.star_name
    var output={info:{},photo:{}};
    var sql="select * from star_peaple where star_name=?"
    var sql1="select * from star_photo where star_name=?"
    Promise.all([
        new Promise(function(open){
          pool.query(sql,[star_name],(err,result)=>{
            if(err) console.log(err);
            output.info=result[0];
            if(result.length!=0){
              open();
            }
          })
        }),
        new Promise(function(open){
          pool.query(sql1,[star_name],(err,result)=>{
            if(err) console.log(err);
            output.photo=result;
            open()
          })
        })
      ]).then(function(){
        res.writeHead(200,{
          "Content-Type":"application/json;charset=utf-8",
          "Access-Control-Allow-Origin":"*"
        })
        res.write(JSON.stringify(output));
        res.end();
        console.log("响应完成!");
      })
})















module.exports=router;