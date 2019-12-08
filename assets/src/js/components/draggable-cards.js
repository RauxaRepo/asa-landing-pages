import {gsap, TweenMax, TimelineMax, Power, Linear} from 'gsap';
import getBreakpoint from './breakpoints';

export default function () {

	//*RANDOMIZE ARRAY AND PLACE ALL CARDS IN ARRAY*//
	//Math.random() - 0.5 is a random number that may be positive or negative, so the sorting function reorders elements randomly.
	let theCardsshuffle = (array) => array.sort(() => Math.random() - 0.5),
		//*Place all Cards except Title card in the Array using ('...' = spread)*//
		theCards = theCardsshuffle([...document.querySelectorAll('.main-page-card--question')]),
		theColorCards = [...document.querySelectorAll('.main-page-card--color')],
		time = 1,
		timeInterval,
		htmlBody = document.getElementsByTagName("BODY")[0],
		//
		tldrag = gsap.timeline({repeat: 0, repeatDelay: 0});


		//MOBILE VIEW 
		var mq = window.matchMedia('(max-width: 576px');

		function switchSizeDc(e) {
			if (e.matches) {
				/* the viewport is mq pixels wide or less */
				//theFooter.classList.add('main-page-footer-mobile');
				console.log('mobile');
			} else {
				//Do something
				//theFooter.classList.remove('main-page-footer-mobile');
			}
		}
		switchSizeDc(mq);
		mq.addListener(switchSizeDc);


		//MATH MIN-MAX RANDOM
		function random(min, max) {
			return min + Math.random() * (max - min);
		}

		
		//RANDOM CARDS
		function randomCards(){
			console.log('randomCards');
			theCards.forEach(function(item){
                //randomize cards
				item.style.zIndex = Math.floor(Math.random() * 11);
			})
		}

		//SPREAD-CARDS
		function spreadTheCards(){
			let i = 0;
			for (let i = 0;i<theColorCards.length; i++){
				//rotation
				gsap.to(theColorCards[i], 1, {rotation: - 2.2 * (i * 2)});
			}
		}
		
		//RUN FUNCTIONS
        randomCards()
        spreadTheCards();
}

