var gulp = require('gulp');
var rename = require('gulp-rename');
var imageResize = require('gulp-image-resize');

gulp.task('default', function () {
  return gulp.src('assets/semantic/dist/*.css')
  .pipe(gulp.dest('assets/css')),
  gulp.src('assets/semantic/dist/*.js')
  .pipe(gulp.dest('assets/js')),
  gulp.src('assets/semantic/src/themes/default/assets/fonts/*')
  .pipe(gulp.dest('assets/css/themes/default/assets/fonts')),
  gulp.src('assets/raw/work/*.{jpg,jpeg,png}')
  .pipe(imageResize({
    width : 460,
    crop : false,
    upscale : false
  }))
  .pipe(gulp.dest('assets/img/work')),
  gulp.src('assets/raw/work/*.{jpg,jpeg,png}')
  .pipe(imageResize({
    width : 460,
    crop : false,
    upscale : false
  }))
  .pipe(gulp.dest('assets/img/work/460')),
  gulp.src('assets/raw/blog/*.{jpg,jpeg,png}')
  .pipe(imageResize({
    width : 500,
    height : 300,
    crop : true,
    upscale : false
  }))
  .pipe(gulp.dest('assets/img/blog'))
})
