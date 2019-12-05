import '@babel/polyfill';
import 'whatwg-fetch';

//import sampleJs from './components/sample.component';
import responsysTest from './components/form.test';
import  intoAnimation from './components/intro-animation';
import metaTags from './components/meta.tags';

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
  metaTags();
  responsysTest();
  intoAnimation();

});
