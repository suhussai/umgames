var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var csso = require('gulp-csso');
var htmlUglify = require('gulp-minify-html');


gulp.task('default', function() {
  // place code for your default task here
    gulp.src('*.js')
    .pipe(concat('all.js'))
    .pipe(uglify())
    .pipe(gulp.dest('uploadUmGames'));
    gulp.src('*.css')
    .pipe(csso())
    .pipe(gulp.dest('uploadUmGames'));
    gulp.src('*.html')
    .pipe(htmlUglify())
    .pipe(gulp.dest('uploadUmGames'));

});
