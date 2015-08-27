// Menu

$(window).scroll(function() {

  var menuTop = $('.menu:eq(0)').offset().top;

  if (menuTop === 0) {

    $('.menu:eq(0)').removeClass('transparencia');
  }

  if (menuTop > 0) {

    $('.menu:eq(0)').addClass('menu transparencia');
  } 
});