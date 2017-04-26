$(document).ready(function(){
  $('.button-collapse').sideNav();
  $('.parallax').parallax();
  $('.carousel.carousel-slider').carousel({fullWidth: true});
  const panels = document.querySelectorAll('.panel');
  console.log(panels)
  // shift();
  panels.forEach(panel => panel.addEventListener('click', toggleOpen));
  panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
});

// var shift = setInterval(function(){
//     $('.carousel').carousel('next');
// }, 8000);

function toggleOpen() {
  console.log('Hello');
  this.classList.toggle('open');
}

function toggleActive(e) {
  console.log(e.propertyName);
  if (e.propertyName.includes('flex')) {
    this.classList.toggle('open-active');
  }
}
