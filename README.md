# --------------

## getting started
i prefer Yarn but you can also use NPM  
'yarn install' or 'npm install'.  These will install all dependencies.  

# Run Locally
`yarn run devbuild` or `npm run devbuild`  
this will launch browswer http://127.0.0.1:8081/  
this will serve files from 'app' directory.

# Prod Build
you can run `yarn run prodbuild` or `npm run prodbuild`  
this does not launch browser  
this will trigger a build with minified files, you can find thes files in the 'assets/dist' directory.

# directories
.gb => this directory contains Gulp task and config file  
app => holder files to serve locally, unminified js and css  
assets/dist => minified files for css and js  
assets/src/images => source directory for images  
assets/src/js => holds all js files, everything has been split up into multiple components, but all combined into main.js file 
assets/src/scss => holds all sass files, sass has been seperated into components, pages and partials. main.scss combines everything.

