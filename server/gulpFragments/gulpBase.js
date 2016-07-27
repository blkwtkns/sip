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
    gulp.watch("./js/*.js", ['browserify']);

  	// Watches for changes in SCSS files - hotreload
    gulp.watch("./scss/*.scss", ['sass']);

    // Watches for changes in public/html files - hotreload
    gulp.watch("./public/*.html").on('change', browserSync.reload);
});
