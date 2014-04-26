function getScrollTop(){
    console.log($(window).scrollTop());
    if ($(window).scrollTop() < 2000){
        $("#footer").css("display","none");
    }else{
        $("#footer").css("display","block");
    }
}
$(window).on("load scroll", getScrollTop);