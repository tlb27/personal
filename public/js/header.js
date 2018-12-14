$(function(){
    //1. 动态创建link引用header.css
    $("<link rel='stylesheet' href='css/header.css'>").appendTo("head")
    //2. ajax请求header.html片段
    $.ajax({
      url:"http://localhost:3000/header.html",
      type:"get",
      success:function(res){
        $("#header").replaceWith(res)

        var $btnSearch=
            $(".search a"),
          $input=
            $btnSearch.prev();
        var history=$("#right .history_inner")
      //2. 绑定事件
      $btnSearch.click(function(){
        //  3. 查找要修改的元素
        //  4. 修改元素
        var kw=$input.val().trim();
        if(kw!=="")
        
          location.href=
            `star_detail.html?star_name=${kw}`;
      })
      $input.keyup(function(e){
        if(e.keyCode==13) $btnSearch.click()
      })
      if(location.search.indexOf("star_name")!=-1){
        var star_name=decodeURI(
          location.search.split("=")[1]
        )
        $input.val(star_name)
        var html=`<li><a href="star_detail.html?star_name=${star_name}">${star_name}<li>`
        $(html).appendTo("#liulan")
      }

        $("#nav>.daohang>li:gt(0)")
        .hover(
            function(){//mouseenter
                $(".my-bg>.nav-background").toggleClass("d-none")
            }
        )
        var urlstr=location.href;
        var urlstatus=false;
        $("#nav>ul.daohang>li>a").each(function(){
            if ((urlstr ).indexOf($(this).attr('href').split("=")[0]) > -1&&$(this).attr('href')!=""){
                $(this).addClass("cur"); urlstatus = true;
            }else{
                $(this).removeClass("cur");
            }
        });
        if (!urlstatus) {$("#nav>ul.daohang>li>a").eq(0).addClass("cur"); }
        //判断是否已经登陆
        $.ajax({
            url:"http://localhost:3000/user/islogin",
            type:"get",
            dataType:"json",
            success:function(res){
              if(res.ok==0){
                $("#signin").show().next().hide();
              }else{
                 $("#right .collect .history_inner>li>span").html(res.uname);
                $("#signin").hide().next().show();
              }
            }
          })
          $("#signout").click(function(){
            $.ajax({
              url:"http://localhost:3000/user/signout",
              type:"get",
              success:function(){ location.reload(); }
            })
          })
        // 历史记录]
        $("#right .history").hover(function(){
            $(this).children().first().siblings().css("display","block")
        },function(){
            $(this).children().first().siblings().css("display","none")
        })
        //个人名称
        $("#right .collect").hover(function(){
            console.log()
            $(this).children().eq(4).css("display","block").prev().css("display","block")
        },function(){
            $(this).children().eq(4).css("display","none").prev().css("display","none")
        })
        //登陆/注册模态框
        var login_btn=$("#right .collect>a#signin")
        login_btn.on("click",function(){
         $("#model_bg").removeClass("hide").stop(true).animate({"opacity":1},500)
         $("#lg_rg").removeClass("hide").stop(true).animate({"opacity":1,"top":50+"%"},500)
        })

        $("#lg_rg form>p>label").on("focus","input",function(){
            var input=$(this)
           input.addClass("inputup").next().css("top",0)
        })
        $("#lg_rg form>p>label").on("blur","input",function(){
            var input=$(this)
            input.removeClass("inputup")
            if(input.val()==""){
                input.next().css({"top":30,"border-color":"red"})
            }
        })
        var close=$("#lg_rg.l_r footer>p>button.close1")
        close.on("click",function(){
            $("#model_bg").stop(true).animate({"opacity":0},500).addClass("hide")
            $("#login").css("display","block")
            $("#register").css("display","none")
            $("#lg_rg").stop(true).animate({"opacity":0,"top":0+"%"},500).addClass("hide")
        })
            
        $("#lg_rg.l_r footer>p>span>a").on("click",function(){
            var a=$(this)
            a.parent().parent().parent().parent().css("display","none").siblings().css("display","block")
        })
       //注册
       var register=$("#lg_rg.l_r footer>p>button").eq(3)
       var yes1=false,yes2=false,yes3=false,yes4=false
        //登陆
        //用户名
        $("#register .content .runame").on("blur",function(){
            var runame=$(this)
            var reg=/^[\u4E00-\u9FA5]{2,4}$/
            if(runame.val()){
            if(reg.test(runame.val())){
                runame.prev().hide()
                runame.prev().prev().show()
                yes1=true
            }else{
                runame.prev().show()
                runame.prev().prev().hide()
                yes1=false
            }}else{
                runame.prev().show()
                runame.prev().prev().hide()
                yes1=false
            }
            enabled()
        })
        //密码
        $("#register .content .rupwd").on("blur",function(){
            var rupwd=$(this)
            var reg=/^[a-zA-Z0-9_]{6,12}$/
            if(rupwd.val()){
            if(reg.test(rupwd.val())){
                rupwd.prev().hide()
                rupwd.prev().prev().show()
                yes2=true
            }else{
                rupwd.prev().show()
                rupwd.prev().prev().hide()
                yes2=false
            }}else{
                rupwd.prev().show()
                rupwd.prev().prev().hide()
                yes2=false
            }
            enabled()
        })
        //邮箱
        $("#register .content .email").on("blur",function(){
            var email=$(this)
            var reg=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
            if(email.val()){
            if(reg.test(email.val())){
                email.prev().hide()
                email.prev().prev().show()
                yes3=true
            }else{
                email.prev().show()
                email.prev().prev().hide()
                yes3=false
            }}else{
                email.prev().show()
                email.prev().prev().hide()
                yes3=false
            }
            enabled()
        })
        //性别
     
        $("input[type=radio]").on("click",function(){
            var radio=$('input:radio[name="gender"]:checked').val();
            if(radio==null){
                yes4=false
            }else{
                yes4=true
            }
            enabled()
        })
            function enabled(){
                if(yes1==true&&yes2==true&&yes3==true&&yes4==true){
                    register.removeClass("disabled")
                }else{
                    register.addClass("disabled")
                }
            }
    
        register.on("click",function(){
            console.log(register.prop("disabled"))
            var uname=$("#register .content .runame").val();
            var upwd=$("#register .content .rupwd").val();
            var email=$("#register .content .email").val();
            var gender=$('#register input:radio:checked').val();
            if(!register.is(".disabled")){
                (async function(){
                        var res=await $.ajax({
                        url:"http://localhost:3000/user/register",
                        type:"post",
                        data:{uname,upwd,email,gender},
                        dataType:"json"
                    })
                    if(res.ok==0){
                            $("#lg_rg").addClass("error")
                            setTimeout(function(){
                                $("#lg_rg").removeClass("error")
                                alert(res.msg)
                            },400)
                            
                        }
                    else{
                        if(confirm(res.msg)){
                            $("#lg_rg.l_r #login").show().siblings().hide()
                        }else{
							 window.location.reload()
						}
                    
                    
                    }
                })()
            }
        })
    
        var login=$("#lg_rg.l_r footer>p>button").eq(1)
      
        login.on('click',function(){
            var uname=$("#login .content .uname").val();
            var upwd=$("#login .content .upwd").val();
            (async function(){
            var res=await $.ajax({
                url:"http://localhost:3000/user/signin",
                type:"post",
                data:{uname,upwd},
                dataType:"json"
            })
            if(res.ok==0){
                $("#lg_rg form>p>label>input.uname").addClass("fail").parent().next().children().first().addClass("fail")
                    $("#lg_rg").addClass("error")
                    setTimeout(function(){
                        $("#lg_rg").removeClass("error")
                        $("#lg_rg form>p>label>input.uname").removeClass("fail").parent().next().children().first().removeClass("fail")
                    },400)
                }
            else{
                $("#lg_rg label img.true").css("display","block")
                //刷新当前页
                window.location.reload()
                //若要跳转会之前页面解开下面注释
                /*if(location.search.startsWith("?back=")){
                var url=location.search.slice(6)
                }else{
                var url="index.html"
                }
                location.href=url;*/
            }
            })()
        })

      }
    })    


})