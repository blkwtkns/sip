var bower = require('gulp-bower');

gulp.task('bower', function() {
  return bower('./client/bower_components')
    .pipe(gulp.dest('./public/bower_components/'))
});
