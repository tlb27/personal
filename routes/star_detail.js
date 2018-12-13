const express=require('express');
//引入mysql连接池
const pool=require('../pool.js');
//创建路由器
var router=express.Router();

router.get("/getlist",(req,res)=>{
    var sql="SELECT * from star_peaple limit 14"
    pool.query(sql,[],(err,result)=>{
        if(err) console.log(err);
        //res.send(result);
        res.writeHead(200,{
          "Content-Type":"application/json;charset=utf-8",
          "Access-Control-Allow-Origin":"*"
        })
        res.write(JSON.stringify(result));
        res.end();
      })
})

router.get("/getlist2",(req,res)=>{
    var area=req.query.area
    var output={ pageSize:24 }//每页9个商品
    output.pno=req.query.pno;
    if(area=="qbfl"){
        var sql="SELECT * from star_peaple"
        pool.query(sql,[],(err,result)=>{
            if(err) console.log(err);
            //res.send(result);
            output.count=result.length;//获得总记录数
            output.pageCount=Math.ceil(output.count/output.pageSize);//计算总页数
            output.products=//截取分页后的结果集
            result.slice(output.pno*24,output.pno*24+24);
            res.writeHead(200,{
                "Content-Type":"application/json;charset=utf-8",
                "Access-Control-Allow-Origin":"*"
              })
              res.write(JSON.stringify(output))
              res.end()
          })
    }else{
        var sql1="SELECT * from star_peaple where area=?"
        pool.query(sql1,[area],(err,result)=>{
            if(err) console.log(err)
            output.count=result.length;//获得总记录数
            output.pageCount=Math.ceil(output.count/output.pageSize);//计算总页数
            output.products=//截取分页后的结果集
        result.slice(output.pno*24,output.pno*24+24);
        res.writeHead(200,{
            "Content-Type":"application/json;charset=utf-8",
            "Access-Control-Allow-Origin":"*"
        })
        res.write(JSON.stringify(output))
        res.end()
        })
    }
})

router.get("/getphoto1",(req,res)=>{
    var category=req.query.category
    var output={ pageSize:12 }//每页9个商品
    output.pno=req.query.pno;
    if(category=="qbfl"){
        var sql="SELECT * from star_photo"
        pool.query(sql,[],(err,result)=>{
            if(err) console.log(err);
            //res.send(result);
            output.count=result.length;//获得总记录数
            output.pageCount=Math.ceil(output.count/output.pageSize);//计算总页数
            output.products=//截取分页后的结果集
            result.slice(output.pno*12,output.pno*12+12);
            res.writeHead(200,{
                "Content-Type":"application/json;charset=utf-8",
                "Access-Control-Allow-Origin":"*"
              })
              res.write(JSON.stringify(output))
              res.end()
          })
    }else{
        var sql1="SELECT * from star_photo where category=?"
        pool.query(sql1,[category],(err,result)=>{
            if(err) console.log(err)
            output.count=result.length;//获得总记录数
            output.pageCount=Math.ceil(output.count/output.pageSize);//计算总页数
            output.products=//截取分页后的结果集
        result.slice(output.pno*12,output.pno*12+12);
        res.writeHead(200,{
            "Content-Type":"application/json;charset=utf-8",
            "Access-Control-Allow-Origin":"*"
        })
        res.write(JSON.stringify(output))
        res.end()
        })
    }
})

<<<<<<< HEAD
router.get("/photoDetail",(req,res)=>{
    var lid=req.query.lid
    var sql="select * from star_photo where lid=?"
    pool.query(sql,[lid],(err,result)=>{
        if(err) console.log(err)
        res.writeHead(200,{
            "Content-Type":"application/json;charset=utf-8",
            "Access-Control-Allow-Origin":"*"
          })
          res.write(JSON.stringify(result[0]));
          res.end();
    })
})

router.get("/other",(req,res)=>{
    var lid=req.query.lid
    var sql="select * from star_photo where star_name=(select star_name from star_photo where lid=?)"
    pool.query(sql,[lid],(err,result)=>{
        if(err) throw err;
        res.writeHead(200,{
            "Content-Type":"application/json;charset=utf-8",
            "Access-Control-Allow-Origin":"*"
          })
          res.write(JSON.stringify(result));
          res.end();
    })
})

=======
>>>>>>> origin/master









module.exports=router;