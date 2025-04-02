const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
// const uglify = require('gulp-uglify');

// Compila arquivos Sass
function styles() {
    return gulp.src('./src/styles/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(gulp.dest('./dist/css'));
}

// Minifica imagens
function images() {
    return gulp.src('./src/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'));
}

// // Minifica JavaScript
// function scripts() {
//     return gulp.src('./src/scripts/*.js')
//         .pipe(uglify())
//         .pipe(gulp.dest('./dist/js'));
// }

// // Define a tarefa padrão que executa todas as funções
exports.default = gulp.parallel(styles, images);

// // Observa alterações nos arquivos para compilar automaticamente
exports.watch = function() {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles));
//     gulp.watch('./src/scripts/*.js', gulp.parallel(scripts));
}

