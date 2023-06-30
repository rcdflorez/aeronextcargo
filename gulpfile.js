const gulp = require('gulp');
const gulpIf = require('gulp-if');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass')(require('sass'));
const htmlmin = require('gulp-htmlmin');
const cssmin = require('gulp-cssmin');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const concat = require('gulp-concat');
const jsImport = require('gulp-js-import');
const sourcemaps = require('gulp-sourcemaps');
const htmlPartial = require('gulp-html-partial');
const clean = require('gulp-clean');
const rollup = require('rollup');
const nodeResolve = require('@rollup/plugin-node-resolve');
const babel = require('@rollup/plugin-babel');
const isProd = process.env.NODE_ENV === 'prod';

const htmlFile = [
    'src/*.html'
]

function html() {
    return gulp.src(htmlFile)
        .pipe(htmlPartial({
            basePath: 'src/partials/'
        }))
        .pipe(gulpIf(isProd, htmlmin({
            collapseWhitespace: true
        })))
        .pipe(gulp.dest('docs'));
}

function css() {
    return gulp.src('src/sass/style.scss')
        .pipe(gulpIf(!isProd, sourcemaps.init()))
        .pipe(sass({
            includePaths: ['node_modules']
        }).on('error', sass.logError))
        .pipe(gulpIf(!isProd, sourcemaps.write()))
        .pipe(gulpIf(isProd, cssmin()))
        .pipe(gulp.dest('docs/css/'));
}

function js() {
    return gulp.src('src/js/*.js')
        .pipe(jsImport({
            hideConsole: true
        }))
        .pipe(concat('all.js'))
        .pipe(gulpIf(isProd, uglify()))
        .pipe(gulp.dest('docs/js'));
}

function translateJs(){
    return rollup.rollup({
        input: './src/translateJs/translate.js',
        plugins: [
            nodeResolve.nodeResolve(),
            babel.babel()
        ]
    }).then(bundle => {
        return bundle.write({
          file: './docs/translateJs/translate.js',
          format: 'umd',
          name: 'library',
          sourcemap: true
        });
      });
}

function gMaps(){
    return rollup.rollup({
        input: './src/Gmaps/maps.js',
        plugins: [
            nodeResolve.nodeResolve(),
            babel.babel()
        ]
    }).then(bundle => {
        return bundle.write({
          file: './docs/Gmaps/maps.js',
          format: 'umd',
          name: 'library',
          sourcemap: true
        });
      });
}

function locales(){
    return gulp.src('src/locales/*.js')
    .pipe(gulp.dest('docs/locales'));
}

function img() {
    return gulp.src('src/img/*')
        .pipe(gulpIf(isProd, imagemin()))
        .pipe(gulp.dest('docs/img/'));
}

function serve() {
    browserSync.init({
        open: true,
        server: './docs',
        httpsBBBBB: {
            key: './key.pem',
            cert: './cert.pem'
        }
    });
}

function browserSyncReload(done) {
    browserSync.reload();
    done();
}


function watchFiles() {
    gulp.watch('src/**/*.html', gulp.series(html, browserSyncReload));
    gulp.watch('src/**/*.scss', gulp.series(css, browserSyncReload));
    gulp.watch('src/js/*.js', gulp.series(js, browserSyncReload));
    gulp.watch('src/translateJs/*.js', gulp.series(translateJs, browserSyncReload));
    gulp.watch('src/locales/*.js', gulp.series(locales, browserSyncReload));
    gulp.watch('src/Gmaps/*.js', gulp.series(gMaps, browserSyncReload));
    gulp.watch('src/img/**/*.*', gulp.series(img));

    return;
}

function del() {
    return gulp.src('docs/*', {read: false})
        .pipe(clean());
}

exports.css = css;
exports.html = html;
exports.js = js;
exports.del = del;
exports.serve = gulp.parallel(html, css, js, translateJs, gMaps, locales, img, watchFiles, serve);
exports.default = gulp.series(del, html, css, js, translateJs, gMaps, locales, img);