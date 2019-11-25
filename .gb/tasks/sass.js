const { src, dest } = require('gulp');
const gulpMerge = require('merge-stream');
const sasslint = require('gulp-sass-lint');
const postcss = require('gulp-postcss');
const sass = require('gulp-sass');
const rename = require("gulp-rename");
const discardcomments = require('postcss-discard-comments');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('autoprefixer');
const gulpif = require('gulp-if');
const argv = require('yargs').argv;
const config = require('../config');


export function sassCompile(){ 

  let templateSass = `${config.css.scssDir}/styles.scss`;
  let plugins = [
    autoprefixer (),
    discardcomments()
  ];

  let cssOutputStyle = argv.production ? 'compressed' : 'expanded';

  return gulpMerge(

    src([`${config.css.scssDir}/**/*`])
    .pipe(sasslint())
    .pipe(sasslint.format())
    .pipe(sasslint.failOnError()),

    src(templateSass)
    .pipe(gulpif(!argv.production, sourcemaps.init({loadMaps: true})))

    .pipe(sass({ outputStyle: cssOutputStyle }).on('error',sass.logError))

    .pipe(gulpif(argv.production, postcss(plugins)))

    .pipe(gulpif(!argv.production, sourcemaps.write('./')))

    // sends to local app folder
    .pipe(dest(config.local.appcss))
    .pipe(dest(config.css.distDir)),

  );
  
}
