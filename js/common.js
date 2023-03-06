// 공통
$(document).ready(function(){
    //menubtn
    $('.show-side').click(function(){
        $('.side-menu').show();
        $('body').addClass('on')
    })
    $('.btn-menu-close').click(function(){
        $('.side-menu').hide();
        $('body').removeClass('on')
    })
    //menubtn keydown
    $('.show-side').on('keydown',function(e){
        if (e.keyCode === 13){
            $('body').addClass('on')
        }
    })
    $('.btn-menu-close').on('keydown',function(e){
        if (e.keyCode === 13){
            $('body').removeClass('on')
        }
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