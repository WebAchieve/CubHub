$(document).ready(function(){


    var nav = $('.navbar');
 
    $(window).scroll(function () {
      if ($(this).scrollTop() > 50) {
        nav.addClass("on");
      } else {
        nav.removeClass("on");
      }
    });

    $('.menu-icon').click(function() {
      $(this).toggleClass('active');
      $('.navbar-menu').toggleClass('toggle');
     
    })
   


    $('.testimonials-slider').slick({
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      adaptiveHeight: true,
      autoplay: true,
      autoplaySpeed: 3000,
      arrows: false,
      pauseOnHover: false,
    });

    $(window).on('scroll', function() {
      if ($('.scroll-to-top').length) {
          var strickyScrollPos = 100;
          if ($(window).scrollTop() > strickyScrollPos) {
              $('.scroll-to-top').fadeIn(400);
          } else if ($(this).scrollTop() <= strickyScrollPos) {
              $('.scroll-to-top').fadeOut(400);
          }
      }
     
    
  });
  if ($('.scroll-to-target').length) {
    $(".scroll-to-target").on('click', function() {
        var target = $(this).attr('data-target');
        // animate
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 1000);

        return false;

    });
}

    new WOW().init();
    
    $('.acordeon').on('click','h2',function(){
      $('.acordeon-item__title').removeClass('active');
      $(this).addClass('active');
      var t = $(this);
      var tp = t.next();
      var p = t.parent().siblings().find('p');
      tp.slideToggle();
      p.slideUp();
    });
    $('.orderpage-agree').on('click','label',function(){
      $('.orderpage-agree').addClass('active');

    });











});
