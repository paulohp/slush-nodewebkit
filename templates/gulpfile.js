var gulp  = require('gulp')
var shell = require('gulp-shell')

// Zip directory ( Working in Linux and OSX)
gulp.task('zip', shell.task([
  'zip -r app.nw .'
]))

// Run project
gulp.task('run', shell.task([
  'node_modules/node-webkit-builder/bin/nwbuild --run ./'
]))

// Compile project
gulp.task('osx', shell.task([
  'node_modules/node-webkit-builder/bin/nwbuild -p osx ./'
]))

// Compile project
gulp.task('win', shell.task([
  'node_modules/node-webkit-builder/bin/nwbuild -p win ./'
]))

// Compile project
gulp.task('linux', shell.task([
  'node_modules/node-webkit-builder/bin/nwbuild -p linux32,linux64 ./'
]))