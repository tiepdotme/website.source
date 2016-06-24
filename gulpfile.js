var gulp = require('gulp');
var rename = require('gulp-rename');
var imageResize = require('gulp-image-resize');
var favicons = require("gulp-favicons");

gulp.task('default', function () {
  return gulp.src('assets/semantic/dist/*.css')
  .pipe(gulp.dest('assets/css')),

  gulp.src('assets/semantic/dist/*.js')
  .pipe(gulp.dest('assets/js')),

  gulp.src('assets/semantic/src/themes/default/assets/fonts/*')
  .pipe(gulp.dest('assets/css/themes/default/assets/fonts'))
})

// Create Images
gulp.task('images', function() {
  gulp.src('assets/raw/work/*.{jpg,jpeg,png}')
  .pipe(imageResize({
    width : 460,
    crop : false,
    imageMagick: true,
    upscale : false
  }))
  .pipe(gulp.dest('assets/img/work/460')),

  gulp.src('assets/raw/work/*.{jpg,jpeg,png}')
  .pipe(imageResize({
    width : 960,
    crop : false,
    imageMagick: true,
    upscale : false
  }))
  .pipe(gulp.dest('assets/img/work/960')),

  gulp.src('assets/raw/blog/*.{jpg,jpeg,png}')
  .pipe(imageResize({
    width : 600,
    height : 340,
    crop : true,
    imageMagick: true,
    upscale : false
  }))
  .pipe(gulp.dest('assets/img/blog'))
});

// Create Favicons
gulp.task('favicon', function() {
  gulp.src("./assets/img/logo.png").pipe(favicons({
    appName: "Lightrains Tech",
    appDescription: "Lightrains Tech",
    background: "#FFFFFF",
    path: "/assets/favicons/",
    url: "http://lightrains.com/",
    display: "standalone",
    orientation: "portrait",
    version: 1.0,
    logging: true,
    online: false,
    html: "./_includes/favicons.html",
    replace: true,
    icons: {
      android: true,
      appleIcon: true,
      appleStartup: true,
      coast: false,
      favicons: true,
      firefox: true,
      opengraph: true,
      twitter: true,
      windows: false,
      yandex: false
    }
  }))
  .pipe(gulp.dest("./assets/favicons/"));
});
