window.onload=function(){
    AOS.init();
}
$(function(){
    $(".choice> .hh").on("click", function(){
        no=$(this).index();
        $(".hh").css({"background":"white","color":"black","font-weight": "400"});
        $(".choes"+no).css({"background":"black","color":"white","font-weight": "bold"});
    })

    $(".choice> .choes0").on("click", function(){
        $(".two").css("display","none");
        $(".one").css("display","block");
    })

    $(".choice> .choes1").on("click", function(){
        $(".one").css("display","none");
        $(".two").css("display","block");
    })

    $(".atMenu").slideUp();
    $(".title").on("click", function(){ 
    $(".atMenu").slideUp();
    if ($(this).next().css("display") == "none") {
        $(this).next().slideDown();
    }
    else {            
        $(".atMenu").slideUp();
    }
    })
})
function bar_func(js){
    js.classList.toggle("change")
    if($(".at1").css("display") == "none") {
        $(".at1").show();
    }
    else {
        $(".at1").hide();
    }
    
}