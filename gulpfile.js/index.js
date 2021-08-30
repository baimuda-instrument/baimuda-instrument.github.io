const { src, dest, series, parallel } = require('gulp');
var fs = require('fs');
const uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var ngAnnotate = require('gulp-ng-annotate');

var baseModuleJS = 'js/ng-module.js',
    routeJS = 'js/route/**/*.js',
    componentJS = 'js/component/**/*.js',
    serviceJS = 'js/service/**/*.js'

function build() {

    return src([baseModuleJS, routeJS, componentJS, serviceJS])
        .pipe(ngAnnotate())
        .pipe(uglify())
        .pipe(concat('app.js'))
        .pipe(dest('dist'));
}

exports.default = build;