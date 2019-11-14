import '@babel/polyfill';
import 'whatwg-fetch';

//import sampleJs from './components/sample.component';
import responsysTest from './components/form.test';

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

  responsysTest();

});
