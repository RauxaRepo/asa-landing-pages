export default function () {



    let respForm = document.querySelector('.responsys-test form');
    let respSubmitBtn = document.querySelector('.submit-btn');
    let respSubmitted = document.querySelector('.submitted-params');
    




    respSubmitBtn.addEventListener('click', (e) => {
        e.preventDefault();
        let customerId = document.querySelector('input[name="id"]');
        let offerCode = document.querySelector('input[name="offer"]');
        let offerAuth = document.querySelector('input[name="auth"]');


        let respAction = `https://ifly.alaskaair.com/pub/sf/ResponseForm?CUSTOMER_ID_=${customerId.value}&OFFER_CODE=${offerCode.value}&OFFER_AUTHORIZATION=${offerAuth.value}`;


        var request = new XMLHttpRequest();
        request.open('POST', respAction, true);
        request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        request.send();

        respSubmitted.innerHTML = respAction;
    });


  }
  