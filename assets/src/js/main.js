import '@babel/polyfill';
import 'whatwg-fetch';

//import sampleJs from './components/sample.component';
import track from './components/tracking';

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

documentReady( function() {

  track();

});
