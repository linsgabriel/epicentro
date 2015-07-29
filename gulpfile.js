var gulp      = require('gulp'),
    concat    = require('gulp-concat'),
    uglify    = require('gulp-uglify'),
    minifyCss = require('gulp-minify-css'),

    global_css_path  = 'assets/global/global.css';
    modules_js_path  = 'modules/*/script.js',
    modules_css_path = 'modules/*/style.css',

    jumbotron_html  = 'modules/jumbotron/index.html',
    menu_html       = 'modules/menu/index.html',
    servicos_html   = 'modules/servicos/index.html',
    portifolio_html = 'modules/portifolio/index.html',
    frases_html     = 'modules/frases/index.html',
    equipe_html     = 'modules/equipe/index.html',
    contato_html    = 'modules/contato/index.html',
    footer_html     = 'modules/footer/index.html';


// Markup
// Monta o html a partir dos módulos

gulp.task('markup', function() {

  gulp.src([jumbotron_html, menu_html, servicos_html, portifolio_html, frases_html, equipe_html, contato_html, footer_html,])
    .pipe(concat('index.html'))
    .pipe(gulp.dest('./'));
});

// Scripts
// Faz merge de todos os .js num único arquivo e minifica

gulp.task('scripts', function() {

  // gulp.src(modules_js_path)
  //   .pipe(concat('webModules.js'))
  //   .pipe(gulp.dest('./'));

  gulp.src(modules_js_path)
    .pipe(concat('scripts.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./'));
});

// Styles
// Faz merge de todos os .js num único arquivo e minifica

gulp.task('styles', function() {

  gulp.src([global_css_path, modules_css_path])
  .pipe(concat('styles.min.css'))
  .pipe(minifyCss())
  .pipe(gulp.dest('./'));
});


// Default
// Roda as tasks registradas usando somento o comando 'gulp'

gulp.task('default', ['markup','scripts','styles']);
