var gulp = require('gulp')
var requireDir = require('require-dir')

gulp.task('reset', function() {
	return;
})

// Imports all gulp tasks in /gulp-tasks folder
requireDir('./gulp-tasks');

gulp.task('watch', function() {
	gulp.watch('./client/**/*.js', ['browserify'])
	gulp.watch('./sass/style.sass', ['sass'])
	gulp.watch('./public/index.html', ['reset'])
})

gulp.task('default', ['connect', 'browserify', 'sass', 'reset', 'watch'])
