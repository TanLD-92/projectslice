/*
Gulpfile.js file for the tutorial:
Using Gulp, SASS and Browser-Sync for your front end web development - DESIGNfromWITHIN
http://designfromwithin.com/blog/gulp-sass-browser-sync-front-end-dev
Steps:
1. Install gulp globally:
npm install --global gulp
2. Type the following after navigating in your project folder:
npm install gulp gulp-util gulp-sass gulp-uglify gulp-rename gulp-minify-css gulp-notify gulp-concat gulp-plumber browser-sync --save-dev
3. Move this file in your project folder
4. Setup your vhosts or just use static server (see 'Prepare Browser-sync for localhost' below)
5. Type 'Gulp' and ster developing
*/

/* Needed gulp config */
var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var notify = require('gulp-notify');
var concat = require('gulp-concat');
var plumber = require('gulp-plumber');
var browserSync = require('browser-sync').create();
var neat = require('node-neat').includePaths;
var reload = browserSync.reload;

/* Setup scss path */
var paths = {
	scss: 'scss-grandtourane/**/*.scss'
};
/* Sass task */
gulp.task('sass', function() {
	gulp.src('scss-grandtourane/common.scss')
		.pipe(plumber())
		.pipe(sass({
			includePaths: ['scss'].concat(neat)
		}))
		.pipe(gulp.dest('css'))
		/* Reload the browser CSS after every change */
		.pipe(reload({
			stream: true
		}));
});

/* Reload task */
gulp.task('bs-reload', function() {
	browserSync.reload({stram:true});
});

/* Prepare Browser-sync for localhost */
gulp.task('browser-sync', function() {
	browserSync.init(['css/*.css'], {
		/*
		I like to use a vhost, WAMP guide: https://www.kristengrote.com/blog/articles/how-to-set-up-virtual-hosts-using-wamp, XAMP guide: http://sawmac.com/xampp/virtualhosts/
		*/
		//proxy: 'your_dev_site.url'
		/* For a static server you would use this: */
		server: {
			baseDir: './'
		}
	});
});

/* Watch scss, js and html files, doing different things with each. */
gulp.task('default', ['sass', 'browser-sync'], function() {
	/* Watch scss, run the sass task on change. */
	gulp.watch(['scss-grandtourane/*.scss', 'scss-grandtourane/**/*.scss'], ['sass']);
	/* Watch .html files, run the bs-reload task on change. */
	gulp.watch('*.html', ['bs-reload']);
	gulp.watch('**/*.html', ['bs-reload']);
});
