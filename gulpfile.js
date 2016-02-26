var gulp = require('gulp');
var ghPages = require('gulp-gh-pages');


gulp.task('css', function() {
    return gulp.src('./css/**/*.css')
        .pipe(gulp.dest('./dist/css'))
});

gulp.task('js', function() {
    return gulp.src('./js/**/*.js')
        .pipe(gulp.dest('./dist/js'))
});


gulp.task('img', function() {
    return gulp.src('./img/**/*')
        .pipe(gulp.dest('./dist/img'))
});


gulp.task('index', function() {
    return gulp.src('./index.html')
        .pipe(gulp.dest('./dist'))
});

gulp.task('default', ['css','js','img','index'], function() {
  return gulp.src('./dist/**/*')
    .pipe(ghPages());
});
