var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var browserify = require('browserify');
var buffer = require('vinyl-buffer');
var source = require('vinyl-source-stream');
var browserSync = require('browser-sync');

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./public"
    });

    // Watches for changes in JS files - hotreload
    gulp.watch("./client/*.js", ['browserify']);

  	// Watches for changes in SCSS files - hotreload
    gulp.watch("./scss/*.scss", ['sass']);

    // Watches for changes in public/html files - hotreload
    gulp.watch("./public/*.html").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
  return gulp.src("./scss/style.scss")
    .pipe(sass())
    .pipe(gulp.dest("./public"))
    .pipe(browserSync.stream());
});

gulp.task('browserify', function () {
  return browserify('./client/app.js')
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(gulp.dest('./public'))
    .pipe(browserSync.stream());
});

gulp.task('default', ['serve', 'browserify']);
