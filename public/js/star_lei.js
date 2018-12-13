$(function(){
    if(location.search.indexOf("area=")!=-1){
        var area=decodeURI(
          location.search.split("=")[1]
        );
        var pno=0;
        function loadPage(no=0){
            pno=no;
            $.ajax({
                url:"http://localhost:3000/star/getlist2",
                type:"get",
                data:{area,pno},
                dataType:"json",
                success: function(output) {
                    var html=""
                    var ul=$(".starlist ul")
                    var {products,pageCount}=output
                    for(var p of products){
                        html+=`<li>
                        <a href="star_detail.html?star_name=${p.star_name}"><span><img src="${p.category}" alt="${p.star_name}"></span></a>
                        <a href="star_detail.html?star_name=${p.star_name}"><h3>${p.star_name}</h3></a>
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
// 判断分类导航进过页面跳转过来 后url中是否包含导航中a连接的href属性
    var urlstr=location.href;
    var urlstatus_lei=false;
    $(".t-03 h3 .stars>a").each(function(){
    if ((urlstr+"/" ).indexOf($(this).attr('href')) > -1&&$(this).attr('href')!="") {
        $(this).addClass("link"); urlstatus_lei = true;
        } 
        else 
        {
            $(this).removeClass("link");
        }
        });
        if (!urlstatus_lei) {$(".t-03 h3 .stars>a").eq(0).addClass("link"); }
})