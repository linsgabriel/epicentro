
// Jumbotron

var frase = $('.jumbotron .frases p');

var i = 0;
var length = $('.jumbotron .frases p').length;

// console.log(length);

// setInterval(function() {

//   // console.log(frase[0]);

//   console.log(i);

//   if (i < length - 1) {

//     i++;

//   } else {

//     i = 0;
//   }
// },1000);

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
// Portfolio

  // Navegação

    $('.section.portfolio .laptop .nav-right').click(function() {

      $('.section.portfolio ul').css('left', '-100%');
    });

    $('.section.portfolio .laptop .nav-left').click(function() {

      $('.section.portfolio ul').css('left', '0');
    });


  // Mostrar sites

    function mostraImagem(arg) {

      $('.icone.'+arg).click(function() {
        $('.laptop-site').fadeOut(function() {

          $('.laptop-site').attr('src', 'assets/img/Portfolio/'+arg+'.jpg');
        });
        
        $('.laptop-site').fadeIn();
      });
    }

    mostraImagem('estudio-avante');
    mostraImagem('pousada-domus');
    mostraImagem('pizzaria-doritos');
    mostraImagem('descubra-ubatuba');
    mostraImagem('vilago-imoveis');
    mostraImagem('raddar');
    mostraImagem('a-maca');
    mostraImagem('papilon');
    mostraImagem('preventser');
    mostraImagem('apave');
// Equipe

function mostrarDescricao(arg) {

  $('.membro.'+arg+'').hover(function() {

    if ($('.descricao-membro.'+arg+'').css('display') != 'list-item') {

      $('.descricao-membro').slideUp();
      $('.descricao-membro.'+arg+'').slideDown();
    }

  console.log();
});
}

mostrarDescricao('alvaro');
mostrarDescricao('gabriel');
mostrarDescricao('jessica');
mostrarDescricao('joao');
mostrarDescricao('junior');