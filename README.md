
# ASA Landing Page ( Accelerator )

## getting started
i prefer Yarn but you can also use NPM  
'yarn install'.  These will install all dependencies. 


### we have four envinronments:
develop
qa
stage
prod

Build files will be dropped in 'app' directory  
*please build files base on destination.  

develop => `yarn run devbuild` or `npm run devbuild`  
qa => `yarn run qabuild` or `npm run qabuild`  
stage/prod => `yarn run prodbuild` or `npm run prodbuild`

### Run Locally
*only local will launch browser  
`yarn run localbuild` 
this will launch browswer http://127.0.0.1:8081/  
this will serve files from 'app' directory.


### directories
.gb => this directory contains Gulp task and config file  
app => holder files to serve locally, unminified js and css  
assets/dist => minified files for css and js  
assets/src/images => source directory for images  
assets/src/js => holds all js files, everything has been split up into multiple components, but all combined into main.js file 
assets/src/scss => holds all sass files, sass has been seperated into components, pages and partials. main.scss combines everything.


## Flex grid system
Example of grid usage: 
this is a two column layouy on medium up, and single column on mobile 

```html
  <section class="container">
    <div class="row">
      <div class="column xs-12 md-6">
      </div>
      <div class="column xs-12 md-6">
      </div>
    </div>
  </section>
```

