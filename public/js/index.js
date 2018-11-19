$(function(){
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
         console.log(index)
     }).on("mouseout",function(){
         $(this).siblings().removeClass("in-r")
     })
})