var gulp = require('gulp')
var sass = require('gulp-ruby-sass')
var connect = require('gulp-connect')
var browserify = require('browserify')
var source = require('vinyl-source-stream')

gulp.task('connect', function () {
	connect.server({
		root: 'public',
		port: 3000
	})
})

gulp.task('browserify', function() {
	// Grabs the app.js file
    return browserify('./client/app.js')
    	// bundles it and creates a file called main.js
        .bundle()
        .pipe(source('main.js'))
        // saves it the public/js/ directory
        .pipe(gulp.dest('./public/js/'));
})

gulp.task('sass', function() {
	return sass('sass/style.sass')
		.pipe(gulp.dest('public/css'))
})

gulp.task('reset', function() {
	return
})

gulp.task('watch', function() {
	gulp.watch('./client/**/*.js', ['browserify'])
	gulp.watch('./sass/style.sass', ['sass'])
	gulp.watch('./public/index.html', ['reset'])
	////
})

gulp.task('default', ['connect', 'browserify', 'sass', 'watch'])
