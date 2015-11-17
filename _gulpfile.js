// define gulp packages
var gulp  = require('gulp'),
    gutil = require('gulp-util');

// print a message in our first task
gulp.task('default', function() {
  return gutil.log('Wohoo, my first task!');
});