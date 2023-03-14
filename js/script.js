let cursor_cont = document.querySelector('.cursor-cont');
let cursor = document.querySelector('.cursor');
window.addEventListener('mousemove', function(e) {
    cursor_cont.style.top = e.pageY + 'px';
    cursor_cont.style.left = e.pageX + 'px';
});
// window.addEventListener('scroll', function() {
//     var parallaxBg = document.querySelector('.parallax-bg');
//     var speed = parallaxBg.getAttribute('data-speed');
//     var yPos = -(window.pageYOffset / speed);
//     parallaxBg.style.transform = 'translate3d(0px, ' + yPos + 'px, 0px)';
//   });
  

$(document).ready(function(){
    $(".testimonial .indicators li").click(function(){
      var i = $(this).index();
      var targetElement = $(".testimonial .tabs li");
      targetElement.eq(i).addClass('active');
      targetElement.not(targetElement[i]).removeClass('active');
              });
              $(".testimonial .tabs li").click(function(){
                  var targetElement = $(".testimonial .tabs li");
                  targetElement.addClass('active');
                  targetElement.not($(this)).removeClass('active');
              });
          });
  $(document).ready(function(){
      $(".slider .swiper-pagination span").each(function(i){
          $(this).text(i+1).prepend("0");
      });
  });