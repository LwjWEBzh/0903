var gulp = require('gulp');
var scss = require('gulp-sass');
var minCss = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var server = require('gulp-webserver');
var babel = require('gulp-babel');
//压缩css 编译scss
gulp.task('minCss', function() {
    return gulp.src('./src/scss/index.scss')
        .pipe(scss())
        .pipe(gulp.dest('./src/css'))
})

//压缩js
gulp.task('minJs', function() {
        return gulp.src(['./src/js/**/*.js', '!./src/js/commonjs/*.js'])
            .pipe(babel())
            .pipe(uglify())
            .pipe(gulp.dest('libs'))
    })
    //监听minCss
gulp.task('watch', function() {
    return gulp.watch('./src/scss/*.scss', gulp.series('minCss'))
})


//整合任务
gulp.task('dev', gulp.series('minCss', 'minJs', 'watch'))