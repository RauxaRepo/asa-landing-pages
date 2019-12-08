import {gsap, TweenMax, TimelineMax, Power, Linear, Quad} from 'gsap';
import getBreakpoint from './breakpoints';

export default function () {
	
	let time = 1,
		timeInterval,
		htmlBody = document.getElementsByTagName("BODY")[0],

		//*RANDOMIZE ARRAY AND PLACE ALL CARDS IN ARRAY*//
		//Math.random() - 0.5 is a random number that may be positive or negative, so the sorting function reorders elements randomly.
		theCardsshuffle = (array) => array.sort(() => Math.random() - 0.5),
		//*Place all Cards in an Array using ('...' = spread)*//
		theCards = theCardsshuffle([...document.querySelectorAll('.main-page-card--question')]),
		theColorCards = [...document.querySelectorAll('.main-page-card--color')],
		flipTitle = document.querySelector('.card-title--flip'),
		//
		tldrag = gsap.timeline({repeat: 0, repeatDelay: 0});


		//COLOR CARDS--SPREAD
		function spreadTheCards(){
			let i = 0;
			for (let i = 0;i<theColorCards.length; i++){
				//rotation
				gsap.to(theColorCards[i], 1, {rotation: - 2.2 * i});
			}
		}

		//RANDOM MIN MAX
		function random(min, max) {
			return min + Math.random() * (max - min);
		}

		//GET SCREEN LEFT/RIGHT POSITION
		function getPosition(element) {
			var xPosition = 0;
			var yPosition = 0;
		 
			while (element) {
				xPosition += (element.offsetLeft - element.scrollLeft + element.clientLeft);
				yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
				element = element.offsetParent;
			}
			return {
				x: xPosition,
				y: yPosition
			};
		}
		//ACTION DEPENDING ON LEFT/RIGHT SIDE OF WINDOW 
		function changeCardPos(elmnt) {
			var ww = Math.max(document.documentElement.clientWidth, window.innerWidth || 0); //width of the window
			var pos = getPosition(elmnt); //position of the hovered element relative to window
			var ew = elmnt.offsetWidth; //width of the hovered element
		 
			if (pos.x > (ww / 2)) { //element is on right side of viewport
				//rotate
				gsap.to(elmnt, {
					duration: time - 0.7,
					rotation: '+=40',
					opacity: 0.7,
					ease:Quad.easInOut
				});
			} else { //element is on left side of viewport
				//rotate
				gsap.to(elmnt, {
					duration: time - 0.7,
					rotation: '-=40',
					opacity: 0.7,
					ease:Quad.easInOut
				});
			}

		 }

		//DRAGGABLE CARDS CODE
		function dragElement(elmnt) {
			var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
			if (document.getElementById(elmnt.id + 'wrapper')) {
				/* if present, the wrapper is where you move the DIV from:*/
				document.getElementById(elmnt.id + 'wrapper').onmousedown = dragMouseDown;
			} else {
				/* otherwise, move the DIV from anywhere inside the DIV:*/
				elmnt.onmousedown = dragMouseDown;
			}
		  
			function dragMouseDown(e) {
				e = e || window.event;
				e.preventDefault();
				// get the mouse cursor position at startup:
				pos3 = e.clientX;
				pos4 = e.clientY;
				document.onmouseup = closeDragElement;
				// call a function whenever the cursor moves:
				document.onmousemove = elementDrag;
				//check if card on left / right side of screen
				changeCardPos(elmnt);
			}
		  
			function elementDrag(e) {
				e = e || window.event;
				e.preventDefault();
				// calculate the new cursor position:
				pos1 = pos3 - e.clientX;
				pos2 = pos4 - e.clientY;
				pos3 = e.clientX;
				pos4 = e.clientY;
				// set the element's new position:
				elmnt.style.top = (elmnt.offsetTop - pos2) + 'px';
				elmnt.style.left = (elmnt.offsetLeft - pos1) + 'px';
				//Remove card if out of bounds
			}
		  
			function closeDragElement() {
				/* stop moving when mouse button is released:*/
				document.onmouseup = null;
				document.onmousemove = null;
				//rotate back
				gsap.to(elmnt, {
					duration: time - 0.7,
					rotation: '+=40',
					opacity: 1,
					ease:Quad.easInOut
				});
			}
		}


		//RANDOMIZE  Q1-Q10 CARDS
		function randomizeCards(){
			console.log('randomCards');
			theCards.forEach(function(item){
                //randomize cards
				item.style.zIndex = Math.floor( random(5, 15) );
				//cursor pointer
				item.style.cursor = "pointer";
			})
		}


		//DRAG Q1-Q10 CARDS
		function dragCards(){
			theCards.forEach(function(item){
				//drag cards
				dragElement(item);
			})
		}

		//FlIP TITLE CARD
		function flipTitleCard() {
			let flipInterval = setInterval(flippy,2000);
			function flippy(){
				clearInterval(flipInterval);
				//flipTitle.style.transform = 'rotateY(180deg)';
				gsap.to(flipTitle, {
					duration: time - 0.7,
					rotationY: -180,
					opacity: 0,
					ease:Quad.easInOut
				, 
				onComplete: function(){
					flipTitle.style.zIndex = '0';
				}});
			}
			
		}

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
		

		//RUN FUNCTIONS
		spreadTheCards();
		randomizeCards();
		dragCards();
		flipTitleCard();
        
}

