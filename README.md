
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

Breakpoints are part of the grid.scss, we can easily pass new object with breakpoint if needed but will fallback to default if nothing is passed. 
*Would love to use Grid CSS but is not fully supported ( Edge & IE11 ), once supported we will updated accordingly.

default breakpoints: 
```scss
$breakpoints: (
  xs: 320px,
  sm: 576px,
  md: 768px,
  lg: 992px,
  xl: 1200px
);
```

Content(s) Container: 
the `.container` class is meant to be used as main container for content, it has width of 100% with max-width of 1440px, this can be globally updated by using the `$layout-max-width` variable. *variable can be found in variables.scss file.

```html
  <section class="container"></section>
```

the `.row` class defines the area which we will use columns for our layout/content, the container width is set to 100%, which means is the width id dictated by parent with class `.container`. 

the `.column` class defines element as a column, this also requires the additional class which determing the width of column. The width class is a combination of breakpoint( xs, sm, md, lg, xl ) and number of columns ( 1-12 ): 

`xs-12 md-8` => this is 12 columns in `xs` and 8 columns on `md` and up. 

Breakdown on column width by column number: 
```scss
  $grid-columns: (
    1: 08.333333333%,
    2: 16.66666667%,
    3: 25%,
    4: 33.33333333%,
    5: 41.66666667%,
    6: 50%,
    7: 58.33333333%,
    8: 66.66666667%,
    9: 75%,
    10: 83.033333333%,
    11: 91.66666667%,
    12: 100%
  );
```




this is a 4 column layout; on `xs` is 12 columns (100%), on `md` is 6 columns (50%), and on `lg` is 3 columns (25%).

```html
  <section class="container">
    <div class="row">
      <div class="column xs-12 md-6 lg-3"></div>
      <div class="column xs-12 md-6 lg-3"></div>
      <div class="column xs-12 md-6 lg-3"></div>
      <div class="column xs-12 md-6 lg-3"></div>
    </div>
  </section>
```

