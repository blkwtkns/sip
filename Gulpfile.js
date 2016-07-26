var gulp = require('gulp')
var requireDir = require('require-dir')
var nodemon = require('gulp-nodemon')

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

gulp.task('gulpmon', function () {
  nodemon({
    script: './server/server.js',
    ext: 'js',
    env: { 'NODE_ENV': 'development' }
  })
})

gulp.task('default', ['gulpmon', 'browserify','sass', 'watch'])
