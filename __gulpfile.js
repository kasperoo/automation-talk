var gulp = require('gulp'), 
	sass = require('gulp-sass'),
	sourcemaps = require('gulp-sourcemaps');

gulp.task('compile-css', function() { 
	return gulp.src('./app/styles/**/*.scss')
		.pipe(sourcemaps.init())
			.pipe(sass())
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest('./dist/styles'));
});

gulp.task('watch', function() { 
    gulp.watch('./app/styles/**/*.scss', ['compile-css']); 
});


gulp.task('default', ['watch']);