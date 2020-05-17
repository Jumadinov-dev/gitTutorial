window.onload = function() {
    var scrolled;
    var timer;

    document.getElementById('top').onclick = function() {
        scrolled = window.pageYOffset;
        scrollToTop();
    }
    function scrollToTop() {
        if (scrolled > 0) {
            window.scrollTo(0, scrolled);
            scrolled = scrolled - 180;
            timer = setTimeout(scrollToTop, 30);
        }
        else {
            clearTimeout(timer);
            window.scrollTo(0,0);
        }
    }
}
$(document).ready(function(){

    $('.js-button-campaing').click(function(){
        $('.catalog__padding').css('filter', 'blur(5px)');
        $('.js-overlay-campaing').fadeIn();
        $('.js-overlay-campaing').addClass('disable');
    });
});
$(document).mouseup(function(e) {

    var popap = $('.js-popap-campaing');
    if (e.target!=popap[0]&&popap.has(e.target).length === 0) {
        $('.js-overlay-campaing').fadeOut();
        $('.catalog__padding').css('filter', 'none');
    }

});