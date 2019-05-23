/**
 * 自定义gulp任务类
 */

/*获取gulp*/
var gulp = require('gulp');

/**
 * css
 */
gulp.task('style', function() {
	gulp.src('css/main.css')
		.pipe(gulp.dest('dist/css'))
		.pipe(browserSync.reload({
			stream: true
		}));
});

/**
 * js
 */
/*js 压缩 混淆*/
var uglify = require('gulp-uglify');
gulp.task('script', function() {
	gulp.src('js/main.js')
		.pipe(uglify())
		.pipe(gulp.dest('dist/js'))
		.pipe(browserSync.reload({
			stream: true
		}));
});

/**
 * img
 */
gulp.task('img', function() {
	gulp.src('img/*.*')
		.pipe(gulp.dest('dist/img'))
		.pipe(browserSync.reload({
			stream: true
		}));
});

/**
 * lib
 */
gulp.task('lib', function() {
	gulp.src('lib/**/*')
		.pipe(gulp.dest('dist/lib'))
		.pipe(browserSync.reload({
			stream: true
		}));
});

/**
 * html
 */
gulp.task('html', function() {
	gulp.src('*.html')
		.pipe(gulp.dest('dist'))
		.pipe(browserSync.reload({
			stream: true
		}));
});

/**
 * font
 */
gulp.task('font', function() {
	gulp.src('font/**/*')
		.pipe(gulp.dest('dist/font'))
		.pipe(browserSync.reload({
			stream: true
		}));
});

/**
 * serve
 */
var browserSync = require('browser-sync');
var watch = require('gulp-watch');
gulp.task('serve', function() {
	browserSync({
		server: {
			baseDir: ['dist']
		},
	}, function(err, bs) {
		console.log(bs.options.getIn(["urls", "local"]));
	});

	watch('css/*.css', gulp.series('style'));
	watch('js/*.js', gulp.series('script'));
	watch('img/*.*', gulp.series('img'));
	watch('*.html', gulp.series('html'));
	watch('lib/**/*', gulp.series('lib'));
	watch('font/**/*', gulp.series('font'));
});