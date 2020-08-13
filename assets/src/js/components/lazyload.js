import LazyLoad from 'vanilla-lazyload/dist/lazyload.min';

const lazyLoadConstructor = () => {
  /* eslint-disable no-unused-vars */
  const lazyLoadImages = new LazyLoad({
    elements_selector: '[data-lazy-src]',
    class_loaded: 'lazy--loaded',
    class_loading: 'lazy--loading',
    data_src: 'lazy-src',
    data_srcset: 'lazy-srcset',
  });

  const lazyLoadBackgrounds = new LazyLoad({
    elements_selector: '[data-lazy-bg]',
    class_loaded: 'bg-lazy--loaded',
    class_loading: 'bg-lazy--loading',
    data_src: 'lazy-bg',
  }); 
  /* eslint-enable no-unused-vars */
};

const lazyloadInit = () => {
  lazyLoadConstructor();
};

export default lazyloadInit;
