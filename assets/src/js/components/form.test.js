
const config = require('../../../../.gb/config');
const base64 = require('base-64');

export default function () {



   //let respSubmitBtn = document.querySelector('.submit-btn');
   // let respSubmitted = document.querySelector('.submitted-params');
    let landingUrl = window.location.href;
    let disctountRibbon = document.querySelector('.main-page-header');
    let discountLegal = document.querySelector('.main-page-footer-slide');
    

    let bookBtn = document.querySelector('a[data-discount]');


    
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

    //


    // checking for customer ID to display discount ribbon
    if(urlVars()['utm_campaign'] != undefined ) {
        bookBtn.parentNode.classList.add('active')
        console.log(bookBtn);
        console.log(bookBtn.parentNode);
        disctountRibbon.classList.add('active');
        discountLegal.classList.add('active');
        bookBtn.classList.add('active');
        bookBtn.setAttribute('href',`https://www.alaskaair.com/planbook/?ODAI=${urlVars()['ODAI']}&offid=${urlVars()['offid']}&eml=${urlVars()['eml']}&utm_campaign=${urlVars()['utm_campaign']}&utm_medium=${urlVars()['utm_medium']}&utm_source=${urlVars()['utm_source']}`);
    }

    // 
    let uri = landingUrl.toString();
	if (uri.indexOf("?") > 0) {
	    var clean_uri = uri.substring(0, uri.indexOf("?"));
	    window.history.replaceState({}, document.title, clean_uri);
	}


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


    /*
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
        //respTriggerEmail(json.authToken,json.endPoint);
        getToken = json.authToken;
        getEndpoint = json.endPoint;

    });
    */



  }
  