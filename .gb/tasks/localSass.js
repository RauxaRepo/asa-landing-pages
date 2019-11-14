
const { src, dest } = require('gulp');
const postcss = require('gulp-postcss');
const sass = require('gulp-sass');
const rename = require("gulp-rename");
const discardcomments = require('postcss-discard-comments');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('autoprefixer');
const config = require('../config');



export function localSass() {
  let plugins = [
    autoprefixer(),
    discardcomments(),
  ];
  let frameworkBuild = `${config.local.scssDir}`;

  return src(frameworkBuild)
  
  .pipe(sourcemaps.init())
  .pipe(sass({ outputStyle: 'expanded' }).on('error',sass.logError))


  .pipe(postcss(plugins))

  
  .pipe(sourcemaps.write('.'))

  // sends to local app folder
  .pipe(dest(config.local.appcss))
}
