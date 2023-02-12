// Burger

$(document).ready(function () {
  $('.header__burger').click(function (event) {
    $('.header__burger,.header__nav,.header__burger-inner').toggleClass('open');
  });
})

// Search

$(document).ready(function () {
  $('.header__search,.header__input').click(function (event) {
    $('.header__search,.header__input').toggleClass('active');
  });
})

// Slider

$('.clients__wrap').slick({
  arrows: false,
  centerPadding: '0',
  slidesToShow: 6,
  responsive: [
    {
      breakpoint: 1279,
      settings: {
        dots: true,
        arrows: false,
        centerPadding: '15px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 767,
      settings: {
        dots: true,
        arrows: false,
        centerPadding: '15px',
        slidesToShow: 1
      }
    }
  ]
});