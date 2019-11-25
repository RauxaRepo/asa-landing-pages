import getBreakpoint from './breakpoints';

export default function () {



  // Moving cta button
  // =================

  // placing button and containers in variables
  let calloutBtn = document.querySelector('.callout__cta');
  let calloutFirst = document.querySelector('.callout > div:first-child');
  let calloutLast = document.querySelector('.callout > div:last-child');

  // creating Breakpoint to watch out for.
  let mq = window.matchMedia(`screen and (min-width: ${getBreakpoint('md')})`);
  var mqCheck = function( mq ) {
    // removing btn
    calloutBtn.remove();
    // checking match
    if(mq.matches) {
      // append to first div
      calloutFirst.appendChild(calloutBtn);
    } else {
      // append to last div
      calloutLast.appendChild(calloutBtn);
    } 
  }
  
  // checks at runtime
  mqCheck(mq);
  
  // attaching eventListener
  mq.addListener(mqCheck);

  // =================


  // Simple form validation
  // =================
  let formFields = [...document.querySelectorAll('.form__input:not(.form__input--zip):not(.form__input--email):not(.form__input--phone)')];
  let emptyValidation = function (inputVal, inputHolder) {
    if(inputVal === '') {
      inputHolder.classList.add('form__input--invalid');
    } else {
      inputHolder.classList.remove('form__input--invalid');
    }
  }
  
  formFields.forEach( (theInputHolder) => {
    let theInput = theInputHolder.querySelector('input');

    theInput.addEventListener('keyup', (e) => {
      emptyValidation(theInput.value, theInputHolder);
    });

    theInput.addEventListener('blur', (e) => {
      emptyValidation(theInput.value, theInputHolder);
    });
  });
  // =================


  // Email validation
  // =================
  let formEmail = document.querySelector('.form__input.form__input--email');
  let formEmailInput = formEmail.querySelector('input');


  let emailValidation = function(inputVal, inputHolder) {

    // Regex for email format
    let emailFormat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(!emailFormat.test(String(inputVal).toLowerCase())) {

      inputHolder.classList.add('form__input--invalid');
    } else {

      inputHolder.classList.remove('form__input--invalid');
    }
  }

  formEmailInput.addEventListener('keyup', (e) => {
    emailValidation(e.target.value, formEmail);
  });

  formEmailInput.addEventListener('blur', (e) => {
    emailValidation(e.target.value, formEmail);
  });
  // =================

  
  }
  