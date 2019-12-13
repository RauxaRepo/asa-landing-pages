


export default function () {

    // updating meta tag based on environment
    let siteHost = `${window.location.protocol}//${window.location.host}`;
    let siteOgURL = document.querySelector('meta[property="og:url"]');
    let siteOgImage = document.querySelector('meta[property="og:image"]');
    siteOgURL.setAttribute('content', siteHost);
    siteOgImage.setAttribute('content', `${siteHost}/images/FB-Share.png`);

}
  
