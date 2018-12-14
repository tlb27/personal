const express=require('express');
//引入mysql连接池
const pool=require('../pool.js');
//创建路由器
var router=express.Router();

router.get("/news",(req,res)=>{
    var lei=req.query.lei
    var output={ pageSize:15 }//每页9个商品
    output.pno=req.query.pno;
    if(lei=="qbfl"){
        var sql="SELECT * from news ORDER BY ntime DESC"
        pool.query(sql,[],(err,result)=>{
            if(err) console.log(err);
            //res.send(result);
            output.count=result.length;//获得总记录数
            output.pageCount=Math.ceil(output.count/output.pageSize);//计算总页数
            output.products=//截取分页后的结果集
            result.slice(output.pno*15,output.pno*15+15);
            res.writeHead(200,{
                "Content-Type":"application/json;charset=utf-8",
                "Access-Control-Allow-Origin":"*"
              })
              res.write(JSON.stringify(output))
              res.end()
          })
    }else{
        var sql1="SELECT * from news where lei=? ORDER BY ntime DESC"
        pool.query(sql1,[lei],(err,result)=>{
            if(err) console.log(err)
            output.count=result.length;//获得总记录数
            output.pageCount=Math.ceil(output.count/output.pageSize);//计算总页数
            output.products=//截取分页后的结果集
        result.slice(output.pno*15,output.pno*15+15);
        res.writeHead(200,{
            "Content-Type":"application/json;charset=utf-8",
            "Access-Control-Allow-Origin":"*"
        })
        res.write(JSON.stringify(output))
        res.end()
        })
    }
})













module.exports=router;