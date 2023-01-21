let i, homeTex_more, homeTex_more_sw=0, sports_more, sports_more_sw=0, care_more, care_more_sw=0;
// 웹버전
let sports_m_more, sports_m_more_sw=0, care_m_more,care_m_more_sw=0;
// 모바일버전
const textA=["room","kitchen","bathroom"]
const textB=["men","women"]
const textB_m=["men","women"]
const textC=["Repair & care","Laundry & stains"]
const textC_m=["Repair & care","Laundry & stains"]
window.onload=function(){
    // 하단에 "top"글씨 누르면 페이지 상단으로 올라가기
    $(".top").on("click", function() {   
        $("html, body").animate({"scrollTop": "0"},500);
    })
    // 페이지에 나타나는 효과 (줌, 오른쪽에서 나타나기, 왼쪽에서 나타나기 등)
    AOS.init();
    //  HOME DECORATION 에서 "more"를 눌렀을때 나타나는 메뉴3개에 textA 배열 읽기
    for(i=0; i<3; i++){
        this["more"+i]=document.getElementById("more"+i);
        this["more"+i].innerHTML=textA[i];
    }
    // sports 에서 "more"를 눌렀을때 나타나는 메뉴2개에 textB 배열 읽기
    for(i=0; i<2; i++){
        this["sport"+i]=document.getElementById("sport"+i);
        this["sport"+i].innerHTML=textB[i];
    } 
    //  sports 모바일 버전 에서 "more"를 눌렀을때 나타나는 메뉴2개에 textB_m 배열 읽기
       for(i=0; i<2; i++){
        this["sport_m"+i]=document.getElementById("sport_m"+i);
        this["sport_m"+i].innerHTML=textB_m[i];
    }
    // take care 에서 "more"를 눌렀을때 나타나는 메뉴2개에 textC 배열 읽기
    for(i=0; i<2; i++){
        this["care"+i]=document.getElementById("care"+i);
        this["care"+i].innerHTML=textC[i];
    }
    // take care 모바일버전 에서 "more"를 눌렀을때 나타나는 메뉴2개에 textC_m배열 읽기
    for(i=0; i<2; i++){
        this["take_m"+i]=document.getElementById("take_m"+i);
        this["take_m"+i].innerHTML=textC_m[i];
    }
    // HOME DECORATION "more"버튼의 id =mm 을 클릭하면 mm_func 함수 작용
    Hom_more=document.querySelector("#Hom_more");
    Hom_more.addEventListener("click", Hom_func);
    // sports "more"버튼의 id =mmm 을 클릭하면 mmm_func 함수 작용
    sportsweb_more=document.querySelector("#sportsweb_more");
    sportsweb_more.addEventListener("click", sportsweb_func);
     // take care "more"버튼의 id =mmmm 을 클릭하면 mmmm_func 함수 작용
    tak_more=document.querySelector("#tak_more");
    tak_more.addEventListener("click", tak_func);
    // sports 모바일버전 에서 "more"버튼의 id=mobile을 클릭하면 mobile_func의함수 작용
    mobile=document.querySelector("#mobile");
    mobile.addEventListener("click", mobile_func);
    // / take care 모바일버전 에서 "more"버튼의 id=take_m_more을 클릭하면 takecare_func의함수 작용
    take_m_more=document.querySelector("#take_m_more");
    take_m_more.addEventListener("click", takecare_func);

    $(window).scroll(function () {
        var yy = $(window).scrollTop();
        // 스크롤 3500 이상 내렸을때 h&m place에서 첫번째 줄은  top: 200에서 멈춤
        if (yy >3500 ) {                        
            $(".big1").css({ "position": "fixed", "top": "200px" });
        }
        // 스크롤이 4000보다 작을경우 top:3700px로 위치변경
        else if(yy < 4000){
            $(".big1").css({ "position": "absolute", "top": "3700px" });
        }
        // 스크롤을 3770 이상 내렸을 경우에 h&m place에서 두번째줄은  top: 200에서 멈춤
        if (yy > 3770) {
            $(".big2").css({ "position": "fixed", "top": "200px"});
        }
        // 스크롤이 4000보다 작을경우 top:3970px로 위치변경
        else if(yy < 4000){
         $(".big2").css({ "position": "absolute", "top": "3970px" });
        }
        // 스크롤을 4040 이상 내렸을 경우엔 h&m place에서 세번째줄은 top: 200에서 멈춤
        if (yy > 4040) {
            $(".big3").css({ "position": "fixed", "top": "200px"});
        }
        // 스크롤이 4000보다 작을경우 top:4240px로 위치변경
        else if(yy < 4000){
             $(".big3").css({ "position": "absolute", "top": "4240px" });
        }
        // 스크롤을 4025 이상 내렸을경우 h&m place 3줄 위치를 top:4240px로 변경
        if(yy > 4025){
            $(".big1").css({ "position": "absolute", "top": "4240px" });
        }
        if(yy > 4025){
            $(".big2").css({ "position": "absolute", "top": "4240px" });
        }
        if(yy > 4025){
            $(".big3").css({ "position": "absolute", "top": "4240px" });
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
function Hom_func(){
    homeTex_more=document.querySelector(".homeTex_more");
    if(homeTex_more_sw==0) {
        homeTex_more.style.display="block";
        homeTex_more_sw=1;
    }
    else {
        homeTex_more.style.display="none";
        homeTex_more_sw=0;
    }
}
function sportsweb_func(){
    sports_more=document.querySelector(".sports_more");
    if(sports_more_sw==0) {
        sports_more.style.display="block";
        sports_more_sw=1;
    }
    else {
        sports_more.style.display="none";
        sports_more_sw=0;
    }
}
function mobile_func(){
    sport_m_more=document.querySelector(".sport_m_more");
    if(sports_m_more_sw==0){
        sport_m_more.style.display="block";
        sports_m_more_sw=1;
    }
    else {
        sport_m_more.style.display="none";
        sports_m_more_sw=0;
    }
}
function tak_func(){
    care_more=document.querySelector(".care_more");
    if(care_more_sw==0) {
        care_more.style.display="block";
        care_more_sw=1;
    }
    else {
        care_more.style.display="none";
        care_more_sw=0;
    }
}
function takecare_func(){
    take_m_moreTwo=document.querySelector(".take_m_moreTwo");
    if(care_m_more_sw==0){
        take_m_moreTwo.style.display="block";
        care_m_more_sw=1;
    }
    else{
        take_m_moreTwo.style.display="none";
        care_m_more_sw=0;
    }
}
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
