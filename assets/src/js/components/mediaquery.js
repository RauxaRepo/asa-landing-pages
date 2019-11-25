import getBreakpoint from './breakpoints';

let bpNumber = function (bp) {
  return parseInt(bp.replace(/\D/g, ''), 10);
};

const mediaQueryList = {
  xs: window.matchMedia(`(max-width: ${bpNumber(getBreakpoint('sm')) - 1}px)`),
  sm: window.matchMedia(`(min-width: ${getBreakpoint('sm')}) and (max-width: ${bpNumber(getBreakpoint('md')) - 1}px)`),
 //smalldown: window.matchMedia(`(max-width: ${bpNumber(getBreakpoint('medium')) - 1}px)`),
  md: window.matchMedia(`(min-width: ${getBreakpoint('md')}) and (max-width: ${bpNumber(getBreakpoint('lg')) - 1}px)`),
  //mediumup: window.matchMedia(`(min-width: ${getBreakpoint('medium')})`),
  lg: window.matchMedia(`(min-width: ${getBreakpoint('lg')}) and (max-width: ${bpNumber(getBreakpoint('xl')) - 1}px)`),
  xl: window.matchMedia(`(min-width: ${getBreakpoint('xl')})`),
};

const mediaQueries = {
  
  // get current mediaQuery
  // =========================
  // This check what is your current breakpoint
  // use :
  // import { mediaQueries } from '[path]';
  // mediaQueries.current()

  current: () => {
    let bp;
    Object.keys(mediaQueryList).forEach((breakpoint) => {
      if (mediaQueryList[breakpoint].matches) {
        bp = breakpoint;
      }
    });
    return bp;
  },
  getBpRange: (bp) => {
    
    return mediaQueryList[bp];

  }
};

export { mediaQueries, mediaQueryList };
