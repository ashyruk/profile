/**
 * Created by rybak on 03.05.2017.
 */
/*
 var gulp = require('gulp');
 var gulpLoadPlugins = require('gulp-load-plugins');
 // Объект содержит имена плагинов
 var plugins = gulpLoadPlugins();
 gulp.task('css', function(){
 return gulp.src('path/to/source')
 .pipe(plugins.gulpMinifyCss('main.js'))
 });
*/
//TODO:gulp-rev, gulp-unCSS, build, clean, csslint, restart
var gulp = require('gulp');
var minifyCss = require('gulp-minify-css');
const autoprefixer = require('gulp-autoprefixer');
var sass = require('gulp-sass');
var notify = require('gulp-notify');
var browserSync = require('browser-sync');
var reload      = browserSync.reload;
var uglify = require('gulp-uglify');
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var imagemin = require('gulp-imagemin');
var paths = {
    html:['./index.html'],
    css:['./css/*.scss'],
    js:['./js/*.js'],
    img:['./img/*','./img/svg/*','./img/skills/*']
};

gulp.task('mincss', function(){
   //noinspection JSUnresolvedFunction
    gulp.src(paths.css)
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer(({
        browsers: ['last 2 versions'],
        cascade: false}
    )))
    .pipe(minifyCss()).pipe(concat('main.css'))
    .pipe(gulp.dest('build'))
    .pipe(notify("Done!"))
    .pipe(reload({stream:true}));
});
gulp.task('html', function(){
    gulp.src(paths.html)
    .pipe(reload({stream:true}));
});
gulp.task('js', function(){
    gulp.src(paths.js)
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(uglify())
        .pipe(concat('app.js'))
        .pipe(gulp.dest('build'))
        .pipe(reload({stream:true}));
});
gulp.task('img',function () {
    gulp.src(paths.img).pipe(imagemin()).pipe(gulp.dest('build/img'));
});
gulp.task('watcher',function(){
    gulp.watch(paths.css, ['mincss']);
    gulp.watch(paths.html, ['html']);
    gulp.watch(paths.js, ['js']);
    gulp.watch(paths.img,['img']);
});
gulp.task('default', ['watcher', 'browserSync']);

gulp.task('browserSync', function() {
    browserSync({
        server: {
            baseDir: "./"
        },
        port: 8080,
        open: true,
        notify: false
    });
});