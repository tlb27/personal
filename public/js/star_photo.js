$(function(){

    var moved=0//小图像列表中已经移动的次数
    var md_img=$("#viewk>ul")
    var sm_img=$("#list_son")
    var md_moved=0//大图像中移动的次数

    var size=sm_img.children().length
    
    //点击图片切换滚动图片
    $("#left1").click(function(){
        var left=$(this)
        if(md_moved==0)
        left.addClass("disabled")
        if(!left.is(".disabled")){
            md_moved--
            if(moved>0&&md_moved<size-7){
                moved=md_moved
                sm_img.stop(true).animate({"left":-146*moved},500)
                $("#right2").removeClass("disabled")      
            }
            if(md_moved>6&&moved==0){
                moved=md_moved-6
                sm_img.stop(true).animate({"left":-146*moved},500) 
                $("#left2").removeClass("disabled") 
            }
            sm_img.children().children().removeClass("active").eq(md_moved).addClass("active")
            md_img.stop(true).animate({"left":-1100*md_moved},500)
            $("#right1").removeClass("disabled")
        }
    })
    $("#right1").click(function(){
        var right=$(this)
        if(md_moved==size-1)
        right.addClass("disabled")
        if(!right.is(".disabled")){
            md_moved++;//已经左移的图片个数+1
            if(md_moved>6&&moved<size-7){
            moved=md_moved-6
            sm_img.stop(true).animate({"left":-146*moved},500)  
            $("#left2").removeClass("disabled")
            if(moved==size-7){
                $("#right2").addClass("disabled")
            }    
            }
            if(md_moved<size-7&&moved>0){
                moved--
                sm_img.stop(true).animate({"left":-146*moved},500)  
            }
            sm_img.children().children().removeClass("active").eq(md_moved).addClass("active")
            md_img.stop(true).animate({"left":-1100*md_moved},500)
            $("#left1").removeClass("disabled")
        }
    })
   
    sm_img.on("click","div",function(){
        var img=$(this)
         md_moved=img.index()
         if(md_moved!=0&&md_moved!=size-1){
             $("#right1").removeClass("disabled")
             $("#left1").removeClass("disabled")
         }
         if(md_moved==0){
             $("#right1").removeClass("disabled")
             $("#left1").addClass("disabled")
         }
         if(md_moved==size-1){
            $("#left1").removeClass("disabled")
            $("#right1").addClass("disabled")
         }
        img.children().addClass("active").parent().siblings().children().removeClass("active")
        md_img.stop(true).animate({"left":-1100*md_moved})
    })
    if(size<=7)
    //为右边按钮添加disabled class
    $("#right2").addClass("disabled")
    $("#left2").on("click",function(){
        var $left=$(this);
        if(moved==0)
            $left.addClass("disabled")
        if(!$left.is(".disabled")){
            moved--;//已经左移的图片个数-1
            //ul的marginLeft始终等于:-li宽度62*左移图片个数
            sm_img.stop(true).animate({"left":-146*moved},500)//不用px
            $("#right2").removeClass("disabled")
        }
    })
    $("#right2").on("click",function(){
        var $right=$(this);
        if(!$right.is(".disabled")){
            moved++;//已经左移的图片个数+1
            sm_img.stop(true).animate({"left":-146*moved},500)
            //让左边按钮去掉disabled class
            $("#left2").removeClass("disabled")
            //如果pics中的图片总个数-moved次数==4
            if(size-moved==7)
            //为右边按钮加上disabled class
            $right.addClass("disabled")
            
        }
    })
})