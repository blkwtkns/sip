var gulp = require('gulp');

var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('browserify', function() {
  return browserify('./client/app.js')
  .bundle()
  .pipe(source('main.js'))
  .pipe(buffer())
  .pipe(uglify())
  .pipe(sourcemaps.init({loadMaps: true}))
  .pipe(sourcemaps.write('./maps'))
  .pipe(gulp.dest('./public/js/'));
});

var imageMin = require('gulp-imagemin');

gulp.task('imageMin', function() {
	gulp.src('./assets/img/*')
		.pipe(imageMin())
		.pipe(gulp.dest('./public/img'));
});

var bower = require('gulp-bower');

gulp.task('bower', function() {
  return bower('./client/bower_components')
    .pipe(gulp.dest('./public/bower_components/'))
});

var connect = require('gulp-connect');

gulp.task('connect', function () {
	connect.server({
		root: 'public',
		port: 3000
	});
});

var templateCache = require('gulp-angular-templatecache');

gulp.task('ngTemplateCache', function() {
	return gulp.src('./client/partials/*.html')
    .pipe(templateCache())
    .pipe(gulp.dest('./public'));
});

var sass = require('gulp-ruby-sass');

gulp.task('sass', function() {
	return sass('assets/sass/style.sass')
		.pipe(gulp.dest('public/css'));
});

console.log('you are l33t');

var nodemon = require('gulp-nodemon');

gulp.task('start', function () {
  nodemon({
  script: 'server.js',
  ext: 'js html',
  env: { 'NODE_ENV': 'development' }
  });
});

var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var uglify = require('gulp-uglify');

// buffer is needed to stream uglify methods

gulp.task('browserify', function() {
	// Grabs the app.js file
  return browserify('./client/app.js')
	// bundles it and creates a file called main.js
  .bundle()
  .pipe(source('main.js'))
  .pipe(buffer())
  .pipe(uglify())
  // saves it the public/js/ directory
  .pipe(gulp.dest('./public/js/'));
});

