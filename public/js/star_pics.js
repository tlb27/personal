$(function(){
    var ul=$("#main>.pic_bar>ul").on("click","li",function(){
        var li=$(this)
        li.addClass("link").siblings().removeClass("link")
    })
    var st=$("#main>.fengye>.fenyebar>li.st")
    st.on("click",function(){
        var st=$(this)
        st.addClass("active").siblings().removeClass("active")
    })
})