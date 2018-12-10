$(function(){

// 判断分类导航进过页面跳转过来 后url中是否包含导航中a连接的href属性
var urlstr=location.href;
var urlstatus_lei=false;
$(".t-03 h3 .stars>a").each(function(){
    console.log((urlstr+"/" ).indexOf($(this).attr('href')) > -1&&$(this).attr('href')!="")
    if ((urlstr+"/" ).indexOf($(this).attr('href')) > -1&&$(this).attr('href')!="") {
        $(this).addClass("link"); urlstatus_lei = true;
        } 
        else 
        {
            $(this).removeClass("link");
        }
        });
        if (!urlstatus_lei) {$(".t-03 h3 .stars>a").eq(0).addClass("link"); }

var st=$(".my-position>.fengye>.fenyebar>li.st")
    st.on("click",function(){
        var st=$(this)
        st.addClass("active").siblings().removeClass("active")
    })
})