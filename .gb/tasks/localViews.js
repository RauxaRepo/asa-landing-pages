const { src, dest } = require('gulp');
const removeHtmlComments = require('gulp-remove-html-comments');
const config = require('../config');

export function localViews() {
  let frameworkBuild = `${config.local.viewsDir}`;
  
  return src(frameworkBuild)
  .pipe(removeHtmlComments())
  .pipe(dest(config.localDir));
  
}