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