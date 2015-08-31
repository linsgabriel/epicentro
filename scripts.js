
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

    console.log($(window).width());

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
mostrarDescricao('junior');hidemap();

function hidemap() {
  var c = document.getElementById('ifr_mapa');
  var d = document.getElementById('iframe');
  var e = document.getElementById('fechamapa');
  var f = document.getElementById('formul');

  var modulo = document.getElementsByClassName('contato')[0];
  var titulo = document.getElementsByClassName('contato')[0].getElementsByTagName('h1')[0];

  modulo.style.paddingTop = '30px';
  titulo.style.marginTop = '.65em';
  
  var browser = navigator.appName;
  
  c.style.visibility = "hidden";
  c.style.display = "none";
  d.style.visibility = "hidden";
  d.style.display = "none";
  e.innerHTML = "<a class='close' onclick='showmap()'>Exibir mapa</a>";
  var nav = detect();
  if (nav == "Chrome")
  {
    f.style.visibility = "initial";
    var g = document.getElementsByClassName('menu full');
    g.style.visibility = "initial";
  }
  else
    f.style.top = "0";
}

function showmap() {
  var c = document.getElementById('ifr_mapa');
  var d = document.getElementById('iframe');
  var e = document.getElementById('fechamapa');
  var f = document.getElementById('formul');

  var modulo = document.getElementsByClassName('contato')[0];
  var titulo = document.getElementsByClassName('contato')[0].getElementsByTagName('h1')[0];

  var browser = navigator.appName;

  modulo.style.paddingTop = 0;
  titulo.style.marginTop = 0;
  
  c.style.visibility = "visible";
  c.style.display = "initial";
  d.style.visibility = "visible";
  d.style.display = "initial";
  e.innerHTML = "<a class='close' onclick='hidemap()'>Fechar mapa</a>";

  var nav = detect();
  if (nav == "Chrome")
  {
    scroll();
    f.style.visibility = "hidden";
    var g = document.getElementsByClassName('menu full');
    g.style.visibility = "initial";
  }
  else
    f.style.top = "60%";
}

function detect () {
  var isOpera = !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
  var isFirefox = typeof InstallTrigger !== 'undefined';
  var isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
  var isChrome = !!window.chrome && !isOpera;
  var isIE = /*@cc_on!@*/false || !!document.documentMode;
  
  if (isOpera)
    return "Opera";
  else if (isFirefox)
    return "Firefox";
  else if (isSafari)
    return "Safari";
  else if (isChrome)
    return "Chrome";
  else if (isIE)
    return "Explorer";
}

function scroll() {
    window.scrollBy(0, -70);
}
