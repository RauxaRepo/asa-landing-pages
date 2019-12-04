import {gsap, TweenMax, TimelineMax, Power, Linear} from 'gsap';
import { AST_SymbolMethod } from 'terser';

export default function () {
  //Vars

	//*Randomize Array and place all Cards in the Array*//
	//Math.random() - 0.5 is a random number that may be positive or negative, so the sorting function reorders elements randomly.
	let allCardsshuffle = (array) => array.sort(() => Math.random() - 0.5);
	//*Place all Cards except Title card in the Array*//
	let allCards = allCardsshuffle([...document.querySelectorAll('.main-page-card:not(.main-page-card-title)')]);

	let time = 1,
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


		//Fade in Title-Card and other Cards
		tl.to(titleCard, time,{opacity:1, delay:time-0.5, ease:Linear})
			//.05, = stagger amount//'0.25' time between animation for cards
			.staggerTo(allCards, time,{opacity:1, delay:Math.random() * time, ease:Linear, onComplete:function(){
			
			}},.05,'0.25');

		//Slider the Cards	
		tlScroll.to('.main-page-card-wrapper',10,{top:'90.25%', ease:'none'});
		tlScrollTwo.to('.main-page-card-wrapper-two',15,{top:'80.25%', ease:'none'});
		tlScrollThree.to('.main-page-card-wrapper-three',10,{top:'70.25%', ease:'none'});
		tlScrollFour.to('.main-page-card-wrapper-four',17,{top:'60.25%', ease:'none'});
		
		//console.log(allCards);
}

