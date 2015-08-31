$('.abre-mapa').click(function() {

  $('.map-modal').show();
  $('form').fadeOut();
});

$('.fecha-mapa').click(function() {

  $('.map-modal').hide();
  $('form').fadeIn();
});