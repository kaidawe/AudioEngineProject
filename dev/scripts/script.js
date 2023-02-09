$('.BannerSection').slick({
  dots: true,
  infinite: true,
  fade: true,
  cssEase: 'linear',
})

$('.room-inner-carousel').slick({
  dots: true,
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 450,
      settings: 'unslick',
    },
  ],
})

$('.InTheNewsItems').slick({
  dots: true,
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 500,
      settings: 'unslick',
    },
  ],
})
