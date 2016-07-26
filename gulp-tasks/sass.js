var gulp = require('gulp')
var sass = require('gulp-ruby-sass')

gulp.task('sass', function() {
	return sass('sass/style.sass')
		.pipe(gulp.dest('public/css'))
})