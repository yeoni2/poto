let i, homeTex_more, homeTex_more_sw=0, sports_more, sports_more_sw=0, care_more, care_more_sw=0;
let sports_m_more, sports_m_more_sw=0, care_m_more,care_m_more_sw=0;
const textA=["room","kitchen","bathroom"]
const textB=["men","women"]
const textB_m=["men","women"]
const textC=["Repair & care","Laundry & stains"]
const textC_m=["Repair & care","Laundry & stains"]
window.onload=function(){

    $(".top").on("click", function() {   
        $("html, body").animate({"scrollTop": "0"},500);
    })
    AOS.init();

    for(i=0; i<3; i++){
        this["more"+i]=document.getElementById("more"+i);
        this["more"+i].innerHTML=textA[i];
    }
    for(i=0; i<2; i++){
        this["sport"+i]=document.getElementById("sport"+i);
        this["sport"+i].innerHTML=textB[i];
    } 
    for(i=0; i<2; i++){
        this["care"+i]=document.getElementById("care"+i);
        this["care"+i].innerHTML=textC[i];
    }
    for(i=0; i<2; i++){
        this["sport_m"+i]=document.getElementById("sport_m"+i);
        this["sport_m"+i].innerHTML=textB_m[i];
    }
    for(i=0; i<2; i++){
        this["take_m"+i]=document.getElementById("take_m"+i);
        this["take_m"+i].innerHTML=textC_m[i];
    }
    mm=document.querySelector("#mm");
    mm.addEventListener("click", mm_func);
    mmm=document.querySelector("#mmm");
    mmm.addEventListener("click", mmm_func);
    mmmm=document.querySelector("#mmmm");
    mmmm.addEventListener("click", mmmm_func);
    mobile=document.querySelector("#mobile");
    mobile.addEventListener("click", mobile_func);
    take_m_more=document.querySelector("#take_m_more");
    take_m_more.addEventListener("click", takecare_func);
    $(window).scroll(function () {
        var yy = $(window).scrollTop();
        console.log(yy);
        if (yy >3500 ) {                        
            $(".big1").css({ "position": "fixed", "top": "200px" });
        }
        else if(yy < 4000){
            $(".big1").css({ "position": "absolute", "top": "3700px" });
        }
        if (yy > 3770) {
            $(".big2").css({ "position": "fixed", "top": "200px"});
        }
        else if(yy < 4000){
         $(".big2").css({ "position": "absolute", "top": "3970px" });
        }
        if (yy > 4040) {
            $(".big3").css({ "position": "fixed", "top": "200px"});
        }
        else if(yy < 4000){
             $(".big3").css({ "position": "absolute", "top": "4240px" });
        }
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

$(function(){
    $(".gender> .gg").on("click", function(){
        no=$(this).index();
        $(".gg").css({"background":"white","font-weight": "400"});
        $(".gender"+no).css({"background":"rgba(236, 229, 229, 0.76)","font-weight": "bold"});
    })

    $(".gender> .gender0").on("click", function(){
        $(".women").css("display","none");
        $(".men").css("display","block");
        $(".left").css("display","none");
        $(".right").css("display","none");
        $(".le").css("display","block");
        $(".ri").css("display","block");
    })
    $(".le").on("click", function () {
        $(".boy>li:last").prependTo(".boy");
        $(".boy").css("left","-=25%");
        $(".boy").animate({"left":"+=25%"},100);
     })
     $(".ri").on("click", function(){
        $(".boy").animate({"left":"-=25%"},100,
        function(){
            $(".boy> li:first").appendTo(".boy");
            $(".boy").css("left","+=25%");
        })
    })

    $(".gender> .gender1").on("click", function(){
        $(".men").css("display","none");
        $(".women").css("display","block");
        $(".left").css("display","block");
        $(".right").css("display","block");
        $(".le").css("display","none");
        $(".ri").css("display","none");
    })
    $(".left").on("click", function () {
        $(".girl>li:last").prependTo(".girl");
        $(".girl").css("left","-=25%");
        $(".girl").animate({"left":"+=25%"},100);
     })
    $(".right").on("click", function(){
        $(".girl").animate({"left":"-=25%"},100, function(){
            $(".girl> li:first").appendTo(".girl");
            $(".girl").css("left","+=25%");
        })
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
function mm_func(){
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
function mmm_func(){
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
function mmmm_func(){
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
    js.classList.toggle("change")
    if($(".at1").css("display") == "none") {
        $(".at1").show();
    }
    else {
        $(".at1").hide();
    }
    
}
