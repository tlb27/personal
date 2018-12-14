$(function(){
    if(location.search.indexOf("lid=")!=-1){
        var lid=decodeURI(
          location.search.split("=")[1]
        );
        $.ajax({
            url:"http://localhost:3000/star/photoDetail",
            type:"get",
            data:{lid},
            dataType:"json",
            success: function(res) {
                var html=""
                var viewTitle=$("#main .viewTitle")
                var viewk=$("#viewk>ul")
                var list=$("#list_son")
                var {title,imgs}=res
                var arr=imgs.split("?")
                html+=`<h1>${title}</h1>`
                viewTitle.html(html)
                var html=""
                var html1=""
                for(var p of arr){
                    html+=`<li>
                    <span><img src="${p}" ></span>
                    </li>`
                    html1+=`<div class="son"><span ><img src="${p}"></span> </div>`
                }
                viewk.html(html)
                list.html(html1)
                var moved=0//小图像列表中已经移动的次数
                var md_img=$("#viewk>ul")
                var sm_img=$("#list_son")
                var md_moved=0//大图像中移动的次数
                var size=sm_img.children().length
                //点击图片切换滚动图片
                sm_img.children().first().children().addClass("active")
                $("#left1").click(function(){
                    var left=$(this)
                    if(md_moved==0)
                    left.addClass("disabled")
                    if(!left.is(".disabled")){
                        md_moved--
                        if(md_moved<size-7&&moved==size-7){
                            moved=md_moved
                            sm_img.stop(true).animate({"left":-146*moved},500)
                            $("#right2").removeClass("disabled")
                        }
                        if(md_moved>6&&moved<size-7){
                            moved=md_moved-6
                            sm_img.stop(true).animate({"left":-146*moved},500) 
                            $("#left2").removeClass("disabled")
                            $("#right2").removeClass("disabled") 
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
                        if(md_moved<size-7&&moved==size-7){
                            moved=md_moved
                            sm_img.stop(true).animate({"left":-146*moved},500)  
                            $("#right2").removeClass("disabled")
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
                $("#right2").addClass("disabled")//为右边按钮添加disabled class
                $("#left2").on("click",function(){
                    var $left=$(this);
                    if(moved==0)
                        $left.addClass("disabled")
                    if(!$left.is(".disabled")){
                        moved--;//已经左移的图片个数-1
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
                }
            })
            var category="qbfl"
            var pno=0
        $.ajax({
            url:"http://localhost:3000/star/getphoto1",
            type:"get",
            dataType:"json",
            data:{category,pno},
            success:function(output){
                var {products}=output
                var html=""
                var recommend_list=$(".recommend_list")
                for(let i=0;i<6;i++){
                    var a=Math.floor(Math.random()*12)
                   var {lid,title,cover}=products[a]
                  html+=`<div><a href="star_photo.html?lid=${lid}"  title="${title}"><span><img src="${cover}"></span><h3>${title}</h3></a>
                  </div>`
                }
                recommend_list.html(html)
            }
        })
        $.ajax({
            url:"http://localhost:3000/star/other",
            type:"get",
            dataType:"json",
            data:{lid},
            success:function(res){
                var html=""
                var pagephoto=$(".page_starphoto")
                for(var t of res){
                    var {lid,title,cover}=t
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
                pagephoto.html(html)
            }
        })
    }
})