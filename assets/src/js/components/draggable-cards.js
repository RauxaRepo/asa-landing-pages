import {gsap, TweenMax, TimelineMax, Power, Linear, Quad} from 'gsap';
import getBreakpoint from './breakpoints';
import getClosest from './closest';

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
		wrapper = document.getElementById('drag-card-holder'),
		rightBounds = 0,
		leftBounds = 0,
		sm = window.matchMedia('(max-width: 576px)'),
		gradientBody = document.querySelector('.gradient--slide'),
		tl = gsap.timeline({repeat: 0, repeatDelay: 0});

		//*********************//
		let answeredCorrect = [];
		let answeredIncorrectly = [];
		let questionBtns = [...document.querySelectorAll('.active-card--button:not(.next-question--button)')];
		let correctCardCount = document.querySelector('.results-num.ten');
		let totalCardCount = document.querySelector('.results-num.hundred');
		let correctCardMessage = document.querySelector('.correct-text');
		let correctCardMessageOps = [
			'NICE TRY!',
			'GOOD WORK!',
			'AMAZING!'
		];

		totalCardCount.innerHTML = `/${theCards.length}`;


		questionBtns.forEach((btn) => {

			btn.addEventListener('click', (e) => {

				let btnHolder = e.target.parentNode.parentNode.parentNode;
				let question = btnHolder.querySelector('.quest');
				let answersBtns = e.target.parentNode;
				let rightAnswer = btnHolder.querySelector('.right-answer'); 
				let wrongAnswer =  btnHolder.querySelector('.wrong-answer');  
				let nextQuestion = e.target.parentNode.parentNode.querySelector('.next-question');
				let nextQuestButton = nextQuestion.querySelector('.next-question--button');

				if(e.target.classList.contains('right-answer-bttn')) {
					rightAnswer.classList.remove('hide');
					answeredCorrect.push(e.target.parentNode.parentNode.parentNode);
					correctCardCount.innerHTML = answeredCorrect.length;
					

				} else {
					wrongAnswer.classList.remove('hide');
					answeredIncorrectly.push(e.target.parentNode.parentNode.parentNode);
				}

				if(answeredCorrect.length < 5) {
					correctCardMessage.innerHTML = correctCardMessageOps[0];
				} else if (answeredCorrect.length > 4 && answeredCorrect.length < 8) {
					correctCardMessage.innerHTML = correctCardMessageOps[1];
				} else if (answeredCorrect.length > 7) {
					correctCardMessage.innerHTML = correctCardMessageOps[2];
				}
				
				

				btnHolder.classList.remove('na');
 
				question.classList.add('hide');
				answersBtns.classList.add('hide');
				nextQuestion.classList.remove('hide');

				nextQuestButton.addEventListener('click', (e) => {
					gsap.to(btnHolder.parentNode,  {duration:1, top: '+=100vh', ease:'sine.in'});
					gsap.to(btnHolder.parentNode,  {duration:1, x: '-=100%', yoyo: true, ease:'sine.inout'});
				});
				
				 
			});
		});



		//FUNCTION CHANGE BACKGROUND COLOR
		function slidebackgroundColor(){
      tl.to(gradientBody, { duration: time, backgroundImage:'linear-gradient(90deg, #48a9c5 -1%, #2774ae -15%)', ease:'sine.out'})//light blue to dark
        .addLabel('q1')
        .to(gradientBody, { delay: time, duration: time, backgroundImage:'linear-gradient(to left, #48a9c5 100%, #2774ae 100%)', ease:'sine.out'})// dark blue to light
        .addLabel('q3')
        .to(gradientBody, { delay: time, duration: time, backgroundImage:'linear-gradient(to right, #48a9c5 -5%, #2774ae -5%)', ease:'sine.out'})//light blue to dark
        .addLabel('q4')
        .to(gradientBody, { delay: time, duration: time, backgroundImage:'linear-gradient(to left, #48a9c5 100%, #2774ae 100%)', ease:'sine.out'})// dark blue to light
        .addLabel('q5')
        .to(gradientBody, { delay: time, duration: time, backgroundImage:'linear-gradient(to right, #48a9c5 -5%, #2774ae -5%)', ease:'sine.out'})//light blue to dark
        .addLabel('q6')
        .to(gradientBody, { delay: time, duration: time, backgroundImage:'linear-gradient(to left, #48a9c5 100%, #2774ae 100%)', ease:'sine.out'})// dark blue to light
        .addLabel('q7')
        .to(gradientBody, { delay: time, duration: time, backgroundImage:'linear-gradient(to right, #48a9c5 -5%, #2774ae -5%)', ease:'sine.out'})//light blue to dark
        .addLabel('q8')
        .to(gradientBody, { delay: time, duration: time, backgroundImage:'linear-gradient(to left, #48a9c5 100%, #2774ae 100%)', ease:'sine.out'})// dark blue to light
        .addLabel('q9')
        .to(gradientBody, { delay: time, duration: time, backgroundImage:'linear-gradient(to right, #48a9c5 -5%, #2774ae -5%)', ease:'sine.out'})//light blue to dark
        .addLabel('q10')
        .to(gradientBody, { delay: time, duration: time, backgroundImage:'linear-gradient(to left, #48a9c5 100%, #2774ae 100%)', ease:'sine.out'})// dark blue to light
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
					elmnt.classList.add('disable');
					//console.log('Right Bounds');
					
					gsap.to(elmnt,  {duration:1, top: '+=100vh', ease:'sine.in'});
					gsap.to(elmnt,  {duration:1, x: '+=100%', yoyo: true, ease:'sine.inout'});
				}
				
			} else { //element is on left side of viewport
				//console.log('LEFT, ', pos);
				if(elmnt.offsetLeft < (wrapper.offsetLeft - leftBounds)){
					elmnt.classList.add('disable');
					//console.log('Left Bounds');
					gsap.to(elmnt,  {duration:1, top: '+=100vh', ease:'sine.in'});
					gsap.to(elmnt,  {duration:1, x: '-=100%', yoyo: true, ease:'sine.inout'});
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
				
				// stopping drage over buttons and when card has 'na' class
				if(e.target.classList.contains('active-card--button') || e.target.classList.contains('na'))  {
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
					rotation: 0,
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
				item.style.zIndex = Math.floor( random(7, 17) );
				//cursor pointer
				item.style.cursor = 'pointer';
				
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
		//randomizeCards();//randomize question cards
		dragCards();//drag question cards
		init();//start touch controls
		allEventListeners()//eventlisteners
		//slidebackgroundColor();
        
}

