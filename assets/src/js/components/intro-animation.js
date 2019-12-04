import {gsap, TweenMax, TimelineMax, Power, Linear} from 'gsap';

export default function () {
    //Vars
    let titleCard = document.querySelector('.card-one-title'),
        titleCardA = document.querySelector('.card-one-a'),
        titleCardB = document.querySelector('.card-one-b'),
        time = 1,
        //
        tl = gsap.timeline({repeat: 0, repeatDelay: 0});
        //tl  = new TimelineMax({repeat:0, repeatDelay:0}),


        //Fade in Title-Card
        tl.to(titleCard, {opacity:1, delay:time-0.5, duration: time, ease:Linear})
        tl.to(titleCardA,{opacity:1, delay:-0.5, duration: time, ease:Linear})
        tl.to(titleCardB,{opacity:1, delay:-0.5, duration: time, ease:Linear})
        //gsap.set(titleCard, {opacity: 0});
        //console.log('RUNNING')
}

