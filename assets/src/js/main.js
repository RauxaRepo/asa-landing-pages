import '@babel/polyfill';
import 'whatwg-fetch';

//import sampleJs from './components/sample.component';
import responsysTest from './components/form.test';
import  introAnimation from './components/intro-animation';
import  draggableCards from './components/draggable-cards';
import  confetti from './components/confetti';
import metaTags from './components/meta.tags';
import socialSet from './components/social.set';

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
  socialSet();
  metaTags();
  responsysTest();
  introAnimation();
  draggableCards();
});
