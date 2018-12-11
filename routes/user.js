const express=require('express');
//引入mysql连接池
const pool=require('../pool.js');
//创建路由器
var router=express.Router();
//在路由下添加路由
//用户登陆
router.post("/signin",(req,res)=>{
  var uname=req.body.uname;
  var upwd=req.body.upwd;
  console.log(uname,upwd);
  pool.query(
    "SELECT * FROM star_user WHERE uname=? and upwd=?",
    [uname,upwd],
    (err,result)=>{
      if(err) console.log(err);
      if(result.length>0){
        res.writeHead(200);
        var user=result[0]
        req.session.uid=user.uid
        res.write(JSON.stringify({
          ok:1
        }))
      }else{
        res.write(JSON.stringify({
          ok:0,
          msg:"用户名或密码错误！"
        }))
      }
      res.end();
    }
  )
})
router.get("/islogin",(req,res)=>{
  res.writeHead(200);
  if(req.session.uid===undefined){
    res.write(JSON.stringify({ok:0}))
    res.end()
  }else{
    var uid=req.session.uid;
    var sql=
     "select * from star_user where uid=?"
    pool.query(sql,[uid],(err,result)=>{
      if(err) console.log(err);
      var user=result[0];
      res.write(JSON.stringify({
        ok:1,uname:user.uname
      }))
      res.end()
    })
  }
  
})
router.get("/signout",(req,res)=>{
  req.session["uid"]=undefined;
  res.end();
})
//用户注册
router.post("/register",(req,res)=>{
  var $uname=req.body.uname;
  var $upwd=req.body.upwd;
  var $email=req.body.email;
  var $gender=req.body.gender;
  var sql1="SELECT * FROM star_user WHERE uname=?"
  var sql2='INSERT INTO star_user VALUES(NULL,?,?,?,?)';
   pool.query(sql1,[$uname],(err,result)=>{
     if(err) throw err;
    if(result.length>0){
      res.write(JSON.stringify({ok:0,msg:'用户已存在'}))
      res.end()
    }else{
      pool.query(sql2,[$uname,$upwd,$email,$gender],(err,result)=>{
        if(err) throw err;
        //如何判断插入成功————affectedRows
      if(result.affectedRows>0){
        res.write(JSON.stringify({ok:1,msg:'注册成功,前往登陆'}))
        res.end()
      }
      });
    }
    
   })
 
})
//测试：
//http://localhost:3000/user/islogin ok:0
//.../user/signin?uname=tom&upwd=123456 ok:1
//.../user/islogin ok:1
//.../user/signout
//.../user/islogin ok:0

module.exports=router;




























