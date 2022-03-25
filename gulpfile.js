const {src, dest, watch, series} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');

// Sass Auto-Compiler
function buildStyles() {
    return src('sass/**/*.scss')
    .pipe(sass())
    .pipe(dest('css'))
};

function watchStyles() {
    watch(['sass/**/*.scss'], buildStyles)
};

exports.sassAuto = series(buildStyles, watchStyles);

// JS Auto-Concat
function buildScripts() {
    return src([
        'js/src/pageTransitions.js',
        'js/src/rpsGame.js',
        'js/src/resultsTableScript.js',
    ])
    .pipe(concat('masterScript.js'))
    .pipe(dest('js/dist'))
};

function watchScripts() {
    watch([
        'js/src/pageTransitions.js',
        'js/src/rpsGame.js',
        'js/src/resultsTableScript.js',
    ], buildScripts)
};

exports.jsBundle = series(buildScripts, watchScripts);