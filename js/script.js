let cursor_cont = document.querySelector('.cursor-cont');
let cursor = document.querySelector('.cursor');
window.addEventListener('mousemove', function(e) {
    cursor_cont.style.top = e.pageY + 'px';
    cursor_cont.style.left = e.pageX + 'px';
});
window.addEventListener('scroll', function() {
    var parallaxBg = document.querySelector('.parallax-bg');
    var speed = parallaxBg.getAttribute('data-speed');
    var yPos = -(window.pageYOffset / speed);
    parallaxBg.style.transform = 'translate3d(0px, ' + yPos + 'px, 0px)';
  });
  $(document).ready(function(){
    $('.customer-logos').slick({
        slidesToShow: 3,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 3
            }
        }]
    });
});