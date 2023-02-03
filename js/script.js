$('.clients__wrap').slick({
  centerMode: true,
  arrows: false,
  centerPadding: '0',
  slidesToShow: 6,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        dots: true,
        arrows: false,
        centerMode: true,
        centerPadding: '15px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        dots: true,
        arrows: false,
        centerMode: true,
        centerPadding: '15px',
        slidesToShow: 1
      }
    }
  ]
});