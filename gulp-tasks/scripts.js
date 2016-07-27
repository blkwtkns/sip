var gulp = require('gulp')
var browserify = require('browserify')
var source = require('vinyl-source-stream')
var buffer = require('vinyl-buffer')
var uglify = require('gulp-uglify')

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
})