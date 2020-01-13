$(document).ready(function(){
    $('.nav-icon').click(function(){
        console.log('click');
        $('.header-wrap').toggleClass('opening');
        //$('.header-menu').toggleClass('opening');
    })
    
    $('.main-slider').slick({
        lazyLoad:'progressive',
        autoplay: false,
    });
    $('.tes-slider').slick(
        {
            dots: true,
            infinite: true,
            autoplay: true,
            speed: 400,
            autoplaySpeed: 3000,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
              {
                breakpoint: 1199,
                settings: {
                  slidesToShow: 2
                }
              },
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 1
                }
              }
            ]
        }
    );

    $('.pro-tab-list li').click(function(event){
        //event.preventDefault();
        $('.pro-tab-list li').removeClass('active');
        $(this).addClass('active');
        var src = $(this).attr('data-link');
        $('.pro-tab-content').children().removeClass('active');
        $('.pro-tab-content').find(src).addClass('active');
    })

    $('.counter').counterUp({
      delay: 10,
      time: 1000
    });

    $('.search-open').click(function(){
      $('.header-search').slideToggle();
    })
})