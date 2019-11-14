const { src, dest } = require('gulp');
const compiler = require('webpack');
const webpack = require('webpack-stream');
const config = require('../config');
const gulpMerge = require('merge-stream');


export function jsCompile() {

  return gulpMerge(

    src([
      `${config.js.srcDir}/main.js`
    ])
    .pipe(webpack({
        mode: 'development',
        devtool: 'source-map',
        output: {
          filename: 'scripts.js'
        },
        watch: false,
        module: {
          rules: [
            {
              test: /\.js$/,
              loader: 'babel-loader',
              options: {
                babelrc: false,
                presets: [['@babel/preset-env']]
              }
            }
          ],
        },
  
    }, compiler, function(err, stats){
      
    }))
    .pipe(dest(`${config.local.appjs}`))


  )

  
}
