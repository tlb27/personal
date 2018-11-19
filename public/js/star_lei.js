$(function(){
var stars=$(".my-position>.t-03>h3>.stars")
stars.on("click","a",function(){
    var a=$(this)
    a.addClass("link").siblings().removeClass("link")
})
var st=$(".my-position>.fengye>.fenyebar>li.st")
    st.on("click",function(){
        var st=$(this)
        st.addClass("active").siblings().removeClass("active")
    })
})