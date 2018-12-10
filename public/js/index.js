$(function(){
    //轮播图
    var timer=setInterval(task,4000)
    $("#banner")
			.mouseenter(function(){
				clearInterval(timer)
			})//return $d1
			.mouseleave(function(){
				timer=setInterval(task,3000)
			})
    function task(){
        var img=$("#banner>.left-lunbo>.in")
        var li=$("#banner>.right-lunbo>.js_lunbo>li.in-r")
        img.removeClass("in")
        li.removeClass("in-r")
        var next=img.next()
        if(next.hasClass("hidelist")){
            next.addClass("in")
            li.next().addClass("in-r")            
        }
        else{
        $(".hidelist").first().addClass("in")
        li.parent().children().first().addClass("in-r")
        }
    }
     $("#banner>.right-lunbo>.js_lunbo>li").on("mouseover",function(){
        var index=$(this).index();
         $(this).addClass("in-r")
         $(".hidelist").eq(`${index}`).addClass("in").siblings().removeClass("in")
     }).on("mouseout",function(){
         $(this).siblings().removeClass("in-r")
     })
     //楼层滚动
     var elevator=$("#elevator")//隐藏的电梯
     var ul=elevator.children()//电梯里的ul
     var floor=$("#main .hot") //获取每所有楼层
     var footer=$("#footer").offset().top;//获取底部
     $(window).scroll(function(){
        var scrollTop=document.body.scrollTop||document.documentElement.scrollTop;
        var firstfloor=floor.first().offset().top;//找出第一个楼层
        if(firstfloor<=scrollTop+innerHeight/2)//超出页面的距离
            elevator.show();
		else
            elevator.hide();

        floor.each((i,f)=>{
			var $f=$(f);
			var offsetTop=$f.offset().top;//当前元素距离页面顶端的距离
			if(offsetTop<=scrollTop+innerHeight/2){
				ul.children(":eq("+i+")").addClass("light")
					.siblings().removeClass("light");
			}//给当前楼层对应的li加上样式，其他的清除样式
        })
        ul.children().not("#totop").click(function(){
			//this->li
			var $li=$(this);//获取li
			var i=$li.index();//获取到当前li的编号
			var offsetTop=$("#main .hot:eq("+i+")").offset().top;//当前楼层距离页面顶端的距离
			$("html").stop(true).animate({
				scrollTop:offsetTop//楼层滚动
			},500);
        })
        ul.children().last().click(function(){
            $("html,body").stop(true).animate({
				scrollTop:0//楼层滚动
			},500);
        })
        
    })
     
})