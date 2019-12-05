import {gsap, TweenMax, TimelineMax, Power, Linear} from 'gsap';
import getBreakpoint from './breakpoints';
//getBreakpoint('md');

export default function () {

	//*RANDOMIZE ARRAY AND PLACE ALL CARDS IN ARRAY*//
	//Math.random() - 0.5 is a random number that may be positive or negative, so the sorting function reorders elements randomly.
	let allCardsshuffle = (array) => array.sort(() => Math.random() - 0.5),
		//*Place all Cards except Title card in the Array*//
		allCards = allCardsshuffle([...document.querySelectorAll('.main-page-card:not(.main-page-card-title)')]),
		
		time = 1,
		timeInterval,
		//Footer
		theFooter = document.querySelector('.main-page-footer-slide'),
		//Title Cards
		titleCard = document.querySelector('.card-one-title'),
		//Left Cards
		cardLeftOne = document.querySelector('.card-left-one'),
		cardLeftTwo = document.querySelector('.card-left-two'),
		//Right Cards
		cardrRightOne = document.querySelector('.card-right-one'),
		cardrRightTwo = document.querySelector('.card-right-two'),
		//
		tl = gsap.timeline({repeat: 0, repeatDelay: 0}),
		tlScroll = gsap.timeline({repeat: -1, repeatDelay: 0}),
		tlScrollTwo = gsap.timeline({repeat: -1, repeatDelay: 0}),
		tlScrollThree = gsap.timeline({repeat: -1, repeatDelay: 0}),
		tlScrollFour = gsap.timeline({repeat: -1, repeatDelay: 0});


		//FADE IN TITLE CARDS AND OTHER CARDS
		tl.to(titleCard, time,{opacity:1, delay:time-0.5, ease:Linear})
			/*///.05, = stagger amount//'0.25' time between animation for cards///*/
			.staggerTo(allCards, time,{opacity:1, delay:Math.random() * time, ease:Linear},.05,'0.25');

		//SLIDE THE CARDS
		/*///
		Please Note:
		1) each div that conatins a set of cards is set to a percentage
		2) the 'top' area in the tween matches the position of the 'corresponding card' ie match the position of the prevoius card
		///*/
		tlScroll.to('.main-page-card-wrapper',13,{y:'-34%', ease:'none'});
		tlScrollTwo.to('.main-page-card-wrapper-two',19,{y:'131%', ease:'none'});
		tlScrollThree.to('.main-page-card-wrapper-three',15,{y:'-30%', ease:'none'});
		tlScrollFour.to('.main-page-card-wrapper-four',17,{y:'128%', ease:'none'});
		
		//SLIDE IN FOOTER & STOP CARD ANIMATION
		timeInterval = setInterval(raiseFooter, 5000);
		function raiseFooter(){
			console.log("Footer Slide In");
			clearInterval(timeInterval);
			tl.to(theFooter, time,{bottom:0, delay:time-0.5, ease:Linear, onComplete: function(){
				tlScroll.pause();
				tlScrollTwo.pause();
				tlScrollThree.pause();
				tlScrollFour.pause();
			}})
		}
	
}

