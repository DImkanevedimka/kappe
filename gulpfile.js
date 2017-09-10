var gulp = require("gulp");
var sass = require("gulp-sass");
var browserSync = require("browser-sync");
var concat = require("gulp-concat");
var uglify = require("gulp-uglifyjs");
var cssnano = require("gulp-cssnano");
var rename = require("gulp-rename");
var del = require("del");
var imagemin = require("gulp-imagemin"); 
var pngquant    = require("imagemin-pngquant");
var cache = require ("gulp-cache");
var autoprefixer = require("gulp-autoprefixer");
var concatCss = require('gulp-concat-css');
var pug = require('gulp-pug');
var plumber = require('gulp-plumber');



gulp.task("default", ["watch"])

gulp.task("sass", function(){
	gulp.src("app/scss/*.scss")
	.pipe(sass().on('error', sass.logError))
	.pipe(autoprefixer(["last 15 versions", "> 1%", "ie 8", "ie 7"], { cascade: true }))
	.pipe(gulp.dest("dist/css"))
	.pipe(browserSync.reload({stream: true}))
});

gulp.task("scriptslibs", function(){
	gulp.src([
		"app/libs/jquery/dist/jquery.min.js",
		"app/libs/slick/dist/slick.min.js"
		])
	.pipe(concat("libs.min.js"))
	.pipe(gulp.dest("app/js"))
});

gulp.task("css-libs", function(){
	gulp.src([
		"app/libs/slick/slick-theme.css",
		"app/libs/slick/slick.css"
		])
	.pipe(concatCss("libs.min.css"))
	.pipe(gulp.dest("app/css"))
});

gulp.task("browser-sync", function(){
	browserSync({
		server: {
			baseDir:"dist"
		},
		notify: false
	})
})

gulp.task('pug', function() {
    return gulp.src('app/pug/*.pug')
        .pipe(plumber())
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest('dist'));
});


gulp.task("img", function(){
	return gulp.src("app/img/**/*")
	.pipe(gulp.dest("dist/img"))
	.pipe(browserSync.reload({stream: true}))
});

gulp.task("scripts", function(){
	gulp.src("app/js/*.js")
	.pipe(gulp.dest("dist/js"))
	.pipe(browserSync.reload({stream: true}))
});

gulp.task("css", function(){
	gulp.src("app/css/*.css")
	.pipe(gulp.dest("dist/css"))
	.pipe(browserSync.reload({stream: true}))
});

gulp.task("fonts", function(){
	gulp.src("app/fonts/**/*")
	.pipe(gulp.dest("dist/fonts"))
	.pipe(browserSync.reload({stream: true}))
});

gulp.task("video", function(){
	gulp.src("app/video/*")
	.pipe(gulp.dest("dist/video"))
	.pipe(browserSync.reload({stream: true}))
});


/*gulp.task("clean", function() {
    del.sync("dist")
})

gulp.task("clear", function() {
    cache.clearAll()
  })*/


  gulp.task("watch", ["browser-sync", "css-libs", "css", "scriptslibs", "scripts", "sass", "fonts", "video", "img", "pug"],  function(){
  	gulp.watch("app/scss/*.scss", ["sass"])
  	gulp.watch("dist/*.html", browserSync.reload)
  	gulp.watch("app/js/*.js", ['scripts'])
  	gulp.watch("app/img/**/*", ['img'])
  	gulp.watch("app/fonts/**/*", ['fonts'])
  	gulp.watch("app/app/video/*", ['video'])
  	gulp.watch("app/pug/**/*", ['pug'])
  });