var autoprefixer = require('autoprefixer');
var gulp = require('gulp');
var plumber = require('gulp-plumber');
var postcss = require('gulp-postcss');
var sass = require('gulp-sass');
// var sass = require('gulp-ruby-sass');
var sassGlob = require('gulp-sass-glob');
var sourcemaps = require('gulp-sourcemaps');
var pcFocus = require('postcss-focus');
var pcFontpath = require('postcss-fontpath');
var stylelint = require('stylelint');
var extender = require('gulp-html-extend');

gulp.task('sass', function() {
	return gulp.src('../css_dev/*.scss')
	.pipe(plumber())
	.pipe(sourcemaps.init())
	.pipe(sassGlob())
	.pipe(sass({outputStyle: 'compact'}).on('error',sass.logError))
	.pipe(postcss(
		[pcFontpath({
			formats: [
	    {	type:'embedded-opentype', ext: 'eot' },
	    {	type: 'woff2', ext: 'woff2' },
	    {	type: 'woff', ext: 'woff' },
	    {	type: 'truetype', ext: 'ttf' }    
	  ]
	 })],
		[autoprefixer({browsers: ['last 3 versions']})],
		[pcFocus()]
		))	
	.pipe(sourcemaps.write('../css'))
	.pipe(gulp.dest('../css'))
});

gulp.task('extend', function () {
	gulp.src('../pages_dev/**/*.html')
	.pipe(extender({annotations:false,verbose:false,root:"../"}))
	.pipe(plumber())
	.pipe(gulp.dest('../pages'))
})

gulp.task('watch', function() {
	gulp.watch('../css_dev/**/*.scss', ['sass']),
	gulp.watch(['../pages_dev/**/*.html'], ['extend'])
});

gulp.task('default',['watch']);
