$(function(){
    if(location.search.indexOf("category=")!=-1){
        var category=decodeURI(
          location.search.split("=")[1]
        );
        var pno=0;
        function loadPage(no=0){
            pno=no;
            $.ajax({
                url:"http://localhost:3000/star/getphoto1",
                type:"get",
                data:{category,pno},
                dataType:"json",
                success: function(output) {
                    var html=""
                    var pics_list=$("#pics-list")
                    var {products,pageCount}=output
                    for(var p of products){
                        html+=`<div><img src="${p.cover}" >
<<<<<<< HEAD
                        <a href="star_photo.html?lid=${p.lid}">
=======
                        <a href="star_photo.html?star_name=${p.star_name}">
>>>>>>> origin/master
                            <div class="cove">
                                <p>${p.title}</p>
                            </div>
                        </a>
                    </div>`
                    }
                    pics_list.html(html)
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
                    var $div =$('#pics-list>div');
                    $div.hover(function (ev) {
                        move.call(this , ev , true);
                    },function (ev) {
                        move.call(this , ev , false);
                    });
                    function move( ev , bool) {
                        var top = $(this).offset().top;
                        var bottom = top + $(this).height();
                        var left = $(this).offset().left;
                        var right = left + $(this).width();
                        var x = ev.pageX,
                            y = ev.pageY;
                        var sT = Math.abs(y - top),
                            sB = Math.abs(y - bottom),
                            sL = Math.abs(x - left),
                            sR = Math.abs(x - right);
                
                        var a = Math.min( sT , sB , sL , sR );
                        switch( a ){
                            case sT:
                                if (bool) {
                                    $(this).find('.cove').css({
                                        left:0,
                                        top:'-386px'
                                    }).animate({
                                        top:0
                                    },200);
                                } else {
                                    $(this).find('.cove').stop(1,1).animate({
                                        top:'-386px'
                                    },200);
                                }
                            break;
                
                            case sB:
                                if ( bool ) {
                                    $(this).find('.cove').css({
                                        left:0,
                                        top:'386px'
                                    }).animate({
                                        top:0
                                    },200);							
                                } else {
                                    $(this).find('.cove').stop(1,1).animate({
                                        top:'386px'
                                    },200);	
                                }
                
                            break;
                            case sL:
                                if ( bool ) {
                                    $(this).find('.cove').css({
                                        left:'-258px',
                                        top:0
                                    }).animate({
                                        left:0
                                    },200);							
                                } else {
                                    $(this).find('.cove').stop(1,1).animate({
                                        left:'-258px'
                                    },200);	
                                }
                
                            break;
                            case sR:
                                if ( bool ) {
                                    $(this).find('.cove').css({
                                        left:'258px',
                                        top:0
                                    }).animate({
                                        left:0
                                    },200);							
                                } else {
                                    $(this).find('.cove').stop(1,1).animate({
                                        left:'258px'
                                    },200);	
                                }
                
                            break;
                
                
                
                        }
                
                    };
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
// 判断分类导航进过页面跳转过来 后url中是否包含导航中a连接的href属性
    var urlstr=location.href;
    var urlstatus_lei=false;
    $("#main>.pic_bar>ul>li>a").each(function(){
    if ((urlstr+"/" ).indexOf($(this).attr('href')) > -1&&$(this).attr('href')!="") {
        $(this).addClass("link"); urlstatus_lei = true;
        } 
        else 
        {
            $(this).removeClass("link");
        }
        });
    if (!urlstatus_lei) {$("#main>.pic_bar>ul>li>a").eq(0).addClass("link"); }
   
    var st=$("#main>.fengye>.fenyebar>li.st")
    st.on("click",function(){
        var st=$(this)
        st.addClass("active").siblings().removeClass("active")
    })
})