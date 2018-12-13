$(function(){
<<<<<<< HEAD
    if(location.search.indexOf("star_name=")!=-1){
        var star_name=decodeURI(
          location.search.split("=")[1]
        );
        $.ajax({
            url:"http://localhost:3000/info/name",
                type:"get",
                data:{star_name},
                success:function(res){
                   var {photo,info}=res
                    var{ star_name,star_ename,category,introductio,star_profile}=info
                   var personal=$(".personal .data")
                   var html=`<div class="data">
                   <span class="info"><p>${introductio}</p></span>
                   <span class="photo"><img src="${category}" alt="${star_name}"></span>
                   <span class="name"><h3>${star_name}<br><i>${star_ename}</i></h3></span>
               </div>`
                personal.html(html)
                var pagepics=$(".detail-pic .page_starphoto")
                var html=""
                for(var pic of photo){
                    var {lid,title,cover}=pic
                    html+=`<li>
                    <a href="star_photo.html?lid=${lid}" target="_blank">
                        <span>
                            <img src="${cover}">
                        </span>
                    </a>
                    <a href="star_photo.html?lid=${lid}" target="_blank">
                        <h3>${title}</h3>
                    </a>
                </li>`
                }
                pagepics.html(html)
                var getinfo=$("#main .page_l")
                var arr=star_profile.split("?")
                var html=""
                for(var p of arr){
                    var arr1=p.split("^")
                    console.log(arr1)
                    html+=`<div class="page_lct">
                    <div class="t_03"><h3>${arr1[0]}</h3><i></i></div>
                    <div class="info_ct">
                    ${arr1[1]}        
                    </div>
                </div>`
                }
                getinfo.html(html)
            }
        })
    }
    var left_ul=$(".sidebar>ul")
    left_ul.on("click","li",function(){
        var li =$(this)
        var index=li.index()
        li.addClass("add").siblings().removeClass("add")
        $("#main .detail").eq(index).show().siblings().not(".personal").hide()
=======
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
    
>>>>>>> origin/master
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