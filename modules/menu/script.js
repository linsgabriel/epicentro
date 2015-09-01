
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

    $('.menu-bar').click(function() {

      console.log(isActive);

      if (isActive === false) {
        
        $('.menu-bar').attr('src','assets/img/Menu/menu-bar-active.png');
        $('.menu ul').slideDown();
        isActive = true;

      } else if (isActive === true) {
        
        $('.menu-bar').attr('src','assets/img/Menu/menu-bar.png');
        $('.menu ul').slideUp();
        isActive = false;
      }
      
      
      // 
    });

    // $('.rotate').click(function() {

    //   alert('saco');
      
    //   // $('.icone-menu.rotate').removeClass('icone-menu rotate');
    //   // $('.menu ul').slideUp();
    // });

  // Trocar Logo

    if ($(window).width() < 786) {

      $('.menu .logo').attr('src', 'assets/img/Menu/icone.png');
    }

  // Aumentar largura

    var activate = $(window).height();

    $(window).scroll(function() {

      var menuTop = $('.menu:eq(0)').offset().top;

      if (menuTop < activate) {

        $('.menu:eq(0)').removeClass('full');
      }

      if (menuTop > activate) {

        $('.menu:eq(0)').addClass('menu full');
      } 
    });
