// 공통
// top btn
$(document).ready(function(){
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