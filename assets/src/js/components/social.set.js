export default function () {
    let fbButton = document.querySelector('.fb-share-button');
    if(  fbButton  ){
        // updating meta tag based on environment
        let siteHost = `${window.location.protocol}//${window.location.host}`;
        let fbButtonAnchor = fbButton.querySelector('a');
        fbButton.setAttribute('data-href', siteHost);
        fbButtonAnchor.setAttribute('href', `https://www.facebook.com/sharer/sharer.php?u=${siteHost}&amp;src=sdkpreparse`);
        
    }

}