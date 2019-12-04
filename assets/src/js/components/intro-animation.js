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
		cardleftone = document.querySelector('.card-left-one'),
		cardlefttwo = document.querySelector('.card-left-two'),
		//Right Cards
		cardrightone = document.querySelector('.card-right-one'),
		cardrighttwo = document.querySelector('.card-right-two'),
		//
		tl = gsap.timeline({repeat: 0, repeatDelay: 0});


		//Fade in Title-Card and other Cards
		tl
		.to(titleCard, time,{opacity:1, delay:time-0.5, ease:Linear})
		.staggerTo(allCards, time,{opacity:1, delay:Math.random() * time, ease:Linear},.05,'0.25');//.05, = stagger amount//'0.25' time between animation for cards
		console.log(allCards);
}

