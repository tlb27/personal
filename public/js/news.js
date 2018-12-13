$(function(){
<<<<<<< HEAD
    if(location.search.indexOf("lei=")!=-1){
        var lei=decodeURI(
          location.search.split("=")[1]
        );
        var pno=0;
        function loadPage(no=0){
            pno=no;
            $.ajax({
                url:"http://localhost:3000/news/news",
                type:"get",
                data:{lei,pno},
                dataType:"json",
                success: function(output) {
                    var html=""
                    var ul=$("#main .page_l .page_lnews>ul")
                    var {products,pageCount}=output
                    for(var p of products){
                        var {ntitle,ncover,content,ntime}=p
                        var d = new Date(ntime);
                        var times=d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() ;
                        html+=`<li>
                        <a href="new_detail.html?nid=1">
                            <span class="fl"><img src="${ncover}"></span>
                        </a>
                        <span class="fr">
                            <a href="new_detail.html?nid=1"><h3>${ntitle}</h3></a>
                            <p>${content}</p>
                            <i>${times}</i>
                        </span>
                    </li>`
                    }
                    ul.html(html)
                    var html=""
                    for(var i=1;i<=pageCount;i++){
                        html+=` <li class="st  ${i==pno+1?'active':''}">${i}</li>`
                    }
                    fenye.children(":not(:first-child):not(:last-child)").remove()//删除中间li:
                    fenye.children().first().after(html) //将html追加到上一页后
                    if(pno==0){//如果当前页是第一页就禁用上一页
                        fenye.children().first().addClass("disabled")
                    }else{//否则就启用上一页
                        fenye.children().first().removeClass("disabled")
                    }
                    if(pno==pageCount-1){
                        fenye.children().last().addClass("disabled")
                    }else{
                        fenye.children().last().removeClass("disabled")
                    }
                }
            })
        }
        loadPage();
        var fenye=$(".fengye .fenyebar")
        fenye.on("click","li",function(){
            li=$(this)
            if(!li.is(".disabled,.active")){
                if(li.is(":first-child"))//上一页
                  var no=pno-1;//新页号=当前页号-1
                else if(li.is(":last-child"))
                  var no=pno+1;//新页号=当前页号+1
                else//1、2、3按钮
                  var no=li.html()-1;//新页号=按钮内容-1
                loadPage(no);//重新加载新页号的页面内容
              }
        })
    }
=======
>>>>>>> origin/master
    // 判断分类导航进过页面跳转过来 后url中是否包含导航中a连接的href属性
var urlstr=location.href;
var urlstatus_lei=false;
$(".pic_bar ul li a").each(function(){
    console.log((urlstr+"/" ).indexOf($(this).attr('href')) > -1&&$(this).attr('href')!="")
    if ((urlstr+"/" ).indexOf($(this).attr('href')) > -1&&$(this).attr('href')!="") {
        $(this).addClass("link"); urlstatus_lei = true;
        } 
        else 
        {
            $(this).removeClass("link");
        }
        });
        if (!urlstatus_lei) {$(".pic_bar ul li a").eq(0).addClass("link"); }

<<<<<<< HEAD
=======

    var st=$("#main>.page_l>.page_lnews>.fengye>.fenyebar>li.st")
    st.on("click",function(){
        var li=$(this)
        li.addClass("active").siblings().removeClass("active")
    })
>>>>>>> origin/master

  
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