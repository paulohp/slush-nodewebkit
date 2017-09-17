var NwBuilder = require('nw-builder');
var gulp  = require('gulp');
var shell = require('gulp-shell');

// Zip directory ( Working in Linux and OSX)
gulp.task('zip', shell.task([
  'zip -r app.nw .'
]));

gulp.task('compile', function () {
 
    var nw = new NwBuilder({
        files: ['./*'],
        platforms: ['win32', 'osx64', 'linux32', 'linux64'],
		version: 'v0.12.0'
    });
 
	nw.on('log',  console.log);

	nw.build().then(function () {
	   console.log('Compile Complete!');
	}).catch(function (error) {
		console.error(error);
	});
});
 
gulp.task('default', ['compile']);

// Run project
gulp.task('run', shell.task([
  'npm run run'
]));
