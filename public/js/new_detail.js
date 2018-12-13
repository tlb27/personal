$(function(){
    $("ul.page_rpic li a #zhezao").hover(function(){
        console.log($(this))
        $(this).children().children().eq(0).stop().animate({ width:"105%"},1000).removeClass("r").addClass("l")
        $(this).children().children().eq(3).stop().animate({ width:"105%"},1000).removeClass("l").addClass("r")
        $(this).children().children().eq(1).stop().animate({ height:"110%"},1000).removeClass("t").addClass("b")
        $(this).children().children().eq(2).stop().animate({ height:"110%"},1000).removeClass("b").addClass("t")
    },function(){
        $(this).children().children().eq(0).stop().animate({ width:"0"},500).removeClass("l").addClass("r")
        $(this).children().children().eq(3).stop().animate({ width:"0"},500).removeClass("r").addClass("l")
        $(this).children().children().eq(1).stop().animate({ height:"0"},500).removeClass("b").addClass("t")
        $(this).children().children().eq(2).stop().animate({ height:"0"},500).removeClass("b").addClass("t")
    })
})