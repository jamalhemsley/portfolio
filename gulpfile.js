var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var rename = require('gulp-rename');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

gulp.task('sass-compile', function() {
    gulp.src('./_build/_sass/**/*.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(autoprefixer({browsers: ['last 2 versions']}))
        .pipe(rename('style.min.css'))
        .pipe(gulp.dest('./assets/css/'))
        .pipe(reload({stream: true}));
});

gulp.task('sync', function() {
    browserSync.init({
        server: { baseDir: './' }
    });
});

gulp.task('serve', ['sass-compile', 'sync'], function() {
    gulp.watch('./_build/_sass/**/*.scss', ['sass-compile']);
    gulp.watch('**', {cwd: './'}, reload);
});