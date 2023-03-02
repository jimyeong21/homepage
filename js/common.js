// 공통
$(document).ready(function(){
    //menubtn
    $('.show-side').click(function(){
        $('.side-menu').show();
    })
    $('.btn-menu-close').click(function(){
        $('.side-menu').hide();
    })
    // top btn
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.btn-top').fadeIn(300);
        } else {
            $('.btn-top').fadeOut(300);
        }
    });
    $('.btn-top').click(function (event) {
        event.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, 300);
    });
})