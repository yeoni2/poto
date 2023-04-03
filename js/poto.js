window.onload=function(){
    // 하단에 "top"글씨 누르면 페이지 상단으로 올라가기
    $(".top").on("click", function() {   
        $("html, body").animate({"scrollTop": "0"},500);
    })
    // 페이지에 나타나는 효과 (줌, 오른쪽에서 나타나기, 왼쪽에서 나타나기 등)
    AOS.init();
    $(window).scroll(function () {
        var yy = $(window).scrollTop();
        console.log(yy);
        if (yy >1687 ) {                        
            $(".big1").css({ "position": "fixed", "top": "200px" });
        }
        // 스크롤이 4000보다 작을경우 top:3700px로 위치변경
        else if(yy < 2230){
            $(".big1").css({ "position": "absolute", "top": "1900px" });
        }
        // 스크롤을 3770 이상 내렸을 경우에 h&m place에서 두번째줄은  top: 200에서 멈춤
        if (yy > 1960) {
            $(".big2").css({ "position": "fixed", "top": "200px"});
        }
        // 스크롤이 4000보다 작을경우 top:3970px로 위치변경
        else if(yy < 2230){
         $(".big2").css({ "position": "absolute", "top": "2170px" });
        }
        // 스크롤을 4040 이상 내렸을 경우엔 h&m place에서 세번째줄은 top: 200에서 멈춤
        if (yy > 2230) {
            $(".big3").css({ "position": "fixed", "top": "200px"});
        }
        // 스크롤이 4000보다 작을경우 top:4240px로 위치변경
        else if(yy < 2230){
             $(".big3").css({ "position": "absolute", "top": "2440px" });
        }
        // 스크롤을 4025 이상 내렸을경우 h&m place 3줄 위치를 top:4240px로 변경
        if(yy > 2240){
            $(".big1").css({ "position": "absolute", "top": "2440px" });
        }
        if(yy > 2240){
            $(".big2").css({ "position": "absolute", "top": "2440px" });
        }
        if(yy > 2240){
            $(".big3").css({ "position": "absolute", "top": "2440px" });
        }
    });
 }
// 제이쿼리
$(function(){
    // men/women 선택시 나타나는 배경색과 폰트
    $(".gender> .gg").on("click", function(){
        no=$(this).index();
        $(".gg").css({"background":"white","font-weight": "400"});
        $(".gender"+no).css({"background":"rgba(236, 229, 229, 0.76)","font-weight": "bold"});
    })
    // men 선택시 나타나는 dislpay 표시(이미지,화살표 등) 
    $(".gender> .gender0").on("click", function(){
        $(".women").css("display","none");
        $(".men").css("display","block");
        $(".left").css("display","none");
        $(".right").css("display","none");
        $(".le").css("display","block");
        $(".ri").css("display","block");
    })
    // men의 왼쪽 버튼을 누르면 이동하는 이미지
    $(".le").on("click", function () {
        $(".boy>li:last").prependTo(".boy");
        $(".boy").css("left","-=25%");
        $(".boy").animate({"left":"+=25%"},100);
     })
    // men의 오른쪽 버튼을 누르면 이동하는 이미지
     $(".ri").on("click", function(){
        $(".boy").animate({"left":"-=25%"},100,
        function(){
            $(".boy> li:first").appendTo(".boy");
            $(".boy").css("left","+=25%");
        })
    })
    // women선택시 dislpay 표시(이미지,화살표 등) 
    $(".gender> .gender1").on("click", function(){
        $(".men").css("display","none");
        $(".women").css("display","block");
        $(".left").css("display","block");
        $(".right").css("display","block");
        $(".le").css("display","none");
        $(".ri").css("display","none");
    })
    // women의 왼쪽 버튼을 누르면 이동하는 이미지
    $(".left").on("click", function () {
        $(".girl>li:last").prependTo(".girl");
        $(".girl").css("left","-=25%");
        $(".girl").animate({"left":"+=25%"},100);
     })
     // women의 오른쪽 버튼을 누르면 이동하는 이미지
    $(".right").on("click", function(){
        $(".girl").animate({"left":"-=25%"},100, function(){
            $(".girl> li:first").appendTo(".girl");
            $(".girl").css("left","+=25%");
        })
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
// 함수
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
