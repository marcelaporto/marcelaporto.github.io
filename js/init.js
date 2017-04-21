$(document).ready(function(){
  $('.button-collapse').sideNav();
  $('.parallax').parallax();
  $('.carousel.carousel-slider').carousel({fullWidth: true});
  shift()
  });

var shift = setInterval(function(){
    $('.carousel').carousel('next');
}, 8000);
