//myslick.js
$(document).ready(function(){
// To use lazy loading, set a data-lazy attribute
// on your img tags and leave off the src

$('.carousel').slick({
  lazyLoad: 'ondemand',
  dots: true,
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 5,
  responsive: [
    {
      breakpoint: 500,
      settings: {
        infinite: true,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 3
      }
    } ]
});

});