import {gsap, TweenMax, TimelineMax, Power, Linear} from 'gsap';
import getBreakpoint from './breakpoints';

export default function () {

	//*RANDOMIZE ARRAY AND PLACE ALL CARDS IN ARRAY*//
	//Math.random() - 0.5 is a random number that may be positive or negative, so the sorting function reorders elements randomly.
	let allCardsshuffle = (array) => array.sort(() => Math.random() - 0.5),
		//*Place all Cards except Title card in the Array using ('...' = spread)*//
		allCards = allCardsshuffle([...document.querySelectorAll('.active-card')]),
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
		mq.addListener(switchSize);
		

		//StackCards
		function stackCards(){
			console.log('title Click');
			allCards.forEach(function(item){
				item.style.position = 'absolute';
				gsap.to(item, time - 0.5,{
					stagger: 0.3, 
					x:offsetEl.left, //xPercent:offsetEl.left,
					y:offsetEl.top, //yPercent:offsetEl.left,
					transformOrigin: '50% 50%', 
					delay:Math.random() * 0.4, 
					ease:Linear
				});
			})
		}
}

