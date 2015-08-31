var isOpera = !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
var isFirefox = typeof InstallTrigger !== 'undefined';
var isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
var isChrome = !!window.chrome && !isOpera;
var isIE = /*@cc_on!@*/false || !!document.documentMode;

if (isIE) {
  document.getElementsByClassName('frase')[0].className = "section frase nao-fixo";
  document.getElementsByClassName('contato')[0].className = "section frase nao-fixo";
}