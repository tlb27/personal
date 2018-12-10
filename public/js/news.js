$(function(){
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


    var st=$("#main>.page_l>.page_lnews>.fengye>.fenyebar>li.st")
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