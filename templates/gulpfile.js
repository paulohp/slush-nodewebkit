var gulp  = require('gulp');
var shell = require('gulp-shell');

// Zip directory ( Working in Linux and OSX)
gulp.task('zip', shell.task([
  'zip -r app.nw .'
]));

// Run project
gulp.task('run', shell.task([
  'npm run run'
]));

// Compile project
gulp.task('osx', shell.task([
  'npm run osx'
]));

// Compile project
gulp.task('win', shell.task([
  'npm run win'
]));

// Compile project
gulp.task('linux', shell.task([
  'npm run linux'
]));
