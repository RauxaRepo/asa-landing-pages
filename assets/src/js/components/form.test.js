export default function () {




    let respAction = `https://cors-anywhere.herokuapp.com/https://ifly.alaskaair.com/pub/sf/ResponseForm?_ri_=X0Gzc2X%3DYQpglLjHJlYQGgFos36gBzgXMh14GamwWrizcK2EI1U763lif3vfVXMtX%3DYQpglLjHJlYQGuzfTJhUEIT8siRmEjhuGmsUK2EI1U763lif3vf&_ei_=Ekj8HyAXXpL_SzLhl5oqKZ0`;


    let respSubmitBtn = document.querySelector('.submit-btn');
    let respSubmitted = document.querySelector('.submitted-params');
    let landingUrl = window.location.href;
    let customerId = document.querySelector('input[name="id"]');
    let offerCode = document.querySelector('input[name="offer"]');
    let offerAuth = document.querySelector('input[name="auth"]');




    // function to grab params from url
    let urlVars = function() {
        let vars = {};
        let parts = landingUrl.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
            vars[key] = value;
        });

        return vars;
    }

    // setting inputs based on url params
    customerId.value = urlVars()['CUSTOMER_ID_'] != undefined ? urlVars()['CUSTOMER_ID_'] : '';
    offerCode.value = urlVars()['OFFER_CODE'] != undefined ? urlVars()['OFFER_CODE'] : '';
    offerAuth.value = urlVars()['OFFER_AUTHORIZATION'] != undefined ? urlVars()['OFFER_AUTHORIZATION'] : '';



    



    // submitting function
    respSubmitBtn.addEventListener('click', (e) => {
        e.preventDefault();


        let respParms = {
            CUSTOMER_ID_ : customerId.value,
            OFFER_CODE : offerCode.value,
            OFFER_AUTHORIZATION : offerAuth.value
        };


        respSubmitted.innerHTML = JSON.stringify(respParms, undefined, 2);;

        const url = respAction;
   
        fetch(url, {
            method : "POST",
            mode: 'cors', // no-cors, *cors, same-origin
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body : JSON.stringify(respParms)
        })
        .then( response => {
            console.log(response.status);
            console.log(response);
            //return response.json()
        })
        .then(
            html => console.log(html)
        );
    });



  }
  