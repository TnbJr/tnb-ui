const gulp = require('gulp');
const combine = require('gulp-scss-combine');
const concat = require('gulp-concat');

gulp.task('combine-scss', () => 
    gulp.src('src/stylesheets/styles.scss')
    .pipe(combine())
    .pipe(concat('styles.scss'))
    .pipe(gulp.dest('dist'))

);

gulp.task('default', ['combine-scss']);