$(document).ready(function() {
  var slideIndex = 0;
  var slides = $('.slide');
  var totalSlides = slides.length;
  var slideInterval = setInterval(nextSlide, 1500);
  var bulletArray = [];

  function nextSlide() {
    slides.eq(slideIndex).fadeOut();
    slideIndex = (slideIndex + 1) % totalSlides;
    slides.eq(slideIndex).fadeIn();
    updateBullet(slideIndex);
  }
  function updateBullet(index) {
    $('.slide_buttons .slide_btn').removeClass('active');
    bulletArray[index].addClass('active');
  }
  slides.each(function(index) {
    var $button = $('<a class="slide_btn">&bull;</a>');
    if (index === slideIndex) {
      $button.addClass('active');
    }
    $button.on('click', function() {
      clearInterval(slideInterval);
      slides.eq(slideIndex).fadeOut();
      slideIndex = index;
      slides.eq(slideIndex).fadeIn();
      updateBullet(slideIndex);
      slideInterval = setInterval(nextSlide, 3000);
    }).appendTo('.slide_buttons');
    bulletArray.push($button);
  });
});