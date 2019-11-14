const { src, dest } = require('gulp');
const clean = require('gulp-clean');
const gulpMerge = require('merge-stream');
const config = require('../config');

export function localImages() {
  let frameworkImages = `${config.local.imagesDir}`;
  let frameworkImageDist = `${config.local.appimg}`;


  return gulpMerge(
    src(frameworkImageDist,{allowEmpty: true})
    .pipe(clean({force: true})),

    src(frameworkImages)
    .pipe(dest(frameworkImageDist))
  );

  
}