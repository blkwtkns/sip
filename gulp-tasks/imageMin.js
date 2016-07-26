var gulp = require('gulp')
var imageMin = require('gulp-imagemin')

gulp.task('imageMin', function() {
	gulp.src('./assets/img/*')
		.pipe(imageMin())
		.pipe(gulp.dest('./public/img'))
})