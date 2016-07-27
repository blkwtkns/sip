var gulp = require('gulp');

gulp.task('reset', function() {
	return gulp.src('./client/partials/*.html')
    .pipe(gulp.dest('./public'))
});