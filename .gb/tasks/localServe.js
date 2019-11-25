const { src, dest } = require('gulp');
const server = require('gulp-server-livereload');
const argv = require('yargs').argv;
const config = require('../config');

export function localServe() {
  let frameworkBuild = `${config.localDir}`;

  return src(frameworkBuild)
  .pipe(server({
    host: '127.0.0.1',
    livereload: true,
    open: true,
   // log: 'debug',
    clientConsole: true,
    port: 8081
  }));
  
}


