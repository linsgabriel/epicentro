
// Menu

  // Transparencia

    // $(window).scroll(function() {

    //   var menuTop = $('.menu:eq(0)').offset().top;

    //   if (menuTop === 0) {

    //     $('.menu:eq(0)').removeClass('transparencia');
    //   }

    //   if (menuTop > 0) {

    //     $('.menu:eq(0)').addClass('menu transparencia');
    //   } 
    // });

  // Mobile

    var isActive = false;

    $('.icone-menu').click(function() {

      console.log(isActive);

      if (isActive === false) {
        
        $('.icone-menu').addClass('rotate');
        $('.menu ul').slideDown();
        isActive = true;

      } else if (isActive === true) {
        
        $('.icone-menu').removeClass('rotate');
        $('.menu ul').slideUp();
        isActive = false;
      }
      
      
      // 
    });

    $('.rotate').click(function() {

      alert('saco');
      
      // $('.icone-menu.rotate').removeClass('icone-menu rotate');
      // $('.menu ul').slideUp();
    });
