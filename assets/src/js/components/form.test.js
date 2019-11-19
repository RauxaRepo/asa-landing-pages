
const config = require('../../../../.gb/config');
const base64 = require('base-64');

export default function () {







    let respSubmitBtn = document.querySelector('.submit-btn');
    let respSubmitted = document.querySelector('.submitted-params');
    let landingUrl = window.location.href;
    let customerId = document.querySelector('input[name="id"]');
    let offerCode = document.querySelector('input[name="offer"]');
    let offerAuth = document.querySelector('input[name="auth"]');

    let getTokenUrl = `https://cors-anywhere.herokuapp.com/https://login5.responsys.net/rest/api/v1.3/auth/token?user_name=${config.creds.user}&password=${config.creds.pass}&auth_type=password`;

    //




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
        e.preventDefault(base64.encode(config.creds.user));

        let tokenParms = {
            user_name : config.creds.user,
            password : config.creds.pass,
            auth_type : 'password'
        };


        fetch(getTokenUrl, {
            method : "POST",
            mode: 'cors', // no-cors, *cors, same-origin
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded'
              },
           // body : JSON.stringify(tokenParms)
            //body: `CUSTOMER_ID_=${customerId.value}&OFFER_CODE=${offerCode.value}&OFFER_AUTHORIZATION=${offerAuth.value}`,
        })
        .then(response => response.json())
        .then(json => console.log(json));
        
    });



  }
  