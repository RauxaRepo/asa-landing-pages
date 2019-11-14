import getBreakpoint from './breakpoints';
import { mediaQueryList } from './mediaquery';

export default function () {
  let elBackground = [...document.querySelectorAll('[data-image]')];
  let imageSrcSet = {};

  // function sets breakpoint based on:
  // ======================
  // element
  // image
  // breakpoint
  // order is just looking for 'Middle',
  // anything considered Middle will be placed within a min and max.
  // Everything else only has a min.
  
  // USAGE
  // ================
  // data-image="small=image.jpg,medium=image.jpg"

  let setBackground = function (el, image, breakpoint, order) {
    let breakpointCheck = function (e) {
      if (e.matches) {
        el.style.backgroundImage = `url(${image})`;
      }
    };

    let theBreak = order === 'Middle' ? mediaQueryList[breakpoint] : window.matchMedia(`(min-width: ${getBreakpoint(breakpoint)})`);
    breakpointCheck(theBreak);
    theBreak.addListener(breakpointCheck);
  };

  if (elBackground.length !== 0) {
    elBackground.forEach( (el, i) => {

      let imageSet = el.getAttribute('data-image').split(',');

      // loops and gets breakpoint and image
      imageSet.forEach( (singleBreakpoint, o) => {
        let tmp = singleBreakpoint.split('=');
        let breakpoint = tmp[0];
        let image = tmp[1];

        // puts in object based on breakpoint(key) and image(src)
        // 'none' can be added as image source,
        // this will indicate no image for that breakpoint.
        
      
        if (image !== '' && image === 'none') {
          imageSrcSet[breakpoint] = '';
        } else {
          imageSrcSet[breakpoint] = image;

          if(imageSet.length === 1) {
            imageSrcSet.medium = image;
          }
        }

        // call function when done looping.
        if (imageSet.length === (o + 1)) {

          // specific rule when there is a single image
          if (Object.keys(imageSrcSet).length === 1) {
            
            setBackground(el, Object.values(imageSrcSet)[0], 'xsmall', '');
          } else {
            // when more then one image this block will:
            // - determine first image | will cascade down
            // - determine last image | will cascade up
            // - determine all images in-between | will only be place within breakpoint range
            // * addition rule that if a breakpoint includes 'none', it will not display image
            // for that breakpoint

            Object.keys(imageSrcSet).forEach( (bp, p) => {
              if (bp === Object.keys(imageSrcSet)[0]) {
                // this checks how many brekpoints are below the first brekpoint in object.
                // any breakpoint under first breakpoint in object will inherit the image.
                Object.keys(mediaQueryList).every( (item) => {
                  if ( item === Object.keys(imageSrcSet)[0]) {
                    setBackground(el, imageSrcSet[Object.keys(imageSrcSet)[0]], item, 'Middle');
                    return false;
                  }
                  setBackground(el, imageSrcSet[Object.keys(imageSrcSet)[0]], item, 'Middle');
                  return true;
                });
              } else if (bp === Object.keys(imageSrcSet)[Object.keys(imageSrcSet).length - 1]) {
                // checks for last breakpoint
                // any breakpoints above this one will inherit the image.
                setBackground(el, imageSrcSet[Object.keys(imageSrcSet)[Object.keys(imageSrcSet).length - 1]], bp, 'Last');
              } else {
                // default action is to add image to breakpoint using min max range.
                setBackground(el, imageSrcSet[Object.keys(imageSrcSet)[p]], bp, 'Middle');
              }
            });
          }
        }
      });
    });
  }
}
