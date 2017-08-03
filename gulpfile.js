var gulp = require('gulp')
var rename = require('gulp-rename')
var imageResize = require('gulp-image-resize')
var favicons = require('gulp-favicons')
var uglify = require('gulp-uglify')
var concat = require('gulp-concat')
var sass = require('gulp-ruby-sass')
var cleanCSS = require('gulp-clean-css')
var sourcemaps = require('gulp-sourcemaps')
var newer = require('gulp-newer')
var runSequence = require('run-sequence')
var watch = require('gulp-watch')
var purify = require('gulp-purifycss')

gulp.task('default', function () {
  return gulp.src('assets/semantic/dist/*.css')
  .pipe(gulp.dest('assets/css')),

  gulp.src('assets/semantic/dist/*.js')
  .pipe(gulp.dest('assets/js')),

  gulp.src('assets/semantic/src/themes/default/assets/fonts/*')
  .pipe(gulp.dest('assets/css/themes/default/assets/fonts'))
})

gulp.task('sass', () =>
  sass('./assets/css/main.scss')
    .on('error', sass.logError)
    .pipe(gulp.dest('./assets/css/'))
)

var jsAllArray = [
  './assets/js/jquery.min.js',
  './assets/js/lightbox.min.js',
  './assets/js/semantic.js',
  './assets/js/site.js'
]
var jsPortfolioArray = [
  './assets/js/jquery.min.js',
  './assets/js/semantic.js',
  './assets/js/isotope.pkgd.js',
  './assets/js/site.js'
]
var jsFrontArray = [
  './assets/js/jquery.min.js',
  './assets/js/semantic.js',
  './assets/js/site.js'
]

var cssAllArray = [
  './assets/css/semantic.css',
  './assets/css/lightbox.min.css',
  './assets/css/main.css'
]
var cssFrontArray = [
  './assets/css/semantic.css',
  './assets/css/main.css'
]
var cssSPAArray = [
  './assets/css/semantic.css',
  './assets/css/main.css',
  './assets/css/spa.css'
]
var cssPortfolioArray = [
  './assets/css/semantic.css',
  './assets/css/lightbox.min.css',
  './assets/css/main.css'
]

gulp.task('minify', function () {
  gulp.src(jsFrontArray)
    .pipe(uglify())
    .pipe(concat('bundle-front.min.js'))
    .pipe(gulp.dest('./assets/js/')),

  gulp.src(cssFrontArray)
    .pipe(concat('bundle-front.min.css'))
    .pipe(cleanCSS({compatibility: 'ie8', keepSpecialComments: 0}))
    .pipe(gulp.dest('./assets/css/')),

  gulp.src(jsPortfolioArray)
    .pipe(uglify())
    .pipe(concat('bundle-work.min.js'))
    .pipe(gulp.dest('./assets/js/')),

  gulp.src(cssPortfolioArray)
    .pipe(concat('bundle-work.min.css'))
    .pipe(cleanCSS({compatibility: 'ie8', keepSpecialComments: 0}))
    .pipe(gulp.dest('./assets/css/')),

  gulp.src(jsAllArray)
    .pipe(uglify())
    .pipe(concat('bundle-work-lightbox.min.js'))
    .pipe(gulp.dest('./assets/js/')),

  gulp.src(cssAllArray)
    .pipe(concat('bundle-work-lightbox.min.css'))
    .pipe(cleanCSS({compatibility: 'ie8', keepSpecialComments: 0}))
    .pipe(gulp.dest('./assets/css/'))

  gulp.src(cssSPAArray)
    .pipe(concat('bundle-spa.min.css'))
    .pipe(cleanCSS({keepSpecialComments: 0}))
    .pipe(gulp.dest('./assets/css/'))
})

// Build wallpaper thumb
gulp.task('walls', function () {
  gulp.src('assets/walls/*.{jpg,jpeg,png}')
  .pipe(newer('assets/img/walls/460'))
  .pipe(imageResize({
    width: 320,
    crop: false,
    imageMagick: true,
    upscale: false,
    sharpen: 1
  }))
  .pipe(gulp.dest('assets/img/walls/320'))
})

// Create Images
gulp.task('images', function () {
  gulp.src('assets/raw/work/*.{jpg,jpeg,png}')
  .pipe(newer('assets/img/work/460'))
  .pipe(imageResize({
    width: 460,
    crop: false,
    imageMagick: true,
    upscale: false,
    sharpen: 1
  }))
  .pipe(gulp.dest('assets/img/work/460')),

  gulp.src('assets/raw/work/*.{jpg,jpeg,png}')
  .pipe(newer('assets/img/work/960'))
  .pipe(imageResize({
    width: 960,
    crop: false,
    imageMagick: true,
    upscale: false,
    sharpen: 1
  }))
  .pipe(gulp.dest('assets/img/work/960')),

  gulp.src('assets/raw/blog/*.{jpg,jpeg,png}')
  .pipe(newer('assets/img/blog'))
  .pipe(imageResize({
    width: 700,
    height: 420,
    crop: true,
    imageMagick: true,
    upscale: false,
    sharpen: 1
  }))
  .pipe(gulp.dest('assets/img/blog'))
})

// Create Favicons
gulp.task('favicon', function () {
  gulp.src('./assets/img/logo.png').pipe(favicons({
    appName: 'Lightrains Tech',
    appDescription: 'Lightrains Tech',
    background: '#FFFFFF',
    path: '/assets/favicons/',
    url: 'https://lightrains.com/',
    display: 'standalone',
    orientation: 'portrait',
    version: 1.0,
    logging: true,
    online: false,
    html: './_includes/favicons.html',
    replace: true,
    icons: {
      android: true,
      appleIcon: true,
      appleStartup: true,
      coast: false,
      favicons: true,
      firefox: true,
      opengraph: false,
      twitter: true,
      windows: false,
      yandex: false
    }
  }))
  .pipe(gulp.dest('./assets/favicons/'))
})

gulp.task('purify', function () {
  return gulp.src('./_site/assets/css/*.css')
    .pipe(purify(['./_site/assets/js/*.js', './_site/**/*.html']))
    .pipe(gulp.dest('./_site/assets/css/pure'))
})

gulp.task('watch', function () {
  gulp.watch('./assets/css/*.scss', runSequence('sass', 'minify'))
})
