$(function(){
    $.ajax({
        url:"http://localhost:3000/personal.html",
        type:"get",
        success:function(res){
            $("#main #detail").replaceWith(res)
        }
    })
    var left_ul=$(".sidebar>ul")
    left_ul.on("click","li",function(){
        var li =$(this)
        li.addClass("add").siblings().removeClass("add")
    
    //     switch (index)
    //     {
    //     case 1:
    //     $.ajax({
    //         url:"http://localhost:3000/person_new.html",
    //         type:"get",
    //         success:function(res){
    //             $("#main #detail").replaceWith(res)
    //         }
    //     })
    //     break;
    //     case 2:
    //     $.ajax({
    //         url:"http://localhost:3000/person_photo.html",
    //         type:"get",
    //         success:function(res){
    //             $("#main #detail").replaceWith(res)
    //         }
    //     })
    //     break;
    //     case 3:
    //     $.ajax({
    //         url:"http://localhost:3000/person_info.html",
    //         type:"get",
    //         success:function(res){
    //             $("#main #detail").replaceWith(res)
    //         }
    //     })
    //     break;
    //     default:
    //     $.ajax({
    //         url:"http://localhost:3000/personal.html",
    //         type:"get",
    //         success:function(res){
    //             $("#main #detail").replaceWith(res)
    //         }
    //     })
    //   }
    
    })

    $("#main .pic_bar>ul").on("click","li",function(){
        var li=$(this)
        li.addClass("link").siblings().removeClass("link")
    })
    var st=$("#main .page_l .page_lnews>.fengye>.fenyebar>li.st")
    st.on("click",function(){
        var li=$(this)
        li.addClass("active").siblings().removeClass("active")
    })

    $("ul.page_rpic li a #zhezao").hover(function(){
        console.log($(this))
        $(this).children().children().eq(0).stop().animate({ width:"105%"},1000).removeClass("r").addClass("l")
        $(this).children().children().eq(3).stop().animate({ width:"105%"},1000).removeClass("l").addClass("r")
        $(this).children().children().eq(1).stop().animate({ height:"110%"},1000).removeClass("t").addClass("b")
        $(this).children().children().eq(2).stop().animate({ height:"110%"},1000).removeClass("b").addClass("t")
    },function(){
        $(this).children().children().eq(0).stop().animate({ width:"0"},500).removeClass("l").addClass("r")
        $(this).children().children().eq(3).stop().animate({ width:"0"},500).removeClass("r").addClass("l")
        $(this).children().children().eq(1).stop().animate({ height:"0"},500).removeClass("b").addClass("t")
        $(this).children().children().eq(2).stop().animate({ height:"0"},500).removeClass("b").addClass("t")
    })
})