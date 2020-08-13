import '@babel/polyfill';
import 'whatwg-fetch';

//import sampleJs from './components/sample.component';
// import track from './components/tracking';
import accordion from './components/accordion';
import lazyloadInit from './components/lazyload';

function documentReady(fn) {
  if (document.readyState != 'loading') {
    fn();
  } else if (document.addEventListener) {
    document.addEventListener('DOMContentLoaded', fn);
  } else {
    document.attachEvent('onreadystatechange', function() {
      if (document.readyState != 'loading')
        fn();
    });
  }
}

documentReady(() => {
  accordion.init();
  lazyloadInit();
});
