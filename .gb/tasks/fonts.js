const { src, dest } = require('gulp');
const config = require('../config');

export function fonts() {
  let frameworkBuild = `${config.local.fontsDir}`;
  
return src(frameworkBuild)
// sends to local app folder
.pipe(dest(config.local.appfonts))
  
}