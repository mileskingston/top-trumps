'use strict';

var gulp = require('gulp'),
	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer');

gulp.task('prod', function() {
   return gulp.src('./src/styles.scss')
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
		.pipe(autoprefixer({
    	browsers: ['> 5%', 'last 3 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('./src/assets/css'));
});

gulp.task('sass', function () {
  return gulp.src('./src/styles.scss')
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(gulp.dest('./src/assets/css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('**/styles.scss', ['sass']);
});

gulp.task('prefix', function () {
	return gulp.src('./src/assets/css/styles.css')
		.pipe(autoprefixer({
    	browsers: ['> 5%', 'last 3 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('./src/assets/css'));
});