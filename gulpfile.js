const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const rename = require('gulp-rename');
const browserSync = require('browser-sync');
const reload = browserSync.reload;

gulp.task('sass-compile', function() {
    gulp.src('./_build/_sass/**/*.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(autoprefixer({browsers: ['last 2 versions']}))
        .pipe(rename('style.min.css'))
        .pipe(gulp.dest('assets/css/'))
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