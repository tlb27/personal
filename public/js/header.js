$(function(){
    //1. 动态创建link引用header.css
    $("<link rel='stylesheet' href='css/header.css'>").appendTo("head")
    //2. ajax请求header.html片段
    $.ajax({
      url:"http://localhost:3000/header.html",
      type:"get",
      success:function(res){
        $("#header").replaceWith(res)
        $("#nav>.daohang>li:gt(0)")
        .hover(
            function(){//mouseenter
                $(".my-bg>.nav-background").toggleClass("d-none")
            }
        )    
    }
    })
    
})