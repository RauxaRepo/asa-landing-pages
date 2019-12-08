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


			let cardGroup1 = allCardsshuffle([...document.querySelectorAll('.main-page-column:nth-child(1) .main-page-card')]);
			let cardGroup2 = allCardsshuffle([...document.querySelectorAll('.main-page-column:nth-child(2) .main-page-card')]);
			let cardGroup3 = allCardsshuffle([...document.querySelectorAll('.main-page-column:nth-child(4) .main-page-card')]);
			let cardGroup4 = allCardsshuffle([...document.querySelectorAll('.main-page-column:nth-child(5) .main-page-card')]);

			let cardGroupSingle1 = allCardsshuffle([...document.querySelectorAll('.main-page-column:not(.main-page-card-center) .main-page-card:nth-child(1)')]);
			let cardGroupSingle2 = allCardsshuffle([...document.querySelectorAll('.main-page-column:not(.main-page-card-center) .main-page-card:nth-child(2)')]);
			let cardGroupSingle3 = allCardsshuffle([...document.querySelectorAll('.main-page-column:not(.main-page-card-center) .main-page-card:nth-child(3)')]);
			let cardGroupSingle4 = allCardsshuffle([...document.querySelectorAll('.main-page-column:not(.main-page-card-center) .main-page-card:nth-child(4)')]);
			let cardGroupSingle6 = allCardsshuffle([...document.querySelectorAll('.main-page-column:not(.main-page-card-center) .main-page-card:nth-child(6)')]);
			let cardGroupSingle7 = allCardsshuffle([...document.querySelectorAll('.main-page-column:not(.main-page-card-center) .main-page-card:nth-child(7)')]);
			let cardGroupSingle8 = allCardsshuffle([...document.querySelectorAll('.main-page-column:not(.main-page-card-center) .main-page-card:nth-child(8)')]);

			let tlk = gsap.timeline({repeat: 0, repeatDelay: 0});
			
			// array of card wrappers
			let outer = [
				'.main-page-card-wrapper',
				'.main-page-card-wrapper-four',
				'.main-page-card-wrapper-three',
				'.main-page-card-wrapper-two'
			];

			//placing holder back in place
			gsap.to(outer,{duration:1.5,yPercent: 0, ease:'sine.in'});
			// timeline starts here
			tlk
			// timeScale function speeds up animation by 75%
			.timeScale(1)
			.to(cardGroup1,.8,{x:'0%', ease:'back.in',stagger:{amount:.2}}, 0)
			.to(cardGroup2,.8,{x:'0%', ease:'back.in',stagger:{amount:.2}}, 0)
			.to(cardGroup3,.8,{x:'0%', ease:'back.in',stagger:{amount:.2}}, 0)
			.to(cardGroup4,.8,{x:'0%', ease:'back.in',stagger:{amount:.2}}, 0)
			.to('.main-page-card.main-page-card-atlas.card-one-a',.8,{y:'102%',ease:'back.in'},0)
			.to('.main-page-card.main-page-card-atlas.card-one-b',.8,{y:'-102%',ease:'back.in'},0)
			.to(cardGroupSingle1,.8,{y:'408%', ease:'back.in',
				stagger: {
					amount: .2,
					onComplete: function(e) {
						gsap.to(e._targets,{duration:.25,autoAlpha:0});
					}
				},}, 0)
			.to(cardGroupSingle2,.8,{
				y:'306%',
				ease:'back.in',
				stagger: {
					amount: .2,
					onComplete: function(e) {
						gsap.to(e._targets,{duration:.25,autoAlpha:0});
					}
				},}, 0)
			.to(cardGroupSingle3,.8,{
				y:'204%',
				ease:'back.in',
				stagger: {
					amount: .2,
					onComplete: function(e) {
						gsap.to(e._targets,{duration:.25,autoAlpha:0});
					}
				},}, 0)
			.to(cardGroupSingle4,.8,{
				y:'102%',
				ease:'back.in',
				stagger: {
					amount: .2,
					onComplete: function(e) {
						gsap.to(e._targets,{duration:.25,autoAlpha:0});
					}
				},}, 0)
			.to(cardGroupSingle6,.8,{
				y:'-102%',
				ease:'back.in',
				stagger: {
					amount: .2,
					onComplete: function(e) {
						gsap.to(e._targets,{duration:.25,autoAlpha:0});
					}
				},}, 0)
			.to(cardGroupSingle7,.8,{
				y:'-204%',
				ease:'back.in',
				stagger: {
					amount: .2,
					onComplete: function(e) {
						gsap.to(e._targets,{duration:.25,autoAlpha:0});
					}
				},}, 0)
			.to(cardGroupSingle8,.8,{
				y:'-304%',
				ease:'back.in',
				stagger: {
					amount: .2,
					onComplete: function(e) {
						gsap.to(e._targets,{duration:.25,autoAlpha:0});
					}
				},}, 0);


		}
}

