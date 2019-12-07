import {gsap, TweenMax, TimelineMax, Power, Linear} from 'gsap';
import getBreakpoint from './breakpoints';
//getBreakpoint('md');

export default function () {

	//*RANDOMIZE ARRAY AND PLACE ALL CARDS IN ARRAY*//
	//Math.random() - 0.5 is a random number that may be positive or negative, so the sorting function reorders elements randomly.
	let allCardsshuffle = (array) => array.sort(() => Math.random() - 0.5),
		//*Place all Cards except Title card in the Array using ('...' = spread)*//
		allCards = allCardsshuffle([...document.querySelectorAll('.main-page-card:not(.main-page-card-title):not(.main-page-card-white)')]),
		time = 1,
		timeInterval,
		htmlBody = document.getElementsByTagName("BODY")[0],
		//colors
		$flightblue = '#2774ae',
		$flightbgblue = '#48a9c5',
		//main page--Child div
		mainPageInner = document.querySelector('.main-page-inner'),
		//Footer
		theFooterSlide = document.querySelector('.main-page-footer-slide'),
		theFooter = document.querySelector('.main-page-footer'),
		//Title Cards
		titleCard = document.querySelector('.card-one-title'),
		//
		tl = gsap.timeline({repeat: 0, repeatDelay: 0}),
		tlScroll = gsap.timeline({repeat: -1, repeatDelay: 0});



		//FADE IN TITLE CARDS AND OTHER CARDS
		tl.to(titleCard, time,{opacity:1, delay:time-0.5, ease:Linear})
			/*///.05, = stagger amount//'0.25' time between animation for cards///*/
			.staggerTo(allCards, time,{opacity:1, delay:Math.random() * time, ease:Linear},.05,'0.25');


		gsap.set('.main-page-card-wrapper',{yPercent:-38});
		gsap.set('.main-page-card-wrapper-two',{yPercent:37.45});
		gsap.set('.main-page-card-wrapper-three',{yPercent:-36});
		gsap.set('.main-page-card-wrapper-four',{yPercent:35.45});

		tlScroll
		.timeScale(.5)
		.to('.main-page-card-wrapper',2,{yPercent:11.9, ease:'none'},0)
		.to('.main-page-card-wrapper-two',2,{yPercent:-12.45, ease:'none'},0)
		.to('.main-page-card-wrapper-three',2,{yPercent:13.9, ease:'none'},0)
		.to('.main-page-card-wrapper-four',2,{yPercent:-14.45, ease:'none'},0);

		

		//SLIDE IN FOOTER & STOP CARD ANIMATION
		timeInterval = setInterval(raiseFooter, 5000);
		function raiseFooter(){
			clearInterval(timeInterval);
			tl.to(theFooterSlide, time - 0.5,{bottom:0, delay:time-0.5, ease:Linear, onComplete: function(){
				tlScroll.pause();
				//EventListener
				titleCard.addEventListener('click', stackCards);
			}})
			//console.log("Footer Slide In");
		}



		//PRESS TITLE CARD AND STACK CARDS
		//Get Positon of Element 
		function offset(el) {
			var rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
			return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
		}

		var offsetEl = offset(document.getElementById('card-one-title'));
		//console.log(offsetEl.left, offsetEl.top);

		//StackCards
		function stackCards(){
			console.log('title Click');
			let outer = [
				'.main-page-column:nth-child(1)',
				'.main-page-column:nth-child(2)',
				'.main-page-column:nth-child(4)',
				'.main-page-column:nth-child(5)'
			];


			gsap.to('.main-page-card-wrapper',5,{yPercent: 0, ease:'none'});
			gsap.to('.main-page-card-wrapper-four',5,{yPercent: 0, ease:'none'});
			gsap.to('.main-page-card-wrapper-three',5,{yPercent: 0, ease:'none'});
			gsap.to('.main-page-card-wrapper-two',5,{yPercent: 0, ease:'none'});

			
		}
}

