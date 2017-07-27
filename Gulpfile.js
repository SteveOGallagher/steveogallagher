'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var pump = require('pump');
var rename = require('gulp-rename');
var watch = require('gulp-watch');
var uglify = require('gulp-uglify');
var imagemin    = require('gulp-imagemin');
 
gulp.task('sass', function () {
  return gulp.src('./src/**/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(rename('style.css'))
    .pipe(gulp.dest('dist/'));
});

gulp.task('images', function() {
  return gulp.src('./src/assets/images/*')
    .pipe(gulp.dest('dist/images'));
});

gulp.task('fonts', function() {
  return gulp.src('./src/assets/fonts/*')
    .pipe(gulp.dest('dist/fonts'));
});

gulp.task('watch', function () {
  gulp.watch('./src/**/*.scss', ['sass']);
});

gulp.task('default', function() {
  gulp.start('sass', 'images', 'fonts', 'watch');
});
