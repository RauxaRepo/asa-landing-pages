const { src, dest } = require('gulp');
const gulpMerge = require('merge-stream');
const sasslint = require('gulp-sass-lint');
const postcss = require('gulp-postcss');
const sass = require('gulp-sass');
const rename = require("gulp-rename");
const discardcomments = require('postcss-discard-comments');
const sourcemaps = require('gulp-sourcemaps');
const  autoprefixer = require('autoprefixer');
const config = require('../config');


export function sassCompile(){ 

  let templateSass = `${config.css.scssDir}/main.scss`;
  let bootstrap = `${config.css.scssDir}/bootstrap.scss`;
  let plugins = [
    autoprefixer (),
    discardcomments()
  ];

  return gulpMerge(

    src([`${config.css.scssDir}/**/*`])
    .pipe(sasslint())
    .pipe(sasslint.format())
    .pipe(sasslint.failOnError()),

    src(templateSass)
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(sass({ outputStyle: 'expanded' }).on('error',sass.logError))
    .pipe(postcss(plugins))
    .pipe(sourcemaps.write('.'))
    // adding name
    .pipe(rename({basename: 'styles'}))
    // sends to local app folder
    .pipe(dest(config.local.appcss)),

    src(templateSass)
    .pipe(sass({ outputStyle: 'compressed'}).on('error',sass.logError))
    .pipe(postcss(plugins))
    // adding name
    .pipe(rename({basename: 'styles'}))
    // sends to dist folder
    .pipe(dest(config.css.distDir)),

    /*
    src(bootstrap)
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: 'expanded' }).on('error',sass.logError))
    .pipe(postcss(plugins))
    .pipe(sourcemaps.write('.'))
    // adding name
    .pipe(rename({basename: 'bootstrap'}))
    // sends to local app folder
    .pipe(dest(config.local.appcss)),

    src(bootstrap)
    .pipe(sass({ outputStyle: 'compressed'}).on('error',sass.logError))
    .pipe(postcss(plugins))
    // adding name
    .pipe(rename({basename: 'bootstrap'}))
    // sends to dist folder
    .pipe(dest(config.css.distDir))
    */

  );
  
}
