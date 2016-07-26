var gulp = require('gulp')
var connect = require('gulp-connect')

gulp.task('connect', function () {
	connect.server({
		root: 'public',
		port: 3000
	})
})