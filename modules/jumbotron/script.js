$(function() {
  var slider = $('.banner').unslider({
    dots: false,
    delay: 4000,
    speed: 800,
    fluid: true,
    keys: false
  });

  var data = slider.data('unslider');
  $('.thumbs')
  .on('click', 'li', function() {
    data.move($(this).index());
  })
  .on('mouseover', function() {
   	data.stop();
  })
  .on('mouseout', function() {
   	data.start();
  })
});