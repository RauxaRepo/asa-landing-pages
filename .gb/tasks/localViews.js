const { src, dest } = require('gulp');
const config = require('../config');

export function localViews() {
  let frameworkBuild = `${config.local.viewsDir}`;
  
  return src(frameworkBuild)
  .pipe(dest(config.localDir));
  
}