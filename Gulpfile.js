'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var pump = require('pump');
var rename = require('gulp-rename');
var watch = require('gulp-watch');
var uglify = require('gulp-uglify');
 
gulp.task('sass', function () {
  return gulp.src('./src/**/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(rename('style.css'))
    .pipe(gulp.dest('dist/'));
});
 
gulp.task('watch', function () {
  gulp.watch('./src/**/*.scss', ['sass']);
});