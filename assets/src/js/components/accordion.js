import BadgerAccordion from 'badger-accordion';

let accordionInstance;
const accordion = {
  jsClass: '.js-accordion',
  constructor: () => {
    const accordions = Array.from(document.querySelectorAll(`${accordion.jsClass}`));
  
    accordions.forEach((acc) => {
      accordionInstance = new BadgerAccordion(acc, {
        headerClass: `${accordion.jsClass}-header`,
        panelClass: `${accordion.jsClass}-panel`,
        panelInnerClass: `${accordion.jsClass}-panel-inner`,
        initializedClass: 'accordion--initialized',
      });
    });
  },
  onResize: () => {
    window.addEventListener('resize', accordionInstance.calculateAllPanelsHeight());
  },
  init: () => {
    if (document.querySelector(`${accordion.jsClass}`)) {
      accordion.constructor();

      window.addEventListener('load', () => {
        // calculating panel height after all images are loaded
        accordionInstance.calculateAllPanelsHeight();
        accordion.onResize();  
      });
    }
  }
};

export default accordion;