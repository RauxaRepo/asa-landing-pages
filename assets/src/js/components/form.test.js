
const config = require('../../../../.gb/config');
const base64 = require('base-64');

export default function () {







   //let respSubmitBtn = document.querySelector('.submit-btn');
   // let respSubmitted = document.querySelector('.submitted-params');
    let landingUrl = window.location.href;
    let disctountRibbon = document.querySelector('.main-page-header');
    let discountLegal = document.querySelector('.main-page-footer-slide');
    let customerId = document.querySelector('input[name="id"]');
    let offerCode = document.querySelector('input[name="offer"]');
    let offerAuth = document.querySelector('input[name="auth"]');
    
    let campaignName = 'Offercode_Email';
    let emailName = 'email';
    let getToken;
    let getEndpoint;
    let getTokenUrl = `https://cors-anywhere.herokuapp.com/https://login5.responsys.net/rest/api/v1.3/auth/token?user_name=${config.creds.user}&password=${config.creds.pass}&auth_type=password`;


    // function to grab params from url
    let urlVars = function() {
        let vars = {};
        let parts = landingUrl.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
            vars[key] = value;
        });

        return vars;
    }

    // checking for customer ID to display discount ribbon
    if(urlVars()['CUSTOMER_ID_'] != undefined ) {
        disctountRibbon.classList.add('active');
        discountLegal.classList.add('active');
    }

    // 
    let uri = landingUrl.toString();
	if (uri.indexOf("?") > 0) {
	    var clean_uri = uri.substring(0, uri.indexOf("?"));
	    window.history.replaceState({}, document.title, clean_uri);
	}

    // setting inputs based on url params
    //customerId.value = urlVars()['CUSTOMER_ID_'] != undefined ? urlVars()['CUSTOMER_ID_'] : '';
    //offerCode.value = urlVars()['OFFER_CODE'] != undefined ? urlVars()['OFFER_CODE'] : '';
    //offerAuth.value = urlVars()['OFFER_AUTHORIZATION'] != undefined ? urlVars()['OFFER_AUTHORIZATION'] : '';
    //offerTracking.value = urlVars()['UTM'] != undefined ? urlVars()['UTM'] : '';
    /// need to add UTM |






    let respTriggerEmail = function(authToken, endPoint) {
        let url = `https://cors-anywhere.herokuapp.com/${endPoint}/rest/api/v1.3/campaigns/${campaignName}/${emailName}`;

        fetch(url, {
            method : "POST",
            mode: 'cors', // no-cors, *cors, same-origin
            headers: {
                'Authorization': authToken, 
                'Content-Type': 'application/x-www-form-urlencoded'
              },
            body : JSON.stringify(respParms)
        })
        .then(response => response.json())
        .then(json => console.log(json));
    }



    // getting Token
    /*
    respSubmitBtn.addEventListener('click', (e) => {
        e.preventDefault();

        let respParms = {
            CUSTOMER_ID_ : customerId.value,
            OFFER_CODE : offerCode.value,
            OFFER_AUTHORIZATION : offerAuth.value
        };

        console.log(respParms);
        console.log(getToken);
        console.log(getEndpoint);

        let url = `https://cors-anywhere.herokuapp.com/${getEndpoint}/rest/api/v1.3/campaigns/${campaignName}/${emailName}`;

        fetch(url, {
            method : "POST",
            mode: 'cors', // no-cors, *cors, same-origin
            headers: {
                'Authorization': getToken, 
                'Content-Type': 'application/x-www-form-urlencoded'
              },
            body : JSON.stringify(respParms)
        })
        .then(response => response.json())
        .then(json => console.log(json));

        
    });
    */

    fetch(getTokenUrl, {
        method : "POST",
        mode: 'cors', // no-cors, *cors, same-origin
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded'
          }
    })
    .then(response => response.json())
    .then(json => {
        console.log(json);
        //respTriggerEmail(json.authToken,json.endPoint);
        getToken = json.authToken;
        getEndpoint = json.endPoint;

    });



  }
  