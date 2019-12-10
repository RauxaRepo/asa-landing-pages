import {gsap, TweenMax, TimelineMax, Power, Linear, Quad} from 'gsap';
import getBreakpoint from './breakpoints';

export default function () {
	
	let time = 1,
		timeInterval,
		htmlBody = document.getElementsByTagName('BODY')[0],

		//*RANDOMIZE ARRAY AND PLACE ALL CARDS IN ARRAY*//
		//Math.random() - 0.5 is a random number that may be positive or negative, so the sorting function reorders elements randomly.
		theCardsshuffle = (array) => array.sort(() => Math.random() - 0.5),
		//*Place all Cards in an Array using ('...' = spread)*//
		theCards = [...document.querySelectorAll('.main-page-card--question')],
		theColorCards = [...document.querySelectorAll('.main-page-card--color')],
		activeCardButton = [...document.querySelectorAll('.active-card--button')],
		wrapper = document.getElementById('drag-card-holder'),
		rightBounds = 350,
		leftBounds = 330,
		sm = window.matchMedia('(max-width: 576px)'),
		cardQuestionArr = [],

		//Answer Vars
		quest = document.querySelector('.quest'),
		rightAnswer = document.querySelector('.right-answer'),
		wrongAnswer = document.querySelector('.wrong-answer'),
		hideMainButtons =  document.querySelector('.hide-main-buttons'),
		nextQuestion = document.querySelector('.next-question'),
		nextQuestButton = document.querySelector('.next-question--button'),

		tldrag = gsap.timeline({repeat: 0, repeatDelay: 0});

		//FUNCTION ANSWER QUESTION
		function answerQuestions(e){
			console.log(e.target);
			theCards.forEach((item)=> {
				item.addEventListener('click', function(){
					hideMainButtons.classList.add('hide');
					nextQuestion.classList.add('show');
					quest.classList.add('hide');
					if ( rightAnswer ) {
						rightAnswer.classList.add('show');
					}else if ( wrongAnswer ) {
						wrongAnswer.classList.add('show');
					}
				});
			});
		}


		//FUNCTION CHANGE BACKGROUND COLOR
		function slidebackgroundColor(){
			theCards.push(cardQuestionArr);
			//when card is dragged off-screen place at the end of array
		}


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
				//console.log('RIGHT, ', pos);
				if(elmnt.offsetLeft > (wrapper.offsetLeft + rightBounds)){
					//console.log('Right Bounds');
					gsap.to(elmnt,  {duration:time - 0.5, x: '+=600', opacity: 1, ease:Quad.easInOut});
				}
				
			} else { //element is on left side of viewport
				//console.log('LEFT, ', pos);
				if(elmnt.offsetLeft < (wrapper.offsetLeft - leftBounds)){
					//console.log('Left Bounds');
					gsap.to(elmnt,  {duration:time - 0.5, x: '-=600', opacity: 1, ease:Quad.easInOut});
				}
			}

		 }

		//DRAGGABLE CARDS CODE
		function dragElement(elmnt) {
			let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
			//elmnt.onmousedown = dragMouseDown;
			if (document.getElementById(elmnt.id + wrapper)) {
				// if present, the wrapper is where you move the DIV from:
				document.getElementById(elmnt.id + wrapper).onmousedown = dragMouseDown;
			} else {
				// otherwise, move the DIV from an	ywhere inside the DIV:
				elmnt.onmousedown = dragMouseDown;
			}

			function dragMouseDown(e) {
				e = e || window.event;
				e.preventDefault();
				//stop drag over buttons
				if(e.target.classList.contains('active-card--button'))  {
					return false;
				}
				// get the mouse cursor position at startup:
				pos3 = e.clientX;
				pos4 = e.clientY;
				document.onmouseup = closeDragElement;
				// call a function whenever the cursor moves:
				document.onmousemove = elementDrag;
				//rotate 
				gsap.to(elmnt, {
					duration: time - 0.7,
					rotation: -40,
					ease:Quad.easInOut
				});
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
				elmnt.style.left = (elmnt.offsetLeft - pos1) + 'px';
				//check if card on left / right side of screen
				changeCardPos(elmnt);
			}
		  
			function closeDragElement() {
				// stop moving when mouse button is released://
				document.onmouseup = null;
				document.onmousemove = null;
				//rotate back
				gsap.to(elmnt, {
					duration: time - 0.7,
					rotation: 0,
					ease:Quad.easInOut
				});
			}
		}

		//TOUCH CONTROL
		function touchHandler(event) {
			var touch = event.changedTouches[0];
		
			var simulatedEvent = document.createEvent('MouseEvent');
				simulatedEvent.initMouseEvent({
				touchstart: 'mousedown',
				touchmove: 'mousemove',
				touchend: 'mouseup'
			}[event.type], true, true, window, 1,
				touch.screenX, touch.screenY,
				touch.clientX, touch.clientY, false,
				false, false, false, 0, null);
		
			touch.target.dispatchEvent(simulatedEvent);
			//event.preventDefault();
		}
		
		function init() {
			document.addEventListener('touchstart', touchHandler, true);
			document.addEventListener('touchmove', touchHandler, true);
			document.addEventListener('touchend', touchHandler, true);
			document.addEventListener('touchcancel', touchHandler, true);
		}


		//RANDOMIZE  Q1-Q10 CARDS
		//condition ? exprIfTrue : exprIfFalse
		function randomizeCards () {
			theCards.forEach(function(item){
				//randomize cards
				item.style.zIndex = Math.floor( random(5, 15) );
				//cursor pointer
				item.style.cursor = 'pointer';
				console.log('randomizeCards ');
			})
		}

		//DRAG Q1-Q10 CARDS
		function dragCards(){
			theCards.forEach(function(item){
				//drag cards
				dragElement(item);
			})
		}
		
		//MATCH MEDIA
		function media576Px(){
			if( sm.matches ){
				rightBounds = 250;
				leftBounds = 300;
				//console.log('rightBounds ',rightBounds, ' leftBounds ',leftBounds);
			}
		}

		//All EVENTLISTENERS
		function allEventListeners(){
			sm.addListener(media576Px);
		}


		//RUN FUNCTIONS
		spreadTheCards();//spread color cards
		randomizeCards();//randomize question cards
		dragCards();//drag question cards
		init();//start touch controls
		allEventListeners()//eventlisteners
		//answerQuestions();
        
}

