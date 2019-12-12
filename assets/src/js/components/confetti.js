import {gsap, TweenMax, TimelineMax, Power, Linear, Quad} from 'gsap';
import getBreakpoint from './breakpoints';
import random from './draggable-cards';

export default function () {

    //VVRS
    let wrapper = document.querySelector('.confetti-container'),
      width = window.innerWidth,
      height = window.innerHeight,
      colorShuffle = (array) => array.sort(() => Math.random() - 0.5),
      colorArr = ['#55dded','#5599e0','#516673','#aaccdd','#41bbde','#41bbde','#ffffff','#f00000', '#ffff00'],
      num = 200;


		//CONFETTI
		function confettiSpread(){
      for (let i=0; i<num; i++){
        let confetti = document.createElement('div');
        wrapper.appendChild(confetti);
        confetti.style.position = 'absolute';
        confetti.style.backgroundColor = colorArr[Math.floor(Math.random() * colorArr.length)];
				//confetti.style.transformOrigin = '50% 50%';
        confetti.style.height = Math.random() * 20 + 'px';
        confetti.style.width = Math.random() * 10 + 'px';
        gsap.set(confetti,{x:Math.random() * width, y:Math.random() * height, rotation:Math.random() *45, scale: Math.random() * 1.2, skew: Math.random() * 30});
				//console.log(' confetti ', confetti);
			}
    }

		//RUN FUNCTIONS
    confettiSpread();
        
}

