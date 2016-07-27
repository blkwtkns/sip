// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
  return gulp.src("./scss/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("./public/css"))
    .pipe(browserSync.stream());
});
