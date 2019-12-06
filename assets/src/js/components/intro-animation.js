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
		//main page--Child div
		mainPageInner = document.querySelector('.main-page-inner'),
		//Footer
		theFooterSlide = document.querySelector('.main-page-footer-slide'),
		theFooter = document.querySelector('.main-page-footer'),
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
		3) xPercent:50, yPercent:50 = "translate(-50%, -50%)"
		4) x:100, y:200 = "translate3d(100px, 200px, 0)"
		///*/
		tlScroll.to('.main-page-card-wrapper',10,{yPercent:-50,/*y:'-34%',*/ ease:'none'});
		tlScrollTwo.to('.main-page-card-wrapper-two',3,{yPercent:50, ease:'none'});
		tlScrollThree.to('.main-page-card-wrapper-three',5,{yPercent:-50, ease:'none'});
		tlScrollFour.to('.main-page-card-wrapper-four',13,{yPercent:50, ease:'none'});
		/*OLD*/
		//tlScroll.to('.main-page-card-wrapper',13,{y:'-34%', ease:'none'});
		//tlScrollTwo.to('.main-page-card-wrapper-two',19,{y:'131%', ease:'none'});
		//tlScrollThree.to('.main-page-card-wrapper-three',15,{y:'-30%', ease:'none'});
		//tlScrollFour.to('.main-page-card-wrapper-four',17,{y:'128%', ease:'none'});
		

		//SLIDE IN FOOTER & STOP CARD ANIMATION
		timeInterval = setInterval(raiseFooter, 5000);
		function raiseFooter(){
			clearInterval(timeInterval);
			tl.to(theFooterSlide, time - 0.5,{bottom:0, delay:time-0.5, ease:Linear, onComplete: function(){
				tlScroll.pause();
				tlScrollTwo.pause();
				tlScrollThree.pause();
				tlScrollFour.pause();
				//EventListener
				titleCard.addEventListener('click', stackCards);
			}})
			//console.log("Footer Slide In");
		}


		//MOBILE VIEW 
		var mq = window.matchMedia('(max-width: 576px');

		function switchSize(e) {
			if (e.matches) {
				/* the viewport is mq pixels wide or less */
				mainPageInner.classList.add('main-page-inner-mobile');
				theFooter.classList.add('main-page-footer-mobile');
				console.log('mobile');
			} else {
				//Do something
				mainPageInner.classList.remove('main-page-inner-mobile');
				theFooter.classList.remove('main-page-footer-mobile');
			}
		}
		switchSize(mq);
		mq.addListener(switchSize);

		//PRESS TITLE CARD AND STACK CARDS
		let leftCardArr = [...document.querySelectorAll('.card-left-one .main-page-card')],
			leftCardArrTwo = [...document.querySelectorAll('.card-left-two .main-page-card')],
			rightCardArr = [...document.querySelectorAll('.card-right-one .main-page-card')],
			rightCardArrTwo = [...document.querySelectorAll('.card-right-two .main-page-card')];
		console.log('leftCardArr ',leftCardArr, );

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
			leftCardArr.forEach(function(item){
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
			/*gsap.to(allCards, time - 0.5,{
				stagger: 0.07, 
				x:titleCard.offsetLeft, 
				y:titleCard.offsetTop - 10, 
				transformOrigin: '50% 50%', 
				delay:Math.random() * 0.4, 
				ease:Linear
			});*/
		}
}

