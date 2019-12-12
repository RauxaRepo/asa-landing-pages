import {gsap, TweenMax, TimelineMax, Power, Linear, Quad} from 'gsap';
import getBreakpoint from './breakpoints';
import random from './draggable-cards';

export default function () {

    //VVRS
    let wrapper = document.querySelector('.confetti-container'),
      width = window.innerWidth,
      height = window.innerHeight,
      colorShuffle = (array) => array.sort(() => Math.random() - 0.5),
      colorArr = ['#55dded','#5599e0','#516673','#aaccdd','#41bbde','#41bbde'],
      num = 100;


		//CONFETTI
		function confettiSpread(){
      for (let i=0; i<num; i++){
        let confetti = document.createElement('div');
        wrapper.appendChild(confetti);
        confetti.style.position = 'absolute';
        confetti.style.backgroundColor = colorArr[Math.floor(Math.random() * colorArr.length)];
				//confetti.style.transformOrigin = '50% 50%';
        confetti.style.height = Math.random() * 20 + 'px';//Math.floor( random(4, 16) ) + 'px';
        confetti.style.width = Math.random() * 10 + 'px';//Math.floor( random(4, 10) ) + 'px';
        confetti.style.transform = 'rotate(45deg) scale(1.5)';// scale(Math.random() * 1.5) skewX(Math.random() * 20) skewY(Math.random() * -20) perspective(Math.random() * 2)';
        confetti.style.top = Math.random() * width;
        confetti.style.left = Math.random() * height - height;
        //confetti.style.zIndex = i+1;
				//TweenMax.to(confetti, 1, {rotation: -3 * i});		
				//console.log('window.innerWidth', window.innerWidth, 'window.innerHeight', window.innerHeight, ' confetti ', confetti)	
			}
    }

		//RUN FUNCTIONS
    confettiSpread();
        
}

