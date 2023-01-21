window.onload=function(){
    //  페이지에 나타나는 효과
    AOS.init();
}
//  shoes/acc 선택시 나타나는 배경색과 폰트
$(function(){
    $(".choice> .hh").on("click", function(){
        no=$(this).index();
        $(".hh").css({"background":"white","color":"black","font-weight": "400"});
        $(".choes"+no).css({"background":"black","color":"white","font-weight": "bold"});
    })
    // shoes를 눌렀을 때 shoes상품 display =block
    $(".choice> .choes0").on("click", function(){
        $(".two").css("display","none");
        $(".one").css("display","block");
    })
    //  acc를 눌렀을 때 acc상품 display =block
    $(".choice> .choes1").on("click", function(){
        $(".one").css("display","none");
        $(".two").css("display","block");
    })
    // 모바일버전 메뉴를 눌렀을때
    $(".atMenu").slideUp();
    // 메뉴의 다른 항목들은 반응하지 않고 클릭한 항목만 slideDown 한번 더 누르면 slideUp
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
    // 모바일에서 메뉴의 모양을 삼선이랑 엑스로 바뀌게함
    js.classList.toggle("change")
    // 모바일버전의 검정배경의 상세메뉴는 메뉴를 클릭해야 나타남
    if($(".at1").css("display") == "none") {
        $(".at1").show();
    }
    else {
        $(".at1").hide();
    }
    
}