const gulp = require('gulp');
const babel = require('gulp-babel');
const postcss = require('gulp-postcss');
const eslint = require('gulp-eslint');
const stylelint = require('gulp-stylelint');

const onFilesChange = (event) => {
	console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
};

gulp.task('js', () => {
	return gulp.src('src/*.js')
		.pipe(eslint())
		.pipe(eslint.format())
		.pipe(eslint.failAfterError())
		.pipe(babel())
		.pipe(gulp.dest('dist'));
});

gulp.task('css', () => {
	return gulp.src('src/*.css')
		.pipe(stylelint({
			reporters: [
				{formatter: 'string', console: true}
			]
		}))
		.pipe(postcss())
		.pipe(gulp.dest('dist'));
});

gulp.task('watch', () => {
	gulp.watch('src/*.js', ['js']).on('change', (event) => onFilesChange(event));
	gulp.watch('src/*.css', ['css']).on('change', (event) => onFilesChange(event));
});

gulp.task('default', ['js', 'css', 'watch']);
