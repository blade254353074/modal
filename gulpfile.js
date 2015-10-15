(function() {
    'use strict';
    // npm install gulp gulp-sass gulp-minify-css gulp-autoprefixer gulp-uglify gulp-clean gulp-plumber
    var gulp = require('gulp'),
        sass = require('gulp-sass'), // css预处理器 —— sass
        minifycss = require('gulp-minify-css'), // css压缩
        autoprefixer = require('gulp-autoprefixer'), // css兼容前缀处理
        uglify = require('gulp-uglify'), // js压缩混淆工具
        clean = require('gulp-clean'), // 目录清理工具
        plumber = require('gulp-plumber'); // 处理报错，让任务继续进行


    function errrHandler(e) {
        console.error(e); // 打印获取的错误
    }

    var src = 'src/', // 开发路径
        dist = 'dest/', // 服务根目录
        assets = dist + 'assets/'; // js, css, img资源输出目录

    gulp.task('sass', function() {
        return gulp.src('src/assets/css/*.scss')
            .pipe(plumber({
                errorHandler: errrHandler
            }))
            .pipe(sass.sync())
            .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'ios 6', 'android 2.3.4')) // 添加兼容前缀
            .pipe(gulp.dest(assets + 'css'));
    });

    gulp.task('style', function() {
        return gulp.src('src/assets/css/*.css')
            .pipe(plumber({
                errorHandler: errrHandler
            }))
            .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'ios 6', 'android 2.3.4')) // 添加兼容前缀
            .pipe(gulp.dest(assets + 'css'));
    });

    gulp.task('script', function() {
        return gulp.src('src/assets/js/*.js')
            .pipe(plumber({
                errorHandler: errrHandler
            }))
            .pipe(uglify()) // 将js混淆并压缩
            .pipe(gulp.dest(assets + 'js'));
    });

    gulp.task('html', function() {
        return gulp.src('src/**/*.html')
            .pipe(plumber({
                errorHandler: errrHandler
            }))
            .pipe(gulp.dest(dist));
    });

    gulp.task('clean', function() {
        return gulp.src(dist, {
                read: false
            })
            .pipe(clean());
    });

    gulp.task('watch', function() {
        gulp.watch('src/assets/css/*.scss', ['sass']);
        gulp.watch('src/assets/css/*.css', ['style']);
        gulp.watch('src/assets/js/*.js', ['script']);
        gulp.watch('src/**/*.html', ['html']);
    });

    gulp.task('default', ['clean'], function() {
        gulp.start('html');
        gulp.start('sass');
        gulp.start('style');
        gulp.start('script');
    });

}());
