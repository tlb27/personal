$(function(){
// 判断分类导航进过页面跳转过来 后url中是否包含导航中a连接的href属性
    var urlstr=location.href;
    var urlstatus_lei=false;
    $("#main>.pic_bar>ul>li>a").each(function(){
    console.log((urlstr+"/" ).indexOf($(this).attr('href')) > -1&&$(this).attr('href')!="")
    if ((urlstr+"/" ).indexOf($(this).attr('href')) > -1&&$(this).attr('href')!="") {
        $(this).addClass("link"); urlstatus_lei = true;
        } 
        else 
        {
            $(this).removeClass("link");
        }
        });
        if (!urlstatus_lei) {$("#main>.pic_bar>ul>li>a").eq(0).addClass("link"); }

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
    
    var st=$("#main>.fengye>.fenyebar>li.st")
    st.on("click",function(){
        var st=$(this)
        st.addClass("active").siblings().removeClass("active")
    })
})