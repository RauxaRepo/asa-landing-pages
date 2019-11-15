export default function () {



    let respForm = document.querySelector('.responsys-test form');
    let respSubmitBtn = document.querySelector('.submit-btn');
    let respSubmitted = document.querySelector('.submitted-params');
    




    respSubmitBtn.addEventListener('click', (e) => {
        e.preventDefault();
        let customerId = document.querySelector('input[name="id"]');
        let offerCode = document.querySelector('input[name="offer"]');
        let offerAuth = document.querySelector('input[name="auth"]');


        let respAction = `https://ifly.alaskaair.com/pub/sf/ResponseForm?_ri_=X0Gzc2X%3DYQpglLjHJlYQGpFzeG4zazfzed7zdDL54OnzaWLJPK52h8zcdFwp9jULOVXMtX%3DYQpglLjHJlYQGn3dtPkhRvhvfuuBUzeJlzbze1K52h8zcdFwp9jULO&_ei_=EufVZXM4FV0kRZ9aOTZMMUw`;

        let respParms = {
            CUSTOMER_ID_ : customerId.value,
            OFFER_CODE : offerCode.value,
            OFFER_AUTHORIZATION : offerAuth.value
        };

        respSubmitted.innerHTML = JSON.stringify(respParms, undefined, 2);;

        const url = respAction;
        fetch(url, {
            method : "POST",
            //body: new FormData(document.getElementById("inputform")),
            // -- or --
            mode: 'cors', // no-cors, *cors, same-origin
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
              },
            body : JSON.stringify(respParms)
        }).then(
            response => response.text() // .json(), etc.
            // same as function(response) {return response.text();}
        ).then(
            html => console.log(html)
        );
    });



  }
  